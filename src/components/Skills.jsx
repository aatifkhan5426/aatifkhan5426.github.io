// src/components/Skills.jsx
import { motion, useInView } from 'framer-motion';
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import React, { useEffect, useRef, useState } from 'react';
import { FaCheckCircle } from 'react-icons/fa';


const skills = {
  Frontend: [
    { name: 'HTML', level: 80 },
    { name: 'CSS', level: 85 },
    { name: 'JavaScript', level: 80 },
    { name: 'React', level: 75 },
    { name: 'Tailwind CSS', level: 75 },
    { name: 'Bootstrap', level: 85 },
    { name: 'JQuery', level: 70 },
  ],
  Backend: [
    { name: 'Python', level: 90 },
    { name: 'Django', level: 85 },
    { name: 'Flask', level: 75 },
    { name: 'REST API', level: 80 },
    { name: 'PostgreSQL', level: 80 },
  ],
  Tools: ['Git', 'GitHub', 'VS Code', 'Postman'],
  Modules: ['Numpy', 'Pandas', 'Selenium', 'PyautoGUI'],
};

const barVariants = {
  initial: { width: 0 },
  animate: (level) => ({
    width: `${level}%`,
    transition: { duration: 1 },
  }),
};

const Skills = () => {
  return (
    <section className="bg-white dark:bg-[#121212] py-20 px-6" id="skills">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl sm:text-4xl font-bold text-center text-gray-900 dark:text-white mb-14">
          Skills & Tools
        </h2>

        <div className="grid md:grid-cols-3 gap-8"  data-aos="zoom-in-right">
          {/* Frontend */}
          <div className="bg-gray-100 dark:bg-[#1a1625] rounded-xl p-6 shadow-md">
            <h3 className="text-xl font-semibold mb-6 text-primary">Frontend</h3>
            <div className="space-y-5">
              {skills.Frontend.map((skill, index) => (
                <div key={index}>
                  <div className="flex justify-between mb-1 text-sm text-gray-700 dark:text-gray-300">
                    <span>{skill.name}</span>
                    <span>{skill.level}%</span>
                  </div>
                  <div className="w-full h-2 bg-gray-300 dark:bg-[#3f3f3f] rounded-full overflow-hidden">
                    <motion.div
                      className="h-full bg-primary rounded-full"
                      initial="initial"
                      whileInView="animate"
                      viewport={{ once: true }}
                      custom={skill.level}
                      variants={barVariants}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Backend */}
          <div className="bg-gray-100 dark:bg-[#1a1625] rounded-xl p-6 shadow-md" data-aos="zoom-in-down">
      <h3 className="text-xl font-semibold mb-6 text-primary">Backend</h3>
      <div className="grid grid-cols-2 gap-6">
        {skills.Backend.map((skill, idx) => (
          <SkillProgress key={idx} skill={skill} />
        ))}
      </div>
    </div>

                    {/* Tools in table format with check icons */}
            <div  data-aos="zoom-in-left">
            <h3 className="text-xl font-semibold mb-6 text-primary">Tools</h3>
            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse">
                <tbody>
                  {skills.Tools.map((tool, idx) => (
                    <tr key={idx} className="border-b border-gray-200 dark:border-gray-700">
                      <td className="py-2 text-gray-800 dark:text-gray-200">{tool}</td>
                      <td className="py-2 text-green-600 text-xl">
                        <FaCheckCircle />
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <h3 className="text-xl font-semibold mb-6 text-primary mt-6">Python Modules</h3>
            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse">
                <tbody>
                  {skills.Modules.map((module, idx) => (
                    <tr key={idx} className="border-b border-gray-200 dark:border-gray-700">
                      <td className="py-2 text-gray-800 dark:text-gray-200">{module}</td>
                      <td className="py-2 text-green-600 text-xl">
                        <FaCheckCircle />
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};


const SkillProgress = ({ skill }) => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: '-50px' });
    const [progress, setProgress] = useState(0);
  
    useEffect(() => {
      if (isInView) {
        setTimeout(() => setProgress(skill.level), 100); // slight delay for smoothness
      }
    }, [isInView, skill.level]);
  
    return (
      <div ref={ref} className="flex flex-col items-center">
        <div className="w-20 h-20 transition-all duration-1000 ease-out">
          <CircularProgressbar
            value={progress}
            text={`${progress}%`}
            styles={buildStyles({
              textSize: '24px',
              pathColor: '#7a5af5',
              textColor: '#7a5af5',
              trailColor: '#eee',
            })}
          />
        </div>
        <p className="mt-2 text-sm text-gray-800 dark:text-white font-medium">
          {skill.name}
        </p>
      </div>
    );
  };


export default Skills;