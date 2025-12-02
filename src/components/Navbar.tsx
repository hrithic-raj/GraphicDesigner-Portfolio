import React from 'react'

const Navbar = () => {
  return (
    <>
      <nav className="fixed top-6 left-1/2 -translate-x-1/2 z-50 w-3/4 h-[100px] 
        flex items-center justify-center rounded-3xl bg-[rgba(0,0,0,0.001)] backdrop-filter backdrop-blur-sm bg-opacity-30">
        <ul className="flex gap-10 text-white font-montserrat text-[16px]">
          <a href="#home">
          <li className='cursor-pointer hover:text-[#FF6600] font-[montserrat] font-normal'>Home</li>
          </a>
          <a href="#about">
          <li className='cursor-pointer hover:text-[#FF6600] font-[montserrat] font-normal'>About me</li>
          </a>
          <a href="#portfolio">
          <li className='cursor-pointer hover:text-[#FF6600] font-[montserrat] font-normal'>Portfolio</li>
          </a>
          <li className='cursor-pointer hover:text-[#FF6600] font-[montserrat] font-normal'>Resume</li>
          <li className='cursor-pointer hover:text-[#FF6600] font-[montserrat] font-normal'>Contact</li>
        </ul>
      </nav>
    </>
  )
}

export default Navbar