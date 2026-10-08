import Link from "next/link";
import HomeWall from "@/components/HomeWall";
import { games, genres, gamesInGenre, stripForCard } from "@/lib/games";
import { site } from "@/lib/site";

export default function Home() {
  const featured = games[0];
  const sections = genres
    .filter((g) => g.count >= 3)
    .map((genre) => ({ genre, games: gamesInGenre(genre.slug).slice(0, 12).map(stripForCard) }));

  return (
    <>
      <section className="hero">
        <div className="hero-copy">
          <span className="badge box">Free · HTML5 · In Browser</span>
          <h1>
            {site.name} <em>Game Wall</em>
          </h1>
          <p>{site.tagline}</p>
          <div className="pills">
            <span className="pill box"><strong>{games.length}</strong> games</span>
            <span className="pill box"><strong>{genres.length}</strong> genres</span>
            <span className="pill box"><strong>0</strong> install</span>
          </div>
          <div className="row">
            <Link href={`/game/${featured.id}`} className="btn btn-pop lift">Play Featured</Link>
            <Link href="/genres" className="btn btn-sun lift">All Genres</Link>
          </div>
        </div>
        <Link href={`/game/${featured.id}`} className="poster box lift">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src={featured.thumb} alt={featured.title} />
          <div className="poster-cap">
            {featured.title}
            <span>{featured.category} · Featured</span>
          </div>
        </Link>
      </section>

      <p className="ad-note">
        Ads may be shown to keep games free. <Link href="/privacy">Privacy Policy</Link>.
      </p>

      <HomeWall total={games.length} genres={genres} sections={sections} />
    </>
  );
}
