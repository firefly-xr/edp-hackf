import { motion } from 'framer-motion';
import { Globe, Users, MessageSquare } from 'lucide-react';

export function Community() {
    return (
        <div className="pt-32 pb-16 min-h-screen">
            <div className="container mx-auto px-6 max-w-7xl">
                <div className="text-center mb-16">
                    <h1 className="text-4xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-orange-400 to-red-400">Community & Collaboration</h1>
                    <p className="text-xl text-muted-foreground mt-4 max-w-2xl mx-auto">Open-source contributions, developer guilds, and mentorship connections.</p>
                </div>

                <div className="grid md:grid-cols-3 gap-8">
                    {[
                        { title: "Open Source Hub", icon: <Globe className="text-blue-400 w-8 h-8" /> },
                        { title: "Developer Guilds", icon: <Users className="text-purple-400 w-8 h-8" /> },
                        { title: "Mentorship", icon: <MessageSquare className="text-green-400 w-8 h-8" /> }
                    ].map((item, i) => (
                        <motion.div key={i} initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} transition={{ delay: i * 0.1 }} className="glass-card flex flex-col items-center justify-center p-12 hover:border-orange-500/50 transition-colors cursor-pointer">
                            <div className="mb-4">{item.icon}</div>
                            <h3 className="font-bold text-white text-lg">{item.title}</h3>
                            <span className="text-xs text-orange-400 font-medium tracking-widest uppercase mt-4">Join Now</span>
                        </motion.div>
                    ))}
                </div>
            </div>
        </div>
    );
}
