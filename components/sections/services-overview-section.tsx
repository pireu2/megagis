"use client";

import {
  Map,
  Mountain,
  Globe,
  Building2,
  ArrowRight,
  Briefcase,
} from "lucide-react";
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
  consulting: Briefcase,
};

// Icon color variants per service - Green & Orange theme
const iconColors = {
  cadastral: "from-primary-500 to-primary-700", // Deep green
  topography: "from-primary-400 to-primary-600", // Medium green
  gis: "from-primary-600 to-primary-800", // Dark green
  urbanPlanning: "from-amber-500 to-orange-600", // Orange accent
  consulting: "from-amber-400 to-amber-600", // Light amber
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
  {
    key: "gis" as const,
    colSpan: "md:col-span-1",
    rowSpan: "md:row-span-1",
  },
  {
    key: "urbanPlanning" as const,
    colSpan: "md:col-span-2",
    rowSpan: "md:row-span-1",
  },
  {
    key: "consulting" as const,
    colSpan: "md:col-span-1",
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
    {
      key: "consulting" as const,
      ...dict.consulting,
      href: "/servicii/consultanta",
      id: "05",
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

        {/* Bento Grid - Unified Design with Colored Icons */}
        <div className="grid md:grid-cols-3 gap-6 auto-rows-fr mb-12">
          {services.map((service, index) => {
            const layout = bentoLayout.find((l) => l.key === service.key);
            const Icon = serviceIcons[service.key];
            const iconGradient = iconColors[service.key];
            const isLargeCard = service.key === "cadastral";

            return (
              <motion.div
                key={service.key}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.7,
                  delay: index * 0.15,
                  ease: [0.22, 1, 0.36, 1],
                }}
                className={`${layout?.colSpan} ${layout?.rowSpan}`}
              >
                <LocaleLink
                  href={service.href}
                  lang={lang}
                  className="group block h-full"
                >
                  {isLargeCard ? (
                    // Featured Large Card - Green Highlight
                    <div className="h-full p-5 mb-5 md:p-8 lg:p-10 rounded-3xl border-2 border-primary-500/20 bg-linear-to-br from-white via-primary-50/30 to-white hover:border-primary-500/40 transition-all duration-500 relative overflow-hidden group-hover:scale-[1.02] group-hover:shadow-2xl shadow-xl">
                      {/* Top accent bar */}
                      <div className="absolute top-0 left-0 right-0 h-1 bg-linear-to-r from-primary-500 via-primary-600 to-primary-500" />

                      {/* Large Floating Icon - Bottom Right */}
                      <div className="absolute bottom-8 right-8 z-0 opacity-5 pointer-events-none">
                        <div className="w-48 h-48 flex items-center justify-center">
                          <Icon className="w-full h-full text-primary-600" />
                        </div>
                      </div>

                      {/* Content Container */}
                      <div className="relative z-10">
                        {/* Technical ID Badge */}
                        <div className="flex items-center justify-between mb-4 md:mb-6 lg:mb-8">
                          <div className="inline-flex items-center gap-2 glass-card py-1.5 md:py-2 rounded-full border border-primary-200/50">
                            <div
                              className={`w-8 h-8 md:w-10 md:h-10 rounded-xl bg-linear-to-br ${iconGradient} flex items-center justify-center text-white shadow-md`}
                            >
                              <Icon className="w-4 h-4 md:w-5 md:h-5" />
                            </div>
                            <span className="font-mono text-[0.65rem] md:text-xs tracking-wider text-primary-700 font-bold pr-2">
                              FEATURED SERVICE
                            </span>
                          </div>
                          <div className="flex flex-col items-end gap-1">
                            <div className="font-mono text-sm font-bold text-slate-400">
                              {service.id}
                            </div>
                            <div className="font-mono text-[0.5rem] tracking-widest text-slate-400/60">
                              SRV-{service.key.toUpperCase().slice(0, 3)}
                            </div>
                          </div>
                        </div>

                        {/* Title */}
                        <h3 className="text-xl md:text-3xl lg:text-4xl font-bold mb-3 md:mb-4 tracking-tight text-slate-900 group-hover:text-primary-700 transition-colors duration-300">
                          {service.title}
                        </h3>

                        {/* Description */}
                        <p className="text-sm md:text-base lg:text-lg leading-relaxed mb-4 md:mb-6 text-slate-600">
                          {service.description}
                        </p>

                        {/* Features Grid */}
                        {service.key === "cadastral" &&
                          (service as any).features && (
                            <div className="grid grid-cols-2 gap-2 md:gap-3 mb-4 md:mb-8">
                              {(service as any).features.map(
                                (feature: string, idx: number) => (
                                  <div
                                    key={idx}
                                    className="flex items-center gap-2 text-xs md:text-sm text-slate-600"
                                  >
                                    <div className="w-1.5 h-1.5 rounded-full bg-primary-500 shrink-0" />
                                    <span>{feature}</span>
                                  </div>
                                ),
                              )}
                            </div>
                          )}

                        {/* CTA Button */}
                        <div className="inline-flex items-center gap-2 md:gap-3 px-4 md:px-6 mb-2 py-2 md:py-3 text-sm md:text-base rounded-md bg-primary-600 text-white font-medium group-hover:bg-primary-700 transition-all duration-300 shadow-md group-hover:shadow-lg">
                          Vezi Detalii Complete
                          <ArrowRight className="h-4 w-4 md:h-5 md:w-5 transition-transform group-hover:translate-x-2" />
                        </div>
                      </div>

                      {/* Technical decorator */}
                      <div className="absolute bottom-4 left-8 font-mono text-xs tracking-wider text-slate-400/40">
                        LAT: 44.93° N • ANCPI CLS-I
                      </div>
                    </div>
                  ) : (
                    // Standard Cards
                    <div className="h-full p-5 md:p-8 lg:p-10 rounded-3xl border border-slate-200/50 bg-white hover:border-primary-300 transition-all duration-500 relative overflow-hidden group-hover:scale-[1.02] group-hover:shadow-2xl shadow-lg">
                      {/* Subtle hover overlay */}
                      <div className="absolute inset-0 bg-linear-to-br from-transparent via-white/0 to-white/0 group-hover:via-slate-50/50 group-hover:to-slate-50/30 transition-all duration-500 pointer-events-none" />

                      {/* Technical ID Badge */}
                      <div className="absolute top-6 right-6 flex flex-col items-end gap-1 z-10">
                        <div className="font-mono text-sm font-bold text-slate-400">
                          {service.id}
                        </div>
                        <div className="font-mono text-[0.5rem] tracking-widest text-slate-400/60">
                          SRV-{service.key.toUpperCase().slice(0, 3)}
                        </div>
                      </div>

                      {/* Colored Icon */}
                      <div
                        className={`mb-4 md:mb-6 inline-flex h-12 w-12 md:h-16 md:w-16 lg:h-20 lg:w-20 items-center justify-center rounded-2xl bg-linear-to-br ${iconGradient} text-white shadow-lg group-hover:scale-110 group-hover:rotate-3 transition-all duration-500`}
                      >
                        <Icon className="h-6 w-6 md:h-8 md:w-8 lg:h-10 lg:w-10" />
                      </div>

                      {/* Title */}
                      <h3 className="text-lg md:text-2xl lg:text-3xl font-bold mb-3 md:mb-4 tracking-tight text-slate-900 group-hover:text-primary-700 transition-colors duration-300">
                        {service.title}
                      </h3>

                      {/* Description */}
                      <p className="text-sm md:text-base leading-relaxed mb-4 md:mb-6 text-slate-600">
                        {service.description}
                      </p>

                      {/* CTA with arrow */}
                      <div className="font-mono text-xs tracking-widest uppercase flex items-center gap-2 text-slate-500 group-hover:text-primary-600 transition-all duration-300">
                        Vezi Detalii
                        <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-2" />
                      </div>

                      {/* Bottom corner decorator */}
                      <div className="absolute bottom-4 left-6 font-mono text-[0.65rem] tracking-wider opacity-30 text-slate-400">
                        {index === 0 && "LAT: 44.93° N"}
                        {index === 1 && "PREC: ±0.02M"}
                        {index === 2 && "COORD: WGS84"}
                        {index === 3 && "SCALE: 1:500"}
                        {index === 4 && "CERT: CLS-I"}
                      </div>
                    </div>
                  )}
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
          className="text-center md:text-left"
        >
          <LocaleLink href="/servicii" lang={lang}>
            <Button
              size="xl"
              className="group relative overflow-hidden bg-linear-to-r from-primary-600 via-primary-500 to-primary-600 bg-size-[200%_100%] hover:bg-position-[100%_0] transition-all duration-500 text-white border-0 shadow-lg shadow-primary-500/30 hover:shadow-xl hover:shadow-primary-500/40 hover:scale-105"
            >
              {/* Shimmer effect */}
              <div className="absolute inset-0 bg-linear-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
              <span className="relative z-10">{dict.viewAll}</span>
              <ArrowRight className="relative z-10 ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Button>
          </LocaleLink>
        </motion.div>
      </div>
    </section>
  );
}
