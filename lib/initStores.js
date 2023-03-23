var fs = require('fs');
var path = require('path');

module.exports = function() {
  const baseDir = path.join(__dirname, '/websites/');

  const stores = {};

  fs.readdir(baseDir, (err, files) => {
    if (err) {
      console.error(err);
      process.exit(1);
    }

    files.forEach(file => {
      let rawConfig = require(path.join(baseDir, file));
      let storeName = rawConfig.globalAccessKey;
      stores[[storeName]] = rawConfig.axiosConfig;
    });
  });

  return stores;
}
