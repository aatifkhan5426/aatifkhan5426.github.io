// src/pages/Contact.jsx
import { useState } from 'react';
import { motion } from 'framer-motion';
import emailjs from '@emailjs/browser';

import { MdEmail, MdPhone, MdLocationOn } from "react-icons/md";


const Contact = () => {
  const [formData, setFormData] = useState({ name: '', email: '', subject: '', message: '' });
  const [status, setStatus] = useState(null);

  const handleChange = (e) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setStatus(null); // Reset status
  
    // emailjs
    //   .send(
    //     'your_service_id', // Replace with your actual Service ID
    //     'your_template_id', // Replace with your actual Template ID
    //     formData,
    //     'your_public_key'   // Replace with your actual Public Key
    //   )
    emailjs.send("service_avsbthq","template_0euwuse",formData,"2VFeK2q58egsVITS3").then(
        () => {
          setStatus('success');
          setFormData({ name: '', email: '', subject: '', message: '' }); // Reset form
        },
        (error) => {
          console.error('EmailJS Error:', error);
          setStatus('error');
        }
      );
  };
  
  return (
    <motion.section
      className="min-h-screen py-20 px-6 bg-gray-100 dark:bg-[#121212]"
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 bg-white dark:bg-[#1a1625] rounded-2xl shadow-xl p-10" id="contact">
        {/* Left Info Side */}
        <motion.div
          className="flex flex-col justify-center"
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl font-bold mb-6 text-gray-800 dark:text-white">
            Let’s build something amazing together!
          </h2>
          <p className="text-gray-600 dark:text-gray-300 mb-8 leading-relaxed">
            Whether you want to collaborate, have a project in mind, or just say hi — feel free to reach out. I'm always open to new opportunities and meaningful conversations.
          </p>

          <div className="space-y-5">
            <div className="flex items-start gap-4">
              <MdEmail className="text-primary mt-1" />
              <div>
                <h4 className="font-semibold text-gray-800 dark:text-white">Email</h4>
                <p className="text-gray-600 dark:text-gray-300">hello@example.com</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <MdPhone className="text-primary mt-1" />
              <div>
                <h4 className="font-semibold text-gray-800 dark:text-white">MdPhone</h4>
                <p className="text-gray-600 dark:text-gray-300">+91 9876543210</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <MdLocationOn className="text-primary mt-1" />
              <div>
                <h4 className="font-semibold text-gray-800 dark:text-white">Location</h4>
                <p className="text-gray-600 dark:text-gray-300">Mumbai, India</p>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Right Form Side */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
        >
          <form onSubmit={handleSubmit} className="space-y-6">
            {['name', 'email', 'subject'].map((field, i) => (
              <motion.div
                key={field}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 + 0.2 }}
              >
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1 capitalize">
                  {field}
                </label>
                <input
                  type={field === 'email' ? 'email' : 'text'}
                  name={field}
                  required
                  value={formData[field]}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-lg bg-gray-100 dark:bg-[#2f2b3a] text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-primary transition"
                />
              </motion.div>
            ))}

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
            >
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                Message
              </label>
              <textarea
                name="message"
                rows="4"
                required
                value={formData.message}
                onChange={handleChange}
                className="w-full px-4 py-3 rounded-lg bg-gray-100 dark:bg-[#2f2b3a] text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-primary transition resize-none"
              />
            </motion.div>

            <motion.button
              type="submit"
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.98 }}
              className="w-full bg-primary text-white font-semibold py-3 rounded-lg transition shadow-md hover:shadow-lg"
            >
              Send Message
            </motion.button>
          </form>

          {status === 'success' && (
            <motion.p
              className="mt-6 text-green-600 text-center font-medium"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
            >
              ✅ Message sent successfully!
            </motion.p>
          )}
          {status === 'error' && (
            <motion.p
              className="mt-6 text-red-500 text-center font-medium"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
            >
              ❌ Something went wrong. Please try again.
            </motion.p>
          )}
        </motion.div>
      </div>
    </motion.section>
  );
};

export default Contact;
