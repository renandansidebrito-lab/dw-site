const fs = require('fs');

// Mapeamento simples de cores para traduzir o início dos nomes
const translations = {
  en: {
    "Amarelo": "Yellow",
    "Bege": "Beige",
    "Branco": "White",
    "Cinza": "Gray",
    "Marrom": "Brown",
    "Verde": "Green",
    "Vermelho": "Red",
    "Preto": "Black",
    "Quartzo": "Quartz",
    "Mármore": "Marble"
  },
  es: {
    "Amarelo": "Amarillo",
    "Bege": "Beige",
    "Branco": "Blanco",
    "Cinza": "Gris",
    "Marrom": "Marrón",
    "Verde": "Verde",
    "Vermelho": "Rojo",
    "Preto": "Negro",
    "Quartzo": "Cuarzo",
    "Mármore": "Mármol"
  }
};

const content = fs.readFileSync('src/data/materiais.ts', 'utf8');
const regex = /id: (\d+),\s*nome: "(.*?)",/g;

let match;
const materials = [];

while ((match = regex.exec(content)) !== null) {
  materials.push({ id: match[1], name: match[2] });
}

console.log('// PT');
materials.forEach(m => console.log(`    'catalog.name.${m.id}': '${m.name}',`));

console.log('\n// EN');
materials.forEach(m => {
  let translated = m.name;
  for (const [pt, en] of Object.entries(translations.en)) {
    if (m.name.startsWith(pt + ' ')) {
      translated = m.name.replace(pt, en);
      break;
    }
  }
  console.log(`    'catalog.name.${m.id}': '${translated}',`);
});

console.log('\n// ES');
materials.forEach(m => {
  let translated = m.name;
  for (const [pt, es] of Object.entries(translations.es)) {
    if (m.name.startsWith(pt + ' ')) {
      translated = m.name.replace(pt, es);
      break;
    }
  }
  console.log(`    'catalog.name.${m.id}': '${translated}',`);
});
