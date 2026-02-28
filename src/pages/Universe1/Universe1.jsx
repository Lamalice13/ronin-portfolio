import GrandeOurse from "./components/Stars/grandeOurse";
import {
  grandeOurseData,
  naineBlancheData,
  sunData,
  littlePlanetData,
} from "./config/starsData";
import NaineBlanche from "./components/Stars/NaineBlanche";
import Header from "./components/Header/Header";
import Sun from "./components/Stars/Sun";
import LittlePlanet from "./components/Stars/LittlePlanet";

import { starData } from "./config/starsData";
import { Stars } from "./components/Stars/Stars";
import FlyingStar from "./components/Stars/FlyingStar";
import { useRiveFile } from "@rive-app/react-canvas";

export default function Universe1() {
  // Prévoir un state=failure avec une belle page.
  const { riveFile: fStarFile, status: fStarStatus } = useRiveFile({
    src: "fStar.riv",
  });

  // const { riveFile: flagFile, status: flagStatus } = useRiveFile({
  //   src: "/flag.riv",
  // });

  // const { riveFile: titleFile, status: titleStatus } = useRiveFile({
  //   src: "/title.riv",
  // });

  // const { RiveComponent: Title } = useRive({
  //   riveFile: titleFile,
  //   stateMachines: "DISPLAYSM",
  //   artboard: "Artboard 1",
  //   autoBind: true,
  //   autoplay: true,
  // });

  // const { RiveComponent: Flag } = useRive({
  //   riveFile: flagFile,
  //   stateMachines: "FLAG SM",
  //   autoBind: true,
  //   autoplay: true,
  // });

  if (fStarStatus === "loading") {
    return null;
  }

  // if (titleStatus === "loading") {
  //   return null;
  // }

  // if (flagStatus === "loading") {
  //   return null;
  // }

  return (
    <div className="w-screen h-screen bg-space relative text-white overflow-hidden">
      <Header className="z-2" />
      <FlyingStar
        riveFile={fStarFile}
        interval={17000}
        delay={2000}
        aria-hidden="true"
        className="absolute w-1/2 h-1/2 top-0 right-[40%]"
      />
      <FlyingStar
        riveFile={fStarFile}
        interval={23000}
        delay={7000}
        aria-hidden="true"
        className="absolute w-1/2 h-1/2 top-1/2 right-1/5"
      />
      <FlyingStar
        riveFile={fStarFile}
        interval={28000}
        delay={12000}
        aria-hidden="true"
        className="absolute w-1/2 h-1/2 top-1/2 left-0 -translate-y-1/2 rotate-180"
      />

      {starData.map((star, i) => (
        <Stars aria-hidden="true" className="z-0" key={i} {...star} />
      ))}

      {/* <Title className="absolute top-1/2 left-1/2 w-1/3 h-1/3" />

        <Flag
          aria-hidden="true"
          className="absolute top-1/2 left-1/2 w-1/3 h-1/3"
        /> */}

      <GrandeOurse aria-hidden="true" className="z-0" {...grandeOurseData} />
      <NaineBlanche aria-hidden="true" className="z-0" {...naineBlancheData} />
      <Sun aria-hidden="true" className="z-0" {...sunData} />
      <LittlePlanet aria-hidden="true" className="z-10" {...littlePlanetData} />
      <main className="w-screen h-screen"></main>
    </div>
  );
}
