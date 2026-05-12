import fs from 'fs';
import path from 'path';
import sharp from 'sharp';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const imgDir = path.join(__dirname, 'src/assets/images');

const files = fs.readdirSync(imgDir);

async function convertImages() {
  for (const file of files) {
    if (file.endsWith('.jpg') || file.endsWith('.png')) {
      const ext = path.extname(file);
      const base = path.basename(file, ext);
      const outPath = path.join(imgDir, `${base}.webp`);
      
      const inPath = path.join(imgDir, file);
      
      try {
        await sharp(inPath)
          .webp({ quality: 80 })
          .toFile(outPath);
        console.log(`Converted ${file} to ${base}.webp`);
      } catch (err) {
        console.error(`Error converting ${file}:`, err);
      }
    }
  }
}

convertImages();
