import React from 'react';

export default function About() {
  return (
    <section
      id="about"
      className="min-h-screen px-6 py-20 bg-white dark:bg-gray-900 text-center"
    >
      <h2 className="text-4xl font-bold text-indigo-600 dark:text-indigo-400 mb-6">About Me</h2>
      <div className="max-w-3xl mx-auto text-gray-700 dark:text-gray-300 text-lg space-y-4">
        <p>
          I'm <strong>Mohammad Alquamah Ansari</strong>, a final-year B.Sc. (Hons.) Artificial Intelligence student with a Computer Science Minor. I'm passionate about building intelligent solutions using data science, web development, and machine learning.
        </p>
        <p>
          I have hands-on experience in <strong>Power BI</strong>, <strong>React</strong>, <strong>Tailwind CSS</strong>, <strong>Python</strong>, and <strong>AI technologies</strong>. I'm currently working on multiple real-world projects, including an IELTS AI app, air quality dashboard, and emotion detection system.
        </p>
        <p>
          I enjoy learning, building, and sharing. My goal is to contribute to innovative solutions that make education and technology accessible to all.
        </p>
      </div>
    </section>
  );
}
