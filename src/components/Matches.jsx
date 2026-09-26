import SectionHeading from './SectionHeading.jsx';

const COMP_CLASS = {
  'La Liga': 'comp-laliga',
  'Champions League': 'comp-ucl',
  'Copa del Rey': 'comp-copa',
};

// Fixture ledger — rows with hairlines, not cards.
export default function Matches({ matches }) {
  return (
    <section id="matches" aria-labelledby="matches-title">
      <SectionHeading
        kicker="CALENDARI · RESULTATS"
        title="Matches"
        aside={<span className="formation-tag">6 FIXTURES</span>}
      />
      <ol className="fixture-list">
        {matches.map((m) => (
          <li key={m.id} className="fixture">
            <span className={`comp-tag ${COMP_CLASS[m.competition] || ''}`}>
              {m.competition}
            </span>
            <span className="fixture-main">
              <strong>
                {m.home ? 'Barça vs ' : 'Barça @ '}{m.opponent}
              </strong>
              <em>{m.note}</em>
            </span>
            <span className="fixture-meta">
              <span>{m.date}</span>
              <span className={m.status === 'played' ? 'score' : 'vs'}>
                {m.status === 'played' ? m.score : m.home ? 'HOME' : 'AWAY'}
              </span>
            </span>
            <span
              className={'status-dot ' + (m.status === 'played' ? 'played' : 'soon')}
              aria-label={m.status === 'played' ? 'Played' : 'Scheduled'}
            />
          </li>
        ))}
      </ol>
    </section>
  );
}
