// Downloads the public GameMonetize feed into data/games.json.
// Run: npm run fetch-games
import { writeFile } from "node:fs/promises";

const PAGES = 4;
const PER_PAGE = 100;
const sleep = (ms) => new Promise((r) => setTimeout(r, ms));

async function getPage(page) {
  const url = `https://gamemonetize.com/feed.php?format=0&num=${PER_PAGE}&page=${page}`;
  for (let attempt = 1; attempt <= 6; attempt++) {
    const res = await fetch(url);
    if (res.ok) return res.json();
    if (res.status !== 429) throw new Error(`Feed failed: ${res.status}`);
    const wait = attempt * 15000;
    console.log(`rate limited, waiting ${wait / 1000}s...`);
    await sleep(wait);
  }
  throw new Error("Feed keeps rate limiting, try again later");
}

const all = [];
for (let page = 1; page <= PAGES; page++) {
  const items = await getPage(page);
  for (const g of items) {
    all.push({
      id: String(g.id),
      title: g.title.trim(),
      description: g.description?.trim() ?? "",
      instructions: g.instructions?.trim() ?? "",
      url: g.url,
      category: g.category || "Other",
      tags: (g.tags || "").split(",").map((t) => t.trim()).filter(Boolean),
      thumb: g.thumb,
      width: Number(g.width) || 800,
      height: Number(g.height) || 600,
    });
  }
  console.log(`page ${page}: ${items.length} games`);
  await sleep(3000);
}

const unique = [...new Map(all.map((g) => [g.id, g])).values()];
await writeFile(new URL("../data/games.json", import.meta.url), JSON.stringify(unique));
console.log(`Saved ${unique.length} games`);
