"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import {
  Map,
  Compass,
  Globe,
  Trees,
  Briefcase,
  ArrowRight,
} from "lucide-react";
import { LocaleLink } from "@/components/locale-link";
import { SectionSeparator } from "@/components/sections/section-separator";
import type {
  Locale,
  ServicesPageDict,
} from "@/lib/i18n";

interface ServicesViewProps {
  lang: Locale;
  dict: ServicesPageDict;
}

const serviceCategoryIcons = {
  cadastral: Map,
  topography: Compass,
  gis: Globe,
  rsv: Trees,
  consulting: Briefcase,
};

export function ServicesView({
  lang,
  dict,
}: ServicesViewProps) {
  const [activeTab, setActiveTab] = useState<string>("cadastral");

  const categoriesKeys = [
    "cadastral",
    "topography",
    "gis",
    "rsv",
    "consulting",
  ] as const;

  const scrollToSection = (id: string, key: string) => {
    setActiveTab(key);
    const element = document.getElementById(id);
    if (element) {
      const y = element.getBoundingClientRect().top + window.pageYOffset;
      window.scrollTo({ top: y, behavior: "smooth" });
    }
  };

  useEffect(() => {
    const handleHash = () => {
      const hash = window.location.hash.replace("#", "").toLowerCase();
      if (!hash) return;

      const hashToKeyMap: Record<string, { key: string; id: string }> = {
        cadastru: { key: "cadastral", id: "cadastru-sistematic" },
        "cadastru-sistematic": { key: "cadastral", id: "cadastru-sistematic" },
        topografie: { key: "topography", id: "topografie-geodezie" },
        "topografie-geodezie": { key: "topography", id: "topografie-geodezie" },
        gis: { key: "gis", id: "gis-cartografie" },
        "gis-cartografie": { key: "gis", id: "gis-cartografie" },
        urbanism: { key: "rsv", id: "registrul-spatiilor-verzi" },
        rsv: { key: "rsv", id: "registrul-spatiilor-verzi" },
        "registrul-spatiilor-verzi": { key: "rsv", id: "registrul-spatiilor-verzi" },
        consultanta: { key: "consulting", id: "consultanta-tehnica" },
        "consultanta-tehnica": { key: "consulting", id: "consultanta-tehnica" },
      };

      const match = hashToKeyMap[hash];
      if (match) {
        setTimeout(() => {
          scrollToSection(match.id, match.key);
        }, 100);
      }
    };

    handleHash();
    window.addEventListener("hashchange", handleHash);
    return () => window.removeEventListener("hashchange", handleHash);
  }, []);

  return (
    <div className="flex min-h-screen flex-col bg-white selection:bg-primary-200 selection:text-primary-900">
      {/* 1. HERO SECTION */}
      <section className="relative pt-28 md:pt-36 pb-16 md:pb-24 bg-slate-50">
        <div className="absolute inset-0 bg-grid-slate-thin opacity-50 pointer-events-none" />

        <div className="container relative mx-auto px-4 md:px-6">
          <div className="max-w-4xl text-flush-left mb-16">
            {/* Top Badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-xs font-semibold text-primary-600 tracking-wider uppercase mb-3 inline-block"
            >
              {dict.hero.badge}
            </motion.div>

            {/* Title */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="heading-dominant text-slate-900 mb-6 text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight leading-[1.08]"
            >
              {dict.hero.title}
            </motion.h1>

            {/* Subtitle / Description */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-lg md:text-xl text-slate-600 max-w-2xl"
            >
              {dict.hero.description}
            </motion.p>
          </div>

          {/* Stats Row - Styled consistently with Hero Trust Bar */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="grid grid-cols-2 gap-6 md:gap-12 mt-8 md:mt-12 max-w-xl"
          >
            {dict.hero.stats.map((stat, idx) => (
              <div key={idx} className="flex flex-col text-left">
                <span
                  className={`text-2xl md:text-4xl font-bold tracking-tight ${
                    idx === 1 ? "text-primary-600" : "text-slate-900"
                  }`}
                >
                  {stat.value}
                </span>
                <span className="text-xs md:text-sm font-medium text-slate-500 mt-1">
                  {stat.label}
                </span>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      <SectionSeparator />

      {/* 2. STICKY CATEGORY NAVIGATION BAR */}
      <div className="sticky top-20 z-30 bg-white/90 backdrop-blur-xl border-b border-slate-200 shadow-xs py-3">
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex items-center gap-2 overflow-x-auto no-scrollbar py-1 scroll-smooth">
            {categoriesKeys.map((key) => {
              const category = dict.categories[key];
              const Icon = serviceCategoryIcons[key];
              const isActive = activeTab === key;

              return (
                <button
                  key={key}
                  onClick={() => scrollToSection(category.id, key)}
                  className={`flex items-center gap-2 px-4 py-2.5 rounded-full text-xs md:text-sm font-medium whitespace-nowrap transition-all duration-300 cursor-pointer ${
                    isActive
                      ? "bg-primary-600 text-white shadow-md"
                      : "bg-white border border-slate-200 text-slate-700 hover:bg-slate-50"
                  }`}
                >
                  <Icon
                    className={`w-4 h-4 ${
                      isActive ? "text-white" : "text-slate-500"
                    }`}
                  />
                  <span>{dict.navigation[key]}</span>
                </button>
              );
            })}
          </div>
        </div>
      </div>

      {/* 3. DETAILED SERVICES SECTION */}
      <div>
        {categoriesKeys.map((key, index) => {
          const item = dict.categories[key];
          const isReversed = index % 2 !== 0;
          const bgClass = index % 2 === 0 ? "bg-white" : "bg-slate-50";

          return (
            <div key={key}>
              {index > 0 && <SectionSeparator />}
              <section
                id={item.id}
                className={`py-16 md:py-24 ${bgClass} scroll-mt-36`}
              >
                <div className="container mx-auto px-4 md:px-6">
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    className="rounded-3xl border border-slate-200/50 bg-white shadow-lg p-8 md:p-10"
                  >
                    <div className="text-xs font-semibold text-primary-600 tracking-wider uppercase">
                      {item.badge}
                    </div>
                    <h2 className="text-3xl md:text-4xl font-bold text-slate-900 tracking-tight mt-2 mb-4">
                      {item.title}
                    </h2>
                    <p className="text-lg text-slate-600 mb-8">
                      {item.description}
                    </p>

                    <div
                      className={`grid md:grid-cols-2 gap-10 items-start ${
                        isReversed ? "" : ""
                      }`}
                    >
                      <div
                        className={`relative h-72 md:h-96 rounded-3xl overflow-hidden shadow-lg ${
                          isReversed ? "md:order-2" : "md:order-1"
                        }`}
                      >
                        <Image
                          src={item.imagePath}
                          alt={item.title}
                          fill
                          className="object-cover"
                          sizes="(max-width: 768px) 100vw, 50vw"
                        />
                      </div>

                      <div
                        className={`flex flex-col ${
                          isReversed ? "md:order-1" : "md:order-2"
                        }`}
                      >
                        <ul className="space-y-4 mb-6">
                          {item.features.map((feature, fIdx) => (
                            <li key={fIdx} className="flex items-start gap-3">
                              <div className="w-2 h-2 rounded-full bg-primary-500 shrink-0 mt-2" />
                              <span className="text-slate-700">{feature}</span>
                            </li>
                          ))}
                        </ul>

                        <LocaleLink
                          href="/contact"
                          lang={lang}
                          className="mt-8"
                        >
                          <span className="inline-flex items-center gap-2 text-primary-600 font-semibold hover:text-primary-700 transition-colors group">
                            {item.ctaText}
                            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                          </span>
                        </LocaleLink>
                      </div>
                    </div>
                  </motion.div>
                </div>
              </section>
            </div>
          );
        })}
      </div>

      <SectionSeparator />

      {/* 4. HARDWARE & SOFTWARE COMPATIBILITY SECTION */}
      <section className="py-16 md:py-24 bg-slate-50 border-t border-slate-200">
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex flex-col items-center text-center mb-10">
            <h3 className="text-2xl md:text-3xl font-bold text-slate-900 tracking-tight">
              {dict.compatibility.title}
            </h3>
            <p className="text-slate-600 mt-3 max-w-2xl">
              {dict.compatibility.subtitle}
            </p>
          </div>
          <div className="flex flex-wrap items-center justify-center gap-4">
            {dict.compatibility.badges.map((badge, bIdx) => (
              <div
                key={bIdx}
                className="px-6 py-3 rounded-2xl bg-white border border-slate-200/50 shadow-md text-sm font-bold text-primary-600"
              >
                {badge}
              </div>
            ))}
          </div>
        </div>
      </section>

      <SectionSeparator />
    </div>
  );
}
