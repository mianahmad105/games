import Link from "next/link";
import { notFound } from "next/navigation";
import GameCard from "@/components/GameCard";
import GamePlayer from "@/components/GamePlayer";
import { games, getGame, ratingFor, relatedGames, slugify, stripForCard } from "@/lib/games";

type Props = { params: Promise<{ id: string }> };

export function generateStaticParams() {
  return games.map((g) => ({ id: g.id }));
}

export async function generateMetadata({ params }: Props) {
  const game = getGame((await params).id);
  return game ? { title: game.title, description: game.description.slice(0, 160) } : { title: "Game" };
}

export default async function GamePage({ params }: Props) {
  const game = getGame((await params).id);
  if (!game) notFound();
  const genreSlug = slugify(game.category);

  return (
    <>
      <p className="crumbs">
        <Link href="/">Wall</Link> → <Link href={`/genre/${genreSlug}`}>{game.category}</Link> → {game.title}
      </p>
      <h1 className="page-title">{game.title}</h1>

      <GamePlayer title={game.title} url={game.url} thumb={game.thumb} />

      <div className="info-grid">
        <div className="panel box">
          <h2>About</h2>
          <p>{game.description}</p>
          {game.instructions && (
            <>
              <h2>How to play</h2>
              <p>{game.instructions}</p>
            </>
          )}
          <div className="facts">
            <Link href={`/genre/${genreSlug}`} className="chip">{game.category}</Link>
            <span className="chip">Rating {ratingFor(game.id)}</span>
          </div>
        </div>
        <div className="panel box">
          <h2>Info</h2>
          <p>Browser HTML5 — desktop &amp; mobile.</p>
          {game.tags.length > 0 && (
            <div className="facts">
              {game.tags.slice(0, 8).map((t) => <span key={t} className="chip">{t}</span>)}
            </div>
          )}
        </div>
      </div>

      <section className="section">
        <div className="section-head">
          <h2 className="section-title">More on the wall</h2>
        </div>
        <div className="grid">
          {relatedGames(game).map((g) => <GameCard key={g.id} game={stripForCard(g)} />)}
        </div>
      </section>
    </>
  );
}
