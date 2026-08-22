import fs from 'node:fs';
import path from 'node:path';
import sharp from 'sharp';

const svgOG = `<svg xmlns="http://www.w3.org/2000/svg" width="1200" height="630" viewBox="0 0 1200 630">
  <defs>
    <linearGradient id="bg" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#001D54"/>
      <stop offset="50%" stop-color="#00338D"/>
      <stop offset="100%" stop-color="#7C0018"/>
    </linearGradient>
  </defs>

  <!-- Dark Sports Atmosphere Background -->
  <rect width="1200" height="630" fill="url(#bg)"/>
  <rect x="20" y="20" width="1160" height="590" fill="none" stroke="#C60C30" stroke-width="6" rx="20"/>

  <!-- Logo Mark Container -->
  <g transform="translate(80, 80)">
    <rect width="120" height="120" rx="24" fill="#00338D" stroke="#C60C30" stroke-width="4"/>
    <text x="60" y="82" font-family="Impact, Arial Black, sans-serif" font-size="70" font-weight="900" fill="#FFFFFF" text-anchor="middle" font-style="italic">BS</text>
  </g>

  <!-- Title & Headline -->
  <text x="230" y="140" font-family="Impact, Arial Black, sans-serif" font-size="46" font-weight="900" fill="#FFFFFF" letter-spacing="2">BUFFALO BILLS SCHEDULE 2026</text>
  <text x="230" y="180" font-family="monospace" font-size="20" font-weight="bold" fill="#FDE047" letter-spacing="4">BILLSSCHEDULE2026.ONLINE</text>

  <!-- Main Headline Card -->
  <text x="80" y="320" font-family="Impact, Arial Black, sans-serif" font-size="52" font-weight="900" fill="#FFFFFF" letter-spacing="1">OFFICIAL GAME TIMES, TV CHANNELS</text>
  <text x="80" y="390" font-family="Impact, Arial Black, sans-serif" font-size="52" font-weight="900" fill="#C60C30" letter-spacing="1">&amp; LIVE STREAMING GUIDE 2026</text>

  <!-- Sub-bullet Features -->
  <text x="80" y="470" font-family="Arial, sans-serif" font-size="24" font-weight="bold" fill="#E4E4E7">🏈 17 Regular Season Games • Kickoff Times (ET) • CBS / NBC / FOX / ESPN</text>
  <text x="80" y="515" font-family="Arial, sans-serif" font-size="24" font-weight="bold" fill="#E4E4E7">🖨️ Free 8.5x11 Printable PDF • 📅 Google &amp; Apple iCal Calendar Sync</text>

  <!-- Decorative Badge -->
  <rect x="940" y="490" width="180" height="45" rx="8" fill="#C60C30"/>
  <text x="1030" y="520" font-family="Impact, Arial Black, sans-serif" font-size="22" font-weight="900" fill="#FFFFFF" text-anchor="middle">NFL 2026</text>
</svg>`;

async function generateOGImage() {
  const outPath = path.join(process.cwd(), 'public/og-image.webp');
  await sharp(Buffer.from(svgOG))
    .resize(1200, 630)
    .webp({ quality: 85 })
    .toFile(outPath);
  console.log(`[+] Successfully generated OpenGraph image: ${outPath} (1200x630)`);
}

generateOGImage().catch(console.error);
