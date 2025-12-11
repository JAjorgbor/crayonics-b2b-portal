import { DashboardHeader } from "@/components/dashboard/DashboardHeader";
import { AnalyticsSection } from "@/components/dashboard/AnalyticsSection";
import { StudentRoster } from "@/components/dashboard/StudentRoster";
import { ReportsSection } from "@/components/dashboard/ReportsSection";

function Dashboard() {
  return (
    <div className="max-w-7xl mx-auto p-4 md:p-8 space-y-8 animate-in fade-in duration-500">
      <DashboardHeader />

      <div className="grid gap-8">
        <AnalyticsSection />
        <StudentRoster />
        <ReportsSection />
      </div>

      <div className="text-center text-sm text-muted-foreground py-8">
        &copy; 2025 Crayonics. AI-Resilience Program.
      </div>
    </div>
  );
}

export default Dashboard;
