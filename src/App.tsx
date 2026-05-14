import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import EngineeringHighlights from './components/EngineeringHighlights';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Experience from './components/Experience';
import GitHubStats from './components/GitHubStats';
import Contact from './components/Contact';
import Footer from './components/Footer';
import WhatsAppButton from './components/WhatsAppButton';
import CustomCursor from './components/CustomCursor';
import Preloader from './components/Preloader';

const App: React.FC = () => {
  return (
    <div className="relative w-full overflow-hidden bg-background text-foreground selection:bg-primary selection:text-primary-foreground">
      <Preloader />
      <CustomCursor />
      <Navbar />
      <main>
        <Hero />
        <About />
        <EngineeringHighlights />
        <Skills />
        <Projects />
        <Experience />
        <GitHubStats />
        <Contact />
      </main>
      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default App;
