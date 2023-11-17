import { Carousel } from "@material-tailwind/react";
import Basmati from '../assets/Basmati.webp';
import IdlyRice from '../assets/IdlyRice.jpg';
import Ponni from '../assets/Ponni.jpeg';
import Seeragasamba from '../assets/Seeragasamba.jpg';
import Navbar from "./Navbar";
import LanderVideo from '../assets/LanderVideo.mp4';
 
export default function Lander() {
  return (
    <>
      <video src={LanderVideo} autoPlay muted loop className="lv absolute h-screen object-cover -z-10"/>
      <Navbar />
      <div className="mainTxt flex flex-col items-center align-middle justify-center z-10">
        <h1 className="text-8xl text-white font-bold">Jivan Grains</h1>
        <p className="text-white text-3xl">Harvested with Love, Served with Tradition</p>
      </div>
  </>            
  )
}

