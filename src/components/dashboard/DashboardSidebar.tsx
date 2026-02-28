import { motion } from 'framer-motion';
import {
    LayoutDashboard,
    Rocket,
    Brain,
    Map,
    Building2,
    Cpu,
    LayoutGrid,
    ShieldCheck,
    Wallet,
    MessagesSquare,
    LogOut,
    ChevronLeft,
    ChevronRight,
    Settings
} from 'lucide-react';
import { useAuth } from '../../contexts/AuthContext';
import { useNavigate, useLocation } from 'react-router-dom';
import logo from '../../assets/logo.png';

interface SidebarItemProps {
    icon: any;
    label: string;
    path: string;
    active: boolean;
    onClick: () => void;
    collapsed: boolean;
    color?: string;
}

const SidebarItem = ({ icon: Icon, label, active, onClick, collapsed, color }: Omit<SidebarItemProps, 'path'>) => {
    return (
        <button
            onClick={onClick}
            className={`w-full flex items-center gap-3 px-3 py-3 rounded-xl transition-all duration-300 group relative ${active
                ? 'bg-gradient-to-r from-[#00f0ff]/10 to-[#b026ff]/10 text-white'
                : 'text-muted-foreground hover:text-white hover:bg-white/5'
                }`}
        >
            <Icon className={`w-5 h-5 flex-shrink-0 transition-transform duration-300 group-hover:scale-110 ${active ? (color || 'text-[#00f0ff]') : ''}`} />
            {!collapsed && (
                <span className="text-sm font-medium whitespace-nowrap overflow-hidden transition-all duration-300">
                    {label}
                </span>
            )}

            {active && (
                <div className="absolute left-0 top-1/2 -translate-y-1/2 w-1 h-6 bg-gradient-to-b from-[#00f0ff] to-[#b026ff] rounded-r-full shadow-[0_0_10px_#00f0ff]" />
            )}

            {collapsed && (
                <div className="absolute left-full ml-4 px-2 py-1 bg-black border border-white/10 rounded-md text-[10px] opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none z-[100] whitespace-nowrap shadow-xl">
                    {label}
                </div>
            )}
        </button>
    );
};

export function DashboardSidebar({ collapsed, setCollapsed }: { collapsed: boolean; setCollapsed: (v: boolean) => void }) {
    const { logout } = useAuth();
    const navigate = useNavigate();
    const location = useLocation();

    const menuItems = [
        { icon: LayoutDashboard, label: 'Overview', path: '/dashboard/engineer', color: 'text-blue-400' },
        { icon: Rocket, label: 'Start Experience', path: '/dashboard/engineer/experience', color: 'text-[#00f0ff]' },
        { icon: Brain, label: 'Skill Growth', path: '/dashboard/engineer/growth', color: 'text-[#b026ff]' },
        { icon: Map, label: 'Growth Tracker', path: '/dashboard/engineer/tracker', color: 'text-yellow-400' },
        { icon: Building2, label: 'Real Work Feed', path: '/dashboard/engineer/work', color: 'text-orange-400' },
        { icon: Cpu, label: 'AI Mentor', path: '/dashboard/engineer/ai-mentor', color: 'text-cyan-400' },
        { icon: LayoutGrid, label: 'Portfolio Builder', path: '/dashboard/engineer/portfolio', color: 'text-purple-400' },
        { icon: ShieldCheck, label: 'Reputation Center', path: '/dashboard/engineer/reputation', color: 'text-blue-500' },
        { icon: Wallet, label: 'Earnings', path: '/dashboard/engineer/earnings', color: 'text-green-400' },
        { icon: MessagesSquare, label: 'Community', path: '/dashboard/engineer/community', color: 'text-pink-400' },
        { icon: Settings, label: 'Account Settings', path: '/dashboard/engineer/settings', color: 'text-gray-400' },
    ];

    const handleLogout = async () => {
        try {
            await logout();
            navigate('/signin');
        } catch (error) {
            console.error("Logout error:", error);
        }
    };

    return (
        <aside
            className={`fixed left-0 top-0 bottom-0 bg-[#0a0a0a] border-r border-white/5 transition-all duration-300 z-50 flex flex-col ${collapsed ? 'w-20' : 'w-64'
                }`}
        >
            {/* Logo Area */}
            <div className="h-16 flex items-center justify-between px-6 border-b border-white/5">
                <div
                    onClick={() => navigate('/')}
                    className="flex items-center gap-3 cursor-pointer group overflow-hidden"
                >
                    <div className="w-8 h-8 rounded-lg overflow-hidden flex items-center justify-center p-0.5 bg-gradient-to-br from-[#00f0ff] to-[#b026ff] flex-shrink-0">
                        <img src={logo} alt="Logo" className="w-full h-full object-contain rounded-[6px] bg-black" />
                    </div>
                    {!collapsed && (
                        <motion.span
                            initial={{ opacity: 0, x: -10 }}
                            animate={{ opacity: 1, x: 0 }}
                            className="text-lg font-bold tracking-tight text-white group-hover:text-[#00f0ff] transition-colors whitespace-nowrap"
                        >
                            SkillChain
                        </motion.span>
                    )}
                </div>

                {!collapsed && (
                    <button
                        onClick={() => setCollapsed(true)}
                        className="p-1 rounded-md hover:bg-white/5 text-muted-foreground hover:text-white transition-colors"
                    >
                        <ChevronLeft size={16} />
                    </button>
                )}
                {collapsed && (
                    <button
                        onClick={() => setCollapsed(false)}
                        className="absolute -right-3 top-16 p-1 rounded-full bg-[#00f0ff] text-black shadow-lg shadow-[#00f0ff]/50 z-50"
                    >
                        <ChevronRight size={12} />
                    </button>
                )}
            </div>

            {/* Menu Items */}
            <div className="flex-1 overflow-y-auto overflow-x-hidden p-3 space-y-1 custom-scrollbar">
                {menuItems.map((item) => (
                    <SidebarItem
                        key={item.path}
                        {...item}
                        active={location.pathname === item.path}
                        onClick={() => navigate(item.path)}
                        collapsed={collapsed}
                    />
                ))}
            </div>

            {/* Bottom area */}
            <div className="p-3 border-t border-white/5">
                <button
                    onClick={handleLogout}
                    className="w-full flex items-center gap-3 px-3 py-3 rounded-xl text-red-400 hover:bg-red-400/10 transition-all group relative"
                >
                    <LogOut className="w-5 h-5 flex-shrink-0 group-hover:scale-110 transition-transform" />
                    {!collapsed && <span className="text-sm font-medium">Log Out</span>}

                    {collapsed && (
                        <div className="absolute left-full ml-4 px-2 py-1 bg-black border border-white/10 rounded-md text-[10px] opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none z-[100] whitespace-nowrap shadow-xl">
                            Log Out
                        </div>
                    )}
                </button>
            </div>
        </aside>
    );
}
