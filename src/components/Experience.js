import React, { useRef, useEffect } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FaCalendarAlt, FaMapMarkerAlt, FaRocket, FaMobile, FaBuilding, FaLaptopCode, FaLightbulb, FaGraduationCap, FaAward, FaCog, FaUsers, FaChartLine, FaShieldAlt, FaDatabase, FaGlobe } from 'react-icons/fa';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const experienceData = [
  {
    id: 1,
    title: 'Software Developer Intern',
    company: 'Zegnite',
    location: 'Remote',
    period: 'Jun 2025 - Aug 2025',
    type: 'Remote',
    logo: FaBuilding,
         description: 'Leading development of an educational platform using MERN stack. Built scalable backend APIs, real-time features, and responsive interfaces.',
              achievements: [
       'Built RESTful APIs handling 1000+ concurrent users',
       'Implemented real-time chat system with Socket.IO',
       'Designed responsive React interface improving engagement by 45%'
     ],
    color: 'from-blue-500 to-cyan-500',
    gradient: 'from-blue-500/20 to-cyan-500/20',
    icon: FaLaptopCode,
  },
  {
    id: 2,
    title: 'Web Development Intern',
    company: 'StarkTech Ventures Pvt. Ltd.',
    location: 'Islampur, Maharashtra',
    period: 'Jan 2025 - Mar 2025',
    type: 'Remote',
    logo: FaRocket,
         description: 'Developed solutions for agricultural platform with geo-location services and product management systems.',
              achievements: [
       'Built geo-location module with camera integration for product uploads',
       'Developed product management interface for farmer profile',
     ],
    color: 'from-purple-500 to-pink-500',
    gradient: 'from-purple-500/20 to-pink-500/20',
    icon: FaLaptopCode,
  }
];

const educationData = [
  {
    id: 1,
    degree: 'Bachelor of Technology in Computer Science',
    institution: 'Rajarambapu Institute of Technology',
    period: '2022 - 2026',
    location: 'Sangli, Maharashtra',
    gpa: '8.8/10',
         description: 'Computer Science education with focus on software engineering, algorithms, and modern web technologies.',
                                achievements: [
         'Maintained 8.8/10 CGPA',
         'Completed 250+ DSA problems on LeetCode and HackerRank',
         'Participated in 5+ hackathons with 2 finalist positions'
       ],
    icon: FaGraduationCap,
    color: 'from-green-500 to-emerald-500'
  },
  {
    id: 2,
    degree: '12th Science',
    institution: 'VS Bhate JR College Sangli',
    period: '2020 - 2022',
    location: 'Sangli, Maharashtra',
    gpa: '76.83%',
    description: 'Science stream with focus on Mathematics and Physics.',
    achievements: [
      'Scored 76.83% in 12th Science',
    ],
    icon: FaGraduationCap,
    color: 'from-blue-500 to-cyan-500'
  },
  {
    id: 3,
    degree: '10th Standard',
    institution: 'R.P.Patil Vidyalay Kupwad',
    period: '2019 - 2020',
    location: 'Kupwad, Maharashtra',
    gpa: '96.8%',
    description: 'Excellent academic performance with strong foundation in core subjects.',
    achievements: [
      'Outstanding performance with 96.8%',
      'Excellent academic record'
    ],
    icon: FaGraduationCap,
    color: 'from-purple-500 to-pink-500'
  }
];

const skills = [
  { 
    category: 'Technical Skills',
    items: ['MERN Stack Development', 'RESTful API Design', 'Real-time Systems', 'Authentication'],
    description: 'Modern web development with scalable architecture'
  },
  { 
    category: 'Problem Solving', 
    items: ['Data Structures & Algorithms', 'System Design', 'Performance Optimization', 'Debugging'],
    description: 'Strong analytical skills with 250+ DSA problems solved'
  },
  { 
    category: 'Learning & Exploration', 
    items: ['Continuous Learning', 'Technology Exploration', 'Innovation Mindset', 'Adaptability'],
    description: 'Passionate about exploring new technologies'
  },
  { 
    category: 'Leadership & Soft Skills', 
    items: ['Team Collaboration', 'Agile Methodologies', 'Project Management', 'Communication'],
    description: 'Proven leadership as startup co-founder and E-Cell coordinator'
  }
];


const leadershipData = [
  {
    id: 1,
    title: 'Marketing Coordinator',
    organization: 'E-Cell RIT',
    period: 'Dec 2023 - Oct 2024',
    description: 'Led marketing initiatives and coordinated events for the Entrepreneurship Cell.',
    achievements: [
      'Managed marketing campaigns for E-Cell events',
      'Coordinated with multiple stakeholders',
      'Enhanced brand visibility and student engagement'
    ],
    icon: FaUsers,
    color: 'from-green-500 to-emerald-500'
  }
];

// Animated Timeline Component
const TimelineItem = ({ experience, index, isInView }) => {
  const [ref, inView] = useInView({
    threshold: 0.3,
    triggerOnce: true,
  });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, x: index % 2 === 0 ? -100 : 100 }}
      animate={inView ? { opacity: 1, x: 0 } : {}}
      transition={{ duration: 0.8, delay: index * 0.2 }}
      className={`relative flex items-center ${index % 2 === 0 ? 'justify-start' : 'justify-end'} mb-16`}
    >
      {/* Timeline Line */}
      <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-primary-500 to-secondary-500" />
      
      {/* Timeline Dot */}
      <div className="absolute left-1/2 transform -translate-x-1/2 w-6 h-6 bg-gradient-to-r from-primary-500 to-secondary-500 rounded-full border-4 border-gray-900 z-10" />
      
      {/* Content Card */}
      <motion.div
        className={`w-full max-w-lg ${index % 2 === 0 ? 'mr-auto pr-8' : 'ml-auto pl-8'}`}
        whileHover={{ scale: 1.02, y: -5 }}
        transition={{ type: 'spring', stiffness: 300 }}
      >
        <div className={`relative p-8 rounded-2xl bg-gradient-to-br ${experience.gradient} backdrop-blur-sm border border-white/10 hover:border-white/20 transition-all duration-300 group`}>
          {/* Glow Effect */}
          <div className={`absolute inset-0 bg-gradient-to-r ${experience.color} rounded-2xl opacity-0 group-hover:opacity-20 transition-opacity duration-300 blur-xl`} />
          
          {/* Header */}
          <div className="relative z-10">
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center space-x-3">
                <div className={`w-12 h-12 rounded-xl bg-gradient-to-r ${experience.color} flex items-center justify-center`}>
                  <experience.icon className="text-white text-xl" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white">{experience.title}</h3>
                  <p className="text-primary-400 font-semibold">{experience.company}</p>
                </div>
              </div>
              <div className="text-right">
                <span className="inline-block px-3 py-1 bg-primary-500/20 text-primary-300 text-sm rounded-full border border-primary-500/30">
                  {experience.type}
                </span>
              </div>
            </div>

            {/* Details */}
            <div className="flex items-center space-x-4 mb-4 text-sm text-gray-400">
              <div className="flex items-center space-x-1">
                <FaCalendarAlt className="text-primary-400" />
                <span>{experience.period}</span>
              </div>
              <div className="flex items-center space-x-1">
                <FaMapMarkerAlt className="text-primary-400" />
                <span>{experience.location}</span>
              </div>
            </div>

            {/* Description */}
            <p className="text-gray-300 mb-6 leading-relaxed">{experience.description}</p>

            

            {/* Achievements */}
            <div className="mb-6">
              <h4 className="text-lg font-semibold text-white mb-3 flex items-center space-x-2">
                <FaLightbulb className="text-yellow-400" />
                <span>Key Achievements</span>
              </h4>
              <ul className="space-y-2">
                {experience.achievements.map((achievement, idx) => (
                  <motion.li
                    key={idx}
                    initial={{ opacity: 0, x: -20 }}
                    animate={inView ? { opacity: 1, x: 0 } : {}}
                    transition={{ delay: 0.5 + idx * 0.1 }}
                    className="flex items-start space-x-2 text-gray-300"
                  >
                    <div className="w-2 h-2 bg-primary-400 rounded-full mt-2 flex-shrink-0" />
                    <span className="text-sm">{achievement}</span>
                  </motion.li>
                ))}
              </ul>
            </div>


          </div>
        </div>
      </motion.div>
    </motion.div>
  );
};

// Education Component
const EducationCard = ({ education, isInView }) => {
  const [ref, inView] = useInView({
    threshold: 0.3,
    triggerOnce: true,
  });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.8 }}
      className="group"
    >
      <div className="p-8 rounded-2xl bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-sm border border-white/10 hover:border-primary-500/30 transition-all duration-300">
        <div className="flex items-center space-x-4 mb-6">
          <div className={`w-16 h-16 rounded-xl bg-gradient-to-r ${education.color} flex items-center justify-center`}>
            <education.icon className="text-white text-2xl" />
          </div>
          <div>
            <h3 className="text-2xl font-bold text-white">{education.degree}</h3>
            <p className="text-primary-400 font-semibold">{education.institution}</p>
            <div className="flex items-center space-x-4 mt-2 text-sm text-gray-400">
              <div className="flex items-center space-x-1">
                <FaCalendarAlt className="text-primary-400" />
                <span>{education.period}</span>
              </div>
              <div className="flex items-center space-x-1">
                <FaMapMarkerAlt className="text-primary-400" />
                <span>{education.location}</span>
              </div>
              <div className="flex items-center space-x-1">
                <FaAward className="text-yellow-400" />
                <span>CGPA: {education.gpa}</span>
              </div>
            </div>
          </div>
        </div>

        <p className="text-gray-300 mb-6 leading-relaxed">{education.description}</p>
      </div>
    </motion.div>
  );
};
// Leadership Component
const LeadershipCard = ({ leadership, isInView }) => {
  const [ref, inView] = useInView({
    threshold: 0.3,
    triggerOnce: true,
  });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.8 }}
      className="group"
    >
      <div className="p-8 rounded-2xl bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-sm border border-white/10 hover:border-primary-500/30 transition-all duration-300">
        <div className="flex items-center space-x-4 mb-6">
          <div className={`w-16 h-16 rounded-xl bg-gradient-to-r ${leadership.color} flex items-center justify-center`}>
            <leadership.icon className="text-white text-2xl" />
          </div>
          <div>
            <h3 className="text-2xl font-bold text-white">{leadership.title}</h3>
            <p className="text-primary-400 font-semibold">{leadership.organization}</p>
            <div className="flex items-center space-x-4 mt-2 text-sm text-gray-400">
              <div className="flex items-center space-x-1">
                <FaCalendarAlt className="text-primary-400" />
                <span>{leadership.period}</span>
              </div>
            </div>
          </div>
        </div>

        <p className="text-gray-300 mb-6 leading-relaxed">{leadership.description}</p>

        <div className="space-y-2">
          {leadership.achievements.map((achievement, idx) => (
            <div key={idx} className="flex items-start space-x-2 text-gray-300">
              <div className="w-2 h-2 bg-primary-400 rounded-full mt-2 flex-shrink-0" />
              <span className="text-sm">{achievement}</span>
            </div>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

// Skills Grid Component
const SkillsGrid = ({ skills, isInView }) => {
  return (
    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
      {skills.map((skill, index) => (
        <motion.div
          key={skill.category}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: index * 0.2 }}
          className="group"
        >
          <div className="p-6 rounded-2xl bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-sm border border-white/10 hover:border-primary-500/30 transition-all duration-300">
            <h3 className="text-xl font-bold text-white mb-4 flex items-center space-x-2">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-r from-primary-500 to-secondary-500 flex items-center justify-center">
                <FaCog className="text-white text-sm" />
              </div>
              <span>{skill.category}</span>
            </h3>
            <p className="text-gray-400 text-sm mb-4">{skill.description}</p>
            <div className="space-y-2">
              {skill.items.map((item, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, x: -20 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ delay: 0.3 + idx * 0.1 }}
                  className="flex items-center space-x-2 text-gray-300 hover:text-white transition-colors"
                >
                  <div className="w-1.5 h-1.5 bg-primary-400 rounded-full" />
                  <span className="text-sm">{item}</span>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      ))}
    </div>
  );
};



const Experience = () => {
  const containerRef = useRef();
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });





  useEffect(() => {
    // GSAP Scroll Animations
    gsap.fromTo('.experience-title',
      { y: 100, opacity: 0 },
      { y: 0, opacity: 1, duration: 1, ease: 'power3.out', scrollTrigger: { trigger: '.experience-title', start: 'top 80%' } }
    );

    gsap.fromTo('.experience-description',
      { y: 50, opacity: 0 },
      { y: 0, opacity: 1, duration: 0.8, ease: 'power2.out', scrollTrigger: { trigger: '.experience-description', start: 'top 80%' } }
    );

    // Parallax effect for background elements
    gsap.to('.parallax-bg', {
      y: -100,
      scrollTrigger: {
        trigger: containerRef.current,
        start: 'top bottom',
        end: 'bottom top',
        scrub: true,
      },
    });
  }, []);

  return (
    <section ref={containerRef} className="section-padding relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, rgba(59, 130, 246, 0.3) 1px, transparent 0)`,
          backgroundSize: '50px 50px'
        }} />
      </div>

      <div className="container-custom relative z-10">
        {/* Header */}
        <motion.div
          ref={ref}
          className="text-center mb-20"
        >
          <motion.h2
            className="experience-title text-4xl md:text-6xl font-bold mb-6"
            initial={{ opacity: 0, y: 50 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
          >
            Professional <span className="gradient-text">Experience</span>
          </motion.h2>
          <motion.p
            className="experience-description text-xl text-gray-400 max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            My journey as a tech explorer and continuous learner through internships and hands-on projects, 
            building real-world applications and gaining valuable industry experience while constantly 
            exploring new technologies and methodologies.
          </motion.p>
        </motion.div>

        {/* Timeline */}
        <div className="relative mb-20">
          <div className="relative">
            {experienceData.map((experience, index) => (
              <TimelineItem
                key={experience.id}
                experience={experience}
                index={index}
                isInView={inView}
              />
            ))}
          </div>
        </div>

        {/* Education Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="mb-20"
        >
          <h3 className="text-3xl font-bold text-center mb-12">
            <span className="gradient-text">Education</span> & Academic Excellence
          </h3>
          <div className="max-w-4xl mx-auto">
            {educationData.map((education) => (
              <EducationCard key={education.id} education={education} isInView={inView} />
            ))}
          </div>
        </motion.div>

        {/* Leadership Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="mb-20"
        >
          <h3 className="text-3xl font-bold text-center mb-12">
            <span className="gradient-text">Leadership</span> Experience
          </h3>
          <div className="max-w-4xl mx-auto">
            {leadershipData.map((leadership) => (
              <LeadershipCard key={leadership.id} leadership={leadership} isInView={inView} />
            ))}
          </div>
        </motion.div>

        {/* Skills Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mb-20"
        >
          <h3 className="text-3xl font-bold text-center mb-12">
            Core <span className="gradient-text">Competencies</span>
          </h3>
          <SkillsGrid skills={skills} isInView={inView} />
        </motion.div>


      </div>

      {/* Custom CSS for animations */}
      <style jsx>{`
        .gradient-text {
          background: linear-gradient(135deg, #3b82f6, #8b5cf6, #06b6d4);
          background-size: 200% 200%;
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
          animation: gradient 3s ease infinite;
        }
        
        @keyframes gradient {
          0%, 100% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
        }
      `}</style>
    </section>
  );
};

export default Experience;
