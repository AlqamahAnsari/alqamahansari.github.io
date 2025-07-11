import ProjectCard from '../components/ProjectCard';

export default function Projects() {
  const projectList = [
    {
      title: "IELTS AI App",
      description: "An AI-powered app for IELTS preparation, including speaking and writing evaluation.",
      link: "https://github.com/Alquamahansari/Aditya-IELTS",
      image: "/Aditya-IELTS.png",
    },
    {
      title: "Air Quality Dashboard",
      description: "A data visualization dashboard showing air quality data across India using Power BI.",
      link: "https://github.com/Alquamahansari/air-quality-dashboard",
      image: "/AQI.png",
    },
    {
      title: "Emotion Detection System",
      description: "A machine learning system to detect human emotions from speech and facial expressions.",
      link: "https://github.com/Alquamahansari/Emotion-Detection-System",
      image: "/Emotion Detection System.png",
    },
  ];

  return (
    <section
      id="projects"
      className="min-h-screen px-6 py-20 bg-gray-100 dark:bg-gray-900 text-center"
    >
      <h2 className="text-4xl font-bold text-indigo-600 dark:text-indigo-400 mb-10">
        My Projects
      </h2>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
        {projectList.map((project, index) => (
          <ProjectCard key={index} {...project} />
        ))}
      </div>
    </section>
  );
}
