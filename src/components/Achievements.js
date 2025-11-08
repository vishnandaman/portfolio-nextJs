import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { 
  FaTrophy, 
  FaCertificate, 
  FaRocket,
  FaUsers
} from 'react-icons/fa';

const Achievements = () => {
  const [ref, inView] = useInView({
    threshold: 0.3,
    triggerOnce: true,
  });

  const achievements = [
    {
      id: 1,
      title: 'RIT Hackathon Runner-Up',
      organization: 'AnxiPredoMeter Project',
      description: 'Second place for developing mental health prediction system and monitoring system.',
      icon: FaTrophy,
      category: 'Hackathon',
      date: '2024',
      color: 'from-yellow-500 to-orange-500',
      impact: 'Runner-Up Award'
    },
    {
      id: 2,
      title: 'SmartIDEAthon 2024 Finalist',
      organization: 'Top 100 from 12,500+ participants',
      description: 'National-level Ideathon showcasing waste management solution.',
      icon: FaRocket,
      category: 'Ideathon',
      date: '2024',
      color: 'from-blue-500 to-purple-500',
      impact: 'National Recognition'
    },
    {
      id: 3,
      title: 'Venture Vault Finalist',
      organization: 'CGC Punjab Startup Competition',
      description: 'Reached finals demonstrating entrepreneurial skills.',
      icon: FaCertificate,
      category: 'Startup',
      date: '2024',
      color: 'from-orange-500 to-red-500',
      impact: 'Startup Recognition'
    },
    {
      id: 4,
      title: '250+ DSA Problems Solved',
      organization: 'LeetCode, GeeksforGeeks',
      description: 'Strong problem-solving abilities across multiple platforms.',
      icon: FaUsers,
      category: 'Technical',
      date: 'Ongoing',
      color: 'from-green-500 to-teal-500',
      impact: 'Problem Solving Excellence'
    }
  ];



  const certifications = [
    {
      name: 'Frontend Developer (React) Certificate',
      issuer: 'HackerRank',
      date: '2023-2024',
      icon: FaCertificate,
      color: 'from-orange-500 to-red-500',
      details: 'Certification ID: aefe850dcc1e'
    },
    {
      name: 'MERN Stack Certification',
      issuer: 'Blend Vidya Edtech',
      date: 'Jan 2025',
      icon: FaCertificate,
      color: 'from-blue-500 to-green-500',
      details: 'Comprehensive MERN stack training'
    }
  ];

  const stats = [
    { icon: FaTrophy, label: 'Competitions', value: '3' },
    { icon: FaRocket, label: 'Hackathons', value: '3' },
    { icon: FaCertificate, label: 'Certifications', value: '2' },
    { icon: FaUsers, label: 'DSA Problems', value: '250+' }
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
            Achievements & <span className="gradient-text">Recognition</span>
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Celebrating milestones, awards, and recognition for excellence in technology and innovation.
          </p>
        </motion.div>

        {/* Stats Overview */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12"
        >
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={inView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.5, delay: 0.4 + index * 0.1 }}
              className="skill-card text-center"
            >
              <div className="text-4xl mb-3 text-primary-400">
                <stat.icon />
              </div>
              <div className="text-3xl font-bold text-white mb-2">
                {stat.value}
              </div>
              <div className="text-gray-400 text-sm">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </motion.div>

        <div className="max-w-4xl mx-auto">
          {/* Main Achievements */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <h3 className="text-2xl font-bold mb-6 text-center">
              Notable <span className="gradient-text">Achievements</span>
            </h3>
            
            <div className="space-y-4">
              {achievements.map((achievement, index) => (
                <motion.div
                  key={achievement.id}
                  initial={{ opacity: 0, x: -30 }}
                  animate={inView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.6 + index * 0.1 }}
                  className="glass-effect rounded-xl p-4 hover:bg-white/10 transition-all duration-300"
                >
                  <div className="flex items-start space-x-3">
                    <div className={`w-10 h-10 rounded-lg bg-gradient-to-r ${achievement.color} flex items-center justify-center flex-shrink-0`}>
                      <achievement.icon className="text-white text-lg" />
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center justify-between mb-1">
                        <h4 className="text-base font-semibold text-white">{achievement.title}</h4>
                        <span className="px-2 py-1 bg-primary-500/20 text-primary-300 text-xs rounded-full">
                          {achievement.category}
                        </span>
                      </div>
                      <p className="text-primary-400 font-medium text-sm mb-1">{achievement.organization}</p>
                      <p className="text-gray-400 text-xs mb-2">{achievement.description}</p>
                      <div className="flex items-center justify-between">
                        <span className="text-gray-500 text-xs">{achievement.date}</span>
                        <span className="text-secondary-400 text-xs font-medium">{achievement.impact}</span>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Certifications */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 1 }}
          className="mt-16"
        >
          <h3 className="text-2xl font-bold mb-8 text-center">
            Professional <span className="gradient-text">Certifications</span>
          </h3>
          
          <div className="grid md:grid-cols-2 gap-6">
            {certifications.map((cert, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={inView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.5, delay: 1.2 + index * 0.1 }}
                className="skill-card text-center group"
              >
                <div className={`w-16 h-16 rounded-full bg-gradient-to-r ${cert.color} flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300`}>
                  <cert.icon className="text-white text-2xl" />
                </div>
                <h4 className="text-lg font-semibold text-white mb-2">{cert.name}</h4>
                <p className="text-primary-400 text-sm mb-1">{cert.issuer}</p>
                <p className="text-gray-400 text-sm mb-2">{cert.date}</p>
                <p className="text-gray-500 text-xs">{cert.details}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 1.4 }}
          className="text-center mt-16"
        >
          <div className="glass-effect rounded-2xl p-8 max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold mb-4">
              Ready to <span className="gradient-text">Achieve</span> Together?
            </h3>
            <p className="text-gray-400 mb-6">
              Let's create more success stories and build something amazing together.
            </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="btn-primary"
              onClick={() => document.getElementById('contact').scrollIntoView({ behavior: 'smooth' })}
            >
              Start Collaborating
            </motion.button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Achievements;
