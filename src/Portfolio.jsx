import React, { useState, useEffect } from 'react';
import { Sun, Moon } from 'lucide-react';
import { motion } from 'framer-motion';
import './index.css';
import CalendlyWidget from './CalendlyWidget';
import expressIcon from './assets/icons/icons8-express-js-50.png';
import pythonIcon from './assets/icons/icons8-python-48.png';
import javascriptIcon from './assets/icons/icons8-javascript-48.png';
import reactIcon from './assets/icons/icons8-react-native-48.png';
import nodeIcon from './assets/icons/icons8-node-js-48.png';
import mongodbIcon from './assets/icons/icons8-mongodb-48.png';
import mysqlIcon from './assets/icons/icons8-mysql-48.png';
import cIcon from './assets/icons/icons8-c-48.png';
import htmlIcon from './assets/icons/icons8-html5-48.png';
import tailwindIcon from './assets/icons/icons8-tailwindcss-48.png';
import pandasIcon from './assets/icons/icons8-pandas-48.png';
import javaIcon from './assets/icons/icons8-java-48.png';

export default function Portfolio() {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    const savedTheme = localStorage.getItem('theme');
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;

    if (savedTheme === 'dark' || (!savedTheme && prefersDark)) {
      document.documentElement.classList.add('dark');
      setDarkMode(true);
    }
  }, []);
   

  const toggleDarkMode = () => {
    document.documentElement.classList.toggle('dark');
    setDarkMode(prev => !prev);
  };

  const projects = [
    {
      title: 'Brain Tumor Detection',
      description: 'Detects Brain Tumors using YOLOV10 and OpenCv',
      tech: ['Python', 'OpenCV', 'DL'],
      github: 'https://github.com/TabarakAllahKhan/Brain_Tumor_YOLO1V10',
      demo: '',
    },
    {
      title: 'Student Forum',
      description: 'A Laravel App where student can disscuss their ideas related to any topic like programming languages or any issue related to them.',
      tech: ['Laravel', 'Bootstrap'],
      github: 'https://github.com/TabarakAllahKhan/Laravel-Forum',
      demo: 'https://youtu.be/NnPM62yeRx0?si=NOIm-2hsi0tVf_N-',
    },
    {
      title: 'Netflix Clone',
      description: 'A Netflix clone built using Tailwind CSS.',
      tech: ['HTML','Tailwind CSS'],
      github:'https://github.com/TabarakAllahKhan/netflixclone_Tailwind'
    }
  ];

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 text-gray-900 dark:text-white font-poppins px-4">
      <nav className="flex justify-between items-center py-6">
        <h1 className="text-xl font-bold">Tabarak Allah</h1>
        <button onClick={toggleDarkMode} className="p-2">
          {darkMode ? <Sun /> : <Moon />}
        </button>
      </nav>

      <section className="text-center py-10">
        <h2 className="text-4xl font-bold">Hi, I'm Tabarak Allah 👋</h2>
        <p className="text-lg mt-4">A passionate Software Engineer & ML Enthusiast.</p>
        <a href="#projects" className="mt-6 inline-block bg-blue-600 text-white px-6 py-3 rounded-2xl shadow-lg">
          View My Work
        </a>
      </section>

      <section className="py-10 max-w-3xl mx-auto">
        <h3 className="text-2xl font-semibold mb-4">About Me</h3>
        <p>
          I’m a software engineering graduate deeply passionate about machine learning and artificial intelligence.
          With strong skills in C++, Java, Python, and web development, I'm eager to learn and contribute to
          innovative tech teams. Currently exploring remote internships and freelance opportunities in the AI and
          cloud security space.
        </p>
      </section>

      <section className="py-10 max-w-4xl mx-auto">
        <h3 className="text-2xl font-semibold mb-6">Skills</h3>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6 text-center">
          {[
                { name: 'express js', icon: expressIcon },
                { name: 'Python', icon: pythonIcon },
                { name: 'JavaScript', icon: javascriptIcon },
                { name: 'React', icon: reactIcon },
                { name: 'Node.js', icon: nodeIcon },
                { name: 'MongoDB', icon: mongodbIcon },
                { name: 'MySQL', icon: mysqlIcon },
                { name: 'C++', icon: cIcon },
                { name: 'HTML', icon: htmlIcon },
                { name: 'Tailwind Css', icon: tailwindIcon },
                { name: 'Pandas', icon: pandasIcon },
                { name: 'Java', icon: javaIcon },
        

          ].map(skill => (
            <div key={skill.name} className="bg-gray-100 dark:bg-gray-800 p-4 rounded-2xl shadow-lg flex flex-col items-center">
            <img src={skill.icon} alt={skill.name} className="h-12 w-12 object-contain mb-2" />

              <span>{skill.name}</span>
            </div>
          ))}
        </div>
      </section>

      <section id="projects" className="py-10 max-w-5xl mx-auto">
        <h3 className="text-2xl font-semibold mb-6">Projects</h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              className="bg-gray-100 dark:bg-gray-800 p-6 rounded-2xl shadow-lg"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <h4 className="text-xl font-bold mb-2">{project.title}</h4>
              <p>{project.description}</p>
              <div className="mt-2 text-sm text-blue-400 flex flex-wrap gap-2">
                {project.tech.map(tag => (
                  <span key={tag}>#{tag}</span>
                ))}
              </div>
              <div className="mt-4 flex gap-4">
                <a href={project.github} className="text-blue-500 hover:underline" target="_blank" rel="noopener noreferrer">
                  GitHub
                </a>
                {project.demo && (
                  <a href={project.demo} className="text-blue-500 hover:underline">
                    Live Demo
                  </a>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </section>
         <CalendlyWidget/>
      <section className="py-10 text-center">
        <h3 className="text-2xl font-semibold mb-4">Let's connect!</h3>
        <p>Reach out via the platforms below.</p>
        <div className="flex justify-center gap-6 mt-4">
          <a href="https://github.com/TabarakAllahKhan" target="_blank" rel="noopener noreferrer" className="text-xl">
            GitHub
          </a>
          <a href="https://www.linkedin.com/in/tabarakallahkhan/" target="_blank" rel="noopener noreferrer" className="text-xl">
            LinkedIn
          </a>
          <a href="mailto:tabarakalizai861@gmail.com" className="text-xl">
            Email
          </a>
        </div>
      </section>

      <footer className="py-6 text-center text-sm text-gray-500 dark:text-gray-400">
        <p>Built with ❤️ using ReactVite & Tailwind CSS</p>
        <p>© Tabrak Allah, 2025</p>
      </footer>
    </div>
    
  );
}
