// src/pages/Home.jsx
import Hero from '../components/Hero';
import FeaturedProjects from '../components/FeaturedProjects';

// import Testimonials from '../components/Testimonials';
import Skills from '../components/Skills';
import Experience from '../components/Experience';
import Achievements from '../components/Achievements';
import Education from '../components/Education';
import Contact from '../pages/Contact';


const Home = () => {
  return (
    <main>
      <Hero />
      <FeaturedProjects />
      {/* <Testimonials /> */}
      <Skills />
      <Experience />
      <Education />
      <Contact />
    </main>
  );
};

export default Home;
