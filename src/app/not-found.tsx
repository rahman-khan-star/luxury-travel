import Link from "next/link";

export default function NotFound() {
  return (
    <div className="flex min-h-[70vh] flex-col items-center justify-center px-4 text-center">
      <p
        className="text-8xl font-bold text-secondary mb-4"
        style={{ fontFamily: "var(--font-mono)" }}
      >
        404
      </p>
      <h1
        className="text-3xl font-bold text-text dark:text-white mb-2"
        style={{ fontFamily: "var(--font-heading)" }}
      >
        Page Not Found
      </h1>
      <p className="text-text-light dark:text-white/60 mb-8 max-w-md">
        The page you&apos;re looking for doesn&apos;t exist or has been moved.
        Let us help you find your way back.
      </p>
      <div className="flex gap-4">
        <Link href="/" className="btn-primary">
          Return Home
        </Link>
        <Link href="/contact" className="btn-secondary">
          Contact Support
        </Link>
      </div>
    </div>
  );
}
