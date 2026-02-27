import { motion } from 'framer-motion';
import { Filter, Search, Terminal, Clock, Users, ArrowRight } from 'lucide-react';

export function Marketplace() {
    const problems = [
        { id: 1, title: 'Optimize Payment Gateway Webhook', company: 'Stripe API', tags: ['Node.js', 'Redis', 'Webhooks'], reward: '$450', difficulty: 'Hard', submissions: 12, time: '2 days left' },
        { id: 2, title: 'Implement Virtual DOM Diffing Algorithm', company: 'Frontend Masters', tags: ['React', 'Algorithms', 'Performance'], reward: '$800', difficulty: 'Expert', submissions: 4, time: '5 days left' },
        { id: 3, title: 'Zero-Knowledge Proof Auth Flow', company: 'PolyChain', tags: ['Cryptography', 'Security', 'TypeScript'], reward: '$1,200', difficulty: 'Expert', submissions: 2, time: '1 week left' },
        { id: 4, title: 'Build Resilient WebSocket Reconnection', company: 'ChatOps', tags: ['WebSockets', 'Frontend', 'RxJS'], reward: '$300', difficulty: 'Medium', submissions: 28, time: '12 hours left' },
        { id: 5, title: 'Migrate MongoDB Aggregation Pipeline', company: 'DataFlux', tags: ['MongoDB', 'Backend', 'Data'], reward: '$500', difficulty: 'Medium', submissions: 15, time: '3 days left' },
        { id: 6, title: 'Design Accessible Command Menu (Cmd+K)', company: 'UI Core', tags: ['React', 'A11y', 'CSS'], reward: '$250', difficulty: 'Easy', submissions: 45, time: '4 days left' },
    ];

    return (
        <div className="pt-24 pb-16 container mx-auto px-6 max-w-7xl">
            <div className="text-center mb-12">
                <h1 className="text-4xl font-black mb-4">Problem Marketplace</h1>
                <p className="text-muted-foreground text-lg mb-8 max-w-2xl mx-auto">
                    Solve real engineering challenges. Earn immediate bounties and build your cryptographically verified experience score.
                </p>

                <div className="max-w-3xl mx-auto flex flex-col md:flex-row gap-4">
                    <div className="relative flex-1">
                        <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                        <input
                            type="text"
                            placeholder="Search technologies, companies, or problems..."
                            className="w-full glass border border-white/20 rounded-xl py-4 pl-12 pr-4 text-white focus:outline-none focus:border-[#00f0ff] transition-colors"
                        />
                    </div>
                    <button className="px-6 py-4 rounded-xl glass border border-white/10 hover:bg-white/10 transition-colors flex items-center justify-center gap-2 font-medium">
                        <Filter className="w-5 h-5" /> Filters
                    </button>
                </div>
            </div>

            {/* Tags Filter */}
            <div className="flex flex-wrap justify-center gap-2 mb-12">
                {['All', 'Frontend', 'Backend', 'Full Stack', 'Smart Contracts', 'Algorithms', 'System Design'].map((tag, i) => (
                    <button key={i} className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${i === 0 ? 'bg-[#00f0ff] text-black hover:bg-[#00f0ff]/90' : 'bg-white/5 border border-white/10 text-white hover:bg-white/10'}`}>
                        {tag}
                    </button>
                ))}
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {problems.map((problem, i) => (
                    <motion.div
                        key={i}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: i * 0.1 }}
                        className="glass-card flex flex-col h-full group"
                    >
                        <div className="flex justify-between items-start mb-4">
                            <div className="px-3 py-1 bg-white/5 rounded-md border border-white/10 text-xs font-medium flex items-center gap-1">
                                <Terminal className="w-3 h-3 text-[#00f0ff]" /> {problem.company}
                            </div>
                            <div className="font-bold text-green-400">{problem.reward}</div>
                        </div>

                        <h3 className="text-xl font-bold mb-3 text-white group-hover:text-glow transition-all">{problem.title}</h3>

                        <div className="flex flex-wrap gap-2 mb-6">
                            {problem.tags.map((tag, j) => (
                                <span key={j} className="text-xs px-2 py-1 rounded bg-black/20 text-[#b026ff] font-medium border border-[#b026ff]/30">
                                    {tag}
                                </span>
                            ))}
                        </div>

                        <div className="mt-auto grid grid-cols-2 gap-4 pt-6 border-t border-white/5 text-sm text-muted-foreground mb-6">
                            <div className="flex items-center gap-2">
                                <Users className="w-4 h-4" /> {problem.submissions} subs
                            </div>
                            <div className="flex items-center gap-2">
                                <Clock className="w-4 h-4" /> {problem.time}
                            </div>
                            <div className="col-span-2 flex items-center gap-2">
                                Difficulty: <span className={`font-semibold ${problem.difficulty === 'Expert' ? 'text-red-400' : problem.difficulty === 'Hard' ? 'text-orange-400' : problem.difficulty === 'Medium' ? 'text-yellow-400' : 'text-green-400'}`}>{problem.difficulty}</span>
                            </div>
                        </div>

                        <button className="w-full py-3 rounded-xl bg-white/5 hover:bg-[#00f0ff] hover:text-black hover:shadow-[0_0_20px_#00f0ff66] transition-all font-bold flex items-center justify-center gap-2 border border-white/10 hover:border-transparent">
                            Solve Now <ArrowRight className="w-4 h-4" />
                        </button>
                    </motion.div>
                ))}
            </div>
        </div>
    );
}
