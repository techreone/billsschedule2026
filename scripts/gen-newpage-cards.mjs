#!/usr/bin/env node
// 新页信息卡：roster-projection / first-game / wr-depth（3张）
import sharp from "sharp";
import { mkdirSync } from "node:fs";
const OUT = "public/images/bills";
mkdirSync(OUT, { recursive: true });
const W = 1000, RED = "#C60C30", BLUE = "#00338D", BG = "#101216", FG = "#e5e7eb", MUT = "#9ca3af", BORDER = "#27272a";
const esc = s => String(s).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
const F = "Arial, Helvetica, sans-serif";

function card({ code, title, rows, footer }) {
  const rowH = 62;
  const h = 96 + rows.length * rowH + (footer ? 56 : 24);
  let y = 96;
  const rowsSvg = rows.map(([k, v], i) => {
    const ry = y + i * rowH;
    return `<line x1="40" x2="${W - 40}" y1="${ry}" y2="${ry}" stroke="${BORDER}" stroke-width="1"/>
    <text x="48" y="${ry + 40}" font-family="${F}" font-weight="400" font-size="23" fill="${MUT}">${esc(k)}</text>
    <text x="${W - 48}" y="${ry + 40}" font-family="${F}" font-weight="700" font-size="25" fill="#fbbf24" text-anchor="end">${esc(v)}</text>`;
  }).join("");
  return `<svg width="${W}" height="${h}" xmlns="http://www.w3.org/2000/svg">
  <rect width="${W}" height="${h}" rx="14" fill="${BG}" stroke="${BORDER}" stroke-width="2"/>
  <rect width="${W}" height="56" rx="14" fill="${BLUE}"/>
  <rect x="0" y="54" width="${W}" height="4" fill="${RED}"/>
  <text x="40" y="37" font-family="${F}" font-weight="700" font-size="20" fill="#fff" letter-spacing="4">◈ ${esc(code)}</text>
  <text x="${W - 40}" y="37" font-family="${F}" font-weight="700" font-size="20" fill="#d1d5db" text-anchor="end" letter-spacing="2">${esc(title)}</text>
  ${rowsSvg}
  ${footer ? `<text x="${W - 40}" y="${h - 20}" font-family="${F}" font-weight="400" font-size="18" fill="${MUT}" text-anchor="end">${esc(footer)}</text>` : ""}
</svg>`;
}

const cards = {
  "roster-projection-card": card({
    code: "CUTDOWN TRACKER", title: "90 → 53",
    rows: [
      ["Cutdown deadline", "Sun, Aug 30 · 6:00 PM ET"],
      ["Players released/waived", "Up to 37"],
      ["QB battle", "Settled — Allen + Allen"],
      ["Hardest room", "Defensive line (new 3-4)"],
      ["Practice squad", "16 spots after waivers"],
    ],
    footer: "Source: NFL.com important dates · ESPN projection",
  }),
  "first-game-card": card({
    code: "SEASON OPENER", title: "WEEK 1",
    rows: [
      ["Matchup", "Bills @ Texans"],
      ["Kickoff", "Sun, Sep 13 · 1:00 PM ET"],
      ["TV", "CBS"],
      ["Venue", "NRG Stadium, Houston"],
      ["First home game", "Thu, Sep 17 vs Lions (TNF)"],
    ],
    footer: "Final tune-up: Thu, Aug 27 vs Steelers · 7 PM ET",
  }),
  "wr-depth-card": card({
    code: "DEPTH CHART", title: "WIDE RECEIVERS",
    rows: [
      ["X / WR1", "D.J. Moore"],
      ["Z", "Joshua Palmer"],
      ["Slot", "Khalil Shakir"],
      ["Big X competitor", "Keon Coleman"],
      ["Bubble", "Tyrell Shavers · KJ Hamler"],
    ],
    footer: "'Everybody eats' — Joe Brady rotates all four starters",
  }),
};

for (const [name, svg] of Object.entries(cards)) {
  await sharp(Buffer.from(svg), { density: 144 }).webp({ quality: 88 }).toFile(`${OUT}/${name}.webp`);
}
console.log("✓ 3 cards generated");
