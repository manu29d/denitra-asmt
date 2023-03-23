// You need to be an affiliate for Flipkart to query
// https://affiliate.flipkart.com/api-docs/af_prod_ref.html#search-query-based-on-keywords-api
// What is written below is a sample config
// not based on real examples
module.exports = {
  globalAccessKey: 'flipkart',
  axiosConfig: {
    url: '/api/v1/',
    method: 'get',
    baseUrl: 'api.flipkart.com',
    headers: {
      token: process.env.FLIPKART_TOKEN,
      secret: process.env.FLIPKART_SECRET
    }
  }
}
