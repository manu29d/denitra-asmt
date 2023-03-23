// Does not seem to provide an API
// Or maybe I did not look hard enough
// What is written below is a sample config
// not based on real examples
module.exports = {
  globalAccessKey: 'reliance',
  axiosConfig: {
    url: '/api/v1/',
    method: 'get',
    baseUrl: 'api.reliance.com',
    headers: {
      token: process.env.RELIANCE_TOKEN,
      secret: process.env.RELIANCE_SECRET
    }
  }
}
