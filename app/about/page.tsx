import StaticPage from "@/components/StaticPage";
import { site } from "@/lib/site";

export const metadata = { title: "About Us" };

export default function AboutPage() {
  return (
    <StaticPage title="About Us">
      <h2>Welcome to {site.name}</h2>
      <p>
        {site.name} is an independently run game wall built for one simple reason: we wanted a place where anyone
        could open a browser tab and start playing within seconds, without creating an account, installing an app,
        or handing over a credit card. {site.tagline}
      </p>

      <h2>Why we built this</h2>
      <p>
        We kept running into the same problem on other game sites — pop-ups before the game even loaded, broken
        links, and titles that hadn&apos;t been checked in years. So we set out to build a cleaner wall: a tidy grid
        of games sorted by genre, a fast search box, and a player page that gets out of the way once a game starts.
        That is still the goal behind every change we make to the site.
      </p>

      <h2>What you&apos;ll find here</h2>
      <p>
        The library spans arcade, puzzle, racing, shooting, sports, adventure and strategy titles, all built with
        HTML5 so they run directly in the browser on desktop, tablet or phone. New games are added regularly, and
        older ones are reviewed from time to time to make sure the links still work and the games still play the
        way they should.
      </p>

      <h2>How we choose games</h2>
      <p>
        Every game listed on {site.name} is checked by hand before it goes live. We load it, play it for a few
        minutes, and confirm it works without excessive pop-ups, broken assets, or anything that would make for a
        bad first impression. Games are sourced from third-party HTML5 developers and distribution partners —{" "}
        {site.name} does not develop the games itself, and each one remains the property of its original creator.
        You can read more about how we handle third-party content on our{" "}
        <a href="/disclaimer">disclaimer page</a>.
      </p>

      <h2>How the site stays free</h2>
      <p>
        Running the servers, bandwidth and time to maintain a library like this costs money, so {site.name} shows
        a modest amount of advertising, including ads served through Google AdSense. Ads help keep every single
        game on this site free to play, with no paywalls and no subscriptions. We explain exactly what that means
        for your data on our <a href="/privacy">privacy policy</a>.
      </p>

      <h2>Who&apos;s behind {site.name}</h2>
      <p>
        {site.name} is maintained by a small, independent team that handles everything from picking games to fixing
        bugs reported by players. We don&apos;t have a call centre, but we do read every message that comes in
        through the <a href="/contact">contact page</a> — whether it&apos;s a broken game, a suggestion, or a
        takedown request.
      </p>

      <h2>Get in touch</h2>
      <p>
        Found a bug, have a game to suggest, or just want to say hi? Visit our{" "}
        <a href="/contact">contact page</a> or email us directly at{" "}
        <a href={`mailto:${site.email}`}>{site.email}</a>. We try to reply to every message within a few business
        days.
      </p>
    </StaticPage>
  );
}
