export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-top">
        <p className="footer-brand">BARÇA HUB</p>
        <p className="footer-motto">Més que un club.</p>
      </div>
      <nav className="footer-links" aria-label="Footer">
        <a href="#top">Home</a>
        <a href="#squad">Squad</a>
        <a href="#matches">Matches</a>
        <a href="#about">About</a>
      </nav>
      <p className="footer-note">Fan-made project created for learning purposes.</p>
    </footer>
  );
}
