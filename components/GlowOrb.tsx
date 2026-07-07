type GlowOrbProps = {
  color?: "orange" | "gold";
  size?: number;
  style?: React.CSSProperties;
};

export default function GlowOrb({ color = "orange", size = 380, style }: GlowOrbProps) {
  return (
    <div
      className={`glow-orb ${color}`}
      style={{ width: size, height: size, ...style }}
      aria-hidden="true"
    />
  );
}
