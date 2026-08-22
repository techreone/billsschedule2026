import { execSync } from 'node:child_process';

const imagesToFetch = [
  {
    url: 'https://images.unsplash.com/photo-1566577739112-5180d4bf9390?q=80&w=1400',
    alt: 'Josh Allen Buffalo Bills Quarterback Action',
    name: 'josh-allen-action'
  },
  {
    url: 'https://images.unsplash.com/photo-1540747913346-19e32dc3e97e?q=80&w=1400',
    alt: 'Highmark Stadium Orchard Park Winter Game Atmosphere',
    name: 'highmark-stadium-snow'
  },
  {
    url: 'https://images.unsplash.com/photo-1587280501635-68a0e82cd5ff?q=80&w=1400',
    alt: 'NFL Television Broadcast Camera & Satellite Production Truck',
    name: 'nfl-broadcast-truck'
  },
  {
    url: 'https://images.unsplash.com/photo-1517649763962-0c623266010b?q=80&w=1400',
    alt: 'Buffalo Bills Summer Training Camp Practice Field',
    name: 'training-camp-practice'
  },
  {
    url: 'https://images.unsplash.com/photo-1594909122845-11baa439b7bf?q=80&w=1400',
    alt: 'WIVB Channel 4 Television Studio Broadcast Center',
    name: 'wivb-local-broadcast'
  },
  {
    url: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=1400',
    alt: 'Printable Schedule PDF Sheet & Pocket Calendar Layout',
    name: 'printable-schedule-preview'
  }
];

console.log('Starting automated game image fetch and WebP conversion...');

for (const img of imagesToFetch) {
  try {
    const cmd = `node scripts/fetch-image.mjs "${img.url}" --alt "${img.alt}" --game bills --name ${img.name}`;
    console.log(`Executing: ${cmd}`);
    execSync(cmd, { stdio: 'inherit' });
  } catch (err) {
    console.error(`Error fetching ${img.name}:`, err.message);
  }
}
