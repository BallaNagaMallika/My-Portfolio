import React, { useState } from 'react';
import { 
  Database, 
  BarChart, 
  Code2, 
  Cpu,
  PenTool as Tool 
} from 'lucide-react';
import { Skill } from '../types';

const skillsData: Skill[] = [
  // Data Analytics & Visualization
  { name: 'Excel', icon: 'BarChart', category: 'analytics' },
  { name: 'SQL', icon: 'Database', category: 'analytics' },
  { name: 'Tableau', icon: 'BarChart', category: 'analytics' },
  { name: 'Power BI', icon: 'BarChart', category: 'analytics' },
  
  // Web Development
  { name: 'HTML', icon: 'Code2', category: 'web' },
  { name: 'CSS', icon: 'Code2', category: 'web' },
  { name: 'JavaScript', icon: 'Code2', category: 'web' },
  { name: 'Node.js', icon: 'Code2', category: 'web' },
  { name: 'Express', icon: 'Code2', category: 'web' },
  { name: 'Firestore', icon: 'Database', category: 'web' },
  
  // Programming & Tools
  { name: 'Python', icon: 'Code2', category: 'programming' },
  { name: 'Java', icon: 'Code2', category: 'programming' },
  { name: 'C', icon: 'Code2', category: 'programming' },
  { name: 'Git', icon: 'Tool', category: 'programming' },
  { name: 'VS Code', icon: 'Tool', category: 'programming' },
  { name: 'Arduino IDE', icon: 'Cpu', category: 'programming' },
  
  // Technical Expertise
  { name: 'Machine Learning', icon: 'Cpu', category: 'technical' },
  { name: '3D Modelling (Blender)', icon: 'Tool', category: 'technical' }
];

const categories = [
  { id: 'analytics', label: 'Data Analytics & Visualization', icon: BarChart },
  { id: 'web', label: 'Web Development', icon: Code2 },
  { id: 'programming', label: 'Programming & Tools', icon: Tool },
  { id: 'technical', label: 'Technical Expertise', icon: Cpu }
];

const Skills: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState('analytics');

  const getSkillsByCategory = (category: string) => {
    return skillsData.filter((skill) => skill.category === category);
  };

  return (
    <section id="skills" className="py-20 bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center text-gray-800 dark:text-white">
            My <span className="text-blue-600 dark:text-blue-400">Skills</span>
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-12">
            {categories.map((category) => {
              const Icon = category.icon;
              return (
                <button
                  key={category.id}
                  onClick={() => setActiveCategory(category.id)}
                  className={`p-4 rounded-xl transition-all duration-300 ${
                    activeCategory === category.id
                      ? 'bg-blue-600 text-white shadow-lg scale-105'
                      : 'bg-white dark:bg-gray-800 text-gray-600 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-700'
                  }`}
                >
                  <div className="flex flex-col items-center text-center space-y-2">
                    <Icon className="h-6 w-6" />
                    <span className="font-medium">{category.label}</span>
                  </div>
                </button>
              );
            })}
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {getSkillsByCategory(activeCategory).map((skill) => (
              <div
                key={skill.name}
                className="bg-white dark:bg-gray-800 p-4 rounded-xl shadow-sm hover:shadow-md transition-shadow"
              >
                <div className="text-center">
                  <h3 className="font-medium text-gray-800 dark:text-white">
                    {skill.name}
                  </h3>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;