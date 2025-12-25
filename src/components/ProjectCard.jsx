import React from 'react';
import { ExternalLink, Terminal, CheckCircle2 } from 'lucide-react';

const ProjectCard = ({ project }) => {
    return (
        <div className="group relative bg-slate-900 border border-slate-800 rounded-xl overflow-hidden hover:border-blue-500/50 transition-all duration-300 hover:shadow-2xl hover:shadow-blue-900/10">
            {/* Top Bar / Window Controls */}
            <div className="absolute top-0 left-0 right-0 h-8 bg-slate-950/50 border-b border-slate-800 px-4 flex items-center gap-2">
                <div className="w-2.5 h-2.5 rounded-full bg-red-500/20"></div>
                <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/20"></div>
                <div className="w-2.5 h-2.5 rounded-full bg-green-500/20"></div>
            </div>

            <div className="p-6 pt-12">
                <div className="flex items-start justify-between mb-4">
                    <div className="flex items-center gap-3">
                        <div className="p-2 bg-blue-500/10 rounded-lg">
                            <Terminal className="w-5 h-5 text-blue-400" />
                        </div>
                        <h3 className="text-xl font-bold text-slate-100 group-hover:text-blue-400 transition-colors">
                            {project.title}
                        </h3>
                    </div>
                    <div className="flex gap-2">
                        {project.link && (
                            <a href={project.link} target="_blank" rel="noopener noreferrer"
                                className="p-2 text-slate-400 hover:text-white hover:bg-slate-800 rounded-lg transition-colors">
                                <ExternalLink size={18} />
                            </a>
                        )}
                    </div>
                </div>

                <p className="text-slate-400 mb-6 text-sm leading-relaxed border-l-2 border-slate-800 pl-4">
                    {project.description}
                </p>

                {/* QA Metrics Section */}
                {project.qaMetrics && (
                    <div className="mb-6 bg-slate-950/30 rounded-lg p-3 border border-slate-800/50">
                        <h4 className="text-xs font-semibold text-slate-500 uppercase tracking-wider mb-2 flex items-center gap-2">
                            <CheckCircle2 className="w-3 h-3" /> QA Success Metrics
                        </h4>
                        <div className="grid grid-cols-2 gap-2">
                            {project.qaMetrics.map((metric, index) => (
                                <div key={index} className="flex items-center gap-2 text-xs text-emerald-400/80 font-mono">
                                    <span className="w-1 h-1 rounded-full bg-emerald-500"></span>
                                    {metric}
                                </div>
                            ))}
                        </div>
                    </div>
                )}


                <div className="flex flex-wrap gap-2 mt-auto">
                    {project.tech.map((tech, index) => (
                        <span key={index} className="text-xs font-medium px-2.5 py-1 rounded-full bg-slate-800 text-slate-300 border border-slate-700">
                            {tech}
                        </span>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default ProjectCard;
