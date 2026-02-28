import { motion } from 'framer-motion';
import { Star, ShieldCheck, Github } from 'lucide-react';

export function Reputation() {
    return (
        <div className="pt-32 pb-16 min-h-screen">
            <div className="container mx-auto px-6 max-w-7xl">
                <div className="text-center mb-16">
                    <h1 className="text-4xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-400">Reputation & Proof</h1>
                    <p className="text-xl text-muted-foreground mt-4 max-w-2xl mx-auto">Build an irrefutable portfolio. Proof replaces your resume.</p>
                </div>

                {/* Placeholder content */}
                <div className="grid md:grid-cols-3 gap-8">
                    {[
                        { title: "Trust Score", icon: <Star className="text-yellow-400 w-8 h-8" />, desc: "Top 5% of all developers" },
                        { title: "Verified Skills", icon: <ShieldCheck className="text-green-400 w-8 h-8" />, desc: "12 AI-Assessed Languages" },
                        { title: "GitHub Sync", icon: <Github className="text-gray-400 w-8 h-8" />, desc: "Continuous code contribution" }
                    ].map((item, i) => (
                        <motion.div key={i} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.1 }} className="glass-card text-center p-8">
                            <div className="flex justify-center mb-4">{item.icon}</div>
                            <h3 className="text-xl font-bold text-white mb-2">{item.title}</h3>
                            <p className="text-muted-foreground">{item.desc}</p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </div>
    );
}
