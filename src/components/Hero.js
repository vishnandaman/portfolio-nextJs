import React, { useRef, useEffect, useState, Suspense, useMemo } from 'react';
import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin, FaEnvelope, FaDownload, FaArrowDown, FaCode, FaRocket, FaReact, FaNodeJs, FaDatabase, FaCloud, FaUser } from 'react-icons/fa';
import { SiJavascript, SiMongodb, SiFirebase, SiTailwindcss } from 'react-icons/si';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);



// Gradient Orbs Component
const GradientOrbs = () => {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      <motion.div
        className="absolute top-1/4 left-1/4 w-64 h-64 bg-gradient-to-r from-primary-500/20 to-secondary-500/20 rounded-full blur-3xl"
        animate={{
          x: [0, 100, 0],
          y: [0, -50, 0],
          scale: [1, 1.2, 1],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />
      <motion.div
        className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-gradient-to-r from-secondary-500/20 to-primary-500/20 rounded-full blur-3xl"
        animate={{
          x: [0, -100, 0],
          y: [0, 50, 0],
          scale: [1, 0.8, 1],
        }}
        transition={{
          duration: 25,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />
      <motion.div
        className="absolute top-1/2 left-1/2 w-48 h-48 bg-gradient-to-r from-cyan-500/20 to-blue-500/20 rounded-full blur-3xl"
        animate={{
          x: [0, 80, 0],
          y: [0, 80, 0],
          scale: [1, 1.5, 1],
        }}
        transition={{
          duration: 15,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />
    </div>
  );
};

// Enhanced Three.js Background Component with Cursor Following
const ThreeBackground = () => {
  const canvasRef = useRef();
  const mouseRef = useRef({ x: 0, y: 0 });

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    // Create animated background
    const particles = [];
    const particleCount = 200; // Increased particle count

    // Initialize particles
    for (let i = 0; i < particleCount; i++) {
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        size: Math.random() * 4 + 1, // Larger particles
        speedX: (Math.random() - 0.5) * 3, // Faster movement
        speedY: (Math.random() - 0.5) * 3,
        opacity: Math.random() * 0.8 + 0.2, // More visible
        originalSpeedX: 0,
        originalSpeedY: 0,
        color: Math.random() > 0.5 ? '#3B82F6' : '#8B5CF6' // Blue or purple
      });
    }

    // Store original speeds
    particles.forEach(particle => {
      particle.originalSpeedX = particle.speedX;
      particle.originalSpeedY = particle.speedY;
    });

    // Mouse move handler
    const handleMouseMove = (e) => {
      mouseRef.current.x = e.clientX;
      mouseRef.current.y = e.clientY;
    };

    // Animation loop
    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      // Create gradient background
      const gradient = ctx.createRadialGradient(
        canvas.width / 2, canvas.height / 2, 0,
        canvas.width / 2, canvas.height / 2, canvas.width / 2
      );
      gradient.addColorStop(0, 'rgba(59, 130, 246, 0.15)');
      gradient.addColorStop(0.5, 'rgba(139, 92, 246, 0.08)');
      gradient.addColorStop(1, 'transparent');
      
      ctx.fillStyle = gradient;
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      // Update and draw particles
      particles.forEach(particle => {
        // Calculate distance from mouse
        const dx = mouseRef.current.x - particle.x;
        const dy = mouseRef.current.y - particle.y;
        const distance = Math.sqrt(dx * dx + dy * dy);
        const maxDistance = 250; // Larger area of influence

        if (distance < maxDistance) {
          // Attract particles to cursor
          const force = (maxDistance - distance) / maxDistance;
          const attractionSpeed = 4; // Faster attraction
          
          particle.speedX += (dx / distance) * force * attractionSpeed * 0.15;
          particle.speedY += (dy / distance) * force * attractionSpeed * 0.15;
        } else {
          // Gradually return to original speed
          particle.speedX += (particle.originalSpeedX - particle.speedX) * 0.03;
          particle.speedY += (particle.originalSpeedY - particle.speedY) * 0.03;
        }

        // Limit maximum speed
        const maxSpeed = 5;
        particle.speedX = Math.max(-maxSpeed, Math.min(maxSpeed, particle.speedX));
        particle.speedY = Math.max(-maxSpeed, Math.min(maxSpeed, particle.speedY));

        // Update position
        particle.x += particle.speedX;
        particle.y += particle.speedY;

        // Wrap around edges
        if (particle.x < 0) particle.x = canvas.width;
        if (particle.x > canvas.width) particle.x = 0;
        if (particle.y < 0) particle.y = canvas.height;
        if (particle.y > canvas.height) particle.y = 0;

        // Draw particle with glow effect
        ctx.save();
        ctx.globalAlpha = particle.opacity;
        
        // Glow effect
        const glowGradient = ctx.createRadialGradient(
          particle.x, particle.y, 0,
          particle.x, particle.y, particle.size * 3
        );
        glowGradient.addColorStop(0, particle.color);
        glowGradient.addColorStop(1, 'transparent');
        
        ctx.fillStyle = glowGradient;
        ctx.beginPath();
        ctx.arc(particle.x, particle.y, particle.size * 3, 0, Math.PI * 2);
        ctx.fill();
        
        // Core particle
        ctx.fillStyle = particle.color;
        ctx.beginPath();
        ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2);
        ctx.fill();
        
        ctx.restore();
      });

      // Draw connections between nearby particles
      particles.forEach((particle, i) => {
        particles.slice(i + 1).forEach(otherParticle => {
          const dx = particle.x - otherParticle.x;
          const dy = particle.y - otherParticle.y;
          const distance = Math.sqrt(dx * dx + dy * dy);
          
          if (distance < 100) {
            ctx.save();
            ctx.globalAlpha = (100 - distance) / 100 * 0.3;
            ctx.strokeStyle = '#3B82F6';
            ctx.lineWidth = 1;
            ctx.beginPath();
            ctx.moveTo(particle.x, particle.y);
            ctx.lineTo(otherParticle.x, otherParticle.y);
            ctx.stroke();
            ctx.restore();
          }
        });
      });

      requestAnimationFrame(animate);
    };

    window.addEventListener('mousemove', handleMouseMove);
    animate();

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return <canvas ref={canvasRef} className="absolute inset-0 w-full h-full" />;
};

// Floating Icons Component
const FloatingIcons = () => {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {[...Array(8)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute text-gray-400/20"
          initial={{
            x: Math.random() * window.innerWidth,
            y: Math.random() * window.innerHeight,
            rotate: 0,
          }}
          animate={{
            y: [0, -30, 0],
            rotate: [0, 360],
          }}
          transition={{
            duration: 6 + Math.random() * 4,
            repeat: Infinity,
            delay: Math.random() * 2,
          }}
        >
          <FaCode className="text-2xl" />
        </motion.div>
      ))}
    </div>
  );
};

// Enhanced Animated Text Component with Multiple Titles
const AnimatedText = ({ className, delay = 0 }) => {
  const [displayText, setDisplayText] = useState('');
  const [currentTextIndex, setCurrentTextIndex] = useState(0);
  const [currentCharIndex, setCurrentCharIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  const texts = useMemo(() => [
    'Full Stack Developer',
    'Tech Enthusiast',
    'Learner',
    'Problem Solver'
  ], []);

  useEffect(() => {
    const currentText = texts[currentTextIndex];
    
    if (!isDeleting && currentCharIndex < currentText.length) {
      // Typing
      const timeout = setTimeout(() => {
        setDisplayText(currentText.slice(0, currentCharIndex + 1));
        setCurrentCharIndex(prev => prev + 1);
      }, 100);
      return () => clearTimeout(timeout);
    } else if (!isDeleting && currentCharIndex === currentText.length) {
      // Pause before deleting
      const timeout = setTimeout(() => {
        setIsDeleting(true);
      }, 2000);
      return () => clearTimeout(timeout);
    } else if (isDeleting && currentCharIndex > 0) {
      // Deleting
      const timeout = setTimeout(() => {
        setDisplayText(currentText.slice(0, currentCharIndex - 1));
        setCurrentCharIndex(prev => prev - 1);
      }, 50);
      return () => clearTimeout(timeout);
    } else if (isDeleting && currentCharIndex === 0) {
      // Move to next text
      setIsDeleting(false);
      setCurrentTextIndex(prev => (prev + 1) % texts.length);
    }
  }, [currentCharIndex, isDeleting, currentTextIndex, texts]);

  return (
    <span className={className}>
      {displayText}
      <motion.span
        animate={{ opacity: [1, 0] }}
        transition={{ duration: 0.5, repeat: Infinity }}
        className="inline-block w-1 h-8 bg-primary-500 ml-1"
      />
    </span>
  );
};

const Hero = () => {
  const containerRef = useRef();
  const textRef = useRef();
  const statsRef = useRef();
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });


  const handleDownloadResume = () => {
    window.open('https://drive.google.com/file/d/14lnW4xfVCCgWDEy2ejiHyF1Anv-3CjSQ/view?usp=sharing');
  };

  const handleMouseMove = (e) => {
    const { clientX, clientY } = e;
    const { innerWidth, innerHeight } = window;
    setMousePosition({
      x: (clientX - innerWidth / 2) / innerWidth,
      y: (clientY - innerHeight / 2) / innerHeight,
    });
  };

  useEffect(() => {
    const container = containerRef.current;
    if (container) {
      container.addEventListener('mousemove', handleMouseMove);
      return () => container.removeEventListener('mousemove', handleMouseMove);
    }
  }, []);

  useEffect(() => {
    // GSAP Animations
    const tl = gsap.timeline();

    tl.fromTo('.hero-title', 
      { y: 100, opacity: 0 },
      { y: 0, opacity: 1, duration: 1, ease: 'power3.out' }
    )
    .fromTo('.hero-subtitle',
      { y: 50, opacity: 0 },
      { y: 0, opacity: 1, duration: 0.8, ease: 'power2.out' },
      '-=0.5'
    )
    .fromTo('.hero-stats',
      { scale: 0, opacity: 0 },
      { scale: 1, opacity: 1, duration: 0.6, ease: 'power2.out', stagger: 0.1 },
      '-=0.2'
    )
    .fromTo('.hero-buttons',
      { y: 30, opacity: 0 },
      { y: 0, opacity: 1, duration: 0.8, ease: 'power2.out' },
      '-=0.3'
    )
    .fromTo('.hero-social',
      { y: 20, opacity: 0 },
      { y: 0, opacity: 1, duration: 0.6, ease: 'power2.out', stagger: 0.1 },
      '-=0.2'
    );

    // Parallax effect
    gsap.to('.parallax-bg', {
      y: -100,
      scrollTrigger: {
        trigger: containerRef.current,
        start: 'top top',
        end: 'bottom top',
        scrub: true,
      },
    });
  }, []);

  return (
    <section 
      ref={containerRef}
      className="min-h-screen flex items-center justify-center relative overflow-hidden"
      style={{
        background: `radial-gradient(circle at ${50 + mousePosition.x * 20}% ${50 + mousePosition.y * 20}%, rgba(59, 130, 246, 0.1) 0%, rgba(139, 92, 246, 0.05) 50%, transparent 100%)`
      }}
    >
      {/* Canvas Background */}
      <Suspense fallback={<div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-gray-800 to-black" />}>
        <ThreeBackground />
      </Suspense>

      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-900/80 via-gray-800/70 to-black/90 z-10" />
      
      {/* Gradient Orbs */}
      <GradientOrbs />
      
      {/* Floating Icons */}
      <FloatingIcons />

      {/* Animated Background Pattern */}
      <div className="absolute inset-0 opacity-10 z-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, rgba(59, 130, 246, 0.3) 1px, transparent 0)`,
          backgroundSize: '50px 50px',
          animation: 'move 20s linear infinite'
        }} />
      </div>

             <div className="container-custom relative z-20">
         <div className="text-center max-w-6xl mx-auto pt-16">
          
          {/* Hero Content */}
          <div className="text-center">
              {/* Name and Title */}
              <motion.h1
                ref={textRef}
                className="hero-title text-5xl md:text-7xl font-bold mb-4 leading-tight"
              >
               <span className="text-white">Aman </span>
               <span className="gradient-text bg-gradient-to-r from-primary-500 via-secondary-500 to-primary-500 bg-clip-text text-transparent animate-gradient">
                 Vishwakarma
               </span>
             </motion.h1>

                                 <motion.h2
              className="hero-subtitle text-2xl md:text-3xl text-gray-300 mb-6"
            >
              <AnimatedText 
                className="gradient-text"
                delay={1}
              />
            </motion.h2>



                     {/* Enhanced Stats with 3D Effects */}
           <motion.div
             ref={statsRef}
             className="hero-stats flex flex-wrap justify-center gap-8 mb-8"
           >
            {[
              { number: '250+', label: 'DSA Problems', icon: FaCode, color: 'from-blue-500 to-cyan-500' },
              { number: '8.8', label: 'CGPA', icon: FaRocket, color: 'from-green-500 to-emerald-500' },
              { number: '3+', label: 'Projects', icon: FaCode, color: 'from-purple-500 to-pink-500' },
              { number: '2', label: 'Internships', icon: FaRocket, color: 'from-orange-500 to-red-500' },
            ].map((stat, index) => (
              <motion.div
                key={index}
                className="hero-stat text-center group perspective-1000"
                whileHover={{ 
                  scale: 1.05, 
                  y: -10,
                  rotateY: 5,
                  rotateX: 5
                }}
                initial={{ opacity: 0, y: 50, rotateX: -15 }}
                animate={{ opacity: 1, y: 0, rotateX: 0 }}
                transition={{ 
                  type: 'spring', 
                  stiffness: 300,
                  damping: 20,
                  delay: index * 0.1, 
                  duration: 0.6 
                }}
              >
                <div className="relative transform-style-preserve-3d">
                  <div className={`w-20 h-20 mx-auto mb-4 rounded-2xl bg-gradient-to-r ${stat.color} shadow-2xl backdrop-blur-sm border border-white/20 flex items-center justify-center group-hover:border-white/40 group-hover:shadow-primary-500/25 transition-all duration-500 transform group-hover:rotate-12`}>
                    <stat.icon className="text-2xl text-white group-hover:scale-110 transition-transform duration-300" />
                  </div>
                  <div className="text-4xl font-bold text-white mb-2 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-primary-400 group-hover:to-secondary-400 group-hover:bg-clip-text transition-all duration-300">
                    {stat.number}
                  </div>
                  <div className="text-sm text-gray-400 group-hover:text-gray-300 transition-colors font-medium">
                    {stat.label}
                  </div>
                  
                  {/* Glow effect on hover */}
                  <div className={`absolute inset-0 rounded-2xl bg-gradient-to-r ${stat.color} opacity-0 group-hover:opacity-20 blur-xl transition-opacity duration-500 -z-10`} />
                </div>
              </motion.div>
            ))}
          </motion.div>



                     {/* Enhanced CTA Buttons with Advanced Effects */}
           <motion.div
             className="hero-buttons flex flex-wrap justify-center gap-8 mb-12"
           >
            <motion.button
              whileHover={{ 
                scale: 1.05, 
                y: -5,
                boxShadow: "0 20px 40px rgba(59, 130, 246, 0.3)"
              }}
              whileTap={{ scale: 0.95 }}
              className="group relative px-8 py-4 bg-gradient-to-r from-primary-500 to-secondary-500 rounded-2xl font-semibold text-white overflow-hidden shadow-2xl"
              onClick={() => document.getElementById('contact').scrollIntoView({ behavior: 'smooth' })}
            >
              <span className="relative z-10 flex items-center space-x-3">
                <span>Get In Touch</span>
                <FaArrowDown className="group-hover:translate-y-1 group-hover:scale-110 transition-all duration-300" />
              </span>
              <div className="absolute inset-0 bg-gradient-to-r from-secondary-500 to-primary-500 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              
              {/* Ripple effect */}
              <div className="absolute inset-0 bg-white/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              
              {/* Glow effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-primary-500 to-secondary-500 blur-xl opacity-0 group-hover:opacity-30 transition-opacity duration-500 -z-10" />
            </motion.button>
            
            <motion.button
              whileHover={{ 
                scale: 1.05, 
                y: -5,
                boxShadow: "0 20px 40px rgba(139, 92, 246, 0.3)"
              }}
              whileTap={{ scale: 0.95 }}
              className="group relative px-8 py-4 bg-transparent border-2 border-primary-500 rounded-2xl font-semibold text-white overflow-hidden shadow-2xl backdrop-blur-sm"
              onClick={handleDownloadResume}
            >
              <span className="relative z-10 flex items-center space-x-3">
                <FaDownload className="group-hover:scale-110 transition-transform duration-300" />
                <span>Download Resume</span>
              </span>
              <div className="absolute inset-0 bg-primary-500 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              
              {/* Border glow effect */}
              <div className="absolute inset-0 border-2 border-primary-500 rounded-2xl opacity-0 group-hover:opacity-50 blur-sm transition-opacity duration-500" />
            </motion.button>
          </motion.div>

                     {/* Enhanced Social Links */}
           <motion.div
             className="hero-social flex justify-center space-x-6 mb-8"
           >
            {[
              { icon: FaGithub, url: 'https://github.com/vishnandaman', label: 'GitHub' },
              { icon: FaLinkedin, url: 'https://www.linkedin.com/in/aman-vishwakarma-x018730/', label: 'LinkedIn' },
              { icon: FaEnvelope, url: 'mailto:amanvishwakarma2207@gmail.com', label: 'Email' },
            ].map((social, index) => (
              <motion.a
                key={index}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                className="hero-social-link group relative"
                whileHover={{ scale: 1.2, y: -5 }}
                whileTap={{ scale: 0.95 }}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.5 + index * 0.1 }}
              >
                                 <div className="w-14 h-14 rounded-xl bg-gradient-to-r from-primary-500/20 to-secondary-500/20 backdrop-blur-sm border border-white/10 flex items-center justify-center group-hover:border-primary-500/50 group-hover:bg-primary-500/30 transition-all duration-300">
                   <social.icon className="text-xl text-gray-300 group-hover:text-white transition-colors" />
                 </div>
                <div className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <span className="text-xs text-gray-400 bg-gray-800 px-2 py-1 rounded whitespace-nowrap">
                    {social.label}
                  </span>
                </div>
              </motion.a>
            ))}
          </motion.div>
        </div>
      </div>
    </div>

             {/* Enhanced Scroll Indicator */}
       <motion.div
         initial={{ opacity: 0 }}
         animate={{ opacity: 1 }}
         transition={{ duration: 1, delay: 2 }}
         className="absolute bottom-4 left-1/2 transform -translate-x-1/2 z-20"
       >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="flex flex-col items-center space-y-2 cursor-pointer"
          onClick={() => document.getElementById('about').scrollIntoView({ behavior: 'smooth' })}
        >
          <div className="w-6 h-10 border-2 border-gray-400 rounded-full flex justify-center">
            <motion.div
              animate={{ y: [0, 12, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="w-1 h-3 bg-gray-400 rounded-full mt-2"
            />
          </div>
          <span className="text-xs text-gray-400 animate-pulse">Scroll Down</span>
        </motion.div>
      </motion.div>

      {/* Custom CSS for animations */}
      <style jsx>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-20px); }
        }
        
        @keyframes move {
          0% { transform: translate(0, 0); }
          100% { transform: translate(50px, 50px); }
        }
        
        @keyframes gradient {
          0%, 100% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
        }
        
        @keyframes glow {
          0%, 100% { box-shadow: 0 0 20px rgba(59, 130, 246, 0.3); }
          50% { box-shadow: 0 0 40px rgba(59, 130, 246, 0.6); }
        }
        
        @keyframes pulse-glow {
          0%, 100% { opacity: 0.5; transform: scale(1); }
          50% { opacity: 1; transform: scale(1.05); }
        }
        
        @keyframes shimmer {
          0% { background-position: -200% 0; }
          100% { background-position: 200% 0; }
        }
        
        .animate-gradient {
          background-size: 200% 200%;
          animation: gradient 3s ease infinite;
        }
        
        .animate-spin-slow {
          animation: spin 10s linear infinite;
        }
        
        .animate-glow {
          animation: glow 2s ease-in-out infinite;
        }
        
        .animate-pulse-glow {
          animation: pulse-glow 3s ease-in-out infinite;
        }
        
        .shimmer-effect {
          background: linear-gradient(90deg, transparent, rgba(255,255,255,0.1), transparent);
          background-size: 200% 100%;
          animation: shimmer 2s infinite;
        }
        
        .perspective-1000 {
          perspective: 1000px;
        }
        
        .transform-style-preserve-3d {
          transform-style: preserve-3d;
        }
      `}</style>
    </section>
  );
};

export default Hero;
