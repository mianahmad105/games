import Link from "next/link";
import { ratingFor, type CardGame } from "@/lib/games";

export default function GameCard({ game }: { game: CardGame }) {
  return (
    <Link href={`/game/${game.id}`} className="card">
      <div className="card-art">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src={game.thumb} alt={game.title} loading="lazy" />
        <span className="card-tag">{game.category}</span>
      </div>
      <div className="card-body">
        <h3 className="card-title">{game.title}</h3>
        <div className="card-meta">
          <span>★ {ratingFor(game.id)}</span>
          <span className="card-play">▶ PLAY</span>
        </div>
      </div>
    </Link>
  );
}
