import React from 'react';
import { Activity } from 'lucide-react';

const SystemStatus = () => {
    return (
        <div className="flex items-center gap-2 px-3 py-1.5 bg-emerald-950/30 border border-emerald-500/20 rounded-full w-fit">
            <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
            </span>
            <span className="text-xs font-mono text-emerald-400 font-medium tracking-wide">
                SYSTEMS ONLINE
            </span>
            <Activity className="w-3 h-3 text-emerald-500 ml-1" />
        </div>
    );
};

export default SystemStatus;
