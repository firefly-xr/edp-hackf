import { useState } from 'react';
import { motion } from 'framer-motion';
import { Brain, CheckCircle, CodeSquare, Github, Terminal, UploadCloud, XCircle } from 'lucide-react';

export function ProblemDetail() {
    const [isEvaluating, setIsEvaluating] = useState(false);
    const [showResults, setShowResults] = useState(false);

    const handleSimulateSubmit = () => {
        setIsEvaluating(true);
        setTimeout(() => {
            setIsEvaluating(false);
            setShowResults(true);
        }, 3000); // simulate 3s evaluation
    };

    return (
        <div className="pt-24 pb-16 container mx-auto px-6 max-w-5xl">
            <div className="mb-8">
                <h1 className="text-3xl md:text-5xl font-bold mb-4">Optimize Payment Gateway Webhook</h1>
                <div className="flex flex-wrap items-center gap-4 text-sm text-muted-foreground">
                    <span className="px-3 py-1 bg-white/5 border border-white/10 rounded-md text-white font-medium flex items-center gap-2">
                        <Terminal className="w-4 h-4" /> Stripe API
                    </span>
                    <span className="text-green-400 font-bold px-2 py-1 bg-green-400/10 rounded">Reward: $450</span>
                    <span className="text-orange-400 font-bold px-2 py-1 bg-orange-400/10 rounded">Hard</span>
                    <span>12 Submissions</span>
                    <span>2 Days Left</span>
                </div>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
                <div className="md:col-span-2 space-y-8">
                    {/* Problem Description */}
                    <div className="glass-card">
                        <h3 className="text-xl font-bold mb-4 border-b border-white/10 pb-2">The Challenge</h3>
                        <div className="space-y-4 text-muted-foreground">
                            <p>We are experiencing a race condition in our webhook processor under high load (10k+ req/sec). Currently, duplicate payment success events are occasionally processed simultaneously, leading to double-crediting user accounts.</p>
                            <p>Your task is to implement a robust distributed locking mechanism in the provided Node.js/Redis boilerplate that guarantees idempotency without severely degrading event processing throughput.</p>

                            <h4 className="font-bold text-white mt-6 mb-2">Requirements:</h4>
                            <ul className="list-disc pl-5 space-y-1">
                                <li>Strict idempotency for incoming `payment.succeeded` events</li>
                                <li>P99 processing latency must remain under 50ms</li>
                                <li>Graceful failure handling and backoff on Redis connection loss</li>
                                <li>Write comprehensive unit and integration tests</li>
                            </ul>
                        </div>
                    </div>

                    {/* Submission Area */}
                    <div className="glass-card relative overflow-hidden">
                        {isEvaluating && (
                            <div className="absolute inset-0 bg-background/80 backdrop-blur-sm z-10 flex flex-col items-center justify-center">
                                <Brain className="w-12 h-12 text-[#b026ff] animate-pulse mb-4" />
                                <h3 className="text-xl font-bold text-white mb-2">AI Evaluation in Progress</h3>
                                <p className="text-muted-foreground text-sm">Analyzing abstract syntax tree and running test suites...</p>
                                <div className="w-64 h-2 bg-white/10 rounded-full overflow-hidden mt-6">
                                    <motion.div
                                        initial={{ width: '0%' }}
                                        animate={{ width: '100%' }}
                                        transition={{ duration: 3, ease: 'linear' }}
                                        className="h-full bg-gradient-to-r from-[#00f0ff] to-[#b026ff]"
                                    />
                                </div>
                            </div>
                        )}

                        {!showResults ? (
                            <>
                                <h3 className="text-xl font-bold mb-6">Submit Your Solution</h3>

                                <div className="space-y-4">
                                    <div className="border border-white/10 border-dashed rounded-xl p-8 flex flex-col items-center justify-center text-center bg-white/[0.02] hover:bg-white/[0.04] transition-colors cursor-pointer group">
                                        <UploadCloud className="w-8 h-8 text-muted-foreground group-hover:text-[#00f0ff] mb-3 transition-colors" />
                                        <div className="font-medium text-white mb-1">Upload Source Code (.zip)</div>
                                        <div className="text-xs text-muted-foreground">Max file size: 50MB</div>
                                    </div>

                                    <div className="flex items-center gap-4 py-2">
                                        <div className="flex-1 border-t border-white/10" />
                                        <div className="text-xs text-muted-foreground uppercase">OR</div>
                                        <div className="flex-1 border-t border-white/10" />
                                    </div>

                                    <div className="flex gap-4">
                                        <div className="relative flex-1">
                                            <Github className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                                            <input
                                                type="text"
                                                placeholder="Paste GitHub Repository URL"
                                                className="w-full bg-white/5 border border-white/10 rounded-xl py-3 pl-10 pr-4 text-white focus:outline-none focus:border-[#b026ff] transition-colors"
                                            />
                                        </div>
                                    </div>

                                    <button
                                        onClick={handleSimulateSubmit}
                                        className="w-full py-4 rounded-xl bg-white text-black font-bold hover:bg-gray-100 transition-colors mt-4 flex items-center justify-center gap-2"
                                    >
                                        <CodeSquare className="w-5 h-5" /> Execute AI Evaluation
                                    </button>
                                </div>
                            </>
                        ) : (
                            <motion.div
                                initial={{ opacity: 0, scale: 0.95 }}
                                animate={{ opacity: 1, scale: 1 }}
                            >
                                <div className="flex items-center gap-3 mb-6">
                                    <CheckCircle className="w-8 h-8 text-green-400" />
                                    <div>
                                        <h3 className="text-2xl font-bold text-white">Evaluation Complete</h3>
                                        <p className="text-green-400 font-medium">+320 Experience Points Earned</p>
                                    </div>
                                </div>

                                <div className="grid grid-cols-2 gap-4 mb-6">
                                    <div className="p-4 rounded-xl bg-white/5 border border-white/10 text-center">
                                        <div className="text-sm text-muted-foreground mb-1">Code Quality</div>
                                        <div className="text-3xl font-bold text-white text-glow">98%</div>
                                    </div>
                                    <div className="p-4 rounded-xl bg-white/5 border border-white/10 text-center">
                                        <div className="text-sm text-muted-foreground mb-1">Efficiency</div>
                                        <div className="text-3xl font-bold text-white text-glow">94%</div>
                                    </div>
                                </div>

                                <div className="bg-green-400/10 border border-green-400/20 rounded-xl p-4 mb-6">
                                    <h4 className="font-bold text-green-400 mb-2">AI Feedback:</h4>
                                    <p className="text-sm text-white/90">
                                        Excellent implementation of the Redlock algorithm. The backoff strategy handles Redis reconnects flawlessly without blocking the main event loop. Memory footprint is minimal. Great job.
                                    </p>
                                </div>

                                <button
                                    onClick={() => setShowResults(false)}
                                    className="w-full py-3 rounded-xl border border-white/20 hover:bg-white/10 transition-colors font-medium text-white"
                                >
                                    Submit Another Solution
                                </button>
                            </motion.div>
                        )}
                    </div>
                </div>

                {/* Right Sidebar */}
                <div className="space-y-6">
                    <div className="glass-card">
                        <h3 className="font-bold text-lg mb-4">Required Skills</h3>
                        <div className="flex flex-wrap gap-2">
                            {['Node.js', 'Redis', 'Distributed Systems', 'TypeScript'].map((skill, i) => (
                                <span key={i} className="px-2 py-1 text-sm rounded bg-[#00f0ff]/10 text-[#00f0ff] border border-[#00f0ff]/20">
                                    {skill}
                                </span>
                            ))}
                        </div>
                    </div>

                    <div className="glass-card">
                        <h3 className="font-bold text-lg mb-4">Evaluation Criteria</h3>
                        <ul className="space-y-3 text-sm text-muted-foreground">
                            <li className="flex items-start gap-2">
                                <CheckCircle className="w-4 h-4 text-green-400 mt-0.5 shrink-0" /> Focus on Idempotency over absolute speed.
                            </li>
                            <li className="flex items-start gap-2">
                                <CheckCircle className="w-4 h-4 text-green-400 mt-0.5 shrink-0" /> Proper error boundaries are required.
                            </li>
                            <li className="flex items-start gap-2">
                                <XCircle className="w-4 h-4 text-red-400 mt-0.5 shrink-0" /> Do not use local memory caching (must be distributed).
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
}
