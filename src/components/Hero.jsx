import { motion } from "framer-motion";
import { TypeAnimation } from "react-type-animation";
import { Link } from "react-scroll";
import {
  FaGithub,
  FaLinkedin,
  FaGraduationCap,
  FaEnvelope,
  FaFileDownload,
} from "react-icons/fa";

import profile from "../assets/images/profile.jpg";

function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center px-6 py-20"
    >
      {/* Glass Overlay */}
      <div className="absolute inset-0 bg-slate-950/55 backdrop-blur-[2px]"></div>

      <div className="relative z-10 max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center">

        {/* Left Side */}
        <motion.div
          initial={{ opacity: 0, x: -80 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
        >
          <p className="text-cyan-400 text-xl font-semibold mb-4">
            Hello, I'm
          </p>

          <h1 className="text-5xl md:text-6xl lg:text-7xl font-black leading-tight text-white">
            Bisong Enow
            <br />
            <span className="bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-500 bg-clip-text text-transparent">
              Njang-Ebob Rene
            </span>
          </h1>

          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-3xl font-bold text-slate-200 mt-6"
          >
            Software Engineer
          </motion.h2>

          <div className="text-cyan-400 text-2xl font-semibold mt-4 h-16">
            <TypeAnimation
              sequence={[
                "Business Intelligence Analyst",
                2000,
                "Data Scientist",
                2000,
                "Machine Learning Engineer",
                2000,
                "Financial Engineer",
                2000,
              ]}
              wrapper="span"
              speed={50}
              repeat={Infinity}
            />
          </div>

          <p className="text-slate-200 text-lg leading-8 mt-8 max-w-2xl">
            Passionate about designing intelligent software, building machine
            learning systems, developing business intelligence solutions,
            and applying quantitative financial engineering to solve
            real-world business problems.
          </p>

          {/* Main Buttons */}
          <div className="flex flex-wrap gap-5 mt-10">

            <a
              href="/Rene_CV.pdf"
              download
              className="flex items-center gap-2 bg-cyan-500 hover:bg-cyan-400 hover:scale-105 active:scale-95 px-8 py-4 rounded-xl font-bold shadow-lg shadow-cyan-500/40 transition-all duration-300"
            >
              <FaFileDownload />
              Download CV
            </a>

            <Link
              to="contact"
              smooth={true}
              duration={600}
              className="cursor-pointer flex items-center gap-2 border border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-slate-950 hover:scale-105 active:scale-95 px-8 py-4 rounded-xl font-bold transition-all duration-300"
            >
              <FaEnvelope />
              Contact Me
            </Link>

          </div>

          {/* Professional Links */}
          <div className="flex flex-wrap items-center gap-8 mt-10">

            <a
              href="https://bisong00.github.io/Njang-html/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-slate-300 hover:text-cyan-400 transition duration-300"
            >
              <FaGithub size={24} />
              <span>GitHub</span>
            </a>

            <a
              href="https://www.linkedin.com/in/bisong-enow-njang-ebob-r-9a9447246"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-slate-300 hover:text-cyan-400 transition duration-300"
            >
              <FaLinkedin size={24} />
              <span>LinkedIn</span>
            </a>

            <a
              href="https://www.mygreatlearning.com/eportfolio/bisong-enow-njang-ebob-rene"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-slate-300 hover:text-cyan-400 transition duration-300"
            >
              <FaGraduationCap size={24} />
              <span>Great Learning ePortfolio</span>
            </a>

            <a
              href="mailto:enowbisong00@gmail.com"
              className="flex items-center gap-2 text-slate-300 hover:text-cyan-400 transition duration-300"
            >
              <FaEnvelope size={24} />
              <span>Email</span>
            </a>

          </div>

        </motion.div>

        {/* Right Side */}
        <div className="flex justify-center">

          <motion.div
            className="relative"
            animate={{
              y: [0, -12, 0],
              rotate: [0, 1, 0, -1, 0],
            }}
            transition={{
              duration: 6,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          >
            <div className="absolute inset-0 rounded-full bg-cyan-500 blur-3xl opacity-40"></div>

            <img
              src={profile}
              alt="Bisong Enow Njang-Ebob Rene"
              className="relative w-80 h-80 lg:w-[430px] lg:h-[430px] object-cover rounded-full border-4 border-cyan-400 shadow-[0_0_70px_rgba(34,211,238,0.45)] hover:scale-105 transition duration-700"
            />

          </motion.div>

        </div>

      </div>
    </section>
  );
}

export default Hero;