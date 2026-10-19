import StaticPage from "@/components/StaticPage";
import { site } from "@/lib/site";

export const metadata = { title: "DMCA & Copyright Policy" };

export default function DmcaPage() {
  return (
    <StaticPage title="DMCA & Copyright Policy">
      <p>
        {site.name} respects the intellectual property rights of others and expects anyone using the site to do
        the same. Games featured on {site.name} are sourced from third-party developers and distribution partners,
        and we do not claim ownership of the games themselves — only of the site that presents them.
      </p>

      <h2>Reporting a copyright concern</h2>
      <p>
        If you believe that a game, image, or other piece of content on {site.name} infringes your copyright, you
        may submit a notice to us. To be effective, please include the following information in your message:
      </p>
      <ul>
        <li>A description of the copyrighted work you believe has been infringed;</li>
        <li>The exact URL or location on {site.name} where the material appears;</li>
        <li>Your name, address, email and phone number;</li>
        <li>
          A statement that you have a good faith belief that the use is not authorised by the copyright owner, its
          agent, or the law; and
        </li>
        <li>
          A statement, under penalty of perjury, that the above information is accurate and that you are the
          copyright owner or authorised to act on their behalf.
        </li>
      </ul>

      <h2>Where to send a notice</h2>
      <p>
        Send your takedown request to <a href={`mailto:${site.email}`}>{site.email}</a> with the subject line
        &ldquo;Copyright Notice&rdquo;, or use our <a href="/contact">contact page</a>.
      </p>

      <h2>What happens next</h2>
      <p>
        Upon receiving a valid notice, we will review it and, where appropriate, remove or disable access to the
        content in question in a timely manner. We may also reach out to the original content provider for more
        information before taking action.
      </p>

      <h2>Counter-notice</h2>
      <p>
        If you believe content was removed in error, you may send a counter-notice to the same email address
        explaining why the material does not infringe copyright, along with your contact details.
      </p>

      <p>
        For more on how we source and review third-party games, see our <a href="/about">About Us</a> and{" "}
        <a href="/disclaimer">Disclaimer</a> pages.
      </p>
    </StaticPage>
  );
}
