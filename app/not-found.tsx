import { GeistSans } from "geist/font/sans";
import { GeistMono } from "geist/font/mono";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { NotFoundContent } from "@/components/not-found-content";
import roDict from "@/lib/i18n/dictionaries/ro.json";
import "@/app/globals.css";

export default function GlobalNotFound() {
  return (
    <html lang="ro" suppressHydrationWarning>
      <body
        className={`${GeistSans.variable} ${GeistMono.variable} antialiased min-h-screen flex flex-col bg-white text-slate-900`}
      >
        <Header
          lang="ro"
          dict={{ navigation: roDict.navigation, common: roDict.common }}
        />
        <main className="flex-1">
          <NotFoundContent />
        </main>
        <Footer lang="ro" dict={roDict.footer} />
      </body>
    </html>
  );
}
