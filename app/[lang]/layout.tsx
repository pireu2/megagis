import type { Metadata } from "next";
import { GeistSans } from "geist/font/sans";
import { GeistMono } from "geist/font/mono";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { JsonLd } from "@/components/json-ld";
import { Analytics } from "@vercel/analytics/next";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { i18n, getDictionary, type Locale } from "@/lib/i18n";
import "@/app/globals.css";

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

  let keywords: string[] = [];
  if (locale === "ro") {
    keywords = [
      "cadastru", "topografie", "GIS", "intabulare", "cadastru sistematic",
      "PNCCF", "registrul spatiilor verzi", "masuratori topografice", "geodezie",
      "urbanism", "Megagis", "Targoviste", "Dambovita", "Romania",
    ];
  } else if (locale === "de") {
    keywords = [
      "Kataster", "Topographie", "GIS", "Grundbuch", "systematisches Kataster",
      "PNCCF", "Grünflächenkataster", "topographische Vermessung", "Geodäsie",
      "Stadtplanung", "Megagis", "Rumänien",
    ];
  } else {
    keywords = [
      "cadastre", "topography", "GIS", "land registration", "systematic cadastre",
      "PNCCF", "green space register", "topographical survey", "geodesy",
      "urban planning", "Megagis", "Romania",
    ];
  }

  return {
    title: {
      default: dict.metadata.home.title,
      template: `%s | Megagis`,
    },
    description: dict.metadata.home.description,
    keywords,
    metadataBase: new URL("https://megagis.ro"),
    alternates: {
      canonical: `/${locale}`,
      languages: {
        "ro-RO": "/ro",
        "en-US": "/en",
        "de-DE": "/de",
        "x-default": "/ro",
      },
    },
    openGraph: {
      title: dict.metadata.home.title,
      description: dict.metadata.home.description,
      url: `https://megagis.ro/${locale}`,
      siteName: "Megagis",
      locale: locale === "ro" ? "ro_RO" : "en_US",
      type: "website",
      images: [
        {
          url: "https://megagis.ro/icon.png",
          width: 512,
          height: 512,
          alt: "Megagis Digital Topography & GIS Services",
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: dict.metadata.home.title,
      description: dict.metadata.home.description,
      images: ["https://megagis.ro/icon.png"],
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        "max-video-preview": -1,
        "max-image-preview": "large",
        "max-snippet": -1,
      },
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
      <head>
        <JsonLd lang={locale} />
      </head>
      <body
        className={`${GeistSans.variable} ${GeistMono.variable} antialiased min-h-screen flex flex-col`}
      >
        <Header
          lang={locale}
          dict={{ navigation: dict.navigation, common: dict.common }}
        />
        <main className="flex-1">{children}</main>
        <Footer lang={locale} dict={dict.footer} />
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
