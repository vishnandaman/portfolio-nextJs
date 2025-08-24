import React from 'react';
import { motion } from 'framer-motion';
import { FaCode, FaRocket, FaLightbulb } from 'react-icons/fa';

const LoadingScreen = () => {
  return (
    <motion.div
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 bg-gradient-to-br from-dark-900 via-dark-800 to-dark-900 flex items-center justify-center z-50"
    >
      <div className="text-center">
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.5, type: "spring" }}
          className="mb-8"
        >
          <div className="relative">
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
              className="w-24 h-24 mx-auto mb-4 rounded-full bg-gradient-to-r from-primary-500 to-secondary-500 flex items-center justify-center"
            >
              <FaCode className="text-3xl text-white" />
            </motion.div>
            <motion.div
              animate={{ scale: [1, 1.2, 1] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="absolute -top-2 -right-2 w-8 h-8 bg-secondary-500 rounded-full flex items-center justify-center"
            >
              <FaRocket className="text-sm text-white" />
            </motion.div>
          </div>
        </motion.div>

        <motion.h1
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.5 }}
          className="text-4xl font-bold gradient-text mb-4"
        >
          Aman Vishwakarma
        </motion.h1>

        <motion.p
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.5 }}
          className="text-xl text-gray-300 mb-8"
        >
          Full Stack Developer
        </motion.p>

        <motion.div
          initial={{ width: 0 }}
          animate={{ width: "200px" }}
          transition={{ delay: 0.7, duration: 1 }}
          className="h-1 bg-gradient-to-r from-primary-500 to-secondary-500 rounded-full mx-auto mb-4"
        />

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 0.5 }}
          className="flex items-center justify-center space-x-2"
        >
          <FaLightbulb className="text-primary-400 animate-pulse" />
          <span className="text-gray-400">Loading amazing things</span>
          <span className="loading-dots text-primary-400"></span>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default LoadingScreen;
