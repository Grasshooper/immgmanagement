import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const experts = [
  {
    id: "1",
    name: "Dr. Emily Chen",
    avatar: "/avatars/emily-chen.jpg",
    specialization: "Work Visas",
    experience: "15+ years",
    languages: ["English", "Mandarin"],
    rating: 4.9,
  },
  {
    id: "2",
    name: "James Rodriguez",
    avatar: "/avatars/james-rodriguez.jpg",
    specialization: "Family Immigration",
    experience: "12+ years",
    languages: ["English", "Spanish"],
    rating: 4.8,
  },
];

export function ExpertList() {
  return (
    <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
      {experts.map((expert) => (
        <Card key={expert.id}>
          <CardHeader className="flex flex-row items-center space-x-4 pb-2">
            <Avatar className="h-12 w-12">
              <AvatarImage src={expert.avatar} alt={expert.name} />
              <AvatarFallback>{expert.name[0]}</AvatarFallback>
            </Avatar>
            <div>
              <CardTitle className="text-lg">{expert.name}</CardTitle>
              <Badge variant="secondary">{expert.specialization}</Badge>
            </div>
          </CardHeader>
          <CardContent>
            <div className="space-y-2">
              <p className="text-sm text-muted-foreground">
                Experience: {expert.experience}
              </p>
              <p className="text-sm text-muted-foreground">
                Languages: {expert.languages.join(", ")}
              </p>
              <p className="text-sm font-semibold">Rating: ⭐️ {expert.rating}</p>
              <Button className="w-full" variant="secondary">
                Schedule Consultation
              </Button>
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  );
}