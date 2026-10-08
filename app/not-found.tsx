import Link from "next/link";

export default function NotFound() {
  return (
    <div className="empty box" style={{ marginTop: 32 }}>
      <h1 className="page-title">404 — Game over</h1>
      <p>This page doesn’t exist.</p>
      <Link href="/" className="btn btn-pop lift">Back to the wall</Link>
    </div>
  );
}
