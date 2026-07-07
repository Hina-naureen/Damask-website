const LINE_STEP = 9;
const LINE_DX = 34;
const lineOffsets = Array.from({ length: 18 }, (_, i) => -34 + i * LINE_STEP);

export default function Logo({ size = 46 }: { size?: number }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 100 100"
      className="brand-logo"
      role="img"
      aria-label="Damask Textile Pakistan logo"
    >
      <defs>
        <linearGradient id="damaskLogoFill" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#f2814a" />
          <stop offset="55%" stopColor="#ef6723" />
          <stop offset="100%" stopColor="#c24e15" />
        </linearGradient>
        <clipPath id="damaskDiamond">
          <path d="M50 10 L90 50 L50 90 L10 50 Z" />
        </clipPath>
      </defs>

      <rect x="2" y="2" width="96" height="96" rx="24" fill="url(#damaskLogoFill)" />

      <g clipPath="url(#damaskDiamond)" stroke="#fdf6ec" strokeWidth="3.4" strokeLinecap="round">
        {lineOffsets.map((x) => (
          <line key={x} x1={x} y1="100" x2={x + LINE_DX} y2="0" />
        ))}
      </g>

      {/* tip accents matching the printed mark */}
      <circle cx="50" cy="12" r="1.6" fill="#fdf6ec" />
      <circle cx="10" cy="50" r="1.6" fill="#fdf6ec" />
    </svg>
  );
}
