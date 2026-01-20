import { DashboardLayout } from "@/components/layout/DashboardLayout";
import { WelcomeBanner } from "@/components/dashboard/WelcomeBanner";
import { ActiveClassesCard } from "@/components/dashboard/ActiveClassesCard";
import { StatsCards } from "@/components/dashboard/StatsCards";
import { ArenaParticipation } from "@/components/dashboard/ArenaParticipation";
import { ActivitySummary } from "@/components/dashboard/ActivitySummary";
import { RecentAnnouncements } from "@/components/dashboard/RecentAnnouncements";

const SchoolDashboard = () => {
  return (
    <DashboardLayout>
      <div className="space-y-6">
        {/* Welcome Banner */}
        <WelcomeBanner />
        <h2 className="text-2xl font-semibold">General Overview</h2>
        {/* Main Grid Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Left Column - Active Classes */}
          <div className="lg:col-span-2">
            <ActiveClassesCard />
          </div>

          {/* Right Column - Stats */}
          <div>
            <StatsCards />
          </div>
        </div>

        {/* Arena Participation */}
        <ArenaParticipation />

        {/* Activity & Announcements Row */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <ActivitySummary />
          <RecentAnnouncements />
        </div>
      </div>
    </DashboardLayout>
  );
};

export default SchoolDashboard;
