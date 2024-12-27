import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import Link from "next/link";

const cases = [
  {
    id: "1",
    title: "Work Visa Application",
    status: "In Progress",
    updatedAt: "2024-03-15",
  },
  {
    id: "2",
    title: "Family Reunification",
    status: "Under Review",
    updatedAt: "2024-03-14",
  },
  {
    id: "3",
    title: "Student Visa Extension",
    status: "Approved",
    updatedAt: "2024-03-13",
  },
];

export function CasesList() {
  return (
    <div className="rounded-md border">
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Title</TableHead>
            <TableHead>Status</TableHead>
            <TableHead>Last Updated</TableHead>
            <TableHead>Actions</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {cases.map((case_) => (
            <TableRow key={case_.id}>
              <TableCell>{case_.title}</TableCell>
              <TableCell>
                <Badge variant="secondary">{case_.status}</Badge>
              </TableCell>
              <TableCell>{case_.updatedAt}</TableCell>
              <TableCell>
                <Button
                  variant="ghost"
                  size="sm"
                  asChild
                >
                  <Link href={`/dashboard/cases/${case_.id}`}>
                    View Details
                  </Link>
                </Button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
}