import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
    Cpu, Code2, Sparkles, Zap,
    TerminalSquare, LayoutGrid,
    CheckCircle2, MessageSquare,
    Play, RotateCcw, Copy
} from 'lucide-react';

type ToolType = 'review' | 'performance' | 'architecture';

export function AIMentor() {
    const [activeTool, setActiveTool] = useState<ToolType>('review');
    const [isAnalyzing, setIsAnalyzing] = useState(false);
    const [result, setResult] = useState<string | null>(null);

    const handleAnalyze = () => {
        setIsAnalyzing(true);
        setTimeout(() => {
            setIsAnalyzing(false);
            setResult("ANALYSIS_COMPLETE");
        }, 2000);
    };

    const FADE_UP = {
        initial: { opacity: 0, y: 10 },
        animate: { opacity: 1, y: 0 }
    };

    return (
        <div className="space-y-8 pb-20">
            {/* Header Area */}
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
                <div>
                    <div className="flex items-center gap-3 mb-2">
                        <div className="p-2 rounded-xl bg-[#00f0ff]/10">
                            <Cpu className="w-6 h-6 text-[#00f0ff]" />
                        </div>
                        <h1 className="text-3xl font-black text-white tracking-tight uppercase">AI Mentor Workspace</h1>
                    </div>
                    <p className="text-muted-foreground max-w-md text-sm">
                        Hyper-personalized technical guidance. Optimize your code before submission to maximize XP and reputation.
                    </p>
                </div>

                {/* Tool Switcher */}
                <div className="flex p-1 bg-white/5 border border-white/10 rounded-2xl backdrop-blur-sm self-start md:self-auto">
                    {[
                        { id: 'review', label: 'Code Review', icon: Code2 },
                        { id: 'performance', label: 'Performance', icon: Zap },
                        { id: 'architecture', label: 'Architecture', icon: LayoutGrid },
                    ].map((tool) => (
                        <button
                            key={tool.id}
                            onClick={() => {
                                setActiveTool(tool.id as ToolType);
                                setResult(null);
                            }}
                            className={`flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-bold transition-all ${activeTool === tool.id
                                ? 'bg-[#00f0ff] text-black shadow-[0_0_15px_#00f0ff80]'
                                : 'text-muted-foreground hover:text-white'
                                }`}
                        >
                            <tool.icon className="w-4 h-4" />
                            {tool.label}
                        </button>
                    ))}
                </div>
            </div>

            <div className="grid lg:grid-cols-12 gap-8">
                {/* Editor Section */}
                <motion.div {...FADE_UP} className="lg:col-span-12 xl:col-span-7 space-y-4">
                    <div className="glass-card p-0 border-white/10 overflow-hidden">
                        <div className="bg-white/5 px-6 py-3 border-b border-white/10 flex items-center justify-between">
                            <div className="flex items-center gap-2">
                                <TerminalSquare className="w-4 h-4 text-muted-foreground" />
                                <span className="text-[10px] font-black text-muted-foreground uppercase tracking-widest">Input Console - main.tsx</span>
                            </div>
                            <div className="flex gap-1.5">
                                <div className="w-2.5 h-2.5 rounded-full bg-red-500/50" />
                                <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/50" />
                                <div className="w-2.5 h-2.5 rounded-full bg-green-500/50" />
                            </div>
                        </div>
                        <div className="relative">
                            <textarea
                                className="w-full bg-transparent p-6 text-sm text-white font-mono min-h-[400px] outline-none resize-none placeholder:text-muted-foreground/30"
                                placeholder={`Paste your code here for ${activeTool} analysis...`}
                            />
                            {isAnalyzing && (
                                <div className="absolute inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center z-20">
                                    <div className="flex flex-col items-center gap-4">
                                        <div className="w-12 h-12 border-4 border-[#00f0ff]/20 border-t-[#00f0ff] rounded-full animate-spin" />
                                        <div className="text-[10px] font-black text-[#00f0ff] uppercase tracking-[0.3em] animate-pulse">Running Neural Review...</div>
                                    </div>
                                </div>
                            )}
                        </div>
                        <div className="p-4 bg-white/[0.02] border-t border-white/5 flex justify-between items-center">
                            <p className="text-[10px] text-muted-foreground italic">Press ⌘+Enter to trigger AI</p>
                            <div className="flex gap-3">
                                <button className="p-2.5 rounded-xl bg-white/5 border border-white/10 hover:bg-white/10 transition-colors">
                                    <RotateCcw className="w-4 h-4 text-muted-foreground" />
                                </button>
                                <button
                                    onClick={handleAnalyze}
                                    disabled={isAnalyzing}
                                    className="px-6 py-2.5 rounded-xl bg-white text-black font-black text-xs hover:bg-[#00f0ff] transition-all flex items-center gap-2 disabled:opacity-50"
                                >
                                    {isAnalyzing ? "Processing..." : "Run Analysis"} <Play className="w-3 h-3 fill-current" />
                                </button>
                            </div>
                        </div>
                    </div>
                </motion.div>

                {/* Feedback Section */}
                <motion.div {...FADE_UP} transition={{ delay: 0.1 }} className="lg:col-span-12 xl:col-span-5 space-y-6">
                    <AnimatePresence mode="wait">
                        {!result ? (
                            <motion.div
                                key="idle"
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                exit={{ opacity: 0 }}
                                className="glass-card p-12 border-dashed border-white/10 text-center h-full flex flex-col justify-center gap-4"
                            >
                                <Sparkles className="w-12 h-12 text-[#b026ff]/30 mx-auto" />
                                <h3 className="font-bold text-white/50 uppercase tracking-widest text-sm">Await neural instructions</h3>
                                <p className="text-xs text-muted-foreground">Input your code logic in the editor to receive real-time mentored feedback.</p>
                            </motion.div>
                        ) : (
                            <motion.div
                                key="result"
                                initial={{ opacity: 0, scale: 0.95 }}
                                animate={{ opacity: 1, scale: 1 }}
                                className="space-y-6"
                            >
                                {/* Review Result */}
                                <div className="glass-card p-6 border-[#00f0ff]/20 bg-[#00f0ff]/5 relative overflow-hidden">
                                    <div className="flex justify-between items-center mb-6">
                                        <h3 className="font-bold text-white uppercase tracking-tight flex items-center gap-2">
                                            <Sparkles className="w-4 h-4 text-[#00f0ff]" /> Neural Verdict
                                        </h3>
                                        <div className="flex gap-2">
                                            <button className="p-1.5 rounded-lg bg-white/5 hover:bg-white/10 transition-colors"><Copy className="w-3 h-3 text-muted-foreground" /></button>
                                            <button className="p-1.5 rounded-lg bg-white/5 hover:bg-white/10 transition-colors"><MessageSquare className="w-3 h-3 text-muted-foreground" /></button>
                                        </div>
                                    </div>

                                    <div className="space-y-4">
                                        {activeTool === 'review' && (
                                            <>
                                                <div className="p-3 bg-green-500/10 border-l-2 border-green-500 rounded-r-lg">
                                                    <div className="flex items-center gap-2 text-[10px] font-black text-green-400 mb-1 uppercase tracking-widest">Efficiency Pass</div>
                                                    <p className="text-[11px] text-white">Your use of Memoization here is excellent. O(n) complexity preserved.</p>
                                                </div>
                                                <div className="p-3 bg-red-500/10 border-l-2 border-red-500 rounded-r-lg">
                                                    <div className="flex items-center gap-2 text-[10px] font-black text-red-400 mb-1 uppercase tracking-widest">Critical Bug</div>
                                                    <p className="text-[11px] text-white">Infinite loop detected in useEffect dependency array. Add [data] to fix.</p>
                                                </div>
                                            </>
                                        )}
                                        {activeTool === 'performance' && (
                                            <>
                                                <div className="p-3 bg-[#00f0ff]/10 border-l-2 border-[#00f0ff] rounded-r-lg">
                                                    <div className="flex items-center gap-2 text-[10px] font-black text-[#00f0ff] mb-1 uppercase tracking-widest">Network Edge</div>
                                                    <p className="text-[11px] text-white">Consider lazy-loading this component to save 120kb on initial load.</p>
                                                </div>
                                                <div className="p-3 bg-yellow-400/10 border-l-2 border-yellow-400 rounded-r-lg">
                                                    <div className="flex items-center gap-2 text-[10px] font-black text-yellow-400 mb-1 uppercase tracking-widest">Bundle Tip</div>
                                                    <p className="text-[11px] text-white">Import only required lodash methods to reduce browser execution time.</p>
                                                </div>
                                            </>
                                        )}
                                        {activeTool === 'architecture' && (
                                            <>
                                                <div className="p-3 bg-[#b026ff]/10 border-l-2 border-[#b026ff] rounded-r-lg">
                                                    <div className="flex items-center gap-2 text-[10px] font-black text-[#b026ff] mb-1 uppercase tracking-widest">Pattern Suggestion</div>
                                                    <p className="text-[11px] text-white">The Factory Pattern would clean up this multi-step conditional rendering.</p>
                                                </div>
                                                <div className="p-3 bg-white/5 border-l-2 border-white/20 rounded-r-lg">
                                                    <div className="flex items-center gap-2 text-[10px] font-black text-white/50 mb-1 uppercase tracking-widest">DRY Violation</div>
                                                    <p className="text-[11px] text-white">Extract repeated state logic into a custom hook (useAuthSync).</p>
                                                </div>
                                            </>
                                        )}
                                    </div>
                                    <button className="w-full mt-6 py-2 rounded-lg bg-white/5 text-white text-[10px] font-black uppercase hover:bg-white/10 transition-all border border-white/5">
                                        View Full Report
                                    </button>
                                </div>

                                {/* Improvement Scorecard */}
                                <div className="glass-card p-6 border-white/10 flex items-center justify-between">
                                    <div className="space-y-1">
                                        <div className="text-[10px] text-muted-foreground font-black uppercase tracking-widest">Projected Growth</div>
                                        <div className="text-xl font-black text-white">+85 Reputation</div>
                                    </div>
                                    <CheckCircle2 className="w-10 h-10 text-green-500 opacity-50" />
                                </div>
                            </motion.div>
                        )}
                    </AnimatePresence>
                </motion.div>
            </div>
        </div>
    );
}
