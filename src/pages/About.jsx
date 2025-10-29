import React from "react";
import { motion } from "framer-motion";

export default function About() {
  return (
    <section
      id="about"
      className="min-h-screen flex flex-col items-center justify-center px-6 py-20 bg-white dark:bg-gray-900 text-center"
    >
      <motion.h2
        className="text-4xl font-bold text-indigo-600 dark:text-indigo-400 mb-6"
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        viewport={{ once: true }}
      >
        About Me
      </motion.h2>

      <motion.div
        className="max-w-3xl text-gray-700 dark:text-gray-300 text-lg leading-relaxed space-y-6"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        viewport={{ once: true }}
      >
        <motion.p>
          I'm <strong>Mohammad Alquamah Ansari</strong>, a final-year{" "}
          <strong>B.Sc. Artificial Intelligence</strong> student focused on{" "}
          <strong>Ethical AI</strong>, <strong>LLM</strong>, and{" "}
          <strong>DevOps-driven automation</strong>. I build systems that blend{" "}
          <strong>academic research</strong> with{" "}
          <strong>practical innovation</strong> — from{" "}
          <strong>emotion detection</strong> to{" "}
          <strong>AI learning platforms</strong>. My work revolves around{" "}
          <strong>AI alignment, interpretability,</strong> and{" "}
          <strong>human-centered design</strong>, aiming to make technology{" "}
          <strong>ethical, scalable,</strong> and{" "}
          <strong>socially meaningful</strong>.
        </motion.p>

        <motion.p
          className="italic text-gray-600 dark:text-gray-400"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.8 }}
          viewport={{ once: true }}
        >
          “Knowledge is a trust — to enlighten, not exploit.”
        </motion.p>
      </motion.div>
    </section>
  );
}
