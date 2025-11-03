// app/components/HowItWorks.tsx
'use client';

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';

// Data for the tags and steps (no changes here)
const tags = [
    'Autism Evaluation', 'ADHD Testing', 'Gifted Testing', 'Learning Disability', 'Cognitive Testing', 'Speech Delay',
    'Autism Therapy', 'Behavior Challenges', 'Emotional Regulation', 'Social Skills Training', 'Daily Routines',
    'Tantrum Support', 'Language Development', 'Articulation / Speech Sounds', 'Social Communication',
];

const processItems = [
    {
        type: 'step',
        title: 'Tell Us About Your Child',
        description: 'Quick Online Intake \n 5-7 minutes',
        isHighlighted: true,
    },
    {
        type: 'step',
        title: 'Choose Your Path',
        description: 'We verify your insurance or show you private-pay options instantly.',
        isHighlighted: false,
    },
    {
        type: 'image',
        src: '/family.png',
        alt: 'Happy family',
    },
    {
        type: 'step',
        title: 'Get Matched',
        description: 'Receive a personalized match and book your first appointment – no waitlists.',
        isHighlighted: false,
    },
    {
        type: 'step',
        title: 'Start your service',
        description: 'Get your child the help they deserve, quickly and efficiently.',
        isHighlighted: false,
    },
];

// Animation Variants (no changes here)
const containerVariants = {
    hidden: {},
    visible: { transition: { staggerChildren: 0.1 } },
};

const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

export default function HowItWorks() {
    return (
        <section className="bg-[#f4f4f2] py-24 sm:py-32 relative overflow-hidden">
            {/* Decorative background shapes */}
            <Image
                src="/website-geometric-shape.png"
                alt="Decorative Shape"
                width={300}
                height={300}
                className="absolute top-1/4 left-12 -translate-x-1/2  z-0"
            />
            <Image
                src="/website-geometric-shape2.png"
                alt="Decorative Shape"
                width={300}
                height={300}
                className="absolute top-1/3 right-12 translate-x-1/2  z-0"
            />

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                {/* Top Tag Cloud & Section Heading (no changes) */}
                <div className="flex flex-wrap justify-center items-center gap-3 mb-24">
                    {tags.map((tag) => (
                        <div key={tag} className="border border-gray-300 rounded-full px-5 py-2 text-gray-600 text-sm">
                            {tag}
                        </div>
                    ))}
                </div>
                <div className="text-center mb-16">
                    <h2 className="text-4xl md:text-5xl font-bold text-[#33343B]">How It Works For Families</h2>
                    <p className="mt-4 text-gray-500">Experience a structured approach designed to address your needs</p>
                </div>

                {/* Flex-Wrap Layout */}
                <motion.div
                    className="flex flex-wrap justify-center items-stretch gap-6"
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.1 }}
                >
                    {processItems.map((item, index) => (
                        <motion.div
                            key={index}
                            className="flex flex-col w-full md:w-[calc(50%-1.5rem)] lg:w-[calc(33.33%-1.5rem)]"
                            variants={itemVariants}
                        >
                            {item.type === 'step' ? (
                                // --- CHANGE HERE: Added h-52 ---
                                <div className={`p-6 rounded-lg h-52 flex flex-col ${item.isHighlighted ? 'bg-[#FCC0C5]' : 'bg-white'}`}>
                                    <div className="flex items-start gap-4">
                                        <div className="bg-[#33343B] text-white rounded-full w-8 h-8 flex-shrink-0 flex items-center justify-center font-bold">
                                            {index < 2 ? index + 1 : index}
                                        </div>
                                        <div>
                                            <h3 className="font-bold text-lg text-gray-800">{item.title}</h3>
                                            <p className="text-gray-600 text-sm mt-2 whitespace-pre-line">{item.description}</p>
                                        </div>
                                    </div>
                                </div>
                            ) : (
                                // --- CHANGE HERE: Added h-52 ---
                                <div className="w-full h-52 rounded-lg overflow-hidden hidden lg:block">
                                    <Image src={item.src!} alt={item.alt!} width={300} height={300} className="w-full h-full object-cover" />
                                </div>
                            )}
                        </motion.div>
                    ))}
                </motion.div>

                {/* CTA Button (no changes) */}
                <div className="text-center mt-16">
                    {/* UPDATED: Added cursor-pointer and hover scale effect */}
                    <button className="bg-[#FFDE59] text-[#33343B] font-bold py-3 px-10 rounded-full shadow-md hover:bg-[#ffe680] transition-transform duration-200 hover:scale-105 cursor-pointer">
                        Start Intake
                    </button>
                </div>
            </div>
        </section>
    );
}