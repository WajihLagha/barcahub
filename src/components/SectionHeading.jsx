// Small kicker + title row used above each section.
// Keeps section rhythm editorial instead of card-grid.
export default function SectionHeading({ kicker, title, aside }) {
  return (
    <div className="section-head">
      <div>
        <p className="kicker">{kicker}</p>
        <h2 className="section-title">{title}</h2>
      </div>
      {aside ? <div className="section-aside">{aside}</div> : null}
    </div>
  );
}
