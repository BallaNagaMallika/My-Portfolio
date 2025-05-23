import React, { useEffect } from 'react';
import { Briefcase, GraduationCap } from 'lucide-react';
import { Experience, Education } from '../types';

const experienceData: Experience[] = [
  {
    id: '1',
    company: 'ALTAIR, AICTE',
    position: 'Data Science Intern',
    period: '2025-April - Present',
    description: 'Gained hands-on experience in data cleaning, preprocessing, and implementing machine learning models to derive meaningful insights from raw datasets.'
  },
  {
    id: '2',
    company: 'Google, AICTE',
    position: 'AIML Intern',
    period: '2024-April - 2024-June',
    description: 'Learning key data science skills such as data preprocessing, EDA, machine learning, and data visualization. '
  },
  /*{
    id: '3',
    company: 'CreativeWeb Agency',
    position: 'Web Developer',
    period: '2018 - 2020',
    description: 'Created websites for clients using HTML, CSS, JavaScript, and WordPress. Managed multiple projects simultaneously while meeting tight deadlines.'
  }*/
];

const educationData: Education[] = [
  {
    id: '1',
    institution: 'Vishnu Institute of Technology',
    degree: 'Computer Science and Engineering (B.Tech)',
    period: '2022 - 2026',
    description: 'Current CGPA: 9.26. Actively involved in technical projects and internships related to data science and machine learning. Consistently maintaining a strong academic record while applying concepts to real-world problems.'
  },
  {
    id: '2',
    institution: 'Sri Chaitanya Junior College',
    degree: 'Intermediate (MPC)',
    period: '2020 - 2022',
    description: 'Percentage: 96.6. Achieved strong academic performance in Mathematics, Physics, and Chemistry with a focus on problem-solving and analytical thinking.'
  },
  {
    id: '3',
    institution: 'Viswabharati E.M. High School',
    degree: 'State Board',
    period: '2019 - 2020',
    description: 'Grade: 10. Built a strong academic foundation with consistent performance across all subjects. Actively participated in school-level activities and developed discipline, teamwork, and communication skills.'
  }
];

const ExperienceSection: React.FC = () => {
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

    const elements = document.querySelectorAll('.timeline-item');
    elements.forEach((el) => observer.observe(el));

    return () => {
      elements.forEach((el) => observer.unobserve(el));
    };
  }, []);

  return (
    <section id="experience" className="py-20 bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center text-gray-800 dark:text-white">
            Experience & <span className="text-blue-600 dark:text-blue-400">Education</span>
          </h2>

          <div className="grid md:grid-cols-2 gap-10">
            {/* Work Experience */}
            <div>
              <div className="flex items-center mb-8">
                <Briefcase className="h-6 w-6 text-blue-600 dark:text-blue-400 mr-3" />
                <h3 className="text-2xl font-bold text-gray-800 dark:text-white">Work Experience</h3>
              </div>

              <div className="relative border-l-2 border-blue-600 dark:border-blue-400 pl-8 ml-3 space-y-10">
                {experienceData.map((item, index) => (
                  <div 
                    key={item.id} 
                    className="timeline-item opacity-0"
                    style={{ animationDelay: `${index * 150}ms` }}
                  >
                    <div className="absolute -left-[10px] mt-1.5 h-4 w-4 rounded-full bg-blue-600 dark:bg-blue-400"></div>
                    <div className="bg-white dark:bg-gray-800 p-5 rounded-lg shadow-md">
                      <span className="inline-block px-3 py-1 text-xs font-medium bg-blue-100 dark:bg-blue-900 text-blue-600 dark:text-blue-300 rounded-full mb-2">
                        {item.period}
                      </span>
                      <h4 className="text-lg font-bold text-gray-800 dark:text-white mb-1">
                        {item.position}
                      </h4>
                      <p className="text-blue-600 dark:text-blue-400 font-medium mb-3">
                        {item.company}
                      </p>
                      <p className="text-gray-600 dark:text-gray-300">
                        {item.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Education */}
            <div>
              <div className="flex items-center mb-8">
                <GraduationCap className="h-6 w-6 text-blue-600 dark:text-blue-400 mr-3" />
                <h3 className="text-2xl font-bold text-gray-800 dark:text-white">Education</h3>
              </div>

              <div className="relative border-l-2 border-blue-600 dark:border-blue-400 pl-8 ml-3 space-y-10">
                {educationData.map((item, index) => (
                  <div 
                    key={item.id} 
                    className="timeline-item opacity-0"
                    style={{ animationDelay: `${index * 150}ms` }}
                  >
                    <div className="absolute -left-[10px] mt-1.5 h-4 w-4 rounded-full bg-blue-600 dark:bg-blue-400"></div>
                    <div className="bg-white dark:bg-gray-800 p-5 rounded-lg shadow-md">
                      <span className="inline-block px-3 py-1 text-xs font-medium bg-blue-100 dark:bg-blue-900 text-blue-600 dark:text-blue-300 rounded-full mb-2">
                        {item.period}
                      </span>
                      <h4 className="text-lg font-bold text-gray-800 dark:text-white mb-1">
                        {item.degree}
                      </h4>
                      <p className="text-blue-600 dark:text-blue-400 font-medium mb-3">
                        {item.institution}
                      </p>
                      {item.description && (
                        <p className="text-gray-600 dark:text-gray-300">
                          {item.description}
                        </p>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
