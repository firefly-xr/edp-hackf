import { motion } from 'framer-motion';
import {
    ShieldCheck, Star, Trophy,
    ArrowUp, TrendingUp, Award, Lock,
    CheckCircle2, Users, Flame, Zap
} from 'lucide-react';

export function ReputationCenter() {
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
                        <div className="p-2 rounded-xl bg-blue-500/10">
                            <ShieldCheck className="w-6 h-6 text-blue-400" />
                        </div>
                        <h1 className="text-3xl font-black text-white tracking-tight uppercase">Reputation Center</h1>
                    </div>
                    <p className="text-muted-foreground max-w-md text-sm">
                        Your professional standing in the decentralized engineering ecosystem. Trust is currency.
                    </p>
                </div>

                <div className="px-6 py-3 rounded-2xl bg-gradient-to-r from-blue-500/10 to-transparent border border-blue-500/20 flex items-center gap-4">
                    <div className="text-right">
                        <div className="text-[10px] text-muted-foreground uppercase font-black">Global Rank</div>
                        <div className="text-lg font-black text-white">#1,402</div>
                    </div>
                    <div className="w-10 h-10 rounded-full bg-blue-500/20 flex items-center justify-center border border-blue-500/30">
                        <TrendingUp className="w-5 h-5 text-blue-400" />
                    </div>
                </div>
            </div>

            <div className="grid lg:grid-cols-12 gap-8">
                {/* Left: Trust Breakdown */}
                <div className="lg:col-span-8 space-y-8">
                    <motion.div {...FADE_UP} className="glass-card p-8 border-white/10 relative overflow-hidden">
                        <div className="absolute top-0 right-0 w-64 h-64 bg-blue-500/5 blur-[80px] rounded-full" />

                        <div className="flex items-center gap-2 mb-8 relative z-10">
                            <Star className="w-5 h-5 text-yellow-400 fill-yellow-400" />
                            <h3 className="text-xl font-bold text-white uppercase tracking-tight">Trust Score Architecture</h3>
                        </div>

                        <div className="grid md:grid-cols-2 gap-12 relative z-10">
                            <div className="space-y-6">
                                {[
                                    { label: 'Technical Accuracy', score: 94, color: 'bg-green-400' },
                                    { label: 'Deadline Compliance', score: 88, color: 'bg-[#00f0ff]' },
                                    { label: 'Collaborative Rating', score: 76, color: 'bg-[#b026ff]' },
                                    { label: 'Code Cleanliness', score: 82, color: 'bg-blue-400' },
                                ].map((m, i) => (
                                    <div key={i} className="space-y-2">
                                        <div className="flex justify-between text-xs font-bold uppercase tracking-widest text-muted-foreground">
                                            <span>{m.label}</span>
                                            <span className="text-white">{m.score}%</span>
                                        </div>
                                        <div className="h-1.5 w-full bg-white/5 rounded-full overflow-hidden">
                                            <motion.div initial={{ width: 0 }} animate={{ width: `${m.score}%` }} className={`h-full ${m.color}`} />
                                        </div>
                                    </div>
                                ))}
                            </div>

                            <div className="bg-white/5 border border-white/10 p-6 rounded-2xl flex flex-col justify-center text-center">
                                <div className="text-xs text-muted-foreground uppercase font-black mb-2">Total XP Path</div>
                                <div className="text-5xl font-black text-white mb-2">28,450</div>
                                <div className="flex items-center justify-center gap-1 text-xs text-green-400 font-bold">
                                    <ArrowUp className="w-3 h-3" /> +1,200 this week
                                </div>
                            </div>
                        </div>
                    </motion.div>

                    {/* Impact Feed */}
                    <div className="space-y-6">
                        <h3 className="text-xl font-bold text-white flex items-center gap-2">
                            <Flame className="w-5 h-5 text-orange-500" /> Recent Impact Highlights
                        </h3>
                        <div className="space-y-4">
                            {[
                                { event: "Zero-Bugs Migration", project: "Nexus v2", impact: "Secured $2M in TVL Assets", date: "2d ago" },
                                { event: "Performance Optimization", project: "DEX UI", impact: "Increased Load Speed by 12%", date: "5d ago" },
                                { event: "Security Audit Contribution", project: "Stripe Sync", impact: "Mitigated 2 Critical Path Risks", date: "1w ago" },
                            ].map((item, i) => (
                                <motion.div
                                    key={i}
                                    {...FADE_UP}
                                    transition={{ delay: i * 0.1 }}
                                    className="glass-card p-5 border-white/10 hover:bg-white/5 transition-all flex items-center justify-between group"
                                >
                                    <div className="flex items-center gap-4">
                                        <div className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center border border-white/10">
                                            <CheckCircle2 className="w-5 h-5 text-green-400" />
                                        </div>
                                        <div>
                                            <h4 className="text-sm font-bold text-white group-hover:text-[#00f0ff] transition-colors">{item.event}</h4>
                                            <p className="text-[10px] text-muted-foreground font-black uppercase tracking-widest">{item.project} • {item.date}</p>
                                        </div>
                                    </div>
                                    <div className="text-right">
                                        <div className="text-xs font-bold text-white italic">"{item.impact}"</div>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Right: Badges & Levels */}
                <div className="lg:col-span-4 space-y-6">
                    <div className="glass-card p-8 border-yellow-400/30 bg-yellow-400/[0.02]">
                        <h3 className="text-sm font-black text-white uppercase tracking-widest mb-6 flex items-center gap-2">
                            <Award className="w-4 h-4 text-yellow-500" /> Unlocked Badges
                        </h3>
                        <div className="grid grid-cols-3 gap-4">
                            {[...Array(6)].map((_, i) => (
                                <div key={i} className="aspect-square rounded-2xl bg-white/5 border border-white/5 flex items-center justify-center relative group">
                                    {i < 3 ? (
                                        <>
                                            <Trophy className={`w-8 h-8 ${i === 0 ? 'text-yellow-500' : i === 1 ? 'text-slate-300' : 'text-orange-500'}`} />
                                            <div className="absolute -top-1 -right-1 w-4 h-4 bg-green-500 rounded-full border-2 border-black flex items-center justify-center">
                                                <CheckCircle2 className="w-2 h-2 text-white" />
                                            </div>
                                        </>
                                    ) : (
                                        <Lock className="w-6 h-6 text-muted-foreground/30" />
                                    )}
                                    <div className="absolute inset-0 bg-black/80 opacity-0 group-hover:opacity-100 transition-opacity rounded-2xl flex items-center justify-center p-2 text-center">
                                        <span className="text-[8px] font-black uppercase text-white tracking-widest leading-tight">Elite Committer</span>
                                    </div>
                                </div>
                            ))}
                        </div>
                        <button className="w-full mt-6 py-2.5 rounded-xl border border-white/10 text-xs font-bold text-muted-foreground hover:text-white transition-colors">
                            View Achievement Path
                        </button>
                    </div>

                    <div className="glass-card p-8 border-white/10 space-y-4">
                        <div className="flex items-center gap-3">
                            <Users className="w-5 h-5 text-[#b026ff]" />
                            <h4 className="text-sm font-bold text-white">Peer Recognition</h4>
                        </div>
                        <div className="p-4 bg-white/5 border border-white/5 rounded-xl italic text-[11px] text-muted-foreground">
                            "One of the best React developers I've collaborated with. Clean, typed, and efficient code."
                            <div className="mt-3 text-[10px] font-black text-[#00f0ff] uppercase not-italic">— Lead Dev @ Nexus</div>
                        </div>
                    </div>

                    <div className="glass-card p-8 border-dashed border-white/20 text-center">
                        <Zap className="w-8 h-8 text-yellow-400 mx-auto mb-4" />
                        <h4 className="text-sm font-bold text-white mb-2">Power Up Available</h4>
                        <p className="text-[10px] text-muted-foreground mb-4 leading-relaxed">Refer 3 qualified engineers to boost your Trust Score by 5 points permanently.</p>
                        <button className="w-full py-2 rounded-lg bg-yellow-400 text-black font-black text-[10px] uppercase">
                            Get Referral Link
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}
