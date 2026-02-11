"use client";

import { Map, Mountain, Globe, Building2, ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
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

// Bento Grid Layout - Asymmetrical col/row spans
const bentoLayout = [
  {
    key: "cadastral" as const,
    colSpan: "md:col-span-2",
    rowSpan: "md:row-span-2",
  },
  {
    key: "topography" as const,
    colSpan: "md:col-span-1",
    rowSpan: "md:row-span-1",
  },
  { key: "gis" as const, colSpan: "md:col-span-1", rowSpan: "md:row-span-1" },
  {
    key: "urbanPlanning" as const,
    colSpan: "md:col-span-2",
    rowSpan: "md:row-span-1",
  },
];

export function ServicesOverviewSection({
  lang,
  dict,
}: ServicesOverviewSectionProps) {
  const services = [
    {
      key: "cadastral" as const,
      ...dict.cadastral,
      href: "/servicii/cadastru",
      id: "01",
    },
    {
      key: "topography" as const,
      ...dict.topography,
      href: "/servicii/topografie",
      id: "02",
    },
    {
      key: "gis" as const,
      ...dict.gis,
      href: "/servicii/gis",
      id: "03",
    },
    {
      key: "urbanPlanning" as const,
      ...dict.urbanPlanning,
      href: "/servicii/urbanism",
      id: "04",
    },
  ];

  return (
    <section className="section-padding-swiss bg-white relative overflow-hidden">
      {/* Mathematical Grid Background */}
      <div className="absolute inset-0 bg-grid-slate-thin" />

      <div className="container relative mx-auto px-4 md:px-6">
        {/* Section Header - Flush Left */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="max-w-3xl mb-16 text-flush-left"
        >
          <div className="data-decorator mb-4">SERVICII / SERVICES</div>
          <h2 className="heading-dominant text-slate-900 mb-6">{dict.title}</h2>
          <p className="text-lg md:text-xl text-slate-600 max-w-2xl">
            {dict.subtitle}
          </p>
        </motion.div>

        {/* Bento Grid - Asymmetrical Layout */}
        <div className="grid md:grid-cols-3 gap-6 auto-rows-fr mb-12">
          {services.map((service, index) => {
            const layout = bentoLayout.find((l) => l.key === service.key);
            const Icon = serviceIcons[service.key];

            return (
              <motion.div
                key={service.key}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.6,
                  delay: index * 0.1,
                  ease: [0.34, 1.56, 0.64, 1],
                }}
                className={`${layout?.colSpan} ${layout?.rowSpan}`}
              >
                <LocaleLink
                  href={service.href}
                  lang={lang}
                  className="group block h-full"
                >
                  <div className="glass-card h-full p-8 rounded-2xl border border-slate-200/50 hover:border-primary-300 transition-all duration-300 relative overflow-hidden layer-card">
                    {/* Technical ID Badge - Top Right */}
                    <div className="absolute top-6 right-6 flex flex-col items-end gap-1">
                      <div className="data-decorator text-slate-400">
                        {service.id}
                      </div>
                      <div className="data-decorator text-primary-600/60 text-[0.5rem]">
                        SRV-{service.key.toUpperCase().slice(0, 3)}
                      </div>
                    </div>

                    {/* Icon with Layer Effect */}
                    <div className="mb-6 inline-flex h-16 w-16 items-center justify-center rounded-xl bg-linear-to-br from-primary-500 to-primary-700 text-white shadow-lg shadow-primary-500/30 group-hover:scale-110 transition-transform duration-300">
                      <Icon className="h-8 w-8" />
                    </div>

                    {/* Title */}
                    <h3 className="text-2xl font-bold text-slate-900 mb-4 tracking-tight group-hover:text-primary-700 transition-colors">
                      {service.title}
                    </h3>

                    {/* Description */}
                    <p className="text-slate-600 leading-relaxed mb-6">
                      {service.description}
                    </p>

                    {/* Technical Microcopy */}
                    <div className="microcopy-technical text-slate-500 flex items-center gap-2 group-hover:text-primary-600 transition-colors">
                      Detalii
                      <ArrowRight className="h-3 w-3 transition-transform group-hover:translate-x-1" />
                    </div>
                  </div>
                </LocaleLink>
              </motion.div>
            );
          })}
        </div>

        {/* View All Button */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.5, ease: "easeOut" }}
          className="text-left"
        >
          <LocaleLink href="/servicii" lang={lang}>
            <Button
              variant="outline"
              size="lg"
              className="group border-slate-300 hover:border-primary-500 hover:bg-primary-50"
            >
              {dict.viewAll}
              <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Button>
          </LocaleLink>
        </motion.div>
      </div>
    </section>
  );
}
