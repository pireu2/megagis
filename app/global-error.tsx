"use client";

import { GeistSans } from "geist/font/sans";
import { GeistMono } from "geist/font/mono";
import { ErrorBoundaryContent } from "@/components/error-boundary-content";
import "@/app/globals.css";

export default function GlobalError({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <html lang="ro" suppressHydrationWarning>
      <body
        className={`${GeistSans.variable} ${GeistMono.variable} antialiased min-h-screen flex flex-col bg-slate-950 text-slate-100`}
      >
        <main className="flex-1 flex items-center justify-center">
          <ErrorBoundaryContent error={error} reset={reset} />
        </main>
      </body>
    </html>
  );
}
