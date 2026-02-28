import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
    Building2, Search, Filter, Globe,
    Briefcase, MapPin,
    ArrowUpRight, Plus, X,
    Clock, TrendingUp, Users, Loader2
} from 'lucide-react';
import { useAuth } from '../../../contexts/AuthContext';
import { getAllProblems, createProblem, submitSolution, type Problem } from '../../../lib/firestore';

export function OpportunitiesFeed() {
    const { profile, user } = useAuth();
    const [search, setSearch] = useState('');
    const [problems, setProblems] = useState<Problem[]>([]);
    const [isLoading, setIsLoading] = useState(true);
    const [showPostModal, setShowPostModal] = useState(false);
    const [selectedProblem, setSelectedProblem] = useState<Problem | null>(null);
    const [showSubmitModal, setShowSubmitModal] = useState(false);

    // New Problem Form State
    const [newProblem, setNewProblem] = useState({
        title: '',
        description: '',
        difficulty: 'Beginner' as const,
        bounty: '',
        tags: ''
    });

    const [submission, setSubmission] = useState({
        link: ''
    });

    useEffect(() => {
        fetchProblems();
    }, []);

    const fetchProblems = async () => {
        try {
            setIsLoading(true);
            const data = await getAllProblems();
            setProblems(data);
        } catch (error) {
            console.error("Error fetching problems:", error);
        } finally {
            setIsLoading(false);
        }
    };

    const handleCreateProblem = async (e: React.FormEvent) => {
        e.preventDefault();
        if (!user || profile?.role !== 'enterprise') return;

        try {
            setIsLoading(true);
            await createProblem({
                title: newProblem.title,
                description: newProblem.description,
                difficulty: newProblem.difficulty,
                bounty: newProblem.bounty,
                postedBy: user.uid,
                tags: newProblem.tags.split(',').map(t => t.trim())
            });
            setShowPostModal(false);
            setNewProblem({ title: '', description: '', difficulty: 'Beginner', bounty: '', tags: '' });
            fetchProblems();
        } catch (error) {
            console.error("Error creating problem:", error);
        } finally {
            setIsLoading(false);
        }
    };

    const handleSubmitSolution = async (e: React.FormEvent) => {
        e.preventDefault();
        if (!user || !selectedProblem || profile?.role !== 'engineer') return;

        try {
            setIsLoading(true);
            await submitSolution({
                problemId: selectedProblem.id!,
                userId: user.uid,
                submissionLink: submission.link
            });
            setShowSubmitModal(false);
            setSubmission({ link: '' });
            setSelectedProblem(null);
            alert("Solution submitted! It will be reviewed by the enterprise.");
        } catch (error) {
            console.error("Error submitting solution:", error);
        } finally {
            setIsLoading(false);
        }
    };

    const FADE_UP = {
        initial: { opacity: 0, y: 10 },
        animate: { opacity: 1, y: 0 }
    };

    const filteredProblems = problems.filter(p =>
        p.title.toLowerCase().includes(search.toLowerCase()) ||
        p.tags.some(t => t.toLowerCase().includes(search.toLowerCase()))
    );

    return (
        <div className="space-y-8 pb-20">
            {/* Header Area */}
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
                <div>
                    <div className="flex items-center gap-3 mb-2">
                        <div className="p-2 rounded-xl bg-orange-400/10">
                            <Building2 className="w-6 h-6 text-orange-400" />
                        </div>
                        <h1 className="text-3xl font-black text-white tracking-tight uppercase">Opportunities Feed</h1>
                    </div>
                    <p className="text-muted-foreground max-w-md text-sm">
                        Direct industry exposure. Apply to real tasks, join production teams, and earn verified reputation.
                    </p>
                </div>

                {/* Filter / Search Bar */}
                <div className="flex items-center gap-3 w-full md:w-auto">
                    <div className="relative flex-1 md:w-64">
                        <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                        <input
                            type="text"
                            placeholder="Search roles or skills..."
                            className="w-full bg-white/5 border border-white/10 rounded-xl py-2.5 pl-10 pr-4 text-sm text-white focus:border-[#00f0ff] outline-none transition-all"
                            value={search}
                            onChange={(e) => setSearch(e.target.value)}
                        />
                    </div>

                    {profile?.role === 'enterprise' && (
                        <button
                            onClick={() => setShowPostModal(true)}
                            className="flex items-center gap-2 px-4 py-2.5 rounded-xl bg-gradient-to-r from-[#00f0ff] to-[#b026ff] text-white font-bold text-sm shadow-[0_0_15px_#b026ff4d] hover:opacity-90 transition-all"
                        >
                            <Plus className="w-4 h-4" /> Post Problem
                        </button>
                    )}

                    <button className="p-2.5 rounded-xl bg-white/5 border border-white/10 hover:bg-white/10 transition-colors">
                        <Filter className="w-5 h-5 text-white" />
                    </button>
                </div>
            </div>

            <div className="grid lg:grid-cols-12 gap-8">
                {/* Main Feed */}
                <div className="lg:col-span-8 space-y-4">
                    {isLoading ? (
                        <div className="flex flex-col items-center justify-center py-20 grayscale opacity-50">
                            <Loader2 className="w-8 h-8 animate-spin text-[#00f0ff] mb-4" />
                            <p className="text-sm font-bold tracking-widest uppercase text-muted-foreground">Syncing Bounties...</p>
                        </div>
                    ) : (
                        <AnimatePresence>
                            {filteredProblems.length > 0 ? filteredProblems.map((job, i) => (
                                <motion.div
                                    key={job.id}
                                    {...FADE_UP}
                                    transition={{ delay: i * 0.05 }}
                                    onClick={() => {
                                        if (profile?.role === 'engineer') {
                                            setSelectedProblem(job);
                                            setShowSubmitModal(true);
                                        }
                                    }}
                                    className="glass-card p-6 border-white/10 hover:border-[#00f0ff]/30 transition-all cursor-pointer group flex items-start gap-6"
                                >
                                    <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-white/10 to-white/5 border border-white/5 flex items-center justify-center text-xl font-black text-white group-hover:scale-110 transition-transform">
                                        {job.title.charAt(0)}
                                    </div>
                                    <div className="flex-1 min-w-0">
                                        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-2">
                                            <h3 className="text-lg font-bold text-white group-hover:text-[#00f0ff] transition-colors truncate">{job.title}</h3>
                                            <span className="text-[10px] font-black text-green-400 bg-green-400/10 px-2 py-0.5 rounded border border-green-400/20 whitespace-nowrap">{job.bounty}</span>
                                        </div>

                                        <div className="flex flex-wrap items-center gap-4 text-xs text-muted-foreground mb-4">
                                            <span className="flex items-center gap-1 font-bold text-white"><Briefcase className="w-3.5 h-3.5" /> Remote Work</span>
                                            <span className="flex items-center gap-1"><MapPin className="w-3.5 h-3.5" /> Global</span>
                                            <span className="flex items-center gap-1"><Clock className="w-3.5 h-3.5" /> {job.difficulty}</span>
                                        </div>

                                        <div className="flex flex-wrap gap-2">
                                            {job.tags.map(tag => (
                                                <span key={tag} className="text-[10px] text-muted-foreground bg-white/5 px-2 py-0.5 rounded group-hover:bg-white/10 transition-colors border border-white/5">
                                                    {tag}
                                                </span>
                                            ))}
                                        </div>
                                    </div>
                                    <div className="self-center hidden sm:block">
                                        <ArrowUpRight className="w-5 h-5 text-muted-foreground group-hover:text-[#00f0ff] group-hover:translate-x-1 group-hover:-translate-y-1 transition-all" />
                                    </div>
                                </motion.div>
                            )) : (
                                <div className="text-center py-20 glass-card border-dashed border-white/10">
                                    <p className="text-muted-foreground">No active problems found matching your criteria.</p>
                                </div>
                            )}
                        </AnimatePresence>
                    )}
                </div>

                {/* Sidebar Stats & Tracking */}
                <div className="lg:col-span-4 space-y-6">
                    <div className="glass-card p-6 border-white/10 bg-gradient-to-br from-orange-400/5 to-transparent">
                        <h3 className="font-bold text-white mb-4 flex items-center gap-2">
                            <TrendingUp className="w-4 h-4 text-orange-400" /> Active Applications
                        </h3>
                        <div className="space-y-4">
                            {[
                                { job: "React Intern", status: "Interviewing", color: "text-[#00f0ff]" },
                                { job: "Firebase Integration", status: "Pending Review", color: "text-yellow-400" }
                            ].map((app, i) => (
                                <div key={i} className="bg-white/5 border border-white/5 p-4 rounded-xl flex items-center justify-between">
                                    <div className="text-sm font-bold text-white">{app.job}</div>
                                    <div className={`text-[10px] font-black uppercase tracking-widest ${app.color}`}>{app.status}</div>
                                </div>
                            ))}
                        </div>
                    </div>

                    <div className="glass-card p-6 border-white/10">
                        <h3 className="font-bold text-white mb-4 flex items-center gap-2">
                            <Globe className="w-4 h-4 text-blue-400" /> Ecosystem Traffic
                        </h3>
                        <div className="grid grid-cols-2 gap-4">
                            <div className="text-center p-3 bg-white/5 rounded-xl border border-white/5">
                                <div className="text-[10px] text-muted-foreground uppercase font-black mb-1">New Roles</div>
                                <div className="text-xl font-black text-white">{problems.length}</div>
                            </div>
                            <div className="text-center p-3 bg-white/5 rounded-xl border border-white/5">
                                <div className="text-[10px] text-muted-foreground uppercase font-black mb-1">Total Paid</div>
                                <div className="text-xl font-black text-green-400">$12k</div>
                            </div>
                        </div>
                    </div>

                    <div className="glass-card p-6 border-[#00f0ff]/20 bg-[#00f0ff]/5 relative group overflow-hidden">
                        <div className="absolute top-0 right-0 w-32 h-32 bg-[#00f0ff]/10 blur-[50px] rounded-full" />
                        <Users className="w-8 h-8 text-[#00f0ff] mb-4" />
                        <h3 className="font-bold text-white mb-2">Team Up?</h3>
                        <p className="text-xs text-muted-foreground mb-4">
                            Don't want to work alone? Post your profile to find collaborators for complex bounties.
                        </p>
                        <button className="w-full py-2.5 rounded-xl bg-[#00f0ff] text-black font-black text-xs hover:shadow-[0_0_15px_#00f0ff80] transition-all">
                            Enable Availability
                        </button>
                    </div>
                </div>
            </div>

            {/* Post Problem Modal */}
            <AnimatePresence>
                {showPostModal && (
                    <div className="fixed inset-0 z-[100] flex items-center justify-center p-6">
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            onClick={() => setShowPostModal(false)}
                            className="absolute inset-0 bg-black/80 backdrop-blur-sm"
                        />
                        <motion.div
                            initial={{ opacity: 0, scale: 0.95, y: 20 }}
                            animate={{ opacity: 1, scale: 1, y: 0 }}
                            exit={{ opacity: 0, scale: 0.95, y: 20 }}
                            className="bg-[#0a0a0a] border border-white/10 rounded-2xl w-full max-w-xl p-8 relative z-10 shadow-2xl"
                        >
                            <button
                                onClick={() => setShowPostModal(false)}
                                className="absolute top-6 right-6 text-muted-foreground hover:text-white transition-colors"
                            >
                                <X className="w-5 h-5" />
                            </button>

                            <h2 className="text-2xl font-bold text-white mb-6">Post Real-World Problem</h2>

                            <form onSubmit={handleCreateProblem} className="space-y-4">
                                <div className="space-y-1">
                                    <label className="text-[10px] font-black text-muted-foreground uppercase tracking-widest">Problem Title</label>
                                    <input
                                        required
                                        type="text"
                                        className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white outline-none focus:border-[#00f0ff] transition-all"
                                        placeholder="e.g. Firebase Auth Integration"
                                        value={newProblem.title}
                                        onChange={(e) => setNewProblem({ ...newProblem, title: e.target.value })}
                                    />
                                </div>

                                <div className="space-y-1">
                                    <label className="text-[10px] font-black text-muted-foreground uppercase tracking-widest">Description</label>
                                    <textarea
                                        required
                                        className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white outline-none focus:border-[#00f0ff] transition-all h-32 resize-none"
                                        placeholder="Outline the technical challenges..."
                                        value={newProblem.description}
                                        onChange={(e) => setNewProblem({ ...newProblem, description: e.target.value })}
                                    />
                                </div>

                                <div className="grid grid-cols-2 gap-4">
                                    <div className="space-y-1">
                                        <label className="text-[10px] font-black text-muted-foreground uppercase tracking-widest">Bounty ($)</label>
                                        <input
                                            required
                                            type="text"
                                            className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white outline-none focus:border-[#00f0ff] transition-all"
                                            placeholder="e.g. $500"
                                            value={newProblem.bounty}
                                            onChange={(e) => setNewProblem({ ...newProblem, bounty: e.target.value })}
                                        />
                                    </div>
                                    <div className="space-y-1">
                                        <label className="text-[10px] font-black text-muted-foreground uppercase tracking-widest">Difficulty</label>
                                        <select
                                            className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white outline-none focus:border-[#00f0ff] transition-all appearance-none"
                                            value={newProblem.difficulty}
                                            onChange={(e) => setNewProblem({ ...newProblem, difficulty: e.target.value as any })}
                                        >
                                            <option value="Beginner">Beginner</option>
                                            <option value="Intermediate">Intermediate</option>
                                            <option value="Advanced">Advanced</option>
                                        </select>
                                    </div>
                                </div>

                                <div className="space-y-1">
                                    <label className="text-[10px] font-black text-muted-foreground uppercase tracking-widest">Tags (Comma separated)</label>
                                    <input
                                        required
                                        type="text"
                                        className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white outline-none focus:border-[#00f0ff] transition-all"
                                        placeholder="React, Firebase, Logic"
                                        value={newProblem.tags}
                                        onChange={(e) => setNewProblem({ ...newProblem, tags: e.target.value })}
                                    />
                                </div>

                                <button
                                    type="submit"
                                    disabled={isLoading}
                                    className="w-full py-4 rounded-xl bg-gradient-to-r from-[#00f0ff] to-[#b026ff] text-white font-bold shadow-[0_0_20px_rgba(176,38,255,0.3)] hover:opacity-90 disabled:opacity-50 transition-all flex items-center justify-center gap-2"
                                >
                                    {isLoading ? <Loader2 className="w-5 h-5 animate-spin" /> : "Publish to Feed"}
                                </button>
                            </form>
                        </motion.div>
                    </div>
                )}
            </AnimatePresence>
            {/* Submit Solution Modal */}
            <AnimatePresence>
                {showSubmitModal && selectedProblem && (
                    <div className="fixed inset-0 z-[100] flex items-center justify-center p-6">
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            onClick={() => setShowSubmitModal(false)}
                            className="absolute inset-0 bg-black/80 backdrop-blur-sm"
                        />
                        <motion.div
                            initial={{ opacity: 0, scale: 0.95, y: 20 }}
                            animate={{ opacity: 1, scale: 1, y: 0 }}
                            exit={{ opacity: 0, scale: 0.95, y: 20 }}
                            className="bg-[#0a0a0a] border border-white/10 rounded-2xl w-full max-w-xl p-8 relative z-10 shadow-2xl"
                        >
                            <button
                                onClick={() => setShowSubmitModal(false)}
                                className="absolute top-6 right-6 text-muted-foreground hover:text-white transition-colors"
                            >
                                <X className="w-5 h-5" />
                            </button>

                            <div className="mb-6">
                                <span className="text-[10px] font-black text-[#00f0ff] bg-[#00f0ff]/10 px-2 py-0.5 rounded border border-[#00f0ff]/20 uppercase tracking-widest mb-2 inline-block">
                                    {selectedProblem.difficulty}
                                </span>
                                <h2 className="text-2xl font-bold text-white mb-2">{selectedProblem.title}</h2>
                                <p className="text-sm text-muted-foreground">{selectedProblem.description}</p>
                            </div>

                            <form onSubmit={handleSubmitSolution} className="space-y-4 pt-4 border-t border-white/5">
                                <div className="space-y-1">
                                    <label className="text-[10px] font-black text-muted-foreground uppercase tracking-widest">Submission Link (GitHub/Demo)</label>
                                    <input
                                        required
                                        type="url"
                                        className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white outline-none focus:border-[#00f0ff] transition-all"
                                        placeholder="https://github.com/username/project"
                                        value={submission.link}
                                        onChange={(e) => setSubmission({ link: e.target.value })}
                                    />
                                </div>

                                <div className="p-4 rounded-xl bg-blue-500/5 border border-blue-500/20 text-xs text-blue-400">
                                    <strong>Note:</strong> Your solution will be analyzed by SkillChain's AI for technical accuracy and performance before being passed to the enterprise.
                                </div>

                                <button
                                    type="submit"
                                    disabled={isLoading}
                                    className="w-full py-4 rounded-xl bg-gradient-to-r from-[#00f0ff] to-[#b026ff] text-white font-bold shadow-[0_0_20px_rgba(176,38,255,0.3)] hover:opacity-90 disabled:opacity-50 transition-all flex items-center justify-center gap-2"
                                >
                                    {isLoading ? <Loader2 className="w-5 h-5 animate-spin" /> : "Submit for Evaluation"}
                                </button>
                            </form>
                        </motion.div>
                    </div>
                )}
            </AnimatePresence>
        </div>
    );
}
