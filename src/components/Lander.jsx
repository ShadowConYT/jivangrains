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
      <video src={LanderVideo} autoPlay muted loop className="lv blur-sm absolute h-screen object-cover -z-10"/>
      <Navbar />
      <div className="mainTxt flex flex-col items-center align-middle justify-center z-10">
        <h1 className="text-3xl md:text-8xl text-white font-bold font-mont uppercase tracking-wider">Jivan Grains</h1>
        <p className="text-white text-lg md:text-3xl">"Harvested with Love, Served with Tradition"</p>
      </div>
  </>            
  )
}

