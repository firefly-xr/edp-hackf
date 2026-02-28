import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { useAuth } from '../contexts/AuthContext';
import { UserCircle2, LogOut, LayoutGrid } from 'lucide-react';
import logo from '../assets/logo.png';

export function Navbar() {
    const { user, logout } = useAuth();
    return (
        <motion.nav
            initial={{ y: -20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            className="fixed top-0 left-0 right-0 h-16 glass border-b border-white/10 z-50 px-6 flex items-center justify-between"
        >
            <Link to="/" className="flex items-center gap-2 group">
                <div className="w-8 h-8 rounded-lg overflow-hidden flex items-center justify-center p-0.5 bg-gradient-to-br from-[#00f0ff] to-[#b026ff]">
                    <img src={logo} alt="SkillChain Logo" className="w-full h-full object-contain rounded-[6px] bg-black" />
                </div>
                <span className="text-xl font-bold tracking-tight">SkillChain</span>
            </Link>

            <div className="hidden lg:flex items-center gap-6 text-sm font-medium">
                <Link to="/" className="text-muted-foreground hover:text-white transition-colors">Home</Link>
                <Link to="/marketplace" className="text-muted-foreground hover:text-white transition-colors">Challenges</Link>
                <Link to="/apprenticeships" className="text-muted-foreground hover:text-white transition-colors">Apprenticeships</Link>
                <Link to="/reputation" className="text-muted-foreground hover:text-white transition-colors">Reputation</Link>
                <Link to="/community" className="text-muted-foreground hover:text-white transition-colors">Community</Link>
                <Link to="/business-solutions" className="text-muted-foreground hover:text-white transition-colors">Business Solutions</Link>
                <Link to="/earnings" className="text-[#00f0ff]/80 hover:text-[#00f0ff] transition-colors">Earnings</Link>
            </div>

            <div className="flex items-center gap-4">
                {user ? (
                    <div className="flex items-center gap-3">
                        <Link to="/dashboard/engineer" className="flex items-center gap-2 px-4 py-2 rounded-lg bg-[#00f0ff]/10 text-[#00f0ff] border border-[#00f0ff]/20 hover:bg-[#00f0ff]/20 transition-all font-bold text-xs uppercase tracking-wider">
                            <LayoutGrid className="w-3.5 h-3.5" />
                            Dashboard
                        </Link>
                        <button
                            onClick={() => logout()}
                            className="p-2 rounded-lg bg-white/5 hover:bg-red-500/10 border border-white/10 hover:border-red-500/20 text-muted-foreground hover:text-red-400 transition-all"
                            title="Sign Out"
                        >
                            <LogOut className="w-4 h-4" />
                        </button>
                    </div>
                ) : (
                    <Link to="/signin" className="flex items-center gap-2 px-4 py-2 rounded-lg bg-white/5 hover:bg-white/10 border border-white/10 transition-all">
                        <UserCircle2 className="w-4 h-4" />
                        <span className="text-sm font-medium">Sign In</span>
                    </Link>
                )}
            </div>
        </motion.nav>
    );
}
