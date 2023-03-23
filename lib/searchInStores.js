var axios = require('axios');

module.exports = function(stores, keyword) {
  const results = {};
  for (let store in stores) {
    let axiosConfig = stores[store];
    axiosConfig.params.keyword = keyword;
    axios(axiosConfig).then(res => {
      if (res.status !== 200) process.exit(1);
      data = res.data;

      // assuming homogenuous response
      // in real world, we might want to setup `transformResponse`
      // `transformResponse` allows changes to the response data to be made before
      // it is passed to then/catch
      results[[store]] = data;
    });
  }

  return results;
}
