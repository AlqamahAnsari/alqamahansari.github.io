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
          href="https://github.com/AlquamahAnsari"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-indigo-500 dark:hover:text-indigo-400 transition"
          title="GitHub"
        >
          <Github className="w-6 h-6" />
        </a>
        <a
          href="https://www.linkedin.com/in/alqamahansari"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-indigo-500 dark:hover:text-indigo-400 transition"
          title="LinkedIn"
        >
          <Linkedin className="w-6 h-6" />
        </a>
        <a
          href="https://x.com/yourusername"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-indigo-500 dark:hover:text-indigo-400 transition"
          title="X (Twitter)"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-6 h-6"
            viewBox="0 0 24 24"
            fill="currentColor"
          >
            <path d="M18.36 3H21L14.44 10.68 22.5 21h-6.57l-5.12-6.75L4.5 21H2l7.06-8.02L1.5 3h6.69l4.67 6.07L18.36 3ZM17.19 19h1.36l-4.67-6.2-1.08 1.24L17.19 19ZM5.45 5h-1.4l4.67 6.2 1.09-1.24L5.45 5Z" />
          </svg>
        </a>
      </div>
    </section>
  );
}
