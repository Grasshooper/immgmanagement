import { DashboardHeader } from "@/components/dashboard/dashboard-header";
import { DashboardShell } from "@/components/dashboard/dashboard-shell";
import { CasesList } from "@/components/cases/cases-list";
import { CaseFilters } from "@/components/cases/case-filters";
import { Button } from "@/components/ui/button";
import { Plus } from "lucide-react";
import Link from "next/link";

export default function CasesPage() {
  return (
    <DashboardShell>
      <DashboardHeader
        heading="Cases"
        description="Manage and track your immigration cases."
      >
        <Button asChild>
          <Link href="/dashboard/cases/new">
            <Plus className="mr-2 h-4 w-4" />
            New Case
          </Link>
        </Button>
      </DashboardHeader>
      <div className="grid gap-4">
        <CaseFilters />
        <CasesList />
      </div>
    </DashboardShell>
  );
}