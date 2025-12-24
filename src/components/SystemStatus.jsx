import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Activity, CheckCircle, Terminal } from 'lucide-react';

const SystemStatus = () => {
    const [status, setStatus] = useState('Checking...');
    const [steps, setSteps] = useState([]);

    useEffect(() => {
        const sequence = [
            { msg: 'Resolving DNS...', delay: 500 },
            { msg: 'Connecting to mainnet...', delay: 1200 },
            { msg: 'Verifying React hydration...', delay: 2000 },
            { msg: 'Optimizing assets...', delay: 2800 },
            { msg: 'System integrity: 100%', delay: 3500 }
        ];

        sequence.forEach(({ msg, delay }) => {
            setTimeout(() => {
                setSteps(prev => [...prev, msg].slice(-3)); // Keep last 3
                setStatus(msg);
            }, delay);
        });

        setTimeout(() => setStatus('OPERATIONAL'), 4000);
    }, []);

    return (
        <div className="fixed bottom-4 right-4 z-50 hidden md:block">
            <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 2 }}
                className="bg-slate-900/90 backdrop-blur-md border border-slate-700/50 rounded-lg p-3 shadow-2xl flex items-center gap-3"
            >
                <div className="relative">
                    <Activity size={18} className={`text-emerald-500 ${status === 'OPERATIONAL' ? '' : 'animate-pulse'}`} />
                    {status === 'OPERATIONAL' && (
                        <span className="absolute -top-1 -right-1 w-2 h-2 bg-emerald-500 rounded-full animate-ping" />
                    )}
                </div>

                <div className="flex flex-col">
                    <span className="text-[10px] font-mono text-slate-500 uppercase tracking-wider">System Status</span>
                    <span className="text-xs font-mono font-bold text-emerald-400">
                        {status}
                    </span>
                </div>
            </motion.div>
        </div>
    );
};

export default SystemStatus;
