import React, { useState, useEffect } from 'react';
import { ExternalLink, Github } from 'lucide-react';
import { Project } from '../types';
import clv from 'EDA.png';
import netflix from 'Dashboard.png';
import ayush from 'AYUSH1.png';
import ecoaqua from './eco aqua.jpg';
import book from 'book2.png';

const projectsData: Project[] = [
  {
    id: '1',
    title: 'Predictive Analytics CLVP ',
    description: 'Synthesized RFM segmentation on 50,000+ customer records using Python and Pandas, and engineered a Streamlit–Power BI dashboard visualizing KPIs and EDA from 500,000+ sales transactions; empowered data driven marketing strategies and boosted customer retention insight accuracy by 30%. ',
    tags: ['Python', 'Power BI', 'Streamlit', 'scikit-learn'],
    imageUrl: clv,
    link: 'https://customer-analytics-clv-churn-rtupdf4i8vygvvatq5rgap.streamlit.app/',
    githubLink: 'https://github.com/BallaNagaMallika/Customer-Analytics-CLV-Churn',
  },
  {
    id: '2',
    title: 'Netflix Dashboard',
    description: 'Analyzed and visualized a dataset of 1,000+ user records using Power BI, delivering actionable insights on subscription plans, regional engagement, and content preferences with a Netflix-themed UI, showcasing data storytelling and dashboard design expertise. ',
    tags: ['EDA', 'Power BI', 'Pandas', 'NumPy'],
    imageUrl: netflix,
    link: 'https://www.linkedin.com/posts/naga-mallika-balla-13003b27b_netflix-datavisualization-powerbi-activity-7309969320627843072-yhJJ?utm_source=social_share_send&utm_medium=member_desktop_web&rcm=ACoAAEQrrfQBDeLDJ2Ln33C0JgIemERQb4t69ok',
    githubLink: '#',
  },
  {
    id: '3',
    title: 'AYUSH',
    description: 'Textured 5+ high-fidelity 3D plant models using Blender, following real-world botanical references for scientific accuracy.',
    tags: ['Blender', 'Python'],
    imageUrl: ayush,
    link: '#',
    githubLink: 'https://github.com/BallaNagaMallika/AYUSH',
  },
  {
    id: '4',
    title: 'Eco Aqua',
    description: 'Built a real-time water quality monitoring system visualized sensor data and alerts for critical values to ensure public safety.',
    tags: ['Express.js', 'Node.js', 'Firestore'],
    imageUrl: ecoaqua,
    link: '#',
    githubLink: 'https://github.com/BallaNagaMallika/eco-aqua',
  },
  {
    id: '5',
    title: 'Book Rental System',
    description: 'Developed a book rental system using express.js and Firebase, enabling users to search, borrow, and return books seamlessly.',
    tags: ['Express.js', 'Node.js', 'Firestore'],
    imageUrl: book,
    link: '#',
    githubLink: 'https://github.com/BallaNagaMallika/Rent-a-Book-App',
  },
];

const Projects: React.FC = () => {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

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

    const elements = document.querySelectorAll('.project-card');
    elements.forEach((el) => observer.observe(el));

    return () => {
      elements.forEach((el) => observer.unobserve(el));
    };
  }, []);

  const openProjectModal = (project: Project) => {
    setSelectedProject(project);
    document.body.style.overflow = 'hidden';
  };

  const closeProjectModal = () => {
    setSelectedProject(null);
    document.body.style.overflow = 'auto';
  };

  return (
    <section id="projects" className="py-20 bg-white dark:bg-gray-800">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center text-gray-800 dark:text-white">
            My <span className="text-blue-600 dark:text-blue-400">Projects</span>
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {projectsData.map((project, index) => (
              <div
                key={project.id}
                className="project-card bg-gray-50 dark:bg-gray-700 rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 opacity-0"
                style={{ animationDelay: `${index * 150}ms` }}
              >
                <div className="relative h-52 overflow-hidden">
                  <img
                    src={project.imageUrl}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end p-6">
                    <h3 className="text-xl font-bold text-white">{project.title}</h3>
                  </div>
                </div>
                <div className="p-6">
                  <p className="text-gray-600 dark:text-gray-300 mb-4 line-clamp-2">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-3 py-1 bg-gray-200 dark:bg-gray-600 text-gray-700 dark:text-gray-300 rounded-full text-xs"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  <div className="flex justify-between items-center">
                    <button
                      onClick={() => openProjectModal(project)}
                      className="text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300 font-medium"
                    >
                      View Details
                    </button>
                    <div className="flex space-x-3">
                      {project.githubLink && (
                        <a
                          href={project.githubLink}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400"
                        >
                          <Github className="h-5 w-5" />
                        </a>
                      )}
                      {project.link && (
                        <a
                          href={project.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400"
                        >
                          <ExternalLink className="h-5 w-5" />
                        </a>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Project Modal */}
      {selectedProject && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          <div
            className="absolute inset-0 bg-black/70"
            onClick={closeProjectModal}
          ></div>
          <div className="relative bg-white dark:bg-gray-800 rounded-lg max-w-3xl w-full max-h-[90vh] overflow-y-auto">
            <button
              onClick={closeProjectModal}
              className="absolute top-4 right-4 text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
            <div className="relative h-64 md:h-80">
              <img
                src={selectedProject.imageUrl}
                alt={selectedProject.title}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end p-6">
                <h3 className="text-2xl font-bold text-white">
                  {selectedProject.title}
                </h3>
              </div>
            </div>
            <div className="p-6">
              <p className="text-gray-600 dark:text-gray-300 mb-6">
                {selectedProject.description}
              </p>
              <div className="flex flex-wrap gap-2 mb-6">
                {selectedProject.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-3 py-1 bg-gray-200 dark:bg-gray-600 text-gray-700 dark:text-gray-300 rounded-full text-sm"
                  >
                    {tag}
                  </span>
                ))}
              </div>
              <div className="flex space-x-4">
                {selectedProject.link && (
                  <a
                    href={selectedProject.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-md transition-colors"
                  >
                    <ExternalLink className="h-4 w-4 mr-2" />
                    Visit Site
                  </a>
                )}
                {selectedProject.githubLink && (
                  <a
                    href={selectedProject.githubLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center px-4 py-2 border border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-md transition-colors"
                  >
                    <Github className="h-4 w-4 mr-2" />
                    View Code
                  </a>
                )}
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Projects;
