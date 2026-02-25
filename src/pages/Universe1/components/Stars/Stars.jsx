import { ReactComponent as StarSvg } from "@/assets/stars/Star.svg";

export function Stars({
  size,
  left,
  bottom,
  "aria-hidden": ariaHidden,
  className: zIndex,
  animate,
  delay,
}) {
  return (
    <StarSvg
      aria-hidden={ariaHidden}
      className={`absolute star-glow ${size} ${left} ${bottom} ${zIndex} ${animate}`}
      style={{ animationDelay: delay }}
    />
  );
}
