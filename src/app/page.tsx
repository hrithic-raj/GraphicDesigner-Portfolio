'use client'
import About from "@/components/About";
import Home from "@/components/Home";
import Navbar from "@/components/Navbar";
import Portfolio from "@/components/Portfolio";
import glowRightMiddle from '../assets/glow-middle.png';
import linesRightMiddle from '../assets/right2.png';

export default function Main() {
  return (
    <div className="relative">
      <Navbar/>
      <Home/>
      <img 
          src={glowRightMiddle.src}
          draggable={false}
          onDragStart={(e) => e.preventDefault()}
          onMouseDown={(e) => e.preventDefault()}
          className="absolute top-[15%] right-0 object-contain pointer-events-none select-none z-1 "
      />

      {/* Lines Left */}
      <img
          src={linesRightMiddle.src}
          draggable={false}
          onDragStart={(e) => e.preventDefault()}
          onMouseDown={(e) => e.preventDefault()}
          className="absolute top-[25%] right-0 object-contain pointer-events-none select-none mix-blend-overlay opacity-90 z-2 "
      />
      <About/>
      <Portfolio/>
    </div>
  );
}
