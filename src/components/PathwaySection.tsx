import { motion } from 'framer-motion';
import {
    ArrowRight, BookOpen, Users, Briefcase, Code, Github,
    FileText, MessageSquare, Globe, Activity, Video,
    Search, Zap, Calculator, Building, CheckCircle, ChevronRight, Lock
} from 'lucide-react';

const FADE_UP = {
    initial: { opacity: 0, y: 30 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, margin: "-100px" },
    transition: { duration: 0.6 }
};

const STAGGER = {
    initial: { opacity: 0 },
    whileInView: { opacity: 1 },
    viewport: { once: true, margin: "-100px" },
    transition: { staggerChildren: 0.15 }
};

const ITEM = {
    initial: { opacity: 0, scale: 0.95, y: 20 },
    whileInView: { opacity: 1, scale: 1, y: 0 },
    transition: { duration: 0.5 }
};

export function PathwaySection() {
    return (
        <section className="relative py-32 overflow-hidden border-t border-white/10 bg-[#050505]">
            {/* Soft background gradients */}
            <div className="absolute top-0 left-1/2 w-full h-[500px] bg-[#00f0ff]/5 blur-[120px] -translate-x-1/2 pointer-events-none" />
            <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-[#b026ff]/5 blur-[150px] pointer-events-none" />

            <div className="container mx-auto px-6 max-w-7xl relative z-10 space-y-32">

                {/* Header Section */}
                <motion.div
                    {...FADE_UP}
                    className="text-center space-y-6 max-w-4xl mx-auto"
                >
                    <motion.div
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="inline-flex items-center px-4 py-2 rounded-full border border-[#00f0ff]/30 bg-[#00f0ff]/10 text-[#00f0ff] text-sm font-semibold uppercase tracking-widest backdrop-blur-md shadow-[0_0_20px_rgba(0,240,255,0.2)]"
                    >
                        Welcome to the Future of Work
                    </motion.div>
                    <h2 className="text-4xl md:text-6xl font-extrabold tracking-tight text-white pb-2">
                        The New Pathway <br /> for <span className="text-gradient">Engineers</span>
                    </h2>
                    <p className="text-lg md:text-xl text-muted-foreground mx-auto max-w-2xl leading-relaxed">
                        Discover how modern engineers gain real-world experience, build irrefutable credibility, and generate income—<strong className="text-white">without traditional hiring.</strong>
                    </p>
                </motion.div>

                {/* 🧩 SECTION 1 — Apprenticeship Model */}
                <div className="space-y-12">
                    <motion.div {...FADE_UP} className="text-center">
                        <h3 className="text-2xl md:text-4xl font-bold mb-3 text-white">Apprenticeship Model</h3>
                        <p className="text-xl text-muted-foreground">The New Internship</p>
                    </motion.div>

                    <div className="bg-white/5 border border-white/10 rounded-3xl p-8 relative overflow-hidden backdrop-blur-md">
                        {/* Flow steps container */}
                        <div className="flex flex-col md:flex-row items-center justify-between gap-4 mb-12 relative z-10">
                            {[
                                { text: "Learn", icon: <BookOpen className="w-5 h-5" /> },
                                { text: "Assist", icon: <Users className="w-5 h-5" /> },
                                { text: "Contribute", icon: <Code className="w-5 h-5" /> },
                                { text: "Earn", icon: <Zap className="w-5 h-5" /> }
                            ].map((step, i) => (
                                <div key={i} className="flex flex-col md:flex-row items-center gap-4 w-full">
                                    <motion.div
                                        initial={{ opacity: 0, x: -20 }}
                                        whileInView={{ opacity: 1, x: 0 }}
                                        viewport={{ once: true }}
                                        transition={{ delay: i * 0.15 }}
                                        className="flex-1 flex flex-col items-center justify-center p-6 bg-black/40 rounded-2xl border border-white/10 relative group hover:border-[#00f0ff]/50 transition-colors w-full"
                                    >
                                        <div className="text-[#00f0ff] mb-2 group-hover:scale-110 transition-transform">
                                            {step.icon}
                                        </div>
                                        <span className="font-bold text-white text-lg tracking-wide">{step.text}</span>
                                    </motion.div>
                                    {i < 3 && <ChevronRight className="hidden md:block w-8 h-8 text-white/20 animate-pulse" />}
                                </div>
                            ))}
                        </div>

                        {/* Detail Cards */}
                        <motion.div
                            variants={STAGGER}
                            initial="initial"
                            whileInView="whileInView"
                            viewport={{ once: true }}
                            className="grid md:grid-cols-4 gap-6"
                        >
                            {[
                                { title: "Work Under Seniors", icon: <Briefcase /> },
                                { title: "Join Early Startups", icon: <Zap /> },
                                { title: "Small Tech Agencies", icon: <Building /> },
                                { title: "Live Prod Projects", icon: <Activity /> }
                            ].map((card, idx) => (
                                <motion.div key={idx} variants={ITEM} className="glass-card hover:-translate-y-1 relative group overflow-hidden border-white/5">
                                    <div className="absolute top-0 right-0 w-16 h-16 bg-[#00f0ff]/10 blur-xl group-hover:bg-[#00f0ff]/20 transition-all rounded-full" />
                                    <div className="text-[#00f0ff] mb-4 p-3 bg-white/5 inline-block rounded-xl [&>svg]:w-6 [&>svg]:h-6">
                                        {card.icon}
                                    </div>
                                    <h4 className="font-semibold text-white/90 group-hover:text-white transition-colors">{card.title}</h4>
                                </motion.div>
                            ))}
                        </motion.div>

                        <div className="mt-12 text-center pb-2">
                            <motion.span
                                {...FADE_UP}
                                className="inline-flex items-center gap-2 text-[#00f0ff] bg-[#00f0ff]/10 px-6 py-3 rounded-full font-medium"
                            >
                                👉 Gain real experience without formal hiring.
                            </motion.span>
                        </div>
                    </div>
                </div>

                {/* 🧩 SECTION 2 — Reputation-Based Hiring */}
                <div className="space-y-12">
                    <motion.div {...FADE_UP} className="text-center">
                        <h3 className="text-2xl md:text-4xl font-bold mb-3 text-white">Open Ecosystems</h3>
                        <p className="text-xl text-muted-foreground">Reputation replaces resumes</p>
                    </motion.div>

                    <div className="grid md:grid-cols-12 gap-8 items-center">
                        <div className="md:col-span-7 grid grid-cols-2 md:grid-cols-3 gap-4">
                            {[
                                { title: "GitHub Activity", icon: <Github /> },
                                { title: "Open-Source", icon: <Code /> },
                                { title: "Tech Blogs", icon: <FileText /> },
                                { title: "Dev Communities", icon: <Users /> },
                                { title: "Stack Overflow", icon: <MessageSquare /> },
                                { title: "Discord Participation", icon: <Globe /> }
                            ].map((card, i) => (
                                <motion.div
                                    key={i}
                                    initial={{ opacity: 0, scale: 0.9 }}
                                    whileInView={{ opacity: 1, scale: 1 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: i * 0.1 }}
                                    className="glass-card flex flex-col items-center text-center group"
                                >
                                    <div className="text-[#b026ff] mb-3 group-hover:scale-110 transition-transform [&>svg]:w-8 [&>svg]:h-8">
                                        {card.icon}
                                    </div>
                                    <span className="font-medium text-sm text-white/80">{card.title}</span>
                                </motion.div>
                            ))}
                        </div>
                        <motion.div
                            {...FADE_UP}
                            className="md:col-span-5 relative"
                        >
                            <div className="glass rounded-3xl p-8 relative overflow-hidden backdrop-blur-xl border border-white/20">
                                <div className="absolute inset-0 bg-gradient-to-br from-[#00f0ff]/10 to-[#b026ff]/10 blur-2xl" />
                                <div className="relative z-10 text-center space-y-6">
                                    <h4 className="text-2xl font-bold text-white mb-2">Trust Meter</h4>

                                    <div className="relative w-48 h-48 mx-auto">
                                        <svg className="w-full h-full transform -rotate-90" viewBox="0 0 100 100">
                                            <circle cx="50" cy="50" r="40" fill="none" stroke="rgba(255,255,255,0.1)" strokeWidth="8" />
                                            <motion.circle
                                                cx="50" cy="50" r="40" fill="none" stroke="url(#gradient)" strokeWidth="8"
                                                strokeDasharray="251.2" strokeDashoffset="251.2"
                                                strokeLinecap="round"
                                                whileInView={{ strokeDashoffset: 50 }}
                                                viewport={{ once: true }}
                                                transition={{ duration: 1.5, delay: 0.5 }}
                                            />
                                            <defs>
                                                <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="0%">
                                                    <stop offset="0%" stopColor="#00f0ff" />
                                                    <stop offset="100%" stopColor="#b026ff" />
                                                </linearGradient>
                                            </defs>
                                        </svg>
                                        <div className="absolute inset-0 flex flex-col items-center justify-center">
                                            <span className="text-4xl font-black text-white">92</span>
                                            <span className="text-xs text-[#00f0ff] uppercase tracking-wider font-bold">Top 5%</span>
                                        </div>
                                    </div>
                                    <div className="flex items-center justify-center gap-2 text-sm text-green-400 font-medium">
                                        <CheckCircle className="w-4 h-4" /> Highly Reliable
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </div>

                {/* 🧩 SECTION 3 — Build Public Proof */}
                <div className="space-y-12">
                    <motion.div {...FADE_UP} className="text-center">
                        <h3 className="text-2xl md:text-4xl font-bold mb-3 text-white">Build Public Proof</h3>
                        <p className="text-xl text-muted-foreground w-max mx-auto px-6 py-2 rounded-full border border-white/10 bg-white/5">Show, don't claim.</p>
                    </motion.div>

                    <div className="grid md:grid-cols-2 gap-8 items-center cursor-default">
                        <motion.div {...FADE_UP} className="space-y-6">
                            {[
                                { title: "Deployed Applications", icon: <Globe className="text-[#00f0ff]" /> },
                                { title: "Real Users & Usage Metrics", icon: <Users className="text-[#b026ff]" /> },
                                { title: "Performance Dashboards", icon: <Activity className="text-green-400" /> },
                                { title: "GitHub Commits & Contributions", icon: <Github className="text-gray-300" /> },
                                { title: "Tech Problem-Solving Videos", icon: <Video className="text-red-400" /> },
                            ].map((item, i) => (
                                <motion.div
                                    key={i}
                                    initial={{ x: -30, opacity: 0 }}
                                    whileInView={{ x: 0, opacity: 1 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: i * 0.1 }}
                                    className="flex items-center gap-4 p-4 rounded-xl bg-white/5 border border-white/5 hover:bg-white/10 hover:border-white/20 transition-all font-medium text-white/90"
                                >
                                    <div className="p-2 bg-black/50 rounded-lg">{item.icon}</div>
                                    <span className="text-lg">{item.title}</span>
                                </motion.div>
                            ))}
                        </motion.div>

                        <motion.div
                            {...FADE_UP}
                            className="flex flex-col gap-6 items-center justify-center py-12"
                        >
                            <div className="glass p-6 rounded-2xl border-dashed border-2 border-red-500/30 opacity-60 grayscale scale-95 flex flex-col items-center w-64 text-center relative">
                                <FileText className="w-12 h-12 mb-3 text-red-400" />
                                <span className="font-bold text-lg text-white/50">Traditional Resume</span>
                                <span className="text-xs text-white/40 mt-1">Claims without proof</span>
                            </div>

                            <div className="transform rotate-90 md:rotate-0 my-[-10px] md:my-0 z-10 w-12 h-12 bg-black rounded-full border border-white/20 flex items-center justify-center text-white/50">
                                <span className="font-black">VS</span>
                            </div>

                            <div className="glass p-8 rounded-2xl border-[#00f0ff]/50 shadow-[0_0_40px_rgba(0,240,255,0.2)] flex flex-col items-center w-72 text-center scale-105 relative overflow-hidden group">
                                <div className="absolute inset-0 bg-gradient-to-t from-[#00f0ff]/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                                <Activity className="w-16 h-16 mb-4 text-[#00f0ff]" />
                                <span className="font-bold text-2xl text-white">Live Proof</span>
                                <span className="text-sm text-[#00f0ff] font-medium mt-2">Undeniable Experience</span>
                            </div>
                        </motion.div>
                    </div>
                </div>

                {/* 🧩 SECTION 4 — Local Economy Digitization */}
                <div className="bg-gradient-to-r from-black via-slate-900 to-black rounded-3xl border border-white/10 p-1 relative overflow-hidden">
                    <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-yellow-500/10 blur-[150px] pointer-events-none" />

                    <div className="bg-black/40 backdrop-blur-xl rounded-[23px] p-8 md:p-12">
                        <motion.div {...FADE_UP} className="mb-12">
                            <h3 className="text-2xl md:text-4xl font-bold mb-4 text-white">Local Economy Digitization</h3>
                            <div className="flex flex-col md:flex-row md:items-center gap-4 justify-between">
                                <p className="text-xl text-[#00f0ff] font-medium">Digitizing small businesses = massive opportunity</p>
                                <div className="px-5 py-2 rounded-xl bg-orange-500/20 border border-orange-500/30 text-orange-400 font-bold text-sm tracking-wide shadow-[0_0_15px_rgba(249,115,22,0.2)]">
                                    “Millions of MSMEs still operate offline.”
                                </div>
                            </div>
                        </motion.div>

                        <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
                            {[
                                { title: "POS & Billing", icon: <Calculator /> },
                                { title: "WhatsApp Ordering", icon: <MessageSquare /> },
                                { title: "SEO & Online UI", icon: <Search /> },
                                { title: "Workflow Automation", icon: <Zap /> },
                                { title: "Bookkeeping", icon: <FileText /> }
                            ].map((card, i) => (
                                <motion.div
                                    key={i}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: i * 0.1 }}
                                    className="glass-card flex flex-col items-center justify-center text-center p-6 border-white/5 hover:border-yellow-500/30 group"
                                >
                                    <div className="text-yellow-500 mb-4 bg-yellow-500/10 p-3 rounded-full group-hover:scale-110 transition-transform">
                                        {card.icon}
                                    </div>
                                    <h4 className="font-semibold text-sm text-white/90">{card.title}</h4>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </div>

                {/* 🧩 SECTION 5 — Economic Participation */}
                <div className="space-y-12">
                    <motion.div {...FADE_UP} className="text-center">
                        <h3 className="text-2xl md:text-4xl font-bold mb-3 text-white">Economic Participation</h3>
                        <p className="text-xl text-muted-foreground">Multiple income streams without hiring</p>
                    </motion.div>

                    <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-4">
                        {[
                            { name: "Freelance", icon: <Code /> },
                            { name: "SaaS Micro", icon: <Zap /> },
                            { name: "Automation", icon: <Activity /> },
                            { name: "Maintenance", icon: <Lock /> },
                            { name: "Consulting", icon: <MessageSquare /> },
                            { name: "Edu Content", icon: <Video /> },
                            { name: "Remote Gigs", icon: <Globe /> }
                        ].map((stream, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, scale: 0.8 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true }}
                                transition={{ delay: i * 0.05 }}
                                className="glass border border-white/10 rounded-2xl p-5 flex flex-col items-center justify-center text-center hover:bg-white/10 hover:border-[#b026ff]/50 hover:shadow-[0_0_20px_rgba(176,38,255,0.2)] transition-all group"
                            >
                                <div className="text-white/60 group-hover:text-[#b026ff] transition-colors mb-3">
                                    {stream.icon}
                                </div>
                                <span className="font-bold text-sm text-white">{stream.name}</span>
                            </motion.div>
                        ))}
                    </div>
                </div>

                {/* 🧩 SECTION 6 — The New Career Model */}
                <div className="space-y-12">
                    <motion.div {...FADE_UP} className="text-center">
                        <h3 className="text-2xl md:text-4xl font-bold mb-3 text-white">The New Entry-Level Model</h3>
                    </motion.div>

                    <div className="relative">
                        {/* Connecting Line */}
                        <div className="hidden md:block absolute top-[60px] left-0 w-full h-[2px] bg-white/10 z-0"></div>

                        <div className="grid md:grid-cols-4 gap-8 relative z-10">
                            {[
                                { phase: "Phase 1", title: "Skill & Proof", items: ["build real projects", "deploy solutions", "contribute publicly"], color: "from-blue-500/20 to-blue-500/5", border: "border-blue-500/30", text: "text-blue-400" },
                                { phase: "Phase 2", title: "Micro Income", items: ["freelancing", "local solutions", "remote gigs"], color: "from-green-500/20 to-green-500/5", border: "border-green-500/30", text: "text-green-400" },
                                { phase: "Phase 3", title: "Reputation", items: ["real users", "testimonials", "portfolio"], color: "from-purple-500/20 to-purple-500/5", border: "border-purple-500/30", text: "text-purple-400" },
                                { phase: "Phase 4", title: "Opportunities", items: ["startups", "product companies", "global remote"], color: "from-orange-500/20 to-orange-500/5", border: "border-orange-500/30", text: "text-orange-400" },
                            ].map((step, i) => (
                                <motion.div
                                    key={i}
                                    initial={{ opacity: 0, y: 30 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: i * 0.15 }}
                                    className={`glass rounded-2xl border ${step.border} p-6 relative overflow-hidden`}
                                >
                                    <div className={`absolute top-0 left-0 w-full h-1 bg-gradient-to-r ${step.color} to-transparent`} />
                                    <div className={`text-xs font-black uppercase tracking-widest ${step.text} mb-2 bg-black/40 inline-block px-3 py-1 rounded-full`}>{step.phase}</div>
                                    <h4 className="text-xl font-bold text-white mb-6 mt-2">{step.title}</h4>
                                    <ul className="space-y-3">
                                        {step.items.map((item, j) => (
                                            <li key={j} className="flex items-start gap-2 text-sm text-white/80 font-medium">
                                                <div className={`mt-1 w-1.5 h-1.5 rounded-full bg-current ${step.text}`} />
                                                {item}
                                            </li>
                                        ))}
                                    </ul>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </div>

                {/* 🧩 SECTION 7 — Mindset Shift */}
                <motion.div {...FADE_UP} className="max-w-4xl mx-auto">
                    <div className="grid md:grid-cols-2 rounded-3xl overflow-hidden border border-white/10 shadow-2xl">
                        <div className="bg-white/5 p-12 flex flex-col justify-center items-center text-center border-b md:border-b-0 md:border-r border-white/10">
                            <span className="px-4 py-1.5 rounded-full bg-red-500/10 text-red-400 font-bold text-xs uppercase tracking-widest mb-6">Old Mindset</span>
                            <p className="text-xl font-medium text-white/60 italic">
                                "I need a company to give me experience."
                            </p>
                        </div>
                        <div className="bg-[#00f0ff]/5 p-12 flex flex-col justify-center items-center text-center relative overflow-hidden">
                            <div className="absolute inset-0 bg-gradient-to-br from-[#00f0ff]/10 to-transparent blur-2xl" />
                            <span className="px-4 py-1.5 rounded-full bg-[#00f0ff]/20 text-[#00f0ff] font-bold text-xs uppercase tracking-widest mb-6 relative z-10 neon-border">New Reality</span>
                            <p className="text-2xl font-bold text-white relative z-10 text-glow">
                                Experience comes from solving real problems.
                            </p>
                        </div>
                    </div>
                </motion.div>

                {/* 🧩 SECTION 8 — Final Insight Banner */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="relative rounded-[2rem] overflow-hidden p-1 bg-gradient-to-r from-[#00f0ff] via-[#b026ff] to-[#00f0ff] bg-[length:200%_auto] animate-gradient"
                >
                    <div className="bg-[#050505] rounded-[1.8rem] p-10 md:p-16 text-center relative z-10 h-full w-full">
                        <h2 className="text-3xl md:text-5xl font-extrabold text-white mb-10 leading-tight">
                            The pathway is not disappearing. <br />
                            <span className="text-gradient text-glow">It is decentralizing.</span>
                        </h2>

                        <div className="flex flex-col md:flex-row items-center justify-center gap-6 md:gap-12">
                            <div className="flex flex-col items-center">
                                <span className="text-sm font-bold text-white/50 uppercase tracking-widest mb-3">From</span>
                                <div className="glass px-6 py-4 rounded-xl flex items-center gap-3 grayscale opacity-60">
                                    <Building className="w-5 h-5" />
                                    <span className="font-semibold text-white">1 employer → lifetime career</span>
                                </div>
                            </div>

                            <div className="flex flex-col justify-center items-center hidden md:flex">
                                <ArrowRight className="w-8 h-8 text-white/40" />
                            </div>
                            <div className="flex flex-col justify-center items-center md:hidden my-2">
                                <ArrowRight className="w-8 h-8 text-white/40 transform rotate-90" />
                            </div>

                            <div className="flex flex-col items-center">
                                <span className="text-sm font-bold text-[#00f0ff] uppercase tracking-widest mb-3">To</span>
                                <div className="glass px-8 py-5 rounded-xl flex items-center gap-3 border-[#00f0ff]/50 shadow-[0_0_30px_rgba(0,240,255,0.15)] bg-[#00f0ff]/5 group hover:bg-[#00f0ff]/10 transition-all cursor-default">
                                    <Globe className="w-6 h-6 text-[#00f0ff]" />
                                    <span className="font-bold text-white">Multiple income streams <br className="hidden md:block" /> → reputation → opportunity flow</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </motion.div>

            </div>
        </section>
    );
}
