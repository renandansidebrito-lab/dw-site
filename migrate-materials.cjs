const fs = require('fs');

// Mapas de tradução
const colorMap = {
  "Amarelo": "yellow",
  "Bege": "beige",
  "Branco": "white",
  "Cinza": "gray",
  "Marrom": "brown",
  "Ocre": "ochre",
  "Preto": "black",
  "Verde": "green",
  "Vermelho": "red",
  "Variada": "varied"
};

const originMap = {
  "Nacional": "catalog.origin.national",
  "Importado": "catalog.origin.imported",
  "Industrializado": "catalog.origin.industrialized",
  "Índia": "catalog.origin.india",
  "Grécia": "catalog.origin.greece",
  "IT": "catalog.origin.italy",
};

const appMap = {
  'Pisos': 'catalog.app.floors',
  'Paredes': 'catalog.app.walls',
  'Bancadas': 'catalog.app.countertops',
  'Cozinhas': 'catalog.app.kitchens',
  'Banheiros': 'catalog.app.bathrooms',
  'Fachadas': 'catalog.app.facades',
  'Escadas': 'catalog.app.stairs',
  'Salas': 'catalog.app.living',
  'Áreas internas': 'catalog.app.internal',
  'Áreas externas': 'catalog.app.external',
  'Decoração': 'catalog.app.decoration',
  'Áreas sociais': 'catalog.app.social',
  'Soleiras': 'catalog.app.sills',
  'Calçadas': 'catalog.app.sidewalks',
  'Bancadas de Luxo': 'catalog.app.luxury_countertops',
  'Revestimentos de Luxo': 'catalog.app.luxury_cladding',
  'Bordas de Piscina': 'catalog.app.pool_edges',
  'Áreas Gourmet': 'catalog.app.gourmet',
  'Mobiliário': 'catalog.app.furniture',
  'Iluminação': 'catalog.app.lighting',
  'Detalhes': 'catalog.app.details',
  'Ilhas': 'catalog.app.islands',
  'Lavabos': 'catalog.app.washbasins',
  'Pias': 'catalog.app.sinks',
  'Garagens': 'catalog.app.garages',
  'Revestimentos': 'catalog.app.cladding',
  'Bancadas Decorativas': 'catalog.app.decorative_countertops',
  'Bancadas de Banheiro': 'catalog.app.bathroom_countertops',
  'Bancadas de Cozinha': 'catalog.app.kitchen_countertops',
  'Revestimentos Internos': 'catalog.app.internal_cladding',
  'Pisos Internos': 'catalog.app.internal_floors',
  'Pisos Externos': 'catalog.app.external_floors'
};

// Ler arquivo original
let content = fs.readFileSync('src/data/materiais.ts', 'utf8');

// Regex para extrair objetos
const materialRegex = /{\s*id: (\d+),[\s\S]*?nome: "(.*?)",[\s\S]*?tipo: "(.*?)",[\s\S]*?cor: "(.*?)",[\s\S]*?origem: "(.*?)",[\s\S]*?aplicacoes: \[(.*?)\],[\s\S]*?imagem: "(.*?)",[\s\S]*?descricao: "(.*?)"\s*}/g;

let newContent = `export type Material = {
  id: number;
  nome: string;
  tipo: "marmore" | "granito" | "quartzito" | "quartzo" | "ultracompacto" | "supernano" | "outros";
  cor: string;
  origem: string;
  aplicacoes: string[];
  imagem: string;
  descricao: string;
};

export const getMateriais = (t: (key: string) => string): Material[] => [
`;

let match;
while ((match = materialRegex.exec(content)) !== null) {
  const [_, id, nome, tipo, cor, origem, aplicacoes, imagem, descricao] = match;
  
  const corKey = colorMap[cor] ? `t('catalog.colors.${colorMap[cor]}')` : `"${cor}"`;
  
  let origemVal = `"${origem}"`;
  if (originMap[origem]) {
    origemVal = `t('${originMap[origem]}')`;
  }

  const apps = aplicacoes.split(',').map(a => {
    const cleanApp = a.trim().replace(/"/g, '').replace(/'/g, '');
    return appMap[cleanApp] ? `t('${appMap[cleanApp]}')` : `"${cleanApp}"`;
  }).join(', ');

  const descKey = `t('catalog.desc.${id}')`;

  newContent += `  {
    id: ${id},
    nome: "${nome}",
    tipo: "${tipo}",
    cor: ${corKey},
    origem: ${origemVal},
    aplicacoes: [${apps}],
    imagem: "${imagem}",
    descricao: ${descKey}
  },
`;
}

newContent += `];
`;

fs.writeFileSync('src/data/materiais.ts', newContent);
console.log('Arquivo materiais.ts atualizado com sucesso!');
