import { copyAllImages } from '../lib/copyProjectAssets.js';

copyAllImages()
  .then(() => {
    console.log('📦 Project images copied before build.');
  })
  .catch((err) => {
    console.error('❌ Error copying images before build:', err);
    process.exit(1);
  });
