import { motion } from 'framer-motion';
import { Store, Calculator, Smartphone, Zap } from 'lucide-react';

export function BusinessSolutions() {
    return (
        <div className="pt-32 pb-16 min-h-screen">
            <div className="container mx-auto px-6 max-w-7xl">
                <div className="text-center mb-16">
                    <h1 className="text-4xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-yellow-400 to-orange-500">Business Digitization</h1>
                    <p className="text-xl text-muted-foreground mt-4 max-w-2xl mx-auto">Help local businesses go digital. Build POS, WhatsApp ordering, and automation.</p>
                </div>

                <div className="grid md:grid-cols-4 gap-6">
                    {[
                        { title: "POS & Billing", icon: <Calculator className="w-6 h-6" /> },
                        { title: "WhatsApp Ordering", icon: <Smartphone className="w-6 h-6" /> },
                        { title: "Local SEO & Web", icon: <Store className="w-6 h-6" /> },
                        { title: "Process Automation", icon: <Zap className="w-6 h-6" /> }
                    ].map((item, i) => (
                        <motion.div key={i} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.1 }} className="glass-card text-center p-6 border-white/5 hover:border-yellow-500/30 group">
                            <div className="text-yellow-500 mb-4 bg-yellow-500/10 p-4 rounded-full inline-block group-hover:scale-110 transition-transform">
                                {item.icon}
                            </div>
                            <h4 className="font-semibold text-white">{item.title}</h4>
                        </motion.div>
                    ))}
                </div>
            </div>
        </div>
    );
}
