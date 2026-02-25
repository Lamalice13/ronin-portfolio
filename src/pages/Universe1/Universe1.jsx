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
import { useRiveFile } from "@rive-app/react-webgl2";
import { starData } from "./config/starsData";
import { Stars } from "./components/Stars/Stars";
import FlyingStar from "./components/Stars/FlyingStar";

export default function Universe1() {
  // Prévoir un state=failure avec une belle page.
  const { riveFile, status } = useRiveFile({
    src: "/fStar.riv",
  });

  if (status === "loading") {
    return null;
  }

  return (
    <div className="w-screen h-screen bg-space relative text-white overflow-hidden">
      <Header className="z-2" />

      <FlyingStar
        riveFile={riveFile}
        interval={20000}
        aria-hidden="true"
        className="absolute w-1/2 h-1/2 bottom-10% left-0 "
      />
      <FlyingStar
        riveFile={riveFile}
        interval={25000}
        delay={5000}
        aria-hidden="true"
        className="absolute w-1/3 h-1/2 top-0 left-50% translate-x-[50%] rotate-0"
      />
      <FlyingStar
        riveFile={riveFile}
        interval={30000}
        delay={10000}
        aria-hidden="true"
        className="absolute w-screen h-screen top-0 left-0 rotate-210"
      />

      {starData.map((star, i) => (
        <Stars aria-hidden="true" className="z-0" key={i} {...star} />
      ))}

      <GrandeOurse aria-hidden="true" className="z-0" {...grandeOurseData} />
      <NaineBlanche aria-hidden="true" className="z-0" {...naineBlancheData} />
      <Sun aria-hidden="true" className="z-0" {...sunData} />
      <LittlePlanet aria-hidden="true" className="z-10" {...littlePlanetData} />
    </div>
  );
}
