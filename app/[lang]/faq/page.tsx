import type { Metadata } from "next";
import { getDictionary, i18n, type Locale } from "@/lib/i18n";
import { FaqClient } from "@/components/faq/faq-client";

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

  const keywords =
    locale === "ro"
      ? [
          "FAQ cadastru",
          "intrebari frecvente topografie",
          "PNCCF intrebari",
          "registrul spatiilor verzi intrebari",
          "gis intrebari",
          "Megagis FAQ",
        ]
      : [
          "FAQ cadastre",
          "frequently asked questions topography",
          "PNCCF questions",
          "green space register FAQ",
          "GIS questions",
          "Megagis FAQ",
        ];

  return {
    title: dict.metadata.faq.title,
    description: dict.metadata.faq.description,
    keywords,
    alternates: {
      canonical: `/${locale}/faq`,
      languages: {
        "ro-RO": "/ro/faq",
        "en-US": "/en/faq",
        "de-DE": "/de/faq",
        "x-default": "/ro/faq",
      },
    },
    openGraph: {
      title: dict.metadata.faq.title,
      description: dict.metadata.faq.description,
      url: `https://megagis.ro/${locale}/faq`,
      siteName: "Megagis",
      type: "website",
      locale: locale === "ro" ? "ro_RO" : "en_US",
      images: [
        {
          url: "https://megagis.ro/icon.png",
          width: 512,
          height: 512,
          alt: "Megagis FAQ",
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: dict.metadata.faq.title,
      description: dict.metadata.faq.description,
      images: ["https://megagis.ro/icon.png"],
    },
  };
}

export default async function FaqPage({
  params,
}: {
  params: Promise<{ lang: string }>;
}) {
  const { lang } = await params;
  const locale = (
    i18n.locales.includes(lang as Locale) ? lang : i18n.defaultLocale
  ) as Locale;
  const dict = await getDictionary(locale);

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: (dict.faqPage.categories || []).flatMap((category) =>
      category.items.map((item) => ({
        "@type": "Question",
        name: item.question,
        acceptedAnswer: {
          "@type": "Answer",
          text: item.answer,
        },
      }))
    ),
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <FaqClient
        lang={locale}
        dict={dict.faqPage}
        commonDict={dict.common}
      />
    </>
  );
}
