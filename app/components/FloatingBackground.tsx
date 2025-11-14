'use client';

import React from 'react';
import { motion } from 'framer-motion';

// Configuration for each floating shape to easily add or modify them
const shapes = [
  {
    id: 1,
    size: 'w-48 h-48 md:w-64 md:h-64',
    position: { top: '5%', left: '-5%' },
    color: 'bg-[#51AFBA]',
    duration: 25,
    delay: 0,
  },
  {
    id: 2,
    size: 'w-32 h-32 md:w-40 md:h-40',
    position: { top: '30%', right: '10%' },
    color: 'bg-[#FFDE59]',
    duration: 20,
    delay: 3,
  },
  {
    id: 3,
    size: 'w-56 h-56 md:w-72 md:h-72',
    position: { top: '50%', left: '15%' },
    color: 'bg-[#FCC0C5]',
    duration: 30,
    delay: 5,
  },
  {
    id: 4,
    size: 'w-40 h-40',
    position: { top: '75%', right: '-5%' },
    color: 'bg-[#51AFBA]',
    duration: 22,
    delay: 2,
  },
  {
    id: 5,
    size: 'w-24 h-24',
    position: { top: '90%', left: '30%' },
    color: 'bg-[#FFDE59]',
    duration: 18,
    delay: 4,
  },
];

const FloatingBackground = () => {
  return (
    <div
      className="fixed inset-0 w-full h-full overflow-hidden -z-10 pointer-events-none"
      aria-hidden="true"
    >
      {shapes.map((shape) => (
        <motion.div
          key={shape.id}
          className={`absolute rounded-full filter blur-2xl opacity-20 ${shape.size} ${shape.color}`}
          style={{ ...shape.position }}
          animate={{
            y: ['0rem', '2rem', '0rem'],
            x: ['0rem', '-1.5rem', '0rem'],
          }}
          transition={{
            duration: shape.duration,
            delay: shape.delay,
            repeat: Infinity,
            repeatType: 'mirror',
            ease: 'easeInOut',
          }}
        />
      ))}
    </div>
  );
};

export default FloatingBackground;