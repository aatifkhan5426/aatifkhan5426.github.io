// src/components/FeaturedProjects.jsx
import { FaReact, FaMobileAlt, FaExternalLinkAlt } from 'react-icons/fa';
import { SiTailwindcss, SiFirebase, SiFramer } from 'react-icons/si';
import project1 from '../assets/project1.jpg';
import project2 from '../assets/project2.jpg';

const projects = [
  {
    id: 1,
    title: 'Mobile Banking App',
    description:
      'A sleek and secure banking app for iOS and Android, offering instant transfers, budget tracking, and credit card management.',
    image: 'https://plus.unsplash.com/premium_photo-1684785617522-e2be3c1f3b22?q=80&w=1684&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    tech: [
      { name: 'React Native', icon: <FaMobileAlt /> },
      { name: 'Firebase', icon: <SiFirebase /> },
      { name: 'Tailwind CSS', icon: <SiTailwindcss /> },
    ],
    link: '#',
  },
  {
    id: 2,
    title: 'Portfolio Website',
    description:
      'A personal portfolio website to showcase projects, skills, and experience with a modern, responsive design.',
    image: 'https://plus.unsplash.com/premium_photo-1720091339077-d0f56397a0c9?q=80&w=1632&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    tech: [
      { name: 'React', icon: <FaReact /> },
      { name: 'Tailwind CSS', icon: <SiTailwindcss /> },
      { name: 'Framer Motion', icon: <SiFramer /> },
    ],
    link: '#',
  },
  {
    id: 3,
    title: 'Blogs Website',
    description:
      'A personal portfolio website to showcase projects, skills, and experience with a modern, responsive design.',
    image: 'https://plus.unsplash.com/premium_photo-1720744786849-a7412d24ffbf?q=80&w=1618&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    tech: [
      { name: 'React', icon: <FaReact /> },
      { name: 'Tailwind CSS', icon: <SiTailwindcss /> },
      { name: 'Framer Motion', icon: <SiFramer /> },
    ],
    link: '#',
  },
];

const FeaturedProjects = () => {
  return (
    <section className="px-6 py-20 bg-gray-100 dark:bg-gray-900" data-aos="fade-down" id="projects">
      <div className="max-w-6xl mx-auto">
        {/* Section Heading */}
        <h2 className="text-3xl sm:text-4xl font-bold text-center mb-12 text-gray-900 dark:text-white">
          Featured Projects
        </h2>

        {/* Projects Grid */}
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((project) => (
            <div
              key={project.id}
              data-aos="zoom-out-down"
              className="bg-white dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden transform transition duration-500 hover:scale-105"
            >
              {/* Project Image */}
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-56 object-cover"
              />

              {/* Project Details */}
              <div className="p-6">
                <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-2">
                  {project.title}
                </h3>
                <p className="text-gray-700 dark:text-gray-300 mb-4">
                  {project.description}
                </p>

                {/* Tech Stack */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.map((tech, index) => (
                    <span
                      key={index}
                      className="flex items-center bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-200 px-3 py-1 text-sm rounded-full"
                    >
                      {tech.icon}
                      <span className="ml-1">{tech.name}</span>
                    </span>
                  ))}
                </div>

                {/* View Project Link */}
                {/* <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center text-primary hover:underline"
                >
                  View Project
                  <FaExternalLinkAlt className="ml-2" />
                </a> */}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedProjects;
