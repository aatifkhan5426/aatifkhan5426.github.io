import { motion } from 'framer-motion';
import { FaBriefcase } from 'react-icons/fa';

const experienceData = [
    {
      company: 'GeBBS Healthcare Solutions',
      role: 'Software Engineer',
      period: 'May 2024 – Present',
      description: [
        'Developed intuitive user interfaces using HTML, CSS, and JavaScript, ensuring a seamless experience for the finance and operations teams.',
        'Integrated Django REST APIs for real-time data handling, ensuring smooth data flow between frontend and backend.',
        'Designed data visualizations for better insights and reporting of revenue estimates.',
        'Optimized performance for cross-device compatibility and responsiveness.',
        'Applied security best practices to ensure data privacy and user authentication.',
        'Utilized Git for version control and collaborated effectively with the team.',
      ],
      tech: ['React', 'Django', 'Docker', 'PostgreSQL'],
    },
    {
      company: 'FSS (Financial Software and Systems) | Client : State Bank of India',
      role: 'Technical Associate',
      period: 'Feb 2022 – Mar 2024',
      description: [
        'Developed intuitive and responsive user interfaces using HTML, CSS, and JavaScript.',
        'Implemented ReactJS components for efficient state management and enhanced user experience.',
        'Integrated Django APIs with the frontend for a seamless data flow and cohesive user experience.',
        'Contributed to the design of a scalable architecture to support increasing user traffic.',
        'Optimized frontend code to improve performance and responsiveness across various devices and browsers.',
        'Utilized Git for version control, ensuring smooth collaboration with team members.',
        'Created and maintained technical documentation for the project.',
      ],
      tech: ['React', 'Tailwind', 'REST API', 'Figma'],
    },
  ];
  

const cardVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.3,
      duration: 0.6,
      ease: 'easeOut',
    },
  }),
};

const Experience = () => {
  return (
    <section className="bg-gradient-to-b from-white to-gray-100 dark:from-[#1a1625] dark:to-[#2f2b3a] py-20 px-6" id="experience">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-center text-gray-900 dark:text-white mb-14">
          Work Experience
        </h2>

        <div className="space-y-12">
          {experienceData.map((exp, i) => (
            <motion.div
              key={i}
              custom={i}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              variants={cardVariants}
              className="relative flex flex-col md:flex-row gap-6 items-start bg-white dark:bg-[#2f2b3a] p-6 md:p-8 rounded-2xl shadow-xl hover:shadow-2xl transition duration-500 border-l-4 border-primary"
            >
              <div className="flex-shrink-0 bg-primary text-white p-4 rounded-full shadow-lg">
                <FaBriefcase size={24} />
              </div>

              <div>
                <h3 className="text-xl font-semibold text-primary mb-1">{exp.role}</h3>
                <h4 className="text-lg font-bold text-gray-800 dark:text-white">{exp.company}</h4>
                <p className="text-sm text-gray-500 dark:text-gray-400 mb-4">{exp.period}</p>
                <ul className="pl-6 space-y-3 text-gray-700 dark:text-gray-300 mb-4">
                {exp.description.map((point, idx) => (
                    <li
                    key={idx}
                    className="relative pl-5 before:content-['•'] before:absolute before:left-0 before:text-primary before:font-bold"
                    >
                    {point}
                    </li>
                ))}
                </ul>


                <div className="flex flex-wrap gap-2">
                  {exp.tech.map((tech, index) => (
                    <span
                      key={index}
                      className="bg-primary/90 text-white px-3 py-1 rounded-full text-sm"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
