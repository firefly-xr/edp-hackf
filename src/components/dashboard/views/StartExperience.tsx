import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
    Rocket, Zap, GitBranch, Target, Filter, ChevronRight,
    ArrowRight, Star, Clock, DollarSign, Users,
    Lock, MessageSquare, Code2, Activity
} from 'lucide-react';

type TabType = 'challenges' | 'projects' | 'apprenticeship';

const CATEGORIES = ['All', 'Beginner', 'Advanced', 'Paid', 'React', 'Node.js', 'Web3'];

export function StartExperience() {
    const [activeTab, setActiveTab] = useState<TabType>('challenges');
    const [filter, setFilter] = useState('All');

    const FADE_UP = {
        initial: { opacity: 0, y: 10 },
        animate: { opacity: 1, y: 0 },
        exit: { opacity: 0, y: -10 }
    };

    return (
        <div className="space-y-8 pb-20">
            {/* Header Area */}
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
                <div>
                    <div className="flex items-center gap-3 mb-2">
                        <div className="p-2 rounded-xl bg-[#00f0ff]/10">
                            <Rocket className="w-6 h-6 text-[#00f0ff]" />
                        </div>
                        <h1 className="text-3xl font-black text-white tracking-tight">EXPERIENCE HUB</h1>
                    </div>
                    <p className="text-muted-foreground max-w-md text-sm">
                        Transition from learning to earning. Select a track to begin your professional journey.
                    </p>
                </div>

                {/* Tab Switcher */}
                <div className="flex p-1 bg-white/5 border border-white/10 rounded-2xl backdrop-blur-sm self-start md:self-auto">
                    {[
                        { id: 'challenges', label: 'Challenges', icon: Zap },
                        { id: 'projects', label: 'Live Projects', icon: GitBranch },
                        { id: 'apprenticeship', label: 'Apprenticeship', icon: Target },
                    ].map((tab) => (
                        <button
                            key={tab.id}
                            onClick={() => setActiveTab(tab.id as TabType)}
                            className={`flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-bold transition-all ${activeTab === tab.id
                                ? 'bg-gradient-to-r from-[#00f0ff] to-[#b026ff] text-white shadow-lg'
                                : 'text-muted-foreground hover:text-white'
                                }`}
                        >
                            <tab.icon className="w-4 h-4" />
                            {tab.label}
                        </button>
                    ))}
                </div>
            </div>

            <AnimatePresence mode="wait">
                {activeTab === 'challenges' && (
                    <motion.div key="challenges" {...FADE_UP} className="space-y-6">
                        {/* Filters */}
                        <div className="flex flex-wrap items-center gap-2">
                            <div className="p-2 rounded-lg bg-white/5 border border-white/10 mr-2">
                                <Filter className="w-4 h-4 text-[#00f0ff]" />
                            </div>
                            {CATEGORIES.map(cat => (
                                <button
                                    key={cat}
                                    onClick={() => setFilter(cat)}
                                    className={`px-4 py-1.5 rounded-full text-[10px] font-bold border transition-all ${filter === cat
                                        ? 'bg-[#00f0ff]/20 border-[#00f0ff] text-[#00f0ff]'
                                        : 'bg-white/5 border-white/10 text-muted-foreground hover:border-white/20'
                                        }`}
                                >
                                    {cat}
                                </button>
                            ))}
                        </div>

                        {/* Challenges Grid */}
                        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                            {[
                                { title: "Auth Flow Optimization", xp: 450, reward: "$50", diff: "Beginner", time: "2h", skills: ["React", "Firebase"] },
                                { title: "DEX UI Components", xp: 1200, reward: "$120", diff: "Advanced", time: "6h", skills: ["Tailwind", "Web3"] },
                                { title: "System Health API", xp: 800, reward: "$80", diff: "Beginner", time: "4h", skills: ["Node.js", "Docker"] },
                                { title: "Landing Page Polish", xp: 300, reward: "NFT Badge", diff: "Beginner", time: "1h", skills: ["HTML", "CSS"] },
                                { title: "State Mgmt Refactor", xp: 1500, reward: "$200", diff: "Advanced", time: "8h", skills: ["Redux", "TypeScript"] },
                                { title: "GraphQL Query Fix", xp: 600, reward: "$40", diff: "Beginner", time: "3h", skills: ["GraphQL", "React"] },
                            ].map((item, i) => (
                                <div key={i} className="glass-card p-6 border-white/10 group hover:border-[#00f0ff]/30 transition-all flex flex-col h-full">
                                    <div className="flex justify-between items-start mb-4">
                                        <div className="bg-[#00f0ff]/10 text-[#00f0ff] text-[10px] font-black px-2 py-0.5 rounded border border-[#00f0ff]/20 uppercase">
                                            {item.diff}
                                        </div>
                                        <div className="flex items-center gap-1 text-xs text-yellow-400 font-bold">
                                            <Star className="w-3 h-3 fill-current" /> {item.xp} XP
                                        </div>
                                    </div>
                                    <h3 className="text-lg font-bold text-white mb-2 group-hover:text-[#00f0ff] transition-colors">{item.title}</h3>
                                    <div className="flex gap-2 mb-4">
                                        {item.skills.map(s => <span key={s} className="text-[10px] text-muted-foreground bg-white/5 px-2 py-0.5 rounded">{s}</span>)}
                                    </div>
                                    <div className="mt-auto pt-4 border-t border-white/5 flex items-center justify-between">
                                        <div className="flex items-center gap-3">
                                            <div className="flex items-center gap-1 text-[10px] text-muted-foreground">
                                                <Clock className="w-3 h-3" /> {item.time}
                                            </div>
                                            <div className="flex items-center gap-1 text-[11px] font-bold text-green-400">
                                                <DollarSign className="w-3 h-3" /> {item.reward}
                                            </div>
                                        </div>
                                        <button className="p-2 rounded-lg bg-white/5 border border-white/10 group-hover:bg-[#00f0ff] group-hover:text-black transition-all">
                                            <ArrowRight className="w-4 h-4" />
                                        </button>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </motion.div>
                )}

                {activeTab === 'projects' && (
                    <motion.div key="projects" {...FADE_UP} className="space-y-6">
                        <div className="grid gap-6">
                            {[
                                { name: "Nexus AI Infrastructure", tasks: 4, team: 12, impact: "High", color: "from-blue-500 to-cyan-500" },
                                { name: "SkillChain Protocol", tasks: 8, team: 6, impact: "Critical", color: "from-purple-500 to-pink-500" },
                                { name: "EcoTrack Mobile App", tasks: 2, team: 4, impact: "Medium", color: "from-green-500 to-emerald-500" },
                            ].map((proj, i) => (
                                <div key={i} className="glass-card p-0 border-white/10 overflow-hidden group">
                                    <div className="flex flex-col md:flex-row">
                                        <div className={`w-full md:w-3 bg-gradient-to-b ${proj.color}`} />
                                        <div className="flex-1 p-6">
                                            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-6">
                                                <div>
                                                    <h3 className="text-xl font-black text-white mb-1">{proj.name}</h3>
                                                    <div className="flex items-center gap-4 text-xs text-muted-foreground">
                                                        <span className="flex items-center gap-1"><Users className="w-3 h-3" /> {proj.team} Contributors</span>
                                                        <span className="flex items-center gap-1 text-orange-400 font-bold"><Activity className="w-3 h-3" /> {proj.impact} Impact</span>
                                                    </div>
                                                </div>
                                                <button className="px-6 py-2.5 rounded-xl bg-white text-black font-bold text-xs hover:bg-gray-200 transition-all flex items-center gap-2">
                                                    Apply to Contribute <ChevronRight className="w-4 h-4" />
                                                </button>
                                            </div>
                                            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
                                                {[...Array(proj.tasks)].map((_, j) => (
                                                    <div key={j} className="bg-white/5 border border-white/10 p-3 rounded-xl hover:border-white/30 transition-all">
                                                        <div className="flex justify-between items-start mb-2">
                                                            <div className="text-[9px] font-bold text-[#b026ff] uppercase">Feature Req</div>
                                                            <div className="text-[10px] font-bold text-green-400">$20</div>
                                                        </div>
                                                        <p className="text-[11px] text-white font-medium mb-1 truncate">Optimize API response latency...</p>
                                                        <div className="flex items-center gap-1 text-[9px] text-muted-foreground">
                                                            <MessageSquare className="w-2.5 h-2.5" /> 3 comments
                                                        </div>
                                                    </div>
                                                ))}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </motion.div>
                )}

                {activeTab === 'apprenticeship' && (
                    <motion.div key="apprenticeship" {...FADE_UP} className="space-y-8">
                        <div className="glass-card p-12 border-dashed border-white/20 text-center relative overflow-hidden">
                            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-green-500 to-transparent opacity-50" />
                            <Target className="w-16 h-16 text-green-400 mx-auto mb-6 animate-pulse" />
                            <h2 className="text-2xl font-black text-white mb-4">Elite Startup Tracks</h2>
                            <p className="text-muted-foreground max-w-xl mx-auto mb-8">
                                Work directly with senior leads in top-tier startups. These are high-intensity roles designed to turn juniors into mid-level engineers in months.
                            </p>
                            <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
                                {[
                                    { role: "Backend Shadow", corp: "NeuralLink", duration: "3 Months", stip: "$800/mo" },
                                    { role: "Fullstack Intern", corp: "Stripe", duration: "6 Months", stip: "$1200/mo" },
                                    { role: "UI/UX Apprentice", corp: "Vercel", duration: "4 Months", stip: "$1000/mo" },
                                ].map((role, i) => (
                                    <div key={i} className="bg-white/5 border border-white/10 p-6 rounded-2xl text-left hover:bg-white/10 transition-all cursor-pointer relative group overflow-hidden">
                                        <div className="absolute top-0 right-0 w-12 h-12 bg-green-500/10 rounded-bl-3xl flex items-center justify-center">
                                            <Lock className="w-4 h-4 text-green-400 group-hover:scale-0 transition-all" />
                                            <ArrowRight className="w-4 h-4 text-black absolute scale-0 group-hover:scale-110 transition-all" />
                                        </div>
                                        <h4 className="font-bold text-white mb-1">{role.role}</h4>
                                        <p className="text-xs text-[#00f0ff] font-bold mb-4">{role.corp}</p>
                                        <div className="space-y-2 mt-4">
                                            <div className="flex items-center justify-between text-[10px]">
                                                <span className="text-muted-foreground">Duration</span>
                                                <span className="text-white font-medium">{role.duration}</span>
                                            </div>
                                            <div className="flex items-center justify-between text-[10px]">
                                                <span className="text-muted-foreground">Stipend</span>
                                                <span className="text-green-400 font-bold">{role.stip}</span>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>

                        <div className="grid md:grid-cols-2 gap-8">
                            <div className="glass-card p-8 border-white/10 relative overflow-hidden group">
                                <div className="absolute top-0 right-0 w-32 h-32 bg-[#00f0ff]/5 blur-[60px] rounded-full" />
                                <Code2 className="w-10 h-10 text-[#00f0ff] mb-6" />
                                <h3 className="text-xl font-bold text-white mb-2">Shadow a Senior</h3>
                                <p className="text-sm text-muted-foreground mb-6">
                                    Get paired with an industry veteran. Access their PRs, watch their workflows, and assist on complex codebase migrations.
                                </p>
                                <button className="w-full py-3 rounded-xl bg-[#00f0ff]/10 border border-[#00f0ff]/20 text-[#00f0ff] text-xs font-bold hover:bg-[#00f0ff]/20 transition-all">
                                    Join Waitlist
                                </button>
                            </div>
                            <div className="glass-card p-8 border-white/10 relative overflow-hidden group">
                                <div className="absolute top-0 right-0 w-32 h-32 bg-[#b026ff]/5 blur-[60px] rounded-full" />
                                <Users className="w-10 h-10 text-[#b026ff] mb-6" />
                                <h3 className="text-xl font-bold text-white mb-2">Agency Fast-Track</h3>
                                <p className="text-sm text-muted-foreground mb-6">
                                    Work on diverse projects at leading digital agencies. Best for building a varied portfolio across multiple domains.
                                </p>
                                <button className="w-full py-3 rounded-xl bg-[#b026ff]/10 border border-[#b026ff]/20 text-[#b026ff] text-xs font-bold hover:bg-[#b026ff]/20 transition-all">
                                    View Open Batches
                                </button>
                            </div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
}
