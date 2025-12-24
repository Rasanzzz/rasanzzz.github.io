import React from 'react';
import { motion } from 'framer-motion';
import { portfolioData } from '../data/portfolio';

const Skills = () => {
    // Group skills by category
    const categories = portfolioData.skills.reduce((acc, skill) => {
        if (!acc[skill.category]) {
            acc[skill.category] = [];
        }
        acc[skill.category].push(skill);
        return acc;
    }, {});

    const categoryOrder = ['Automation', 'Languages', 'Cloud', 'DevOps', 'Web', 'Testing', 'AI', 'Professional'];

    return (
        <section id="skills" className="py-32 relative bg-slate-950/50 backdrop-blur-sm">
            <div className="container mx-auto px-6">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="mb-20 max-w-2xl"
                >
                    <h2 className="text-sm font-mono text-primary mb-4 tracking-wider uppercase">Technical Proficiency</h2>
                    <h3 className="text-4xl font-bold text-white mb-6">Engineered for Quality & Scale.</h3>
                    <p className="text-slate-400 text-lg">
                        A comprehensive toolset focused on robust automation, cloud infrastructure, and modern web development.
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {categoryOrder.map((cat, index) => {
                        if (!categories[cat]) return null;

                        return (
                            <motion.div
                                key={cat}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 }}
                                className="group relative bg-slate-900/40 p-8 rounded-2xl border border-slate-800 hover:border-primary/30 transition-all duration-300"
                            >
                                <div className="absolute inset-0 bg-gradient-to-b from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity rounded-2xl pointer-events-none" />

                                <h4 className="text-xl font-bold text-white mb-6 flex items-center gap-3">
                                    <span className="w-2 h-8 bg-primary/20 rounded-full block group-hover:bg-primary transition-colors" />
                                    {cat}
                                </h4>

                                <div className="flex flex-wrap gap-3">
                                    {categories[cat].map((skill) => {
                                        const Icon = skill.icon;
                                        return (
                                            <div
                                                key={skill.name}
                                                className="flex items-center gap-2 px-3 py-2 rounded-lg bg-slate-950 border border-slate-800/50 text-slate-300 text-sm group-hover:border-primary/20 transition-colors"
                                            >
                                                <Icon size={16} className="text-primary/70" />
                                                <span>{skill.name}</span>
                                            </div>
                                        );
                                    })}
                                </div>
                            </motion.div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
};

export default Skills;
