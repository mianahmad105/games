import StaticPage from "@/components/StaticPage";
import { site } from "@/lib/site";

export const metadata = { title: "Privacy Policy" };

export default function PrivacyPage() {
  return (
    <StaticPage title="Privacy Policy">
      <p>
        <strong>Last updated:</strong> October 16, 2026
      </p>
      <p>
        This Privacy Policy explains what information {site.name} ({site.url}) collects when you visit the site,
        how we use it, and the choices you have. By using {site.name}, you agree to the collection and use of
        information in line with this policy.
      </p>

      <h2>Information we collect</h2>
      <p>We do not require you to create an account to play games. The information we may collect includes:</p>
      <ul>
        <li>
          <strong>Log data</strong> — your browser type, device type, pages visited, time spent on the site, and
          referring URL, collected automatically whenever you visit.
        </li>
        <li>
          <strong>Cookies and similar technologies</strong> — small files stored on your device to remember your
          preferences and, for our advertising partners, to show more relevant ads.
        </li>
        <li>
          <strong>Information you provide</strong> — if you use our <a href="/contact">contact form</a>, we
          receive the name, email address and message you enter so we can reply to you.
        </li>
      </ul>

      <h2>How we use this information</h2>
      <p>We use the information above to:</p>
      <ul>
        <li>Operate, maintain and improve the games library and site performance;</li>
        <li>Understand which games and pages are popular so we can curate the site better;</li>
        <li>Respond to messages sent through the contact form;</li>
        <li>Detect, prevent and address technical issues or abuse; and</li>
        <li>Serve advertising, including through Google AdSense, that helps keep the site free.</li>
      </ul>

      <h2>Cookies, Google AdSense &amp; advertising</h2>
      <p>
        We use cookies to remember your preferences, such as accepting our cookie notice. Third-party vendors,
        including Google, use cookies to serve ads on {site.name} based on your prior visits to this website or
        other websites. Google&apos;s use of advertising cookies enables it and its partners to serve ads to you
        based on your visit to our site and/or other sites on the internet.
      </p>
      <p>
        You may opt out of personalised advertising by visiting Google&apos;s{" "}
        <a href="https://adssettings.google.com" target="_blank" rel="noopener noreferrer">
          Ads Settings
        </a>
        . You can also opt out of some third-party vendors&apos; use of cookies for personalised advertising by
        visiting{" "}
        <a href="https://www.aboutads.info/choices/" target="_blank" rel="noopener noreferrer">
          www.aboutads.info
        </a>
        . For more detail on how cookies work on this site, see our <a href="/cookie-policy">Cookie Policy</a>.
      </p>
      <p>
        You can disable cookies entirely in your browser settings, though some parts of the site may not work as
        intended if you do.
      </p>

      <h2>Third-party games and links</h2>
      <p>
        Games on {site.name} are loaded from third-party developers and distribution partners inside an embedded
        frame, and some pages link out to third-party sites. Those providers operate under their own privacy
        policies and may collect data independently while you play — we encourage you to review their policies.
        {site.name} is not responsible for the privacy practices of third-party games or sites.
      </p>

      <h2>Your rights (GDPR &amp; UK)</h2>
      <p>If you are located in the European Economic Area or the UK, you have the right to:</p>
      <ul>
        <li>Request access to the personal data we hold about you;</li>
        <li>Request correction or deletion of that data;</li>
        <li>Object to or restrict how we process your data; and</li>
        <li>Request a copy of your data in a portable format.</li>
      </ul>
      <p>
        To exercise any of these rights, email <a href={`mailto:${site.email}`}>{site.email}</a>. Advertising
        cookies are controlled by third-party vendors as described above.
      </p>

      <h2>Your rights (California / CCPA)</h2>
      <p>
        If you are a California resident, you have the right to know what personal information is collected, to
        request deletion of that information, and to opt out of the sale or sharing of personal information. We do
        not sell personal information. To make a request, email <a href={`mailto:${site.email}`}>{site.email}</a>.
      </p>

      <h2>Children&apos;s privacy</h2>
      <p>
        {site.name} is not directed at children under the age of 13, and we do not knowingly collect personal
        information from children. If you believe a child has provided us with personal information, please
        contact us at <a href={`mailto:${site.email}`}>{site.email}</a> so we can remove it.
      </p>

      <h2>Data retention &amp; security</h2>
      <p>
        We keep contact form messages only as long as needed to respond to and resolve your request. We take
        reasonable technical measures to protect any information we hold, but no method of transmission or storage
        is ever completely secure.
      </p>

      <h2>Changes to this policy</h2>
      <p>
        We may update this Privacy Policy from time to time. Changes take effect as soon as they are posted on
        this page, and the &ldquo;Last updated&rdquo; date above will reflect the most recent revision. We
        encourage you to review this page periodically.
      </p>

      <h2>Contact us</h2>
      <p>
        Questions about this policy or how your data is handled? Email{" "}
        <a href={`mailto:${site.email}`}>{site.email}</a> or use our <a href="/contact">contact page</a>.
      </p>
    </StaticPage>
  );
}
