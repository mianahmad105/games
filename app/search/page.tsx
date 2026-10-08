import Link from "next/link";
import { Suspense } from "react";
import SearchResults from "@/components/SearchResults";
import { games, stripForCard } from "@/lib/games";

export const metadata = { title: "Search" };

export default function SearchPage() {
  return (
    <>
      <p className="crumbs"><Link href="/">Wall</Link> → Search</p>
      <h1 className="page-title">Search Games</h1>
      <Suspense>
        <SearchResults all={games.map(stripForCard)} />
      </Suspense>
    </>
  );
}
