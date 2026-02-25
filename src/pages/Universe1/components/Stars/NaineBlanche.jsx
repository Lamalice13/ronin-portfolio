import { ReactComponent as NaineBlancheSvg } from "@/assets/stars/NaineBlanche.svg";

export default function NaineBlanche({
  size,
  top,
  right,
  className,
  ...props
}) {
  return (
    <NaineBlancheSvg
      {...props}
      className={`absolute naine-blanche-glow ${className} ${size} ${top} ${right}`}
    />
  );
}
