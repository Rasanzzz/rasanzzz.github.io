import React from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';
import { portfolioData } from '../data/portfolio';
import ProtectedLink from './ProtectedLink';

const Experience = () => {
    const { experience } = portfolioData;

    return (
        <section id="experience" className="py-32">
            <div className="container mx-auto px-6">
                <div className="flex flex-col md:flex-row gap-12 md:gap-24">

                    {/* Header Section (Sticky) */}
                    <div className="md:w-1/3">
                        <div className="sticky top-32">
                            <h2 className="text-sm font-mono text-primary mb-4 tracking-wider uppercase">Career History</h2>
                            <h3 className="text-4xl font-bold text-white mb-6">Professional journey.</h3>
                            <p className="text-slate-400 mb-8 p-4 border-l-2 border-slate-800 bg-slate-900/30">
                                Over 2+ years of providing high-impact results in automation testing and full-stack development.
                            </p>
                            <ProtectedLink
                                encodedText={portfolioData.personalInfo.resumeUrlEncoded}
                                type="file"
                                label="Download Full Resume"
                                className="inline-flex items-center gap-2 text-white font-medium hover:text-primary transition-colors group"
                            />
                        </div>
                    </div>

                    {/* Timeline Section */}
                    <div className="md:w-2/3 space-y-12 relative pl-8 border-l border-slate-800 ml-4 md:ml-0">
                        {experience.map((exp, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, x: 20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 }}
                                className="group relative"
                            >
                                {/* Timeline Dot */}
                                <span className="absolute -left-[41px] top-2 w-5 h-5 rounded-full bg-slate-900 border-2 border-slate-600 group-hover:border-primary group-hover:bg-primary/20 transition-all duration-300">
                                    <span className="absolute inset-1 rounded-full bg-slate-600 group-hover:bg-primary transition-colors" />
                                </span>

                                <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between mb-4">
                                    <h4 className="text-2xl font-bold text-white group-hover:text-primary transition-colors">{exp.company}</h4>
                                    <span className="text-sm font-mono text-slate-500 bg-slate-900/50 px-3 py-1 rounded-full border border-slate-800/50">{exp.period}</span>
                                </div>

                                <h5 className="text-xl text-slate-200 mb-6 font-medium">{exp.role}</h5>

                                <p className="text-slate-400 leading-relaxed mb-6">
                                    {exp.description}
                                </p>

                                <div className="flex flex-wrap gap-2">
                                    {exp.technologies.map((tech) => (
                                        <span
                                            key={tech}
                                            className="px-3 py-1 text-xs font-mono text-primary bg-primary/5 rounded-full border border-primary/10"
                                        >
                                            {tech}
                                        </span>
                                    ))}
                                </div>
                            </motion.div>
                        ))}
                    </div>

                </div>
            </div>
        </section>
    );
};

export default Experience;
