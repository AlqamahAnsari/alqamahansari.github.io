import React from "react";
import { motion } from "framer-motion";

export default function Home() {
  return (
    <section
      id="home"
      className="min-h-screen flex flex-col items-center justify-center px-6 py-20 bg-gray-100 dark:bg-gray-900 text-center"
    >
      <motion.div
        className="max-w-3xl"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        <motion.h1
          className="text-5xl font-bold text-indigo-600 dark:text-indigo-400 mb-6"
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          Hi, I'm Mohammad Alquamah Ansari
        </motion.h1>

        <motion.p
          className="text-lg text-gray-700 dark:text-gray-300 mb-6"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          viewport={{ once: true }}
        >
          B.Sc Artificial Intelligence | LLM | DevOps | Ethical AI
        </motion.p>

        <motion.p
          className="italic text-gray-600 dark:text-gray-400 mb-10"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.6 }}
          viewport={{ once: true }}
        >
          “Striving to create AI that aligns intelligence with ethics and impact.”
        </motion.p>

        <motion.div
          className="space-x-4"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.7 }}
          viewport={{ once: true }}
        >
          <a
            href="#projects"
            className="inline-block bg-indigo-600 text-white px-6 py-3 rounded-lg hover:scale-105 hover:bg-indigo-700 dark:bg-indigo-500 dark:hover:bg-indigo-600 transition-all duration-300 shadow-md"
          >
            View Projects
          </a>

          <a
            href="/Mohammad-Alquamah-Ansari-Resume.pdf"
            download="Mohammad-Alquamah-Ansari-Resume"
            className="inline-block bg-white text-indigo-600 border border-indigo-600 px-6 py-3 rounded-lg hover:scale-105 hover:bg-indigo-50 dark:bg-gray-800 dark:text-indigo-400 dark:border-indigo-400 dark:hover:bg-gray-700 transition-all duration-300 shadow-md"
          >
            Download Resume
          </a>
        </motion.div>
      </motion.div>
    </section>
  );
}
