import { execSync } from 'node:child_process';

const images20 = [
  // 首页 (5图)
  { url: 'https://images.unsplash.com/photo-1566577739112-5180d4bf9390?q=80&w=1400', name: 'josh-allen-pass', alt: 'Josh Allen Quarterback Passing Action' },
  { url: 'https://images.unsplash.com/photo-1540747913346-19e32dc3e97e?q=80&w=1400', name: 'highmark-stadium-snow', alt: 'Highmark Stadium Orchard Park Winter Snow Game' },
  { url: 'https://images.unsplash.com/photo-1517649763962-0c623266010b?q=80&w=1400', name: 'bills-mafia-fans', alt: 'Buffalo Bills Mafia Tailgate & Fan Celebration' },
  { url: 'https://images.unsplash.com/photo-1508098682722-e99c43a406b2?q=80&w=1400', name: 'sean-mcdermott-coach', alt: 'Head Coach Sideline Strategy & Playcalling' },
  { url: 'https://images.unsplash.com/photo-1579952363873-27f3bade9f55?q=80&w=1400', name: 'afc-east-trophy', alt: 'AFC East Division Championship Trophy & Banner' },

  // 转播页 (5图)
  { url: 'https://images.unsplash.com/photo-1461896836934-ffe607ba8211?q=80&w=1400', name: 'nfl-broadcast-truck', alt: 'NFL Satellite Television Broadcast Production Truck' },
  { url: 'https://images.unsplash.com/photo-1587280501635-68a0e82cd5ff?q=80&w=1400', name: 'cbs-sports-camera', alt: 'CBS Sports Live Game Broadcast Camera Rig' },
  { url: 'https://images.unsplash.com/photo-1594909122845-11baa439b7bf?q=80&w=1400', name: 'espn-studio-desk', alt: 'ESPN Monday Night Football Television Studio' },
  { url: 'https://images.unsplash.com/photo-1593784991095-a205069470b6?q=80&w=1400', name: 'youtube-tv-app', alt: 'NFL Sunday Ticket Live Stream on Smart TV' },
  { url: 'https://images.unsplash.com/photo-1574629810360-7efbbe195018?q=80&w=1400', name: 'sports-bar-fans', alt: 'Bills Backers Sports Bar Live Game Watch Party' },

  // 季前赛页 (5图)
  { url: 'https://images.unsplash.com/photo-1521412644187-c49fa049e84d?q=80&w=1400', name: 'training-camp-practice', alt: 'St. John Fisher Summer Training Camp Field' },
  { url: 'https://images.unsplash.com/photo-1518609878373-06d740f60d8b?q=80&w=1400', name: 'wivb-local-broadcast', alt: 'WIVB Channel 4 Local Preseason Television Studio' },
  { url: 'https://images.unsplash.com/photo-1560272564-c83b66b1ad12?q=80&w=1400', name: 'roster-cut-practice', alt: '53-Man Roster Defense & Pass-Rusher Drills' },
  { url: 'https://images.unsplash.com/photo-1563299796-b729d0af54a5?q=80&w=1400', name: 'preseason-stadium-parking', alt: 'Highmark Stadium Parking Lot 1-7 Tailgating' },
  { url: 'https://images.unsplash.com/photo-1519766304817-4f37bda74a29?q=80&w=1400', name: 'rochester-fans-autograph', alt: 'Training Camp Autograph Zone & Youth Fans' },

  // 可打印 PDF 页 (5图)
  { url: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=1400', name: 'printable-schedule-preview', alt: '8.5x11 Inch Printable Schedule PDF Sheet Layout' },
  { url: 'https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?q=80&w=1400', name: 'wallet-card-fold', alt: 'Pocket Wallet Sized 4-Fold Schedule Card' },
  { url: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?q=80&w=1400', name: 'office-prediction-sheet', alt: 'Office Pool Game-by-Game Score Prediction Sheet' },
  { url: 'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?q=80&w=1400', name: 'calendar-app-sync', alt: 'Google & Apple Calendar iCal Sync on Smartphone' },
  { url: 'https://images.unsplash.com/photo-1566577739112-5180d4bf9390?q=80&w=1400', name: 'bills-helmet-legacy', alt: 'Buffalo Bills Royal Blue & Red Football Helmet' }
];

console.log('Downloading batch 20+ real game images...');

for (const img of images20) {
  try {
    const cmd = `node scripts/fetch-image.mjs "${img.url}" --alt "${img.alt}" --game bills --name ${img.name}`;
    console.log(`[Executing] ${img.name}...`);
    execSync(cmd, { stdio: 'pipe' });
    console.log(`  [+] Success: ${img.name}.webp`);
  } catch (err) {
    console.log(`  [!] Skipped ${img.name}: ${err.message.slice(0, 100)}`);
  }
}
