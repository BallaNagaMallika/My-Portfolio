import React, { useEffect } from 'react';

const About: React.FC = () => {
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

    const elements = document.querySelectorAll('.about-animate');
    elements.forEach((el) => observer.observe(el));

    return () => {
      elements.forEach((el) => observer.unobserve(el));
    };
  }, []);

  return (
    <section id="about" className="py-20 bg-white dark:bg-gray-800">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center text-gray-800 dark:text-white opacity-0 about-animate">
            About <span className="text-blue-600 dark:text-blue-400">Me</span>
          </h2>
          
          <div className="grid md:grid-cols-2 gap-3 items-center">
            <div className="relative opacity-0 about-animate">
              <div className="w-[400px] h-[400px] aspect-square bg-gradient-to-tr from-blue-600 to-teal-400 rounded-lg overflow-hidden shadow-xl">
                <img 
                  src="src\components\mallika.jpg" 
                  alt="Data Analytics" 
                  className="w-400 h-400 object-cover"
                />
              </div>
              <div className="absolute -bottom-5 -right-1 w-20 h-20 bg-blue-600 dark:bg-blue-500 rounded-lg"></div>
              <div className="absolute -top-5 -left-5 w-20 h-20 bg-teal-400 dark:bg-teal-500 rounded-lg"></div>
            </div>
            
            <div className="opacity-0 about-animate">
              <h3 className="text-2xl font-bold mb-4 text-gray-800 dark:text-white">
                Hi, I'm <span className="text-blue-600 dark:text-blue-400">Naga Mallika Balla</span>
              </h3>
              
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                I'm a curious mind exploring the world of data. As a B.Tech student with a passion for analytics, I love digging into numbers to uncover patterns, build solutions, and tell meaningful stories. Whether it's a dataset, a dashboard, or a predictive model—I enjoy turning information into action.
              </p>
              
              <p className="text-gray-600 dark:text-gray-300 mb-6">
                I'm always excited to collaborate on impactful projects and grow in the field of data science.
              </p>
              
              <div className="grid grid-cols-2 gap-3">
                <div>
                  <h4 className="font-semibold text-gray-800 dark:text-white mb-2">Location</h4>
                  <p className="text-gray-600 dark:text-gray-300">Vijayawada, Andhra Pradesh</p>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-800 dark:text-white mb-2">Email</h4>
                  <p className="text-gray-600 dark:text-gray-300">nagamallika9985@gmail.com</p>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-800 dark:text-white mb-2">Study</h4>
                  <p className="text-gray-600 dark:text-gray-300">Vishnu Institute of Technology</p>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-800 dark:text-white mb-2">Degree</h4>
                  <p className="text-gray-600 dark:text-gray-300">B.Tech in CSE</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;