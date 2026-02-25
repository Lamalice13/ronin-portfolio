import { ReactComponent as RoninBlack } from "@/assets/logo/roninBlack.svg";

export default function Header({ className }) {
  return (
    <header
      className={`relative px-[clamp(1.5rem,calc(3.33vw+1rem),4rem)] py-[clamp(2rem,5.5vh,4.5rem)] ${className}`}
    >
      <RoninBlack
        alt="Ronin Artisans Développeurs home"
        className="absolute left-1/2 -translate-x-1/2 w-[clamp(130px,calc(16vw+1rem),300px)] cursor-pointer"
      />
      <nav className="w-full h-[clamp(62px,calc((16vw+1rem)*0.4785),143.5px)]">
        <ul className="grid grid-cols-[10vw_10vw] gap-2 h-full justify-end items-end">
          <li className="w-full h-full"></li>

          <li className="cursor-pointer w-auto">Contact</li>
        </ul>
      </nav>
    </header>
  );
}
