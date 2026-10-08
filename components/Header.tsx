"use client";

import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { useState } from "react";
import Logo from "./Logo";

const links = [
  { href: "/", label: "Play" },
  { href: "/genres", label: "Genres" },
  { href: "/search", label: "Search" },
  { href: "/about", label: "About Us" },
  { href: "/contact", label: "Contact" },
];

export default function Header() {
  const path = usePathname();
  const router = useRouter();
  const [open, setOpen] = useState(false);
  const [q, setQ] = useState("");

  const isOn = (href: string) =>
    href === "/" ? path === "/" || path.startsWith("/game") : path.startsWith(href.replace("/genres", "/genre"));

  return (
    <header className={`topbar${open ? " open" : ""}`}>
      <Link href="/" className="logo" aria-label="PixelWall home" onClick={() => setOpen(false)}>
        <Logo />
      </Link>
      <button className="menu-btn box" aria-label="Toggle menu" aria-expanded={open} onClick={() => setOpen(!open)}>
        {open ? "✕" : "☰"}
      </button>
      <nav className="nav">
        {links.map((l) => (
          <Link key={l.href} href={l.href} className={`box lift${isOn(l.href) ? " on" : ""}`} onClick={() => setOpen(false)}>
            {l.label}
          </Link>
        ))}
      </nav>
      <form
        className="searchbox"
        role="search"
        onSubmit={(e) => {
          e.preventDefault();
          setOpen(false);
          router.push(`/search?q=${encodeURIComponent(q.trim())}`);
        }}
      >
        <input className="box" placeholder="Find game..." value={q} onChange={(e) => setQ(e.target.value)} aria-label="Search games" />
        <button className="box lift" type="submit">GO</button>
      </form>
    </header>
  );
}
