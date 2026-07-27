import { GeistSans } from "geist/font/sans";
import { GeistMono } from "geist/font/mono";
import { NotFoundContent } from "@/components/not-found-content";
import "@/app/globals.css";

export default function GlobalNotFound() {
  return (
    <html lang="ro" suppressHydrationWarning>
      <body
        className={`${GeistSans.variable} ${GeistMono.variable} antialiased min-h-screen flex flex-col bg-slate-950 text-slate-100`}
      >
        <main className="flex-1 flex items-center justify-center">
          <NotFoundContent />
        </main>
      </body>
    </html>
  );
}
