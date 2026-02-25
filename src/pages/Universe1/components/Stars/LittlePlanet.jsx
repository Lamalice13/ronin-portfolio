import {
  Fit,
  Layout,
  useRive,
  useViewModelInstanceBoolean,
} from "@rive-app/react-webgl2";

export default function LittlePlanet({
  size,
  left,
  bottom,
  className,
  ...props
}) {
  const { rive, RiveComponent } = useRive({
    src: "littlePlanet.riv",
    stateMachines: "Little Planet SM",
    autoplay: true,
    autoBind: true,
    useOffscreenRenderer: true,
    layout: new Layout({
      fit: Fit.Contain,
    }),
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
