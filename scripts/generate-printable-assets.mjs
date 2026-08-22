// scripts/generate-printable-assets.mjs
// 生成真实下载资产：public/docs/Buffalo_Bills_2026_Schedule_Printable.pdf 与 public/docs/bills-2026.ics
// 零依赖：直接从 src/data/scheduleData.ts 解析赛程；PDF 为手写合法 PDF（Helvetica 文本）。
// 用法：node scripts/generate-printable-assets.mjs
import fs from 'fs'
import path from 'path'

const ROOT = process.cwd()
const SRC = path.join(ROOT, 'src/data/scheduleData.ts')
const OUT_DIR = path.join(ROOT, 'public/docs')
const DOMAIN = 'billsschedule2026.online'

// ---- 解析赛程 ----
const src = fs.readFileSync(SRC, 'utf8')
const start = src.indexOf('export const BILLS_2026_GAMES')
const end = src.indexOf('];', start)
const block = src.slice(start, end + 2)

function field(obj, key) {
  const m = obj.match(new RegExp(key + ':\\s*([\'"])((?:\\\\.|.)*?)\\1'))
  return m ? m[2] : ''
}

const objs = block
  .split(/\{\s*id:/)
  .slice(1)
  .map((s) => '{id:' + s.replace(/,\s*$/, ''))
const games = objs
  .filter((o) => o.includes('isoDate:'))
  .map((o) => ({
    week: field(o, 'week'),
    date: field(o, 'date'),
    time: field(o, 'time'),
    opponent: field(o, 'opponent'),
    tv: field(o, 'tvChannel'),
    iso: field(o, 'isoDate'),
    isHome: field(o, 'isHome') === 'true',
  }))

// ---- ICS ----
const pad = (n) => String(n).padStart(2, '0')
function toUTC(iso, addH = 0) {
  const d = new Date(iso)
  if (isNaN(d)) return null
  d.setUTCHours(d.getUTCHours() + addH)
  return `${d.getUTCFullYear()}${pad(d.getUTCMonth() + 1)}${pad(d.getUTCDate())}T${pad(
    d.getUTCHours()
  )}${pad(d.getUTCMinutes())}${pad(d.getUTCSeconds())}Z`
}
const icsEsc = (s) => s.replace(/\\/g, '\\\\').replace(/,/g, '\\,').replace(/;/g, '\\;').replace(/\n/g, '\\n')
let ics = 'BEGIN:VCALENDAR\nVERSION:2.0\nPRODID:-//' + DOMAIN + '//Bills 2026//EN\nCALSCALE:GREGORIAN\nMETHOD:PUBLISH\n'
for (const g of games) {
  const wkNum = g.week.replace(/[^0-9]/g, '')
  const label = g.isHome ? 'vs ' + g.opponent : '@ ' + g.opponent
  const dt = toUTC(g.iso)
  if (!dt) continue
  const dtEnd = toUTC(g.iso, 3)
  ics +=
    'BEGIN:VEVENT\n' +
    `UID:${g.week.replace(/\W/g, '')}-${g.opponent.replace(/\W/g, '')}@${DOMAIN}\n` +
    `DTSTAMP:20260822T000000Z\n` +
    `DTSTART:${dt}\n` +
    `DTEND:${dtEnd}\n` +
    `SUMMARY:Buffalo Bills ${label} (${g.week})\n` +
    `DESCRIPTION:${icsEsc('TV: ' + g.tv + ' | ' + g.date + ' ' + g.time + ' ET. Unofficial ' + DOMAIN + ' fan guide.')}\n` +
    'END:VEVENT\n'
}
ics += 'END:VCALENDAR\n'

// ---- PDF（手写合法 PDF）----
function esc(s) {
  return s.replace(/\\/g, '\\\\').replace(/\(/g, '\\(').replace(/\)/g, '\\)')
}
const lines = [
  'Buffalo Bills 2026 Schedule',
  'Generated ' + DOMAIN,
  '',
  'WK  STATUS  OPPONENT                    DATE            TIME       TV CHANNEL',
]
for (const g of games) {
  const wk = g.week.replace(/[^0-9]/g, '')
  const tag = g.isHome ? 'vs' : '@'
  const opp = (g.opponent.length > 26 ? g.opponent.slice(0, 26) : g.opponent).padEnd(26)
  const date = (g.date.length > 15 ? g.date.slice(0, 15) : g.date).padEnd(15)
  const time = (g.time.length > 10 ? g.time.slice(0, 10) : g.time).padEnd(10)
  lines.push(`${'W' + wk}  ${tag}    ${opp} ${date} ${time} ${g.tv}`)
}
lines.push('')
lines.push('All times Eastern (ET). Unofficial fan guide, not affiliated with the NFL or Buffalo Bills.')

let content = 'BT\n/F1 10 Tf\n48 760 Td\n14 TL\n'
for (const l of lines) content += '(' + esc(l) + ') Tj T*\n'
content += 'ET'

const objsPDF = []
objsPDF[1] = '<< /Type /Catalog /Pages 2 0 R >>'
objsPDF[2] = '<< /Type /Pages /Kids [3 0 R] /Count 1 >>'
objsPDF[3] =
  '<< /Type /Page /Parent 2 0 R /MediaBox [0 0 612 792] /Resources << /Font << /F1 5 0 R >> >> /Contents 4 0 R >>'
objsPDF[4] = '<< /Length ' + content.length + ' >>\nstream\n' + content + '\nendstream'
objsPDF[5] = '<< /Type /Font /Subtype /Type1 /BaseFont /Helvetica >>'

let pdf = '%PDF-1.4\n'
const offsets = []
for (let i = 1; i <= 5; i++) {
  offsets[i] = Buffer.byteLength(pdf, 'latin1')
  pdf += i + ' 0 obj\n' + objsPDF[i] + '\nendobj\n'
}
const xrefPos = Buffer.byteLength(pdf, 'latin1')
let xref = 'xref\n0 6\n0000000000 65535 f \n'
for (let i = 1; i <= 5; i++) xref += String(offsets[i]).padStart(10, '0') + ' 00000 n \n'
const trailer = 'trailer\n<< /Size 6 /Root 1 0 R >>\nstartxref\n' + xrefPos + '\n%%EOF'
pdf += xref + trailer
const pdfBuf = Buffer.from(pdf, 'latin1')

// ---- 写出 ----
fs.mkdirSync(OUT_DIR, { recursive: true })
fs.writeFileSync(path.join(OUT_DIR, 'Buffalo_Bills_2026_Schedule_Printable.pdf'), pdfBuf)
fs.writeFileSync(path.join(OUT_DIR, 'bills-2026.ics'), ics)
console.log(
  `✅ 生成完成：${games.length} 场赛事\n   - public/docs/Buffalo_Bills_2026_Schedule_Printable.pdf (${pdfBuf.length} bytes)\n   - public/docs/bills-2026.ics (${ics.length} bytes)`
)
