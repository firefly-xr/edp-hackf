import { motion } from 'framer-motion';
import { DollarSign, Code, Briefcase, Video } from 'lucide-react';

export function Earnings() {
    return (
        <div className="pt-32 pb-16 min-h-screen">
            <div className="container mx-auto px-6 max-w-7xl">
                <div className="text-center mb-16">
                    <h1 className="text-4xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-emerald-400 to-green-500">Earnings & Opportunities</h1>
                    <p className="text-xl text-muted-foreground mt-4 max-w-2xl mx-auto">Freelance gigs, micro-SaaS, and remote contract work. Pure economic participation.</p>
                </div>

                <div className="grid md:grid-cols-4 gap-6">
                    {[
                        { title: "Freelance Dev", icon: <Code className="w-8 h-8 text-green-400" />, stat: "$4,200 avg/mo" },
                        { title: "SaaS Micro-Products", icon: <DollarSign className="w-8 h-8 text-emerald-400" />, stat: "Passive Income" },
                        { title: "Remote Gigs", icon: <Briefcase className="w-8 h-8 text-teal-400" />, stat: "Global Clients" },
                        { title: "Tech Content", icon: <Video className="w-8 h-8 text-cyan-400" />, stat: "Monetized" }
                    ].map((item, i) => (
                        <motion.div key={i} initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} transition={{ delay: i * 0.1 }} className="glass-card flex flex-col items-center text-center p-8 group hover:border-green-500/30">
                            <div className="mb-4 group-hover:-translate-y-1 transition-transform">{item.icon}</div>
                            <h3 className="font-bold text-white mb-2">{item.title}</h3>
                            <span className="text-green-400 font-medium text-sm px-3 py-1 bg-green-500/10 rounded-full">{item.stat}</span>
                        </motion.div>
                    ))}
                </div>
            </div>
        </div>
    );
}
