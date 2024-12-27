"use client";

import { Button } from "@/components/ui/button";
import { Building2 } from "lucide-react";
import Link from "next/link";

export function Header() {
  return (
    <header className="border-b">
      <div className="container mx-auto flex h-16 items-center justify-between px-4">
        <div className="flex items-center space-x-2">
          <Building2 className="h-6 w-6" />
          <span className="text-xl font-bold">Immigration Portal</span>
        </div>
        <div className="flex items-center space-x-4">
          <Button asChild variant="ghost">
            <Link href="/sign-in">Sign In</Link>
          </Button>
        </div>
      </div>
    </header>
  );
}