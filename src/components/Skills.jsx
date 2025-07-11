import React from 'react';

export default function Skills() {
  return (
    <section
      id="skills"
      className="min-h-screen px-6 py-16 bg-gray-100 dark:bg-gray-900 text-center flex flex-col justify-center items-center"
    >
      <h2 className="text-4xl font-bold text-indigo-600 dark:text-indigo-400 mb-6">Skills</h2>

      <div className="max-w-4xl w-full grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6 text-gray-700 dark:text-gray-300">
        {[
          'AI & Machine Learning',
          'Deep Learning',
          'Natural Language Processing',
          'Computer Vision',
          'Data Science',
          'Data Analysis',
          'Python',
          'Pandas',
          'NumPy',
          'Matplotlib',
          'Seaborn',
          'TensorFlow',
          'Scikit-learn',
          'Pytorch',
          'JavaScript',
          'Power BI',
          'MERN Stack',
          'Tailwind CSS',
          'SQL/SQLite',
          'Git & GitHub',
        ].map((skill) => (
          <div
            key={skill}
            className="bg-white dark:bg-gray-800 p-4 rounded shadow hover:bg-indigo-50 dark:hover:bg-indigo-900 transition cursor-default"
          >
            {skill}
          </div>
        ))}
      </div>
    </section>
  );
}
