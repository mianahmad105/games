"use client";

import Link from "next/link";
import { useState } from "react";
import GameCard from "./GameCard";
import type { CardGame, Genre } from "@/lib/games";

type Props = { total: number; genres: Genre[]; sections: { genre: Genre; games: CardGame[] }[] };

export default function HomeWall({ total, genres, sections }: Props) {
  const [active, setActive] = useState<string | null>(null);
  const visible = active ? sections.filter((s) => s.genre.slug === active) : sections;

  return (
    <>
      <div className="genre-bar box">
        <div className="chips">
          <button className={`chip${active === null ? " on" : ""}`} onClick={() => setActive(null)}>
            All<span>({total})</span>
          </button>
          {sections.map(({ genre: g }) => (
            <button key={g.slug} className={`chip${active === g.slug ? " on" : ""}`} onClick={() => setActive(g.slug)}>
              {g.name}
              <span>({g.count})</span>
            </button>
          ))}
        </div>
        <Link href="/genres" className="link-caps">
          Browse full genre pages →
        </Link>
      </div>

      {visible.map(({ genre, games }) => (
        <section key={genre.slug} className="section">
          <div className="section-head">
            <h2 className="section-title">{genre.name}</h2>
            <Link href={`/genre/${genre.slug}`} className="link-caps">
              View all {genre.count}
            </Link>
          </div>
          <div className="grid">
            {games.map((g) => (
              <GameCard key={g.id} game={g} />
            ))}
          </div>
        </section>
      ))}
      {genres.length === 0 && <p className="empty box">No games yet.</p>}
    </>
  );
}
