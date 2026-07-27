import type { Metadata } from "next";
import { notFound, redirect } from "next/navigation";
import { getDictionary, i18n, type Locale, type ServicesPageDict } from "@/lib/i18n";
import { ServiceDetailView } from "./service-detail-view";

const canonicalMap: Record<
  string,
  { canonical: string; key: keyof ServicesPageDict["categories"] }
> = {
  "cadastru-sistematic": { canonical: "cadastru-sistematic", key: "cadastral" },
  cadastru: { canonical: "cadastru-sistematic", key: "cadastral" },
  "topografie-geodezie": { canonical: "topografie-geodezie", key: "topography" },
  topografie: { canonical: "topografie-geodezie", key: "topography" },
  "gis-cartografie": { canonical: "gis-cartografie", key: "gis" },
  gis: { canonical: "gis-cartografie", key: "gis" },
  "registrul-spatiilor-verzi": { canonical: "registrul-spatiilor-verzi", key: "rsv" },
  urbanism: { canonical: "registrul-spatiilor-verzi", key: "rsv" },
  rsv: { canonical: "registrul-spatiilor-verzi", key: "rsv" },
  "consultanta-tehnica": { canonical: "consultanta-tehnica", key: "consulting" },
  consultanta: { canonical: "consultanta-tehnica", key: "consulting" },
};

export async function generateStaticParams() {
  const services = Object.keys(canonicalMap);

  return i18n.locales.flatMap((locale) =>
    services.map((service) => ({
      lang: locale,
      service,
    }))
  );
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ lang: string; service: string }>;
}): Promise<Metadata> {
  const { lang, service } = await params;
  const locale = (
    i18n.locales.includes(lang as Locale) ? lang : i18n.defaultLocale
  ) as Locale;

  const mapped = canonicalMap[service.toLowerCase()];
  if (!mapped) {
    return {
      title: "Serviciu Negăsit | Megagis",
    };
  }

  const dict = await getDictionary(locale);
  const category = dict.servicesPage.categories[mapped.key];
  const metaDetail = dict.metadata.serviceDetails?.[
    mapped.canonical as keyof typeof dict.metadata.serviceDetails
  ];

  const title = metaDetail?.title || `${category.title} | Megagis`;
  const description = metaDetail?.description || category.description;
  const canonicalUrl = `https://megagis.ro/${locale}/servicii/${mapped.canonical}`;

  return {
    title,
    description,
    alternates: {
      canonical: `/${locale}/servicii/${mapped.canonical}`,
      languages: {
        "ro-RO": `/ro/servicii/${mapped.canonical}`,
        "en-US": `/en/servicii/${mapped.canonical}`,
      },
    },
    openGraph: {
      title,
      description,
      url: canonicalUrl,
      type: "website",
      locale: locale === "ro" ? "ro_RO" : "en_US",
      siteName: "Megagis",
    },
  };
}

export default async function ServicePage({
  params,
}: {
  params: Promise<{ lang: string; service: string }>;
}) {
  const { lang, service } = await params;

  if (!i18n.locales.includes(lang as Locale)) {
    notFound();
  }
  const locale = lang as Locale;

  const mapped = canonicalMap[service.toLowerCase()];
  if (!mapped) {
    notFound();
  }

  if (service.toLowerCase() !== mapped.canonical) {
    redirect(`/${locale}/servicii/${mapped.canonical}`);
  }

  const dict = await getDictionary(locale);
  const item = dict.servicesPage.categories[mapped.key];

  return (
    <ServiceDetailView
      lang={locale}
      canonicalSlug={mapped.canonical}
      item={item}
      allCategories={dict.servicesPage.categories}
      ctaDict={dict.ctaSection}
      contactInfo={dict.footer.contactInfo}
    />
  );
}
