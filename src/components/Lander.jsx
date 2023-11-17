import { Carousel } from "@material-tailwind/react";
import Basmati from '../assets/Basmati.webp';
import IdlyRice from '../assets/IdlyRice.jpg';
import Ponni from '../assets/Ponni.jpeg';
import Seeragasamba from '../assets/Seeragasamba.jpg';
 
export default function Lander() {
  return (
    <Carousel
      className="rounded-xl"
      navigation={({ setActiveIndex, activeIndex, length }) => (
        <div className="absolute bottom-0 left-2/4 z-50 flex -translate-x-2/4 gap-2">
          {new Array(length).fill("").map((_, i) => (
            <span
              key={i}
              className={`block h-1 cursor-pointer rounded-2xl transition-all content-[''] ${
                activeIndex === i ? "w-8 bg-black" : "w-4 bg-white/50"
              }`}
              onClick={() => setActiveIndex(i)}
            />
          ))}
        </div>
      )}
    >
        <div className="flex justify-evenly mt-16 w-full h-full object-cover">
            <div className="flex flex-col items-center justify-center h-96">
                <h1 className="text-4xl font-bold text-gray-800">Welcome to Rice Mill</h1>
                <p className="text-gray-600">We are the best rice mill in the world</p>
            </div>
            <div>
                <img src={Ponni} className="w-96"/>
            </div>
        </div>

        <div className="flex justify-evenly mt-16">
            <div className="flex flex-col items-center justify-center h-96">
                <h1 className="text-4xl font-bold text-gray-800">Welcome to Rice Mill</h1>
                <p className="text-gray-600">We are the best rice mill in the world</p>
            </div>
            <div>
                <img src={IdlyRice} className="w-96"/>
            </div>
        </div>

        <div className="flex justify-evenly mt-16">
            <div className="flex flex-col items-center justify-center h-96">
                <h1 className="text-4xl font-bold text-gray-800">Welcome to Rice Mill</h1>
                <p className="text-gray-600">We are the best rice mill in the world</p>
            </div>
            <div>
                <img src={Seeragasamba} className="w-96"/>
            </div>
        </div>

        <div className="flex justify-evenly mt-16">
            <div className="flex flex-col items-center justify-center h-96">
                <h1 className="text-4xl font-bold text-gray-800">Welcome to Rice Mill</h1>
                <p className="text-gray-600">We are the best rice mill in the world</p>
            </div>
            <div>
                <img src={Basmati} className="w-96"/>
            </div>
        </div>


    </Carousel>
  )
}

