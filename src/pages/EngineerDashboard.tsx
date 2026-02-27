import { motion } from 'framer-motion';
import { Award, Brain, Code2, Copy, ExternalLink, Flame, ShieldAlert, Trophy } from 'lucide-react';

export function EngineerDashboard() {
    return (
        <div className="pt-24 pb-16 container mx-auto px-6 max-w-7xl">
            {/* Profile Header Block */}
            <div className="flex justify-between items-start mb-8">
                <div>
                    <h1 className="text-3xl font-bold mb-2">Welcome back, Alex</h1>
                    <p className="text-muted-foreground">Here's your verified experience overview.</p>
                </div>
                <button className="flex items-center gap-2 group glass px-4 py-2 rounded-xl text-sm font-medium hover:border-[#00f0ff]/50 transition-colors">
                    <Copy className="w-4 h-4 group-hover:text-[#00f0ff] transition-colors" />
                    Share Profile
                </button>
            </div>

            <div className="grid lg:grid-cols-3 gap-8">

                {/* Left Column: Stats & Profile */}
                <div className="lg:col-span-1 space-y-6">
                    {/* Main Rep Card */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="glass-card relative overflow-hidden"
                    >
                        <div className="absolute -right-10 -top-10 w-32 h-32 bg-[#00f0ff]/20 rounded-full blur-3xl opacity-50" />
                        <div className="flex items-center gap-4 mb-6">
                            <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-[#00f0ff] to-[#b026ff] p-1">
                                <div className="w-full h-full bg-background rounded-xl flex items-center justify-center">
                                    <span className="text-2xl font-bold">A.</span>
                                </div>
                            </div>
                            <div>
                                <h2 className="text-xl font-bold">Alex Chen</h2>
                                <div className="flex items-center gap-1 text-[#00f0ff] text-sm font-medium">
                                    <ShieldAlert className="w-3 h-3" />
                                    <span>Verified Identity</span>
                                </div>
                            </div>
                        </div>

                        <div className="space-y-4">
                            <div>
                                <div className="flex justify-between text-sm mb-1">
                                    <span className="text-muted-foreground">Experience Score</span>
                                    <span className="font-bold text-white">9,240 XP</span>
                                </div>
                                <div className="h-2 w-full bg-white/10 rounded-full overflow-hidden">
                                    <motion.div
                                        initial={{ width: 0 }}
                                        animate={{ width: '75%' }}
                                        className="h-full bg-gradient-to-r from-[#00f0ff] to-[#b026ff]"
                                    />
                                </div>
                                <div className="text-xs text-muted-foreground mt-1 text-right">
                                    760 XP to Master Rank
                                </div>
                            </div>

                            <div className="grid grid-cols-2 gap-4 pt-4 border-t border-white/10">
                                <div>
                                    <div className="text-xs text-muted-foreground mb-1">Global Rank</div>
                                    <div className="flex items-center gap-1 text-lg font-bold">
                                        <Trophy className="w-4 h-4 text-yellow-400" />
                                        Top 2%
                                    </div>
                                </div>
                                <div>
                                    <div className="text-xs text-muted-foreground mb-1">Total Earnings</div>
                                    <div className="text-lg font-bold text-green-400">$14,250</div>
                                </div>
                            </div>
                        </div>
                    </motion.div>

                    {/* Skill Badges */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.1 }}
                        className="glass-card"
                    >
                        <h3 className="font-bold text-lg mb-4 flex items-center gap-2">
                            <Award className="w-5 h-5 text-[#b026ff]" />
                            Verified Skills
                        </h3>
                        <div className="flex flex-wrap gap-2">
                            {[
                                { name: 'React', level: 'Expert', color: '#00d8ff' },
                                { name: 'Node.js', level: 'Advanced', color: '#8cc84b' },
                                { name: 'System Design', level: 'Intermediate', color: '#ffb300' },
                                { name: 'PostgreSQL', level: 'Advanced', color: '#336791' },
                            ].map((skill, i) => (
                                <div key={i} className="px-3 py-1.5 rounded-lg border border-white/10 bg-white/5 text-sm flex items-center gap-2">
                                    <span className="w-2 h-2 rounded-full" style={{ backgroundColor: skill.color }} />
                                    <span className="font-medium">{skill.name}</span>
                                </div>
                            ))}
                        </div>
                    </motion.div>
                </div>

                {/* Right Column: Activity & History */}
                <div className="lg:col-span-2 space-y-6">
                    {/* AI Analysis Summary */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2 }}
                        className="grid grid-cols-2 md:grid-cols-4 gap-4"
                    >
                        {[
                            { label: 'Code Quality', score: '98%', icon: <Code2 /> },
                            { label: 'Efficiency', score: '94%', icon: <Flame /> },
                            { label: 'Security', score: '100%', icon: <ShieldAlert /> },
                            { label: 'AI Review', score: 'A+', icon: <Brain /> },
                        ].map((stat, i) => (
                            <div key={i} className="glass rounded-xl p-4 flex flex-col items-center justify-center text-center">
                                <div className="text-muted-foreground mb-2 [&>svg]:w-5 [&>svg]:h-5">{stat.icon}</div>
                                <div className="text-2xl font-bold text-white">{stat.score}</div>
                                <div className="text-xs text-muted-foreground mt-1">{stat.label}</div>
                            </div>
                        ))}
                    </motion.div>

                    {/* Recent Solutions */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.3 }}
                        className="glass-card"
                    >
                        <div className="flex items-center justify-between mb-6">
                            <h3 className="font-bold text-lg">Recent Verified Solutions</h3>
                            <button className="text-sm text-[#00f0ff] hover:text-white transition-colors">View All</button>
                        </div>

                        <div className="space-y-4">
                            {[
                                { title: 'Optimize Payment Gateway Webhook', company: 'Stripe API', reward: '$450', xp: '+320 XP', status: 'Verified', date: '2 days ago' },
                                { title: 'Implement Virtual DOM Diffing Algorithm', company: 'Frontend Masters', reward: '$800', xp: '+550 XP', status: 'Verified', date: '5 days ago' },
                                { title: 'Resolve Race Condition in Auth Flow', company: 'NextNova', reward: '$250', xp: '+180 XP', status: 'Evaluating', date: 'Just now' },
                            ].map((solution, i) => (
                                <div key={i} className="p-4 rounded-xl border border-white/5 bg-white/5 hover:bg-white/10 transition-colors group">
                                    <div className="flex justify-between items-start mb-2">
                                        <div>
                                            <h4 className="font-bold text-white group-hover:text-[#00f0ff] transition-colors">{solution.title}</h4>
                                            <div className="text-sm text-muted-foreground">{solution.company} • {solution.date}</div>
                                        </div>
                                        <div className="text-right">
                                            <div className="font-bold text-green-400">{solution.reward}</div>
                                            <div className="text-xs text-[#b026ff] font-medium">{solution.xp}</div>
                                        </div>
                                    </div>
                                    <div className="flex items-center gap-4 mt-4">
                                        <span className={`text-xs px-2 py-1 rounded-md font-medium ${solution.status === 'Verified' ? 'bg-green-400/10 text-green-400' : 'bg-yellow-400/10 text-yellow-400'
                                            }`}>
                                            {solution.status}
                                        </span>
                                        <button className="text-xs text-muted-foreground hover:text-white flex items-center gap-1 transition-colors ml-auto">
                                            <ExternalLink className="w-3 h-3" /> View AI Feedback
                                        </button>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </motion.div>
                </div>

            </div>
        </div>
    );
}
