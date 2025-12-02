const Navbar = () => {
  return (
    <nav className="
      fixed top-6 left-1/2 -translate-x-1/2 
      z-50 w-[75%] h-[90px]
      flex items-center justify-center
      rounded-3xl 
      bg-[rgba(0,0,0,0.001)] backdrop-blur-sm 
      backdrop-filter bg-opacity-30
      transition-all duration-300
    ">
      <ul className="flex gap-12 text-white font-montserrat text-[16px] font-[montserrat] font-normal select-none">
        
        <li>
          <a href="#home" className="nav-link">
            Home
          </a>
        </li>

        <li>
          <a href="#about" className="nav-link">
            About me
          </a>
        </li>

        <li>
          <a href="#portfolio" className="nav-link">
            Portfolio
          </a>
        </li>

        <li>
          <a href="#resume" className="nav-link">
            Resume
          </a>
        </li>

        <li>
          <a href="#contact" className="nav-link">
            Contact
          </a>
        </li>

      </ul>
    </nav>
  );
};

export default Navbar;
