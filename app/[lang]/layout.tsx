import type { Metadata } from "next";
import { GeistSans } from "geist/font/sans";
import { GeistMono } from "geist/font/mono";
import { Lora } from "next/font/google";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { i18n, getDictionary, type Locale } from "@/lib/i18n";
import "@/app/globals.css";

const lora = Lora({
  subsets: ["latin", "latin-ext"],
  variable: "--font-lora",
  display: "swap",
});

export async function generateStaticParams() {
  return i18n.locales.map((locale) => ({ lang: locale }));
}

interface LayoutProps {
  children: React.ReactNode;
  params: Promise<{ lang: Locale }>;
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ lang: Locale }>;
}): Promise<Metadata> {
  const { lang } = await params;
  const dict = await getDictionary(lang);

  return {
    title: {
      default: dict.metadata.home.title,
      template: `%s | Megagis`,
    },
    description: dict.metadata.home.description,
    metadataBase: new URL("https://megagis.ro"),
    alternates: {
      canonical: `/${lang}`,
      languages: {
        "ro-RO": "/ro",
        "en-US": "/en",
      },
    },
    openGraph: {
      type: "website",
      locale: lang === "ro" ? "ro_RO" : "en_US",
      siteName: "Megagis",
    },
  };
}

export default async function LocaleLayout({ children, params }: LayoutProps) {
  const { lang } = await params;
  const dict = await getDictionary(lang);

  return (
    <html lang={lang} suppressHydrationWarning>
      <body
        className={`${GeistSans.variable} ${GeistMono.variable} ${lora.variable} antialiased min-h-screen flex flex-col`}
      >
        <Header
          lang={lang}
          dict={{ navigation: dict.navigation, common: dict.common }}
        />
        <main className="flex-1">{children}</main>
        <Footer lang={lang} dict={dict.footer} />
      </body>
    </html>
  );
}
