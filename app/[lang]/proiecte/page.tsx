import type { Metadata } from "next";
import { getDictionary, i18n, type Locale } from "@/lib/i18n";
import { ProjectsPageClient } from "@/components/sections";

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
          "proiecte cadastru",
          "portofoliu Megagis",
          "lucrari PNCCF",
          "registre spatii verzi UAT",
          "topografie retele edilitare",
          "experienta nationala topografie",
        ]
      : [
          "cadastral projects",
          "Megagis portfolio",
          "PNCCF works",
          "green space registries UAT",
          "utility network topography",
          "national surveying experience",
        ];

  return {
    title: dict.metadata.projects.title,
    description: dict.metadata.projects.description,
    keywords,
    alternates: {
      canonical: `/${locale}/proiecte`,
      languages: {
        "ro-RO": "/ro/proiecte",
        "en-US": "/en/proiecte",
        "de-DE": "/de/proiecte",
        "x-default": "/ro/proiecte",
      },
    },
    openGraph: {
      title: dict.metadata.projects.title,
      description: dict.metadata.projects.description,
      url: `https://megagis.ro/${locale}/proiecte`,
      siteName: "Megagis",
      type: "website",
      locale: locale === "ro" ? "ro_RO" : "en_US",
      images: [
        {
          url: "https://megagis.ro/icon.png",
          width: 512,
          height: 512,
          alt: "Portofoliu Proiecte Megagis",
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: dict.metadata.projects.title,
      description: dict.metadata.projects.description,
      images: ["https://megagis.ro/icon.png"],
    },
  };
}

export default async function ProjectsPage({
  params,
}: {
  params: Promise<{ lang: string }>;
}) {
  const { lang } = await params;
  const locale = (
    i18n.locales.includes(lang as Locale) ? lang : i18n.defaultLocale
  ) as Locale;
  const dict = await getDictionary(locale);

  return <ProjectsPageClient dict={dict.projectsPage} />;
}
