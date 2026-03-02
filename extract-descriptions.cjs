const fs = require('fs');
const content = fs.readFileSync('src/data/materiais.ts', 'utf8');
const regex = /id: (\d+),\s*[\s\S]*?descricao: "(.*?)"/g;
let match;
while ((match = regex.exec(content)) !== null) {
  console.log(`    'catalog.desc.${match[1]}': '${match[2]}',`);
}
