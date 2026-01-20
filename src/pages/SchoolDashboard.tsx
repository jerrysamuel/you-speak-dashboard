import { DashboardLayout } from "@/components/layout/DashboardLayout";
import { WelcomeBanner } from "@/components/dashboard/WelcomeBanner";
import { ActiveClassesCard } from "@/components/dashboard/ActiveClassesCard";
import { StatsCards } from "@/components/dashboard/StatsCards";
import { ArenaParticipation } from "@/components/dashboard/ArenaParticipation";
import { ActivitySummary } from "@/components/dashboard/ActivitySummary";
import { RecentAnnouncements } from "@/components/dashboard/RecentAnnouncements";

const SchoolDashboard = () => {
  return (
    <DashboardLayout role="school">
      <div className="space-y-6">
        {/* Welcome Banner */}
        <WelcomeBanner />
        
        <h2 className="text-2xl font-semibold text-foreground">General Overview</h2>

        {/* Main Grid Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Left Column - Active Classes */}
          <div className="lg:col-span-1">
            <ActiveClassesCard />
          </div>

          {/* Right Columns - Stats and Arena */}
          <div className="lg:col-span-2 space-y-6">
            <StatsCards />
            <ArenaParticipation />
          </div>
        </div>

        {/* Bottom Section - Activity and Announcements */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <ActivitySummary />
          <RecentAnnouncements />
        </div>
      </div>
    </DashboardLayout>
  );
};

export default SchoolDashboard;
