import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";

interface AuthLayoutProps {
  title: string;
  description: string;
  children: React.ReactNode;
}

export function AuthLayout({ title, description, children }: AuthLayoutProps) {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1">
        <div className="container mx-auto flex min-h-[calc(100vh-8rem)] items-center justify-center px-4 py-8">
          <div className="w-full max-w-md space-y-6">
            <div className="space-y-2 text-center">
              <h1 className="text-3xl font-bold">{title}</h1>
              <p className="text-gray-500 dark:text-gray-400">{description}</p>
            </div>
            {children}
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}