import Navbar from "@/components/Navbar";
// import bg from '../assets/bg.png';
import bg from '../assets/To site 1.jpg';
import cutPhoto from '../assets/To site cut.png';
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
          className="w-full h-full -translate-y-20 p-20 object-cover pointer-events-none select-none z-0"
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
        <div className="absolute top-1/3 left-1/2 
          -translate-x-1/2 -translate-y-1/2
          w-[75%]
          h-[200px]
          flex justify-center items-center
          z-3"
        >
          <TextPressure className="w-full z-3"/>
        </div>

        {/* Text Top image */}
        <img src={cutPhoto.src} className="absolute object-cover p-20 top-0 -translate-y-20 pointer-events-none select-none z-5 w-full h-full" alt="" />


        {/* Text box */}
        <div className="absolute top-[70%] w-full h-[120px] flex justify-center">
          <div className="w-3/4 px-5 flex justify-between">
            {/* Left text box */}
            <div className="flex flex-col">
              <span className="text-[16px] leading-[112.5%] text-white font-[CabinetGrotesk] font-medium">
                Hey, I am
              </span>
              <span className="font-extrabold text-[35px] leading-[112.5%] text-[#FF6600] font-[CabinetGrotesk]">
                Muhamed Muhsin P
              </span>
              <span className="font-medium text-[16px] leading-[112.5%] text-white font-[CabinetGrotesk]">Graphic Designer cum Video Editor</span>
            </div>
            {/* Right text box */}
            <div className="flex flex-col ">
              <span className="font-[CabinetGrotesk] font-extrabold text-[31px] leading-[112.5%] text-[#FF6600]">Creating Visuals</span>
              <span className="flex"><span className="font-[CabinetGrotesk] font-light text-[18px] leading-[112.5%] text-white">That Don't Just</span ><span className="font-[CabinetGrotesk] font-bold text-[18px] leading-[112.5%] text-white"> Look Good</span></span>
              <span className="font-[CabinetGrotesk] font-extrabold text-[26px] leading-[112.5%] text-[#FF6600]">They Feel Right</span>
            </div>
          </div>
        </div>

        <div className="absolute bottom-0 left-1/8 bg-[#0F0F0F] w-3/4 h-14 z-10">

        </div>

      </div>
      <div className="h-screen w-full bg-[#00000] border-b-2"></div>
      <div className="h-screen w-full bg-[#00000] border-b-2"></div>

    </div>
  );
}
