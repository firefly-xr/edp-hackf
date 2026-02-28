import { motion } from 'framer-motion';
import {
    Wallet,
    History, CreditCard, PieChart, TrendingUp,
    Gift, Wallet2, CheckCircle2, Clock, Landmark
} from 'lucide-react';

export function EarningsRewards() {
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
                        <div className="p-2 rounded-xl bg-green-400/10">
                            <Wallet className="w-6 h-6 text-green-400" />
                        </div>
                        <h1 className="text-3xl font-black text-white tracking-tight uppercase">Earnings & Rewards</h1>
                    </div>
                    <p className="text-muted-foreground max-w-md text-sm">
                        Track your bounties, manage payouts, and unlock ecosystem bonuses through your performance.
                    </p>
                </div>

                <div className="flex gap-3">
                    <button className="px-6 py-2.5 rounded-xl bg-white/5 border border-white/10 text-white text-xs font-black uppercase flex items-center gap-2 hover:bg-white/10 transition-all">
                        <History className="w-4 h-4" /> History
                    </button>
                    <button className="px-6 py-2.5 rounded-xl bg-green-500 text-black text-xs font-black uppercase shadow-[0_0_20px_rgba(34,197,94,0.3)] flex items-center gap-2 hover:opacity-90 transition-all">
                        <Landmark className="w-4 h-4" /> Withdraw
                    </button>
                </div>
            </div>

            <div className="grid lg:grid-cols-12 gap-8">
                {/* Left: Wallet & Status */}
                <div className="lg:col-span-8 space-y-8">
                    {/* Wallet Main Card */}
                    <motion.div {...FADE_UP} className="glass-card p-10 border-white/10 bg-gradient-to-br from-green-500/10 to-transparent relative overflow-hidden">
                        <div className="absolute top-0 right-0 w-80 h-80 bg-green-500/5 blur-[100px] rounded-full" />

                        <div className="flex flex-col md:flex-row justify-between gap-12 relative z-10">
                            <div className="space-y-4">
                                <div className="text-xs text-muted-foreground uppercase font-black tracking-widest flex items-center gap-2">
                                    <Wallet2 className="w-4 h-4 text-green-400" /> Available Balance
                                </div>
                                <div className="text-6xl font-black text-white tracking-tighter">$4,280.00</div>
                                <div className="flex items-center gap-4 pt-4">
                                    <div className="flex items-center gap-1.5 text-xs text-green-400 font-bold bg-green-400/10 px-3 py-1.5 rounded-full border border-green-400/20">
                                        <TrendingUp className="w-3.5 h-3.5" /> +$1,200 this week
                                    </div>
                                    <div className="text-xs text-muted-foreground font-medium">Pending: <span className="text-white">$850</span></div>
                                </div>
                            </div>

                            <div className="grid grid-cols-2 gap-4">
                                <div className="glass-card p-6 border-white/5 bg-white/5 flex flex-col justify-center">
                                    <div className="text-[10px] text-muted-foreground uppercase font-black mb-1">Total Earned</div>
                                    <div className="text-xl font-black text-white">$12,450</div>
                                </div>
                                <div className="glass-card p-6 border-white/5 bg-white/5 flex flex-col justify-center">
                                    <div className="text-[10px] text-muted-foreground uppercase font-black mb-1">Active Bounties</div>
                                    <div className="text-xl font-black text-white">03</div>
                                </div>
                            </div>
                        </div>
                    </motion.div>

                    {/* Active Bounties Feed */}
                    <div className="space-y-6">
                        <h3 className="text-xl font-bold text-white flex items-center gap-2 uppercase tracking-tight">
                            <Clock className="w-5 h-5 text-yellow-400" /> Pending Payouts & Bounties
                        </h3>
                        <div className="space-y-4">
                            {[
                                { title: "Nexus v2 Integration", status: "Reviewing", amount: "$450.00", date: "Apr 12" },
                                { title: "DEX Dashboard Refactor", status: "In Progress", amount: "$1,200.00", date: "Apr 15" },
                                { title: "Solidity Security Audit", status: "Verified", amount: "$800.00", date: "Apr 10" },
                            ].map((item, i) => (
                                <motion.div
                                    key={i}
                                    {...FADE_UP}
                                    transition={{ delay: i * 0.1 }}
                                    className="glass-card p-6 border-white/10 hover:border-white/20 transition-all flex items-center justify-between group cursor-pointer"
                                >
                                    <div className="flex items-center gap-6">
                                        <div className="h-12 w-12 rounded-xl bg-white/5 flex items-center justify-center border border-white/10">
                                            <CreditCard className="w-5 h-5 text-muted-foreground group-hover:text-white transition-colors" />
                                        </div>
                                        <div>
                                            <h4 className="text-sm font-bold text-white uppercase tracking-tight">{item.title}</h4>
                                            <p className="text-[10px] text-muted-foreground font-black uppercase tracking-widest">{item.date} • {item.status}</p>
                                        </div>
                                    </div>
                                    <div className="text-right">
                                        <div className="text-lg font-black text-white mb-1">{item.amount}</div>
                                        {item.status === 'Verified' ? (
                                            <div className="text-[9px] font-black text-green-400 uppercase flex items-center gap-1 justify-end">
                                                <CheckCircle2 className="w-2.5 h-2.5" /> Ready for withdrawal
                                            </div>
                                        ) : (
                                            <div className="text-[9px] font-black text-yellow-400 uppercase flex items-center gap-1 justify-end">
                                                <Clock className="w-2.5 h-2.5" /> Settlement in 24h
                                            </div>
                                        )}
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Right: Rewards & Targets */}
                <div className="lg:col-span-4 space-y-6">
                    <div className="glass-card p-8 border-[#00f0ff]/30 bg-[#00f0ff]/[0.02] relative group">
                        <Gift className="w-8 h-8 text-[#00f0ff] mb-4 group-hover:rotate-12 transition-transform" />
                        <h3 className="font-bold text-white mb-2 uppercase tracking-tight">Active Rewards</h3>
                        <p className="text-xs text-muted-foreground mb-6 leading-relaxed">
                            Maintain a 9.5+ trust score for 30 days to unlock $500 monthly recurring bonus.
                        </p>
                        <div className="space-y-2">
                            <div className="h-2 w-full bg-white/5 rounded-full overflow-hidden">
                                <motion.div initial={{ width: 0 }} animate={{ width: '75%' }} className="h-full bg-[#00f0ff] shadow-[0_0_10px_#00f0ff80]" />
                            </div>
                            <div className="flex justify-between text-[10px] font-black uppercase text-[#00f0ff] tracking-widest">
                                <span>22 Days Met</span>
                                <span>8 Days left</span>
                            </div>
                        </div>
                    </div>

                    <div className="glass-card p-8 border-white/10">
                        <h3 className="text-sm font-black text-white uppercase tracking-widest mb-6 flex items-center gap-2">
                            <PieChart className="w-4 h-4 text-muted-foreground" /> Earning Distribution
                        </h3>
                        <div className="space-y-4">
                            {[
                                { label: 'Micro Bounties', val: '45%', color: 'from-blue-400' },
                                { label: 'Live Projects', val: '35%', color: 'from-[#b026ff]' },
                                { label: 'AI Mentorship', val: '20%', color: 'from-green-400' },
                            ].map((dist, i) => (
                                <div key={i} className="space-y-1.5 text-[10px]">
                                    <div className="flex justify-between font-bold text-muted-foreground tracking-widest uppercase">
                                        <span>{dist.label}</span>
                                        <span className="text-white">{dist.val}</span>
                                    </div>
                                    <div className="h-1 w-full bg-white/5 rounded-full overflow-hidden">
                                        <div className={`h-full w-[${dist.val}] bg-gradient-to-r ${dist.color}`} />
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    <div className="p-8 rounded-3xl bg-black border border-white/10 text-center space-y-4 relative overflow-hidden group">
                        <div className="absolute inset-0 bg-gradient-to-br from-white/5 items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity" />
                        <div className="text-[10px] text-muted-foreground uppercase font-black">Next Milestone Reward</div>
                        <div className="text-2xl font-black text-white">$2,500.00</div>
                        <p className="text-[10px] text-muted-foreground leading-relaxed">Awarded upon achieving "Senior Evaluator" status.</p>
                        <button className="w-full py-2 rounded-xl bg-white/5 border border-white/10 text-[10px] font-black text-white uppercase group-hover:bg-white group-hover:text-black transition-all">
                            View Milestones
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}
