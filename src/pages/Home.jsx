// src/pages/Home.jsx
import React, { useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { FiMail, FiGithub, FiLinkedin, FiTwitter } from "react-icons/fi";
import { Link } from "react-router-dom";


const skills = [
  "Artificial Intelligence","Machine Learning","Deep Learning","Large Language Models",
  "Natural Language Processing","Computer Vision","Reinforcement Learning","Python","NumPy",
  "Pandas","Matplotlib","Seaborn","Scikit-learn","TensorFlow","SQL / SQLite","DevOps","MLOps",
  "Git & GitHub","Docker","CI/CD Pipelines","Version Control","Deployment & Monitoring","Data Analysis","Ethical AI",
];

export default function Home() {
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    if (location.hash) {
      const id = location.hash.replace("#", "");
      setTimeout(() => {
        const el = document.getElementById(id);
        if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
      }, 50);
    } else if (location.pathname === "/") {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  }, [location]);

  return (
    <main className="pt-24 max-w-7xl mx-auto px-4 space-y-12">

      {/* HOME */}
      <section id="home" className="min-h-screen flex flex-col justify-center items-center text-center">
        <h1 className="text-5xl font-bold mb-2 text-black">Mohammad Alquamah Ansari</h1>

        <p className="text-lg text-gray-700 mb-1">
          Exploring the Intersection of AI and DevOps
        </p>

        <p className="text-sm text-gray-600 max-w-2xl">
          AI Student & Developer | Passionate about Machine Learning, Deep Learning, LLMs, and Modern DevOps Practices
        </p>

        <div className="mt-6">
          <a
            href="/Mohammad-Alquamah-Ansari-Resume.pdf"
            target="_blank"
            rel="noreferrer"
            className="px-6 py-3 bg-black text-white rounded-lg text-sm font-medium hover:bg-gray-900 transition duration-150"
          >
            View Resume
          </a>
        </div>
      </section>

      {/* ABOUT */}
      <section id="about" className="min-h-screen flex flex-col justify-center items-center text-center px-6">
        <h2 className="text-3xl font-semibold mb-4 border-b-2 border-blue-700 inline-block">About Me</h2>
        <p className="max-w-2xl">
          Hi, I'm Mohammad Alquamah Ansari — an AI and DevOps enthusiast who enjoys building
          practical, efficient, and clean technology solutions.  
          <br /><br />
          I'm currently pursuing my B.Sc. in Artificial Intelligence, working with Machine Learning,
          Deep Learning, LLMs, and DevOps tools like Docker and CI/CD. I like combining AI
          development with automation to create projects that are reliable, scalable, and easy to
          deploy.
        </p>

      </section>

      {/* PROJECTS PREVIEW */}
      <section
        id="projects"
        className="min-h-screen flex flex-col justify-center items-center text-center px-6"
      >
      <h2 className="text-3xl font-semibold mb-8 border-b-2 border-blue-700 inline-block">
        Projects
      </h2>

      {/* Stack vertically */}
      <div className="w-full max-w-3xl flex flex-col gap-8">

      {/* Emotion Detection */}
        <div className="border rounded-lg p-6 bg-white shadow hover:shadow-lg transition-shadow text-left">
        <h3 className="text-xl font-bold mb-2">Emotion Detection</h3>
        <p className="mb-2">
          Deep learning-based emotion recognition model built using CNNs and image preprocessing techniques.
        </p>

        <div className="mb-4 flex flex-wrap gap-2">
          <span className="bg-blue-100 text-black px-3 py-1 rounded text-sm">TensorFlow</span>
          <span className="bg-blue-100 text-black px-3 py-1 rounded text-sm">Keras</span>
          <span className="bg-blue-100 text-black px-3 py-1 rounded text-sm">OpenCV</span>
        </div>

        <a
          href="https://github.com/alqamahansari/Emotion-Detection-System"
          target="_blank"
          rel="noreferrer"
          className="text-blue-600 underline"
        >
          View Code
        </a>
      </div>

      {/* House Price Prediction */}
      <div className="border rounded-lg p-6 bg-white shadow hover:shadow-lg transition-shadow text-left">
        <h3 className="text-xl font-bold mb-2">House Price Prediction App</h3>
        <p className="mb-2">
          Machine Learning model predicting house prices using regression algorithms and feature engineering.
        </p>

        <div className="mb-4 flex flex-wrap gap-2">
          <span className="bg-blue-100 text-black px-3 py-1 rounded text-sm">Python</span>
          <span className="bg-blue-100 text-black px-3 py-1 rounded text-sm">Scikit-learn</span>
          <span className="bg-blue-100 text-black px-3 py-1 rounded text-sm">Pandas</span>
        </div>

        <a
          href="https://github.com/alqamahansari/house-price-prediction"
          target="_blank"
          rel="noreferrer"
          className="text-blue-600 underline"
        >
          View Code
        </a>
      </div>

      </div>

      {/* View All */}
      <div className="w-full max-w-3xl text-left mt-4">
      <Link to="/projects" className="text-black font-medium hover:underline">
        View All →
      </Link>
      </div>
      </section>

      


      {/* SKILLS */}
      <section id="skills" className="min-h-screen flex flex-col justify-center items-center text-center px-6">
        <h2 className="text-3xl font-semibold mb-6 border-b-2 border-blue-700 inline-block">Skills & Technologies</h2>
        <div className="flex flex-wrap justify-center gap-4 mt-4 max-w-4xl">
          {skills.map((s, i) => (
            <span key={i} className="bg-blue-100 text-black px-4 py-2 rounded-full text-sm">{s}</span>
          ))}
        </div>
      </section>

      {/* CONTACT */}
      <section id="contact" className="min-h-screen flex flex-col justify-center items-center text-center px-6">
        <h2 className="text-3xl font-semibold mb-6 border-b-2 border-blue-700 inline-block">Contact</h2>
        <div className="flex flex-row items-center gap-6">
          <a href="mailto:alquamahansari@gmail.com" className="w-14 h-14 flex items-center justify-center rounded-full bg-gray-100 hover:shadow-md hover:scale-105 transition-transform duration-150"><FiMail className="text-3xl text-black" /></a>
          <a href="https://github.com/alqamahansari" target="_blank" rel="noreferrer" className="w-14 h-14 flex items-center justify-center rounded-full bg-gray-100 hover:shadow-md hover:scale-105 transition-transform duration-150"><FiGithub className="text-3xl text-black" /></a>
          <a href="https://linkedin.com/in/alqamahansari" target="_blank" rel="noreferrer" className="w-14 h-14 flex items-center justify-center rounded-full bg-gray-100 hover:shadow-md hover:scale-105 transition-transform duration-150"><FiLinkedin className="text-3xl text-black" /></a>
          <a href="https://x.com/AlqamahAnsari" target="_blank" rel="noreferrer" className="w-14 h-14 flex items-center justify-center rounded-full bg-gray-100 hover:shadow-md hover:scale-105 transition-transform duration-150"><FiTwitter className="text-3xl text-black" /></a>
        </div>
      </section>

    </main>
  );
}
