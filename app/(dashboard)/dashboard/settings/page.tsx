import { DashboardHeader } from "@/components/dashboard/dashboard-header";
import { DashboardShell } from "@/components/dashboard/dashboard-shell";
import { SettingsTabs } from "@/components/settings/settings-tabs";

export default function SettingsPage() {
  return (
    <DashboardShell>
      <DashboardHeader
        heading="Settings"
        description="Manage your account settings and preferences."
      />
      <div className="grid gap-4">
        <SettingsTabs />
      </div>
    </DashboardShell>
  );
}