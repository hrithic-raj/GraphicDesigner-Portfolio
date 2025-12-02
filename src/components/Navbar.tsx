import React from 'react'

const Navbar = () => {
  return (
    <nav className='fixed top-4 left-1/2 -translate-x-1/2 z-50 w-3/4
    backdrop-filter backdrop-blur-xl bg-white/10 bg-opacity-30 border border-white/20
    px-1/2 py-6 rounded-2xl shadow-xl'>
        <ul className='flex gap-10 justify-center text-white'>
            <li>Home</li>
            <li>About me</li>
            <li>Portfolio</li>
            <li>Resume</li>
            <li>contact</li>
        </ul>
    </nav>
  )
}

export default Navbar