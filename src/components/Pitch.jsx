import PlayerToken from './PlayerToken.jsx';
import SectionHeading from './SectionHeading.jsx';

// Tactical board: CSS line-markings + optional pitch.jpg backdrop.
// Players are absolutely positioned by x/y from data.
export default function Pitch({ lineup, compareSlot, onPickStarter }) {
  return (
    <section id="squad" aria-labelledby="xi-title">
      <SectionHeading
        kicker="ALINEACIÓ · 4-3-3"
        title="Starting XI"
        aside={<span className="formation-tag">4–3–3</span>}
      />
      <div className="pitch" role="group" aria-label="Starting eleven on a football pitch">
        <div className="pitch-lines" aria-hidden="true">
          <span className="pl-halfway" />
          <span className="pl-circle" />
          <span className="pl-box-top" />
          <span className="pl-box-bottom" />
        </div>
        {lineup.map((p) => (
          <PlayerToken
            key={p.slot}
            player={p}
            selected={compareSlot === p.slot}
            onSelect={() => onPickStarter(p.slot)}
          />
        ))}
      </div>
      <p id="xi-title" className="pitch-caption">
        Select a starter on the pitch, then pick a substitute below to compare.
      </p>
    </section>
  );
}
