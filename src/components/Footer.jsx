function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="relative bg-transparent border-t border-cyan-500/20 py-10 backdrop-blur-md">
      <div className="max-w-7xl mx-auto px-6">

        <div className="bg-slate-900/50 backdrop-blur-lg rounded-3xl border border-cyan-500/20 shadow-2xl p-8">

          <div className="flex flex-col md:flex-row justify-between items-center gap-6">

            <div>
              <h2 className="text-2xl font-bold text-cyan-400">
                Bisong Enow Njang-Ebob Rene
              </h2>

              <p className="text-slate-300 mt-2 max-w-xl">
                Software Engineer • Business Intelligence Analyst •
                Data Scientist • Machine Learning Engineer •
                Financial Engineer
              </p>
            </div>

            <div className="flex flex-wrap justify-center gap-6 text-slate-300">

              <a
                href="#home"
                className="hover:text-cyan-400 transition duration-300"
              >
                Home
              </a>

              <a
                href="#about"
                className="hover:text-cyan-400 transition duration-300"
              >
                About
              </a>

              <a
                href="#skills"
                className="hover:text-cyan-400 transition duration-300"
              >
                Skills
              </a>

              <a
                href="#projects"
                className="hover:text-cyan-400 transition duration-300"
              >
                Projects
              </a>

              <a
                href="#contact"
                className="hover:text-cyan-400 transition duration-300"
              >
                Contact
              </a>

            </div>

          </div>

          <hr className="my-8 border-cyan-500/20" />

          <div className="flex flex-col md:flex-row justify-between items-center gap-4">

            <p className="text-slate-400 text-center">
              © {year} Bisong Enow Njang-Ebob Rene. All Rights Reserved.
            </p>

            <a
              href="#home"
              className="bg-cyan-500 hover:bg-cyan-400 text-white hover:text-slate-950 px-6 py-3 rounded-xl font-semibold shadow-lg shadow-cyan-500/30 transition-all duration-300 hover:scale-105"
            >
              ↑ Back to Top
            </a>

          </div>

        </div>

      </div>
    </footer>
  );
}

export default Footer;