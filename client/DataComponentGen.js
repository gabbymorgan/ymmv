// experimental model for functional data rendering mixed with OOP for styles inherintance
// passes values straight from DB Contracts to UI HOC for render.

const fs = require('fs');

const contracts = {};
let styledContracts = "import styled from 'styled-components';\n\n";
const paths = fs.readdirSync('./src/contracts/');

paths.forEach(path => {
  if (path !== 'index.js') {
    const contractName = path.slice(0, path.length - 5);
    contracts[contractName] = JSON.parse(fs.readFileSync(`./src/contracts/${path}`));
  }
});

Object.keys(contracts).forEach(contractName => {
  styledContracts += `// ---- ${contractName} ----\n\n`
  const contract = contracts[contractName];
  Object.keys(contract).forEach(fieldName => {
    const field = contract[fieldName];
    if (field.inputType) {
      styledContracts += `export const ${fieldName} = styled.input\`\n\`;\n\n`;
    }
  });
});

fs.writeFileSync(`./src/styles/inputComponents.js`, styledContracts);
