import React from 'react';
import { motion } from 'framer-motion';
import { GraduationCap, Award } from 'lucide-react';
import { portfolioData } from '../data/portfolio';

const Education = () => {
    const { education, certifications } = portfolioData;

    return (
        <section id="education" className="py-16 bg-slate-900">
            <div className="container mx-auto px-6">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="mb-16"
                >
                    <h2 className="text-4xl font-bold mb-4">Education & <span className="text-primary">Certifications</span></h2>
                    <p className="text-slate-400">My academic background and professional qualifications.</p>
                </motion.div>

                <div className="grid md:grid-cols-2 gap-12">
                    {/* Education Column */}
                    <div>
                        <div className="flex items-center gap-3 mb-8">
                            <GraduationCap className="text-primary" size={28} />
                            <h3 className="text-2xl font-bold text-white">Education</h3>
                        </div>
                        <div className="space-y-8">
                            {education.map((edu, index) => (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, x: -20 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: index * 0.1 }}
                                    className="bg-slate-800/50 p-6 rounded-2xl border border-slate-700/50"
                                >
                                    <span className="text-secondary text-sm font-medium">{edu.year}</span>
                                    <h4 className="text-xl font-bold text-white mt-2">{edu.degree}</h4>
                                    <p className="text-slate-300 mt-1">{edu.school}</p>
                                    <p className="text-slate-400 text-sm mt-3">{edu.description}</p>
                                </motion.div>
                            ))}
                        </div>
                    </div>

                    {/* Certifications Column */}
                    <div>
                        <div className="flex items-center gap-3 mb-8">
                            <Award className="text-secondary" size={28} />
                            <h3 className="text-2xl font-bold text-white">Certifications</h3>
                        </div>
                        <div className="space-y-6">
                            {certifications.map((cert, index) => (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, x: 20 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: index * 0.1 }}
                                    className="flex items-start gap-4 bg-slate-800/50 p-6 rounded-2xl border border-slate-700/50 hover:border-primary/50 transition-colors"
                                >
                                    <div className="p-3 bg-primary/10 rounded-xl text-primary">
                                        <Award size={24} />
                                    </div>
                                    <div>
                                        <h4 className="text-lg font-bold text-white">{cert.name}</h4>
                                        <p className="text-slate-400 text-sm">{cert.issuer} • {cert.date}</p>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Education;
