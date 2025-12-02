import Navbar from "@/components/Navbar";
import bg from '../assets/bg.png';
import glowLeft from '../assets/glow-left.png';
import glowRight from '../assets/glow-right.png';
import linesLeft from '../assets/left1.png';
import linesRight from '../assets/right1.png';

export default function Home() {
  return (
    <div>
      <Navbar/>
      <div className="relative h-screen bg-[#000000] overflow-hidden">

        {/* Background image behind everything */}
        <img
          src={bg.src}
          className="inset-0 w-full h-full object-cover pointer-events-none select-none -z-10"
        />
        {/* Glow Left */}
        <img 
          src={glowLeft.src}
          className="absolute top-0 left-0 object-contain pointer-events-none select-none"
        />

        {/* Glow Right */}
        <img 
          src={glowRight.src}
          className="absolute top-0 right-0 object-contain pointer-events-none select-none"
        />

        {/* Lines Left */}
        <img
          src={linesLeft.src}
          className="absolute top-0 left-0 object-contain pointer-events-none select-none mix-blend-overlay opacity-90"
        />

        {/* Lines Right */}
        <img
          src={linesRight.src}
          className="absolute top-0 right-0 object-contain pointer-events-none select-none mix-blend-overlay opacity-90"
        />

      </div>

    </div>
  );
}
