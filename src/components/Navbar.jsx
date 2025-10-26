export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 w-full flex justify-between items-center px-6 py-4 bg-black/70 backdrop-blur-md z-50">
      {/* 🔶 Logo */}
      <h1 className="text-2xl font-bold text-yellow-400 tracking-wide">
        B M Group
      </h1>

      {/* 🧭 Navigation Links */}
      <ul className="hidden md:flex gap-8 text-sm font-medium text-white">
        <li>
          <a href="#hero" className="hover:text-yellow-400 transition-colors duration-300">
            Home
          </a>
        </li>
        <li>
          <a href="#about" className="hover:text-yellow-400 transition-colors duration-300">
            About
          </a>
        </li>
        <li>
          <a href="#services" className="hover:text-yellow-400 transition-colors duration-300">
            Services
          </a>
        </li>
        <li>
          <a href="#approach" className="hover:text-yellow-400 transition-colors duration-300">
            Approach
          </a>
        </li>
        <li>
          <a href="#executed-shows" className="hover:text-yellow-400 transition-colors duration-300">
            Shows
          </a>
        </li>
        <li>
          <a href="#gallery" className="hover:text-yellow-400 transition-colors duration-300">
            Gallery
          </a>
        </li>
        <li>
          <a href="#contact" className="hover:text-yellow-400 transition-colors duration-300">
            Contact
          </a>
        </li>
      </ul>

      {/* 🍔 Mobile Menu Icon */}
      <div className="md:hidden text-yellow-400 text-3xl cursor-pointer">
        ☰
      </div>
    </nav>
  );
}
