import { getDictionary, type Locale } from "@/lib/i18n";
import {
  HeroSection,
  ServicesOverviewSection,
  ValuePropsSection,
  TestimonialsSection,
  CtaSection,
} from "@/components/sections";

interface PageProps {
  params: Promise<{ lang: Locale }>;
}

export default async function HomePage({ params }: PageProps) {
  const { lang } = await params;
  const dict = await getDictionary(lang);

  return (
    <>
      <HeroSection lang={lang} dict={dict.hero} />
      <ServicesOverviewSection lang={lang} dict={dict.servicesOverview} />
      <ValuePropsSection dict={dict.valueProps} />
      <TestimonialsSection dict={dict.testimonials} />
      <CtaSection
        lang={lang}
        dict={dict.ctaSection}
        contactInfo={dict.footer.contactInfo}
      />
    </>
  );
}
