import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Code, UserCircle2 } from 'lucide-react';

export function Navbar() {
    return (
        <motion.nav
            initial={{ y: -20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            className="fixed top-0 left-0 right-0 h-16 glass border-b border-white/10 z-50 px-6 flex items-center justify-between"
        >
            <Link to="/" className="flex items-center gap-2 group">
                <div className="relative flex items-center justify-center w-8 h-8 rounded-lg bg-gradient-to-br from-[#00f0ff] to-[#b026ff] p-[1px]">
                    <div className="bg-background w-full h-full rounded-[7px] flex items-center justify-center">
                        <Code className="w-4 h-4 text-[#00f0ff] group-hover:text-[#b026ff] transition-colors" />
                    </div>
                </div>
                <span className="text-xl font-bold tracking-tight">SkillChain</span>
            </Link>

            <div className="hidden md:flex items-center gap-6 text-sm font-medium">
                <Link to="/marketplace" className="text-muted-foreground hover:text-white transition-colors">Problems</Link>
                <Link to="/dashboard/engineer" className="text-muted-foreground hover:text-white transition-colors">Engineers</Link>
                <Link to="/pricing" className="text-muted-foreground hover:text-white transition-colors">Pricing</Link>
            </div>

            <div className="flex items-center gap-4">
                <Link
                    to="/dashboard/business"
                    className="text-sm font-medium hover:text-[#00f0ff] transition-colors hidden sm:block"
                >
                    Post a Problem
                </Link>
                <Link to="/signin" className="flex items-center gap-2 px-4 py-2 rounded-lg bg-white/5 hover:bg-white/10 border border-white/10 transition-all">
                    <UserCircle2 className="w-4 h-4" />
                    <span className="text-sm font-medium">Sign In</span>
                </Link>
            </div>
        </motion.nav>
    );
}
