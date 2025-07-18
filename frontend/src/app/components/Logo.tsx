import Image from "next/image";

export default function Logo({ width = 54, height = 54, style = {}, ...props }: {
  width?: number;
  height?: number;
  style?: React.CSSProperties;
  [key: string]: any;
}) {
  return (
    <Image
      src="/logo.png"
      alt="AI Recruit Logo"
      width={width}
      height={height}
      style={{ height: 'auto', width, ...style }}
      priority
      {...props}
    />
  );
}
