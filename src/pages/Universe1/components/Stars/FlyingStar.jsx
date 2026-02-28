import { useRive } from "@rive-app/react-canvas";
import { useEffect } from "react";

export default function FlyingStar({ riveFile, interval, delay, ...props }) {
  const { rive, RiveComponent: FlyingStar } = useRive({
    riveFile: riveFile,
    stateMachines: "STAR SM",
    autoBind: true,
  });

  useEffect(() => {
    if (rive) {
      const intervalId = setInterval(() => {
        rive.reset({
          stateMachines: "STAR SM",
          autoplay: true,
        });
      }, interval);

      const timeoutId = setTimeout(() => {
        rive.play();
      }, delay);

      return () => {
        clearInterval(intervalId);
        clearTimeout(timeoutId);
      };
    }
  }, [rive, delay, interval]);

  return <FlyingStar {...props} />;
}
