'use client';

import React from 'react';
import { motion } from 'framer-motion';

interface BalloonProps {
  className?: string;
  color: string;
  initialY: number;
  initialX: number;
  duration: number;
  delay: number;
}

const Balloon: React.FC<BalloonProps> = ({ className, color, initialY, initialX, duration, delay }) => {
  return (
    <motion.div
      className={`absolute ${className}`}
      initial={{ y: initialY, x: initialX, opacity: 0, scale: 0.5 }}
      whileInView={{ y: [initialY, initialY - 50, initialY], opacity: [0, 0.7, 0.7, 0], scale: 1 }}
      transition={{
        duration: duration,
        delay: delay,
        repeat: Infinity,
        repeatType: 'loop',
        ease: 'easeInOut',
        opacity: {
            times: [0, 0.1, 0.9, 1], // Appear, stay, then fade
            duration: duration
        }
      }}
      viewport={{ once: true, amount: 0.1 }}
    >
      {/* Balloon Shape */}
      <div
        className={`w-24 h-32 rounded-full ${color} filter blur-sm`}
        style={{
          clipPath: 'ellipse(35% 50% at 50% 50%)', // Creates a more oval balloon shape
        }}
      />
      {/* Balloon Knot */}
      <div
        className={`absolute bottom-[-4px] left-1/2 -translate-x-1/2 w-3 h-4 ${color} filter blur-sm`}
        style={{
            clipPath: 'polygon(50% 100%, 0 0, 100% 0)' // Triangle for the knot
        }}
      />
    </motion.div>
  );
};

export default Balloon;