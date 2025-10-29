import React from "react";
import { motion } from "framer-motion";

export default function Footer() {
  const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: "easeOut" },
    },
  };

  return (
    <motion.footer
      variants={fadeInUp}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      className="bg-white dark:bg-gray-900 border-t border-gray-200 dark:border-gray-700 text-center py-6"
    >
      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.3, duration: 0.6 }}
        className="text-gray-700 dark:text-gray-300 text-sm"
      >
        &copy; {new Date().getFullYear()}{" "}
        <span className="font-medium text-indigo-600 dark:text-indigo-400">
          Mohammad Alquamah Ansari
        </span>
        . All rights reserved.
      </motion.p>

      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.6, duration: 0.8 }}
        className="mt-2 text-xs text-gray-500 dark:text-gray-400"
      >
        Built with ❤️ using React & TailwindCSS
      </motion.div>
    </motion.footer>
  );
}
