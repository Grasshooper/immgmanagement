import { DashboardHeader } from "@/components/dashboard/dashboard-header";
import { DashboardShell } from "@/components/dashboard/dashboard-shell";
import { MessageList } from "@/components/messages/message-list";
import { MessageComposer } from "@/components/messages/message-composer";

export default function MessagesPage() {
  return (
    <DashboardShell>
      <DashboardHeader
        heading="Messages"
        description="Communicate with legal staff and track case updates."
      />
      <div className="grid gap-4">
        <MessageList />
        <MessageComposer />
      </div>
    </DashboardShell>
  );
}