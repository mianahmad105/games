import Link from "next/link";
import { site } from "@/lib/site";
import Logo from "./Logo";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-inner">
        <div>
          <Link href="/" className="footer-logo" aria-label={`${site.name} home`}>
            <Logo size={30} />
          </Link>
          <p>© {new Date().getFullYear()} {site.name}. All rights reserved.</p>
        </div>
        <nav>
          <Link href="/about">About Us</Link>
          <Link href="/contact">Contact</Link>
          <Link href="/privacy">Privacy</Link>
          <Link href="/cookie-policy">Cookie Policy</Link>
          <Link href="/terms">Terms</Link>
          <Link href="/disclaimer">Disclaimer</Link>
          <Link href="/dmca">DMCA</Link>
        </nav>
      </div>
    </footer>
  );
}
