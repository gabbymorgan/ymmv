const fs = require('fs');

fs.readdir('./server/data/models/', async (err, paths) => {
  if (err) console.log(err);
  const updateClientFiles = paths.map(async (path) => {
    const file = await fs.readFile(`./server/data/models/${path}`)
    await fs.writeFile(`../../../client/src/constants/models${path}`, file);
  });
  await Promise.all(updateClientFiles);
});
