// You need to get Product Advertising API token
// https://webservices.amazon.com/paapi5/documentation/register-for-pa-api.html
// What is written below is a sample config
// not based on real examples
module.exports = {
  globalAccessKey: 'amazon',
  axiosConfig: {
    url: '/paapi5/',
    method: 'post',
    baseUrl: 'webservices.amazon.com',
    headers: {
      token: process.env.AMAZON_TOKEN,
      secret: process.env.AMAZON_SECRET
    }
  }
}
