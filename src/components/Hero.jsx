// Compact editorial hero — big statement type, small meta rail.
// No SaaS subhead, no giant CTA.
export default function Hero({ nextMatch }) {
  return (
    <section className="hero" aria-labelledby="hero-title">
      <div className="hero-main">
        <p className="kicker">EST. 1899 — FAN-MADE HUB · SEASON 25/26</p>
        <h1 id="hero-title" className="hero-title">
          Més que
          <br />
          un club<span className="hero-dot">.</span>
        </h1>
        <p className="hero-sub">
          A home for the players, the matches and the moments that define Barça.
        </p>
        <dl className="hero-meta">
          <div>
            <dt>Formation</dt>
            <dd>4–3–3</dd>
          </div>
          <div>
            <dt>Focus</dt>
            <dd>Starting XI</dd>
          </div>
          <div>
            <dt>Fixtures</dt>
            <dd>6 listed</dd>
          </div>
        </dl>
      </div>

      <aside className="hero-rail" aria-label="Next fixture">
        <p className="rail-label">NEXT FIXTURE</p>
        {nextMatch ? (
          <>
            <p className="rail-comp">{nextMatch.competition}</p>
            <p className="rail-opp">
              {nextMatch.home ? 'Barça vs ' : 'Barça @ '}
              {nextMatch.opponent}
            </p>
            <p className="rail-date">{nextMatch.date}</p>
            <a className="rail-link" href="#matches">Full fixture list →</a>
          </>
        ) : (
          <p className="rail-opp">Fixture list below</p>
        )}
      </aside>
    </section>
  );
}
