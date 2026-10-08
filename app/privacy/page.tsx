import StaticPage from "@/components/StaticPage";
import { site } from "@/lib/site";

export const metadata = { title: "Privacy Policy" };

export default function PrivacyPage() {
  return (
    <StaticPage title="Privacy Policy">
      <p>This page explains what information {site.name} collects and how it is used.</p>
      <h2>Information we collect</h2>
      <p>
        We do not require an account. We may collect basic, non-personal usage data such as pages visited, browser
        type and device type to improve the site.
      </p>
      <h2>Cookies</h2>
      <p>
        We use cookies to remember your preferences (like accepting this notice). Advertising partners, such as
        Google AdSense, may use cookies to show relevant ads. You can disable cookies in your browser settings.
      </p>
      <h2>Third-party games</h2>
      <p>
        Games are loaded from third-party providers inside an embedded frame. Those providers have their own
        privacy policies and may collect data while you play.
      </p>
      <h2>Children</h2>
      <p>We do not knowingly collect personal information from children.</p>
      <h2>Contact</h2>
      <p>
        Questions about this policy? Email <a href={`mailto:${site.email}`}>{site.email}</a>.
      </p>
    </StaticPage>
  );
}
