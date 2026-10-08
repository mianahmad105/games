"use client";

import { useRouter, useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";
import GameCard from "./GameCard";
import type { CardGame } from "@/lib/games";

export default function SearchResults({ all }: { all: CardGame[] }) {
  const params = useSearchParams();
  const router = useRouter();
  const initial = params.get("q") ?? "";
  const [q, setQ] = useState(initial);

  useEffect(() => setQ(initial), [initial]);

  const term = q.trim().toLowerCase();
  const results = term
    ? all.filter((g) => g.title.toLowerCase().includes(term) || g.category.toLowerCase().includes(term))
    : all.slice(0, 24);

  return (
    <>
      <form
        className="searchbox"
        style={{ display: "flex", margin: "0 0 24px" }}
        onSubmit={(e) => {
          e.preventDefault();
          router.replace(`/search?q=${encodeURIComponent(q.trim())}`);
        }}
      >
        <input
          className="box"
          style={{ flex: 1 }}
          placeholder="Type a game name or genre..."
          value={q}
          onChange={(e) => setQ(e.target.value)}
          aria-label="Search games"
          autoFocus
        />
        <button className="box lift" type="submit">GO</button>
      </form>

      <h2 className="section-title" style={{ marginBottom: 16 }}>
        {term ? `${results.length} result${results.length === 1 ? "" : "s"} for “${q.trim()}”` : "Popular right now"}
      </h2>

      {results.length ? (
        <div className="grid">
          {results.map((g) => <GameCard key={g.id} game={g} />)}
        </div>
      ) : (
        <p className="empty box">No games found. Try another word.</p>
      )}
    </>
  );
}
