// gen-favicon.mjs — Converte o PNG da logo em favicon.ico
import sharp from 'sharp';
import fs from 'fs';
import path from 'path';

const SRC = path.resolve('C:/Users/leona/.gemini/antigravity/brain/353a806f-ae80-43cd-9247-cc2cd177f523/favicon_camila_1772385721221.png');
const OUT_PNG = path.resolve('./public/favicon-512.png');
const OUT_ICO = path.resolve('./public/favicon.ico');

// Redimensiona para 32x32 e salva como PNG temporário
const resized = await sharp(SRC)
  .resize(32, 32, { fit: 'contain', background: { r: 255, g: 255, b: 255, alpha: 1 } })
  .png()
  .toBuffer();

// ICO header manual (1 imagem, 32x32, 32bpp)
const icoHeader = Buffer.alloc(6);
icoHeader.writeUInt16LE(0, 0); // reserved
icoHeader.writeUInt16LE(1, 2); // type: icon
icoHeader.writeUInt16LE(1, 4); // count: 1 image

const icoDir = Buffer.alloc(16);
icoDir.writeUInt8(32, 0);  // width
icoDir.writeUInt8(32, 1);  // height
icoDir.writeUInt8(0, 2);   // color count
icoDir.writeUInt8(0, 3);   // reserved
icoDir.writeUInt16LE(1, 4); // color planes
icoDir.writeUInt16LE(32, 6); // bits per pixel
icoDir.writeUInt32LE(resized.length, 8);  // size of image data
icoDir.writeUInt32LE(6 + 16, 12);  // offset of image data

const ico = Buffer.concat([icoHeader, icoDir, resized]);
fs.writeFileSync(OUT_ICO, ico);

// Salva também o PNG em 512px para Apple Touch Icon
await sharp(SRC)
  .resize(512, 512, { fit: 'contain', background: { r: 255, g: 255, b: 255, alpha: 1 } })
  .png()
  .toFile(OUT_PNG);

console.log('✅ favicon.ico gerado em public/favicon.ico');
console.log('✅ favicon-512.png gerado em public/favicon-512.png');
