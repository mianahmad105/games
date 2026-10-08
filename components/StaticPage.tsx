import Link from "next/link";

export default function StaticPage({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <>
      <p className="crumbs"><Link href="/">Wall</Link> → {title}</p>
      <h1 className="page-title">{title}</h1>
      <article className="prose box">{children}</article>
    </>
  );
}
