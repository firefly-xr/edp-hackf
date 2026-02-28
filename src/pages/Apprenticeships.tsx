import { motion } from 'framer-motion';
import { Users } from 'lucide-react';

const FADE_UP = {
    initial: { opacity: 0, y: 30 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.5 }
};

export function Apprenticeships() {
    return (
        <div className="pt-32 pb-16 min-h-screen">
            <div className="container mx-auto px-6 max-w-7xl">
                <motion.div {...FADE_UP} className="text-center space-y-4 mb-16">
                    <h1 className="text-4xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-emerald-400">Apprenticeships & Live Projects</h1>
                    <p className="text-xl text-muted-foreground max-w-2xl mx-auto">Work with senior developers, join early-stage startups, and contribute to real production systems.</p>
                </motion.div>

                <div className="grid md:grid-cols-2 gap-8">
                    {[
                        { title: "Frontend Refactor under Senior guidance", company: "TechNova OS", tags: ["React", "Performance"], slots: 2 },
                        { title: "API Integration & Testing", company: "DataFlux", tags: ["Node.js", "Jest"], slots: 1 },
                        { title: "Mobile App Styling", company: "Local Retail Pos", tags: ["React Native", "UI/UX"], slots: 3 },
                        { title: "Database Migration Scripting", company: "HealthSync", tags: ["PostgreSQL", "Python"], slots: 2 }
                    ].map((item, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, scale: 0.95 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ delay: i * 0.1 }}
                            className="glass-card flex flex-col justify-between"
                        >
                            <div>
                                <div className="flex justify-between items-start mb-4">
                                    <div className="px-3 py-1 bg-blue-500/10 text-blue-400 border border-blue-500/20 rounded-full text-xs font-bold tracking-wide uppercase">Active Opportunity</div>
                                    <div className="flex items-center gap-1 text-xs text-white/50"><Users className="w-3 h-3" /> {item.slots} slots left</div>
                                </div>
                                <h3 className="text-xl font-bold text-white mb-2">{item.title}</h3>
                                <div className="text-[#00f0ff] font-medium text-sm mb-4">Mentored by @{item.company}</div>
                                <div className="flex gap-2 mb-6">
                                    {item.tags.map(t => <span key={t} className="text-xs bg-white/5 text-white/70 px-2 py-1 rounded-md">{t}</span>)}
                                </div>
                            </div>
                            <button className="w-full py-3 bg-white/5 hover:bg-white/10 border border-white/10 rounded-xl font-bold text-sm transition-colors text-white">Apply for Apprenticeship</button>
                        </motion.div>
                    ))}
                </div>
            </div>
        </div>
    );
}
