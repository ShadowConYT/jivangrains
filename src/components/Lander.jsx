import Navbar from "./Navbar";

/* Onclick scroll to section function */
function onCliq(section){
  document.getElementById(section).scrollIntoView({behavior:'smooth'})
}

 
export default function Lander() {
  return (
    <div className="h-screen w-screen">
      <video src="https://videos.pexels.com/video-files/1560989/1560989-hd_1280_720_30fps.mp4" autoPlay muted loop className="lv blur-sm absolute w-screen h-screen object-cover -z-10"/>
      <Navbar />
      <div className="mainTxt ml-2 mr-2 md:ml-0 md:mr-0 flex flex-col items-center align-middle justify-center z-10">
        <h1 className="txt text-3xl md:text-8xl text-white font-bold font-mont uppercase tracking-wider">Jivan Grains</h1>
        <p className="text-white text-md md:text-3xl">"Harvested with Love, Served with Tradition"</p>
        <div className="flex space-x-8 mt-5">
          <button onClick={() => onCliq('products')} id="butt" class="btn-shine text-sm md:text-lg">
            <span>Our Products</span>
          </button>
          <button onClick={() => onCliq('contact')} id="butt" class="btn-shine text-sm md:text-lg">
            <span>Contact Us</span>
          </button>
        </div>
      </div>
  </div>            
  )
}

