import Naruto from "../../assets/n1.mp4";

export default function Home() {
  return (
    <div className="w-full">
      <div className="">
        <video muted loop autoPlay className="h-screen w-full">
          <source src={Naruto} />
        </video>
      </div>
    </div>
  );
}
