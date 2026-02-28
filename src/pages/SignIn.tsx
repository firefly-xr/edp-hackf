import { motion } from 'framer-motion';
import { ArrowRight, Github, Loader2 } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';
import { useState } from 'react';

const FADE_UP = {
    initial: { opacity: 0, y: 30 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.5 }
};

export function SignIn() {
    const navigate = useNavigate();
    const { signInWithGoogle, signInWithGithub } = useAuth();
    const [isLoading, setIsLoading] = useState<string | null>(null);
    const [selectedRole, setSelectedRole] = useState<'engineer' | 'enterprise'>('engineer');

    const handleStudentSignIn = (e: React.FormEvent) => {
        e.preventDefault();
        navigate('/');
    };

    const handleGoogle = async () => {
        try {
            setIsLoading('google');
            await signInWithGoogle(selectedRole);
            navigate('/');
        } catch (error) {
            console.error(error);
        } finally {
            setIsLoading(null);
        }
    };

    const handleGithub = async () => {
        try {
            setIsLoading('github');
            await signInWithGithub(selectedRole);
            navigate('/');
        } catch (error) {
            console.error(error);
        } finally {
            setIsLoading(null);
        }
    };

    return (
        <div className="pt-32 pb-16 min-h-screen flex items-center justify-center">
            <motion.div
                {...FADE_UP}
                className="w-full max-w-md px-6"
            >
                <div className="glass-card flex flex-col items-center">
                    <div className="flex bg-white/5 p-1 rounded-xl mb-8 w-full">
                        <button
                            onClick={() => setSelectedRole('engineer')}
                            className={`flex-1 py-2 px-4 rounded-lg text-sm font-bold transition-all ${selectedRole === 'engineer' ? 'bg-[#00f0ff] text-black shadow-[0_0_15px_#00f0ff4d]' : 'text-muted-foreground hover:text-white'}`}
                        >
                            Engineer
                        </button>
                        <button
                            onClick={() => setSelectedRole('enterprise')}
                            className={`flex-1 py-2 px-4 rounded-lg text-sm font-bold transition-all ${selectedRole === 'enterprise' ? 'bg-[#b026ff] text-white shadow-[0_0_15px_#b026ff4d]' : 'text-muted-foreground hover:text-white'}`}
                        >
                            Enterprise
                        </button>
                    </div>

                    <h2 className="text-3xl md:text-4xl font-extrabold mb-3 text-white text-center tracking-tight">
                        {selectedRole === 'engineer' ? 'Start Building Real Experience' : 'Hire Verified Talent'}
                    </h2>
                    <p className="text-muted-foreground mb-8 text-center text-sm md:text-base px-4">
                        {selectedRole === 'engineer'
                            ? 'Gain skills, contribute to real projects, and build verified reputation.'
                            : 'Post real-world problems and find engineers based on verified performance.'}
                    </p>

                    <div className="w-full flex flex-col gap-4">
                        {selectedRole === 'engineer' && (
                            <form onSubmit={handleStudentSignIn} className="w-full">
                                <button
                                    type="submit"
                                    className="w-full py-4 rounded-xl bg-gradient-to-r from-[#00f0ff] to-[#b026ff] text-white font-bold hover:opacity-90 transition-all flex items-center justify-center gap-2 shadow-[0_0_20px_#b026ff4d]"
                                >
                                    Continue as Student / Fresher <ArrowRight className="w-4 h-4 text-white" />
                                </button>
                            </form>
                        )}

                        <div className="relative my-4">
                            <div className="absolute inset-0 flex items-center">
                                <span className="w-full border-t border-white/10" />
                            </div>
                            <div className="relative flex justify-center text-xs uppercase">
                                <span className="bg-[#0a0a0a] px-2 text-muted-foreground tracking-widest">Or connect with</span>
                            </div>
                        </div>

                        {/* Third-Party Connectors */}
                        <div className="flex flex-col gap-3">
                            <button
                                onClick={handleGoogle}
                                disabled={!!isLoading}
                                className={`w-full py-3.5 rounded-xl bg-white text-black font-bold hover:bg-gray-100 transition-colors flex items-center justify-center gap-3 disabled:opacity-50`}
                            >
                                {isLoading === 'google' ? <Loader2 className="w-5 h-5 animate-spin" /> : (
                                    <svg className="w-5 h-5" viewBox="0 0 24 24">
                                        <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4" />
                                        <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853" />
                                        <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05" />
                                        <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335" />
                                    </svg>
                                )}
                                Continue with Google
                            </button>
                            <button
                                onClick={handleGithub}
                                disabled={!!isLoading}
                                className="w-full py-3.5 rounded-xl border border-white/20 bg-white/5 hover:bg-white/10 text-white font-bold transition-all flex items-center justify-center gap-3 group disabled:opacity-50"
                            >
                                {isLoading === 'github' ? <Loader2 className="w-5 h-5 animate-spin" /> : <Github className="w-5 h-5 group-hover:scale-110 transition-transform" />}
                                Continue with GitHub <span className="text-xs font-normal text-[#00f0ff] ml-1 bg-[#00f0ff]/10 px-2 rounded-md py-0.5 border border-[#00f0ff]/20">Recommended</span>
                            </button>
                        </div>
                    </div>

                    <div className="mt-8 pt-6 border-t border-white/10 w-full text-center text-sm text-muted-foreground">
                        {selectedRole === 'engineer' ? (
                            <>
                                Are you a business?{' '}
                                <button
                                    onClick={() => setSelectedRole('enterprise')}
                                    className="text-[#00f0ff] font-bold hover:underline transition-all"
                                >
                                    Sign in here
                                </button>
                            </>
                        ) : (
                            <>
                                Are you an engineer?{' '}
                                <button
                                    onClick={() => setSelectedRole('engineer')}
                                    className="text-[#b026ff] font-bold hover:underline transition-all"
                                >
                                    Sign in here
                                </button>
                            </>
                        )}
                    </div>
                </div>
            </motion.div>
        </div>
    );
}
