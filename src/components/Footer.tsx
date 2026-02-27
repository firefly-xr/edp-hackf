import { Code } from 'lucide-react';

export function Footer() {
    return (
        <footer className="border-t border-white/10 bg-background/50 backdrop-blur-md mt-auto py-12 px-6">
            <div className="container mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">
                <div className="space-y-4">
                    <div className="flex items-center gap-2">
                        <Code className="w-5 h-5 text-[#00f0ff]" />
                        <span className="font-bold text-lg">SkillChain</span>
                    </div>
                    <p className="text-sm text-muted-foreground">
                        Experience is earned. Trust is built. Opportunity follows.
                    </p>
                </div>

                <div>
                    <h4 className="font-semibold mb-4 text-white">Platform</h4>
                    <ul className="space-y-2 text-sm text-muted-foreground">
                        <li><a href="#" className="hover:text-[#00f0ff] transition-colors">Problem Marketplace</a></li>
                        <li><a href="#" className="hover:text-[#00f0ff] transition-colors">Engineer Leaderboard</a></li>
                        <li><a href="#" className="hover:text-[#00f0ff] transition-colors">Experience Badges</a></li>
                    </ul>
                </div>

                <div>
                    <h4 className="font-semibold mb-4 text-white">For Business</h4>
                    <ul className="space-y-2 text-sm text-muted-foreground">
                        <li><a href="#" className="hover:text-[#b026ff] transition-colors">Post a Problem</a></li>
                        <li><a href="#" className="hover:text-[#b026ff] transition-colors">Discover Talent</a></li>
                        <li><a href="#" className="hover:text-[#b026ff] transition-colors">Pricing</a></li>
                    </ul>
                </div>

                <div>
                    <h4 className="font-semibold mb-4 text-white">Connect</h4>
                    <ul className="space-y-2 text-sm text-muted-foreground">
                        <li><a href="#" className="hover:text-white transition-colors">Twitter</a></li>
                        <li><a href="#" className="hover:text-white transition-colors">LinkedIn</a></li>
                        <li><a href="#" className="hover:text-white transition-colors">GitHub</a></li>
                    </ul>
                </div>
            </div>

            <div className="container mx-auto mt-12 pt-8 border-t border-white/10 text-center text-xs text-muted-foreground">
                © 2026 SkillChain. All rights reserved. The future of employment.
            </div>
        </footer>
    );
}
