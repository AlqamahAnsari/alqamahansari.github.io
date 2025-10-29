import React from "react";
import { Github, Linkedin, Mail } from "lucide-react";
import { motion } from "framer-motion";

export default function Contact() {
  const iconVariants = {
    hover: { scale: 1.3, rotate: 5, transition: { type: "spring", stiffness: 300 } },
  };

  const fadeIn = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
  };

  return (
    <motion.section
      id="contact"
      variants={fadeIn}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      className="min-h-screen px-6 py-20 bg-white dark:bg-gray-900 flex flex-col justify-center items-center text-center"
    >
      {/* Heading */}
      <motion.h2
        initial={{ opacity: 0, y: -30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-4xl font-bold text-indigo-600 dark:text-indigo-400 mb-6"
      >
        Get in Touch
      </motion.h2>

      {/* Description */}
      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.2, duration: 0.8 }}
        className="text-gray-700 dark:text-gray-300 mb-8 max-w-xl"
      >
        Feel free to connect with me through any of the platforms below.
        I'm open to collaborations, projects, and networking.
      </motion.p>

      {/* Social Icons */}
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.3, duration: 0.6 }}
        className="flex space-x-8 text-gray-700 dark:text-gray-300"
      >
        {/* Email */}
        <motion.a
          variants={iconVariants}
          whileHover="hover"
          href="mailto:alquamahansari@gmail.com"
          className="hover:text-indigo-500 dark:hover:text-indigo-400 transition"
          title="Email"
        >
          <Mail className="w-7 h-7" />
        </motion.a>

        {/* GitHub */}
        <motion.a
          variants={iconVariants}
          whileHover="hover"
          href="https://github.com/AlqamahAnsari"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-indigo-500 dark:hover:text-indigo-400 transition"
          title="GitHub"
        >
          <Github className="w-7 h-7" />
        </motion.a>

        {/* LinkedIn */}
        <motion.a
          variants={iconVariants}
          whileHover="hover"
          href="https://www.linkedin.com/in/alqamahansari"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-indigo-500 dark:hover:text-indigo-400 transition"
          title="LinkedIn"
        >
          <Linkedin className="w-7 h-7" />
        </motion.a>

        {/* X (Twitter) */}
        <motion.a
          variants={iconVariants}
          whileHover="hover"
          href="https://x.com/AlqamahAnsari"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-indigo-500 dark:hover:text-indigo-400 transition"
          title="X (Twitter)"
        >
          <motion.svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-7 h-7"
            viewBox="0 0 24 24"
            fill="currentColor"
          >
            <path d="M18.36 3H21L14.44 10.68 22.5 21h-6.57l-5.12-6.75L4.5 21H2l7.06-8.02L1.5 3h6.69l4.67 6.07L18.36 3ZM17.19 19h1.36l-4.67-6.2-1.08 1.24L17.19 19ZM5.45 5h-1.4l4.67 6.2 1.09-1.24L5.45 5Z" />
          </motion.svg>
        </motion.a>
      </motion.div>
    </motion.section>
  );
}
