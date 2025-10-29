import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  // Animation variants for mobile dropdown
  const menuVariants = {
    hidden: { opacity: 0, y: -10 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.3 } },
    exit: { opacity: 0, y: -10, transition: { duration: 0.2 } },
  };

  return (
    <motion.nav
      initial={{ y: -50, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6 }}
      className="fixed top-0 left-0 right-0 bg-white/80 dark:bg-gray-900/80 backdrop-blur-md shadow-md z-50"
    >
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        <a
          href="#home"
          className="text-2xl font-bold text-indigo-600 dark:text-indigo-400 hover:opacity-80 transition"
        >
          Mohammad Alquamah Ansari
        </a>

        {/* Mobile Menu Toggle */}
        <div className="md:hidden">
          <button
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
            className="text-gray-700 dark:text-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-500 rounded"
          >
            {isOpen ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            ) : (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 8h16M4 16h16"
                />
              </svg>
            )}
          </button>
        </div>

        {/* Desktop Menu */}
        <ul className="hidden md:flex md:items-center md:space-x-8 text-gray-700 dark:text-gray-300">
          {["home", "about", "skills", "projects", "contact"].map((section) => (
            <motion.li
              key={section}
              whileHover={{ scale: 1.1 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <a
                href={`#${section}`}
                className="relative py-2 transition hover:text-indigo-600 dark:hover:text-indigo-400"
              >
                {section.charAt(0).toUpperCase() + section.slice(1)}
                <motion.span
                  className="absolute left-0 bottom-0 h-0.5 bg-indigo-600 dark:bg-indigo-400"
                  initial={{ width: 0 }}
                  whileHover={{ width: "100%" }}
                  transition={{ duration: 0.3 }}
                />
              </a>
            </motion.li>
          ))}
        </ul>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.ul
            key="mobileMenu"
            variants={menuVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            className="md:hidden flex flex-col items-center bg-white dark:bg-gray-900 shadow-lg border-t border-gray-200 dark:border-gray-700"
          >
            {["home", "about", "skills", "projects", "contact"].map((section) => (
              <li key={section} className="w-full text-center border-b border-gray-200 dark:border-gray-700">
                <a
                  href={`#${section}`}
                  className="block py-3 text-gray-700 dark:text-gray-300 hover:text-indigo-600 dark:hover:text-indigo-400 transition"
                  onClick={() => setIsOpen(false)}
                >
                  {section.charAt(0).toUpperCase() + section.slice(1)}
                </a>
              </li>
            ))}
          </motion.ul>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}
