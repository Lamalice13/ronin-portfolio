import { useRive } from "@rive-app/react-webgl2";

export function Cosmonaut({ className, ...props }) {
  const { RiveComponent } = useRive({
    src: "cosmonaut.riv",
    stateMachines: "State Machine 1",
    autoplay: true,
    useOffscreenRenderer: true,
  });

  return (
    <div
      {...props}
      className={`w-[clamp(120px,14vw,250px)] h-[clamp(120px,15vw,250px)] absolute ${className} top-[50%] left-[30%]`}
    >
      <RiveComponent />
    </div>
  );
}
