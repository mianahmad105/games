import StaticPage from "@/components/StaticPage";
import { site } from "@/lib/site";

export const metadata = { title: "Cookie Policy" };

export default function CookiePolicyPage() {
  return (
    <StaticPage title="Cookie Policy">
      <p>
        <strong>Last updated:</strong> October 16, 2026
      </p>
      <p>
        This Cookie Policy explains what cookies are, which ones {site.name} uses, and how you can control them.
        It should be read alongside our <a href="/privacy">Privacy Policy</a>.
      </p>

      <h2>What is a cookie?</h2>
      <p>
        A cookie is a small text file that a website stores on your device. Cookies let a site remember your
        preferences between visits and allow advertising partners to show ads that are more relevant to you.
      </p>

      <h2>The types of cookies we use</h2>
      <ul>
        <li>
          <strong>Necessary cookies</strong> — used to remember simple preferences, such as whether you have
          already dismissed our cookie notice. The site cannot function properly without these.
        </li>
        <li>
          <strong>Analytics cookies</strong> — help us understand which games and pages are popular, so we can
          decide what to add or improve. This data is aggregated and not used to identify you personally.
        </li>
        <li>
          <strong>Advertising cookies</strong> — set by third-party ad networks, including Google AdSense, to
          serve ads and measure their performance. These may track your browsing across different websites.
        </li>
      </ul>

      <h2>Third-party advertising cookies</h2>
      <p>
        Google and its advertising partners use cookies to serve ads based on your visits to {site.name} and other
        sites on the internet. This allows Google and its partners to serve ads that may be relevant to your
        interests. You can learn more about how Google uses cookies for advertising, and manage your preferences,
        at{" "}
        <a href="https://policies.google.com/technologies/ads" target="_blank" rel="noopener noreferrer">
          Google&apos;s Advertising Policy page
        </a>{" "}
        and{" "}
        <a href="https://adssettings.google.com" target="_blank" rel="noopener noreferrer">
          Google Ads Settings
        </a>
        .
      </p>

      <h2>How to control or delete cookies</h2>
      <p>
        Most browsers let you view, manage, and delete cookies through their settings menu. You can usually choose
        to block all cookies, block only third-party cookies, or clear existing cookies at any time. Doing so may
        affect how some parts of {site.name} display or function. You can also opt out of personalised advertising
        across many providers at once via{" "}
        <a href="https://www.aboutads.info/choices/" target="_blank" rel="noopener noreferrer">
          www.aboutads.info
        </a>
        .
      </p>

      <h2>Changes to this policy</h2>
      <p>
        We may update this Cookie Policy from time to time to reflect changes in the cookies we use or for legal
        reasons. Updates will be posted on this page with a revised &ldquo;Last updated&rdquo; date.
      </p>

      <h2>Contact us</h2>
      <p>
        Questions about our use of cookies? Email <a href={`mailto:${site.email}`}>{site.email}</a> or visit our{" "}
        <a href="/contact">contact page</a>.
      </p>
    </StaticPage>
  );
}
