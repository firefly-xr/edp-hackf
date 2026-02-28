import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import { AuthProvider } from './contexts/AuthContext';
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
import { Onboarding } from './pages/Onboarding';
import { Apprenticeships } from './pages/Apprenticeships';
import { Reputation } from './pages/Reputation';
import { Community } from './pages/Community';
import { BusinessSolutions } from './pages/BusinessSolutions';
import { Earnings } from './pages/Earnings';

// New Modular Dashboard Components
import { DashboardLayout } from './layouts/DashboardLayout';
import { LandingLayout } from './layouts/LandingLayout';
import { StartExperience } from './components/dashboard/views/StartExperience';
import { SkillGrowth } from './components/dashboard/views/SkillGrowth';
import { GrowthTracker } from './components/dashboard/views/GrowthTracker';
import { OpportunitiesFeed } from './components/dashboard/views/OpportunitiesFeed';
import { AIMentor } from './components/dashboard/views/AIMentor';
import { PortfolioBuilder } from './components/dashboard/views/PortfolioBuilder';
import { ReputationCenter } from './components/dashboard/views/ReputationCenter';
import { EarningsRewards } from './components/dashboard/views/EarningsRewards';
import { CommunityHub } from './components/dashboard/views/CommunityHub';
import { ProfileSettings } from './components/dashboard/views/ProfileSettings';

function App() {
  return (
    <Router>
      <AuthProvider>
        <AnimatePresence mode="wait">
          <Routes>
            {/* PUBLIC LANDING ROUTES */}
            <Route element={<LandingLayout />}>
              <Route path="/" element={<Home />} />
              <Route path="/marketplace" element={<Marketplace />} />
              <Route path="/problem/:id" element={<ProblemDetail />} />
              <Route path="/profile/:id" element={<PublicProfile />} />
              <Route path="/leaderboard" element={<Leaderboard />} />
              <Route path="/pricing" element={<Pricing />} />
              <Route path="/signin" element={<SignIn />} />
              <Route path="/signup" element={<SignUp />} />
              <Route path="/onboarding" element={<Onboarding />} />
              <Route path="/apprenticeships" element={<Apprenticeships />} />
              <Route path="/reputation" element={<Reputation />} />
              <Route path="/community" element={<Community />} />
              <Route path="/business-solutions" element={<BusinessSolutions />} />
              <Route path="/earnings" element={<Earnings />} />
            </Route>

            {/* PROTECTED ENGINEER DASHBOARD ROUTES */}
            <Route path="/dashboard/engineer" element={<DashboardLayout />}>
              <Route index element={<EngineerDashboard />} />
              <Route path="experience" element={<StartExperience />} />
              <Route path="growth" element={<SkillGrowth />} />
              <Route path="tracker" element={<GrowthTracker />} />
              <Route path="work" element={<OpportunitiesFeed />} />
              <Route path="ai-mentor" element={<AIMentor />} />
              <Route path="portfolio" element={<PortfolioBuilder />} />
              <Route path="reputation" element={<ReputationCenter />} />
              <Route path="earnings" element={<EarningsRewards />} />
              <Route path="community" element={<CommunityHub />} />
              <Route path="settings" element={<ProfileSettings />} />
            </Route>

            <Route path="/dashboard/business" element={<BusinessDashboard />} />
          </Routes>
        </AnimatePresence>
      </AuthProvider>
    </Router>
  );
}

export default App;
