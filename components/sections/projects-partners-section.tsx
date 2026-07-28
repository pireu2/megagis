"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Building, MapPin, Calendar, ArrowRight } from "lucide-react";
import type { ProjectsPartnersDict, Locale } from "@/lib/i18n";
import { ProjectLogoBadge } from "@/components/ui/project-logo-badge";
import { LocaleLink } from "@/components/locale-link";
import { Button } from "@/components/ui/button";

interface ProjectsPartnersSectionProps {
  dict: ProjectsPartnersDict;
  lang?: Locale;
}

export function ProjectsPartnersSection({
  dict,
  lang = "ro",
}: ProjectsPartnersSectionProps) {
  const [selectedCategory, setSelectedCategory] = useState<string>("all");

  const filterCategories = [
    { key: "all", label: dict.categories.all },
    { key: "cadastru", label: dict.categories.cadastru },
    { key: "rsv", label: dict.categories.rsv },
    { key: "utilities", label: dict.categories.utilities },
    { key: "infrastructure", label: dict.categories.infrastructure },
  ];

  const filteredItems =
    selectedCategory === "all"
      ? dict.items.filter((item) => item.isTop)
      : dict.items.filter((item) => item.category === selectedCategory);

  return (
    <section className="section-padding-swiss bg-slate-50 text-slate-900 relative overflow-hidden">
      {/* Square Grid Background */}
      <div className="absolute inset-0 bg-grid-slate-thin opacity-50 pointer-events-none" />

      <div className="container relative mx-auto px-4 md:px-6">
        {/* Header - Flush Left Swiss Style */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="max-w-3xl mb-12 md:mb-16 text-flush-left"
        >
          <span className="text-xs font-semibold text-primary-600 tracking-wider uppercase mb-3 inline-block">
            {dict.badge ?? "Portofoliu"}
          </span>
          <h2 className="heading-dominant text-slate-900 mb-6">
            {dict.title}
          </h2>
          <p className="text-lg md:text-xl text-slate-600 max-w-2xl">
            {dict.subtitle}
          </p>
        </motion.div>

        {/* Category Filter Pills */}
        <div className="flex flex-wrap gap-2 md:gap-3 mb-10">
          {filterCategories.map((cat) => (
            <button
              key={cat.key}
              onClick={() => setSelectedCategory(cat.key)}
              className={`px-4 py-2 rounded-lg font-medium text-xs md:text-sm transition-all duration-200 ${
                selectedCategory === cat.key
                  ? "bg-primary-600 text-white shadow-md shadow-primary-600/20"
                  : "bg-white text-slate-600 hover:text-slate-900 hover:bg-slate-100 border border-slate-200"
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <AnimatePresence mode="wait">
          <motion.div
            key={selectedCategory}
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            transition={{ duration: 0.3 }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
          >
            {filteredItems.map((project) => (
              <div
                key={project.id}
                className="flex flex-col rounded-xl p-6 bg-white border border-slate-200 hover:border-primary-300 transition-all duration-300 group shadow-xs hover:shadow-md"
              >
                <div className="flex items-center justify-between mb-4 gap-2">
                  <ProjectLogoBadge item={project} />
                  <span className="flex items-center gap-1 text-xs font-semibold px-2.5 py-1 rounded-full bg-slate-100 text-slate-700 shrink-0">
                    <Calendar className="h-3.5 w-3.5 text-slate-400" />
                    {project.year}
                  </span>
                </div>

                <h3 className="text-lg font-bold text-slate-900 mb-3 group-hover:text-primary-700 transition-colors">
                  {project.title}
                </h3>

                <div className="flex items-center justify-between text-xs text-slate-600 mt-auto pt-4 border-t border-slate-100">
                  <span className="flex items-center gap-1.5 font-medium">
                    <Building className="h-3.5 w-3.5 text-slate-400" />
                    {project.client}
                  </span>
                  <span className="flex items-center gap-1 font-semibold text-slate-500">
                    <MapPin className="h-3.5 w-3.5 text-slate-400" />
                    {project.location}
                  </span>
                </div>
              </div>
            ))}
          </motion.div>
        </AnimatePresence>

        {/* View All Projects CTA Button - Styled identically to Services button */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3, ease: "easeOut" }}
          className="mt-12 text-center md:text-left"
        >
          <LocaleLink href="/proiecte" lang={lang}>
            <Button
              size="xl"
              className="group relative overflow-hidden bg-linear-to-r from-primary-600 via-primary-500 to-primary-600 bg-size-[200%_100%] hover:bg-position-[100%_0] transition-all duration-500 text-white border-0 shadow-lg shadow-primary-500/30 hover:shadow-xl hover:shadow-primary-500/40 hover:scale-105"
            >
              <div className="absolute inset-0 bg-linear-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
              <span className="relative z-10">
                {dict.viewAll ?? "Vezi Toate Proiectele"}
              </span>
              <ArrowRight className="relative z-10 ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Button>
          </LocaleLink>
        </motion.div>
      </div>
    </section>
  );
}
