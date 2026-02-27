import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { Home } from './pages/Home';
import { EngineerDashboard } from './pages/EngineerDashboard';
import { PublicProfile } from './pages/PublicProfile';
import { Leaderboard } from './pages/Leaderboard';
import { Marketplace } from './pages/Marketplace';
import { BusinessDashboard } from './pages/BusinessDashboard';
import { ProblemDetail } from './pages/ProblemDetail';
import { Pricing } from './pages/Pricing';
import { SignIn } from './pages/SignIn';
import { SignUp } from './pages/SignUp';

function App() {
  return (
    <Router>
      <div className="flex flex-col min-h-screen text-foreground relative">
        {/* Glow ambient background */}
        <div className="fixed inset-0 overflow-hidden pointer-events-none -z-10">
          <div className="absolute top-[-10%] left-[-10%] w-[40vw] h-[40vw] rounded-full bg-neon-blue/10 blur-[100px]" />
          <div className="absolute top-[20%] right-[-10%] w-[30vw] h-[30vw] rounded-full bg-neon-purple/10 blur-[100px]" />
        </div>

        <Navbar />

        <main className="flex-grow">
          <AnimatePresence mode="wait">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/dashboard/engineer" element={<EngineerDashboard />} />
              <Route path="/dashboard/business" element={<BusinessDashboard />} />
              <Route path="/marketplace" element={<Marketplace />} />
              <Route path="/problem/:id" element={<ProblemDetail />} />
              <Route path="/profile/:id" element={<PublicProfile />} />
              <Route path="/leaderboard" element={<Leaderboard />} />
              <Route path="/pricing" element={<Pricing />} />
              <Route path="/signin" element={<SignIn />} />
              <Route path="/signup" element={<SignUp />} />
            </Routes>
          </AnimatePresence>
        </main>

        <Footer />
      </div>
    </Router>
  );
}

export default App;
