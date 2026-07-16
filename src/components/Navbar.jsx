import { FaCode } from "react-icons/fa";

function Navbar() {
  return (
    <nav className="fixed top-0 left-0 w-full bg-slate-900 border-b border-slate-700 shadow-lg z-50">
      <div className="max-w-7xl mx-auto flex justify-between items-center px-6 py-4">

        {/* Logo */}
        <div className="flex items-center gap-2">
          <FaCode className="text-cyan-400 text-2xl" />
          <h1 className="text-2xl font-bold text-white">
            Rene<span className="text-cyan-400">.</span>
          </h1>
        </div>

        {/* Navigation */}
        <ul className="flex gap-6 text-white">
          <li><a href="#home" className="hover:text-cyan-400">Home</a></li>
          <li><a href="#about" className="hover:text-cyan-400">About</a></li>
          <li><a href="#skills" className="hover:text-cyan-400">Skills</a></li>
          <li><a href="#projects" className="hover:text-cyan-400">Projects</a></li>
          <li><a href="#contact" className="hover:text-cyan-400">Contact</a></li>
        </ul>

        {/* CV Button */}
        <button className="bg-cyan-500 hover:bg-cyan-600 px-4 py-2 rounded-lg text-white transition">
          Download CV
        </button>

      </div>
    </nav>
  );
}

export default Navbar;