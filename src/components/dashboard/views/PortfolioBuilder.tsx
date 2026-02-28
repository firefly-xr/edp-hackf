import { motion } from 'framer-motion';
import {
    LayoutGrid, Star, Rocket, Code2,
    CheckCircle2, Globe, ExternalLink,
    Eye, Share2, BarChart3, ShieldCheck,
    Briefcase, Zap, Plus, Download, Copy
} from 'lucide-react';

export function PortfolioBuilder() {
    const FADE_UP = {
        initial: { opacity: 0, y: 10 },
        animate: { opacity: 1, y: 0 }
    };

    return (
        <div className="space-y-8 pb-20">
            {/* Header Area */}
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
                <div>
                    <div className="flex items-center gap-3 mb-2">
                        <div className="p-2 rounded-xl bg-purple-400/10">
                            <LayoutGrid className="w-6 h-6 text-purple-400" />
                        </div>
                        <h1 className="text-3xl font-black text-white tracking-tight uppercase">Portfolio Builder</h1>
                    </div>
                    <p className="text-muted-foreground max-w-md text-sm">
                        Proof of competence, not just a resume. Automated highlights of your real-world contributions and impact.
                    </p>
                </div>

                <div className="flex gap-3">
                    <button className="px-6 py-2.5 rounded-xl bg-white/5 border border-white/10 text-white text-xs font-black uppercase flex items-center gap-2 hover:bg-white/10 transition-all">
                        <Download className="w-4 h-4" /> Export CV
                    </button>
                    <button className="px-6 py-2.5 rounded-xl bg-gradient-to-r from-[#00f0ff] to-[#b026ff] text-white text-xs font-black uppercase shadow-[0_0_20px_rgba(0,240,255,0.3)] flex items-center gap-2 hover:opacity-90 transition-all">
                        <Globe className="w-4 h-4" /> Publish Live
                    </button>
                </div>
            </div>

            <div className="grid lg:grid-cols-12 gap-8">
                {/* Left: Verified Showcase */}
                <div className="lg:col-span-8 space-y-8">
                    {/* Performance Metrics Bar */}
                    <motion.div {...FADE_UP} className="glass-card p-8 border-white/10 grid grid-cols-2 md:grid-cols-4 gap-8">
                        {[
                            { label: "Tasks Verified", val: "24", icon: CheckCircle2, color: "text-green-400" },
                            { label: "Lines Reviewed", val: "12k+", icon: Code2, color: "text-[#00f0ff]" },
                            { label: "Ecosystem Impact", val: "High", icon: BarChart3, color: "text-[#b026ff]" },
                            { label: "Trust Score", val: "9.8", icon: ShieldCheck, color: "text-yellow-400" },
                        ].map((stat, i) => (
                            <div key={i} className="text-center group">
                                <stat.icon className={`w-6 h-6 ${stat.color} mx-auto mb-3 group-hover:scale-110 transition-transform`} />
                                <div className="text-2xl font-black text-white">{stat.val}</div>
                                <div className="text-[10px] text-muted-foreground uppercase font-black tracking-widest">{stat.label}</div>
                            </div>
                        ))}
                    </motion.div>

                    {/* Verified Projects Feed */}
                    <div className="space-y-6">
                        <h3 className="text-xl font-bold text-white flex items-center gap-2">
                            <Rocket className="w-5 h-5 text-[#00f0ff]" /> Verified Project Showcase
                        </h3>

                        <div className="grid md:grid-cols-2 gap-6">
                            {[
                                { title: "Nexus Auth System", role: "Contributor", impact: "Auth flow latency reduced by 40%", tags: ["React", "Firebase"], color: "from-blue-500/20" },
                                { title: "SkillChain Smart Protocol", role: "Lead Reviewer", impact: "Zero-vulnerability certification achieved", tags: ["Solidity", "Hardhat"], color: "from-purple-500/20" },
                                { title: "DEX Dashboard UI", role: "Contributor", impact: "Implemented 12 responsive charts", tags: ["D3.js", "Tailwind"], color: "from-[#00f0ff]/20" },
                                { title: "Node.js Cache Layer", role: "Backend Contributor", impact: "Memory usage optimized by 15%", tags: ["Redis", "Node.js"], color: "from-green-500/20" },
                            ].map((proj, i) => (
                                <motion.div
                                    key={i}
                                    {...FADE_UP}
                                    transition={{ delay: i * 0.1 }}
                                    className={`glass-card p-6 border-white/10 bg-gradient-to-br ${proj.color} to-transparent group hover:border-white/30 transition-all flex flex-col`}
                                >
                                    <div className="flex justify-between items-start mb-4">
                                        <div className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center">
                                            <Briefcase className="w-5 h-5 text-white/50" />
                                        </div>
                                        <div className="flex gap-2">
                                            <button className="p-2 rounded-lg bg-white/5 hover:bg-white/10 transition-colors"><ExternalLink className="w-3.5 h-3.5 text-muted-foreground" /></button>
                                            <button className="p-2 rounded-lg bg-white/5 hover:bg-white/10 transition-colors"><Eye className="w-3.5 h-3.5 text-muted-foreground" /></button>
                                        </div>
                                    </div>
                                    <h4 className="text-lg font-bold text-white mb-1">{proj.title}</h4>
                                    <div className="text-[10px] font-black text-[#00f0ff] uppercase tracking-[0.2em] mb-3">{proj.role}</div>
                                    <p className="text-[11px] text-muted-foreground italic mb-6">"{proj.impact}"</p>
                                    <div className="mt-auto flex gap-2">
                                        {proj.tags.map(t => <span key={t} className="text-[9px] text-muted-foreground bg-white/5 px-2 py-0.5 rounded border border-white/5">{t}</span>)}
                                    </div>
                                </motion.div>
                            ))}

                            {/* Manual Add Card */}
                            <div className="glass-card p-6 border-dashed border-white/20 bg-transparent flex flex-col items-center justify-center gap-3 group cursor-pointer hover:border-white/40 transition-all">
                                <div className="p-3 rounded-full bg-white/5 group-hover:scale-110 transition-transform">
                                    <Plus className="w-6 h-6 text-muted-foreground" />
                                </div>
                                <div className="text-[10px] font-black text-muted-foreground uppercase tracking-widest text-center">Add personal project<br />(Requires Verification)</div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Right: Summary & Sharing */}
                <div className="lg:col-span-4 space-y-6">
                    <motion.div {...FADE_UP} transition={{ delay: 0.2 }} className="glass-card p-8 border-[#b026ff]/30 bg-[#b026ff]/[0.02] text-center">
                        <div className="relative w-24 h-24 mx-auto mb-6">
                            <div className="absolute inset-0 bg-gradient-to-r from-[#00f0ff] to-[#b026ff] rounded-2xl blur-lg opacity-40 animate-pulse" />
                            <div className="relative w-full h-full bg-black rounded-2xl border border-white/10 flex items-center justify-center">
                                <Zap className="w-10 h-10 text-white" />
                            </div>
                        </div>
                        <h3 className="text-xl font-bold text-white mb-2 uppercase tracking-tight">Portfolio Score</h3>
                        <div className="text-4xl font-black text-[#00f0ff] mb-2 tracking-tighter">Gold Tier</div>
                        <p className="text-[10px] text-muted-foreground uppercase font-black tracking-widest leading-relaxed">
                            Top 5% of all active<br />SkillChain engineers
                        </p>
                    </motion.div>

                    <div className="glass-card p-8 border-white/10 space-y-6">
                        <h4 className="text-xs font-black text-white uppercase tracking-widest flex items-center gap-2">
                            <Share2 className="w-4 h-4 text-muted-foreground" /> Share Profile
                        </h4>
                        <div className="space-y-3">
                            <div className="p-3 rounded-xl bg-white/5 border border-white/10 text-[10px] font-mono text-muted-foreground truncate flex items-center justify-between group">
                                skillchain.ai/u/engineer_0x42
                                <Copy className="w-3 h-3 group-hover:text-white cursor-pointer" />
                            </div>
                            <div className="flex gap-3">
                                <button className="flex-1 py-2 rounded-lg bg-[#00f0ff]/10 text-[#00f0ff] text-[10px] font-black uppercase hover:bg-[#00f0ff]/20 transition-all">LinkedIn</button>
                                <button className="flex-1 py-2 rounded-lg bg-[#b026ff]/10 text-[#b026ff] text-[10px] font-black uppercase hover:bg-[#b026ff]/20 transition-all">Twitter</button>
                            </div>
                        </div>
                    </div>

                    <div className="glass-card p-8 border-white/10 bg-white/5 animate-pulse">
                        <div className="flex items-center gap-3 mb-4">
                            <Star className="w-5 h-5 text-yellow-500" />
                            <h4 className="text-sm font-bold text-white">Next Achievement</h4>
                        </div>
                        <p className="text-xs text-muted-foreground mb-4">Complete 1 more "Security" tagged bounty to unlock the Secure Coder Badge.</p>
                        <div className="h-1.5 w-full bg-white/10 rounded-full overflow-hidden">
                            <div className="h-full w-[80%] bg-yellow-500" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
