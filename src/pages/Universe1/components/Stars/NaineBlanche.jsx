import { ReactComponent as NaineBlancheSvg } from "@/assets/stars/NaineBlanche.svg";

export default function NaineBlanche({
  size,
  top,
  right,
  className,
  ariaHidden: hidden,
}) {
  return (
    <NaineBlancheSvg
      aria-hidden={hidden}
      className={`absolute naine-blanche-glow ${className} ${size} ${top} ${right}`}
    />
  );
}
