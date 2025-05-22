import React, { useEffect, useRef } from 'react';
import { ArrowDown, Github, Linkedin, Mail, FileText } from 'lucide-react';

const Hero: React.FC = () => {
  const titleRef = useRef<HTMLHeadingElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-fade-in');
          }
        });
      },
      { threshold: 0.1 }
    );

    const elements = document.querySelectorAll('.hero-animate');
    elements.forEach((el) => observer.observe(el));

    return () => {
      elements.forEach((el) => observer.unobserve(el));
    };
  }, []);

  const scrollToNext = () => {
    const aboutSection = document.querySelector('#about');
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section
      id="home"
      className="min-h-screen flex flex-col justify-center items-center pt-20 pb-10 px-4 bg-gradient-to-br from-white to-gray-100 dark:from-gray-900 dark:to-gray-800"
    >
      <div className="container mx-auto max-w-4xl text-center">
        <p className="text-blue-600 dark:text-blue-400 font-medium mb-4 opacity-0 hero-animate">
          Hello, I'm
        </p>
        <h1
          ref={titleRef}
          className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 text-gray-800 dark:text-white opacity-0 hero-animate"
        >
          <span className="block">Naga Mallika Balla</span>
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-teal-400">
            Emerging Data Professional
          </span>
        </h1>
        <p className="text-lg md:text-xl text-gray-600 dark:text-gray-300 mb-4 max-w-2xl mx-auto opacity-0 hero-animate">
          Exploring the Power of Data, From Raw Data to Smart Decisions
        </p>
        <p className="text-md md:text-lg text-gray-500 dark:text-gray-400 mb-8 max-w-2xl mx-auto opacity-0 hero-animate">
          Ask Me About Data—I Speak in Rows and Columns
        </p>

        <div className="flex justify-center space-x-4 mb-12 opacity-0 hero-animate">
          <a
            href="https://github.com/BallaNagaMallika"
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 rounded-full bg-gray-200 hover:bg-gray-300 dark:bg-gray-700 dark:hover:bg-gray-600 text-gray-700 dark:text-gray-200 transition-colors"
            aria-label="Github"
          >
            <Github className="h-5 w-5" />
          </a>
          <a
            href="https://www.linkedin.com/in/naga-mallika-balla-13003b27b/"
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 rounded-full bg-gray-200 hover:bg-gray-300 dark:bg-gray-700 dark:hover:bg-gray-600 text-gray-700 dark:text-gray-200 transition-colors"
            aria-label="LinkedIn"
          >
            <Linkedin className="h-5 w-5" />
          </a>
          <a
            href="mailto:nagamallika9985@gmail.com"
            className="p-3 rounded-full bg-gray-200 hover:bg-gray-300 dark:bg-gray-700 dark:hover:bg-gray-600 text-gray-700 dark:text-gray-200 transition-colors"
            aria-label="Email"
          >
            <Mail className="h-5 w-5" />
          </a>
        </div>

        <div className="flex justify-center space-x-4 opacity-0 hero-animate">
          <a
            href="#contact"
            className="px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-full transition-colors"
          >
            Let's Talk
          </a>
          <a
            href="https://drive.google.com/file/d/1mHuM5Rx1bXUGIQquUyA9cvEOme5BRiL1/view?usp=sharing"
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-3 border border-gray-300 dark:border-gray-600 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-full text-gray-700 dark:text-gray-200 transition-colors flex items-center"
          >
            <FileText className="h-4 w-4 mr-2" />
            Resume
          </a>
        </div>
      </div>

      <button
        onClick={scrollToNext}
        className="absolute bottom-10 animate-bounce p-2 rounded-full bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-200"
      >
        <ArrowDown className="h-5 w-5" />
      </button>
    </section>
  );
};

export default Hero;