import { useRive } from "@rive-app/react-webgl2";
import { useEffect } from "react";

export default function GrandeOurse({ size, top, left, className, ...props }) {
  const { rive, RiveComponent } = useRive({
    src: "bigBear.riv",
    stateMachines: "Big Bear SM",
    autoplay: false,
  });

  useEffect(() => {
    if (rive) {
      const timer = setTimeout(() => {
        rive.play();
      }, 500);
      return () => clearTimeout(timer);
    }
  }, [rive]);

  return (
    <div
      {...props}
      className={`absolute ${className} ${size} ${top} ${left} star-glow `}
    >
      <RiveComponent />
    </div>
  );
}
