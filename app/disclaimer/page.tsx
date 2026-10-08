import StaticPage from "@/components/StaticPage";
import { site } from "@/lib/site";

export const metadata = { title: "Disclaimer" };

export default function DisclaimerPage() {
  return (
    <StaticPage title="Disclaimer">
      <p>
        The games on {site.name} are created by third-party developers. We are not responsible for their content,
        availability or any data they collect.
      </p>
      <p>
        Game names, images and trademarks belong to their owners. If you own a game listed here and want it removed,
        contact us at <a href={`mailto:${site.email}`}>{site.email}</a>.
      </p>
    </StaticPage>
  );
}
