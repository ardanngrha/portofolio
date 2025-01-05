import Link from "next/link";

export default function NotFound() {
  return (
    <div className="h-screen flex flex-col items-center justify-center">
      <h1 className="text-4xl font-bold mb-4">404</h1>
      <p className="text-muted-foreground mb-4">Page not found</p>
      <Link
        href="/"
        className="text-sm hover:opacity-70"
      >
        Return Home
      </Link>
    </div>
  );
}