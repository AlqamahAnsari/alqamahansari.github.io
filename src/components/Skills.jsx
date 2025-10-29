import React from "react";
import { motion } from "framer-motion";

export default function Skills() {
  const skills = [
    // Core AI & ML
    "Artificial Intelligence",
    "Machine Learning",
    "Deep Learning",
    "Large Language Models",
    "Natural Language Processing",
    "Computer Vision",
    "Reinforcement Learning",

    // Programming & Tools
    "Python",
    "NumPy",
    "Pandas",
    "Matplotlib",
    "Seaborn",
    "Scikit-learn",
    "TensorFlow",
    "SQL / SQLite",

    // DevOps & MLOps
    "DevOps",
    "MLOps",
    "Git & GitHub",
    "Docker",
    "CI/CD Pipelines",
    "Version Control",
    "Deployment & Monitoring",

    // Research & Ethics
    "Data Analysis",
    "Ethical AI",
  ];

  return (
    <section
      id="skills"
      className="min-h-screen px-6 py-20 bg-gray-100 dark:bg-gray-900 text-center flex flex-col justify-center items-center"
    >
      <motion.h2
        className="text-4xl font-bold text-indigo-600 dark:text-indigo-400 mb-10"
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        viewport={{ once: true }}
      >
        Skills
      </motion.h2>

      <motion.div
        className="max-w-5xl w-full grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6 text-gray-700 dark:text-gray-300"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        {skills.map((skill, index) => (
          <motion.div
            key={skill}
            className="bg-white dark:bg-gray-800 p-4 rounded-lg shadow hover:scale-105 hover:shadow-indigo-300/30 dark:hover:shadow-indigo-900/40 transition-transform duration-300 cursor-default"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.03, duration: 0.4 }}
            viewport={{ once: true }}
          >
            {skill}
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}
