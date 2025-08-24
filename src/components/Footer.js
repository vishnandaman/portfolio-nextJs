import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-scroll';
import { 
  FaGithub, 
  FaLinkedin, 
  FaTwitter, 
  FaEnvelope, 
  FaCode,
  FaHeart,
  FaArrowUp
} from 'react-icons/fa';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const footerLinks = {
    sections: [
      {
        title: 'Navigation',
        links: [
          { name: 'Home', to: 'home' },
          { name: 'About', to: 'about' },
          { name: 'Skills', to: 'skills' },
          { name: 'Projects', to: 'projects' },
          { name: 'Experience', to: 'experience' },
          { name: 'Contact', to: 'contact' }
        ]
      },
      {
        title: 'Services',
        links: [
          { name: 'Web Development', href: '#services' },
          { name: 'Mobile Apps', href: '#services' },
          { name: 'API Development', href: '#services' },
          { name: 'Consulting', href: '#services' },
          { name: 'Maintenance', href: '#services' }
        ]
      },
      {
        title: 'Resources',
        links: [
          { name: 'Blog', href: '/blog' },
          { name: 'Documentation', href: '/docs' },
          { name: 'Case Studies', href: '/cases' },
          { name: 'Portfolio', href: '/portfolio' }
        ]
      }
    ]
  };

  const socialLinks = [
    { icon: FaGithub, url: 'https://github.com/vishnandaman', label: 'GitHub' },
    { icon: FaLinkedin, url: 'https://www.linkedin.com/in/aman-vishwakarma-x018730/', label: 'LinkedIn' },
    { icon: FaTwitter, url: 'https://twitter.com/amanvishwakarma22', label: 'Twitter' },
    { icon: FaEnvelope, url: 'mailto:amanvishwakarma2207@gmail.com', label: 'Email' }
  ];

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative bg-gradient-to-b from-dark-800 to-dark-900 border-t border-white/10">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, rgba(59, 130, 246, 0.3) 1px, transparent 0)`,
          backgroundSize: '50px 50px'
        }} />
      </div>

      <div className="container-custom relative z-10">
        {/* Main Footer Content */}
        <div className="py-16">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Brand Section */}
            <div className="lg:col-span-1">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="mb-6"
              >
                <div className="flex items-center space-x-2 mb-4">
                  <div className="w-10 h-10 bg-gradient-to-r from-primary-500 to-secondary-500 rounded-lg flex items-center justify-center">
                    <FaCode className="text-white text-xl" />
                  </div>
                  <span className="text-xl font-bold gradient-text">Aman Vishwakarma</span>
                </div>
                <p className="text-gray-400 mb-6">
                  Full Stack Developer passionate about creating innovative solutions that drive business growth and user engagement.
                </p>
              </motion.div>

              {/* Social Links */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="flex space-x-4"
              >
                {socialLinks.map((social, index) => (
                  <motion.a
                    key={index}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.1, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                    className="w-10 h-10 glass-effect rounded-full flex items-center justify-center text-gray-300 hover:text-white hover:bg-primary-500/20 transition-all duration-300"
                    aria-label={social.label}
                  >
                    <social.icon size={18} />
                  </motion.a>
                ))}
              </motion.div>
            </div>

            {/* Footer Links */}
            {footerLinks.sections.map((section, sectionIndex) => (
              <motion.div
                key={section.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 * (sectionIndex + 1) }}
              >
                <h3 className="text-lg font-semibold text-white mb-4">
                  {section.title}
                </h3>
                <ul className="space-y-3">
                  {section.links.map((link, linkIndex) => (
                    <li key={linkIndex}>
                      {link.to ? (
                        <Link
                          to={link.to}
                          spy={true}
                          smooth={true}
                          offset={-80}
                          duration={500}
                          className="text-gray-400 hover:text-primary-400 transition-colors duration-300 cursor-pointer"
                        >
                          {link.name}
                        </Link>
                      ) : (
                        <a
                          href={link.href}
                          className="text-gray-400 hover:text-primary-400 transition-colors duration-300"
                        >
                          {link.name}
                        </a>
                      )}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Bottom Bar */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="border-t border-white/10 py-6"
        >
          <div className="flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0">
            {/* Copyright */}
            <div className="flex items-center space-x-2 text-gray-400">
              <span>© {currentYear} Aman Vishwakarma. All rights reserved.</span>
              <span className="hidden sm:inline">•</span>
              <span className="hidden sm:inline">Made with</span>
              <FaHeart className="text-red-500 animate-pulse" />
              <span className="hidden sm:inline">by Aman Vishwakarma</span>
            </div>
            {/* Scroll to Top */}
            <motion.button
              onClick={scrollToTop}
              whileHover={{ scale: 1.1, y: -2 }}
              whileTap={{ scale: 0.95 }}
              className="w-10 h-10 glass-effect rounded-full flex items-center justify-center text-gray-300 hover:text-white hover:bg-primary-500/20 transition-all duration-300"
              aria-label="Scroll to top"
            >
              <FaArrowUp size={16} />
            </motion.button>
          </div>
        </motion.div>
      </div>

      {/* Floating Action Button for Mobile */}
      <motion.button
        onClick={scrollToTop}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        className="fixed bottom-6 right-6 md:hidden w-12 h-12 bg-gradient-to-r from-primary-500 to-secondary-500 rounded-full flex items-center justify-center text-white shadow-lg hover:shadow-xl transition-all duration-300 z-50"
        aria-label="Scroll to top"
      >
        <FaArrowUp size={18} />
      </motion.button>
    </footer>
  );
};

export default Footer;
