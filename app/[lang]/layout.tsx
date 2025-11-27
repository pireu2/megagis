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

export async function generateMetadata({
  params,
}: {
  params: Promise<{ lang: string }>;
}): Promise<Metadata> {
  const { lang } = await params;
  const locale = (
    i18n.locales.includes(lang as Locale) ? lang : i18n.defaultLocale
  ) as Locale;
  const dict = await getDictionary(locale);

  return {
    title: {
      default: dict.metadata.home.title,
      template: `%s | Megagis`,
    },
    description: dict.metadata.home.description,
    metadataBase: new URL("https://megagis.ro"),
    alternates: {
      canonical: `/${locale}`,
      languages: {
        "ro-RO": "/ro",
        "en-US": "/en",
      },
    },
    openGraph: {
      type: "website",
      locale: locale === "ro" ? "ro_RO" : "en_US",
      siteName: "Megagis",
    },
  };
}

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ lang: string }>;
}) {
  const { lang } = await params;
  const locale = (
    i18n.locales.includes(lang as Locale) ? lang : i18n.defaultLocale
  ) as Locale;
  const dict = await getDictionary(locale);

  return (
    <html lang={locale} suppressHydrationWarning>
      <body
        className={`${GeistSans.variable} ${GeistMono.variable} ${lora.variable} antialiased min-h-screen flex flex-col`}
      >
        <Header
          lang={locale}
          dict={{ navigation: dict.navigation, common: dict.common }}
        />
        <main className="flex-1">{children}</main>
        <Footer lang={locale} dict={dict.footer} />
      </body>
    </html>
  );
}
