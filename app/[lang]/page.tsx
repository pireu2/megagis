import { getDictionary, i18n, type Locale } from "@/lib/i18n";
import {
  HeroSection,
  ServicesOverviewSection,
  ValuePropsSection,
  TestimonialsSection,
  CtaSection,
} from "@/components/sections";

export default async function HomePage({
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
    <>
      <HeroSection lang={locale} dict={dict.hero} />
      <ServicesOverviewSection lang={locale} dict={dict.servicesOverview} />
      <ValuePropsSection dict={dict.valueProps} />
      <TestimonialsSection dict={dict.testimonials} />
      <CtaSection
        lang={locale}
        dict={dict.ctaSection}
        contactInfo={dict.footer.contactInfo}
      />
    </>
  );
}
