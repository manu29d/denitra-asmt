var fs = require('fs');
var path = require('path');

module.exports = function() {
  // Tight coupling
  // All websites config stored in ./lib/websites
  const baseDir = path.join(__dirname, '/websites/');

  const stores = {};

  // Read all files stored in the folder
  // It's a module with a very specific format
  // Please open one of the files and check comments
  // to see how to use config
  fs.readdir(baseDir, (err, files) => {
    if (err) {
      console.error(err);
      process.exit(1);
    }

    // Go over each file and load all config
    files.forEach(file => {
      let rawConfig = require(path.join(baseDir, file));
      let storeName = rawConfig.globalAccessKey;

      // Assign the `globalAccessKey` as the name to the stores Object
      stores[[storeName]] = rawConfig;
    });
  });

  return stores;
}
