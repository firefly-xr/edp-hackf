import { motion } from 'framer-motion';
import { Mail, Lock, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const FADE_UP = {
    initial: { opacity: 0, y: 30 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.5 }
};

export function SignIn() {
    return (
        <div className="pt-32 pb-16 min-h-screen flex items-center justify-center">
            <motion.div
                {...FADE_UP}
                className="w-full max-w-md px-6"
            >
                <div className="glass-card flex flex-col items-center">
                    <div className="p-3 rounded-xl bg-white/5 mb-6 neon-border relative group">
                        <Lock className="w-8 h-8 text-[#00f0ff]" />
                        <div className="absolute inset-0 bg-current opacity-20 blur-xl group-hover:opacity-40 transition-opacity" />
                    </div>

                    <h2 className="text-3xl font-bold mb-2 text-white">Welcome Back</h2>
                    <p className="text-muted-foreground mb-8 text-center">
                        Securely sign in to your accounts.
                    </p>

                    <form className="w-full flex flex-col gap-4">
                        <div className="relative">
                            <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                            <input
                                type="email"
                                placeholder="Email Address"
                                className="w-full bg-black/40 border border-white/10 rounded-xl pl-12 pr-4 py-3 text-white placeholder:text-muted-foreground focus:border-[#00f0ff] focus:outline-none focus:ring-1 focus:ring-[#00f0ff] transition-all"
                                required
                            />
                        </div>

                        <div className="relative">
                            <Lock className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                            <input
                                type="password"
                                placeholder="Password"
                                className="w-full bg-black/40 border border-white/10 rounded-xl pl-12 pr-4 py-3 text-white placeholder:text-muted-foreground focus:border-[#00f0ff] focus:outline-none focus:ring-1 focus:ring-[#00f0ff] transition-all"
                                required
                            />
                        </div>

                        <div className="flex justify-end w-full mb-2">
                            <button type="button" className="text-sm text-[#00f0ff] hover:text-[#00f0ff]/80 transition-colors">
                                Forgot password?
                            </button>
                        </div>

                        <button
                            type="submit"
                            className="w-full py-3 rounded-xl bg-[#00f0ff] text-black font-bold hover:bg-[#00f0ff]/90 hover:shadow-[0_0_20px_#00f0ff4d] transition-all flex items-center justify-center gap-2"
                        >
                            Sign In <ArrowRight className="w-4 h-4" />
                        </button>
                    </form>

                    <div className="mt-8 text-sm text-muted-foreground">
                        Don't have an account?{' '}
                        <Link to="/signup" className="text-[#b026ff] font-bold hover:text-[#b026ff]/80 transition-colors">
                            Sign up here
                        </Link>
                    </div>
                </div>
            </motion.div>
        </div>
    );
}
