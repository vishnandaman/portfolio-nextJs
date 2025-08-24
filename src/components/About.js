import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { 
  FaCode, 
  FaUsers, 
  FaClock,
  FaTrophy
} from 'react-icons/fa';

const About = () => {
  const [ref, inView] = useInView({
    threshold: 0.3,
    triggerOnce: true,
  });

  const stats = [
    { icon: FaCode, number: '250+', label: 'DSA Problems', color: 'text-primary-400' },
    { icon: FaUsers, number: '2', label: 'Internships', color: 'text-secondary-400' },
    { icon: FaClock, number: '8.8', label: 'CGPA', color: 'text-primary-400' },
    { icon: FaTrophy, number: '3+', label: 'Projects', color: 'text-secondary-400' },
  ];

  return (
    <section className="section-padding relative">
      <div className="container-custom">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            About <span className="gradient-text">Me</span>
          </h2>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Story */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="space-y-6">
              <h3 className="text-3xl font-bold mb-4">
                Hi, I'm <span className="gradient-text">Aman</span>
              </h3>
              
              <div className="space-y-4 text-gray-300">
                <p>
                  I'm a Full Stack Developer who loves building things that work. Currently studying Computer Science 
                  at Rajarambapu Institute of Technology with an 8.8 CGPA.
                </p>
                
                <p>
                  I've built real-time apps, solved 250+ coding problems, and co-founded a startup. 
                  I enjoy turning complex problems into simple, beautiful solutions.
                </p>
                
                <p>
                  When I'm not coding, you'll find me exploring new technologies or contributing to open source projects.
                </p>
              </div>
            </div>
          </motion.div>

          {/* Right Column - Stats */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            {/* Stats Grid */}
            <div className="grid grid-cols-2 gap-6">
              {stats.map((stat, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={inView ? { opacity: 1, scale: 1 } : {}}
                  transition={{ duration: 0.5, delay: 0.6 + index * 0.1 }}
                  className="skill-card text-center"
                >
                  <div className={`text-4xl mb-3 ${stat.color}`}>
                    <stat.icon />
                  </div>
                  <div className="text-3xl font-bold text-white mb-2">
                    {stat.number}
                  </div>
                  <div className="text-gray-400 text-sm">
                    {stat.label}
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
