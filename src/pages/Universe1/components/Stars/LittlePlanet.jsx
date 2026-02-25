import { useRive, useViewModelInstanceBoolean } from "@rive-app/react-webgl2";

export default function LittlePlanet({
  size,
  left,
  bottom,
  className,
  ...props
}) {
  const { rive, RiveComponent } = useRive({
    src: "little_planet.riv",
    stateMachines: "LITTLE PLANET SM",
    autoplay: true,
    autoBind: true,
    useOffscreenRenderer: true,
  });
  const viewModelInstance = rive?.viewModelInstance;

  const { value: isActive } = useViewModelInstanceBoolean(
    "isHover",
    viewModelInstance
  );
  return (
    <div
      {...props}
      className={`absolute pointer-events-auto ${className} ${size} ${bottom} ${left} ${
        isActive ? "cursor-pointer" : ""
      }`}
    >
      <RiveComponent />
    </div>
  );
}
