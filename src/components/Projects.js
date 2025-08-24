import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { 
  FaGithub, 
  FaExternalLinkAlt, 
  FaReact, 
  FaNodeJs, 
  FaUsers,
  FaShieldAlt,
  FaGlobe
} from 'react-icons/fa';
import { 
  SiMongodb, 
  SiFirebase,
  SiSocketdotio
} from 'react-icons/si';

const Projects = () => {
  const [activeFilter, setActiveFilter] = useState('all');
  const [ref, inView] = useInView({
    threshold: 0.3,
    triggerOnce: true,
  });

  const filters = [
    { id: 'all', label: 'All Projects' },
    { id: 'fullstack', label: 'Full Stack' },
    { id: 'frontend', label: 'Frontend' },
    { id: 'mobile', label: 'Mobile' },
  ];

  const projects = [
    {
      id: 1,
      title: 'RoadAssist - Real-time Roadside Assistance Platform',
      description: 'A comprehensive MERN stack application that connects vehicle owners with nearby mechanics in real-time during breakdowns. Features geo-location integration, real-time tracking, and secure payment processing.',
      image: '/api/placeholder/600/400',
      category: 'fullstack',
      tech: ['React', 'Node.js', 'MongoDB', 'Socket.IO', 'JWT', 'Geo-location APIs'],
      icons: [FaReact, FaNodeJs, SiMongodb, SiSocketdotio],
      liveUrl: 'https://road-assist-rit.vercel.app/',
      githubUrl: 'https://github.com/vishnandaman/road-assist',
      features: [
        'Real-time mechanic discovery with GPS tracking',
        'SOS alerts and emergency response system',
        'Secure booking and payment integration',
        'Real-time chat and status updates'
      ],
      impact: 'Reduced response time by 60%',
      performance: 'Handles 1000+ concurrent users',
      metrics: {
        users: '500+',
        responseTime: '< 2 minutes',
        uptime: '99.9%',
        rating: '4.8/5'
      },
      challenges: 'Scalable real-time architecture, GPS accuracy optimization',
      solutions: 'Implemented Socket.IO for real-time features, optimized MongoDB queries'
    },
    {
      id: 2,
      title: 'Findr - Campus Lost & Found Management System',
      description: 'A campus-focused item tracking portal with QR code verification system, real-time chat functionality, and trust score algorithm. Built with React and Firebase for scalability.',
      image: '/api/placeholder/600/400',
      category: 'fullstack',
      tech: ['React', 'Firebase', 'QR Code System', 'Real-time Chat', 'Authentication'],
      icons: [FaReact, SiFirebase, FaUsers, FaShieldAlt],
      liveUrl: 'https://findr-platform.vercel.app/',
      githubUrl: 'https://github.com/vishnandaman/Findr-Platform',
      features: [
        'QR code verification and item tracking system',
        'Real-time chat with push notifications',
        'Trust score algorithm for user verification',
        'Campus-wide item recovery network'
      ],
      impact: '90% item recovery rate',
      performance: '500+ items tracked monthly',
      metrics: {
        users: '2000+',
        itemsRecovered: '450+',
        responseTime: '< 1 hour',
        rating: '4.9/5'
      },
      challenges: 'User trust verification, real-time notifications',
      solutions: 'Implemented trust scoring algorithm, Firebase Cloud Messaging'
    },
    {
      id: 3,
      title: 'EcyleHub - E-Waste Recycling Platform',
      description: 'Hackathon finalist application connecting users with e-waste vendors using Google Maps API. Features vendor management, pickup scheduling, and environmental impact tracking.',
      image: '/api/placeholder/600/400',
      category: 'fullstack',
             tech: ['MERN Stack', 'Leaflet Maps', 'Vendor Management', 'Location Services'],
      icons: [FaReact, FaNodeJs, SiMongodb, FaGlobe],
      liveUrl: 'https://aaplisuvidha.vercel.app/',
      githubUrl: 'https://github.com/vishnandaman/ECycleHub',
      features: [
        'Vendor search and discovery with ratings',
        'Pickup scheduling and tracking system',
        'E-waste categorization and pricing',
        'Environmental impact analytics'
      ],
      impact: 'Hackathon Finalist - Top 5',
      performance: '50+ vendors onboarded',
      metrics: {
        users: '300+',
        vendors: '50+',
        eWasteCollected: '2.5 tons',
        rating: '4.7/5'
      },
             challenges: 'Vendor verification, location-based search',
       solutions: 'Leaflet Maps integration, vendor verification system'
    }
  ];

  const filteredProjects = activeFilter === 'all' 
    ? projects 
    : projects.filter(project => project.category === activeFilter);

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
            Featured <span className="gradient-text">Projects</span>
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            A showcase of my journey as a tech explorer and continuous learner, demonstrating technical expertise, 
            problem-solving abilities, and real-world impact through innovative full-stack applications.
          </p>
        </motion.div>

        {/* Filter Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="flex flex-wrap justify-center gap-4 mb-12"
        >
          {filters.map((filter) => (
            <motion.button
              key={filter.id}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setActiveFilter(filter.id)}
              className={`px-6 py-3 rounded-lg transition-all duration-300 ${
                activeFilter === filter.id
                  ? 'bg-gradient-to-r from-primary-500 to-secondary-500 text-white shadow-lg'
                  : 'glass-effect text-gray-300 hover:text-white hover:bg-white/10'
              }`}
            >
              {filter.label}
            </motion.button>
          ))}
        </motion.div>

        {/* Projects Grid */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
                     <AnimatePresence>
            {filteredProjects.map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.8 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="project-card group"
              >
                {/* Project Image */}
                <div className="relative overflow-hidden h-48">
                  <div className="w-full h-full bg-gradient-to-br from-primary-500/20 to-secondary-500/20 flex items-center justify-center">
                    <FaGlobe className="text-6xl text-primary-400/50" />
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  
                  {/* Tech Stack Icons */}
                  <div className="absolute top-4 left-4 flex space-x-2">
                    {project.icons.map((Icon, iconIndex) => (
                      <div
                        key={iconIndex}
                        className="w-8 h-8 glass-effect rounded-full flex items-center justify-center"
                      >
                        <Icon className="text-white text-sm" />
                      </div>
                    ))}
                  </div>

                  {/* Action Buttons */}
                  <div className="absolute top-4 right-4 flex space-x-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <motion.a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                      className="w-8 h-8 glass-effect rounded-full flex items-center justify-center hover:bg-primary-500/20 transition-colors"
                    >
                      <FaExternalLinkAlt className="text-white text-sm" />
                    </motion.a>
                    <motion.a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                      className="w-8 h-8 glass-effect rounded-full flex items-center justify-center hover:bg-primary-500/20 transition-colors"
                    >
                      <FaGithub className="text-white text-sm" />
                    </motion.a>
                  </div>
                </div>

                {/* Project Content */}
                <div className="p-6">
                  <h3 className="text-xl font-bold text-white mb-3 group-hover:gradient-text transition-all duration-300">
                    {project.title}
                  </h3>
                  
                  <p className="text-gray-400 mb-4 line-clamp-3">
                    {project.description}
                  </p>

                  {/* Tech Stack */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tech.map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="px-3 py-1 bg-primary-500/20 text-primary-300 text-xs rounded-full"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* Key Features */}
                  <div className="space-y-2 mb-4">
                    <h4 className="text-sm font-semibold text-white mb-2">Key Features:</h4>
                    {project.features.slice(0, 2).map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-center space-x-2">
                        <div className="w-1.5 h-1.5 bg-primary-400 rounded-full" />
                        <span className="text-sm text-gray-400">{feature}</span>
                      </div>
                    ))}
                  </div>

                  

                  {/* Technical Challenges */}
                  <div className="space-y-2 pt-4 border-t border-gray-700">
                    <h4 className="text-sm font-semibold text-white mb-2">Technical Challenges:</h4>
                    <p className="text-xs text-gray-400 mb-2">{project.challenges}</p>
                    <h4 className="text-sm font-semibold text-white mb-2">Solutions:</h4>
                    <p className="text-xs text-gray-400">{project.solutions}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 1 }}
          className="text-center mt-16"
        >
          <div className="glass-effect rounded-2xl p-8 max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold mb-4">
              Have a <span className="gradient-text">Project</span> in Mind?
            </h3>
            <p className="text-gray-400 mb-6">
              Let's collaborate to bring your ideas to life with cutting-edge technology and exceptional user experiences. 
              Always excited to explore new technologies and learn from every project.
            </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="btn-primary"
              onClick={() => document.getElementById('contact').scrollIntoView({ behavior: 'smooth' })}
            >
              Start a Project
            </motion.button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
