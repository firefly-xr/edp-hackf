import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Save, User, Github, Brain, FileText, Loader2, CheckCircle2 } from 'lucide-react';
import { useAuth } from '../../../contexts/AuthContext';
import { updateUserProfile, updateEnterpriseProfile } from '../../../lib/firestore';

export function ProfileSettings() {
    const { user, profile } = useAuth();
    const [isLoading, setIsLoading] = useState(false);
    const [isSaved, setIsSaved] = useState(false);

    // Form States
    const [formData, setFormData] = useState({
        name: '',
        bio: '',
        githubUsername: '',
        skills: '',
        companyName: '',
        industry: '',
        website: ''
    });

    useEffect(() => {
        if (profile) {
            setFormData({
                name: profile.name || '',
                bio: profile.bio || '',
                githubUsername: profile.githubUsername || '',
                skills: profile.skills?.join(', ') || '',
                companyName: '', // Will handle enterprise specific data if needed
                industry: '',
                website: ''
            });
        }
    }, [profile]);

    const handleSave = async (e: React.FormEvent) => {
        e.preventDefault();
        if (!user) return;

        try {
            setIsLoading(true);
            setIsSaved(false);

            const skillsArray = formData.skills.split(',').map(s => s.trim()).filter(s => s !== '');

            await updateUserProfile(user.uid, {
                name: formData.name,
                bio: formData.bio,
                githubUsername: formData.githubUsername,
                skills: skillsArray
            });

            if (profile?.role === 'enterprise') {
                await updateEnterpriseProfile(user.uid, {
                    companyName: formData.companyName || formData.name,
                    industry: formData.industry,
                    website: formData.website
                });
            }

            setIsSaved(true);
            setTimeout(() => setIsSaved(false), 3000);
        } catch (error) {
            console.error("Error updating profile:", error);
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <div className="space-y-8">
            <div className="flex flex-col gap-2">
                <h1 className="text-3xl font-bold text-white tracking-tight">Profile Settings</h1>
                <p className="text-muted-foreground">Manage your identity and professional visibility in the ecosystem.</p>
            </div>

            <div className="grid lg:grid-cols-3 gap-8">
                <div className="lg:col-span-2 space-y-6">
                    <form onSubmit={handleSave} className="glass-card p-8 space-y-6 border-white/10">
                        {/* Basic Info */}
                        <div className="grid md:grid-cols-2 gap-6">
                            <div className="space-y-2">
                                <label className="text-xs font-bold text-muted-foreground uppercase tracking-wider flex items-center gap-2">
                                    <User className="w-3 h-3 text-[#00f0ff]" /> Full Name
                                </label>
                                <input
                                    type="text"
                                    value={formData.name}
                                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                                    className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-[#00f0ff]/50 transition-colors"
                                    placeholder="Enter your name"
                                />
                            </div>

                            <div className="space-y-2">
                                <label className="text-xs font-bold text-muted-foreground uppercase tracking-wider flex items-center gap-2">
                                    <Github className="w-3 h-3 text-[#00f0ff]" /> GitHub Username
                                </label>
                                <input
                                    type="text"
                                    value={formData.githubUsername}
                                    onChange={(e) => setFormData({ ...formData, githubUsername: e.target.value })}
                                    className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-[#00f0ff]/50 transition-colors"
                                    placeholder="e.g. janesmith"
                                />
                            </div>
                        </div>

                        {/* Bio */}
                        <div className="space-y-2">
                            <label className="text-xs font-bold text-muted-foreground uppercase tracking-wider flex items-center gap-2">
                                <FileText className="w-3 h-3 text-[#00f0ff]" /> Professional Bio
                            </label>
                            <textarea
                                value={formData.bio}
                                onChange={(e) => setFormData({ ...formData, bio: e.target.value })}
                                className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-[#00f0ff]/50 transition-colors h-32 resize-none"
                                placeholder="Describe your experience and what you're building..."
                            />
                        </div>

                        {/* Skills */}
                        <div className="space-y-2">
                            <label className="text-xs font-bold text-muted-foreground uppercase tracking-wider flex items-center gap-2">
                                <Brain className="w-3 h-3 text-[#00f0ff]" /> Skills (Comma separated)
                            </label>
                            <input
                                type="text"
                                value={formData.skills}
                                onChange={(e) => setFormData({ ...formData, skills: e.target.value })}
                                className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-[#00f0ff]/50 transition-colors"
                                placeholder="React, TypeScript, Node.js, Cloud Architecture"
                            />
                        </div>

                        <div className="flex items-center justify-between pt-4 border-t border-white/5">
                            <div className="text-sm">
                                {isSaved && (
                                    <motion.div
                                        initial={{ opacity: 0, x: -10 }}
                                        animate={{ opacity: 1, x: 0 }}
                                        className="text-green-400 flex items-center gap-2"
                                    >
                                        <CheckCircle2 className="w-4 h-4" /> Changes saved successfully
                                    </motion.div>
                                )}
                            </div>
                            <button
                                type="submit"
                                disabled={isLoading}
                                className="px-8 py-3 rounded-xl bg-gradient-to-r from-[#00f0ff] to-[#b026ff] text-white font-bold flex items-center gap-2 hover:opacity-90 disabled:opacity-50 transition-all shadow-[0_0_20px_#b026ff4d]"
                            >
                                {isLoading ? <Loader2 className="w-4 h-4 animate-spin" /> : <Save className="w-4 h-4" />}
                                Save Changes
                            </button>
                        </div>
                    </form>
                </div>

                <div className="space-y-6">
                    <div className="glass-card p-6 border-white/10 text-center">
                        <div className="relative w-24 h-24 mx-auto mb-4 rounded-xl bg-gradient-to-br from-[#00f0ff] to-[#b026ff] p-[1.5px]">
                            <div className="w-full h-full bg-black rounded-[10px] flex items-center justify-center text-4xl font-black overflow-hidden">
                                {user?.photoURL ? (
                                    <img src={user.photoURL} alt="Avatar" className="w-full h-full object-cover" />
                                ) : (profile?.name?.charAt(0) || 'E')}
                            </div>
                        </div>
                        <h3 className="font-bold text-white text-lg">{profile?.name || 'Anonymous User'}</h3>
                        <p className="text-sm text-muted-foreground mb-4 uppercase tracking-widest">{profile?.role || 'Engineer'}</p>

                        <div className="py-3 px-4 rounded-xl bg-white/5 border border-white/10 flex items-center justify-between text-xs">
                            <span className="text-muted-foreground">Reputation XP</span>
                            <span className="text-[#00f0ff] font-bold">{profile?.reputationXP || 0}</span>
                        </div>
                    </div>

                    <div className="glass-card p-6 border-white/10 space-y-4">
                        <h4 className="text-xs font-bold text-white uppercase tracking-wider">Account Status</h4>
                        <div className="space-y-3">
                            <div className="flex items-center justify-between text-xs">
                                <span className="text-muted-foreground">Identity Verified</span>
                                <span className="px-2 py-0.5 rounded-full bg-green-500/10 text-green-400 border border-green-500/20">Active</span>
                            </div>
                            <div className="flex items-center justify-between text-xs">
                                <span className="text-muted-foreground">Ecosystem Level</span>
                                <span className="text-white font-bold">Lvl 1 Pioneer</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
