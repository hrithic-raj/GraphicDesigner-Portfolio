'use client';
import glowMiddle from '../assets/glow-last-middle.png';
import qube1Left from '../assets/qubes1-left.png';
import qube1Right from '../assets/qubes1-right.png';
import qube2Left from '../assets/qubes2-left.png';
import qube2Right from '../assets/qubes2-right.png';
function Portfolio() {
  return (
    <div id="portfolio" className="relative h-screen w-full bg-[#00000] pt-10 overflow-hidden">
      <img 
        src={glowMiddle.src}
        draggable={false}
        onDragStart={(e) => e.preventDefault()}
        onMouseDown={(e) => e.preventDefault()}
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 object-contain pointer-events-none select-none z-1"
      />
      <div className="flex justify-center items-center h-full w-full">
        <div className="grid grid-cols-2 grid-rows-2 h-[60%] w-3/4 gap-5 select-none">
          <div className="
            group relative
            flex justify-center items-center
            bg-[url('../assets/gradient-left.png')] bg-cover bg-center
            rounded-4xl border border-[#FF6600]/50
            overflow-hidden cursor-pointer
          ">
            <div className="h-1/3 w-1/2 flex justify-center items-center">
              <div className="
                flex flex-col items-center
                h-full w-full
                transition-transform duration-300 ease-out
                group-hover:scale-110 lg:group-hover:scale-115
              ">
                
                {/* MAIN TITLE */}
                <p className="
                  text-white
                  font-[montserrat] font-medium
                  leading-none
                  text-3xl-monitor
                  text-[36px] sm:text-[42px] md:text-[50px] lg:text-[50px]
                  whitespace-nowrap
                ">
                  Branding.
                </p>

                {/* SUBTEXT */}
                <p className="
                  text-[#FF6600]/80
                  font-[montserrat] font-light
                  leading-none
                  text-[8px] sm:text-[9px] md:text-[10px]
                  whitespace-nowrap
                ">
                  Brand Identities I Created
                </p>

              </div>
            </div>
            <img 
              src={qube1Left.src} 
              alt="" 
              className='qube-size-3xl-monitor absolute top-0 left-0 opacity-70 -translate-y-1 -translate-x-1 group-hover:scale-130 group-hover:-translate-x-7 transition-transform duration-300 ease-out'
              draggable={false}
              onDragStart={(e) => e.preventDefault()}
              onMouseDown={(e) => e.preventDefault()}
            />
            <img 
              src={qube1Right.src} 
              alt="" 
              className='qube-size-3xl-monitor absolute bottom-0 right-0 opacity-70 translate-y-4 translate-x-4 group-hover:scale-130 group-hover:translate-x-7 transition-transform duration-300 ease-out'
              draggable={false}
              onDragStart={(e) => e.preventDefault()}
              onMouseDown={(e) => e.preventDefault()}
            />
          </div>
          <div className="
            group relative
            flex justify-center items-center
            bg-[url('../assets/gradient-right.png')] bg-cover bg-center
            rounded-4xl border border-[#FF6600]/50
            overflow-hidden cursor-pointer
          ">
            <div className="h-1/3 w-1/2 flex justify-center items-center">
              <div className="
                flex flex-col items-center
                h-full w-full
                transition-transform duration-300 ease-out
                group-hover:scale-110 lg:group-hover:scale-115
              ">
                
                {/* MAIN TITLE */}
                <p className="
                  text-white
                  font-[montserrat] font-medium
                  leading-none
                  text-3xl-monitor
                  text-[36px] sm:text-[42px] md:text-[50px] lg:text-[50px]
                  whitespace-nowrap
                ">
                  Posters.
                </p>

                {/* SUBTEXT */}
                <p className="
                  text-[#FF6600]/80
                  font-[montserrat] font-light
                  leading-none
                  text-[8px] sm:text-[9px] md:text-[10px]
                  whitespace-nowrap
                ">
                  Posters that I made for various Brands
                </p>

              </div>
            </div>
            <img 
              src={qube2Left.src} 
              alt="" 
              className='qube-size-3xl-monitor absolute top-0 left-0 opacity-70 -translate-y-4 -translate-x-4 group-hover:scale-130 group-hover:-translate-x-7 transition-transform duration-300 ease-out'
              draggable={false}
              onDragStart={(e) => e.preventDefault()}
              onMouseDown={(e) => e.preventDefault()}
            />
            <img 
              src={qube2Right.src} 
              alt="" 
              className='qube-size-3xl-monitor absolute bottom-0 right-0 opacity-70 translate-y-1 translate-x-1 group-hover:scale-130 group-hover:translate-x-7 transition-transform duration-300 ease-out'
              draggable={false}
              onDragStart={(e) => e.preventDefault()}
              onMouseDown={(e) => e.preventDefault()}
            />
          </div>
          <div className="
            group relative
            flex justify-center items-center
            bg-[url('../assets/gradient-left.png')] bg-cover bg-center
            rounded-4xl border border-[#FF6600]/50
            overflow-hidden cursor-pointer
          ">
            <div className="h-1/3 w-1/2 flex justify-center items-center">
              <div className="
                flex flex-col items-center
                h-full w-full
                transition-transform duration-300 ease-out
                group-hover:scale-110 lg:group-hover:scale-115
              ">
                
                {/* MAIN TITLE */}
                <p className="
                  text-white
                  font-[montserrat] font-medium
                  leading-none
                  text-3xl-monitor
                  text-[36px] sm:text-[42px] md:text-[50px] lg:text-[50px]
                  whitespace-nowrap
                ">
                  Videos.
                </p>

                {/* SUBTEXT */}
                <p className="
                  text-[#FF6600]/80
                  font-[montserrat] font-light
                  leading-none
                  text-[8px] sm:text-[9px] md:text-[10px]
                  whitespace-nowrap
                ">
                  Videos that I made for various company
                </p>

              </div>
            </div>
            <img 
              src={qube1Left.src} 
              alt="" 
              className='qube-size-3xl-monitor absolute top-0 left-0 opacity-70 -translate-y-1 -translate-x-1 group-hover:scale-130 group-hover:-translate-x-7 transition-transform duration-300 ease-out'
              draggable={false}
              onDragStart={(e) => e.preventDefault()}
              onMouseDown={(e) => e.preventDefault()}
            />
            <img 
              src={qube1Right.src} 
              alt="" 
              className='qube-size-3xl-monitor absolute bottom-0 right-0 opacity-70 translate-y-4 translate-x-4 group-hover:scale-130 group-hover:translate-x-7 transition-transform duration-300 ease-out'
              draggable={false}
              onDragStart={(e) => e.preventDefault()}
              onMouseDown={(e) => e.preventDefault()}
            />
          </div>
          <div className="
            group relative
            flex justify-center items-center
            bg-[url('../assets/gradient-right.png')] bg-cover bg-center
            rounded-4xl border border-[#FF6600]/50
            overflow-hidden cursor-pointer
          ">
            <div className="h-1/3 w-1/2 flex justify-center items-center">
              <div className="
                flex flex-col items-center justify-center
                h-full w-full
                transition-transform duration-300 ease-out
                group-hover:scale-110 lg:group-hover:scale-115
              ">
                
                {/* MAIN TITLE */}
                <p className="
                  text-white
                  font-[montserrat] font-medium
                  leading-none
                  text-[36px] sm:text-[42px] md:text-[50px] lg:text-[45px]
                  whitespace-nowrap
                  text-3xl-monitor
                ">
                  Animations.
                </p>

                {/* SUBTEXT */}
                <p className="
                  text-[#FF6600]/80
                  font-[montserrat] font-light
                  leading-none
                  text-[8px] sm:text-[9px] md:text-[10px]
                  whitespace-nowrap
                ">
                  Animation & Motion Graphics that i made for various Brands 
                </p>

              </div>
            </div>
            <img 
              src={qube2Left.src} 
              alt="" 
              className='qube-size-3xl-monitor absolute top-0 left-0 opacity-70 -translate-y-4 -translate-x-4 group-hover:scale-130 group-hover:-translate-x-7 transition-transform duration-300 ease-out'
              draggable={false}
              onDragStart={(e) => e.preventDefault()}
              onMouseDown={(e) => e.preventDefault()}
            />
            <img 
              src={qube2Right.src} 
              alt="" 
              className='qube-size-3xl-monitor absolute bottom-0 right-0 opacity-70 translate-y-1 translate-x-1 group-hover:scale-130 group-hover:translate-x-7 transition-transform duration-300 ease-out'
              draggable={false}
              onDragStart={(e) => e.preventDefault()}
              onMouseDown={(e) => e.preventDefault()}
            />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Portfolio