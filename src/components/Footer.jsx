// src/components/Footer.jsx
import { Link } from 'react-router-dom';
import {
  FaGithub,
  FaLinkedin,
  FaTwitter,
  FaEnvelope,
} from 'react-icons/fa';
import { Link as ScrollLink } from 'react-scroll';

const Footer = () => {
  return (
    <footer className="bg-slate-200 dark:bg-[#1a1625] text-gray-700 dark:text-gray-300 py-10">
      <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-3 gap-8 text-center md:text-left">
        {/* Column 1: Branding */}
        <div data-aos="fade-right">
          <h2 className="text-xl font-semibold text-primary mb-2">My Portfolio</h2>
          <p className="text-sm">
            Built with ❤️ using React, Tailwind CSS, and passion for clean code.
          </p>
        </div>

        {/* Column 2: Navigation */}
        <div data-aos="fade-up">
          <h3 className="text-lg font-semibold mb-3">Quick Links</h3>
          <ul className="space-y-2">
            <li>
              <ScrollLink
                to="home" // You need an element with id="top"
                smooth={true}
                duration={500}
                offset={-70}
                className="cursor-pointer hover:text-primary transition"
              >
                Home
              </ScrollLink>
            </li>

              <li>
                <ScrollLink 
                  to="projects" 
                  smooth={true} 
                  duration={500} 
                  offset={-70} 
                  className="cursor-pointer hover:text-primary transition"
                >
                  Projects
                </ScrollLink>
              </li>
              <li>
                <ScrollLink 
                  to="skills" 
                  smooth={true} 
                  duration={500} 
                  offset={-70} 
                  className="cursor-pointer hover:text-primary transition"
                >
                  Skills
                </ScrollLink>
              </li>
              <li>
                <ScrollLink 
                  to="experience" 
                  smooth={true} 
                  duration={500} 
                  offset={-70} 
                  className="cursor-pointer hover:text-primary transition"
                >
                  Experience
                </ScrollLink>
              </li>
              <li>
                <ScrollLink 
                  to="education" 
                  smooth={true} 
                  duration={500} 
                  offset={-70} 
                  className="cursor-pointer hover:text-primary transition"
                >
                  Education
                </ScrollLink>
              </li>
              <li>
                <ScrollLink 
                  to="contact" 
                  smooth={true} 
                  duration={500} 
                  offset={-70} 
                  className="cursor-pointer hover:text-primary transition"
                >
                  Contact
                </ScrollLink>
              </li>

          </ul>
        </div>

        {/* Column 3: Social Icons */}
        <div data-aos="fade-left">
          <h3 className="text-lg font-semibold mb-3">Connect with me</h3>
          <div className="flex justify-center md:justify-start gap-4 text-xl">
            <a href="https://github.com/aatifkhan5426" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition">
              <FaGithub />
            </a>
            <a href="https://linkedin.com/in/aatifkhan5426" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition">
              <FaLinkedin />
            </a>
            <a href="mailto:aatifkhan5426@gmail.com" className="hover:text-primary transition">
              <FaEnvelope />
            </a>
          </div>
        </div>
      </div>

      {/* Bottom Line */}
      <div className="mt-10 border-t border-gray-300 dark:border-gray-700 pt-4 text-center text-xs text-gray-600 dark:text-gray-400">
        &copy; {new Date().getFullYear()} My Portfolio. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
