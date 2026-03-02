const fs = require('fs');

let content = fs.readFileSync('src/data/materiais.ts', 'utf8');

// Regex para encontrar a linha do nome e substituir
// Ex: nome: "Amarelo Capri", -> nome: t('catalog.name.1'),
const regex = /(id: (\d+),[\s\S]*?)nome: "(.*?)",/g;

const newContent = content.replace(regex, (match, prefix, id, oldName) => {
  return `${prefix}nome: t('catalog.name.${id}'),`;
});

fs.writeFileSync('src/data/materiais.ts', newContent);
console.log('Nomes dos materiais atualizados com sucesso!');
