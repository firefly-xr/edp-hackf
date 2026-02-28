import { motion } from 'framer-motion';
import {
    Flag, CheckCircle2,
    Trophy, Zap, GitBranch, Wallet, LayoutGrid,
    Info, PlayCircle
} from 'lucide-react';

const MILESTONES = [
    {
        id: 1,
        title: "First Challenge",
        desc: "Complete a beginner-friendly technical micro-bounty.",
        status: "completed",
        type: "Action",
        icon: Zap,
        tip: "Filter by 'Beginner' in the Start Experience hub to find your first match."
    },
    {
        id: 2,
        title: "First Approved Solution",
        desc: "Get your logic verified by our AI or a senior peer.",
        status: "in-progress",
        type: "Verification",
        icon: CheckCircle2,
        tip: "Use the AI Mentor panel to check for edge cases before you submit."
    },
    {
        id: 3,
        title: "First Live Contribution",
        desc: "Merge your first feature into a real production project.",
        status: "locked",
        type: "Production",
        icon: GitBranch,
        tip: "Look for 'Help Wanted' tags in the Live Projects feed."
    },
    {
        id: 4,
        title: "First Payment Earned",
        desc: "Secure your first bounty settlement in your wallet.",
        status: "locked",
        type: "Earnings",
        icon: Wallet,
        tip: "Ensure your profile is 100% complete to unlock withdrawals."
    },
    {
        id: 5,
        title: "Portfolio Completed",
        desc: "Publish your automated proof-of-competence profile.",
        status: "locked",
        type: "Career",
        icon: LayoutGrid,
        tip: "At least 3 verified contributions are required for a high-trust rating."
    }
];

export function GrowthTracker() {
    return (
        <div className="space-y-8 pb-20">
            {/* Header Area */}
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
                <div>
                    <div className="flex items-center gap-3 mb-2">
                        <div className="p-2 rounded-xl bg-yellow-400/10">
                            <Flag className="w-6 h-6 text-yellow-500" />
                        </div>
                        <h1 className="text-3xl font-black text-white tracking-tight uppercase">Growth Journey Tracker</h1>
                    </div>
                    <p className="text-muted-foreground max-w-md text-sm">
                        Your interactive roadmap from Day One to Hired. Complete milestones to unlock new opportunities.
                    </p>
                </div>

                <div className="px-4 py-2 rounded-xl bg-white/5 border border-white/10 flex items-center gap-3">
                    <div className="text-right">
                        <div className="text-[10px] text-muted-foreground uppercase font-black">Current Tier</div>
                        <div className="text-xs font-bold text-white">Aspiring Architect</div>
                    </div>
                    <div className="w-8 h-8 rounded-full bg-yellow-400/20 flex items-center justify-center border border-yellow-400/30">
                        <span className="text-sm font-black text-yellow-500">I</span>
                    </div>
                </div>
            </div>

            {/* Timeline UI */}
            <div className="relative space-y-12">
                {/* Vertical Line Connector */}
                <div className="absolute left-[30px] top-6 bottom-6 w-[2px] bg-gradient-to-b from-green-500 via-yellow-500 to-white/5 hidden md:block" />

                {MILESTONES.map((step, i) => (
                    <motion.div
                        key={step.id}
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ delay: i * 0.1 }}
                        className={`relative grid md:grid-cols-[64px_1fr] gap-8 group ${step.status === 'locked' ? 'opacity-50' : ''}`}
                    >
                        {/* Milestone Number / Icon */}
                        <div className="flex justify-center pt-2 relative z-10">
                            <div className={`w-12 h-12 rounded-2xl flex items-center justify-center border-2 transition-all duration-500 ${step.status === 'completed'
                                ? 'bg-green-500/20 border-green-500 shadow-[0_0_15px_rgba(34,197,94,0.3)]'
                                : step.status === 'in-progress'
                                    ? 'bg-yellow-400/20 border-yellow-400 animate-pulse'
                                    : 'bg-white/5 border-white/10'
                                }`}>
                                <step.icon className={`w-6 h-6 ${step.status === 'completed' ? 'text-green-400' :
                                    step.status === 'in-progress' ? 'text-yellow-400' : 'text-muted-foreground'
                                    }`} />
                            </div>
                        </div>

                        {/* Content Card */}
                        <div className={`glass-card p-6 border-white/10 transition-all duration-300 ${step.status === 'in-progress' ? 'border-yellow-400/30 bg-yellow-400/[0.02]' : ''
                            }`}>
                            <div className="flex flex-col md:flex-row justify-between items-start gap-4 mb-4">
                                <div>
                                    <div className="flex items-center gap-3 mb-1">
                                        <span className={`text-[10px] font-black uppercase tracking-widest px-2 py-0.5 rounded ${step.status === 'completed' ? 'bg-green-500 text-black' :
                                            step.status === 'in-progress' ? 'bg-yellow-400 text-black' : 'bg-white/10 text-muted-foreground'
                                            }`}>
                                            {step.status === 'in-progress' ? 'Active Step' : step.status}
                                        </span>
                                        <span className="text-[10px] text-[#00f0ff] font-bold uppercase">{step.type} Task</span>
                                    </div>
                                    <h3 className="text-xl font-bold text-white uppercase tracking-tight">{step.title}</h3>
                                </div>

                                {step.status === 'in-progress' && (
                                    <button className="px-4 py-2 bg-white text-black text-xs font-black rounded-xl hover:bg-[#00f0ff] transition-all flex items-center gap-2">
                                        <PlayCircle className="w-4 h-4" /> Quick Start
                                    </button>
                                )}
                            </div>

                            <p className="text-sm text-muted-foreground mb-6 max-w-2xl">
                                {step.desc}
                            </p>

                            {/* Tip Area */}
                            <div className="bg-white/5 border-l-2 border-[#00f0ff] p-4 rounded-r-xl flex items-start gap-3">
                                <Info className="w-4 h-4 text-[#00f0ff] mt-0.5 shrink-0" />
                                <div className="space-y-1">
                                    <p className="text-xs font-bold text-white">Mentor Tip</p>
                                    <p className="text-xs text-muted-foreground leading-relaxed">{step.tip}</p>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                ))}
            </div>

            <div className="glass-card p-8 border-white/10 mt-12 bg-gradient-to-r from-[#00f0ff]/5 to-[#b026ff]/5 text-center">
                <Trophy className="w-12 h-12 text-yellow-400 mx-auto mb-4" />
                <h3 className="text-xl font-bold text-white mb-2">Exclusive Rewards Awaiting</h3>
                <p className="text-sm text-muted-foreground max-w-lg mx-auto mb-6">
                    Completing the "Portfolio Completed" milestone unlocks premium access to direct referrals with our 50+ partner tech agencies.
                </p>
                <div className="h-2 w-full max-w-md mx-auto bg-white/5 rounded-full overflow-hidden">
                    <motion.div initial={{ width: 0 }} animate={{ width: '20%' }} className="h-full bg-gradient-to-r from-[#00f0ff] to-[#b026ff]" />
                </div>
                <p className="text-[10px] text-muted-foreground mt-2 uppercase font-black tracking-widest">Total Progress: 20%</p>
            </div>
        </div>
    );
}
