'use client'
import glowMiddle from '../assets/glow-last-middle.png';
function Portfolio() {
  return (
    <div id="portfolio" className="relative h-screen w-full bg-[#00000] border-b-2 pt-10">
      <img 
        src={glowMiddle.src}
        draggable={false}
        onDragStart={(e) => e.preventDefault()}
        onMouseDown={(e) => e.preventDefault()}
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 object-contain pointer-events-none select-none z-1"
      />
      <div className="flex justify-center items-center h-full w-full">
        <div className="grid grid-cols-2 grid-rows-2 h-[60%] w-3/4 gap-5">
          {/* <div className="border w-full h-full rounded-4xl 
            bg-linear-to-br from-[#000000] from-0% via-[#000000] via-50% to-[#FF6600] to-100%">
          </div> */}
          <div className="bg-[url('../assets/gradient-left.png')] bg-cover bg-center rounded-4xl border border-[#FF6600]/50">
          </div>
          <div className="bg-[url('../assets/gradient-right.png')] bg-cover bg-center rounded-4xl border border-[#FF6600]/50">
          </div>
          <div className="bg-[url('../assets/gradient-left.png')] bg-cover bg-center rounded-4xl border border-[#FF6600]/50">
          </div>
          <div className="bg-[url('../assets/gradient-right.png')] bg-cover bg-center rounded-4xl border border-[#FF6600]/50">
          </div>
        </div>
      </div>
    </div>
  )
}

export default Portfolio