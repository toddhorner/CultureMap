// const $ = require('jquery');
// import 'bootstrap';
import 'leaflet'
L.esri = require('esri-leaflet');
import 'leaflet.markercluster';
import 'leaflet.markercluster.layersupport';

import {
  base_map_URL,
  feature_layer_URL,
  asset_categories,
  palette,
  category_field,
  iconURL,
  iconExtension,
  zoomDisableCluster
} from './config.js';

import * as util from './util.js';

//Show about section on launch
// $('#aboutModal').modal('show')

// Initialize the Map
let mymap = L.map('map', {
  zoomControl: false,
  scrollWheelZoom: false
})

//Add zoom control
let zoom = new L.Control.Zoom({
  position: 'bottomright'
}).addTo(mymap);

mymap.setView([42.39, -71.035], 16);

// Add the basemap
L.tileLayer(base_map_URL, {
  maxZoom: 20
}).addTo(mymap);

// Dictionary for storing all layers.
let layers = {};

//Query all approved cultural assets,
//i.e. where STATUS = 1, then create Layers
//from the resulting geoJSON, by cultural asset cateogry
let query = L.esri.query({
  url: feature_layer_URL
}).where("STATUS = 1").run(function(error, featureCollection, response) {

  // $('#aboutModal').modal('show')

  //Loop through all the asset categories,
  //creating a layer for each one.
  for (let cat in asset_categories) {

    //Icons for non-clustered cultural assets
    let icon = L.icon({
      iconUrl: iconURL + asset_categories[cat] + iconExtension,
      iconSize: [15, 15]
    });

    // Function that defines how the icons
    // representing clusters are created
    let catClusterFunction = util.clusterFunction(asset_categories[cat])

    // Create an empty cluster marker group
    let markers = L.markerClusterGroup.layerSupport({
      iconCreateFunction: catClusterFunction,
      disableClusteringAtZoom: zoomDisableCluster
    });

    // Create a layer, filtering for a single
    // Asset category
    let mylayer = L.geoJSON(response, {
      pointToLayer: function(geojson, latlng) {
        return L.marker(latlng, {
          icon: icon
        });
      },
      onEachFeature: (feature, layer) => {
        feature.layer = layer;
        layer.on('click', () => {
          $("#featureModal .modal-title").html(feature.properties.NAME);

          let modal_content = '';

          if (feature.properties.PIC_URL) {
            modal_content += `<img id="featureModalPic" class="mb-3" src="${feature.properties.PIC_URL}">`
          }
          if (feature.properties.TAB_NAME) {
            modal_content += `<p>Category: <i>${feature.properties.TAB_NAME}</i></p>`
          }
          if (feature.properties.DESC1) {
            modal_content += feature.properties.DESC1
          }

          $("#featureModal .modal-body").html(modal_content);
          $("#featureModal .learn-more").attr("href", feature.properties.WEBSITE);
          $("#featureModal").modal("show");
        })
      },
      filter: function(feature, layer) {
        if (feature.properties.TAB_NAME == cat) {
          return true;
        } else {
          return false;
        }
      }
    })

    //Add the layer to the cluster group
    // mylayer.bindPopup(popup)
    markers.addLayer(mylayer)
    // markers.bindPopup(popup)

    //Add the cluster group to the map
    // mymap.addLayer(markers)
    mymap.addLayer(markers)

    //Add the layer to the layer dictionary
    layers[asset_categories[cat]] = markers;


  } // End loop that creates layers


  /***********Layers control***************/

  // // Swap out html-safe asset category labels for readable labels
  // let asset_categories_inverted = util.invert_dict(asset_categories);
  // let label_friendly_layers = util.label_friendly_layers(layers, asset_categories_inverted);
  // let layer_widget = L.control.layers(null, label_friendly_layers).addTo(mymap);
  //
  // //Adjust colors of layer layer_widget
  // let palette_readable = {}
  // for (let key in palette) {
  //   palette_readable[asset_categories_inverted[key]] = palette[key]
  // }
  //
  // for (let key in palette_readable) {
  //   let selector_string = "div.leaflet-control-layers-overlays span:contains('" + key + "')"
  //   $(selector_string).closest("div").css("background-color", palette_readable[key]);
  // }
  //
  // //Change control icon
  //
  // $(".leaflet-control-layers-toggle").html("<h3>Cultural Asset Categories</h3>")

  // /***********Google Translate Control***************/
  //
  // ctl.translator({
  //   position: 'bottomleft'
  // }).addTo(mymap);


  //Parse asset data for search plugin
  const all_assets = []
  for (let feature of response.features) {
    feature.properties.LAYER = feature.layer;
    all_assets.push(feature.properties)
  }

  // Typeahead
  $.typeahead({
    input: '#assetSearch',
    minLength: 0,
    order: "asc",
    display: "NAME",
    source: {
      data: all_assets
    },
    searchOnFocus: true,
    callback: {
      onClick: function(node, query, result) {
        console.log(result.LAYER);
        let layer = result.LAYER
        let latlng = layer._latlng
        mymap.setView(latlng, zoomDisableCluster, {
          animate: true,
          duration: 1
        });
        window.setTimeout(function() {
          layer.fire("click")
        }, 1000);
      }
    },
    debug: true

  });
}) // End query.run()
