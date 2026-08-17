import Image from "next/image";

export default function Logo({ size = 46 }: { size?: number }) {
  return (
    <Image
      src="/logo.png"
      alt="Damask Textile Pakistan logo"
      width={size}
      height={size}
      className="brand-logo"
      priority
    />
  );
}
