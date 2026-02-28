export const grandeOurseData = {
  top: "top-[11%]",
  left: "left-[2%]",
  size: "w-[clamp(150px,20vw,300px)] h-[clamp(150px,20vw,300px)]",
};

export const naineBlancheData = {
  top: "top-[26%]",
  right: "right-[30%]",
  size: "w-[clamp(40px,6vw,120px)]",
};

export const sunData = {
  top: "top-[22%]",
  left: "left-[30%]",
  size: "w-[clamp(15px,2%,35px)]",
};

export const bigPlanetData = {
  bottom: "bottom-0",
  right: "right-0",
  size: "w-[clamp(300px,45vw,1200px)] h-[clamp(500px,45vw,1200px)]",
};

export const littlePlanetData = {
  bottom: "bottom-[8%]",
  left: "left-[clamp(60px,10%,180px)]",
  size: "w-[clamp(150px,20vw,900px)] h-[clamp(200px,20vw,900px)]",
};

export const starData = Array.from({ length: 300 }, () => ({
  size: "w-[2px]",
  left: `${(Math.random() * 100 + 2).toFixed(2)}%`,
  bottom: `${(Math.random() * 100 + 2).toFixed(2)}%`,
  animate: "animate-shine",
  delay: `${Math.floor(Math.random() * 5) * 500 + 500}ms`,
}));
