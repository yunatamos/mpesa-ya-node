const axios = require('axios')
const https = require('https')
module.exports = async function (_baseURL = null) {
  const credentials = await this.oAuth()


  return axios.create({
    baseURL: _baseURL || this.baseURL,
    timeout: 5000, //optional
    httpsAgent: new https.Agent({ keepAlive: true }),
    headers: {
      'Authorization': 'Bearer ' + credentials.data['access_token'],
      'Content-Type': 'application/json'
    }
  })
}
