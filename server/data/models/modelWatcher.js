const fs = require('fs');

fs.readdir('./server/data/contracts/', function (err, paths) {
    paths.forEach(async (path) => {
      if (path !== 'modelWatcher.js') {
        const contract = require(`../contracts/${path}`);
        const contractString = JSON.stringify(contract);
        fs.writeFileSync(`./client/src/contracts/${path}.json`, contractString);
      }
    });
});
