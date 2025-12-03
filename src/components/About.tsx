import aboutPhoto from '../assets/about.png';
function About() {
  return (
    <div id="about" className="h-screen w-full bg-[#00000]">
      <div className="flex justify-center items-center h-full w-full">
        {/* About Box */}
        <div className="flex justify-between items-center min-h-1/2 h-[60%] w-[70%]">
          {/* Photo */}
          <div className="flex justify-center items-center w-[35%] h-full">
            <img 
              src={aboutPhoto.src} 
              alt=""
              className='w-[80%] h-[85%] rounded-[16%] object-cover' 
            />
          </div>
          {/* Info */}
          <div className="flex justify-start items-center w-[60%] h-[90%]">
            <div className='flex flex-col justify-center gap-5 w-[90%] h-[70%]'>
              <span className='font-[montserrat] font-bold text-[20px] leading-5 tracking-[0.02em] text-[#FF6600]'>About Me</span>
              <p className="
                font-[montserrat] font-light min-text-sm
                text-white
              ">
                I’m a passionate Graphic Designer and Video Editor who thrives on turning ideas into powerful 
                visuals and compelling stories. With a keen eye for detail and a love for aesthetics, I craft 
                designs and edits that connect emotionally and communicate clearly. From branding and motion 
                graphics to cinematic edits, I focus on blending creativity with strategy to bring each project 
                to life. I believe every frame, color, and composition should serve a purpose to inspire, engage, 
                and leave a lasting impression.
              </p>

              {/* buttons */}
              <div className='flex justify-between h-[20%] gap-5'>
                <button className='flex justify-center items-center bg-[#FF6600] w-1/2 h-full rounded-[36px] cursor-pointer text-[34px] hover:text-[30px]'>
                  <span
                    className='font-[montserrat] font-normal text-center tracking-[0.02em] text-white'
                  >
                    Resume
                  </span>
                </button>
                <button className='flex justify-center items-center border border-[#FF6600] w-1/2 h-full rounded-[36px] cursor-pointer text-[34px] hover:text-[30px]'>
                  <span
                    className='font-[montserrat] font-normal text-center tracking-[0.02em] text-white'
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