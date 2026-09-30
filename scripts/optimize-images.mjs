// Converts the source images in design-src/ into web-sized WebP files in public/.
// Run after adding or changing an image: node scripts/optimize-images.mjs
import sharp from 'sharp';

const STORY_CROP = { left: 0, top: 0, width: 1076, height: 1424 };

// name -> longest side in px (about 2x the largest size it is shown at)
const images = {
  backg: { max: 1920, quality: 72 },
  opening: { max: 1100, quality: 80 },
  x: { max: 1100, quality: 80 },
  bow: { max: 500, quality: 82 },
  'cart-bg': { max: 900, quality: 82 },
  2: { max: 1000, quality: 82 },
  grand: { max: 1400, quality: 78 },
  // Our Story photos: same 1076x1462 canvas and frame, so both are cut by the same box
  // (drops the empty strip at the bottom) and come out exactly the same size
  m: { max: 1000, quality: 80, crop: STORY_CROP },
  s: { max: 1000, quality: 80, crop: STORY_CROP },
};

for (const [name, { max, quality, crop }] of Object.entries(images)) {
  let img = sharp(`design-src/${name}.png`);
  if (crop) img = sharp(await img.extract(crop).toBuffer());
  const info = await img
    .resize({ width: max, height: max, fit: 'inside', withoutEnlargement: true })
    .webp({ quality, alphaQuality: 90, effort: 6 })
    .toFile(`public/${name}.webp`);
  console.log(`${name}.webp`, `${info.width}x${info.height}`, `${Math.round(info.size / 1024)} KB`);
}
