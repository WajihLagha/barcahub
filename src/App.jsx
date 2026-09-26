import { useMemo, useState } from 'react';
import Navbar from './components/Navbar.jsx';
import Hero from './components/Hero.jsx';
import MemberCard from './components/MemberCard.jsx';
import Pitch from './components/Pitch.jsx';
import Bench from './components/Bench.jsx';
import Comparison from './components/Comparison.jsx';
import Matches from './components/Matches.jsx';
import Footer from './components/Footer.jsx';
import { INITIAL_BENCH, STARTERS, slotsForPosition } from './data/players.js';
import { MATCHES } from './data/matches.js';
import './App.css';


function App() {
  const [lineup, setLineup] = useState(STARTERS);
  const [bench, setBench] = useState(INITIAL_BENCH);
  const [selectedBenchId, setSelectedBenchId] = useState('fermin');
  const [compareSlot, setCompareSlot] = useState('CM-R');
  const [lastMove, setLastMove] = useState(null);

  const sub = useMemo(
    () => bench.find((p) => p.id === selectedBenchId) || null,
    [bench, selectedBenchId],
  );

  // Slots this sub is allowed to take (positional).
  const slotOptions = useMemo(() => {
    if (!sub) return [];
    const slots = slotsForPosition(sub.pos);
    const inLineup = lineup.filter((p) => slots.includes(p.slot));
    return inLineup.length > 0 ? inLineup : lineup;
  }, [sub, lineup]);

  const starter = useMemo(
    () => lineup.find((p) => p.slot === compareSlot) || slotOptions[0] || null,
    [lineup, compareSlot, slotOptions],
  );

  function handlePickBench(id) {
    setSelectedBenchId(id);
    const picked = bench.find((p) => p.id === id);
    if (!picked) return;
    // Auto-pair with a starter in the same line so comparison is instant.
    const slots = slotsForPosition(picked.pos);
    const match = lineup.find((p) => slots.includes(p.slot));
    if (match) setCompareSlot(match.slot);
  }

  function handleReplace() {
    if (!starter || !sub) return;
    // Sub inherits the tactical slot + coordinates; starter keeps his
    // identity and drops to the bench.
    const promoted = { ...sub, slot: starter.slot, x: starter.x, y: starter.y };
    const demoted = { ...starter };
    delete demoted.slot;
    delete demoted.x;
    delete demoted.y;
    setLineup((prev) => prev.map((p) => (p.slot === starter.slot ? promoted : p)));
    setBench((prev) => prev.map((p) => (p.id === sub.id ? demoted : p)));
    setLastMove(`${sub.short} replaces ${starter.short} (${starter.slot})`);
  }

  const nextMatch = MATCHES.find((m) => m.status === 'scheduled') || null;

  return (
    <div id="top" className="page">
      <Navbar />
      <main className="wrap">
        <Hero nextMatch={nextMatch} />
        <MemberCard />

        <div className="xi-grid">
          <div className="xi-pitch">
            <Pitch lineup={lineup} compareSlot={starter?.slot} onPickStarter={setCompareSlot} />
          </div>
          <div className="xi-side">
            <Bench bench={bench} selectedBenchId={selectedBenchId} onPickBench={handlePickBench} />
            <Comparison
              starter={starter}
              sub={sub}
              slotOptions={slotOptions}
              onSlotChange={setCompareSlot}
              onReplace={handleReplace}
            />
            {lastMove && (
              <p className="move-note" role="status">
                Last change: {lastMove}
              </p>
            )}
          </div>
        </div>

        <Matches matches={MATCHES} />
      </main>
      <Footer />
    </div>
  );
}

export default App;
