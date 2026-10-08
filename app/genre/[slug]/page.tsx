import Link from "next/link";
import { notFound } from "next/navigation";
import GameCard from "@/components/GameCard";
import { genres, getGenre, gamesInGenre, stripForCard } from "@/lib/games";

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return genres.map((g) => ({ slug: g.slug }));
}

export async function generateMetadata({ params }: Props) {
  const genre = getGenre((await params).slug);
  return { title: genre ? `${genre.name} Games` : "Genre" };
}

export default async function GenrePage({ params }: Props) {
  const { slug } = await params;
  const genre = getGenre(slug);
  if (!genre) notFound();
  const list = gamesInGenre(slug);

  return (
    <>
      <p className="crumbs">
        <Link href="/">Wall</Link> → <Link href="/genres">Genres</Link> → {genre.name}
      </p>
      <h1 className="page-title">{genre.name} Games ({list.length})</h1>
      <div className="chips" style={{ marginBottom: 24 }}>
        {genres.map((g) => (
          <Link key={g.slug} href={`/genre/${g.slug}`} className={`chip${g.slug === slug ? " on" : ""}`}>
            {g.name}<span>({g.count})</span>
          </Link>
        ))}
      </div>
      <div className="grid">
        {list.map((g) => <GameCard key={g.id} game={stripForCard(g)} />)}
      </div>
    </>
  );
}
