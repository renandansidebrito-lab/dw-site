
import sharp from 'sharp';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const imagesDir = path.join(__dirname, 'public', 'images');

function getAllFiles(dirPath, arrayOfFiles) {
  const files = fs.readdirSync(dirPath);

  arrayOfFiles = arrayOfFiles || [];

  files.forEach(function(file) {
    if (fs.statSync(dirPath + "/" + file).isDirectory()) {
      arrayOfFiles = getAllFiles(dirPath + "/" + file, arrayOfFiles);
    } else {
      arrayOfFiles.push(path.join(dirPath, "/", file));
    }
  });

  return arrayOfFiles;
}

async function convertImages() {
  const files = getAllFiles(imagesDir, []);
  
  for (const file of files) {
    const ext = path.extname(file).toLowerCase();
    if (ext === '.jpg' || ext === '.jpeg' || ext === '.png') {
      const dir = path.dirname(file);
      const name = path.basename(file, ext);
      const newFile = path.join(dir, name + '.webp');

      console.log(`Converting: ${file} -> ${newFile}`);

      try {
        await sharp(file)
          .webp({ quality: 80 })
          .toFile(newFile);
        console.log(`Converted: ${newFile}`);
        
        // Delete original file to clean up? 
        // Let's delete it to enforce usage of new files and avoid duplicates.
        // But first let's make sure it worked.
        fs.unlinkSync(file); 
        console.log(`Deleted original: ${file}`);
        
      } catch (err) {
        console.error(`Error converting ${file}:`, err);
      }
    }
  }
}

convertImages();
