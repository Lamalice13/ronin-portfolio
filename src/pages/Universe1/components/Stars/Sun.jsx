import { ReactComponent as SunSvg } from "@/assets/stars/Sun.svg";

export default function Sun({ size, top, left, className, ...props }) {
  return (
    <SunSvg
      {...props}
      className={`absolute sun-glow ${className} ${size} ${top} ${left}`}
    />
  );
}
