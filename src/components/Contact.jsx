import React from 'react';
import { motion } from 'framer-motion';
import { Mail, Linkedin, Github } from 'lucide-react';
import { portfolioData } from '../data/portfolio';

import ProtectedLink from './ProtectedLink';

const Contact = () => {
    const { emailEncoded, linkedin, github } = portfolioData.personalInfo;

    return (
        <section id="contact" className="py-20 bg-slate-900 border-t border-slate-800">
            <div className="container mx-auto px-6 text-center">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="max-w-2xl mx-auto"
                >
                    <h2 className="text-4xl font-bold mb-6">Let's <span className="text-primary">Connect</span></h2>
                    <p className="text-slate-400 mb-8">
                        I'm currently looking for new opportunities. Whether you have a question or just want to say hi, I'll try my best to get back to you!
                    </p>

                    <div className="flex justify-center mb-12">
                        <ProtectedLink
                            encodedText={emailEncoded}
                            type="email"
                            className="px-8 py-4 bg-primary text-white rounded-full font-bold hover:bg-blue-600 shadow-lg hover:shadow-primary/20"
                        />
                    </div>

                    <div className="flex justify-center gap-6">
                        <a href={linkedin} target="_blank" rel="noopener noreferrer" className="p-4 bg-slate-800 rounded-full text-slate-400 hover:text-white hover:bg-slate-700 transition-all">
                            <Linkedin size={24} />
                        </a>
                        <a href={github} target="_blank" rel="noopener noreferrer" className="p-4 bg-slate-800 rounded-full text-slate-400 hover:text-white hover:bg-slate-700 transition-all">
                            <Github size={24} />
                        </a>
                    </div>
                </motion.div>

                <footer className="mt-20 pt-8 border-t border-slate-800/50 text-slate-500 text-sm">
                    <p>© {new Date().getFullYear()} Rasan Singh. Built with React & Tailwind CSS v4.</p>
                </footer>
            </div>
        </section>
    );
};

export default Contact;
