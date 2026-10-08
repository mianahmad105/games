import StaticPage from "@/components/StaticPage";
import { site } from "@/lib/site";

export const metadata = { title: "About Us" };

export default function AboutPage() {
  return (
    <StaticPage title="About Us">
      <h2>Who we are</h2>
      <p>
        {site.name} is a free game wall: a big, colourful collection of HTML5 games that run right in your browser.
        No downloads, no installs, no sign-up — pick a game and press play.
      </p>
      <h2>What you can play</h2>
      <p>
        Arcade, puzzle, racing, shooting, sports, adventure and more. Every game works on desktop and most work on
        phones and tablets too.
      </p>
      <h2>How it stays free</h2>
      <p>
        Games are provided by third-party HTML5 developers and distribution partners. We may show ads to keep the
        site running and every game free to play.
      </p>
    </StaticPage>
  );
}
