// src/components/Hero.jsx
import profilePic from '../assets/profile.jpg';
import { Link } from 'react-router-dom';
import { FaDownload } from 'react-icons/fa';
import { FaGithub, FaLinkedin } from 'react-icons/fa';

const Hero = () => (
  <section
    className="flex flex-col-reverse md:flex-row items-center justify-between gap-16 px-6 py-24 max-w-6xl mx-auto"
    data-aos="fade-up"
    id="home"
  >
    {/* === LEFT SIDE TEXT === */}
    <div className="flex-1 text-center md:text-left">
      <h1 className="text-4xl sm:text-5xl font-extrabold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500">
        Hi! I'm Aatif Khan
      </h1>

      <p
        className="text-lg text-gray-600 dark:text-gray-300 mb-6 max-w-xl mx-auto md:mx-0 leading-relaxed"
        data-aos="fade-up"
        data-aos-delay="100"
      >
        Full Stack Developer with 3+ years of experience building secure and scalable web applications. 
        Welcome to my portfolio!
      </p>

      {/* CTA Buttons */}
      <div
        className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start mb-6"
        data-aos="fade-up"
        data-aos-delay="200"
      >
        <a
          href="../assets/Aatif_Django_Developer_Resume.pdf" // update this path
          download="Aatif_Django_Developer_Resume.pdf" // optional: custom file name
          className="bg-primary text-white px-6 py-3 rounded-full font-medium shadow-lg hover:scale-105 transition transform duration-300 flex items-center gap-2"
        >
          Download Resume <FaDownload className="text-sm" />
        </a>
        <Link
          to="/contact"
          className="border-2 border-primary text-primary px-6 py-3 rounded-full font-medium hover:bg-primary hover:text-white shadow transition-all duration-300"
        >
          Contact Me
        </Link>
      </div>

      {/* Social Links */}
      <div className="flex justify-center md:justify-start gap-4" data-aos="fade-up" data-aos-delay="300">
        <a
          href="https://github.com/aatifkhan5426"
          target="_blank"
          rel="noopener noreferrer"
          className="text-gray-500 hover:text-primary text-2xl transition"
        >
          <FaGithub />
        </a>
        <a
          href="https://www.linkedin.com/in/aatifkhan5426"
          target="_blank"
          rel="noopener noreferrer"
          className="text-gray-500 hover:text-primary text-2xl transition"
        >
          <FaLinkedin />
        </a>
      </div>
    </div>

    {/* === RIGHT SIDE IMAGE === */}
    <div className="flex-1 flex justify-center md:justify-end" data-aos="zoom-in">
      <div className="relative w-60 h-60 md:w-72 md:h-72">
        <img
          src={profilePic}
          alt="Daniel Lopez"
          className="rounded-full object-cover border-4 border-primary shadow-2xl w-full h-full"
        />
        <div className="absolute top-0 left-0 w-full h-full rounded-full bg-indigo-500 blur-xl opacity-5 animate-pulse"></div>
        <div className="absolute -bottom-4 left-1/2 transform -translate-x-1/2 bg-white dark:bg-gray-800 px-4 py-1 rounded-full shadow text-sm font-semibold text-gray-700 dark:text-gray-200">
          Open to Work 
        </div>
      </div>
    </div>
  </section>
);

export default Hero;
