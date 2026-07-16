import { motion } from "framer-motion";
import {
  FaBriefcase,
  FaBuilding,
  FaCalendarAlt,
} from "react-icons/fa";

function Experience() {
  const experiences = [
    {
      title: "Data Scientist",
      company: "YBI Foundation",
      period: "2025",
      description:
        "Developed machine learning models, performed data preprocessing, exploratory data analysis, feature engineering, and predictive analytics using Python, Scikit-learn, TensorFlow, and modern AI techniques.",
    },
    {
      title: "Data Analyst",
      company: "Datalab",
      period: "2024 - 2026",
      description:
        "Analyzed business datasets, designed interactive dashboards, generated executive reports, performed statistical analysis, and transformed raw data into actionable business insights.",
    },
    {
      title: "Software Engineering & Data Science Projects",
      company: "Personal & Academic Projects",
      period: "2024 - Present",
      description:
        "Designed and developed full-stack applications, machine learning models, business intelligence dashboards, financial engineering systems, and modern data-driven software solutions using Java, Spring Boot, React, Python, and SQL.",
    },
  ];

  return (
    <section
      id="experience"
      className="relative bg-transparent text-white py-24 px-6"
    >
      <div className="max-w-6xl mx-auto">

        {/* Heading */}

        <motion.h2
          initial={{ opacity: 0, y: -40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-5xl font-bold text-cyan-400 text-center mb-6"
        >
          Professional Experience
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center text-slate-200 max-w-3xl mx-auto mb-16"
        >
          My professional journey combines Software Engineering,
          Artificial Intelligence, Business Intelligence,
          Data Science, Machine Learning, and Financial Engineering
          to develop innovative digital solutions.
        </motion.p>

        {/* Timeline */}

        <div className="relative border-l-2 border-cyan-500/30 ml-4">

          {experiences.map((exp, index) => (

            <motion.div
              key={index}
              initial={{ opacity: 0, x: -80 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.7,
                delay: index * 0.2,
              }}
              className="relative mb-12 ml-10"
            >

              {/* Timeline Dot */}

              <div className="absolute -left-[54px] top-8 w-8 h-8 rounded-full bg-cyan-500 border-4 border-slate-950 shadow-lg"></div>

              {/* Card */}

              <motion.div
                whileHover={{
                  y: -8,
                  scale: 1.02,
                }}
                className="bg-slate-900/55 backdrop-blur-md rounded-3xl border border-cyan-500/20 shadow-2xl p-8"
              >

                {/* Icon */}

                <div className="w-20 h-20 rounded-full bg-cyan-500/10 border border-cyan-500/30 flex items-center justify-center mb-6">

                  <FaBriefcase
                    className="text-cyan-400"
                    size={38}
                  />

                </div>

                {/* Job Title */}

                <h3 className="text-2xl font-bold text-cyan-400 mb-4">
                  {exp.title}
                </h3>

                {/* Company */}

                <div className="flex items-center gap-3 mb-4">

                  <FaBuilding className="text-cyan-400" />

                  <span className="text-white font-semibold">
                    {exp.company}
                  </span>

                </div>

                {/* Period */}

                <div className="flex items-center gap-3 mb-6">

                  <FaCalendarAlt className="text-cyan-400" />

                  <span className="bg-cyan-500/10 border border-cyan-500/20 text-cyan-300 px-4 py-2 rounded-full">
                    {exp.period}
                  </span>

                </div>

                {/* Description */}

                <p className="text-slate-300 leading-8">
                  {exp.description}
                </p>

              </motion.div>

            </motion.div>

          ))}

        </div>

      </div>
    </section>
  );
}

export default Experience;