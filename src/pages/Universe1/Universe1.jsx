import blackHole from "../../assets/videos/0001-0250.webm";

export default function Universe1() {
  return (
    <div className='w-screen h-screen bg-amber-300'>
      <video
        autoPlay
        loop
        muted
        playsInline
        className='w-full h-full object-cover'
      >
        <source src={blackHole} type='video/webm' />
        Votre navigateur ne supporte pas la vidéo.
      </video>
    </div>
  );
}
