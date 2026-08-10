import type { Metadata } from "next";
import { getDictionary, i18n, type Locale } from "@/lib/i18n";
import { ContactClientPage } from "@/components/contact-client-page";

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
          "contact Megagis",
          "oferta pret cadastru",
          "consultanta topografie",
          "telefon Megagis",
          "adresa Megagis Targoviste",
        ]
      : [
          "contact Megagis",
          "cadastral service quote",
          "surveying consultation",
          "Megagis phone",
          "Megagis address Targoviste",
        ];

  return {
    title: dict.metadata.contact.title,
    description: dict.metadata.contact.description,
    keywords,
    alternates: {
      canonical: `/${locale}/contact`,
      languages: {
        "ro-RO": "/ro/contact",
        "en-US": "/en/contact",
        "de-DE": "/de/contact",
        "x-default": "/ro/contact",
      },
    },
    openGraph: {
      title: dict.metadata.contact.title,
      description: dict.metadata.contact.description,
      url: `https://megagis.ro/${locale}/contact`,
      siteName: "Megagis",
      type: "website",
      locale: locale === "ro" ? "ro_RO" : "en_US",
      images: [
        {
          url: "https://megagis.ro/icon.png",
          width: 512,
          height: 512,
          alt: "Contact Megagis",
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: dict.metadata.contact.title,
      description: dict.metadata.contact.description,
      images: ["https://megagis.ro/icon.png"],
    },
  };
}

export default async function ContactPage({
  params,
}: {
  params: Promise<{ lang: string }>;
}) {
  const { lang } = await params;
  const locale = (
    i18n.locales.includes(lang as Locale) ? lang : i18n.defaultLocale
  ) as Locale;
  const dict = await getDictionary(locale);

  return (
    <ContactClientPage
      dict={dict.contactPage}
      contactInfo={dict.footer.contactInfo}
    />
  );
}
