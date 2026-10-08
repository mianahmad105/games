// PixelWall logo: pixel mark + two-tone wordmark (drawn as SVG so it stays sharp).
export function LogoMark({ size = 40 }: { size?: number }) {
  const r = 22;
  return (
    <svg width={size * 1.255} height={size} viewBox="0 0 590 470" aria-hidden>
      <rect x="5" y="27" width="140" height="136" rx={r} fill="var(--navy)" />
      <rect x="232" y="7" width="140" height="135" rx={r} fill="var(--blue)" />
      <rect x="446" y="27" width="140" height="136" rx={r} fill="var(--purple)" />
      <rect x="74" y="178" width="140" height="136" rx={r} fill="var(--purple)" />
      <rect x="228" y="158" width="155" height="157" rx={r} fill="var(--coral)" />
      <path d="M284 206 L284 266 Q284 280 296 273 L336 249 Q346 242 336 235 L296 211 Q284 202 284 206 Z" fill="#fff" />
      <rect x="397" y="178" width="140" height="136" rx={r} fill="var(--navy)" />
      <rect x="150" y="329" width="140" height="136" rx={r} fill="var(--blue)" />
      <rect x="332" y="329" width="140" height="136" rx={r} fill="var(--coral)" />
    </svg>
  );
}

export default function Logo({ size = 34 }: { size?: number }) {
  return (
    <span className="logo-lockup" style={{ fontSize: size * 0.8 }}>
      <LogoMark size={size} />
      <span className="logo-word">
        <span style={{ color: "var(--navy)" }}>Pixel</span>
        <span style={{ color: "var(--coral)" }}>Wall</span>
      </span>
    </span>
  );
}
