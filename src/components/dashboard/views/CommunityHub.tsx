import { motion } from 'framer-motion';
import {
    Users, MessageSquare, Globe, Plus,
    Hash, Star,
    MessageCircle, GitBranch
} from 'lucide-react';

export function CommunityHub() {
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
                        <div className="p-2 rounded-xl bg-pink-500/10">
                            <Users className="w-6 h-6 text-pink-400" />
                        </div>
                        <h1 className="text-3xl font-black text-white tracking-tight uppercase">Community & Collaboration</h1>
                    </div>
                    <p className="text-muted-foreground max-w-md text-sm">
                        Connect with fellow engineers, join open source tasks, and team up for high-impact project bounties.
                    </p>
                </div>

                <div className="flex gap-3">
                    <button className="px-6 py-2.5 rounded-xl bg-white text-black text-xs font-black uppercase flex items-center gap-2 hover:bg-[#00f0ff] transition-all">
                        <Plus className="w-4 h-4" /> Start Thread
                    </button>
                </div>
            </div>

            <div className="grid lg:grid-cols-12 gap-8">
                {/* Main: Discussions & Shared Task Feed */}
                <div className="lg:col-span-8 space-y-8">
                    {/* Activity Feed */}
                    <div className="space-y-4">
                        <h3 className="text-sm font-black text-white uppercase tracking-widest flex items-center gap-2">
                            <MessageSquare className="w-4 h-4 text-pink-400" /> Professional Discussions
                        </h3>
                        {[
                            { title: "Optimizing React Server Components for High-Throughput APIs", user: "0xDevMaster", replies: 12, category: "Architecture" },
                            { title: "SkillChain Protocol: Security Review of v1 Migration Contract", user: "CryptoAudit", replies: 42, category: "Security" },
                            { title: "Framer Motion vs React Spring: Performance Benchmarks 2024", user: "MotionGen", replies: 8, category: "Frontend" },
                        ].map((post, i) => (
                            <motion.div
                                key={i}
                                {...FADE_UP}
                                transition={{ delay: i * 0.05 }}
                                className="glass-card p-6 border-white/10 hover:border-pink-500/30 transition-all cursor-pointer group flex items-center justify-between"
                            >
                                <div className="space-y-2">
                                    <div className="flex items-center gap-3">
                                        <span className="text-[9px] font-black text-pink-400 uppercase tracking-widest bg-pink-500/10 px-2 rounded border border-pink-500/20">{post.category}</span>
                                        <span className="text-[10px] text-muted-foreground">Posted by @{post.user}</span>
                                    </div>
                                    <h4 className="text-lg font-bold text-white group-hover:text-pink-400 transition-colors uppercase tracking-tight">{post.title}</h4>
                                </div>
                                <div className="flex items-center gap-1.5 text-muted-foreground font-black text-xs">
                                    <MessageCircle className="w-4 h-4" /> {post.replies}
                                </div>
                            </motion.div>
                        ))}
                    </div>

                    {/* Shared Tasks / Teams */}
                    <div className="space-y-6 pt-6">
                        <h3 className="text-sm font-black text-white uppercase tracking-widest flex items-center gap-2">
                            <GitBranch className="w-4 h-4 text-cyan-400" /> Collaborative Squads
                        </h3>
                        <div className="grid md:grid-cols-2 gap-6">
                            {[
                                { squad: "UI/UX Task Force", members: "4/5", task: "Redesign Marketplace", xp: "1500 XP/pp" },
                                { squad: "Backend Ops", members: "2/3", task: "Legacy DB Migration", xp: "2200 XP/pp" },
                            ].map((squad, i) => (
                                <motion.div
                                    key={i}
                                    {...FADE_UP}
                                    transition={{ delay: 0.2 + i * 0.1 }}
                                    className="glass-card p-6 border-white/10 hover:bg-white/5 transition-all flex flex-col gap-4 group"
                                >
                                    <div className="flex justify-between items-center text-xs font-black uppercase text-[#00f0ff] tracking-[0.2em]">
                                        <span>{squad.squad}</span>
                                        <span className="text-white bg-white/10 px-2 py-0.5 rounded">{squad.members}</span>
                                    </div>
                                    <div className="space-y-1">
                                        <p className="text-xs font-bold text-white uppercase tracking-tight">{squad.task}</p>
                                        <p className="text-[10px] text-green-400 font-black uppercase tracking-widest">Est. Reward: {squad.xp}</p>
                                    </div>
                                    <button className="w-full py-2 rounded-xl bg-white text-black font-black text-[10px] uppercase hover:bg-cyan-400 transition-all">
                                        Join Squad
                                    </button>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Right: Servers & Trends */}
                <div className="lg:col-span-4 space-y-6">
                    <div className="glass-card p-8 border-white/10">
                        <h3 className="text-xs font-black text-white uppercase tracking-widest mb-6 flex items-center gap-2">
                            <Hash className="w-4 h-4 text-muted-foreground" /> Popular Tags
                        </h3>
                        <div className="flex flex-wrap gap-2">
                            {['#React', '#Solidity', '#NextJS', '#Web3', '#Node', '#TypeScript', '#Tailwind'].map(tag => (
                                <span key={tag} className="px-3 py-1 rounded-full bg-white/5 border border-white/5 text-[10px] font-bold text-muted-foreground hover:text-white hover:border-white/20 transition-all cursor-pointer">
                                    {tag}
                                </span>
                            ))}
                        </div>
                    </div>

                    <div className="glass-card p-8 border-[#b026ff]/30 bg-[#b026ff]/[0.02] relative group">
                        <Star className="w-8 h-8 text-yellow-500 mb-4 group-hover:scale-110 transition-transform" />
                        <h3 className="text-sm font-black text-white uppercase tracking-widest mb-2">Ambassador Tracks</h3>
                        <p className="text-[11px] text-muted-foreground mb-6 leading-relaxed">
                            Contribute 20+ hours to community open source to unlock "Core Maintainer" status and priority bounty access.
                        </p>
                        <div className="h-1.5 w-full bg-white/5 rounded-full overflow-hidden">
                            <div className="h-full w-[40%] bg-gradient-to-r from-[#b026ff] to-cyan-400" />
                        </div>
                        <div className="mt-2 text-[9px] font-black text-muted-foreground uppercase text-right">8 Hours Logged</div>
                    </div>

                    <div className="glass-card p-8 border-white/10 space-y-6">
                        <h4 className="text-xs font-black text-white uppercase tracking-widest flex items-center gap-2">
                            <Globe className="w-4 h-4 text-blue-400" /> Active Ecosystems
                        </h4>
                        <div className="space-y-4">
                            {[
                                { name: 'EVM Core', status: 'High Volume', color: 'bg-green-400' },
                                { name: 'Solana Devs', status: 'Growing', color: 'bg-blue-400' },
                                { name: 'Rust Guild', status: 'Stable', color: 'bg-orange-400' },
                            ].map((eco, i) => (
                                <div key={i} className="flex items-center justify-between p-3 rounded-xl bg-white/5 border border-white/5 hover:bg-white/10 transition-colors cursor-pointer group">
                                    <div className="flex items-center gap-3">
                                        <div className={`w-2 h-2 rounded-full ${eco.color} shadow-[0_0_8px_currentColor]`} />
                                        <span className="text-[11px] font-bold text-white">{eco.name}</span>
                                    </div>
                                    <div className="text-[9px] font-black text-muted-foreground uppercase group-hover:text-white transition-colors">{eco.status}</div>
                                </div>
                            ))}
                        </div>
                        <button className="w-full py-2 bg-white/5 text-white text-[10px] font-black uppercase hover:bg-white hover:text-black transition-all rounded-lg">
                            Explore All Labs
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}
