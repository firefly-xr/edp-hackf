import { motion } from 'framer-motion';
import { ArrowRight, Code2, ShieldCheck, Star, Target, Briefcase, Zap, CheckCircle, Wallet, GraduationCap, Building2, TrendingUp, Users } from 'lucide-react';
import { Link } from 'react-router-dom';
import { PathwaySection } from '../components/PathwaySection';
import { useAuth } from '../contexts/AuthContext';
const FADE_UP = {
    initial: { opacity: 0, y: 30 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.5 }
};

export function Home() {
    const { user } = useAuth();
    return (
        <div className="pt-24 pb-16">
            {/* Hero Section */}
            <section className="container mx-auto px-6 max-w-7xl pt-12 pb-24 lg:pt-20">
                <div className="flex flex-col lg:flex-row items-center gap-12">
                    {/* Left Column - Text Content */}
                    <div className="flex-1 text-center lg:text-left space-y-8 relative z-10 mt-10 lg:mt-0">
                        <motion.div
                            initial={{ opacity: 0, scale: 0.8 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.6 }}
                            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-[#00f0ff]/30 bg-[#00f0ff]/10 text-[#00f0ff] backdrop-blur-md mb-2 shadow-[0_0_20px_rgba(0,240,255,0.2)]"
                        >
                            <span className="w-2 h-2 rounded-full bg-[#00f0ff] animate-pulse" />
                            <span className="text-sm font-semibold tracking-wide">Engineer Growth Ecosystem</span>
                        </motion.div>

                        <motion.h1
                            {...FADE_UP}
                            className="text-5xl md:text-6xl lg:text-7xl font-extrabold tracking-tight leading-[1.1]"
                        >
                            Build real experience, prove your skills, and unlock <span className="text-gradient text-glow">opportunities.</span>
                        </motion.h1>

                        <motion.p
                            {...FADE_UP}
                            transition={{ delay: 0.1 }}
                            className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto lg:mx-0 leading-relaxed"
                        >
                            Work on real projects, collaborate with teams, build trusted reputation, and grow your engineering career without waiting to be hired.
                        </motion.p>

                        <motion.div
                            {...FADE_UP}
                            transition={{ delay: 0.2 }}
                            className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 pt-4"
                        >
                            {user ? (
                                <Link
                                    to="/dashboard/engineer/experience"
                                    className="px-8 py-4 rounded-xl font-bold bg-[#00f0ff] text-black hover:opacity-90 transition-opacity flex items-center gap-2 shadow-[0_0_20px_#00f0ff80]"
                                >
                                    Engineering Workspace <ArrowRight className="w-4 h-4" />
                                </Link>
                            ) : (
                                <Link
                                    to="/signin"
                                    className="px-8 py-4 rounded-xl font-bold bg-gradient-to-r from-[#00f0ff] to-[#b026ff] text-white hover:opacity-90 transition-opacity flex items-center gap-2 shadow-[0_0_20px_#b026ff4d]"
                                >
                                    Start Building Experience <ArrowRight className="w-4 h-4" />
                                </Link>
                            )}
                            <Link
                                to="/dashboard/business"
                                className="px-8 py-4 rounded-xl font-bold border border-white/20 glass hover:bg-white/10 transition-all flex items-center gap-2 shadow-[0_0_15px_rgba(255,255,255,0.05)] hover:shadow-[0_0_25px_rgba(255,255,255,0.1)]"
                            >
                                For Businesses
                            </Link>
                        </motion.div>
                    </div>

                    {/* Right Column - Visual Elements */}
                    <div className="flex-1 w-full max-w-md relative pb-10">
                        {/* Background glow for right column */}
                        <div className="absolute inset-0 bg-gradient-to-tr from-[#00f0ff]/20 to-[#b026ff]/20 blur-[80px] rounded-full pointer-events-none" />

                        <div className="relative z-10 space-y-6">
                            {/* Floating tech icons */}
                            <motion.div
                                animate={{ y: [-10, 10, -10] }}
                                transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
                                className="absolute -top-10 -right-4 w-14 h-14 bg-white/5 border border-white/10 rounded-2xl flex items-center justify-center text-[#00f0ff] glass z-20"
                            >
                                <Code2 className="w-7 h-7" />
                            </motion.div>
                            <motion.div
                                animate={{ y: [10, -10, 10] }}
                                transition={{ repeat: Infinity, duration: 5, ease: "easeInOut" }}
                                className="absolute -bottom-6 -left-6 w-16 h-16 bg-white/5 border border-white/10 rounded-2xl flex items-center justify-center text-green-400 glass z-20"
                            >
                                <ShieldCheck className="w-8 h-8" />
                            </motion.div>

                            {/* Floating Reputation Card */}
                            <motion.div
                                initial={{ opacity: 0, x: 20 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ duration: 0.6, delay: 0.3 }}
                                className="glass-card flex items-center gap-6 p-6 border-white/10 shadow-2xl relative overflow-hidden"
                            >
                                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-[#00f0ff] to-[#b026ff]" />
                                <div className="relative w-20 h-20 flex-shrink-0">
                                    <svg className="w-full h-full transform -rotate-90" viewBox="0 0 100 100">
                                        <circle cx="50" cy="50" r="40" fill="none" stroke="rgba(255,255,255,0.1)" strokeWidth="8" />
                                        <motion.circle
                                            cx="50" cy="50" r="40" fill="none" stroke="url(#hero-gradient)" strokeWidth="8"
                                            strokeDasharray="251.2" strokeDashoffset="251.2"
                                            strokeLinecap="round"
                                            animate={{ strokeDashoffset: 50 }}
                                            transition={{ duration: 1.5, delay: 0.8 }}
                                        />
                                        <defs>
                                            <linearGradient id="hero-gradient" x1="0%" y1="0%" x2="100%" y2="0%">
                                                <stop offset="0%" stopColor="#00f0ff" />
                                                <stop offset="100%" stopColor="#b026ff" />
                                            </linearGradient>
                                        </defs>
                                    </svg>
                                    <div className="absolute inset-0 flex items-center justify-center flex-col">
                                        <span className="text-xl font-black text-white">92</span>
                                    </div>
                                </div>
                                <div className="text-left">
                                    <div className="text-xs text-[#00f0ff] font-bold uppercase tracking-widest mb-1">Top 5% Talent</div>
                                    <h3 className="font-bold text-white text-lg">Trusted Reputation</h3>
                                    <p className="text-sm text-muted-foreground mt-1">Verified by AI & community.</p>
                                </div>
                            </motion.div>

                            {/* 3-Step Visual Card */}
                            <motion.div
                                initial={{ opacity: 0, x: 20 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ duration: 0.6, delay: 0.4 }}
                                className="glass-card p-6 border-white/10 shadow-2xl ml-8 relative"
                            >
                                <div className="flex items-center justify-between relative z-10">
                                    {['Learn', 'Build', 'Earn'].map((step, i) => (
                                        <div key={i} className="flex flex-col items-center gap-2 relative z-10 bg-black/20 p-2 rounded-xl backdrop-blur-md">
                                            <div className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-white font-bold relative group hover:border-[#b026ff]/50 hover:bg-[#b026ff]/10 transition-colors">
                                                {i + 1}
                                                <div className="absolute inset-0 bg-[#b026ff] opacity-0 group-hover:opacity-20 blur-md rounded-full transition-opacity" />
                                            </div>
                                            <span className="text-xs font-semibold text-white/80">{step}</span>
                                        </div>
                                    ))}
                                </div>
                                {/* Connecting line for steps */}
                                <div className="absolute top-[44px] left-12 right-12 h-[2px] bg-gradient-to-r from-transparent via-white/20 to-transparent pointer-events-none" />
                            </motion.div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Stats Section */}
            <section className="border-y border-white/10 bg-white/[0.02] py-12">
                <div className="container mx-auto px-6">
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-8 divide-x divide-white/10">
                        {[
                            { label: 'Verified Engineers', value: '1,250+' },
                            { label: 'Problems Solved', value: '8,500+' },
                            { label: 'Total Earnings', value: '$140k+' },
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



            {/* Bridging the Experience Gap */}
            <section className="container mx-auto px-6 py-24 max-w-7xl relative">
                <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-[#b026ff]/5 blur-[120px] pointer-events-none rounded-full" />

                <div className="text-center mb-16 relative z-10">
                    <h2 className="text-4xl md:text-5xl font-extrabold mb-4 text-white">Bridging the Experience Gap</h2>
                    <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
                        Traditional entry-level hiring is shrinking. Our platform creates a new pathway where fresh engineers gain real experience by solving real-world problems.
                    </p>
                </div>

                <div className="flex flex-col lg:flex-row gap-8 relative z-10">
                    {/* LEFT COLUMN: Students & Fresh Engineers */}
                    <div className="flex-1 glass-card p-8 md:p-10 border-[#00f0ff]/20 bg-[#00f0ff]/[0.02] shadow-[0_0_30px_rgba(0,240,255,0.05)] relative overflow-hidden group">
                        <div className="absolute top-0 right-0 w-32 h-32 bg-[#00f0ff]/10 blur-[50px] rounded-full group-hover:bg-[#00f0ff]/20 transition-colors" />

                        <div className="flex items-center gap-3 mb-8">
                            <div className="p-3 rounded-xl bg-[#00f0ff]/10 text-[#00f0ff]">
                                <GraduationCap className="w-6 h-6" />
                            </div>
                            <h3 className="text-2xl font-bold text-white">For Students & Fresh Engineers</h3>
                        </div>

                        <ul className="space-y-5">
                            {[
                                { icon: <Briefcase className="w-5 h-5 text-[#00f0ff]" />, text: "Real-world project experience" },
                                { icon: <Target className="w-5 h-5 text-[#00f0ff]" />, text: "Apprenticeship-style learning" },
                                { icon: <CheckCircle className="w-5 h-5 text-[#00f0ff]" />, text: "Verified proof of skills" },
                                { icon: <Zap className="w-5 h-5 text-[#00f0ff]" />, text: "AI feedback & skill growth" },
                                { icon: <Star className="w-5 h-5 text-[#00f0ff]" />, text: "Portfolio & reputation building" },
                                { icon: <Wallet className="w-5 h-5 text-[#00f0ff]" />, text: "Micro-earnings & financial participation" },
                                { icon: <ArrowRight className="w-5 h-5 text-[#00f0ff]" />, text: "Industry exposure without formal hiring" }
                            ].map((item, i) => (
                                <li key={i} className="flex items-start gap-3">
                                    <div className="mt-0.5">{item.icon}</div>
                                    <span className="text-white/80">{item.text}</span>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* RIGHT COLUMN: Businesses */}
                    <div className="flex-[0.85] glass-card p-8 md:p-10 border-white/5 bg-black/40 hover:bg-white/[0.02] transition-colors relative overflow-hidden">

                        <div className="flex items-center gap-3 mb-8">
                            <div className="p-3 rounded-xl bg-white/5 text-purple-400 border border-white/10">
                                <Building2 className="w-6 h-6" />
                            </div>
                            <h3 className="text-2xl font-bold text-white">For Businesses & Orgs</h3>
                        </div>

                        <ul className="space-y-5">
                            {[
                                { icon: <CheckCircle className="w-5 h-5 text-purple-400" />, text: "Solve real problems cost-effectively" },
                                { icon: <TrendingUp className="w-5 h-5 text-purple-400" />, text: "Evaluate talent through performance" },
                                { icon: <ShieldCheck className="w-5 h-5 text-purple-400" />, text: "Reduce hiring risk" },
                                { icon: <Users className="w-5 h-5 text-purple-400" />, text: "Access emerging skilled contributors" },
                                { icon: <Wallet className="w-5 h-5 text-purple-400" />, text: "Pay for results instead of resumes" }
                            ].map((item, i) => (
                                <li key={i} className="flex items-start gap-3">
                                    <div className="mt-0.5">{item.icon}</div>
                                    <span className="text-white/70">{item.text}</span>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>

                <div className="mt-16 text-center">
                    <div className="inline-block px-6 py-3 rounded-full border border-white/10 bg-white/5 backdrop-blur-sm">
                        <p className="text-white/80 font-medium tracking-wide">
                            <span className="text-[#00f0ff] font-bold">This is not a hiring platform.</span> It is a real experience ecosystem where contribution builds credibility and opportunity.
                        </p>
                    </div>
                </div>
            </section>
            <PathwaySection />

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
