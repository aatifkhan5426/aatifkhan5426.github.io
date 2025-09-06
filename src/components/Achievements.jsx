import { motion } from 'framer-motion';
import { FaTrophy } from 'react-icons/fa';

const achievements = [
  {
    title: 'Winner - Hack the Future 2023',
    description: 'Led a team of 4 to win a national-level hackathon building a real-time disaster alert app.',
  },
  {
    title: 'Open Source Contributor',
    description: 'Contributed to popular open-source projects including React and Django repositories.',
  },
];


const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.3,
      duration: 0.6,
    },
  }),
};

const Achievements = () => {
  return (
    <section className="bg-gray-50 dark:bg-[#121212] py-20 px-6">
      <div className="max-w-6xl mx-auto space-y-20">

        {/* Achievements */}
        <div>
          <h2 className="text-3xl sm:text-4xl font-bold text-center text-gray-900 dark:text-white mb-12">
            <FaTrophy className="inline-block text-yellow-500 mr-2" /> Achievements
          </h2>
          <div className="space-y-10">
            {achievements.map((item, i) => (
              <motion.div
                key={i}
                custom={i}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.3 }}
                variants={fadeUp}
                className="bg-white dark:bg-[#2f2b3a] p-6 rounded-xl shadow-md hover:shadow-lg transition"
              >
                <h3 className="text-xl font-semibold text-primary mb-2">{item.title}</h3>
                <p className="text-gray-700 dark:text-gray-300">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Achievements;