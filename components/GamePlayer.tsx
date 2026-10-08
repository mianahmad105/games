"use client";

import { useRef, useState } from "react";

type Props = { title: string; url: string; thumb: string };

export default function GamePlayer({ title, url, thumb }: Props) {
  const [playing, setPlaying] = useState(false);
  const [reported, setReported] = useState(false);
  const screen = useRef<HTMLDivElement>(null);
  const banner = `★ ${title} ★ INSERT COIN ★ PRESS PLAY ★ `.repeat(3);

  return (
    <section className="player">
      <div className="marquee" aria-hidden>
        <div>{banner}</div>
      </div>
      <div className="screen" ref={screen}>
        {playing ? (
          <iframe src={url} title={title} allow="autoplay; fullscreen; gamepad" allowFullScreen />
        ) : (
          <div className="screen-idle">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={thumb} alt="" />
            <h2>Ready Player One</h2>
            <p>Hit PLAY to load the game.</p>
          </div>
        )}
      </div>
      <div className="player-bar">
        <button className="btn btn-pop lift" onClick={() => setPlaying(true)}>
          {playing ? "Playing" : "Play"}
        </button>
        {playing && (
          <button className="btn lift" onClick={() => screen.current?.requestFullscreen?.()}>
            Fullscreen
          </button>
        )}
        <button className="btn lift" onClick={() => setReported(true)} disabled={reported}>
          {reported ? "Thanks — reported" : "Report"}
        </button>
      </div>
    </section>
  );
}
