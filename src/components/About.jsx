import { motion } from "framer-motion";
import {
  FaLaptopCode,
  FaChartLine,
  FaBrain,
  FaChartPie,
} from "react-icons/fa";

function About() {
  return (
    <section
      id="about"
      className="relative bg-transparent py-24 px-6 text-white"
    >
      <motion.div
        className="max-w-7xl mx-auto"
        initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        {/* Section Title */}

        <motion.h2
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-5xl font-bold text-cyan-400 text-center mb-6"
        >
          About Me
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9 }}
          className="text-center text-slate-200 max-w-3xl mx-auto mb-16"
        >
          Passionate about developing intelligent software, creating
          data-driven business solutions, and applying artificial intelligence
          and financial engineering to solve complex real-world problems.
        </motion.p>

        <div className="grid lg:grid-cols-2 gap-12 items-center">

          {/* Left Side */}

          <motion.div
            initial={{ opacity: 0, x: -60 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="bg-slate-900/55 backdrop-blur-md rounded-3xl p-10 border border-cyan-500/20 shadow-2xl"
          >
            <p className="text-lg leading-9 text-slate-200 mb-6">
              I'm{" "}
              <span className="font-bold text-cyan-400">
                Bisong Enow Njang-Ebob Rene
              </span>
              , a passionate Software Engineer with strong interests in
              Business Intelligence, Data Science, Machine Learning, and
              Financial Engineering.
            </p>

            <p className="text-lg leading-9 text-slate-300 mb-6">
              I enjoy building scalable software applications, designing
              intelligent machine learning systems, analyzing business data,
              and applying quantitative financial models to solve challenging
              business problems.
            </p>

            <p className="text-lg leading-9 text-slate-300 mb-6">
              I am currently pursuing a Master's in Computer Applications
              (MCA) while continuously expanding my expertise in Software
              Engineering, Artificial Intelligence, Analytics, and
              Quantitative Finance.
            </p>

            <p className="text-lg leading-9 text-slate-300">
              My long-term vision is to become a world-class Software Engineer
              and AI professional, building innovative digital products that
              improve businesses, healthcare, finance, and society through
              technology.
            </p>
          </motion.div>

          {/* Right Side */}

          <div className="grid grid-cols-2 gap-6">

            <motion.div
              whileHover={{ y: -10, scale: 1.05 }}
              className="bg-slate-900/55 backdrop-blur-md rounded-2xl p-8 text-center border border-cyan-500/20 shadow-xl"
            >
              <FaLaptopCode
                className="mx-auto text-cyan-400 mb-4"
                size={40}
              />

              <h3 className="text-4xl font-bold text-cyan-400">
                15+
              </h3>

              <p className="text-slate-300 mt-3">
                Software & AI Projects
              </p>
            </motion.div>

            <motion.div
              whileHover={{ y: -10, scale: 1.05 }}
              className="bg-slate-900/55 backdrop-blur-md rounded-2xl p-8 text-center border border-cyan-500/20 shadow-xl"
            >
              <FaBrain
                className="mx-auto text-cyan-400 mb-4"
                size={40}
              />

              <h3 className="text-4xl font-bold text-cyan-400">
                4+
              </h3>

              <p className="text-slate-300 mt-3">
                Years Learning AI & Data Science
              </p>
            </motion.div>

            <motion.div
              whileHover={{ y: -10, scale: 1.05 }}
              className="bg-slate-900/55 backdrop-blur-md rounded-2xl p-8 text-center border border-cyan-500/20 shadow-xl"
            >
              <FaChartLine
                className="mx-auto text-cyan-400 mb-4"
                size={40}
              />

              <h3 className="text-4xl font-bold text-cyan-400">
                5
              </h3>

              <p className="text-slate-300 mt-3">
                Technical Specializations
              </p>
            </motion.div>

            <motion.div
              whileHover={{ y: -10, scale: 1.05 }}
              className="bg-slate-900/55 backdrop-blur-md rounded-2xl p-8 text-center border border-cyan-500/20 shadow-xl"
            >
              <FaChartPie
                className="mx-auto text-cyan-400 mb-4"
                size={40}
              />

              <h3 className="text-4xl font-bold text-cyan-400">
                ∞
              </h3>

              <p className="text-slate-300 mt-3">
                Continuous Learning
              </p>
            </motion.div>

          </div>

        </div>
      </motion.div>
    </section>
  );
}

export default About;