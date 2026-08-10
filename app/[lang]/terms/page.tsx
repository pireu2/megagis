import type { Metadata } from "next";
import { getDictionary, i18n, type Locale } from "@/lib/i18n";

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
  const termsMeta = dict.metadata.terms || {
    title: locale === "ro" ? "Termeni și Condiții | Megagis" : "Terms and Conditions | Megagis",
    description: locale === "ro" ? "Termenii și condițiile de utilizare Megagis." : "Megagis terms and conditions of use.",
  };

  return {
    title: termsMeta.title,
    description: termsMeta.description,
    alternates: {
      canonical: `/${locale}/terms`,
      languages: {
        "ro-RO": "/ro/terms",
        "en-US": "/en/terms",
        "de-DE": "/de/terms",
        "x-default": "/ro/terms",
      },
    },
    openGraph: {
      title: termsMeta.title,
      description: termsMeta.description,
      url: `https://megagis.ro/${locale}/terms`,
      siteName: "Megagis",
      type: "website",
      locale: locale === "ro" ? "ro_RO" : "en_US",
      images: [
        {
          url: "https://megagis.ro/icon.png",
          width: 512,
          height: 512,
          alt: "Termeni și Condiții Megagis",
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: termsMeta.title,
      description: termsMeta.description,
      images: ["https://megagis.ro/icon.png"],
    },
  };
}

export default async function TermsPage({
  params,
}: {
  params: Promise<{ lang: string }>;
}) {
  const { lang } = await params;
  const locale = (
    i18n.locales.includes(lang as Locale) ? lang : i18n.defaultLocale
  ) as Locale;
  const dict = await getDictionary(locale);
  const legalDict = dict.legal.terms;

  return (
    <div className="flex min-h-screen flex-col bg-white selection:bg-primary-200 selection:text-primary-900">
      <main className="flex-1 pt-24 md:pt-32 pb-16 md:pb-24 relative overflow-hidden">
        {/* Square Grid Background */}
        <div className="absolute inset-0 bg-grid-slate-thin opacity-50 pointer-events-none" />
        
        {/* Gradient Overlay */}
        <div className="absolute top-0 left-0 right-0 h-96 bg-linear-to-b from-slate-50 to-transparent pointer-events-none" />

        <div className="container relative mx-auto px-4 md:px-6 max-w-4xl">
          <div className="mb-12 md:mb-16 text-flush-left">
            <h1 className="heading-dominant text-slate-900 mb-4">{legalDict.title}</h1>
            <p className="text-slate-500 font-mono text-sm tracking-tight">{legalDict.lastUpdated}</p>
          </div>

          <div className="space-y-10 md:space-y-12">
            {legalDict.content.map((section, index) => (
              <section key={index} className="bg-white p-6 md:p-8 rounded-2xl border border-slate-200 shadow-sm relative group overflow-hidden">
                {/* Subtle hover overlay */}
                <div className="absolute inset-0 bg-linear-to-br from-transparent via-slate-50/0 to-slate-50/50 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
                
                <h2 className="text-xl md:text-2xl font-bold text-slate-900 mb-4 tracking-tight relative z-10">
                  {section.heading}
                </h2>
                <div className="w-12 h-1 bg-primary-500 rounded-full mb-6" />
                <p className="text-slate-600 leading-relaxed text-base md:text-lg relative z-10">
                  {section.body}
                </p>
              </section>
            ))}
          </div>
        </div>
      </main>
    </div>
  );
}
