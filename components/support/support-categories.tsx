import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { FileText, Users, Globe, Scale } from "lucide-react";

const categories = [
  {
    title: "Visa Applications",
    icon: FileText,
    description: "Work, study, and family visas",
  },
  {
    title: "Family Immigration",
    icon: Users,
    description: "Reunification and sponsorship",
  },
  {
    title: "Global Mobility",
    icon: Globe,
    description: "International relocation support",
  },
  {
    title: "Legal Consultation",
    icon: Scale,
    description: "Expert legal advice and guidance",
  },
];

export function SupportCategories() {
  return (
    <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
      {categories.map((category) => (
        <Card key={category.title} className="cursor-pointer hover:bg-accent">
          <CardHeader>
            <category.icon className="h-8 w-8 text-primary" />
            <CardTitle className="text-lg">{category.title}</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-muted-foreground">
              {category.description}
            </p>
          </CardContent>
        </Card>
      ))}
    </div>
  );
}