'use client'
import glowMiddle from '../assets/glow-last-middle.png';
function Portfolio() {
  return (
    <div id="portfolio" className="relative h-screen w-full bg-[#00000] border-b-2">
      <img 
        src={glowMiddle.src}
        draggable={false}
        onDragStart={(e) => e.preventDefault()}
        onMouseDown={(e) => e.preventDefault()}
        className="absolute top-[10%] left-1/3 object-contain pointer-events-none select-none z-1"
      />
      <div className="flex justify-center items-center h-full w-full">
        <div className="grid grid-cols-2 grid-rows-2 h-[60%] w-3/4 gap-5">
          <div className="border w-full h-full rounded-4xl"></div>
          <div className="border w-full h-full rounded-4xl"></div>
          <div className="border w-full h-full rounded-4xl"></div>
          <div className="border w-full h-full rounded-4xl"></div>
        </div>
      </div>
    </div>
  )
}

export default Portfolio