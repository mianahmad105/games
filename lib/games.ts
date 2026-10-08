import raw from "@/data/games.json";

export type Game = {
  id: string;
  title: string;
  description: string;
  instructions: string;
  url: string;
  category: string;
  tags: string[];
  thumb: string;
  width: number;
  height: number;
};

export type Genre = { slug: string; name: string; count: number };

export const games = raw as Game[];

export function slugify(s: string) {
  return s.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, "") || "other";
}

// Stable pseudo-rating between 4.0 and 5.0 derived from the game id.
export function ratingFor(id: string) {
  let h = 0;
  for (const c of id) h = (h * 31 + c.charCodeAt(0)) % 1000;
  return (4 + (h % 11) / 10).toFixed(1);
}

export const genres: Genre[] = (() => {
  const map = new Map<string, Genre>();
  for (const g of games) {
    const slug = slugify(g.category);
    const cur = map.get(slug) ?? { slug, name: g.category.replace(/^\./, ""), count: 0 };
    cur.count++;
    map.set(slug, cur);
  }
  return [...map.values()].sort((a, b) => b.count - a.count);
})();

export function getGame(id: string) {
  return games.find((g) => g.id === id);
}

export function getGenre(slug: string) {
  return genres.find((g) => g.slug === slug);
}

export function gamesInGenre(slug: string) {
  return games.filter((g) => slugify(g.category) === slug);
}

export function relatedGames(game: Game, n = 8) {
  const same = games.filter((g) => g.category === game.category && g.id !== game.id);
  const other = games.filter((g) => g.category !== game.category);
  return [...same.slice(0, n / 2), ...other.slice(0, n)].slice(0, n);
}

export function stripForCard(g: Game) {
  return { id: g.id, title: g.title, category: g.category, thumb: g.thumb };
}
export type CardGame = ReturnType<typeof stripForCard>;
