export function Footer() {
  return (
    <footer className="border-t py-8">
      <div className="container mx-auto px-4 text-center text-sm text-gray-600 dark:text-gray-400">
        © {new Date().getFullYear()} Immigration Portal. All rights reserved.
      </div>
    </footer>
  );
}