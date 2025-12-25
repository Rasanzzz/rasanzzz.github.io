import React from 'react';
import { motion } from 'framer-motion';
import { FolderGit2 } from 'lucide-react';
import { portfolioData } from '../data/portfolio';
import ProjectCard from './ProjectCard';

const Projects = () => {
    const { projects } = portfolioData;

    return (
        <section id="projects" className="py-20 bg-slate-900/50">
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
                        >
                            <ProjectCard project={project} />
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Projects;
