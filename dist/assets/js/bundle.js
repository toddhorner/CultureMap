!function(e){function r(r){for(var o,i,s=r[0],c=r[1],l=r[2],d=0,f=[];d<s.length;d++)i=s[d],n[i]&&f.push(n[i][0]),n[i]=0;for(o in c)Object.prototype.hasOwnProperty.call(c,o)&&(e[o]=c[o]);for(u&&u(r);f.length;)f.shift()();return a.push.apply(a,l||[]),t()}function t(){for(var e,r=0;r<a.length;r++){for(var t=a[r],o=!0,s=1;s<t.length;s++){var c=t[s];0!==n[c]&&(o=!1)}o&&(a.splice(r--,1),e=i(i.s=t[0]))}return e}var o={},n={1:0},a=[];function i(r){if(o[r])return o[r].exports;var t=o[r]={i:r,l:!1,exports:{}};return e[r].call(t.exports,t,t.exports,i),t.l=!0,t.exports}i.m=e,i.c=o,i.d=function(e,r,t){i.o(e,r)||Object.defineProperty(e,r,{enumerable:!0,get:t})},i.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.t=function(e,r){if(1&r&&(e=i(e)),8&r)return e;if(4&r&&"object"==typeof e&&e&&e.__esModule)return e;var t=Object.create(null);if(i.r(t),Object.defineProperty(t,"default",{enumerable:!0,value:e}),2&r&&"string"!=typeof e)for(var o in e)i.d(t,o,function(r){return e[r]}.bind(null,o));return t},i.n=function(e){var r=e&&e.__esModule?function(){return e.default}:function(){return e};return i.d(r,"a",r),r},i.o=function(e,r){return Object.prototype.hasOwnProperty.call(e,r)},i.p="";var s=window.webpackJsonp=window.webpackJsonp||[],c=s.push.bind(s);s.push=r,s=s.slice();for(var l=0;l<s.length;l++)r(s[l]);var u=c;a.push([12,0]),t()}([,,function(e,r,t){"use strict";Object.defineProperty(r,"__esModule",{value:!0});r.base_map_URL="https://api.mapbox.com/styles/v1/tohorner/cjhijn5ba1zon2rpelkgflt7y/tiles/256/{z}/{x}/{y}?access_token=pk.eyJ1IjoidG9ob3JuZXIiLCJhIjoiY2l6NGFoeXIxMDRscDMycGd2dzVzZTg3NyJ9.Vfe_mGvZ-mHldkO0x2gXEw",r.feature_layer_URL="https://services9.arcgis.com/diuwWhOq89A0FdTw/arcgis/rest/services/Core_Feature_Service_View/FeatureServer/0",r.historic_district_URL="https://services9.arcgis.com/diuwWhOq89A0FdTw/arcgis/rest/services/NRDIS_shapefile/FeatureServer/0",r.votes_url="https://services3.arcgis.com/U4SbXhYNLOfN36SP/arcgis/rest/services/votes/FeatureServer/0",r.asset_categories={Architecture:"architecture","Landmark or monument":"landmark","Public art":"public-art","Creative industry":"creative-industry","Park or open space":"park","Cultural facility":"cultural-facility",Food:"food","Programming or event":"programming"},r.palette={architecture:"#2a3e50",landmark:"#8C2A23","public-art":"#fc4349","creative-industry":"#6dbcdb",food:"#2E6E24","cultural-facility":"#ffb733",park:"#1a9481",programming:"#62358C"},r.category_field="TAB_NAME",r.iconURL="./assets/icon/0.5x/",r.iconExtension="@0.5x.png",r.zoomDisableCluster=18,r.asset_subcategories={Architecture:["Historic buildings","Significant restorations","Contemporary buildings","Notable design details"],"Landmark or monument":["Heritage sites","Landmarks","Monuments","Cemeteries"],"Public art":["Murals","Street art","Sculptures","Art installations"],"Creative industry":["Creative studios","Practice spaces","Creative businesses","Coworking facilities","Art supplies","Artist live/work space"],"Park or open space":["Parks","Playgrounds","Natural spaces","Scenic areas","Community gardens"],"Cultural facility":["Performance spaces","Exhibitions spaces","Places of worship","Social clubs"],Food:["Restaurants","Bars/breweries","Commercial kitchens","Urban agriculture"],"Programming or event":["Schools","Libraries","Educational programming","Festivals","Meeting halls","Other notable events"]},r.highlightStyle={stroke:!0,color:"#F25C05",weight:5,opacity:.7,fillColor:"#F25C05",fillOpacity:.3,radius:15}},function(e,r,t){"use strict";Object.defineProperty(r,"__esModule",{value:!0}),r.create=function(e,r){for(var t in e){var n=r[t],a="./assets/icon/1x/"+n+".png",i='<div class="row"><div class="col-1 px-0 ml-2"><img src='+a+' width=80%></div><div class="col-9 px-1"><h5>'+t+"</h5></div></div>";$("#legendTable").append(i+'<div class="row subcategory-row"><div class="col-1 px-0 ml-2"></div><div class="col-9 px-1 subcategory-column"><p class="subcategory-p"></p></div></div>');var s=e[t];s.forEach(function(e,r,t){return o(e,r,t)})}};var o=r.addSubcategories=function(e,r,t){0==t.indexOf(e)?$(".subcategory-p").last().append(e+", "):t.indexOf(e)<t.length-1?$(".subcategory-p").last().append((e+", ").toLowerCase()):$(".subcategory-p").last().append((""+e).toLowerCase())}},function(e,r,t){"use strict";Object.defineProperty(r,"__esModule",{value:!0}),r.clusterFunction=function(e){return function(r){var t=r.getChildCount(),o=(t+"").length;return new L.divIcon({html:t,className:"cluster digits-"+o+"-"+e,iconSize:null})}},r.invert_dict=function(e){var r={};for(var t in e)r[e[t]]=t;return r},r.label_friendly_layers=function(e,r){var t={};for(var o in e)t[r[o]]=e[o];return t},r.filterByCategory=function(e,r,t){return e.properties.TAB_NAME==t}},function(e,r,t){"use strict";function o(e){console.log(e),$.isEmptyObject(e)||e.clearLayers()}function n(e){var r=void 0;if(e.length>1){r="<h5>Historic districts:</h5>";var t=!0,o=!1,n=void 0;try{for(var a,i=e[Symbol.iterator]();!(t=(a=i.next()).done);t=!0){var s=a.value;r+="<p>("+(e.indexOf(s)+1)+") "+s.properties.HISTORIC_N+"</p>"}}catch(e){o=!0,n=e}finally{try{!t&&i.return&&i.return()}finally{if(o)throw n}}}else{r="<h5>Historic district:</h5><p>"+e[0].properties.HISTORIC_N+"</p>"}return r}Object.defineProperty(r,"__esModule",{value:!0}),r.clearOnClick=o,r.formatPopup=n,r.toggle=function(e,r,t,o,n){n.hasLayer(e)?($(r).html(t),n.removeLayer(e)):(n.addLayer(e),$(r).html(o))},r.setupPopup=function(e,r,t,a){var i=L.popup(),s=n(e);i.setLatLng(r),i.setContent(s),i.openOn(a),t.addData(e),a.once("click popupclose",function(){o(t)})},t(0)},function(e,r,t){"use strict";Object.defineProperty(r,"__esModule",{value:!0}),r.create=function(e,r){e.layer=r,r.on("click",function(){var r,t,a;r="#votes",$(r).removeClass("btn-success"),$(r).addClass("btn-light"),t=e.properties.NAME,$("#featureModal .modal-title").html(t),(a=e.properties.WEBSITE)?($("#learnMore").show(),function(e){$("#learnMore").attr("href",e)}(a)):$("#learnMore").hide();var i,s,c,l,u=function(e){var r="";e.properties.TAB_NAME&&(r+="<p>Category: <i>"+e.properties.TAB_NAME+"</i></p>");e.properties.DESC1&&(r+=e.properties.DESC1);return r}(e);i=u,$("#featureModal #modalBodyContent").html(i),$("#votes").one("click",function(r){var t;!function(e,r){var t=e.options.url;console.log(e),e.query().where("ASSET_ID = '"+r.id+"'").run(function(e,o){if(e)console.log(e);else{var n={features:{geometry:null,attributes:{ASSET_ID:r.id,NAME:r.properties.NAME}}};L.esri.post(t+"/addFeatures",n,function(e,r){e?console.log(e):console.log(r)})}})}(n,e),t="#votes",$(t).removeClass("btn-light"),$(t).addClass("btn-success")}),(s=o.feature_layer_URL,c=e.id,l=s+"/"+c+"/attachments",new Promise(function(e,r){L.esri.get(l,{},function(t,o){if(t)r(t);else{var n=o.attachmentInfos.map(function(e){return l+"/"+e.id});e(n)}})})).then(function(r){var t=function(e,r){var t='<div class="carousel-inner">';r.length>1?(r.forEach(function(e,r){t+=0==r?'<div class="carousel-item active"><img class="d-block w-100" src="'+e+'" alt=""></div>':'<div class="carousel-item"><img class="d-block w-100" src="'+e+'" alt=""></div>'}),t+="</div>",t+='  <a class="carousel-control-prev" href="#featureCarousel" role="button" data-slide="prev">\n    <span class="carousel-control-prev-icon" aria-hidden="true"></span>\n    <span class="sr-only">Previous</span>\n  </a>\n  <a class="carousel-control-next" href="#featureCarousel" role="button" data-slide="next">\n    <span class="carousel-control-next-icon" aria-hidden="true"></span>\n    <span class="sr-only">Next</span>\n  </a>'):1==r.length?t+='<img id="featureModalPic" class="mb-3" src="'+r[0]+'"></div>':e.properties.PIC_URL&&(t+='<img id="featureModalPic" class="mb-3" src="'+e.properties.PIC_URL+'"></div>');return t}(e,r);$("#featureCarousel").html(t)}).catch(function(e){return console.log(e)}),$("#featureModal").modal("show")})};var o=t(2);t(0),L.esri=t(1);var n=L.esri.featureLayer({url:o.votes_url})},function(e,r,t){"use strict";Object.defineProperty(r,"__esModule",{value:!0}),r.search=function(e,r,t,o,n){console.log("query",r);var a=t.LAYER,i=a._latlng;o.flyTo(i,n,{animate:!0,duration:1});var s=L.circle(i,{radius:10,weight:5,color:"#ffc107",fill:!1}).addTo(o);o.once("moveend",function(){window.setTimeout(function(){a.fire("click")},450)}),$("#featureModal").on("hidden.bs.modal",function(){s&&s.remove()})}},function(e,r,t){"use strict";Object.defineProperty(r,"__esModule",{value:!0}),r.sync=function(e,r){for(var t in $("#currently-displayed").empty(),r)if(e.hasLayer(r[t])){var o=r[t]._layers;for(var n in o){var a=o[n];e.getBounds().contains(a.getLatLng())&&$("#currently-displayed").append("<a id="+L.stamp(a)+' class="feature-row list-group-item bg-light px-0" lat="'+a.getLatLng().lat+'" lng="'+a.getLatLng().lng+'">'+a.feature.properties.NAME+"</a>")}}},r.click=function(e,r,t,o){for(var n in t)if(r.hasLayer(t[n])){var a=t[n]._layers;if(e in a){var i=function(){var t=a[e],n=t.getLatLng();return r.once("moveend",function(){t.fire("click")}),r.flyTo(n,o),"break"}();if("break"===i)break}}},r.hover=function(){}},function(e,r,t){"use strict";Object.defineProperty(r,"__esModule",{value:!0}),r.switchLangLink=function(){$("document").ready(function(){"/en/en"==Cookies.get("googtrans")?$("#languageLink>button>span").html("Español"):$("#languageLink>button>span").html("English")})},r.switchGoogleTransCookie=function(){$("#languageLink").on("click",function(){"/en/en"==Cookies.get("googtrans")?(Cookies.set("googtrans","/en/es"),location.reload()):(Cookies.set("googtrans","/en/en"),location.reload())})}},,,function(e,r,t){"use strict";t(0),t(11),t(10);var o=d(t(2)),n=d(t(9)),a=d(t(8)),i=d(t(7)),s=d(t(6)),c=d(t(5)),l=d(t(4)),u=d(t(3));function d(e){if(e&&e.__esModule)return e;var r={};if(null!=e)for(var t in e)Object.prototype.hasOwnProperty.call(e,t)&&(r[t]=e[t]);return r.default=e,r}L.esri=t(1),$(function(){$('[data-toggle="tooltip"]').tooltip()});var f=L.map("map",{zoomControl:!1,scrollWheelZoom:!1});new L.Control.Zoom({position:"bottomright"}).addTo(f);f.setView([42.39,-71.035],16);L.tileLayer(o.base_map_URL,{maxZoom:20}).addTo(f);var p=L.geoJson(null);p.addTo(f);var v=L.geoJson(null,{color:"#00FFFF",weight:5}).addTo(f),g=L.esri.featureLayer({url:o.historic_district_URL});g.on("click",function(e){var r=e.latlng;L.esri.query({url:o.historic_district_URL}).contains(r).run(function(e,t,o){var n=o.features;c.setupPopup(n,r,v,f)})}),$("#historicDistricts").on("click",function(){c.toggle(g,"#historicDistricts","Show historic districts","Hide historic districts",f)});var y={};L.esri.query({url:o.feature_layer_URL}).where("STATUS = 1").run(function(e,r,t){var n=function(e){var r=L.icon({iconUrl:o.iconURL+o.asset_categories[e]+o.iconExtension,iconSize:[15,15]}),n=l.clusterFunction(o.asset_categories[e]),a=L.markerClusterGroup.layerSupport({iconCreateFunction:n,disableClusteringAtZoom:o.zoomDisableCluster}),i=L.geoJSON(t,{pointToLayer:function(e,t){return L.marker(t,{icon:r})},onEachFeature:function(e,r){return s.create(e,r)},filter:function(r,t){return l.filterByCategory(r,t,e)}});a.addLayer(i),f.addLayer(a),y[o.asset_categories[e]]=a};for(var c in o.asset_categories)n(c);var d=l.invert_dict(o.asset_categories),v=l.label_friendly_layers(y,d),g=(L.control.layers(null,v).addTo(f),{});for(var h in o.palette)g[d[h]]=o.palette[h];for(var m in g){$("div.leaflet-control-layers-overlays span:contains('"+m+"')").closest("div").css("background-color",g[m])}var b=[],_=!0,C=!1,k=void 0;try{for(var w,S=t.features[Symbol.iterator]();!(_=(w=S.next()).done);_=!0){var M=w.value;M.properties.LAYER=M.layer,b.push(M.properties)}}catch(e){C=!0,k=e}finally{try{!_&&S.return&&S.return()}finally{if(C)throw k}}function P(){p.clearLayers()}$.typeahead({input:"#assetSearch",minLength:1,order:"asc",display:"NAME",source:{data:b},searchOnFocus:!0,callback:{onClick:function(e,r,t){return i.search(e,r,t,f,o.zoomDisableCluster)},onSubmit:function(e,r,t){return i.search(e,r,t,f,o.zoomDisableCluster)}},debug:!0}),a.sync(f,y),f.on("moveend zoomend overlayremove overlayadd",function(){return a.sync(f,y)}),$(document).on("click",".feature-row",function(e){$(document).off("mouseout",".feature-row",P),a.click(parseInt($(this).attr("id"),10),f,y,o.zoomDisableCluster)}),"ontouchstart"in window||$(document).on("mouseover",".feature-row",function(e){p.clearLayers().addLayer(L.circleMarker([$(this).attr("lat"),$(this).attr("lng")],o.highlightStyle))}),$(document).on("mouseout",".feature-row",P),u.create(o.asset_subcategories,o.asset_categories)});n.switchLangLink(),n.switchGoogleTransCookie()}]);
//# sourceMappingURL=bundle.js.map