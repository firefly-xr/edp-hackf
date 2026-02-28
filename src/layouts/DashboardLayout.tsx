import { useState, useEffect } from 'react';
import { useAuth } from '../contexts/AuthContext';
import { useNavigate, Outlet } from 'react-router-dom';
import { DashboardSidebar } from '../components/dashboard/DashboardSidebar';

export function DashboardLayout() {
    const { user, profile, loading } = useAuth();
    const navigate = useNavigate();
    const [sidebarCollapsed, setSidebarCollapsed] = useState(false);

    useEffect(() => {
        if (!loading && !user) {
            navigate('/signin');
        }
    }, [user, loading, navigate]);

    if (loading || !user) {
        return <div className="min-h-screen flex items-center justify-center text-white bg-black">
            <div className="animate-pulse text-[#00f0ff] font-bold tracking-widest uppercase">Initializing Ecosystem...</div>
        </div>;
    }

    return (
        <div className="min-h-screen bg-black text-foreground relative flex overflow-hidden">
            {/* Ambient Backgrounds */}
            <div className="fixed inset-0 overflow-hidden pointer-events-none -z-10">
                <div className="absolute top-[10%] right-[10%] w-[40vw] h-[40vw] rounded-full bg-neon-blue/5 blur-[120px]" />
                <div className="absolute bottom-[10%] left-[10%] w-[30vw] h-[30vw] rounded-full bg-neon-purple/5 blur-[100px]" />
            </div>

            <DashboardSidebar collapsed={sidebarCollapsed} setCollapsed={setSidebarCollapsed} />

            <div className={`flex-1 transition-all duration-300 flex flex-col ${sidebarCollapsed ? 'ml-20' : 'ml-64'}`}>
                <header className="h-16 border-b border-white/5 flex items-center justify-end px-8 bg-black/10 backdrop-blur-md sticky top-0 z-40">

                    <div className="flex items-center gap-6">
                        {/* Status / Workspace Link */}
                        <div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/5 border border-white/10 text-[10px] font-bold text-muted-foreground">
                            <div className="w-1.5 h-1.5 rounded-full bg-green-500 shadow-[0_0_8px_#22c55e]" />
                            {profile?.role?.toUpperCase() || 'ENGINEER'} WORKSPACE
                        </div>

                        <div className="flex items-center gap-4 pl-6 border-l border-white/10">
                            <div className="text-right hidden sm:block">
                                <div className="text-xs font-bold text-white leading-none mb-1">
                                    {profile?.name || user.displayName || user.email?.split('@')[0] || 'Member'}
                                </div>
                                <button
                                    onClick={() => navigate('/dashboard/engineer/settings')}
                                    className="text-[10px] text-[#00f0ff] hover:underline leading-none flex items-center gap-1"
                                >
                                    Change Profile
                                </button>
                            </div>

                            <div
                                onClick={() => navigate('/dashboard/engineer/settings')}
                                className="relative w-8 h-8 rounded-lg bg-gradient-to-br from-[#00f0ff] to-[#b026ff] p-[1.5px] cursor-pointer hover:scale-105 transition-transform"
                            >
                                <div className="w-full h-full bg-black rounded-[7px] flex items-center justify-center text-[10px] font-black overflow-hidden object-cover">
                                    {user.photoURL ? (
                                        <img src={user.photoURL} alt="Profile" className="w-full h-full object-cover" />
                                    ) : (
                                        (user.displayName?.charAt(0) || user.email?.charAt(0) || 'E').toUpperCase()
                                    )}
                                </div>
                            </div>
                        </div>
                    </div>
                </header>

                <main className="flex-1 overflow-y-auto p-8 custom-scrollbar">
                    <div className="max-w-6xl mx-auto">
                        <Outlet />
                    </div>
                </main>
            </div>
        </div>
    );
}
