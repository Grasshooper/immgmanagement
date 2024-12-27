import { DashboardHeader } from "@/components/dashboard/dashboard-header";
import { DashboardShell } from "@/components/dashboard/dashboard-shell";
import { ExpertList } from "@/components/support/expert-list";
import { SupportCategories } from "@/components/support/support-categories";

export default function SupportPage() {
  return (
    <DashboardShell>
      <DashboardHeader
        heading="Expert Support"
        description="Connect with immigration experts and legal professionals."
      />
      <div className="grid gap-6">
        <SupportCategories />
        <ExpertList />
      </div>
    </DashboardShell>
  );
}