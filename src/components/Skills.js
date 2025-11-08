import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { 
  FaReact, 
  FaNodeJs, 
  FaDatabase, 
  FaGit,
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaPython,
  FaJava,
  FaFigma,
  FaServer,
  FaMobile,
  FaShieldAlt,
  FaRocket,
  FaGlobe,
  FaCode
} from 'react-icons/fa';
import { 
  SiMongodb, 
  SiExpress, 
  SiTailwindcss, 
  SiNextdotjs,
  SiFirebase
} from 'react-icons/si';

const Skills = () => {
  const [activeCategory, setActiveCategory] = useState('frontend');
  const [ref, inView] = useInView({
    threshold: 0.3,
    triggerOnce: true,
  });

  const skillCategories = {
    frontend: {
      title: 'Frontend Development',
      icon: FaReact,
      skills: [
        { name: 'React.js', icon: FaReact, level: 85, color: 'from-blue-500 to-cyan-500' },
        { name: 'HTML5', icon: FaHtml5, level: 90, color: 'from-orange-500 to-orange-600' },
        { name: 'CSS3', icon: FaCss3Alt, level: 85, color: 'from-blue-500 to-blue-600' },
        { name: 'JavaScript (ES6+)', icon: FaJs, level: 88, color: 'from-yellow-400 to-yellow-500' },
        { name: 'Tailwind CSS', icon: SiTailwindcss, level: 80, color: 'from-cyan-500 to-blue-500' },
        { name: 'Next.js', icon: SiNextdotjs, level: 60, color: 'from-gray-500 to-gray-600' },
        { name: 'Responsive Design', icon: FaMobile, level: 82, color: 'from-green-500 to-green-600' },
        { name: 'Figma', icon: FaFigma, level: 55, color: 'from-purple-500 to-purple-600' },
      ]
    },
    backend: {
      title: 'Backend Development',
      icon: FaServer,
      skills: [
        { name: 'Node.js', icon: FaNodeJs, level: 82, color: 'from-green-500 to-green-600' },
        { name: 'Express.js', icon: SiExpress, level: 80, color: 'from-gray-600 to-gray-700' },
        { name: 'REST APIs', icon: FaServer, level: 85, color: 'from-blue-500 to-blue-600' },
        { name: 'JWT Authentication', icon: FaShieldAlt, level: 80, color: 'from-red-500 to-red-600' },
        { name: 'Socket.IO', icon: FaServer, level: 75, color: 'from-purple-500 to-purple-600' },
        { name: 'Real-time Systems', icon: FaRocket, level: 78, color: 'from-indigo-500 to-indigo-600' },
      ]
    },
    database: {
      title: 'Database & Tools',
      icon: FaDatabase,
      skills: [
        { name: 'MongoDB', icon: SiMongodb, level: 80, color: 'from-green-500 to-green-600' },
        { name: 'Firebase', icon: SiFirebase, level: 75, color: 'from-yellow-500 to-orange-500' },
        { name: 'Git', icon: FaGit, level: 85, color: 'from-orange-500 to-red-500' },
        { name: 'GitHub', icon: FaGit, level: 82, color: 'from-gray-800 to-gray-900' },
        { name: 'Postman', icon: FaServer, level: 80, color: 'from-orange-500 to-orange-600' },
        { name: 'Geo-location APIs', icon: FaGlobe, level: 75, color: 'from-blue-500 to-blue-600' },
      ]
    },
    languages: {
      title: 'Programming Languages',
      icon: FaCode,
      skills: [
        { name: 'JavaScript', icon: FaJs, level: 88, color: 'from-yellow-400 to-yellow-500' },
        { name: 'Core Java', icon: FaJava, level: 70, color: 'from-red-500 to-red-600' },
        { name: 'C', icon: FaCode, level: 65, color: 'from-blue-500 to-blue-600' },
        { name: 'Python', icon: FaPython, level: 55, color: 'from-blue-500 to-yellow-500' },
      ]
    }
  };

  const categories = Object.keys(skillCategories);

  return (
    <section className="section-padding relative">
      <div className="container-custom">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Technical <span className="gradient-text">Skills</span>
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            A comprehensive toolkit of modern technologies and frameworks that enable me to build robust, scalable applications.
          </p>
        </motion.div>

        {/* Category Tabs */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="flex flex-wrap justify-center gap-4 mb-12"
        >
          {categories.map((category) => (
            <motion.button
              key={category}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setActiveCategory(category)}
              className={`flex items-center space-x-2 px-6 py-3 rounded-lg transition-all duration-300 ${
                activeCategory === category
                  ? 'bg-gradient-to-r from-primary-500 to-secondary-500 text-white shadow-lg'
                  : 'glass-effect text-gray-300 hover:text-white hover:bg-white/10'
              }`}
            >
              {React.createElement(skillCategories[category].icon, { size: 20 })}
              <span className="font-semibold">{skillCategories[category].title}</span>
            </motion.button>
          ))}
        </motion.div>

        {/* Skills Grid */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {skillCategories[activeCategory].skills.map((skill, index) => (
            <motion.div
              key={skill.name}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={inView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.5, delay: 0.6 + index * 0.1 }}
              className="skill-card group"
            >
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center space-x-3">
                  <div className={`w-12 h-12 rounded-lg bg-gradient-to-r ${skill.color} flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                    {React.createElement(skill.icon, { className: "text-white text-xl" })}
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-white">{skill.name}</h3>
                    <p className="text-sm text-gray-400">
                      {skill.level >= 85 ? 'Advanced Level' : 
                       skill.level >= 70 ? 'Intermediate Level' : 
                       'Beginner Level'}
                    </p>
                  </div>
                </div>
                <span className="text-2xl font-bold gradient-text">{skill.level}%</span>
              </div>
              
              {/* Progress Bar */}
              <div className="w-full bg-gray-700 rounded-full h-2 mb-4">
                <motion.div
                  initial={{ width: 0 }}
                  animate={inView ? { width: `${skill.level}%` } : {}}
                  transition={{ duration: 1, delay: 0.8 + index * 0.1 }}
                  className={`h-2 rounded-full bg-gradient-to-r ${skill.color} shadow-lg`}
                />
              </div>
              
              {/* Skill Description */}
              <div className="text-sm text-gray-400">
                {skill.level >= 90 && 'Expert level proficiency'}
                {skill.level >= 80 && skill.level < 90 && 'Advanced proficiency'}
                {skill.level >= 70 && skill.level < 80 && 'Intermediate proficiency'}
                {skill.level < 70 && 'Basic proficiency'}
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Additional Skills */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 1 }}
          className="mt-16 text-center"
        >
          <h3 className="text-2xl font-bold mb-8">
            Additional <span className="gradient-text">Expertise</span>
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
            {[
              'Data Structures & Algorithms', 'Agile Development', 'Problem Solving', 'System Design', 
              'API Integration', 'Real-time Applications', 'Startup Experience', 'Team Leadership',
              'Project Management', 'Code Review', 'Performance Optimization', 'Responsive Design'
            ].map((skill, index) => (
              <motion.div
                key={skill}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={inView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.3, delay: 1.2 + index * 0.05 }}
                className="glass-effect rounded-lg p-3 text-center hover:bg-white/10 transition-all duration-300"
              >
                <span className="text-sm text-gray-300">{skill}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
