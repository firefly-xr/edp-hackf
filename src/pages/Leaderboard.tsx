import { motion } from 'framer-motion';
import { Trophy, TrendingUp, Search } from 'lucide-react';

export function Leaderboard() {
    const leaders = [
        { rank: 1, name: 'Elena R.', role: 'Senior Smart Cont.', xp: '124,500', trending: 'up', tags: ['Solidity', 'Rust'] },
        { rank: 2, name: 'Alex Chen', role: 'Full-Stack Eng.', xp: '109,240', trending: 'up', tags: ['React', 'Node.js'] },
        { rank: 3, name: 'David K.', role: 'AI Specialist', xp: '98,100', trending: 'down', tags: ['Python', 'PyTorch'] },
        { rank: 4, name: 'Sarah J.', role: 'Backend Eng.', xp: '82,050', trending: 'same', tags: ['Go', 'Kubernetes'] },
        { rank: 5, name: 'Marcus T.', role: 'Frontend Architect', xp: '75,400', trending: 'up', tags: ['Vue', 'WebGL'] },
        { rank: 6, name: 'Priya M.', role: 'Security Eng.', xp: '68,200', trending: 'down', tags: ['Cryptography', 'C++'] },
    ];

    return (
        <div className="pt-24 pb-16 container mx-auto px-6 max-w-5xl">
            <div className="text-center mb-12">
                <h1 className="text-4xl font-black mb-4 flex items-center justify-center gap-3">
                    <Trophy className="w-10 h-10 text-yellow-400" />
                    Global Leaderboard
                </h1>
                <p className="text-muted-foreground text-lg">The top 1% of the Experience Economy.</p>
            </div>

            <div className="glass-card mb-8 p-4 flex flex-col md:flex-row gap-4 items-center justify-between">
                <div className="relative w-full md:w-96">
                    <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                    <input
                        type="text"
                        placeholder="Search engineers by name or skill..."
                        className="w-full bg-white/5 border border-white/10 rounded-xl py-2 pl-10 pr-4 text-sm focus:outline-none focus:border-[#00f0ff]/50 transition-colors"
                    />
                </div>

                <div className="flex gap-2">
                    <button className="px-4 py-2 text-sm rounded-lg bg-white/10 text-white font-medium">Global</button>
                    <button className="px-4 py-2 text-sm rounded-lg hover:bg-white/5 text-muted-foreground transition-colors">Frontend</button>
                    <button className="px-4 py-2 text-sm rounded-lg hover:bg-white/5 text-muted-foreground transition-colors">Backend</button>
                    <button className="px-4 py-2 text-sm rounded-lg hover:bg-white/5 text-muted-foreground transition-colors">AI/ML</button>
                </div>
            </div>

            <div className="glass rounded-2xl overflow-hidden">
                <div className="grid grid-cols-12 gap-4 p-4 border-b border-white/10 text-xs font-bold text-muted-foreground uppercase tracking-wider bg-white/5">
                    <div className="col-span-1 text-center">Rank</div>
                    <div className="col-span-4">Engineer</div>
                    <div className="col-span-4 hidden md:block">Top Skills</div>
                    <div className="col-span-2 text-right">Reputation XP</div>
                    <div className="col-span-1 text-center">Trend</div>
                </div>

                <div className="divide-y divide-white/5">
                    {leaders.map((leader, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: i * 0.05 }}
                            className="grid grid-cols-12 gap-4 p-4 items-center hover:bg-white/[0.02] transition-colors cursor-pointer group"
                        >
                            <div className="col-span-1 text-center font-bold text-lg">
                                <span className={leader.rank <= 3 ? "text-yellow-400" : "text-muted-foreground"}>
                                    #{leader.rank}
                                </span>
                            </div>

                            <div className="col-span-4 flex items-center gap-3">
                                <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-[#00f0ff] to-[#b026ff] p-[1px]">
                                    <div className="w-full h-full bg-background rounded-[7px] flex items-center justify-center text-xs font-bold">
                                        {leader.name.charAt(0)}
                                    </div>
                                </div>
                                <div>
                                    <div className="font-bold text-white group-hover:text-[#00f0ff] transition-colors">{leader.name}</div>
                                    <div className="text-xs text-muted-foreground">{leader.role}</div>
                                </div>
                            </div>

                            <div className="col-span-4 hidden md:flex items-center gap-2">
                                {leader.tags.map((tag, j) => (
                                    <span key={j} className="text-xs px-2 py-1 rounded bg-white/5 border border-white/5">
                                        {tag}
                                    </span>
                                ))}
                            </div>

                            <div className="col-span-2 flex flex-col items-end justify-center">
                                <div className="font-bold text-white text-glow">{leader.xp}</div>
                            </div>

                            <div className="col-span-1 flex justify-center">
                                {leader.trending === 'up' && <TrendingUp className="w-4 h-4 text-green-400" />}
                                {leader.trending === 'down' && <TrendingUp className="w-4 h-4 text-red-400 rotate-180" />}
                                {leader.trending === 'same' && <div className="w-4 h-1 bg-muted-foreground rounded-full" />}
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </div>
    );
}
