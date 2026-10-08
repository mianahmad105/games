import StaticPage from "@/components/StaticPage";
import { site } from "@/lib/site";

export const metadata = { title: "Terms of Use" };

export default function TermsPage() {
  return (
    <StaticPage title="Terms of Use">
      <p>By using {site.name} you agree to these terms.</p>
      <h2>Use of the site</h2>
      <p>The site is free for personal, non-commercial use. Do not attempt to disrupt or misuse the service.</p>
      <h2>Game content</h2>
      <p>
        All games belong to their respective developers and publishers. {site.name} only embeds them and does not
        claim ownership.
      </p>
      <h2>No warranty</h2>
      <p>The site and games are provided “as is” without warranties of any kind.</p>
      <h2>Changes</h2>
      <p>We may update these terms at any time. Continued use of the site means you accept the updated terms.</p>
    </StaticPage>
  );
}
