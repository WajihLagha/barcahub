import SafeImage from './SafeImage.jsx';
import { playerImg } from '../data/players.js';

// Substitutes strip: compact rows, click to load comparison.
export default function Bench({ bench, selectedBenchId, onPickBench }) {
  return (
    <section aria-labelledby="bench-title">
      <div className="bench-head">
        <h3 id="bench-title">Bench</h3>
        <p>Tap a substitute to compare him with the starter.</p>
      </div>
      <ul className="bench-list">
        {bench.map((p) => {
          const active = selectedBenchId === p.id;
          return (
            <li key={p.id}>
              <button
                type="button"
                className={'bench-item' + (active ? ' bench-active' : '')}
                aria-pressed={active}
                onClick={() => onPickBench(p.id)}
              >
                <SafeImage
                  src={playerImg(p)}
                  alt={`Portrait placeholder for ${p.name}`}
                  name={p.short}
                  className="bench-img"
                />
                <span className="bench-info">
                  <strong>{p.name}</strong>
                  <em>{p.pos} · Nº {p.number}</em>
                </span>
                <span className="bench-cta" aria-hidden="true">{active ? '●' : '○'}</span>
              </button>
            </li>
          );
        })}
      </ul>
    </section>
  );
}
