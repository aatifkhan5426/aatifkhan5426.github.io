import { motion } from 'framer-motion';
import { FaGraduationCap } from 'react-icons/fa';

const education = [
  {
    institution: 'Mumbai University',
    degree: 'Bachelor of Engineering in Information Technology',
    year: '2018 – 2021',
    description: 'Percentage : 70.14% ',
  },
  {
    institution: 'Maharashtra State Board',
    degree: 'Diploma in Information Technology',
    year: '2015 – 2018',
    description: 'Percentage : 66.67%',
  },
  {
    institution: 'Maharashtra State Board',
    degree: 'SSC',
    year: '2015',
    description: 'Percentage : 85.80%',
  },
];

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.3,
      duration: 0.6,
    },
  }),
};

const Education = () => {
  return (
    <section className="bg-white dark:bg-[#1a1a1a] py-20 px-6" id="education">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl sm:text-4xl font-extrabold text-center text-gray-900 dark:text-white mb-16 relative">
          <FaGraduationCap className="inline-block text-indigo-600 dark:text-indigo-400 mr-2" />
          Education
          
        </h2>

        <div className="relative border-l-4 border-indigo-500 dark:border-indigo-400 pl-6 space-y-12">
          {education.map((item, i) => (
            <motion.div
              key={i}
              custom={i}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              variants={fadeUp}
              className="relative"
            >
              {/* Dot */}
              <div className="absolute left-[-40px] top-1 w-7 h-7 rounded-full bg-white dark:bg-[#1a1a1a] border-[6px] border-indigo-500 dark:border-indigo-400 z-10"></div>

              <div className="bg-gray-100 dark:bg-[#2a2a2a] rounded-lg p-6 shadow-md">
                <h3 className="text-lg sm:text-xl font-semibold text-indigo-700 dark:text-indigo-300 mb-1">
                  {item.degree}
                </h3>
                <h4 className="text-md sm:text-lg font-bold text-gray-800 dark:text-white">
                  {item.institution}
                </h4>
                <p className="text-sm text-gray-500 dark:text-gray-400 mb-2">{item.year}</p>
                <p className="text-gray-700 dark:text-gray-300">{item.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;
