import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { CheckCircle2, ArrowRight, Github, Check } from 'lucide-react';

const FADE_UP = {
    initial: { opacity: 0, x: 20 },
    animate: { opacity: 1, x: 0 },
    exit: { opacity: 0, x: -20 },
    transition: { duration: 0.4 }
};

export function Onboarding() {
    const navigate = useNavigate();
    const [step, setStep] = useState(1);

    // Step 1 State
    const [selectedSkills, setSelectedSkills] = useState<string[]>([]);
    const skills = ["Frontend (React/Vue)", "Backend (Node/Python)", "Mobile (React Native)", "UI/UX Design", "Database (SQL/NoSQL)", "DevOps / Infrastructure"];

    // Step 2 State
    const [experience, setExperience] = useState<string | null>(null);

    const toggleSkill = (skill: string) => {
        setSelectedSkills(prev =>
            prev.includes(skill) ? prev.filter(s => s !== skill) : [...prev, skill]
        );
    };

    const handleNext = () => {
        if (step < 4) setStep(step + 1);
        else navigate('/dashboard/engineer');
    };

    return (
        <div className="pt-32 pb-16 min-h-screen flex flex-col items-center justify-center relative overflow-hidden">
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-[#00f0ff]/10 blur-[150px] opacity-50 rounded-full pointer-events-none" />

            {/* Progress Indicator */}
            <div className="w-full max-w-2xl px-6 mb-12 relative z-10">
                <div className="flex justify-between mb-2">
                    {[1, 2, 3, 4].map(num => (
                        <div key={num} className="flex flex-col items-center gap-2">
                            <div className={`w-10 h-10 rounded-full flex items-center justify-center font-bold text-sm transition-colors ${step >= num ? 'bg-[#00f0ff] text-black shadow-[0_0_15px_#00f0ff80]' : 'bg-white/10 text-white/50 border border-white/20'
                                }`}>
                                {step > num ? <Check className="w-5 h-5" /> : num}
                            </div>
                        </div>
                    ))}
                </div>
                {/* Connector Lines behind circles - pure visual trick via absolutely positioned bar spanning width */}
                <div className="h-1 bg-white/10 rounded-full w-[calc(100%-2.5rem)] absolute top-5 left-1/2 -translate-x-1/2 -z-10">
                    <div
                        className="h-full bg-[#00f0ff] rounded-full transition-all duration-500 ease-out"
                        style={{ width: `${((step - 1) / 3) * 100}%` }}
                    />
                </div>
            </div>

            <div className="w-full max-w-2xl px-6 relative z-10">
                <div className="glass-card p-8 md:p-12 min-h-[400px] flex flex-col">
                    <AnimatePresence mode="wait">
                        {step === 1 && (
                            <motion.div key="step1" {...FADE_UP} className="flex-1 flex flex-col justify-center">
                                <h2 className="text-3xl font-bold mb-2">Select skills & interests</h2>
                                <p className="text-muted-foreground mb-8">What kind of real-world experience do you want to build?</p>
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-3 mb-8">
                                    {skills.map(skill => (
                                        <button
                                            key={skill}
                                            onClick={() => toggleSkill(skill)}
                                            className={`p-4 rounded-xl border text-left transition-all ${selectedSkills.includes(skill)
                                                ? 'bg-[#00f0ff]/10 border-[#00f0ff] text-white shadow-[0_0_15px_rgba(0,240,255,0.1)]'
                                                : 'bg-white/5 border-white/10 text-white/70 hover:bg-white/10'
                                                }`}
                                        >
                                            <div className="flex justify-between items-center">
                                                <span className="font-medium">{skill}</span>
                                                {selectedSkills.includes(skill) && <CheckCircle2 className="w-4 h-4 text-[#00f0ff]" />}
                                            </div>
                                        </button>
                                    ))}
                                </div>
                                <button
                                    onClick={handleNext}
                                    disabled={selectedSkills.length === 0}
                                    className="w-full py-4 rounded-xl font-bold bg-[#00f0ff] text-black disabled:opacity-50 disabled:bg-white/10 disabled:text-white/30 transition-all flex items-center justify-center gap-2 mt-auto"
                                >
                                    Continue <ArrowRight className="w-4 h-4" />
                                </button>
                            </motion.div>
                        )}

                        {step === 2 && (
                            <motion.div key="step2" {...FADE_UP} className="flex-1 flex flex-col justify-center">
                                <h2 className="text-3xl font-bold mb-2">Choose experience level</h2>
                                <p className="text-muted-foreground mb-8">This helps our AI recommend perfectly calibrated live projects.</p>
                                <div className="space-y-4 mb-8">
                                    {['Beginner (Actively Learning)', 'Intermediate (Building Side Projects)', 'Advanced (Commercial Experience)'].map(level => (
                                        <button
                                            key={level}
                                            onClick={() => setExperience(level)}
                                            className={`w-full p-5 rounded-xl border text-left transition-all flex items-center gap-4 ${experience === level
                                                ? 'bg-[#b026ff]/10 border-[#b026ff] text-white shadow-[0_0_15px_rgba(176,38,255,0.15)]'
                                                : 'bg-white/5 border-white/10 text-white/70 hover:bg-white/10'
                                                }`}
                                        >
                                            <div className={`w-5 h-5 rounded-full border-2 flex items-center justify-center ${experience === level ? 'border-[#b026ff]' : 'border-white/30'}`}>
                                                {experience === level && <div className="w-2.5 h-2.5 bg-[#b026ff] rounded-full" />}
                                            </div>
                                            <span className="font-medium text-lg">{level}</span>
                                        </button>
                                    ))}
                                </div>
                                <button
                                    onClick={handleNext}
                                    disabled={!experience}
                                    className="w-full py-4 rounded-xl font-bold bg-[#00f0ff] text-black disabled:opacity-50 disabled:bg-white/10 disabled:text-white/30 transition-all flex items-center justify-center gap-2 mt-auto"
                                >
                                    Continue <ArrowRight className="w-4 h-4" />
                                </button>
                            </motion.div>
                        )}

                        {step === 3 && (
                            <motion.div key="step3" {...FADE_UP} className="flex-1 flex flex-col justify-center text-center">
                                <div className="mx-auto w-16 h-16 bg-white/5 border border-white/10 rounded-2xl flex items-center justify-center mb-6">
                                    <Github className="w-8 h-8 text-white" />
                                </div>
                                <h2 className="text-3xl font-bold mb-2">Connect GitHub</h2>
                                <p className="text-muted-foreground mb-8 max-w-sm mx-auto">Sync your public repos to instantly generate your initial technical reputation score.</p>

                                <div className="space-y-4 mb-8">
                                    <button onClick={handleNext} className="w-full py-4 rounded-xl bg-white text-black font-bold hover:bg-gray-200 transition-colors flex items-center justify-center gap-2">
                                        <Github className="w-5 h-5" /> Connect GitHub
                                    </button>
                                    <button onClick={handleNext} className="w-full py-4 rounded-xl border border-white/10 text-white/70 font-medium hover:bg-white/5 transition-colors">
                                        Skip for now
                                    </button>
                                </div>
                            </motion.div>
                        )}

                        {step === 4 && (
                            <motion.div key="step4" {...FADE_UP} className="flex-1 flex flex-col justify-center text-center">
                                <div className="mx-auto w-24 h-24 mb-6 relative">
                                    <svg className="w-full h-full transform -rotate-90" viewBox="0 0 100 100">
                                        <circle cx="50" cy="50" r="45" fill="none" stroke="rgba(255,255,255,0.1)" strokeWidth="4" />
                                        <motion.circle
                                            cx="50" cy="50" r="45" fill="none" stroke="url(#success-grad)" strokeWidth="4"
                                            strokeDasharray="283" strokeDashoffset="283"
                                            strokeLinecap="round"
                                            animate={{ strokeDashoffset: 0 }}
                                            transition={{ duration: 1, delay: 0.2 }}
                                        />
                                        <defs>
                                            <linearGradient id="success-grad" x1="0%" y1="0%" x2="100%" y2="0%">
                                                <stop offset="0%" stopColor="#00f0ff" />
                                                <stop offset="100%" stopColor="#b026ff" />
                                            </linearGradient>
                                        </defs>
                                    </svg>
                                    <div className="absolute inset-0 flex items-center justify-center">
                                        <Check className="w-8 h-8 text-[#00f0ff]" />
                                    </div>
                                </div>
                                <h2 className="text-3xl font-bold mb-2">Profile Complete</h2>
                                <p className="text-muted-foreground mb-8">You are ready to enter the Growth Ecosystem.</p>

                                <button
                                    onClick={handleNext}
                                    className="w-full py-4 rounded-xl font-bold bg-gradient-to-r from-[#00f0ff] to-[#b026ff] text-white hover:opacity-90 transition-all flex items-center justify-center gap-2 shadow-[0_0_20px_#b026ff4d]"
                                >
                                    Enter Dashboard <ArrowRight className="w-4 h-4" />
                                </button>
                            </motion.div>
                        )}
                    </AnimatePresence>
                </div>
            </div>
        </div>
    );
}
