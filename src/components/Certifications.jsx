import { motion } from "framer-motion";
import {
  FaCertificate,
  FaGraduationCap,
  FaAward,
} from "react-icons/fa";

function Certifications() {
  const certifications = [
    {
      title: "Postgraduate Diploma in Data Science & Business Analytics",
      issuer: "Great Learning",
      year: "Completed",
      color: "from-blue-500 to-cyan-500",
    },
    {
      title: "Data Science Program",
      issuer: "YBI Foundation",
      year: "Completed",
      color: "from-purple-500 to-pink-500",
    },
    {
      title: "Data Analytics Training",
      issuer: "Datalab",
      year: "Completed",
      color: "from-green-500 to-emerald-500",
    },
    {
      title: "Machine Learning",
      issuer: "Udemy",
      year: "Completed",
      color: "from-orange-500 to-red-500",
    },
    {
      title: "Python Programming",
      issuer: "Alison",
      year: "Completed",
      color: "from-indigo-500 to-blue-600",
    },
    {
      title: "SQL for Data Analytics",
      issuer: "SuperDataScience",
      year: "Completed",
      color: "from-cyan-500 to-sky-500",
    },
  ];

  return (
    <section
      id="certifications"
      className="relative bg-transparent text-white py-24 px-6"
    >
      <div className="max-w-7xl mx-auto">

        <motion.h2
          initial={{ opacity: 0, y: -40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-5xl font-bold text-cyan-400 text-center mb-6"
        >
          Certifications
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center text-slate-200 max-w-3xl mx-auto mb-16"
        >
          Professional certifications and continuous learning that strengthen
          my expertise in Software Engineering, Artificial Intelligence,
          Business Intelligence, Data Science, and Financial Engineering.
        </motion.p>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

          {certifications.map((cert, index) => (

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
                scale: 1.03,
              }}
              className="bg-slate-900/55 backdrop-blur-md rounded-3xl border border-cyan-500/20 shadow-2xl overflow-hidden"
            >

              {/* Top Gradient */}

              <div className={`h-2 bg-gradient-to-r ${cert.color}`}></div>

              {/* Card */}

              <div className="p-8">

                <div className="flex justify-center mb-6">

                  <div className="w-20 h-20 rounded-full bg-cyan-500/10 border border-cyan-500/30 flex items-center justify-center">

                    {index === 0 ? (
                      <FaGraduationCap
                        size={38}
                        className="text-cyan-400"
                      />
                    ) : (
                      <FaCertificate
                        size={38}
                        className="text-cyan-400"
                      />
                    )}

                  </div>

                </div>

                <h3 className="text-2xl font-bold text-center text-white mb-4">
                  {cert.title}
                </h3>

                <p className="text-center text-cyan-400 font-semibold mb-5">
                  {cert.issuer}
                </p>

                <div className="flex justify-center">

                  <span className="flex items-center gap-2 bg-cyan-500/10 border border-cyan-500/20 text-cyan-300 px-5 py-2 rounded-full">

                    <FaAward />

                    {cert.year}

                  </span>

                </div>

              </div>

            </motion.div>

          ))}

        </div>

      </div>
    </section>
  );
}

export default Certifications;