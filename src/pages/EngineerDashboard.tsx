import { useAuth } from '../contexts/AuthContext';
import { DashboardOverview } from '../components/dashboard/views/DashboardOverview';

export function EngineerDashboard() {
    const { user } = useAuth();

    // Fallbacks for display (matching the header logic)
    const displayName = user?.displayName || user?.email?.split('@')[0] || 'Engineer';
    const initial = (user?.displayName?.charAt(0) || user?.email?.charAt(0) || 'E').toUpperCase();

    return (
        <DashboardOverview
            user={user}
            displayName={displayName}
            initial={initial}
        />
    );
}
