import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Ler o arquivo de traduções
const translationsPath = path.join(__dirname, 'src/contexts/translations.ts');
const translationsContent = fs.readFileSync(translationsPath, 'utf8');

// Extrair todas as chaves usadas nos arquivos TS/TSX
function extractKeysFromFile(filePath) {
  const content = fs.readFileSync(filePath, 'utf8');
  const regex = /t\(['"](.*?)['"]\)/g;
  const keys = [];
  let match;
  
  while ((match = regex.exec(content)) !== null) {
    keys.push(match[1]);
  }
  
  return keys;
}

// Extrair chaves do dicionário de traduções
function extractDictionaryKeys(content) {
  const regex = /'([^']+)':\s*['"]/g;
  const keys = [];
  let match;
  
  while ((match = regex.exec(content)) !== null) {
    keys.push(match[1]);
  }
  
  return keys;
}

// Percorrer todos os arquivos TS/TSX
function findAllTSFiles(dir, files = []) {
  const items = fs.readdirSync(dir);
  
  for (const item of items) {
    const fullPath = path.join(dir, item);
    const stat = fs.statSync(fullPath);
    
    if (stat.isDirectory() && !item.startsWith('.') && item !== 'node_modules') {
      findAllTSFiles(fullPath, files);
    } else if (stat.isFile() && (item.endsWith('.ts') || item.endsWith('.tsx'))) {
      files.push(fullPath);
    }
  }
  
  return files;
}

// Main execution
console.log('Verificando chaves de tradução...\n');

// Extrair chaves do dicionário
const dictionaryKeys = extractDictionaryKeys(translationsContent);

// Extrair chaves usadas nos arquivos
const srcFiles = findAllTSFiles(path.join(__dirname, 'src'));
const usedKeys = [];

for (const file of srcFiles) {
  const keys = extractKeysFromFile(file);
  usedKeys.push(...keys);
}

// Remover duplicatas e filtrar apenas chaves de tradução válidas
// Convenção do projeto: chaves de tradução sempre possuem pelo menos um ponto (section.subsection.detail)
const uniqueUsedKeys = [...new Set(usedKeys)].filter(
  (key) => key.includes('.') && !key.startsWith('@/')
);
const uniqueDictionaryKeys = [...new Set(dictionaryKeys)];

// Encontrar chaves faltantes
const missingKeys = uniqueUsedKeys.filter((key) => !uniqueDictionaryKeys.includes(key));

console.log(`Total de chaves usadas: ${uniqueUsedKeys.length}`);
console.log(`Total de chaves no dicionário: ${uniqueDictionaryKeys.length}`);
console.log(`Chaves faltantes: ${missingKeys.length}\n`);

if (missingKeys.length > 0) {
  console.log('Chaves faltantes:');
  missingKeys.forEach(key => console.log(`  - ${key}`));
  
  // Agrupar por prefixo
  const grouped = {};
  missingKeys.forEach(key => {
    const prefix = key.split('.')[0];
    if (!grouped[prefix]) grouped[prefix] = [];
    grouped[prefix].push(key);
  });
  
  console.log('\nChaves faltantes por grupo:');
  Object.entries(grouped).forEach(([prefix, keys]) => {
    console.log(`\n${prefix} (${keys.length} chaves):`);
    keys.forEach(key => console.log(`  - ${key}`));
  });
} else {
  console.log('✅ Nenhuma chave faltante encontrada!');
}
