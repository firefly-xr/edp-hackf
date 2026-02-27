import { motion } from 'framer-motion';
import { ArrowRight, Code2, ShieldCheck, TrendingUp, Star } from 'lucide-react';
import { Link } from 'react-router-dom';

const FADE_UP = {
    initial: { opacity: 0, y: 30 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.5 }
};

export function Home() {
    return (
        <div className="pt-24 pb-16">
            {/* Hero Section */}
            <section className="container mx-auto px-6 max-w-7xl pt-12 pb-24 lg:pt-20">
                <div className="flex flex-col items-center text-center space-y-8">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.6, ease: "easeOut" }}
                        className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-white/20 bg-white/5 backdrop-blur-md mb-4"
                    >
                        <span className="w-2 h-2 rounded-full bg-[#00f0ff] animate-pulse" />
                        <span className="text-sm font-medium text-white/80">Platform v2.0 Live</span>
                    </motion.div>

                    <motion.h1
                        {...FADE_UP}
                        className="text-5xl md:text-7xl font-extrabold tracking-tight max-w-4xl"
                    >
                        Don't get hired. <br />
                        <span className="text-gradient text-glow">Get trusted.</span>
                    </motion.h1>

                    <motion.p
                        {...FADE_UP}
                        transition={{ delay: 0.1 }}
                        className="text-lg md:text-xl text-muted-foreground max-w-2xl"
                    >
                        Welcome to the Experience Economy. Engineers earn verified standing by solving real micro-problems. Reputation replaces resumes.
                    </motion.p>

                    <motion.div
                        {...FADE_UP}
                        transition={{ delay: 0.2 }}
                        className="flex flex-col sm:flex-row items-center gap-4 pt-4"
                    >
                        <Link
                            to="/dashboard/engineer"
                            className="px-8 py-4 rounded-xl font-bold bg-white text-black hover:bg-gray-100 transition-colors flex items-center gap-2"
                        >
                            Join as Engineer <ArrowRight className="w-4 h-4" />
                        </Link>
                        <Link
                            to="/dashboard/business"
                            className="px-8 py-4 rounded-xl font-bold border border-white/20 glass hover:bg-white/10 transition-all flex items-center gap-2 shadow-[0_0_15px_#00f0ff1a] hover:shadow-[0_0_25px_#00f0ff4d]"
                        >
                            Post a Problem
                        </Link>
                    </motion.div>
                </div>
            </section>

            {/* Stats Section */}
            <section className="border-y border-white/10 bg-white/[0.02] py-12">
                <div className="container mx-auto px-6">
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-8 divide-x divide-white/10">
                        {[
                            { label: 'Verified Engineers', value: '45,210+' },
                            { label: 'Problems Solved', value: '1M+' },
                            { label: 'Total Earnings', value: '$12M+' },
                            { label: 'Avg AI Evaluation', value: '1.2s' },
                        ].map((stat, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: i * 0.1 }}
                                className="flex flex-col items-center text-center px-4"
                            >
                                <div className="text-3xl md:text-4xl font-bold text-white mb-2">{stat.value}</div>
                                <div className="text-sm font-medium text-muted-foreground uppercase tracking-wider">{stat.label}</div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* How it Works */}
            <section className="container mx-auto px-6 py-24 max-w-7xl">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-5xl font-bold mb-4">How SkillChain Works</h2>
                    <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
                        A continuous contribution ecosystem driven by AI assessment and blockchain-verified reputation.
                    </p>
                </div>

                <div className="grid md:grid-cols-3 gap-8">
                    {[
                        {
                            icon: <Code2 className="w-8 h-8 text-[#00f0ff]" />,
                            title: "1. Businesses Post Problems",
                            desc: "Real-world engineering micro-problems are posted to the marketplace with a bounty and difficulty rating."
                        },
                        {
                            icon: <TrendingUp className="w-8 h-8 text-[#b026ff]" />,
                            title: "2. Engineers Submit Solutions",
                            desc: "Engineers browse problems, submit their code, and our AI immediately evaluates approach, performance, and style."
                        },
                        {
                            icon: <ShieldCheck className="w-8 h-8 text-green-400" />,
                            title: "3. Earn Verified Experience",
                            desc: "Approved solutions yield Reputation XP and immediate financial rewards. Your profile becomes irrefutable proof of skill."
                        }
                    ].map((item, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.2 }}
                            className="glass-card flex flex-col items-start"
                        >
                            <div className="p-3 rounded-xl bg-white/5 mb-6 neon-border relative group">
                                {item.icon}
                                <div className="absolute inset-0 bg-current opacity-20 blur-xl group-hover:opacity-40 transition-opacity" />
                            </div>
                            <h3 className="text-xl font-bold mb-3 text-white">{item.title}</h3>
                            <p className="text-muted-foreground">{item.desc}</p>
                        </motion.div>
                    ))}
                </div>
            </section>

            {/* Testimonials Section */}
            <section className="border-y border-white/10 bg-white/[0.02] py-24">
                <div className="container mx-auto px-6 max-w-7xl">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-5xl font-bold mb-4">Trusted by Industry Leaders</h2>
                        <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
                            See how the Experience Economy is changing the way we work.
                        </p>
                    </div>

                    <div className="grid md:grid-cols-3 gap-8">
                        {[
                            { name: "Sarah J.", role: "Senior Engineer", company: "TechNova", text: "SkillChain's AI evaluation is incredibly accurate. I built my entire verified portfolio here without ever submitting a traditional resume." },
                            { name: "Marcus T.", role: "CTO", company: "DataFlux", text: "We stopped interviewing for frontend roles. We just post micro-problems on SkillChain and hire the engineers who consistently score in the top 5%." },
                            { name: "Elena R.", role: "Freelance", company: "Independent", text: "The immediate payouts and purely merit-based system is exactly what the industry needed. Pure code, pure trust." }
                        ].map((testimonial, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, scale: 0.95 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true }}
                                transition={{ delay: i * 0.1 }}
                                className="glass rounded-2xl p-8 relative overflow-hidden group"
                            >
                                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-[#00f0ff] to-[#b026ff] opacity-0 group-hover:opacity-100 transition-opacity" />
                                <div className="flex items-center gap-1 mb-6">
                                    {[...Array(5)].map((_, j) => (
                                        <Star key={j} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                                    ))}
                                </div>
                                <p className="text-white/90 italic mb-6">"{testimonial.text}"</p>
                                <div>
                                    <div className="font-bold text-white">{testimonial.name}</div>
                                    <div className="text-sm text-muted-foreground">{testimonial.role} @ {testimonial.company}</div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
}
