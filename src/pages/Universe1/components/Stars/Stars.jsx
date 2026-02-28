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
      className={`absolute star-glow ${size} ${zIndex} ${animate}`}
      style={{ animationDelay: delay, left: left, bottom: bottom }}
    />
  );
}
