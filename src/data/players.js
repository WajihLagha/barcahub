// ─── Squad data ─────────────────────────────────────────────
// Edit names, numbers and stats here.
// Player PHOTOS live in ./playerImages.js (one variable per player,
// e.g. pedri = "https://...") — edit the links in that file.
//
// x / y are percentages on the pitch box (0–100).
// Formation: 4-3-3
//   ST
//   LW   RW
//   CM CM / CDM
//   LB CB CB RB
//   GK

import {
  terStegen, kounde, cubarsi, inigo, balde, deJong, pedri, olmo,
  yamal, lewandowski, raphinha, ferran, fermin, gavi, casado,
  martin, araujo, pena,
} from './playerImages.js';

export const FORMATION = '4-3-3';

// Accepts a full http(s) link OR a local path under public/images/.
export function playerImg(p) {
  if (!p || !p.img) return null;
  if (p.img.startsWith('http')) return p.img;
  return `/images/${p.img}`;
}

export const STARTERS = [
  {
    id: 'ter-stegen', name: 'Marc-André ter Stegen', short: 'TER STEGEN',
    pos: 'GK', number: 1, slot: 'GK', x: 50, y: 90,
    img: terStegen,
    stats: { pace: 52, shooting: 40, passing: 82, dribbling: 58, defending: 45, physical: 74 },
  },
  {
    id: 'kounde', name: 'Jules Koundé', short: 'KOUNDÉ',
    pos: 'RB', number: 23, slot: 'RB', x: 82, y: 70,
    img: kounde,
    stats: { pace: 82, shooting: 55, passing: 76, dribbling: 72, defending: 84, physical: 80 },
  },
  {
    id: 'cubarsi', name: 'Pau Cubarsí', short: 'CUBARSÍ',
    pos: 'CB', number: 2, slot: 'CB-R', x: 62, y: 73,
    img: cubarsi,
    stats: { pace: 68, shooting: 45, passing: 84, dribbling: 66, defending: 85, physical: 76 },
  },
  {
    id: 'inigo', name: 'Iñigo Martínez', short: 'I. MARTÍNEZ',
    pos: 'CB', number: 5, slot: 'CB-L', x: 38, y: 73,
    img: inigo,
    stats: { pace: 64, shooting: 52, passing: 78, dribbling: 60, defending: 86, physical: 82 },
  },
  {
    id: 'balde', name: 'Alejandro Balde', short: 'BALDE',
    pos: 'LB', number: 3, slot: 'LB', x: 18, y: 70,
    img: balde,
    stats: { pace: 93, shooting: 60, passing: 74, dribbling: 80, defending: 76, physical: 78 },
  },
  {
    id: 'de-jong', name: 'Frenkie de Jong', short: 'F. DE JONG',
    pos: 'CDM', number: 21, slot: 'CDM', x: 50, y: 58,
    img: deJong,
    stats: { pace: 76, shooting: 64, passing: 88, dribbling: 86, defending: 80, physical: 76 },
  },
  {
    id: 'pedri', name: 'Pedri', short: 'PEDRI',
    pos: 'CM', number: 8, slot: 'CM-R', x: 66, y: 44,
    img: pedri,
    stats: { pace: 74, shooting: 70, passing: 90, dribbling: 90, defending: 68, physical: 66 },
  },
  {
    id: 'olmo', name: 'Dani Olmo', short: 'OLMO',
    pos: 'CM', number: 20, slot: 'CM-L', x: 34, y: 44,
    img: olmo,
    stats: { pace: 76, shooting: 80, passing: 84, dribbling: 86, defending: 58, physical: 70 },
  },
  {
    id: 'yamal', name: 'Lamine Yamal', short: 'LAMINE YAMAL',
    pos: 'RW', number: 19, slot: 'RW', x: 80, y: 26,
    img: yamal,
    stats: { pace: 88, shooting: 80, passing: 84, dribbling: 94, defending: 42, physical: 64 },
  },
  {
    id: 'lewandowski', name: 'Robert Lewandowski', short: 'LEWANDOWSKI',
    pos: 'ST', number: 9, slot: 'ST', x: 50, y: 16,
    img: lewandowski,
    stats: { pace: 74, shooting: 92, passing: 72, dribbling: 78, defending: 40, physical: 84 },
  },
  {
    id: 'raphinha', name: 'Raphinha', short: 'RAPHINHA',
    pos: 'LW', number: 11, slot: 'LW', x: 20, y: 26,
    img: raphinha,
    stats: { pace: 90, shooting: 82, passing: 80, dribbling: 86, defending: 55, physical: 78 },
  },
];

export const INITIAL_BENCH = [
  {
    id: 'ferran', name: 'Ferran Torres', short: 'FERRAN',
    pos: 'ST', number: 7, img: ferran,
    stats: { pace: 84, shooting: 78, passing: 72, dribbling: 78, defending: 45, physical: 68 },
  },
  {
    id: 'fermin', name: 'Fermín López', short: 'FERMÍN',
    pos: 'CM', number: 16, img: fermin,
    stats: { pace: 78, shooting: 76, passing: 78, dribbling: 80, defending: 62, physical: 74 },
  },
  {
    id: 'gavi', name: 'Gavi', short: 'GAVI',
    pos: 'CM', number: 6, img: gavi,
    stats: { pace: 78, shooting: 68, passing: 82, dribbling: 84, defending: 74, physical: 80 },
  },
  {
    id: 'casado', name: 'Marc Casadó', short: 'CASADÓ',
    pos: 'CDM', number: 17, img: casado,
    stats: { pace: 70, shooting: 60, passing: 80, dribbling: 74, defending: 78, physical: 76 },
  },
  {
    id: 'martin', name: 'Gerard Martín', short: 'G. MARTÍN',
    pos: 'LB', number: 35, img: martin,
    stats: { pace: 76, shooting: 55, passing: 70, dribbling: 68, defending: 78, physical: 80 },
  },
  {
    id: 'araujo', name: 'Ronald Araújo', short: 'ARAÚJO',
    pos: 'CB', number: 4, img: araujo,
    stats: { pace: 82, shooting: 55, passing: 68, dribbling: 62, defending: 88, physical: 90 },
  },
  {
    id: 'pena', name: 'Iñaki Peña', short: 'I. PEÑA',
    pos: 'GK', number: 13, img: pena,
    stats: { pace: 50, shooting: 38, passing: 76, dribbling: 55, defending: 42, physical: 70 },
  },
];

export const STAT_LABELS = [
  { key: 'pace', label: 'Pace' },
  { key: 'shooting', label: 'Shooting' },
  { key: 'passing', label: 'Passing' },
  { key: 'dribbling', label: 'Dribbling' },
  { key: 'defending', label: 'Defending' },
  { key: 'physical', label: 'Physical' },
];

// Which starter slots a bench player can replace (keeps it positional).
export function slotsForPosition(pos) {
  if (pos === 'ST' || pos === 'LW' || pos === 'RW') return ['ST', 'LW', 'RW'];
  if (pos === 'CM' || pos === 'CDM') return ['CM-R', 'CM-L', 'CDM'];
  if (pos === 'CB') return ['CB-R', 'CB-L'];
  if (pos === 'LB') return ['LB'];
  if (pos === 'RB') return ['RB'];
  if (pos === 'GK') return ['GK'];
  return [];
}
