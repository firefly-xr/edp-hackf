import { motion } from 'framer-motion';
import { ShieldAlert, Trophy, Award, Zap, GitBranch, Target, Brain, TerminalSquare } from 'lucide-react';

export function DashboardOverview({ user, displayName, initial }: any) {
    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="space-y-8"
        >
            <div className="grid lg:grid-cols-12 gap-8">
                {/* Profile Summary Card */}
                <div className="lg:col-span-4 space-y-6">
                    <div className="glass-card p-6 border-white/10 relative overflow-hidden">
                        <div className="absolute top-0 right-0 w-32 h-32 bg-[#00f0ff]/10 blur-[50px] rounded-full pointer-events-none" />
                        <div className="flex items-center gap-4 mb-6 relative z-10">
                            <div className="relative w-16 h-16 rounded-2xl bg-gradient-to-br from-[#00f0ff] to-[#b026ff] p-[2px]">
                                <div className="w-full h-full bg-black rounded-[14px] flex items-center justify-center text-xl font-black overflow-hidden object-cover">
                                    {user?.photoURL ? (
                                        <img src={user.photoURL} alt={displayName} className="w-full h-full object-cover" />
                                    ) : (
                                        initial
                                    )}
                                </div>
                                <div className="absolute -bottom-2 -right-2 bg-black border border-white/20 rounded-full p-1 shadow-lg">
                                    <ShieldAlert className="w-3 h-3 text-[#00f0ff]" />
                                </div>
                            </div>
                            <div className="flex-1 overflow-hidden">
                                <h3 className="font-bold text-lg text-white truncate">{displayName}</h3>
                                <p className="text-xs text-[#00f0ff] font-medium tracking-wide truncate">{user?.email}</p>
                            </div>
                        </div>

                        <div className="space-y-4 relative z-10">
                            <div>
                                <div className="flex justify-between text-xs mb-1">
                                    <span className="text-muted-foreground">Profile Completion</span>
                                    <span className="font-bold text-white">85%</span>
                                </div>
                                <div className="h-1.5 w-full bg-white/10 rounded-full overflow-hidden">
                                    <motion.div initial={{ width: 0 }} animate={{ width: '85%' }} className="h-full bg-green-400" />
                                </div>
                            </div>

                            <div className="pt-4 border-t border-white/10">
                                <div className="flex items-center justify-between mb-2">
                                    <div className="flex items-center gap-2">
                                        <Trophy className="w-4 h-4 text-yellow-400" />
                                        <span className="text-sm font-semibold text-white">Trust Meter</span>
                                    </div>
                                    <span className="text-xs text-yellow-400 font-bold bg-yellow-400/10 px-2 py-0.5 rounded-md">Top 15%</span>
                                </div>
                                <div className="h-2 w-full bg-white/10 rounded-full overflow-hidden">
                                    <motion.div initial={{ width: 0 }} animate={{ width: '85%' }} className="h-full bg-gradient-to-r from-yellow-500 to-yellow-300" />
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="glass-card p-6 border-white/10">
                        <h3 className="font-bold text-white mb-4 flex items-center gap-2"><Award className="w-4 h-4 text-[#b026ff]" /> Earnings</h3>
                        <div className="grid grid-cols-2 gap-4">
                            <div className="bg-white/5 rounded-xl p-3 border border-white/10 text-center">
                                <div className="text-xs text-muted-foreground mb-1">Bounty</div>
                                <div className="text-xl font-bold text-green-400">$340.00</div>
                            </div>
                            <div className="bg-white/5 rounded-xl p-3 border border-white/10 text-center">
                                <div className="text-xs text-muted-foreground mb-1">Badges</div>
                                <div className="text-xl font-bold text-white">4</div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Quick Actions & AI Feed */}
                <div className="lg:col-span-8 space-y-6">
                    <div className="grid md:grid-cols-3 gap-4">
                        <div className="glass-card p-5 border-[#00f0ff]/20 bg-[#00f0ff]/[0.02] hover:bg-[#00f0ff]/10 transition-all cursor-pointer group">
                            <Zap className="w-8 h-8 text-[#00f0ff] mb-4" />
                            <h4 className="font-bold text-white mb-1 text-sm">Challenges</h4>
                            <p className="text-[10px] text-muted-foreground">Start micro-bounties.</p>
                        </div>
                        <div className="glass-card p-5 border-[#b026ff]/20 bg-[#b026ff]/[0.02] hover:bg-[#b026ff]/10 transition-all cursor-pointer group">
                            <GitBranch className="w-8 h-8 text-[#b026ff] mb-4" />
                            <h4 className="font-bold text-white mb-1 text-sm">Live Projects</h4>
                            <p className="text-[10px] text-muted-foreground">Real production code.</p>
                        </div>
                        <div className="glass-card p-5 border-green-500/20 bg-green-500/[0.02] hover:bg-green-500/10 transition-all cursor-pointer group">
                            <Target className="w-8 h-8 text-green-400 mb-4" />
                            <h4 className="font-bold text-white mb-1 text-sm">Apprenticeships</h4>
                            <p className="text-[10px] text-muted-foreground">Startup tracks.</p>
                        </div>
                    </div>

                    <div className="grid md:grid-cols-2 gap-6">
                        <div className="glass-card p-6 border-white/10">
                            <h3 className="font-bold text-white mb-4 flex items-center gap-2 text-sm"><Brain className="w-4 h-4 text-[#00f0ff]" /> AI Guidance</h3>
                            <div className="space-y-3">
                                <div className="bg-white/5 border-l-2 border-yellow-400 p-3 rounded-r-lg">
                                    <h5 className="text-[11px] font-bold text-white mb-1">Performance Tip</h5>
                                    <p className="text-[10px] text-muted-foreground">Optimize your recent React loops.</p>
                                </div>
                                <div className="bg-white/5 border-l-2 border-green-400 p-3 rounded-r-lg">
                                    <h5 className="text-[11px] font-bold text-white mb-1">Success</h5>
                                    <p className="text-[10px] text-muted-foreground">Clean TS interfaces verified.</p>
                                </div>
                            </div>
                        </div>

                        <div className="glass-card p-6 border-white/10">
                            <h3 className="font-bold text-white mb-4 flex items-center gap-2 text-sm"><TerminalSquare className="w-4 h-4 text-purple-400" /> Recent Activity</h3>
                            <div className="space-y-2">
                                <div className="text-[10px] p-2 rounded bg-white/5 border border-white/5 flex justify-between">
                                    <span className="text-white">Auth Flow Fix</span>
                                    <span className="text-[#00f0ff]">Verified</span>
                                </div>
                                <div className="text-[10px] p-2 rounded bg-white/5 border border-white/5 flex justify-between">
                                    <span className="text-white">Landing Page Nav</span>
                                    <span className="text-muted-foreground">Merged</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </motion.div>
    );
}
