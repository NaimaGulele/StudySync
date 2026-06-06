const path = require('path');
const fs = require('fs');
const sharp = require('sharp');

async function generate() {
  const src = path.join(__dirname, '..', 'icons', 'icon.svg');
  const outDir = path.join(__dirname, '..', 'icons');
  if (!fs.existsSync(src)) {
    console.error('Source SVG not found:', src);
    process.exit(1);
  }
  const sizes = [192, 512];
  for (const s of sizes) {
    const out = path.join(outDir, `icon-${s}.png`);
    console.log(`Generating ${out}...`);
    await sharp(src).resize(s, s, { fit: 'contain' }).png().toFile(out);
  }
  console.log('Icons generated. Update manifest.json if needed.');
}

generate().catch(err => {
  console.error(err);
  process.exit(1);
});
