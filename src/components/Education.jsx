import { motion } from "framer-motion";
import {
  FaGraduationCap,
  FaUniversity,
  FaCalendarAlt,
} from "react-icons/fa";

function Education() {
  const education = [
    {
      degree: "Master of Computer Applications (MCA)",
      institution: "Guru Kashi University",
      period: "In Progress",
      description:
        "Advanced studies in Software Engineering, Programming, Databases, Web Technologies, Data Structures, Algorithms, and Modern Application Development.",
    },
    {
      degree: "Master of Financial Engineering",
      institution: "WorldQuant University",
      period: "In Progress",
      description:
        "Focused on Quantitative Finance, Portfolio Optimization, Financial Modeling, Risk Management, Derivatives, and Computational Finance.",
    },
    {
      degree: "Postgraduate Diploma in Data Science & Business Analytics",
      institution: "The University of Texas",
      period: "Completed",
      description:
        "Specialized in Data Analytics, Machine Learning, Statistical Analysis, Business Intelligence, Predictive Modeling, and Data Visualization.",
    },
    {
      degree: "Bachelor of Chemical Engineering",
      institution: "Catholic University Institute of Buea",
      period: "Completed",
      description:
        "Built a strong foundation in Mathematics, Engineering, Chemical Process Design, Thermodynamics, Process Optimization, and Scientific Computing.",
    },
  ];

  return (
    <section
      id="education"
      className="relative bg-transparent text-white py-24 px-6"
    >
      <div className="max-w-7xl mx-auto">

        {/* Heading */}

        <motion.h2
          initial={{ opacity: 0, y: -40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-5xl font-bold text-cyan-400 text-center mb-6"
        >
          Education
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center text-slate-200 max-w-3xl mx-auto mb-16"
        >
          My academic journey combines Software Engineering,
          Financial Engineering, Data Science, and Chemical
          Engineering, providing a multidisciplinary foundation
          for solving complex business and technical problems.
        </motion.p>

        {/* Education Cards */}

        <div className="grid md:grid-cols-2 gap-8">

          {education.map((item, index) => (

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
                y: -10,
                scale: 1.02,
              }}
              className="bg-slate-900/55 backdrop-blur-md rounded-3xl border border-cyan-500/20 shadow-2xl p-8"
            >

              {/* Icon */}

              <div className="w-20 h-20 rounded-full bg-cyan-500/10 border border-cyan-500/30 flex items-center justify-center mb-6">

                <FaGraduationCap
                  className="text-cyan-400"
                  size={38}
                />

              </div>

              {/* Degree */}

              <h3 className="text-2xl font-bold text-cyan-400 mb-4">
                {item.degree}
              </h3>

              {/* Institution */}

              <div className="flex items-center gap-3 mb-4 text-white">

                <FaUniversity className="text-cyan-400" />

                <span>{item.institution}</span>

              </div>

              {/* Period */}

              <div className="flex items-center gap-3 mb-6">

                <FaCalendarAlt className="text-cyan-400" />

                <span className="bg-cyan-500/10 border border-cyan-500/20 text-cyan-300 px-4 py-2 rounded-full">
                  {item.period}
                </span>

              </div>

              {/* Description */}

              <p className="text-slate-300 leading-8">
                {item.description}
              </p>

            </motion.div>

          ))}

        </div>

      </div>
    </section>
  );
}

export default Education;