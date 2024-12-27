import { FileCheck, MessageSquare, Users } from "lucide-react";

const features = [
  {
    icon: FileCheck,
    title: "Case Management",
    description: "Submit and track immigration cases with ease",
  },
  {
    icon: MessageSquare,
    title: "Communication",
    description: "Direct messaging with legal staff",
  },
  {
    icon: Users,
    title: "Expert Support",
    description: "Access to experienced legal professionals",
  },
];

export function Features() {
  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Key Features</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature) => (
            <div key={feature.title} className="flex flex-col items-center text-center p-6">
              <feature.icon className="h-12 w-12 mb-4 text-primary" />
              <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
              <p className="text-gray-600 dark:text-gray-300">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}