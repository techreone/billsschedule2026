import fs from 'node:fs';
import path from 'node:path';
import sharp from 'sharp';

const svgBuffer = fs.readFileSync('public/favicon.svg');

const targets = [
  { name: 'public/favicon-16x16.png', size: 16 },
  { name: 'public/favicon-32x32.png', size: 32 },
  { name: 'public/favicon-48x48.png', size: 48 }, // Google Recommended Favicon Size
  { name: 'public/apple-touch-icon.png', size: 180 },
  { name: 'public/android-chrome-192x192.png', size: 192 },
  { name: 'public/android-chrome-512x512.png', size: 512 },
  { name: 'public/favicon.ico', size: 48 }, // Standard .ico fallback
];

console.log('Generating Google-ready favicon suite...');

async function main() {
  for (const target of targets) {
    await sharp(svgBuffer)
      .resize(target.size, target.size)
      .png()
      .toFile(target.name);
    console.log(`[+] Generated: ${target.name} (${target.size}x${target.size})`);
  }

  // Generate site.webmanifest for Android PWA / Google search
  const manifest = {
    name: "Buffalo Bills Schedule 2026",
    short_name: "BillsSchedule2026",
    icons: [
      { src: "/android-chrome-192x192.png", sizes: "192x192", type: "image/png" },
      { src: "/android-chrome-512x512.png", sizes: "512x512", type: "image/png" }
    ],
    theme_color: "#00338D",
    background_color: "#000000",
    display: "standalone"
  };
  fs.writeFileSync('public/site.webmanifest', JSON.stringify(manifest, null, 2));
  console.log('[+] Generated: public/site.webmanifest');
}

main().catch(err => console.error(err));
