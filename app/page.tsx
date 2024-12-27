import { Button } from "@/components/ui/button";
import { Building2, ArrowRight, FileCheck, MessageSquare, Users } from "lucide-react";
import Link from "next/link";
import { Header } from "@/components/layout/header";
import { Features } from "@/components/home/features";
import { Footer } from "@/components/layout/footer";

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />

      <main className="flex-1">
        <section className="bg-gradient-to-b from-white to-gray-50 dark:from-gray-900 dark:to-gray-800 py-20">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-4xl font-bold tracking-tight sm:text-6xl">
              Streamline Your Immigration Process
            </h1>
            <p className="mt-6 text-lg leading-8 text-gray-600 dark:text-gray-300">
              Manage immigration cases efficiently with our comprehensive platform.
            </p>
            <div className="mt-10 flex items-center justify-center gap-x-6">
              <Button asChild size="lg">
                <Link href="/sign-up">
                  Get Started
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
          </div>
        </section>

        <Features />
      </main>

      <Footer />
    </div>
  );
}