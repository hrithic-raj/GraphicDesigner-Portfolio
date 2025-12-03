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
          <div className="
            group
            flex justify-center items-center
            bg-[url('../assets/gradient-left.png')] bg-cover bg-center
            rounded-4xl border border-[#FF6600]/50
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
          </div>
          <div className="
            group
            flex justify-center items-center
            bg-[url('../assets/gradient-right.png')] bg-cover bg-center
            rounded-4xl border border-[#FF6600]/50
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
          </div>
          <div className="
            group
            flex justify-center items-center
            bg-[url('../assets/gradient-left.png')] bg-cover bg-center
            rounded-4xl border border-[#FF6600]/50
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
          </div>
          <div className="
            group
            flex justify-center items-center
            bg-[url('../assets/gradient-right.png')] bg-cover bg-center
            rounded-4xl border border-[#FF6600]/50
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
          </div>
        </div>
      </div>
    </div>
  )
}

export default Portfolio