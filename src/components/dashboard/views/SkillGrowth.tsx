import React from 'react';
import { motion } from 'framer-motion';
import {
    Brain, TrendingUp, Target, Zap, ShieldCheck,
    BarChart3, Cpu, Code2, Sparkles, ChevronRight,
    AlertCircle, CheckCircle2, FlaskConical
} from 'lucide-react';

export function SkillGrowth() {
    const FADE_UP = {
        initial: { opacity: 0, y: 10 },
        animate: { opacity: 1, y: 0 }
    };

    return (
        <div className="space-y-8 pb-20">
            {/* Header Area */}
            <div>
                <div className="flex items-center gap-3 mb-2">
                    <div className="p-2 rounded-xl bg-[#b026ff]/10">
                        <Brain className="w-6 h-6 text-[#b026ff]" />
                    </div>
                    <h1 className="text-3xl font-black text-white tracking-tight uppercase">Skill Growth & AI Guidance</h1>
                </div>
                <p className="text-muted-foreground max-w-md text-sm">
                    Real-time analysis of your technical trajectory and personalized improvement labs.
                </p>
            </div>

            <div className="grid lg:grid-cols-12 gap-8">
                {/* Left: AI Skill Report */}
                <motion.div {...FADE_UP} className="lg:col-span-12 xl:col-span-8 space-y-6">
                    <div className="glass-card p-8 border-white/10 relative overflow-hidden">
                        <div className="absolute top-0 right-0 w-64 h-64 bg-[#b026ff]/5 blur-[80px] rounded-full" />

                        <div className="flex items-center justify-between mb-8 relative z-10">
                            <h3 className="text-xl font-bold text-white flex items-center gap-2">
                                <BarChart3 className="w-5 h-5 text-[#b026ff]" /> AI Skill Intelligence
                            </h3>
                            <span className="text-[10px] font-black text-[#00f0ff] bg-[#00f0ff]/10 px-2 py-1 rounded border border-[#00f0ff]/20">Updated 10m ago</span>
                        </div>

                        <div className="grid md:grid-cols-2 gap-12 relative z-10">
                            {/* Skill Radar Mock */}
                            <div className="space-y-6">
                                {[
                                    { label: 'Frontend Architecture', score: 85, color: 'bg-blue-400' },
                                    { label: 'Blockchain/Solidity', score: 42, color: 'bg-[#b026ff]' },
                                    { label: 'Backend Optimization', score: 68, color: 'bg-green-400' },
                                    { label: 'Testing & QA', score: 92, color: 'bg-yellow-400' },
                                ].map((skill, i) => (
                                    <div key={i} className="space-y-2">
                                        <div className="flex justify-between text-xs font-bold">
                                            <span className="text-white">{skill.label}</span>
                                            <span className="text-muted-foreground">{skill.score}%</span>
                                        </div>
                                        <div className="h-2 w-full bg-white/5 rounded-full overflow-hidden">
                                            <motion.div
                                                initial={{ width: 0 }}
                                                animate={{ width: `${skill.score}%` }}
                                                className={`h-full ${skill.color} shadow-[0_0_8px_currentColor]`}
                                            />
                                        </div>
                                    </div>
                                ))}
                            </div>

                            {/* Strengths & Weaknesses */}
                            <div className="space-y-6">
                                <div>
                                    <h4 className="text-xs font-black text-[#00f0ff] uppercase tracking-widest mb-4 flex items-center gap-2">
                                        <Sparkles className="w-3 h-3" /> Core Strengths
                                    </h4>
                                    <ul className="space-y-3">
                                        {['Robust Type Safety in React', 'Clean Component Abstractions', 'Efficient Hook Management'].map((s, i) => (
                                            <li key={i} className="flex items-center gap-2 text-xs text-white bg-white/5 border border-white/10 p-2 rounded-lg">
                                                <CheckCircle2 className="w-3 h-3 text-green-400" /> {s}
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                                <div>
                                    <h4 className="text-xs font-black text-orange-400 uppercase tracking-widest mb-4 flex items-center gap-2">
                                        <AlertCircle className="w-3 h-3" /> Growth Opportunities
                                    </h4>
                                    <ul className="space-y-3">
                                        {['Advanced Gas Optimization', 'Error Handling in Async Loops'].map((s, i) => (
                                            <li key={i} className="flex items-center gap-2 text-xs text-white bg-white/5 border border-white/10 p-2 rounded-lg">
                                                <Target className="w-3 h-3 text-orange-400" /> {s}
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Coding Pattern Analysis */}
                    <div className="glass-card p-8 border-white/10">
                        <h3 className="text-xl font-bold text-white mb-6 flex items-center gap-2">
                            <Code2 className="w-5 h-5 text-green-400" /> Coding Pattern Insights
                        </h3>
                        <p className="text-sm text-muted-foreground mb-6">
                            AI analyzed your last 12 commits. Your code is categorized as <span className="text-white font-bold">"Structural-Driven"</span>.
                        </p>
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                            {[
                                { label: 'Verbosity', val: 'Low', color: 'text-green-400' },
                                { label: 'Reusability', val: 'High', color: 'text-[#00f0ff]' },
                                { label: 'Avg Complexity', val: 'O(log n)', color: 'text-[#b026ff]' },
                                { label: 'Standard Adherence', val: '98%', color: 'text-yellow-400' },
                            ].map((item, i) => (
                                <div key={i} className="bg-white/5 border border-white/5 p-4 rounded-2xl text-center">
                                    <div className="text-[10px] text-muted-foreground uppercase mb-1">{item.label}</div>
                                    <div className={`text-lg font-black ${item.color}`}>{item.val}</div>
                                </div>
                            ))}
                        </div>
                    </div>
                </motion.div>

                {/* Right: Improvement Lab */}
                <motion.div {...FADE_UP} transition={{ delay: 0.1 }} className="lg:col-span-12 xl:col-span-4 space-y-6">
                    <div className="glass-card p-8 border-[#b026ff]/30 bg-[#b026ff]/[0.02] relative group">
                        <FlaskConical className="w-8 h-8 text-[#b026ff] mb-6 group-hover:rotate-12 transition-transform" />
                        <h3 className="text-xl font-bold text-white mb-2">Improvement Lab</h3>
                        <p className="text-xs text-muted-foreground mb-6">
                            Fix past submission errors or retry optimized versions of your solutions to gain extra XP.
                        </p>

                        <div className="space-y-3">
                            {[
                                { task: 'Auth Hook Optimization', xp: '+120 XP', diff: 'Med' },
                                { task: 'GraphQL Fragment Fix', xp: '+40 XP', diff: 'Low' },
                            ].map((lab, i) => (
                                <div key={i} className="bg-black/40 border border-white/10 p-4 rounded-xl hover:border-[#b026ff]/50 transition-all cursor-pointer group/item text-left">
                                    <div className="flex justify-between items-start mb-2">
                                        <h4 className="text-[11px] font-bold text-white group-hover/item:text-[#b026ff] transition-colors">{lab.task}</h4>
                                        <span className="text-[10px] text-green-400 font-bold">{lab.xp}</span>
                                    </div>
                                    <div className="flex items-center gap-2">
                                        <span className="text-[9px] text-muted-foreground bg-white/5 px-1.5 py-0.5 rounded uppercase font-black tracking-widest">{lab.diff} Complexity</span>
                                    </div>
                                </div>
                            ))}
                            <button className="w-full py-3 rounded-xl bg-white text-black font-black text-xs hover:bg-[#b026ff] hover:text-white transition-all">
                                Open All Labs
                            </button>
                        </div>
                    </div>

                    <div className="glass-card p-8 border-white/10 bg-gradient-to-br from-[#00f0ff]/5 to-[#b026ff]/5">
                        <Cpu className="w-8 h-8 text-[#00f0ff] mb-6" />
                        <h3 className="text-xl font-bold text-white mb-2">Practice Stack</h3>
                        <p className="text-xs text-muted-foreground mb-6">
                            Personalized challenge recommendations based on your current growth trajectory.
                        </p>
                        <div className="space-y-2">
                            {['Docker Containerization 101', 'Solidity Gas Optimization', 'Framer Motion Pro'].map((track, i) => (
                                <div key={i} className="flex items-center justify-between p-3 rounded-lg bg-white/5 border border-white/5 hover:bg-white/10 transition-colors cursor-pointer text-xs">
                                    <span className="text-white font-medium">{track}</span>
                                    <ChevronRight className="w-4 h-4 text-[#00f0ff]" />
                                </div>
                            ))}
                        </div>
                    </div>
                </motion.div>
            </div>
        </div>
    );
}
