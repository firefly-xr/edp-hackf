import { motion } from 'framer-motion';
import { Award, Brain, Download, ExternalLink, ShieldAlert, Trophy } from 'lucide-react';

export function PublicProfile() {
    return (
        <div className="pt-24 pb-16 container mx-auto px-6 max-w-5xl">
            {/* Profile Header Card */}
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="glass-card mb-8 relative overflow-hidden"
            >
                <div className="absolute inset-0 bg-gradient-to-r from-[#00f0ff]/10 to-[#b026ff]/10" />

                <div className="relative z-10 flex flex-col md:flex-row items-center md:items-start gap-8">
                    <div className="w-32 h-32 rounded-3xl bg-gradient-to-br from-[#00f0ff] to-[#b026ff] p-[2px] shadow-[0_0_30px_#00f0ff4d]">
                        <div className="w-full h-full bg-background rounded-[22px] flex items-center justify-center">
                            <span className="text-5xl font-bold">A.</span>
                        </div>
                    </div>

                    <div className="flex-1 text-center md:text-left space-y-4">
                        <div>
                            <div className="flex items-center justify-center md:justify-start gap-3 mb-1">
                                <h1 className="text-3xl font-bold">Alex Chen</h1>
                                <span className="px-2 py-1 rounded-md bg-green-400/10 text-green-400 text-xs font-semibold flex items-center gap-1 border border-green-400/20">
                                    <ShieldAlert className="w-3 h-3" /> Verified
                                </span>
                            </div>
                            <p className="text-muted-foreground">Full-Stack Engineer specialized in React and Node.js optimization.</p>
                        </div>

                        <div className="flex flex-wrap justify-center md:justify-start gap-6 pt-2">
                            <div>
                                <div className="text-xs text-muted-foreground uppercase tracking-wider mb-1">Experience Score</div>
                                <div className="text-2xl font-bold text-white text-glow">9,240 XP</div>
                            </div>
                            <div>
                                <div className="text-xs text-muted-foreground uppercase tracking-wider mb-1">Global Rank</div>
                                <div className="text-2xl font-bold text-white flex items-center gap-2">
                                    <Trophy className="w-5 h-5 text-yellow-400" /> Top 2%
                                </div>
                            </div>
                            <div>
                                <div className="text-xs text-muted-foreground uppercase tracking-wider mb-1">Problems Solved</div>
                                <div className="text-2xl font-bold text-white">48</div>
                            </div>
                        </div>
                    </div>

                    <div className="flex flex-col gap-3 w-full md:w-auto">
                        <button className="px-6 py-3 rounded-xl bg-white text-black font-bold hover:bg-gray-100 transition-colors w-full">
                            Hire Alex
                        </button>
                        <button className="px-6 py-3 rounded-xl border border-white/20 glass hover:bg-white/10 transition-colors w-full flex items-center justify-center gap-2">
                            <Download className="w-4 h-4" /> Download Badge
                        </button>
                    </div>
                </div>
            </motion.div>

            <div className="grid md:grid-cols-3 gap-8">
                <div className="md:col-span-1 space-y-8">
                    {/* Skills */}
                    <div className="glass-card">
                        <h3 className="font-bold text-lg mb-4 flex items-center gap-2">
                            <Award className="w-5 h-5 text-[#00f0ff]" /> Verified Stack
                        </h3>
                        <div className="space-y-3">
                            {[
                                { name: 'React', level: 'Expert', val: '98%' },
                                { name: 'Node.js', level: 'Advanced', val: '85%' },
                                { name: 'PostgreSQL', level: 'Advanced', val: '82%' },
                                { name: 'System Design', level: 'Intermediate', val: '76%' },
                            ].map((skill, i) => (
                                <div key={i}>
                                    <div className="flex justify-between text-sm mb-1">
                                        <span className="text-white">{skill.name}</span>
                                        <span className="text-muted-foreground font-mono">{skill.val}</span>
                                    </div>
                                    <div className="h-1.5 w-full bg-white/10 rounded-full overflow-hidden">
                                        <div className="h-full bg-gradient-to-r from-[#00f0ff] to-[#b026ff]" style={{ width: skill.val }} />
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* AI Reputation */}
                    <div className="glass-card">
                        <h3 className="font-bold text-lg mb-4 flex items-center gap-2">
                            <Brain className="w-5 h-5 text-[#b026ff]" /> AI Consensus
                        </h3>
                        <p className="text-sm text-white/80 leading-relaxed italic border-l-2 border-[#b026ff] pl-4">
                            "Alex consistently produces highly optimized, readable code with excellent edge-case handling. Strong architectural decisions in distributed systems contexts."
                        </p>
                    </div>
                </div>

                <div className="md:col-span-2 space-y-6">
                    <h3 className="text-xl font-bold mb-4">Verified Portfolio</h3>
                    {[
                        { title: 'Optimize Payment Gateway Webhook', company: 'Stripe API', tags: ['Node.js', 'Redis', 'Webhooks'], date: 'Oct 2026', desc: 'Resolved a concurrency issue causing duplicate webhook processing under high load. Implemented distributed locking.' },
                        { title: 'Implement Virtual DOM Diffing Algorithm', company: 'Frontend Masters', tags: ['React', 'Algorithms', 'Performance'], date: 'Sep 2026', desc: 'Rewrote core diffing logic for a custom UI framework, improving render times by 40% on low-end devices.' },
                        { title: 'Zero-Knowledge Proof Auth Flow', company: 'PolyChain', tags: ['Cryptography', 'Security', 'TypeScript'], date: 'Aug 2026', desc: 'Designed and implemented client-side ZKP generation for passwordless authentication.' }
                    ].map((project, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.1 * i }}
                            className="glass p-6 rounded-2xl border border-white/5 hover:border-white/20 transition-colors"
                        >
                            <div className="flex justify-between items-start mb-2">
                                <h4 className="text-lg font-bold text-white pr-4">{project.title}</h4>
                                <div className="text-sm text-muted-foreground whitespace-nowrap">{project.date}</div>
                            </div>
                            <div className="text-sm font-medium text-[#00f0ff] mb-4 text-glow">Posted by {project.company}</div>
                            <p className="text-muted-foreground text-sm mb-4">{project.desc}</p>

                            <div className="flex items-center justify-between mt-6 pt-4 border-t border-white/10">
                                <div className="flex gap-2">
                                    {project.tags.map((tag, j) => (
                                        <span key={j} className="text-xs px-2 py-1 rounded bg-white/5 text-white/70">{tag}</span>
                                    ))}
                                </div>
                                <button className="text-xs flex items-center gap-1 text-[#b026ff] hover:text-white transition-colors">
                                    <ExternalLink className="w-3 h-3" /> Source Code
                                </button>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </div>
    );
}
