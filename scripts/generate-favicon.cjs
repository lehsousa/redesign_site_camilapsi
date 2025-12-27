const fs = require('fs');
const path = require('path');
const sharp = require('sharp');
const toIco = require('to-ico');

const src = path.resolve(__dirname, '..', 'public', 'img', 'logo.jpeg');
const out = path.resolve(__dirname, '..', 'public', 'favicon.ico');

(async () => {
  try {
    const sizes = [16, 32, 48, 64, 128, 256];

    const pngBuffers = await Promise.all(
      sizes.map(size => sharp(src).resize(size, size).png().toBuffer())
    );

    const icoBuffer = await toIco(pngBuffers);
    fs.writeFileSync(out, icoBuffer);
    console.log('favicon.ico gerado em', out);
  } catch (err) {
    console.error('Erro ao gerar favicon:', err);
    process.exit(1);
  }
})();
