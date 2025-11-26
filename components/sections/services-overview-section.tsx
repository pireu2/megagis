import { Map, Mountain, Globe, Building2, ArrowRight } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { LocaleLink } from "@/components/locale-link";
import type { Locale, ServicesOverviewDict } from "@/lib/i18n";

interface ServicesOverviewSectionProps {
  lang: Locale;
  dict: ServicesOverviewDict;
}

const serviceIcons = {
  cadastral: Map,
  topography: Mountain,
  gis: Globe,
  urbanPlanning: Building2,
};

export function ServicesOverviewSection({
  lang,
  dict,
}: ServicesOverviewSectionProps) {
  const services = [
    {
      key: "cadastral" as const,
      ...dict.cadastral,
      href: "/servicii/cadastru",
    },
    {
      key: "topography" as const,
      ...dict.topography,
      href: "/servicii/topografie",
    },
    {
      key: "gis" as const,
      ...dict.gis,
      href: "/servicii/gis",
    },
    {
      key: "urbanPlanning" as const,
      ...dict.urbanPlanning,
      href: "/servicii/urbanism",
    },
  ];

  return (
    <section className="py-20 md:py-28 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        {/* Section Header */}
        <div className="mx-auto max-w-2xl text-center mb-16">
          <h2 className="font-serif text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl md:text-5xl">
            {dict.title}
          </h2>
          <p className="mt-4 text-lg text-slate-600">{dict.subtitle}</p>
        </div>

        {/* Services Grid */}
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {services.map((service) => {
            const Icon = serviceIcons[service.key];
            return (
              <LocaleLink
                key={service.key}
                href={service.href}
                lang={lang}
                className="group"
              >
                <Card className="h-full transition-all duration-300 hover:shadow-lg hover:shadow-primary/10 hover:-translate-y-1 border-slate-200 bg-slate-50/50">
                  <CardHeader>
                    <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 text-primary group-hover:bg-accent group-hover:text-white transition-colors">
                      <Icon className="h-6 w-6" />
                    </div>
                    <CardTitle className="text-xl font-semibold text-slate-900 group-hover:text-primary transition-colors">
                      {service.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-slate-600 leading-relaxed">
                      {service.description}
                    </p>
                  </CardContent>
                </Card>
              </LocaleLink>
            );
          })}
        </div>

        {/* View All Button */}
        <div className="mt-12 text-center">
          <LocaleLink href="/servicii" lang={lang}>
            <Button variant="outline" size="lg" className="group">
              {dict.viewAll}
              <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Button>
          </LocaleLink>
        </div>
      </div>
    </section>
  );
}
