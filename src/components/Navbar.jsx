import { useState } from 'react';
import SafeImage from './SafeImage.jsx';

// Thin top bar with hairline border — not a floating pill.
export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="nav">
      <div className="nav-inner">
        <a className="brand" href="#top" aria-label="Barça Hub home">
          <SafeImage
            src="/images/club-logo.png"
            alt=""
            name="Barça Hub"
            className="brand-logo"
          />
          <span className="brand-name">BARÇA HUB</span>
        </a>

        <nav className="nav-links" aria-label="Primary">
          <a href="#top">Home</a>
          <a href="#squad">Squad</a>
          <a href="#matches">Matches</a>
          <a href="#about">About</a>
        </nav>

        <div className="nav-right">
          <span className="season-tag">SEASON 25/26</span>
          <button
            className="nav-toggle"
            type="button"
            aria-expanded={open}
            aria-controls="mobile-menu"
            onClick={() => setOpen((v) => !v)}
          >
            {open ? 'Close' : 'Menu'}
          </button>
        </div>
      </div>

      {open && (
        <nav id="mobile-menu" className="nav-mobile" aria-label="Mobile">
          <a href="#top" onClick={() => setOpen(false)}>Home</a>
          <a href="#squad" onClick={() => setOpen(false)}>Squad</a>
          <a href="#matches" onClick={() => setOpen(false)}>Matches</a>
          <a href="#about" onClick={() => setOpen(false)}>About</a>
        </nav>
      )}
    </header>
  );
}
