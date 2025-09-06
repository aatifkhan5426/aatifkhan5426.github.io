import { useState, useEffect } from 'react';
import { FiMoon, FiSun, FiMenu, FiX } from 'react-icons/fi';
import { Link } from 'react-router-dom';
import { Link as ScrollLink } from 'react-scroll';


const Navbar = () => {
  const [isDark, setIsDark] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const stored = localStorage.getItem('theme');
    if (stored === 'dark') {
      document.documentElement.classList.add('dark');
      setIsDark(true);
    }
  }, []);

  const toggleTheme = () => {
    const isDarkMode = document.documentElement.classList.toggle('dark');
    setIsDark(isDarkMode);
    localStorage.setItem('theme', isDarkMode ? 'dark' : 'light');
  };

  const toggleMenu = () => setMenuOpen(!menuOpen);

  return (
    <nav className="bg-lightBg dark:bg-darkBg shadow-md dark:shadow dark:shadow-black">
      <div className="max-w-6xl mx-auto px-4 py-3 flex justify-between items-center">
        {/* Logo */}
        <div className="text-2xl font-heading text-primary dark:text-accent">MyPortfolio</div>

        {/* Desktop Nav */}
        <ul className="hidden md:flex space-x-8 font-medium text-gray-700 dark:text-textSecondary">
          <li><Link to="/" className="hover:text-primary dark:hover:text-accent">Home</Link></li>
          
          <li>
            <ScrollLink to="projects" smooth={true} duration={500} offset={-70} className="cursor-pointer hover:text-primary dark:hover:text-accent">
              Projects
            </ScrollLink>
          </li>
          <li>
            <ScrollLink to="skills" smooth={true} duration={500} offset={-70} className="cursor-pointer hover:text-primary dark:hover:text-accent">
              Skills
            </ScrollLink>
          </li>
          <li>
            <ScrollLink to="experience" smooth={true} duration={500} offset={-70} className="cursor-pointer hover:text-primary dark:hover:text-accent">
              Experience
            </ScrollLink>
          </li>
          <li>
            <ScrollLink to="education" smooth={true} duration={500} offset={-70} className="cursor-pointer hover:text-primary dark:hover:text-accent">
              Education
            </ScrollLink>
          </li>
          <li>
            <ScrollLink to="contact" smooth={true} duration={500} offset={-70} className="cursor-pointer hover:text-primary dark:hover:text-accent">
              Contact
            </ScrollLink>
          </li>

        </ul>

        {/* Right Actions */}
        <div className="flex items-center space-x-4">
          <button onClick={toggleTheme} className="text-xl text-gray-600 dark:text-gray-300">
            {isDark ? <FiSun /> : <FiMoon />}
          </button>

          {/* Mobile Menu Button */}
          <button className="md:hidden text-2xl text-gray-600 dark:text-gray-300" onClick={toggleMenu}>
            {menuOpen ? <FiX /> : <FiMenu />}
          </button>
        </div>
      </div>

      {/* Mobile Nav */}
      {menuOpen && (
        <ul className="md:hidden flex flex-col space-y-4 px-4 pb-4 font-medium text-gray-700 dark:text-textSecondary">
          <li><Link to="/" onClick={toggleMenu}>Home</Link></li>
          <li><Link to="#projects" onClick={toggleMenu}>Projects</Link></li>
          <li><Link to="#skills" onClick={toggleMenu}>Skills</Link></li>
          <li><Link to="#experience"  onClick={toggleMenu}>Experience</Link></li>
          <li><Link to="#education"  onClick={toggleMenu}>Education</Link></li>
          <li><Link to="#contact"  onClick={toggleMenu}>Contact</Link></li>
        </ul>
      )}
    </nav>
  );
};

export default Navbar;
