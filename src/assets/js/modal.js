import {
  feature_layer_URL
} from './config.js';
import 'leaflet'
L.esri = require('esri-leaflet');

export function formatContent(feature) {
  let modal_content = '';

  if (feature.properties.TAB_NAME) {
    modal_content += `<p>Category: <i>${feature.properties.TAB_NAME}</i></p>`
  }
  if (feature.properties.DESC1) {
    modal_content += feature.properties.DESC1
  }
  return modal_content
}

export function formatPics(feature, pic_urls){
  let carousel_content = `<div class="carousel-inner">`;
  if (pic_urls.length > 1) {
    pic_urls.forEach((pic_url, i) =>{
      if (i == 0){
        carousel_content += `<div class="carousel-item active"><img class="d-block w-100" src="${pic_url}" alt=""></div>`
      }
      else{
        carousel_content += `<div class="carousel-item"><img class="d-block w-100" src="${pic_url}" alt=""></div>`
      }
    })
    carousel_content += `</div>` // close of carousel inner
    carousel_content += `  <a class="carousel-control-prev" href="#featureCarousel" role="button" data-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="sr-only">Previous</span>
  </a>
  <a class="carousel-control-next" href="#featureCarousel" role="button" data-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="sr-only">Next</span>
  </a>`
  } else if (pic_urls.length == 1) {
    carousel_content += `<img id="featureModalPic" class="mb-3" src="${pic_urls[0]}"></div>`
  } else {
    if (feature.properties.PIC_URL) {
      carousel_content += `<img id="featureModalPic" class="mb-3" src="${feature.properties.PIC_URL}"></div>`
    }
  }
  return carousel_content;
}

// function getAttachedPhotoInfo(id, fn) {
//   const request_url = `${feature_layer_URL}/${id}/attachments/`;
//   L.esri.get(request_url, {}, function(error, response) {
//     response = receiveResponse(error, response);
//   });
// };
//
// function receiveResponse(error, response) {
//   let res;
//   if (error) {
//     return error;
//   } else {
//     if ((response.attachmentInfos !== null) && (response.attachmentInfos.length > 0)) {
//       res = response;
//     }
//   }
//   console.log(response)
//   return res;
// }
//
// function attachmentUrls(attachmentInfos) {
//   const urls = attachmentInfos.map(att => `${feature_layer_URL}/attachments/${att.id}`)
//   return urls
// }

/**
 * Given a feature service url and a feature's Object ID
 * will return a Promise that resolves to an array of all
 * attached pics, or an empty array if no pics are attached.
 * @param  {string} service_url [description]
 * @param  {string} objectId    [description]
 * @return {Promise}             [description]
 */
export function fetchAttachPicUrls(service_url, objectId) {
  const request_url = `${service_url}/${objectId}/attachments`;
  return new Promise((resolve, reject) => {
    L.esri.get(request_url, {}, (error, response) => {
      if (error) {
        reject(error);
      } else {
        const urls = response.attachmentInfos.map(el => {
          return `${request_url}/${el.id}`
        })
        resolve(urls);
      }
    })
  })
}
