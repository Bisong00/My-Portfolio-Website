import { motion } from "framer-motion";
import { FaGithub, FaExternalLinkAlt, FaStar } from "react-icons/fa";

import wupi from "../assets/projects/wupi.png";
import football from "../assets/projects/football.png";
import finance from "../assets/projects/finance.png";
import dashboard from "../assets/projects/dashboard.png";
import ml from "../assets/projects/ml.png";
import health from "../assets/projects/health.png";

function Projects() {
  const projects = [
    {
      title: "WUPI - QR Payment Platform",
      image: wupi,
      featured: true,
      description:
        "A full-stack digital payment platform inspired by India's UPI, enabling secure QR code payments, authentication, transaction management, and merchant services.",
      technologies: [
        "Java",
        "Spring Boot",
        "React",
        "MySQL",
        "JWT",
        "REST API",
      ],
      github: "https://github.com/YOUR_USERNAME/WUPI",
      demo: "#",
    },

    {
      title: "Football Player Comparison Model",
      image: football,
      featured: false,
      description:
        "A Bayesian and machine learning system for comparing football players using historical statistics, predictive analytics, and performance metrics.",
      technologies: [
        "Python",
        "Machine Learning",
        "Bayesian Statistics",
        "Pandas",
        "Scikit-learn",
      ],
      github: "https://github.com/YOUR_USERNAME/Football-Comparison",
      demo: "#",
    },

    {
      title: "Financial Engineering Analytics",
      image: finance,
      featured: false,
      description:
        "Quantitative finance models including portfolio optimization, Monte Carlo simulation, PCA, and financial risk analytics.",
      technologies: [
        "Python",
        "NumPy",
        "Pandas",
        "Matplotlib",
        "Financial Engineering",
      ],
      github: "https://github.com/YOUR_USERNAME/Financial-Engineering",
      demo: "#",
    },

    {
      title: "Business Intelligence Dashboard",
      image: dashboard,
      featured: false,
      description:
        "Interactive dashboards for KPI monitoring, business reporting, and executive decision support.",
      technologies: [
        "Power BI",
        "SQL",
        "Excel",
        "Data Visualization",
      ],
      github: "https://github.com/YOUR_USERNAME/BI-Dashboard",
      demo: "#",
    },

    {
      title: "Machine Learning & AI Portfolio",
      image: ml,
      featured: false,
      description:
        "A collection of machine learning projects including regression, classification, computer vision, NLP, and deep learning.",
      technologies: [
        "Python",
        "TensorFlow",
        "PyTorch",
        "Scikit-learn",
        "OpenCV",
      ],
      github: "https://github.com/YOUR_USERNAME/Machine-Learning",
      demo: "#",
    },

    {
      title: "Health Data Analytics",
      image: health,
      featured: false,
      description:
        "Healthcare analytics using statistical methods and machine learning for predictive modeling and actionable insights.",
      technologies: [
        "Python",
        "Pandas",
        "Machine Learning",
        "Statistics",
      ],
      github: "https://github.com/YOUR_USERNAME/Health-Analytics",
      demo: "#",
    },
  ];

  return (
    <section
      id="projects"
      className="relative bg-transparent text-white py-24 px-6"
    >
      <div className="max-w-7xl mx-auto">

        <motion.h2
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-5xl font-bold text-cyan-400 text-center mb-6"
        >
          Featured Projects
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center text-slate-200 max-w-3xl mx-auto mb-16"
        >
          A selection of software engineering, artificial intelligence,
          business intelligence, and financial engineering projects
          demonstrating my technical expertise.
        </motion.p>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

          {projects.map((project, index) => (

            <motion.div
              key={index}
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.6,
                delay: index * 0.15,
              }}
              whileHover={{
                y: -12,
                scale: 1.02,
              }}
              className="bg-slate-900/55 backdrop-blur-md rounded-2xl border border-cyan-500/20 hover:border-cyan-400 shadow-2xl overflow-hidden transition-all duration-300"
            >

              <div className="relative overflow-hidden">

                {project.featured && (
                  <div className="absolute top-4 left-4 z-10 bg-yellow-400 text-slate-900 px-4 py-2 rounded-full text-xs font-bold flex items-center gap-2 shadow-lg">
                    <FaStar />
                    Featured
                  </div>
                )}

                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-56 object-cover transition-transform duration-700 hover:scale-110"
                />

              </div>

              <div className="p-6">

                <h3 className="text-2xl font-bold text-white mb-4">
                  {project.title}
                </h3>

                <p className="text-slate-200 leading-7 mb-6">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-3 mb-6">

                  {project.technologies.map((tech, i) => (
                    <span
                      key={i}
                      className="bg-cyan-500/10 border border-cyan-500/30 text-cyan-300 px-3 py-2 rounded-full text-sm hover:bg-cyan-500 hover:text-white transition"
                    >
                      {tech}
                    </span>
                  ))}

                </div>

                <div className="flex gap-4">

                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 bg-cyan-500 hover:bg-cyan-400 text-white py-3 rounded-lg font-semibold flex justify-center items-center gap-2 transition duration-300"
                  >
                    <FaGithub />
                    GitHub
                  </a>

                  <a
                    href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 border border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-slate-900 py-3 rounded-lg font-semibold flex justify-center items-center gap-2 transition duration-300"
                  >
                    <FaExternalLinkAlt />
                    Live Demo
                  </a>

                </div>

              </div>

            </motion.div>

          ))}

        </div>

      </div>
    </section>
  );
}

export default Projects;