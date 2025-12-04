'use client';
import About from "@/components/About";
import Home from "@/components/Home";
import Navbar from "@/components/Navbar";
import Portfolio from "@/components/Portfolio";
import glowRightMiddle from '../assets/glow-middle.png';
import linesRightMiddle from '../assets/right2.png';
import glowBottom from '../assets/glow-bottom.png';
import linesBottom from '../assets/bottom1.png';
import Footer from "@/components/Footer";

export default function Main() {
  return (
    <div className="relative h-full w-full overflow-hidden">
      <Navbar/>
      <Home/>
      {/* Glow Middle */}
      <img 
          src={glowRightMiddle.src}
          draggable={false}
          onDragStart={(e) => e.preventDefault()}
          onMouseDown={(e) => e.preventDefault()}
          className="absolute top-[15%] right-0 object-contain pointer-events-none select-none z-1 "
      />

      {/* Lines Middle */}
      <img
          src={linesRightMiddle.src}
          draggable={false}
          onDragStart={(e) => e.preventDefault()}
          onMouseDown={(e) => e.preventDefault()}
          className="absolute top-[25%] right-0 object-contain pointer-events-none select-none mix-blend-overlay opacity-90 z-2 "
      />

      {/* Glow Bottom */}
      <img 
          src={glowBottom.src}
          draggable={false}
          onDragStart={(e) => e.preventDefault()}
          onMouseDown={(e) => e.preventDefault()}
          className="absolute bottom-0 left-0 object-contain pointer-events-none select-none z-1 "
      /> 

      {/* Lines Bottom */}
      <img
          src={linesBottom.src}
          draggable={false}
          onDragStart={(e) => e.preventDefault()}
          onMouseDown={(e) => e.preventDefault()}
          className="absolute bottom-0 left-0 object-contain pointer-events-none select-none mix-blend-overlay opacity-90 z-2"
      />
      <About/>
      <Portfolio/>
      <Footer/>
    </div>
  );
}
