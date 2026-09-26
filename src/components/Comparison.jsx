import { STAT_LABELS, playerImg } from '../data/players.js';
import SafeImage from './SafeImage.jsx';

function StatRow({ label, a, b }) {
  return (
    <li className="stat-row">
      <span className="stat-label">{label}</span>
      <span className="stat-bars">
        <span className="stat-bar"><span style={{ width: `${a}%` }} /></span>
        <span className="stat-bar stat-bar-b"><span style={{ width: `${b}%` }} /></span>
      </span>
      <span className="stat-vals">{a} — {b}</span>
    </li>
  );
}

// Starter vs substitute, then swap. State lives in App.jsx.
export default function Comparison({ starter, sub, slotOptions, onSlotChange, onReplace }) {
  if (!starter || !sub) return null;
  return (
    <section className="compare" aria-labelledby="compare-title" aria-live="polite">
      <div className="compare-head">
        <h3 id="compare-title">Compare &amp; replace</h3>
        {slotOptions.length > 1 && (
          <label className="slot-pick">
            Starter slot
            <select value={starter.slot} onChange={(e) => onSlotChange(e.target.value)}>
              {slotOptions.map((s) => (
                <option key={s.slot} value={s.slot}>
                  {s.slot} — {s.short}
                </option>
              ))}
            </select>
          </label>
        )}
      </div>

      <div className="compare-cols">
        <div className="compare-card">
          <p className="compare-tag">STARTER · {starter.slot}</p>
          <SafeImage
            src={playerImg(starter)}
            alt={`Portrait placeholder for ${starter.name}`}
            name={starter.short}
            className="compare-img"
          />
          <p className="compare-name">{starter.name}</p>
          <p className="compare-pos">{starter.pos} · Nº {starter.number}</p>
        </div>

        <div className="compare-card compare-card-sub">
          <p className="compare-tag">SUBSTITUTE</p>
          <SafeImage
            src={playerImg(sub)}
            alt={`Portrait placeholder for ${sub.name}`}
            name={sub.short}
            className="compare-img"
          />
          <p className="compare-name">{sub.name}</p>
          <p className="compare-pos">{sub.pos} · Nº {sub.number}</p>
        </div>
      </div>

      <ul className="stat-list">
        {STAT_LABELS.map((s) => (
          <StatRow
            key={s.key}
            label={s.label}
            a={starter.stats[s.key]}
            b={sub.stats[s.key]}
          />
        ))}
      </ul>
      <p className="stat-legend">Left bar starter · right bar substitute</p>

      <button type="button" className="replace-btn" onClick={onReplace}>
        Replace {starter.short} with {sub.short} →
      </button>
    </section>
  );
}
