import StaticPage from "@/components/StaticPage";
import ContactForm from "@/components/ContactForm";
import { site } from "@/lib/site";

export const metadata = { title: "Contact" };

export default function ContactPage() {
  return (
    <StaticPage title="Contact">
      <p>
        Questions, game suggestions or a broken game to report? Send us a message or email{" "}
        <a href={`mailto:${site.email}`}>{site.email}</a>.
      </p>
      <ContactForm email={site.email} />
    </StaticPage>
  );
}
