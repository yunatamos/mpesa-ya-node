const axios = require('axios')
const https = require('https')
module.exports = function (consumerKey, consumerSecret, baseURL = null) {
  const auth = Buffer.from(consumerKey + ':' + consumerSecret).toString('base64')
  
  return axios.get((baseURL || this.baseURL) + '/oauth/v1/generate?grant_type=client_credentials', {
    timeout: 5000, //optional
    httpsAgent: new https.Agent({ keepAlive: true }),
    headers: {
      'Authorization': 'Basic ' + auth,
      'content-type': 'application/json'
    }
  })
}
