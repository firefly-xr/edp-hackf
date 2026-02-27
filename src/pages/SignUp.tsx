import { motion } from 'framer-motion';
import { User, Mail, Lock, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const FADE_UP = {
    initial: { opacity: 0, y: 30 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.5 }
};

export function SignUp() {
    return (
        <div className="pt-32 pb-16 min-h-screen flex items-center justify-center">
            <motion.div
                {...FADE_UP}
                className="w-full max-w-md px-6"
            >
                <div className="glass-card flex flex-col items-center">
                    <div className="p-3 rounded-xl bg-white/5 mb-6 border border-[#b026ff]/50 shadow-[0_0_15px_#b026ff4d] relative group">
                        <User className="w-8 h-8 text-[#b026ff]" />
                        <div className="absolute inset-0 bg-current opacity-20 blur-xl group-hover:opacity-40 transition-opacity" />
                    </div>

                    <h2 className="text-3xl font-bold mb-2 text-white">Create Account</h2>
                    <p className="text-muted-foreground mb-8 text-center">
                        Join the Experience Economy today.
                    </p>

                    <form className="w-full flex flex-col gap-4">
                        <div className="relative">
                            <User className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                            <input
                                type="text"
                                placeholder="Full Name"
                                className="w-full bg-black/40 border border-white/10 rounded-xl pl-12 pr-4 py-3 text-white placeholder:text-muted-foreground focus:border-[#b026ff] focus:outline-none focus:ring-1 focus:ring-[#b026ff] transition-all"
                                required
                            />
                        </div>

                        <div className="relative">
                            <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                            <input
                                type="email"
                                placeholder="Email Address"
                                className="w-full bg-black/40 border border-white/10 rounded-xl pl-12 pr-4 py-3 text-white placeholder:text-muted-foreground focus:border-[#b026ff] focus:outline-none focus:ring-1 focus:ring-[#b026ff] transition-all"
                                required
                            />
                        </div>

                        <div className="relative">
                            <Lock className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                            <input
                                type="password"
                                placeholder="Password"
                                className="w-full bg-black/40 border border-white/10 rounded-xl pl-12 pr-4 py-3 text-white placeholder:text-muted-foreground focus:border-[#b026ff] focus:outline-none focus:ring-1 focus:ring-[#b026ff] transition-all"
                                required
                            />
                        </div>

                        <button
                            type="submit"
                            className="w-full py-3 mt-4 rounded-xl bg-gradient-to-r from-[#00f0ff] to-[#b026ff] text-white font-bold hover:opacity-90 transition-opacity flex items-center justify-center gap-2 shadow-[0_0_20px_#b026ff4d]"
                        >
                            Create Account <ArrowRight className="w-4 h-4" />
                        </button>
                    </form>

                    <div className="mt-8 text-sm text-muted-foreground">
                        Already have an account?{' '}
                        <Link to="/signin" className="text-[#00f0ff] font-bold hover:text-[#00f0ff]/80 transition-colors">
                            Sign in here
                        </Link>
                    </div>
                </div>
            </motion.div>
        </div>
    );
}
