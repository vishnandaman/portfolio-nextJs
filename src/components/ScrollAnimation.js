import React, { useRef, useEffect } from 'react';
import { motion, useInView, useScroll, useTransform } from 'framer-motion';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

// Scroll-triggered animation wrapper
export const ScrollAnimation = ({ 
  children, 
  animation = 'fadeIn', 
  delay = 0, 
  duration = 0.8, 
  threshold = 0.1,
  className = '',
  ...props 
}) => {
  const ref = useRef();
  const [inViewRef, inView] = useInView({
    threshold,
    triggerOnce: true,
  });

  const animations = {
    fadeIn: {
      initial: { opacity: 0 },
      animate: { opacity: 1 },
      transition: { duration, delay }
    },
    slideUp: {
      initial: { opacity: 0, y: 50 },
      animate: { opacity: 1, y: 0 },
      transition: { duration, delay }
    },
    slideDown: {
      initial: { opacity: 0, y: -50 },
      animate: { opacity: 1, y: 0 },
      transition: { duration, delay }
    },
    slideLeft: {
      initial: { opacity: 0, x: 50 },
      animate: { opacity: 1, x: 0 },
      transition: { duration, delay }
    },
    slideRight: {
      initial: { opacity: 0, x: -50 },
      animate: { opacity: 1, x: 0 },
      transition: { duration, delay }
    },
    scale: {
      initial: { opacity: 0, scale: 0.8 },
      animate: { opacity: 1, scale: 1 },
      transition: { duration, delay, type: 'spring', stiffness: 100 }
    },
    rotate: {
      initial: { opacity: 0, rotate: -180 },
      animate: { opacity: 1, rotate: 0 },
      transition: { duration, delay, type: 'spring', stiffness: 100 }
    },
    bounce: {
      initial: { opacity: 0, scale: 0.3 },
      animate: { opacity: 1, scale: 1 },
      transition: { 
        duration, 
        delay, 
        type: 'spring', 
        stiffness: 200,
        damping: 10
      }
    }
  };

  return (
    <motion.div
      ref={inViewRef}
      className={className}
      {...animations[animation]}
      {...props}
    >
      {children}
    </motion.div>
  );
};

// Parallax scroll component
export const ParallaxScroll = ({ 
  children, 
  speed = 0.5, 
  className = '',
  ...props 
}) => {
  const ref = useRef();
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], ["0%", `${speed * 100}%`]);

  return (
    <motion.div
      ref={ref}
      style={{ y }}
      className={className}
      {...props}
    >
      {children}
    </motion.div>
  );
};

// Stagger animation container
export const StaggerContainer = ({ 
  children, 
  staggerDelay = 0.1, 
  className = '',
  ...props 
}) => {
  const containerRef = useRef();
  const [inViewRef, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  return (
    <motion.div
      ref={inViewRef}
      className={className}
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
      variants={{
        hidden: { opacity: 0 },
        visible: {
          opacity: 1,
          transition: {
            staggerChildren: staggerDelay
          }
        }
      }}
      {...props}
    >
      {React.Children.map(children, (child, index) => (
        <motion.div
          key={index}
          variants={{
            hidden: { opacity: 0, y: 50 },
            visible: { opacity: 1, y: 0 }
          }}
          transition={{ duration: 0.6, delay: index * staggerDelay }}
        >
          {child}
        </motion.div>
      ))}
    </motion.div>
  );
};

// GSAP Scroll Animation Hook
export const useGSAPScroll = (ref, animation, options = {}) => {
  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const {
      trigger = element,
      start = 'top 80%',
      end = 'bottom 20%',
      scrub = false,
      ...gsapOptions
    } = options;

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger,
        start,
        end,
        scrub,
        ...gsapOptions
      }
    });

    // Apply the animation
    if (typeof animation === 'function') {
      animation(tl, element);
    } else {
      // Default animations
      switch (animation) {
        case 'fadeIn':
          tl.fromTo(element, 
            { opacity: 0, y: 50 }, 
            { opacity: 1, y: 0, duration: 1, ease: 'power3.out' }
          );
          break;
        case 'slideIn':
          tl.fromTo(element, 
            { opacity: 0, x: -100 }, 
            { opacity: 1, x: 0, duration: 1, ease: 'power2.out' }
          );
          break;
        case 'scaleIn':
          tl.fromTo(element, 
            { opacity: 0, scale: 0.8 }, 
            { opacity: 1, scale: 1, duration: 0.8, ease: 'power2.out' }
          );
          break;
        case 'rotateIn':
          tl.fromTo(element, 
            { opacity: 0, rotate: -180 }, 
            { opacity: 1, rotate: 0, duration: 1, ease: 'power2.out' }
          );
          break;
        default:
          if (typeof animation === 'object') {
            tl.fromTo(element, animation.from || {}, animation.to || {});
          }
      }
    }

    return () => {
      tl.kill();
    };
  }, [ref, animation, options]);
};

// Text reveal animation
export const TextReveal = ({ 
  text, 
  className = '', 
  delay = 0,
  staggerDelay = 0.05,
  ...props 
}) => {
  const words = text.split(' ');
  const [ref, inView] = useInView({
    threshold: 0.5,
    triggerOnce: true,
  });

  return (
    <motion.div
      ref={ref}
      className={className}
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
      variants={{
        hidden: { opacity: 0 },
        visible: {
          opacity: 1,
          transition: {
            staggerChildren: staggerDelay,
            delayChildren: delay
          }
        }
      }}
      {...props}
    >
      {words.map((word, index) => (
        <motion.span
          key={index}
          className="inline-block mr-2"
          variants={{
            hidden: { opacity: 0, y: 50 },
            visible: { opacity: 1, y: 0 }
          }}
          transition={{ duration: 0.5, ease: 'easeOut' }}
        >
          {word}
        </motion.span>
      ))}
    </motion.div>
  );
};

// Counter animation
export const AnimatedCounter = ({ 
  value, 
  duration = 2, 
  className = '', 
  prefix = '', 
  suffix = '',
  ...props 
}) => {
  const [count, setCount] = React.useState(0);
  const [ref, inView] = useInView({
    threshold: 0.5,
    triggerOnce: true,
  });

  useEffect(() => {
    if (inView) {
      const startTime = Date.now();
      const endTime = startTime + duration * 1000;

      const updateCount = () => {
        const now = Date.now();
        const progress = Math.min((now - startTime) / (duration * 1000), 1);
        const currentCount = Math.floor(value * progress);
        setCount(currentCount);

        if (progress < 1) {
          requestAnimationFrame(updateCount);
        }
      };

      updateCount();
    }
  }, [inView, value, duration]);

  return (
    <motion.span
      ref={ref}
      className={className}
      initial={{ opacity: 0, scale: 0.5 }}
      animate={inView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.5, ease: 'easeOut' }}
      {...props}
    >
      {prefix}{count}{suffix}
    </motion.span>
  );
};

// Floating animation component
export const FloatingElement = ({ 
  children, 
  duration = 3, 
  amplitude = 20, 
  className = '',
  ...props 
}) => {
  return (
    <motion.div
      className={className}
      animate={{
        y: [0, -amplitude, 0],
      }}
      transition={{
        duration,
        repeat: Infinity,
        ease: 'easeInOut',
      }}
      {...props}
    >
      {children}
    </motion.div>
  );
};

// Magnetic effect component
export const MagneticElement = ({ 
  children, 
  strength = 0.3, 
  className = '',
  ...props 
}) => {
  const [position, setPosition] = React.useState({ x: 0, y: 0 });
  const ref = useRef();

  const handleMouseMove = (e) => {
    const { clientX, clientY } = e;
    const { left, top, width, height } = ref.current.getBoundingClientRect();
    const x = (clientX - left - width / 2) * strength;
    const y = (clientY - top - height / 2) * strength;
    setPosition({ x, y });
  };

  const handleMouseLeave = () => {
    setPosition({ x: 0, y: 0 });
  };

  return (
    <motion.div
      ref={ref}
      className={className}
      animate={position}
      transition={{ type: 'spring', stiffness: 150, damping: 15 }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      {...props}
    >
      {children}
    </motion.div>
  );
};

export default ScrollAnimation;
