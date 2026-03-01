// scripts/convert-images.mjs — Converte imagens para WebP com sharp
import sharp from 'sharp';
import fs from 'fs';
import path from 'path';

const INPUT_DIR = path.resolve('./public/img');
const OUTPUT_DIR = path.resolve('./public/img');

const images = [
  { src: 'camila.jpeg', width: 900 },
  { src: 'img1.jpeg',   width: 900 },
  { src: 'img2.jpeg',   width: 900 },
  { src: 'img3.JPG',    width: 1200 },
  { src: 'img4.JPG',    width: 1200 },
  { src: 'img5.JPG',    width: 1200 },
];

for (const { src, width } of images) {
  const inputPath  = path.join(INPUT_DIR, src);
  const baseName   = path.parse(src).name.toLowerCase();
  const outputPath = path.join(OUTPUT_DIR, `${baseName}.webp`);

  if (!fs.existsSync(inputPath)) {
    console.warn(`⚠️  Não encontrado: ${src}`);
    continue;
  }

  await sharp(inputPath)
    .resize(width, null, { withoutEnlargement: true })
    .webp({ quality: 82 })
    .toFile(outputPath);

  const inKB  = (fs.statSync(inputPath).size  / 1024).toFixed(0);
  const outKB = (fs.statSync(outputPath).size / 1024).toFixed(0);
  console.log(`✅ ${src.padEnd(18)} ${inKB.padStart(6)} KB → ${outKB.padStart(5)} KB WebP`);
}

// Logo horizontal
const logoSrc = path.join(INPUT_DIR, 'logo horizontal.png');
const logoDst = path.join(OUTPUT_DIR, 'logo-horizontal.webp');
await sharp(logoSrc)
  .resize(400, null, { withoutEnlargement: true })
  .webp({ quality: 90 })
  .toFile(logoDst);
const logoInKB  = (fs.statSync(logoSrc).size / 1024).toFixed(0);
const logoOutKB = (fs.statSync(logoDst).size / 1024).toFixed(0);
console.log(`✅ logo horizontal.png ${logoInKB.padStart(6)} KB → ${logoOutKB.padStart(5)} KB WebP`);

console.log('\n🚀 Conversão concluída!');
