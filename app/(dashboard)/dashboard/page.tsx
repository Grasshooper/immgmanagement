import { DashboardHeader } from "@/components/dashboard/dashboard-header";
import { DashboardShell } from "@/components/dashboard/dashboard-shell";
import { CasesList } from "@/components/cases/cases-list";
import { DashboardStats } from "@/components/dashboard/dashboard-stats";

export default function DashboardPage() {
  return (
    <DashboardShell>
      <DashboardHeader
        heading="Dashboard"
        description="Manage your immigration cases and documents."
      />
      <div className="grid gap-4 md:gap-8">
        <DashboardStats />
        <CasesList />
      </div>
    </DashboardShell>
  );
}