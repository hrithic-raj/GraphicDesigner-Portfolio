import aboutPhoto from '../assets/about.png';
function About() {
  return (
    <div id="about" className="h-screen w-full bg-[#00000] border-b-2">
      <div className="flex justify-center items-center h-full w-full">
        {/* About Box */}
        <div className="flex justify-between h-1/2 w-[60%]">
          {/* Photo */}
          <div className="flex justify-center items-center w-[40%] h-full">
            <img 
              src={aboutPhoto.src} 
              alt=""
              className='w-[80%] h-[85%] rounded-[16%] object-cover' 
            />
          </div>
          {/* Info */}
          <div className="flex justify-center items-center w-[60%] h-full">
            <div className='flex flex-col justify-between w-[90%] h-[60%]'>
              <span className='font-[montserrat] font-bold text-[20px] leading-5 tracking-[0.02em] text-[#FF6600]'>About Me</span>
              {/* <p>I’m a passionate Graphic Designer and Video Editor who thrives on turning ideas into powerful visuals and compelling stories. With a keen eye for detail and a love for aesthetics, I craft designs and edits that connect emotionally and communicate clearly. From branding and motion graphics to cinematic edits, I focus on blending creativity with strategy to bring each project to life. I believe every frame, color, and composition should serve a purpose to inspire, engage, and leave a lasting impression</p> */}
              <p className="
                font-montserrat font-normal
                text-[16px] leading-5
                tracking-[0.02em]
                text-white
              ">
                I’m a passionate Graphic Designer and Video Editor who thrives on turning ideas into powerful 
                visuals and compelling stories. With a keen eye for detail and a love for aesthetics, I craft 
                designs and edits that connect emotionally and communicate clearly. From branding and motion 
                graphics to cinematic edits, I focus on blending creativity with strategy to bring each project 
                to life. I believe every frame, color, and composition should serve a purpose to inspire, engage, 
                and leave a lasting impression.
              </p>
              <div className='flex justify-between mt-5 h-[20%] gap-5'>
                <button className='bg-[#FF6600] w-1/2 h-full rounded-[36px] cursor-pointer text-[34px] hover:text-[30px]'>
                  <span
                    className='font-[montserrat] font-normal leading-[27px] text-center tracking-[0.02em] text-white'
                  >
                    Resume
                  </span>
                </button>
                <button className='border border-[#FF6600] w-1/2 h-full rounded-[36px] cursor-pointer text-[34px] hover:text-[30px]'>
                  <span
                    className='font-[montserrat] font-normal leading-[27px] text-center tracking-[0.02em] text-white'
                  >
                    Hire me
                  </span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default About