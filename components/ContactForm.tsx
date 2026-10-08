"use client";

import { useState } from "react";

// No backend: the form opens the visitor's email app with the message filled in.
export default function ContactForm({ email }: { email: string }) {
  const [sent, setSent] = useState(false);

  return (
    <form
      className="form"
      onSubmit={(e) => {
        e.preventDefault();
        const data = new FormData(e.currentTarget);
        const subject = encodeURIComponent(`Message from ${data.get("name")}`);
        const body = encodeURIComponent(`${data.get("message")}\n\nReply to: ${data.get("email")}`);
        window.location.href = `mailto:${email}?subject=${subject}&body=${body}`;
        setSent(true);
      }}
    >
      <label>
        Name
        <input name="name" required />
      </label>
      <label>
        Email
        <input name="email" type="email" required />
      </label>
      <label>
        Message
        <textarea name="message" rows={5} required />
      </label>
      <button className="btn btn-pop lift" type="submit" style={{ width: "fit-content" }}>
        Send message
      </button>
      {sent && <p className="notice">Your email app should open now. Thanks for writing!</p>}
    </form>
  );
}
