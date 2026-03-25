import blackHole from "../../assets/videos/0001-0250.webm";

export default function Universe1() {
  return (
    <video autoPlay loop muted playsInline>
      <source src={blackHole} type='video/webm' />
      Votre navigateur ne supporte pas la vidéo.
    </video>
  );
}
