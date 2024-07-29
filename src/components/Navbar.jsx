function Navbar() {
  return (
    <nav className="flex justify-between items-center p-3 sticky top-0 z-20 bg-black ">
      <div>
        <h1 className="text-5xl font-semibold">
          <span className="font-black text-red-500">G</span>anesh
        </h1>
      </div>

      <ul className="flex gap-6 ">
        <li className="relative group">
          <a className="relative inline-block" href="#home">
            Home{" "}
            <span className="absolute -bottom-1 left-0 w-0 h-[3px] bg-[#ff004f] transition-all duration-500 group-hover:w-full"></span>
          </a>
        </li>
        <li className="relative group">
          <a className="relative inline-block" href="#about">
            About{" "}
            <span className="absolute -bottom-1 left-0 w-0 h-[3px] bg-[#ff004f] transition-all duration-500 group-hover:w-full"></span>
          </a>
        </li>
        <li className="relative group">
          <a className="relative inline-block" href="#skill">
            Skill{" "}
            <span className="absolute -bottom-1 left-0 w-0 h-[3px] bg-[#ff004f] transition-all duration-500 group-hover:w-full"></span>
          </a>
        </li>
        <li className="relative group">
          <a className="relative inline-block" href="#projects">
            Projects{" "}
            <span className="absolute -bottom-1 left-0 w-0 h-[3px] bg-[#ff004f] transition-all duration-500 group-hover:w-full"></span>
          </a>
        </li>
        <li className="relative group">
          <a className="relative inline-block" href="#contact">
            Contact{" "}
            <span className="absolute -bottom-1 left-0 w-0 h-[3px] bg-[#ff004f] transition-all duration-500 group-hover:w-full"></span>
          </a>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
