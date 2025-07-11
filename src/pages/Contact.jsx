import React from 'react';
import { Github, Linkedin, Mail } from 'lucide-react';

export default function Contact() {
  return (
    <section
      id="contact"
      className="min-h-screen px-6 py-20 bg-white dark:bg-gray-900 flex flex-col justify-center items-center text-center"
    >
      <h2 className="text-4xl font-bold text-indigo-600 dark:text-indigo-400 mb-6">Get in Touch</h2>
      <p className="text-gray-700 dark:text-gray-300 mb-8 max-w-xl">
        Feel free to connect with me through any of the platforms below. I'm open to
        collaborations, projects, and networking.
      </p>

      <div className="flex space-x-6 text-gray-700 dark:text-gray-300">
        <a
          href="mailto:alquamahansari@gmail.com"
          className="hover:text-indigo-500 dark:hover:text-indigo-400 transition"
          title="Email"
        >
          <Mail className="w-6 h-6" />
        </a>
        <a
          href="https://github.com/Alquamahansari"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-indigo-500 dark:hover:text-indigo-400 transition"
          title="GitHub"
        >
          <Github className="w-6 h-6" />
        </a>
        <a
          href="https://www.linkedin.com/in/Mohammad-Alquamah-Ansari"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-indigo-500 dark:hover:text-indigo-400 transition"
          title="LinkedIn"
        >
          <Linkedin className="w-6 h-6" />
        </a>
      </div>
    </section>
  );
}
