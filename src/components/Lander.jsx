import Navbar from "./Navbar";
import LanderVideo from '../assets/LanderVideo.mp4';
 
export default function Lander() {
  return (
    <div>
      <video src={LanderVideo} autoPlay muted loop className="lv blur-sm absolute h-screen object-cover -z-10"/>
      <Navbar />
      <div className="mainTxt flex flex-col items-center align-middle justify-center z-10">
        <h1 className="text-3xl md:text-8xl text-white font-bold font-mont uppercase tracking-wider">Jivan Grains</h1>
        <p className="text-white text-lg md:text-3xl">"Harvested with Love, Served with Tradition"</p>
        <div className="flex space-x-8 mt-5">
          <button id="butt" class="btn-shine">
            <span>Our Products</span>
          </button>
          <button id="butt" class="btn-shine">
            <span>Contact Us</span>
          </button>
        </div>
      </div>
  </div>            
  )
}

