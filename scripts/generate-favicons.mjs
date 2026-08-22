import fs from 'node:fs';
import path from 'node:path';
import { execFileSync } from 'node:child_process';
import sharp from 'sharp';

const svgBuffer = fs.readFileSync('public/favicon.svg');
const tmp = path.join('/tmp', 'fav-gen-' + Date.now());
fs.mkdirSync(tmp, { recursive: true });

const pngTargets = [
  { name: 'public/favicon-16x16.png', size: 16 },
  { name: 'public/favicon-32x32.png', size: 32 },
  { name: 'public/favicon-48x48.png', size: 48 }, // Google Recommended Favicon Size
  { name: 'public/apple-touch-icon.png', size: 180 },
  { name: 'public/android-chrome-192x192.png', size: 192 },
  { name: 'public/android-chrome-512x512.png', size: 512 },
];

console.log('Generating Google-ready favicon suite...');

function icoCmd() {
  // ImageMagick v7 用 `magick`，v6 用 `convert`；本脚本依赖 ImageMagick 合成多尺寸 ICO
  for (const c of ['magick', 'convert']) {
    try {
      execFileSync(c, ['--version'], { stdio: 'ignore' });
      return c;
    } catch {
      /* try next */
    }
  }
  throw new Error('未找到 ImageMagick（magick/convert），无法合成 .ico');
}

async function main() {
  for (const t of pngTargets) {
    await sharp(svgBuffer).resize(t.size, t.size).png().toFile(t.name);
    console.log(`[+] Generated: ${t.name} (${t.size}x${t.size})`);
  }

  // 多尺寸 ICO：先渲染各尺寸 PNG，再用 ImageMagick 合成真正的 .ico
  // （注意：不能用 sharp(...).png().toFile('.ico') —— 那只会写出伪装的 PNG）
  const icoSizes = [16, 32, 48, 64, 128, 256];
  const pngPaths = [];
  for (const s of icoSizes) {
    const p = path.join(tmp, `f${s}.png`);
    await sharp(svgBuffer).resize(s, s).png().toFile(p);
    pngPaths.push(p);
  }
  const cmd = icoCmd();
  execFileSync(cmd, [...pngPaths, 'src/app/favicon.ico']);
  console.log('[+] Generated: src/app/favicon.ico (multi-size ICO, 覆盖旧占位图)');
  execFileSync(cmd, [...pngPaths, 'public/favicon.ico']);
  console.log('[+] Generated: public/favicon.ico (multi-size ICO)');

  // Generate site.webmanifest for Android PWA / Google search
  const manifest = {
    name: 'Buffalo Bills Schedule 2026',
    short_name: 'BillsSchedule2026',
    icons: [
      { src: '/android-chrome-192x192.png', sizes: '192x192', type: 'image/png' },
      { src: '/android-chrome-512x512.png', sizes: '512x512', type: 'image/png' },
    ],
    theme_color: '#00338D',
    background_color: '#000000',
    display: 'standalone',
  };
  fs.writeFileSync('public/site.webmanifest', JSON.stringify(manifest, null, 2));
  console.log('[+] Generated: public/site.webmanifest');

  fs.rmSync(tmp, { recursive: true, force: true });
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
