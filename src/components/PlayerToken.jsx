import SafeImage from './SafeImage.jsx';
import { playerImg } from '../data/players.js';

// One player dot on the tactical board. Small by design —
// the pitch is the object, not eleven big cards.
export default function PlayerToken({ player, selected, onSelect }) {
  return (
    <button
      type="button"
      className={'token' + (selected ? ' token-selected' : '')}
      style={{ left: `${player.x}%`, top: `${player.y}%` }}
      onClick={onSelect}
      aria-pressed={selected}
      aria-label={`${player.short}, ${player.pos}, number ${player.number}`}
    >
      <span className="token-disc">
        <SafeImage
          src={playerImg(player)}
          alt=""
          name={player.short}
          className="token-img"
        />
        <span className="token-num">{player.number}</span>
      </span>
      <span className="token-label">
        <strong>{player.short}</strong>
        <em>{player.pos}</em>
      </span>
    </button>
  );
}
