import SafeImage from './SafeImage.jsx';

// Physical membership / collector card — landscape ID, foil edge,
// sharp corners. Not a rounded UI card.
export default function MemberCard() {
  return (
    <section className="member-wrap" id="about" aria-labelledby="member-title">
      <div className="member-copy">
        <p className="kicker">SOCIS · MEMBERSHIP</p>
        <h2 id="member-title" className="section-title">Carnet de soci</h2>
        <p className="member-text">
          Your pass to the hub. Season-stamped, numbered, and kept in the
          colours of the away shirt — black, purple, gold.
        </p>
        <ul className="member-points">
          <li><span>01</span>Numbered for season 25/26</li>
          <li><span>02</span>Unlocks the XI selector below</li>
          <li><span>03</span>Fan-made. No backend, no login.</li>
        </ul>
      </div>

      <div className="member-card" role="img" aria-label="Barça Hub member card for Alex Ferrer, member number 00189, season 25/26">
        <div className="member-card-top">
          <span className="member-eyebrow">BARÇA HUB MEMBER</span>
          <span className="member-season">25/26</span>
        </div>
        <div className="member-card-mid">
          <SafeImage
            src="/images/members/member-avatar.jpg"
            alt="Member avatar placeholder"
            name="Alex Ferrer"
            className="member-avatar"
          />
          <div>
            <p className="member-name">ALEX FERRER</p>
            <p className="member-no">Nº 00189 · GRADA NORD</p>
          </div>
          <span className="member-crest" aria-hidden="true">BH</span>
        </div>
        <div className="member-card-bottom">
          <span>MÉS QUE UN CLUB</span>
          <span className="member-stripe" aria-hidden="true" />
          <span>EST. 1899</span>
        </div>
      </div>
    </section>
  );
}
