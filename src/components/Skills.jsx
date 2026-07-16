import { motion } from "framer-motion";

function Skills() {
  const skillCategories = [
    {
      title: "💻 Software Engineering",
      skills: [
        "Java",
        "Spring Boot",
        "React",
        "JavaScript",
        "HTML5",
        "CSS3",
        "MySQL",
        "Git",
        "GitHub",
      ],
    },

    {
      title: "📊 Business Intelligence",
      skills: [
        "Power BI",
        "Tableau",
        "SQL",
        "Microsoft Excel",
        "Data Visualization",
        "Dashboard Development",
        "KPI Analysis",
        "Business Reporting",
        "Data Storytelling",
      ],
    },

    {
      title: "🤖 Data Science & Machine Learning",
      skills: [
        "Python",
        "Pandas",
        "NumPy",
        "Matplotlib",
        "Seaborn",
        "Data Preprocessing",
        "Exploratory Data Analysis (EDA)",
        "Feature Engineering",
        "Natural Language Processing (NLP)",
        "Computer Vision",
        "Deep Learning",
        "Statistical Analysis",
        "Scikit-learn",
        "TensorFlow",
        "PyTorch",
        "Jupyter Notebook",
      ],
    },

    {
      title: "⚙️ Data Tools & Platforms",
      skills: [
        "MySQL",
        "PostgreSQL",
        "MongoDB",
        "Apache Spark",
        "Hadoop Basics",
        "Git",
        "GitHub",
        "Linux Ubuntu",
        "Google Colab",
        "Jupyter Lab",
        "Anaconda",
        "VS Code",
      ],
    },

    {
      title: "💹 Financial Engineering",
      skills: [
        "Portfolio Optimization",
        "Monte Carlo Simulation",
        "Principal Component Analysis (PCA)",
        "Time Series Analysis",
        "Risk Analytics",
        "Quantitative Modeling",
      ],
    },
  ];

  const competencies = [
    "Problem Solving",
    "Analytical Thinking",
    "Business Intelligence",
    "Data Storytelling",
    "Machine Learning",
    "Software Development",
    "Financial Modeling",
    "Data Visualization",
    "Statistical Analysis",
    "Decision Support",
    "Critical Thinking",
    "Team Collaboration",
  ];

  return (
    <section
      id="skills"
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
          Skills & Expertise
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center text-slate-200 max-w-3xl mx-auto mb-16"
        >
          I combine software engineering, business intelligence, data science,
          machine learning, and financial engineering to build practical,
          scalable, and data-driven solutions.
        </motion.p>

        {/* Core Competencies */}

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-20"
        >
          <h3 className="text-3xl font-semibold text-center text-white mb-8">
            Core Competencies
          </h3>

          <div className="flex flex-wrap justify-center gap-4">

            {competencies.map((item, index) => (
              <motion.span
                key={index}
                whileHover={{
                  scale: 1.08,
                  y: -4,
                }}
                className="bg-cyan-500/10 backdrop-blur-md border border-cyan-400/30 text-cyan-300 px-5 py-3 rounded-full cursor-default transition"
              >
                {item}
              </motion.span>
            ))}

          </div>
        </motion.div>

        {/* Technical Skills */}

        <div className="grid md:grid-cols-2 gap-8">

          {skillCategories.map((category, index) => (

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
                y: -8,
                scale: 1.02,
              }}
              className="bg-slate-900/55 backdrop-blur-md rounded-3xl p-8 border border-cyan-500/20 hover:border-cyan-400 shadow-2xl transition-all duration-300"
            >

              <h3 className="text-2xl font-bold text-cyan-400 mb-6">
                {category.title}
              </h3>

              <div className="flex flex-wrap gap-3">

                {category.skills.map((skill, i) => (

                  <motion.span
                    key={i}
                    whileHover={{
                      scale: 1.08,
                    }}
                    className="bg-cyan-500/10 border border-cyan-500/20 text-slate-200 px-4 py-2 rounded-xl hover:bg-cyan-500 hover:text-white transition cursor-default"
                  >
                    {skill}
                  </motion.span>

                ))}

              </div>

            </motion.div>

          ))}

        </div>

      </div>
    </section>
  );
}

export default Skills;