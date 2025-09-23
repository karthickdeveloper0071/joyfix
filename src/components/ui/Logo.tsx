'use client';

import { motion } from 'framer-motion';

interface LogoProps {
  size?: 'sm' | 'md' | 'lg' | 'xl';
  showText?: boolean;
  className?: string;
}

export default function Logo({ size = 'md', showText = true, className = '' }: LogoProps) {
  const sizes = {
    sm: { icon: 'w-8 h-8', text: 'text-lg' },
    md: { icon: 'w-12 h-12', text: 'text-2xl' },
    lg: { icon: 'w-16 h-16', text: 'text-3xl' },
    xl: { icon: 'w-24 h-24', text: 'text-5xl' }
  };

  return (
    <motion.div 
      className={`flex items-center space-x-3 ${className}`}
      whileHover={{ scale: 1.05 }}
      transition={{ duration: 0.2 }}
    >
      {/* Logo Icon */}
      <div className={`${sizes[size].icon} relative`}>
        <svg
          viewBox="0 0 100 100"
          className="w-full h-full"
          xmlns="http://www.w3.org/2000/svg"
        >
          {/* Gradient Definitions */}
          <defs>
            <linearGradient id="joyGradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#3B82F6" />
              <stop offset="50%" stopColor="#8B5CF6" />
              <stop offset="100%" stopColor="#EC4899" />
            </linearGradient>
            <linearGradient id="fixGradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#10B981" />
              <stop offset="100%" stopColor="#3B82F6" />
            </linearGradient>
          </defs>
          
          {/* Main Circle Background */}
          <circle
            cx="50"
            cy="50"
            r="45"
            fill="url(#joyGradient)"
            className="drop-shadow-lg"
          />
          
          {/* Inner Design - Represents "Joy" */}
          <motion.path
            d="M25 35 Q35 25 45 35 Q50 40 45 45 Q35 55 25 45 Q20 40 25 35 Z"
            fill="white"
            fillOpacity="0.9"
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.2, duration: 0.5 }}
          />
          
          {/* Gear/Fix Symbol */}
          <motion.g
            initial={{ rotate: 0 }}
            animate={{ rotate: 360 }}
            transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
            style={{ transformOrigin: '70px 65px' }}
          >
            <circle cx="70" cy="65" r="12" fill="url(#fixGradient)" />
            <circle cx="70" cy="65" r="6" fill="white" />
            {/* Gear teeth */}
            {[0, 45, 90, 135, 180, 225, 270, 315].map((angle, i) => (
              <rect
                key={i}
                x="69"
                y="50"
                width="2"
                height="6"
                fill="url(#fixGradient)"
                transform={`rotate(${angle} 70 65)`}
              />
            ))}
          </motion.g>
          
          {/* Sparkle Effects */}
          <motion.circle
            cx="30"
            cy="25"
            r="2"
            fill="white"
            initial={{ opacity: 0 }}
            animate={{ opacity: [0, 1, 0] }}
            transition={{ duration: 2, repeat: Infinity, delay: 0.5 }}
          />
          <motion.circle
            cx="75"
            cy="30"
            r="1.5"
            fill="white"
            initial={{ opacity: 0 }}
            animate={{ opacity: [0, 1, 0] }}
            transition={{ duration: 2, repeat: Infinity, delay: 1 }}
          />
          <motion.circle
            cx="80"
            cy="80"
            r="1"
            fill="white"
            initial={{ opacity: 0 }}
            animate={{ opacity: [0, 1, 0] }}
            transition={{ duration: 2, repeat: Infinity, delay: 1.5 }}
          />
        </svg>
      </div>

      {/* Logo Text */}
      {showText && (
        <motion.div 
          className="flex items-baseline space-x-1"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.3, duration: 0.5 }}
        >
          <span className={`font-bold bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent ${sizes[size].text}`}>
            Joy
          </span>
          <span className={`font-bold text-gray-800 ${sizes[size].text}`}>
            Fix
          </span>
        </motion.div>
      )}
    </motion.div>
  );
}