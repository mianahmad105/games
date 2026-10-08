import Link from "next/link";
import { genres } from "@/lib/games";

export const metadata = { title: "All Genres" };

export default function GenresPage() {
  return (
    <>
      <p className="crumbs"><Link href="/">Wall</Link> → Genres</p>
      <h1 className="page-title">All Genres</h1>
      <div className="genre-grid">
        {genres.map((g) => (
          <Link key={g.slug} href={`/genre/${g.slug}`} className="genre-tile box lift">
            <strong>{g.name}</strong>
            <span>{g.count} games →</span>
          </Link>
        ))}
      </div>
    </>
  );
}
