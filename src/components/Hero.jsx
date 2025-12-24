import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, ChevronDown, Download } from 'lucide-react';
import { portfolioData } from '../data/portfolio';
import ProtectedLink from './ProtectedLink';

const Hero = () => {
    const { name, title, bio, resumeUrlEncoded } = portfolioData.personalInfo;

    return (
        <section className="min-h-screen flex items-center justify-center relative pt-20">
            {/* Background Gradient Mesh */}
            <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-indigo-600/20 rounded-full blur-[120px] -z-10" />
            <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-purple-600/10 rounded-full blur-[120px] -z-10" />

            <div className="container mx-auto px-6 z-10">
                <div className="max-w-5xl">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                    >
                        <div className="flex items-center gap-4 mb-6">
                            <span className="h-[1px] w-12 bg-primary"></span>
                            <span className="text-primary font-mono tracking-widest uppercase text-sm">Open to Senior QA & Automation Roles</span>
                        </div>

                        <h2 className="text-xl md:text-2xl text-slate-300 font-medium mb-4">
                            Hello, I'm <span className="text-white font-bold">{name}</span>
                        </h2>

                        <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight mb-8 text-white leading-[1.1]">
                            Engineered <br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-purple-400">
                                Precision & Scale.
                            </span>
                        </h1>

                        <p className="text-xl text-slate-400 max-w-2xl mb-12 leading-relaxed">
                            {bio}
                        </p>

                        <div className="flex flex-wrap gap-6">
                            <a
                                href="#projects"
                                className="px-8 py-4 bg-white text-black rounded-lg font-bold hover:bg-slate-200 transition-colors flex items-center gap-2"
                            >
                                View My Work
                                <ArrowRight className="w-4 h-4" />
                            </a>
                            <ProtectedLink
                                encodedText={resumeUrlEncoded}
                                type="file"
                                label="Download CV"
                                className="px-8 py-4 bg-indigo-600 text-white rounded-lg font-bold hover:bg-indigo-700 transition-colors flex items-center gap-2 h-[56px]"
                            />
                        </div>
                    </motion.div>
                </div>
            </div>

            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1, duration: 1 }}
                className="absolute bottom-12 left-6 md:left-12 flex items-center gap-4 text-slate-600 font-mono text-xs"
            >
                <ChevronDown className="animate-bounce" />
                SCROLL TO EXPLORE
            </motion.div>
        </section>
    );
};

export default Hero;
