"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import {
  Map,
  Compass,
  Globe,
  Trees,
  Briefcase,
  ArrowRight,
  CheckCircle2,
  ShieldCheck,
  FileText,
  Layers,
  ChevronRight,
  Phone,
  Sparkles,
} from "lucide-react";
import { LocaleLink } from "@/components/locale-link";
import { SectionSeparator } from "@/components/sections/section-separator";
import type {
  Locale,
  ServiceDetailItem,
  ServicesPageDict,
  CtaSectionDict,
  FooterDict,
} from "@/lib/i18n";

interface ServiceDetailViewProps {
  lang: Locale;
  canonicalSlug: string;
  item: ServiceDetailItem;
  allCategories: ServicesPageDict["categories"];
  ctaDict: CtaSectionDict;
  contactInfo: FooterDict["contactInfo"];
}

const serviceIcons: Record<string, typeof Map> = {
  "cadastru-sistematic": Map,
  "topografie-geodezie": Compass,
  "gis-cartografie": Globe,
  "registrul-spatiilor-verzi": Trees,
  "consultanta-tehnica": Briefcase,
};

const serviceCategoryToSlugMap: Record<string, string> = {
  cadastral: "cadastru-sistematic",
  topography: "topografie-geodezie",
  gis: "gis-cartografie",
  rsv: "registrul-spatiilor-verzi",
  consulting: "consultanta-tehnica",
};

export function ServiceDetailView({
  lang,
  canonicalSlug,
  item,
  allCategories,
  ctaDict,
  contactInfo,
}: ServiceDetailViewProps) {
  const IconComponent = serviceIcons[canonicalSlug] || Map;

  const otherServicesKeys = (
    Object.keys(allCategories) as Array<keyof ServicesPageDict["categories"]>
  ).filter((key) => allCategories[key].id !== item.id);

  return (
    <div className="flex min-h-screen flex-col bg-white selection:bg-primary-200 selection:text-primary-900">
      {/* 1. HERO & BREADCRUMB SECTION */}
      <section className="relative pt-28 md:pt-36 pb-16 md:pb-24 bg-slate-50 border-b border-slate-200/80">
        <div className="absolute inset-0 bg-grid-slate-thin opacity-50 pointer-events-none" />

        <div className="container relative mx-auto px-4 md:px-6">
          {/* Breadcrumbs */}
          <motion.nav
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            className="flex items-center gap-2 text-xs md:text-sm font-medium text-slate-500 mb-8 overflow-x-auto no-scrollbar"
            aria-label="Breadcrumb"
          >
            <LocaleLink
              href="/"
              lang={lang}
              className="hover:text-primary-600 transition-colors"
            >
              {lang === "ro" ? "Acasă" : "Home"}
            </LocaleLink>
            <ChevronRight className="w-3.5 h-3.5 text-slate-400 shrink-0" />
            <LocaleLink
              href="/servicii"
              lang={lang}
              className="hover:text-primary-600 transition-colors"
            >
              {lang === "ro" ? "Servicii" : "Services"}
            </LocaleLink>
            <ChevronRight className="w-3.5 h-3.5 text-slate-400 shrink-0" />
            <span className="text-slate-900 font-semibold truncate">
              {item.title}
            </span>
          </motion.nav>

          <div className="max-w-4xl text-flush-left mb-12">
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-semibold text-primary-700 bg-primary-50 border border-primary-200/60 mb-4"
            >
              <ShieldCheck className="w-4 h-4 text-primary-600" />
              <span>{item.badge}</span>
            </motion.div>

            {/* Dominant Title */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="heading-dominant text-slate-900 mb-6 text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight leading-[1.08]"
              data-testid="service-hero-title"
            >
              {item.title}
            </motion.h1>

            {/* Subtitle & Description */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-lg md:text-xl text-slate-600 leading-relaxed max-w-3xl mb-8"
            >
              {item.description}
            </motion.p>

            {/* CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="flex flex-wrap items-center gap-4"
            >
              <LocaleLink
                href={`/contact?service=${canonicalSlug}`}
                lang={lang}
                className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-xl bg-primary-600 hover:bg-primary-700 text-white font-semibold text-base shadow-lg shadow-primary-600/20 hover:shadow-primary-600/30 transition-all duration-200"
                data-testid="service-quote-btn"
              >
                <span>{item.ctaText}</span>
                <ArrowRight className="w-4 h-4" />
              </LocaleLink>
              <a
                href="#specificatii"
                className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-xl bg-white hover:bg-slate-100 text-slate-700 font-semibold text-base border border-slate-300 transition-colors"
              >
                <FileText className="w-4 h-4 text-slate-500" />
                <span>
                  {lang === "ro"
                    ? "Specificații Tehnice"
                    : "Technical Specifications"}
                </span>
              </a>
            </motion.div>
          </div>

          {/* Hero Stats Bento Grid */}
          {item.heroStats && item.heroStats.length > 0 && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 mt-12"
            >
              {item.heroStats.map((stat, idx) => (
                <div
                  key={idx}
                  className="p-6 rounded-2xl border border-slate-200/80 bg-white/90 backdrop-blur-md shadow-sm hover:shadow-md transition-shadow"
                >
                  <div className="text-3xl md:text-4xl font-extrabold text-primary-600 tracking-tight">
                    {stat.value}
                  </div>
                  <div className="text-xs md:text-sm font-medium text-slate-500 mt-1">
                    {stat.label}
                  </div>
                </div>
              ))}
            </motion.div>
          )}
        </div>
      </section>

      <SectionSeparator />

      {/* 2. BENTO GRID FEATURES SHOWCASE */}
      <section className="py-16 md:py-24 bg-white relative">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-3xl text-flush-left mb-12">
            <span className="text-xs font-semibold text-primary-600 uppercase tracking-wider">
              {lang === "ro"
                ? "Capabilități Inginerești"
                : "Engineering Capabilities"}
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 tracking-tight mt-2">
              {item.subtitle}
            </h2>
          </div>

          {/* Bento Layout Grid */}
          <div
            className="grid grid-cols-1 md:grid-cols-12 gap-6"
            data-testid="service-bento-grid"
          >
            {/* Bento Card 1: Main Photo & Core Features (Col-span-8) */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="md:col-span-8 rounded-3xl border border-slate-200/80 bg-slate-50 overflow-hidden shadow-sm flex flex-col justify-between"
            >
              <div className="relative h-64 sm:h-80 w-full overflow-hidden">
                <Image
                  src={item.imagePath}
                  alt={item.title}
                  fill
                  className="object-cover transition-transform duration-700 hover:scale-105"
                  sizes="(max-width: 768px) 100vw, 66vw"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-slate-900/20 to-transparent flex items-end p-6 md:p-8">
                  <div className="text-white">
                    <span className="inline-block px-3 py-1 rounded-full text-xs font-semibold bg-white/20 backdrop-blur-md border border-white/30 mb-2">
                      {item.badge}
                    </span>
                    <h3 className="text-xl md:text-2xl font-bold text-white">
                      {item.title}
                    </h3>
                  </div>
                </div>
              </div>

              <div className="p-6 md:p-8 bg-white border-t border-slate-200/80">
                <h4 className="text-sm font-bold text-slate-900 uppercase tracking-wider mb-4">
                  {lang === "ro"
                    ? "Caracteristici Tehnice Principale"
                    : "Key Technical Features"}
                </h4>
                <div className="grid sm:grid-cols-2 gap-3">
                  {item.features.map((feature, idx) => (
                    <div key={idx} className="flex items-start gap-3">
                      <CheckCircle2 className="w-5 h-5 text-primary-600 shrink-0 mt-0.5" />
                      <span className="text-sm text-slate-700 font-medium">
                        {feature}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>

            {/* Bento Card 2: Standards & Certification (Col-span-4) */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="md:col-span-4 rounded-3xl bg-slate-900 text-white p-8 shadow-xl flex flex-col justify-between relative overflow-hidden"
            >
              <div className="absolute -right-8 -bottom-8 w-40 h-40 bg-primary-600/20 rounded-full blur-3xl pointer-events-none" />

              <div>
                <div className="w-12 h-12 rounded-2xl bg-white/10 backdrop-blur-md border border-white/15 flex items-center justify-center mb-6">
                  <IconComponent className="w-6 h-6 text-primary-400" />
                </div>
                <span className="text-xs font-semibold text-primary-400 uppercase tracking-wider">
                  {lang === "ro"
                    ? "Garanția Calității"
                    : "Quality Guarantee"}
                </span>
                <h3 className="text-2xl font-bold text-white tracking-tight mt-2 mb-4">
                  ANCPI Clasa I & Standarde ISO
                </h3>
                <p className="text-sm text-slate-300 leading-relaxed mb-6">
                  {lang === "ro"
                    ? "Lucrările noastre sunt realizate de ingineri autorizați ANCPI Clasa I, respectând cu strictețe normele ANCPI DocCad, E-Terra și ISO 9001/27001."
                    : "Our services are executed by ANCPI Class I authorized engineers, adhering strictly to ANCPI DocCad, E-Terra, and ISO 9001/27001 standards."}
                </p>
              </div>

              {item.secondaryImage && (
                <div className="relative h-36 w-full rounded-2xl overflow-hidden mt-4 border border-white/10">
                  <Image
                    src={item.secondaryImage}
                    alt="Echipament Megagis"
                    fill
                    className="object-cover"
                  />
                </div>
              )}
            </motion.div>

            {/* Extended Bento Cards if available */}
            {item.bentoFeatures &&
              item.bentoFeatures.map((bento, bIdx) => (
                <motion.div
                  key={bIdx}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.1 * (bIdx + 2) }}
                  className={`${
                    bento.colSpan || "col-span-1 md:col-span-6"
                  } rounded-3xl border border-slate-200/80 bg-white p-6 md:p-8 shadow-sm hover:shadow-md transition-all`}
                >
                  {bento.badge && (
                    <span className="inline-block px-3 py-1 rounded-full text-xs font-semibold bg-primary-50 text-primary-700 mb-3 border border-primary-200/50">
                      {bento.badge}
                    </span>
                  )}
                  <h3 className="text-xl font-bold text-slate-900 mb-2">
                    {bento.title}
                  </h3>
                  <p className="text-sm text-slate-600 leading-relaxed">
                    {bento.description}
                  </p>
                </motion.div>
              ))}
          </div>
        </div>
      </section>

      <SectionSeparator />

      {/* 3. TECHNICAL SPECIFICATIONS & DELIVERABLES */}
      <section
        id="specificatii"
        className="py-16 md:py-24 bg-slate-50 scroll-mt-24"
      >
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-start">
            {/* Left: Specs Table */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="rounded-3xl border border-slate-200/80 bg-white p-8 shadow-sm"
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-xl bg-primary-50 flex items-center justify-center">
                  <Layers className="w-5 h-5 text-primary-600" />
                </div>
                <h3 className="text-2xl font-bold text-slate-900 tracking-tight">
                  {item.specsHeading}
                </h3>
              </div>

              <div className="divide-y divide-slate-100">
                {item.specs.map((spec, idx) => (
                  <div
                    key={idx}
                    className="py-4 flex items-center justify-between gap-4 text-sm"
                  >
                    <span className="font-medium text-slate-500">
                      {spec.label}
                    </span>
                    <span className="font-semibold text-slate-900 text-right bg-slate-100 px-3 py-1 rounded-lg">
                      {spec.value}
                    </span>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Right: Deliverables List */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="rounded-3xl border border-slate-200/80 bg-white p-8 shadow-sm"
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-xl bg-primary-50 flex items-center justify-center">
                  <FileText className="w-5 h-5 text-primary-600" />
                </div>
                <h3 className="text-2xl font-bold text-slate-900 tracking-tight">
                  {item.deliverablesHeading}
                </h3>
              </div>

              <div className="space-y-4">
                {item.deliverables.map((deliv, idx) => (
                  <div
                    key={idx}
                    className="p-4 rounded-2xl bg-slate-50 border border-slate-200/60 flex items-start gap-3"
                  >
                    <div className="w-6 h-6 rounded-full bg-primary-600 text-white flex items-center justify-center text-xs font-bold shrink-0 mt-0.5">
                      {idx + 1}
                    </div>
                    <span className="text-sm font-medium text-slate-800">
                      {deliv}
                    </span>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* 4. PROCESS WORKFLOW */}
      {item.workflow && item.workflow.length > 0 && (
        <>
          <SectionSeparator />
          <section id="flux" className="py-16 md:py-24 bg-white">
            <div className="container mx-auto px-4 md:px-6">
              <div className="max-w-3xl text-flush-left mb-12">
                <span className="text-xs font-semibold text-primary-600 uppercase tracking-wider">
                  {lang === "ro"
                    ? "Etape de Execuție"
                    : "Execution Methodology"}
                </span>
                <h2 className="text-3xl md:text-4xl font-bold text-slate-900 tracking-tight mt-2">
                  {item.workflowHeading ||
                    (lang === "ro"
                      ? "Flux Tehnologic Ingineresc"
                      : "Engineering Workflow")}
                </h2>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-5 gap-6">
                {item.workflow.map((wf, idx) => (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: idx * 0.1 }}
                    className="rounded-3xl border border-slate-200/80 bg-slate-50 p-6 flex flex-col justify-between hover:border-primary-300 transition-colors"
                  >
                    <div>
                      <div className="w-10 h-10 rounded-xl bg-primary-600 text-white font-mono text-sm font-bold flex items-center justify-center mb-4">
                        {wf.step}
                      </div>
                      <h3 className="text-base font-bold text-slate-900 mb-2">
                        {wf.title}
                      </h3>
                      <p className="text-xs text-slate-600 leading-relaxed">
                        {wf.description}
                      </p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </section>
        </>
      )}

      {/* 5. TARGET AUDIENCE & USE CASES */}
      {item.useCases && (
        <>
          <SectionSeparator />
          <section className="py-16 md:py-24 bg-slate-50">
            <div className="container mx-auto px-4 md:px-6">
              <div className="max-w-3xl text-flush-left mb-12">
                <span className="text-xs font-semibold text-primary-600 uppercase tracking-wider">
                  {lang === "ro" ? "Grup Țintă" : "Target Audience"}
                </span>
                <h2 className="text-3xl md:text-4xl font-bold text-slate-900 tracking-tight mt-2">
                  {item.useCasesHeading ||
                    (lang === "ro"
                      ? "Beneficiari & Domenii de Aplicare"
                      : "Target Audience & Use Cases")}
                </h2>
              </div>

              <div className="grid md:grid-cols-2 gap-8">
                {/* B2G Box */}
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6 }}
                  className="rounded-3xl border border-slate-200/80 bg-white p-8 shadow-sm"
                >
                  <span className="inline-block px-3 py-1 rounded-full text-xs font-semibold bg-emerald-50 text-emerald-700 border border-emerald-200/60 mb-4">
                    B2G · Sector Public
                  </span>
                  <h3 className="text-2xl font-bold text-slate-900 mb-6">
                    {item.useCases.b2gTitle}
                  </h3>
                  <ul className="space-y-4">
                    {item.useCases.b2gItems.map((b2g, idx) => (
                      <li key={idx} className="flex items-start gap-3 text-sm text-slate-700">
                        <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
                        <span>{b2g}</span>
                      </li>
                    ))}
                  </ul>
                </motion.div>

                {/* B2B Box */}
                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6 }}
                  className="rounded-3xl border border-slate-200/80 bg-white p-8 shadow-sm"
                >
                  <span className="inline-block px-3 py-1 rounded-full text-xs font-semibold bg-primary-50 text-primary-700 border border-primary-200/60 mb-4">
                    B2B · Sector Privat
                  </span>
                  <h3 className="text-2xl font-bold text-slate-900 mb-6">
                    {item.useCases.b2bTitle}
                  </h3>
                  <ul className="space-y-4">
                    {item.useCases.b2bItems.map((b2b, idx) => (
                      <li key={idx} className="flex items-start gap-3 text-sm text-slate-700">
                        <CheckCircle2 className="w-5 h-5 text-primary-600 shrink-0 mt-0.5" />
                        <span>{b2b}</span>
                      </li>
                    ))}
                  </ul>
                </motion.div>
              </div>
            </div>
          </section>
        </>
      )}

      <SectionSeparator />

      {/* 6. CTA BANNER */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="rounded-3xl bg-gradient-to-br from-slate-900 via-slate-900 to-primary-950 text-white p-8 md:p-14 shadow-2xl relative overflow-hidden">
            <div className="absolute right-0 top-0 w-96 h-96 bg-primary-500/10 rounded-full blur-3xl pointer-events-none" />

            <div className="max-w-3xl relative z-10">
              <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-semibold bg-white/10 backdrop-blur-md border border-white/20 text-primary-300 mb-4">
                <Sparkles className="w-4 h-4 text-primary-400" />
                <span>
                  {lang === "ro"
                    ? "Consultare Tehnică Gratuită"
                    : "Free Technical Consultation"}
                </span>
              </span>

              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-white mb-4">
                {lang === "ro"
                  ? `Solicită o ofertă pentru ${item.title}`
                  : `Request a Proposal for ${item.title}`}
              </h2>

              <p className="text-base md:text-lg text-slate-300 mb-8 leading-relaxed">
                {ctaDict.description}
              </p>

              <div className="flex flex-wrap items-center gap-4">
                <LocaleLink
                  href={`/contact?service=${canonicalSlug}`}
                  lang={lang}
                  className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl bg-primary-600 hover:bg-primary-500 text-white font-bold text-base shadow-lg transition-all duration-200"
                  data-testid="contact-cta-btn"
                >
                  <span>{ctaDict.primaryButton}</span>
                  <ArrowRight className="w-5 h-5" />
                </LocaleLink>

                <a
                  href={`tel:${contactInfo.phone.replace(/\s+/g, "")}`}
                  className="inline-flex items-center justify-center gap-2 px-6 py-4 rounded-xl bg-white/10 hover:bg-white/20 text-white font-semibold text-base backdrop-blur-md border border-white/20 transition-colors"
                >
                  <Phone className="w-4 h-4 text-primary-400" />
                  <span>{contactInfo.phone}</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <SectionSeparator />

      {/* 7. OTHER SERVICES GRID */}
      <section className="py-16 md:py-24 bg-slate-50 border-t border-slate-200">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-3xl text-flush-left mb-12">
            <span className="text-xs font-semibold text-primary-600 uppercase tracking-wider">
              {lang === "ro" ? "Portofoliu Integrat" : "Integrated Portfolio"}
            </span>
            <h2 className="text-2xl md:text-3xl font-bold text-slate-900 tracking-tight mt-2">
              {lang === "ro"
                ? "Explorează și celelalte servicii Megagis"
                : "Explore Other Megagis Services"}
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {otherServicesKeys.map((catKey) => {
              const otherItem = allCategories[catKey];
              const otherSlug = serviceCategoryToSlugMap[catKey] || otherItem.id;
              const OtherIcon = serviceIcons[otherSlug] || Map;

              return (
                <LocaleLink
                  key={catKey}
                  href={`/servicii/${otherSlug}`}
                  lang={lang}
                  className="group rounded-3xl border border-slate-200/80 bg-white p-6 shadow-sm hover:shadow-md hover:border-primary-400 transition-all flex flex-col justify-between"
                >
                  <div>
                    <div className="w-10 h-10 rounded-xl bg-primary-50 group-hover:bg-primary-600 text-primary-600 group-hover:text-white transition-colors flex items-center justify-center mb-4">
                      <OtherIcon className="w-5 h-5" />
                    </div>
                    <span className="text-xs font-semibold text-primary-600 mb-1 block">
                      {otherItem.badge}
                    </span>
                    <h3 className="text-base font-bold text-slate-900 group-hover:text-primary-600 transition-colors line-clamp-2 mb-2">
                      {otherItem.title}
                    </h3>
                    <p className="text-xs text-slate-500 line-clamp-3 leading-relaxed">
                      {otherItem.subtitle}
                    </p>
                  </div>

                  <div className="mt-6 pt-4 border-t border-slate-100 flex items-center justify-between text-xs font-semibold text-primary-600">
                    <span>{lang === "ro" ? "Află detalii" : "Learn more"}</span>
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </div>
                </LocaleLink>
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
}
