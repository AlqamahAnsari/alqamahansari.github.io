import ProjectCard from "../components/ProjectCard";
import { motion } from "framer-motion";

export default function Projects() {
  const projectList = [
    {
    title: "AI-Powered Career Learning Platform (Ongoing)",
    description:
      "A multi-track AI-driven learning platform that personalizes career growth through LLM-powered mentoring, adaptive assessments.",
    link: "https://github.com/AlquamahAnsari/AI-Career-Learning-Platform",
    image: "/ai-career-platform.png",
    },
    {
    title: "Atmos",
    description:
      "Atmos, a real-time weather forecasting web app using HTML, CSS, JavaScript and OpenWeather API, providing dynamic visualizations and location-based insights.",
    link: "https://github.com/AlqamahAnsari/atmos",
    image: "/weather.png",
    },
    {
    title: "House Price Prediction App",
    description:
      "A regression-based ML web app that predicts house prices using real-world data and feature engineering, demonstrating end-to-end model deployment skills.",
    link: "https://github.com/AlqamahAnsari/house-price-prediction",
    image: "/house.png",
    },
    {
      title: "Emotion Detection System",
      description: "A machine learning system to detect emotions from speech and facial expressions.",
      link: "https://github.com/Alquamahansari/Emotion-Detection-System",
      image: "/Emotion Detection System.png",
      imageAlt: "Emotion Detection System Screenshot",
    },
  ];

  return (
    <section
      id="projects"
      className="min-h-screen px-6 py-20 bg-gray-100 dark:bg-gray-900 text-center"
    >
      <h2 className="text-4xl font-bold text-indigo-600 dark:text-indigo-400 mb-10">
        Projects
      </h2>
      <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
        {projectList.map((project, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
          >
            <ProjectCard {...project} />
          </motion.div>
        ))}
      </div>
    </section>
  );
}
