import React from 'react';

export default function Home() {
  return (
   <section
      id="home"
      className="min-h-screen px-6 py-20 bg-gray-100 dark:bg-gray-900 flex flex-col md:flex-row items-center justify-center text-center md:text-left gap-10"
    >


      <div className="max-w-xl">
        <h1 className="text-5xl font-bold text-indigo-600 dark:text-indigo-400 mb-4">
          Hi, I'm Mohammad Alquamah Ansari
        </h1>
        <p className="text-lg text-gray-700 dark:text-gray-300 max-w-2xl mb-6">
          Final-year B.Sc. AI student | MERN Developer | Power BI Analyst | Python & ML Enthusiast
        </p>
        <div className="space-x-4">
          <a
            href="#projects"
            className="inline-block bg-indigo-600 text-white px-6 py-3 rounded hover:bg-indigo-700 dark:bg-indigo-500 dark:hover:bg-indigo-600 transition"
          >
            View Projects
          </a>
          <a
            href="/Mohammad-Alquamah-Ansari-Resume.pdf"
            download="Mohammad-Alquamah-Ansari-Resume"
            className="inline-block bg-white text-indigo-600 border border-indigo-600 px-6 py-3 rounded hover:bg-indigo-50 dark:bg-gray-800 dark:text-indigo-400 dark:border-indigo-400 dark:hover:bg-gray-700 transition"
          >
            Download Resume
          </a>
        </div>
      </div>

      <div>
       <img
  src="/profile.jpg"
  alt="Mohammad Alquamah Ansari"
  className="w-52 h-52 rounded-full object-cover shadow-lg ring-2 ring-indigo-500 object-top"
/>





      </div>
    </section>
  );
}