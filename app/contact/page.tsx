import StaticPage from "@/components/StaticPage";
import ContactForm from "@/components/ContactForm";
import { site } from "@/lib/site";

export const metadata = { title: "Contact" };

export default function ContactPage() {
  return (
    <StaticPage title="Contact">
      <h2>We&apos;d love to hear from you</h2>
      <p>
        Whether you&apos;ve found a bug, want to suggest a game, have a business question, or need to report
        something about our content, the fastest way to reach the {site.name} team is the form below or a direct
        email to <a href={`mailto:${site.email}`}>{site.email}</a>.
      </p>

      <h2>General support &amp; game issues</h2>
      <p>
        Spotted a game that won&apos;t load, lags badly, or looks broken on your device? Let us know the game name
        and what device or browser you&apos;re using and we&apos;ll take a look. Suggestions for new games are
        always welcome too.
      </p>

      <h2>Advertising &amp; business inquiries</h2>
      <p>
        For advertising, partnership or business-related questions, email us at{" "}
        <a href={`mailto:${site.email}`}>{site.email}</a> with a short description of your request.
      </p>

      <h2>Copyright &amp; content removal requests</h2>
      <p>
        If you own the rights to a game listed on {site.name} and want it removed or credited correctly, see our{" "}
        <a href="/dmca">DMCA &amp; copyright policy</a> for how to submit a takedown request.
      </p>

      <h2>Response time</h2>
      <p>
        {site.name} is run by a small, independent team, so please allow a few business days for a reply. We read
        every message that comes in — thank you for your patience.
      </p>

      <ContactForm email={site.email} />
    </StaticPage>
  );
}
