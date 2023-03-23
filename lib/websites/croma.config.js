// Does not seem to provide an API
// Or maybe I did not look hard enough
// What is written below is a sample config
// not based on real examples
module.exports = {
  globalAccessKey: 'croma',
  axiosConfig: {
    url: '/api/v1/',
    method: 'get',
    baseUrl: 'api.croma.com',
    headers: {
      token: process.env.CROMA_TOKEN,
      secret: process.env.CROMA_SECRET
    }
  }
}
