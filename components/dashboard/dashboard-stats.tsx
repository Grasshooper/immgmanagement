import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { FileText, Clock, CheckCircle, XCircle } from "lucide-react";

const stats = [
  {
    title: "Total Cases",
    value: "12",
    icon: FileText,
    description: "Active immigration cases",
  },
  {
    title: "In Progress",
    value: "4",
    icon: Clock,
    description: "Cases under review",
  },
  {
    title: "Approved",
    value: "7",
    icon: CheckCircle,
    description: "Successfully completed cases",
  },
  {
    title: "Rejected",
    value: "1",
    icon: XCircle,
    description: "Unsuccessful applications",
  },
];

export function DashboardStats() {
  return (
    <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
      {stats.map((stat) => (
        <Card key={stat.title}>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">
              {stat.title}
            </CardTitle>
            <stat.icon className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{stat.value}</div>
            <p className="text-xs text-muted-foreground">
              {stat.description}
            </p>
          </CardContent>
        </Card>
      ))}
    </div>
  );
}