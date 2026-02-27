import { motion } from 'framer-motion';
import { PlusCircle, Users, Activity, CheckCircle, TrendingUp, Briefcase } from 'lucide-react';

export function BusinessDashboard() {
    return (
        <div className="pt-24 pb-16 container mx-auto px-6 max-w-7xl">
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-10 gap-4">
                <div>
                    <h1 className="text-3xl font-bold mb-2">TechNova Dashboard</h1>
                    <p className="text-muted-foreground">Manage your posted problems and review incoming solutions.</p>
                </div>
                <button className="px-6 py-3 rounded-xl bg-[#00f0ff] text-black font-bold hover:bg-[#00f0ff]/90 transition-colors flex items-center gap-2 shadow-[0_0_20px_#00f0ff4d] border border-transparent">
                    <PlusCircle className="w-5 h-5" /> Post New Problem
                </button>
            </div>

            {/* Quick Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-10">
                {[
                    { label: 'Active Problems', value: '4', icon: <Briefcase className="text-[#00f0ff] w-6 h-6" /> },
                    { label: 'Total Submissions', value: '142', icon: <Activity className="text-[#b026ff] w-6 h-6" /> },
                    { label: 'Total Hires Made', value: '12', icon: <Users className="text-blue-400 w-6 h-6" /> },
                    { label: 'Avg Time to Solve', value: '2.4 Days', icon: <TrendingUp className="text-green-400 w-6 h-6" /> },
                ].map((stat, i) => (
                    <motion.div
                        key={i}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: i * 0.1 }}
                        className="glass-card flex items-center gap-4"
                    >
                        <div className="p-3 bg-white/5 rounded-xl border border-white/10">
                            {stat.icon}
                        </div>
                        <div>
                            <div className="text-2xl font-bold text-white">{stat.value}</div>
                            <div className="text-sm font-medium text-muted-foreground">{stat.label}</div>
                        </div>
                    </motion.div>
                ))}
            </div>

            <div className="grid lg:grid-cols-3 gap-8">
                {/* Active Problems List */}
                <div className="lg:col-span-2 space-y-6">
                    <h3 className="text-xl font-bold mb-4">Active Problems</h3>

                    {[
                        { title: 'Refactor Legacy Auth Context', reward: '$600', submissions: 24, status: 'Active', topScore: '98%', eng: 'Alex C.' },
                        { title: 'Implement Infinite Scroll Hook', reward: '$350', submissions: 45, status: 'Active', topScore: '95%', eng: 'Sarah J.' },
                        { title: 'Write E2E Tests for Checkout Flow', reward: '$800', submissions: 8, status: 'Closing Soon', topScore: '90%', eng: 'David K.' },
                    ].map((problem, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: 0.2 + (i * 0.1) }}
                            className="glass p-6 rounded-2xl border border-white/10 flex flex-col sm:flex-row justify-between sm:items-center gap-4 group"
                        >
                            <div>
                                <div className="flex items-center gap-3 mb-2">
                                    <h4 className="font-bold text-white text-lg">{problem.title}</h4>
                                    <span className={`text-xs px-2 py-0.5 rounded font-medium ${problem.status === 'Active' ? 'bg-green-400/20 text-green-400' : 'bg-orange-400/20 text-orange-400'}`}>
                                        {problem.status}
                                    </span>
                                </div>
                                <div className="text-sm text-muted-foreground flex gap-4">
                                    <span>Bounty: <span className="text-white font-medium">{problem.reward}</span></span>
                                    <span>Submissions: <span className="text-white font-medium">{problem.submissions}</span></span>
                                </div>
                            </div>

                            <div className="sm:text-right border-t sm:border-t-0 sm:border-l border-white/10 pt-4 sm:pt-0 sm:pl-6 flex flex-row sm:flex-col justify-between sm:justify-start items-center sm:items-end">
                                <div className="text-xs text-muted-foreground mb-1">Top AI Score</div>
                                <div className="flex items-center gap-2">
                                    <span className="font-bold text-green-400">{problem.topScore}</span>
                                    <span className="text-sm text-white">by {problem.eng}</span>
                                </div>
                                <button className="hidden sm:block mt-3 text-sm text-[#00f0ff] hover:text-white transition-colors">
                                    Review Submissions →
                                </button>
                            </div>
                        </motion.div>
                    ))}
                </div>

                {/* AI Recommendations */}
                <div className="lg:col-span-1 space-y-6">
                    <div className="glass-card">
                        <h3 className="font-bold text-lg mb-6 flex items-center gap-2 border-b border-white/10 pb-4">
                            <CheckCircle className="w-5 h-5 text-[#b026ff]" />
                            AI Recommendations
                        </h3>

                        <div className="space-y-6">
                            <p className="text-sm text-muted-foreground mb-4">
                                Based on previous hires and current active problems, SkillChain AI suggests extending offers to:
                            </p>

                            {[
                                { name: 'Alex Chen', match: '99%', reason: 'Perfect score on Auth Context.', skills: 'React, Node' },
                                { name: 'Marcus T.', match: '96%', reason: 'Consistent top 5% in UI tasks.', skills: 'Vue, CSS' }
                            ].map((rec, i) => (
                                <div key={i} className="bg-white/5 rounded-xl p-4 border border-white/5 text-sm">
                                    <div className="flex justify-between items-start mb-2">
                                        <span className="font-bold text-white text-base">{rec.name}</span>
                                        <span className="px-2 py-1 rounded bg-[#00f0ff]/10 text-[#00f0ff] font-bold text-xs">Match: {rec.match}</span>
                                    </div>
                                    <div className="text-muted-foreground mb-2">{rec.reason}</div>
                                    <div className="flex items-center justify-between">
                                        <span className="text-xs text-[#b026ff]">{rec.skills}</span>
                                        <button className="text-xs px-3 py-1 bg-white hover:bg-gray-200 text-black font-semibold rounded-md transition-colors">
                                            Message
                                        </button>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
