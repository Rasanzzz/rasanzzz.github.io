import React from 'react';
import { motion } from 'framer-motion';
import { Github, ExternalLink, FolderGit2 } from 'lucide-react';
import { portfolioData } from '../data/portfolio';

const Projects = () => {
    const { projects } = portfolioData;

    return (
        <section id="projects" className="py-32 bg-slate-900/50">
            <div className="container mx-auto px-6">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="mb-16"
                >
                    <h2 className="text-sm font-mono text-primary mb-4 tracking-wider uppercase">Portfolio</h2>
                    <h3 className="text-4xl font-bold text-white mb-6">Featured Projects.</h3>
                    <p className="text-slate-400 max-w-2xl">
                        A selection of automation frameworks, web applications, and technical solutions demonstrating end-to-end engineering capabilities.
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {projects.map((project, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className="group bg-slate-950 border border-slate-800 rounded-2xl p-8 hover:border-primary/50 transition-all duration-300 flex flex-col h-full"
                        >
                            <div className="flex justify-between items-start mb-6">
                                <div className="p-3 bg-primary/10 rounded-lg text-primary group-hover:bg-primary group-hover:text-white transition-colors">
                                    <FolderGit2 size={24} />
                                </div>
                                <div className="flex gap-4">
                                    {project.github && (
                                        <a
                                            href={project.github}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="text-slate-400 hover:text-white transition-colors"
                                            title="View Source Code"
                                        >
                                            <Github size={20} />
                                        </a>
                                    )}
                                    {project.link && (
                                        <a
                                            href={project.link}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="text-slate-400 hover:text-white transition-colors"
                                            title="View Live Demo"
                                        >
                                            <ExternalLink size={20} />
                                        </a>
                                    )}
                                </div>
                            </div>

                            <h4 className="text-xl font-bold text-white mb-3 group-hover:text-primary transition-colors">
                                {project.title}
                            </h4>

                            <p className="text-slate-400 mb-6 flex-grow leading-relaxed">
                                {project.description}
                            </p>

                            <div className="flex flex-wrap gap-2 mt-auto">
                                {project.tech.map((t) => (
                                    <span
                                        key={t}
                                        className="text-xs font-mono text-slate-300 bg-slate-900 px-2 py-1 rounded border border-slate-800"
                                    >
                                        {t}
                                    </span>
                                ))}
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Projects;
