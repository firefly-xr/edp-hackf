import { Outlet } from 'react-router-dom';
import { Navbar } from '../components/Navbar';
import { Footer } from '../components/Footer';

export function LandingLayout() {
    return (
        <div className="flex flex-col min-h-screen text-foreground relative">
            {/* Glow ambient background */}
            <div className="fixed inset-0 overflow-hidden pointer-events-none -z-10">
                <div className="absolute top-[-10%] left-[-10%] w-[40vw] h-[40vw] rounded-full bg-neon-blue/10 blur-[100px]" />
                <div className="absolute top-[20%] right-[-10%] w-[30vw] h-[30vw] rounded-full bg-neon-purple/10 blur-[100px]" />
            </div>

            <Navbar />
            <main className="flex-grow">
                <Outlet />
            </main>
            <Footer />
        </div>
    );
}
