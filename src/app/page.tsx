import Navbar from "@/components/Navbar";
// import bg from '../assets/bg.png';
import bg from '../assets/bgfinal.jpg';
import glowLeft from '../assets/glow-left.png';
import glowRight from '../assets/glow-right.png';
import linesLeft from '../assets/left1.png';
import linesRight from '../assets/right1.png';
import TextPressure from "@/components/TextPressure";

export default function Home() {
  return (
    <div className="h-screen">
      <Navbar/>
      <div className="relative h-full bg-[#000000] overflow-hidden">

        {/* Background image behind everything */}
        <img
          src={bg.src}
          className="w-full h-full object-cover pointer-events-none select-none z-0"
        />
        {/* Glow Left */}
        <img 
          src={glowLeft.src}
          className="absolute top-0 left-0 object-contain pointer-events-none select-none z-1"
        />

        {/* Glow Right */}
        <img 
          src={glowRight.src}
          className="absolute top-0 right-0 object-contain pointer-events-none select-none z-1"
        />

        {/* Lines Left */}
        <img
          src={linesLeft.src}
          className="absolute top-0 left-0 object-contain pointer-events-none select-none mix-blend-overlay opacity-90 z-2"
        />

        {/* Lines Right */}
        <img
          src={linesRight.src}
          className="absolute top-0 right-0 object-contain pointer-events-none select-none mix-blend-overlay opacity-90 z-2"
        />

        {/* Pressure Text */}
        {/* <div className="absolute top-1/3 translate-x-16 -translate-y-1/2 z-30 w-[75%]"> */}
        <div className="absolute top-1/3 left-1/2 
          -translate-x-1/2 -translate-y-1/2 
          w-[70%]
          h-[200px]
          flex justify-center items-center
          z-3"
        >
          <TextPressure className="w-full"/>
        </div>

        {/* Text Top image */}
        {/* <img src="" alt="" /> */}

        <div className="absolute bottom-0 left-1/8 bg-[#0F0F0F] w-3/4 h-14">

        </div>

      </div>
      <div className="h-screen w-full bg-[#00000]"></div>

    </div>
  );
}
