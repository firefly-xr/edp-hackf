import { motion } from 'framer-motion';
import { CheckCircle, Sparkles, Building2, Zap } from 'lucide-react';

export function Pricing() {
    return (
        <div className="pt-24 pb-16 container mx-auto px-6 max-w-6xl">
            <div className="text-center mb-16">
                <h1 className="text-4xl md:text-6xl font-black mb-6">Simple, transparent pricing</h1>
                <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                    Whether you're an engineer building your verified portfolio, or a business seeking top 1% talent, we have a plan for you.
                </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
                {/* Engineer Free */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="glass-card flex flex-col"
                >
                    <div className="mb-8">
                        <h3 className="text-2xl font-bold mb-2">Engineer Basic</h3>
                        <p className="text-muted-foreground h-10">Everything you need to build your verified reputation.</p>
                    </div>
                    <div className="mb-8">
                        <span className="text-5xl font-black text-white">$0</span>
                        <span className="text-muted-foreground">/forever</span>
                    </div>
                    <ul className="space-y-4 mb-8 flex-1">
                        {[
                            'Solve unlimited public problems',
                            'Standard AI Evaluation (up to 5s)',
                            'Public Verified Profile',
                            'Earn monetary bounties',
                            'Standard Experience Badges'
                        ].map((feature, i) => (
                            <li key={i} className="flex items-start gap-3 text-sm text-white/80">
                                <CheckCircle className="w-5 h-5 text-green-400 shrink-0" /> {feature}
                            </li>
                        ))}
                    </ul>
                    <button className="w-full py-4 rounded-xl border border-white/20 hover:bg-white/10 transition-colors font-bold text-white">
                        Get Started Free
                    </button>
                </motion.div>

                {/* Engineer Pro */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.1 }}
                    className="glass-card relative flex flex-col border-[#b026ff]/50 shadow-[0_0_30px_#b026ff26] overflow-hidden"
                >
                    <div className="absolute top-0 right-0 py-1 px-4 bg-gradient-to-r from-[#00f0ff] to-[#b026ff] text-background text-xs font-black uppercase tracking-wider rounded-bl-xl z-10">
                        Most Popular
                    </div>
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-gradient-to-br from-[#00f0ff]/10 to-[#b026ff]/10 blur-3xl rounded-full -z-10" />

                    <div className="mb-8">
                        <h3 className="text-2xl font-bold mb-2 flex items-center gap-2">
                            <Sparkles className="w-6 h-6 text-[#b026ff]" /> Engineer Pro
                        </h3>
                        <p className="text-muted-foreground h-10">Supercharge your portfolio and get priority access.</p>
                    </div>
                    <div className="mb-8">
                        <span className="text-5xl font-black text-white text-glow">$12</span>
                        <span className="text-muted-foreground">/month</span>
                    </div>
                    <ul className="space-y-4 mb-8 flex-1">
                        {[
                            'Everything in Basic',
                            'Priority AI Evaluation (sub-second)',
                            'Detailed line-by-line AI mentoring',
                            'Early access to high-bounty problems',
                            'Auto Portfolio Builder AI',
                            'Custom profile domain'
                        ].map((feature, i) => (
                            <li key={i} className="flex items-start gap-3 text-sm text-white flex-1">
                                <Zap className="w-5 h-5 text-[#b026ff] shrink-0" /> {feature}
                            </li>
                        ))}
                    </ul>
                    <button className="w-full py-4 rounded-xl font-black text-black bg-gradient-to-r from-[#00f0ff] to-[#b026ff] hover:opacity-90 transition-opacity flex items-center justify-center gap-2">
                        Upgrade to Pro <Sparkles className="w-5 h-5" />
                    </button>
                </motion.div>

                {/* Business */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2 }}
                    className="glass-card flex flex-col"
                >
                    <div className="mb-8">
                        <h3 className="text-2xl font-bold mb-2 flex items-center gap-2">
                            <Building2 className="w-6 h-6 text-[#00f0ff]" /> Business
                        </h3>
                        <p className="text-muted-foreground h-10">Post problems and hire the top 1% without resumes.</p>
                    </div>
                    <div className="mb-8">
                        <span className="text-5xl font-black text-white">$499</span>
                        <span className="text-muted-foreground">/month</span>
                    </div>
                    <ul className="space-y-4 mb-8 flex-1">
                        {[
                            'Post up to 10 Micro-Problems / mo',
                            'Unlimited AI automated evaluations',
                            'Direct messaging to top performers',
                            'Advanced talent discovery analytics',
                            'Zero hiring commission fees',
                            'Dedicated account manager'
                        ].map((feature, i) => (
                            <li key={i} className="flex items-start gap-3 text-sm text-white/80">
                                <CheckCircle className="w-5 h-5 text-[#00f0ff] shrink-0" /> {feature}
                            </li>
                        ))}
                    </ul>
                    <button className="w-full py-4 rounded-xl bg-white text-black font-bold hover:bg-gray-100 transition-colors">
                        Start Hiring
                    </button>
                </motion.div>
            </div>

        </div>
    );
}
