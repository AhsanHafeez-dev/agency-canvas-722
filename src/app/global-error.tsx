"use client";

export default function GlobalError({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <html>
      <body className="min-h-screen flex items-center justify-center bg-white dark:bg-gray-900 text-gray-900 dark:text-white">
        <div className="text-center p-8">
          <h2 className="text-2xl font-bold mb-4">Something went wrong!</h2>
          <button
            onClick={() => reset()}
            className="px-6 py-3 bg-indigo-600 text-white rounded-full hover:bg-indigo-700 transition-colors"
          >
            Try again
          </button>
        </div>
      </body>
    </html>
  );
}
