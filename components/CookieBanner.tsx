"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

const KEY = "cookie-consent";

export default function CookieBanner() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    try {
      setShow(!localStorage.getItem(KEY));
    } catch {
      setShow(true);
    }
  }, []);

  if (!show) return null;

  return (
    <div className="cookie box" role="dialog" aria-label="Cookie notice">
      <span>
        We use cookies and ads to keep games free. <Link href="/privacy">Privacy</Link>
      </span>
      <button
        className="btn btn-pop"
        onClick={() => {
          try {
            localStorage.setItem(KEY, "1");
          } catch {}
          setShow(false);
        }}
      >
        Accept
      </button>
    </div>
  );
}
