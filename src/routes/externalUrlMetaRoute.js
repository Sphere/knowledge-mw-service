/**
 * file: external-url-meta-route.js
 * author: Loganathan
 * desc: route file for external url meta
 */

var extUrlMetaService = require('../service/externalUrlMetaService')

var BASE_URL = '/url/v1'

module.exports = function (app) {
  app.route(BASE_URL + '/fetchmeta')
    .post(extUrlMetaService.fetchUrlMetaAPI)
}
