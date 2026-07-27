"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import {
  Award,
  ShieldCheck,
  Phone,
  Mail,
  Building2,
  FileText,
  Cpu,
  Compass,
  Layers,
  Car,
  Terminal,
} from "lucide-react";
import type { AboutPageDict } from "@/lib/i18n";
import { SectionSeparator } from "./section-separator";

interface AboutPageClientProps {
  dict: AboutPageDict;
}

export function AboutPageClient({ dict }: AboutPageClientProps) {
  const equipmentCategories = [
    {
      key: "totalStations" as const,
      Icon: Compass,
      data: dict.equipment.categories.totalStations,
    },
    {
      key: "gnssGps" as const,
      Icon: Cpu,
      data: dict.equipment.categories.gnssGps,
    },
    {
      key: "digitalLevel" as const,
      Icon: Layers,
      data: dict.equipment.categories.digitalLevel,
    },
    {
      key: "software" as const,
      Icon: Terminal,
      data: dict.equipment.categories.software,
    },
    {
      key: "fleet" as const,
      Icon: Car,
      data: dict.equipment.categories.fleet,
    },
  ];

  return (
    <div className="flex min-h-screen flex-col bg-white selection:bg-primary-200 selection:text-primary-900">
      {/* ─── 1. HERO SECTION ─────────────────────────────────────── */}
      <section className="relative pt-28 md:pt-36 pb-16 md:pb-24 overflow-hidden bg-white">
        {/* Grid overlay */}
        <div className="absolute inset-0 bg-grid-slate-thin opacity-50 pointer-events-none" />
        <div className="absolute inset-0 bg-linear-to-br from-slate-50/80 via-transparent to-white pointer-events-none" />

        <div className="container relative mx-auto px-4 md:px-6">
          <div className="max-w-4xl text-flush-left">
            <motion.span
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="text-xs font-semibold text-primary-600 tracking-wider uppercase mb-3 inline-block"
            >
              {dict.hero.badge}
            </motion.span>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="heading-dominant text-slate-900 mb-6"
            >
              {dict.hero.title}
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-lg md:text-xl text-slate-600 max-w-2xl leading-relaxed mb-4"
            >
              {dict.hero.subtitle}
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.25 }}
              className="text-base text-slate-500 max-w-2xl leading-relaxed"
            >
              {dict.hero.description}
            </motion.p>
          </div>

          {/* Stats grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-12 md:mt-16">
            {dict.stats.map((stat, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.6,
                  delay: 0.3 + idx * 0.1,
                  ease: [0.22, 1, 0.36, 1],
                }}
                className="group relative"
              >
                <div className="h-full p-6 rounded-3xl border border-slate-200/50 bg-white hover:border-primary-300 transition-all duration-500 relative overflow-hidden group-hover:scale-[1.02] group-hover:shadow-2xl shadow-lg text-left">
                  <div className="text-4xl font-extrabold text-primary-600 mb-2 tracking-tight">
                    {stat.value}
                  </div>
                  <div className="text-sm font-semibold text-slate-700">
                    {stat.label}
                  </div>
                  <div className="text-xs text-slate-500 mt-1 leading-snug">
                    {stat.description}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <SectionSeparator />

      {/* ─── 2. COMPANY PROFILE ──────────────────────────────────── */}
      <section className="py-16 md:py-24 bg-slate-50 relative overflow-hidden">
        <div className="absolute inset-0 bg-grid-slate-thin opacity-50 pointer-events-none" />

        <div className="container relative mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 md:gap-12 items-start">
            {/* Left: narrative */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="lg:col-span-7 space-y-5"
            >
              <div className="flex items-center gap-2">
                <Building2 className="w-4 h-4 text-primary-600" />
                <span className="text-xs font-semibold text-primary-600 uppercase tracking-wider">
                  {dict.profile.badge}
                </span>
              </div>

              <h2 className="heading-dominant text-slate-900">
                {dict.profile.title}
              </h2>

              <p className="text-lg text-slate-700 font-medium leading-relaxed">
                {dict.profile.subtitle}
              </p>

              <div className="space-y-4 text-slate-600 leading-relaxed">
                {dict.profile.description.map((p, i) => (
                  <p key={i}>{p}</p>
                ))}
              </div>

              {/* Highlight */}
              <div className="p-5 rounded-2xl border border-primary-200/50 bg-white flex items-start gap-4 shadow-sm">
                <div className="inline-flex h-10 w-10 items-center justify-center rounded-2xl bg-linear-to-br from-primary-500 to-primary-700 text-white shadow-md shrink-0">
                  <ShieldCheck className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-slate-900 font-semibold text-sm mb-1">
                    {dict.profile.highlightTitle}
                  </h4>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    {dict.profile.highlightDescription}
                  </p>
                </div>
              </div>
            </motion.div>

            {/* Right: legal data card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.15 }}
              className="lg:col-span-5"
            >
              <div className="h-full p-8 rounded-3xl border border-slate-200/50 bg-white shadow-lg relative overflow-hidden">
                <div className="flex items-center gap-3 mb-6 pb-4 border-b border-slate-100">
                  <div className="inline-flex h-10 w-10 items-center justify-center rounded-2xl bg-linear-to-br from-primary-500 to-primary-700 text-white shadow-md">
                    <FileText className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="text-base font-bold text-slate-900 tracking-tight">
                      {dict.profile.legalDetailsTitle}
                    </h3>
                    <span className="text-xs text-primary-600 font-medium">
                      {dict.profile.legalStatus}
                    </span>
                  </div>
                </div>

                <div className="space-y-0">
                  {[
                    {
                      label: dict.profile.legalDetails.companyNameLabel,
                      value: dict.profile.legalDetails.companyName,
                    },
                    {
                      label: dict.profile.legalDetails.cuiLabel,
                      value: dict.profile.legalDetails.cui,
                    },
                    {
                      label: dict.profile.legalDetails.regComLabel,
                      value: dict.profile.legalDetails.regCom,
                    },
                    {
                      label: dict.profile.legalDetails.caenLabel,
                      value: dict.profile.legalDetails.caen,
                    },
                    {
                      label: dict.profile.legalDetails.ancpiLabel,
                      value: dict.profile.legalDetails.ancpi,
                    },
                    {
                      label: dict.profile.legalDetails.addressLabel,
                      value: dict.profile.legalDetails.address,
                    },
                  ].map((row, i) => (
                    <div
                      key={i}
                      className="py-3 border-b border-slate-100 last:border-0"
                    >
                      <div className="text-xs text-slate-500 uppercase tracking-wider font-medium">
                        {row.label}
                      </div>
                      <div className="text-sm font-semibold text-slate-900 mt-0.5">
                        {row.value}
                      </div>
                    </div>
                  ))}

                  {/* Phone */}
                  <a
                    href={`tel:${dict.profile.legalDetails.phone.replace(/\s+/g, "")}`}
                    className="py-3 border-b border-slate-100 flex items-center gap-2 group hover:text-primary-600 transition-colors"
                  >
                    <Phone className="w-4 h-4 text-primary-600 shrink-0" />
                    <div>
                      <div className="text-xs text-slate-500 uppercase tracking-wider font-medium">
                        {dict.profile.legalDetails.phoneLabel}
                      </div>
                      <div className="text-sm font-semibold text-slate-900 group-hover:text-primary-600 transition-colors mt-0.5">
                        {dict.profile.legalDetails.phone}
                      </div>
                    </div>
                  </a>

                  {/* Email */}
                  <a
                    href={`mailto:${dict.profile.legalDetails.email}`}
                    className="py-3 flex items-center gap-2 group hover:text-primary-600 transition-colors"
                  >
                    <Mail className="w-4 h-4 text-primary-600 shrink-0" />
                    <div>
                      <div className="text-xs text-slate-500 uppercase tracking-wider font-medium">
                        {dict.profile.legalDetails.emailLabel}
                      </div>
                      <div className="text-sm font-semibold text-slate-900 group-hover:text-primary-600 transition-colors mt-0.5 break-all">
                        {dict.profile.legalDetails.email}
                      </div>
                    </div>
                  </a>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <SectionSeparator />

      {/* ─── 3. CERTIFICATIONS ───────────────────────────────────── */}
      <section className="py-16 md:py-24 bg-white relative overflow-hidden">
        <div className="absolute inset-0 bg-grid-slate-thin opacity-50 pointer-events-none" />
        <div className="absolute inset-0 bg-linear-to-br from-primary-50/30 via-transparent to-white pointer-events-none" />

        <div className="container relative mx-auto px-4 md:px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl mb-16 text-flush-left"
          >
            <span className="text-xs font-semibold text-primary-600 tracking-wider uppercase mb-3 inline-block">
              {dict.certifications.badge}
            </span>
            <h2 className="heading-dominant text-slate-900 mb-6">
              {dict.certifications.title}
            </h2>
            <p className="text-lg md:text-xl text-slate-600 max-w-2xl">
              {dict.certifications.subtitle}
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {dict.certifications.items.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.6,
                  delay: index * 0.1,
                  ease: [0.22, 1, 0.36, 1],
                }}
                className="group relative"
              >
                <div className="h-full p-8 rounded-3xl border border-slate-200/50 bg-white hover:border-primary-300 transition-all duration-500 relative overflow-hidden group-hover:scale-[1.02] group-hover:shadow-2xl shadow-lg">
                  <div className="mb-6 inline-flex h-16 w-16 items-center justify-center rounded-2xl bg-linear-to-br from-primary-500 to-primary-700 text-white shadow-lg group-hover:scale-110 group-hover:rotate-3 transition-all duration-500">
                    <Award className="h-8 w-8" />
                  </div>

                  <span className="text-xs font-mono bg-primary-50 text-primary-700 px-2 py-0.5 rounded-md mb-3 inline-block">
                    {item.code}
                  </span>

                  <h3 className="text-xl font-bold mb-2 tracking-tight text-slate-900">
                    {item.name}
                  </h3>

                  <div className="text-xs text-slate-500 mb-3 font-medium">
                    {item.issuer}
                  </div>

                  <p className="text-sm leading-relaxed text-slate-600">
                    {item.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <SectionSeparator />

      {/* ─── 4. EQUIPMENT ────────────────────────────────────────── */}
      <section className="py-16 md:py-24 bg-slate-50 relative overflow-hidden">
        <div className="absolute inset-0 bg-grid-slate-thin opacity-50 pointer-events-none" />

        <div className="container relative mx-auto px-4 md:px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl mb-16 text-flush-left"
          >
            <span className="text-xs font-semibold text-primary-600 tracking-wider uppercase mb-3 inline-block">
              {dict.equipment.badge}
            </span>
            <h2 className="heading-dominant text-slate-900 mb-6">
              {dict.equipment.title}
            </h2>
            <p className="text-lg md:text-xl text-slate-600 max-w-2xl">
              {dict.equipment.subtitle}
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {equipmentCategories.map(({ key, Icon, data }, index) => (
              <motion.div
                key={key}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.6,
                  delay: index * 0.1,
                  ease: [0.22, 1, 0.36, 1],
                }}
                className="group relative"
              >
                <div className="h-full p-8 rounded-3xl border border-slate-200/50 bg-white hover:border-primary-300 transition-all duration-500 relative overflow-hidden group-hover:scale-[1.02] group-hover:shadow-2xl shadow-lg">
                  <div className="mb-6 inline-flex h-16 w-16 items-center justify-center rounded-2xl bg-linear-to-br from-primary-500 to-primary-700 text-white shadow-lg group-hover:scale-110 group-hover:rotate-3 transition-all duration-500">
                    <Icon className="h-8 w-8" />
                  </div>

                  <h3 className="text-xl font-bold mb-4 tracking-tight text-slate-900">
                    {data.title}
                  </h3>

                  <ul className="space-y-2.5">
                    {data.items.map((item, i) => (
                      <li key={i} className="flex items-start gap-3">
                        <div className="w-1.5 h-1.5 rounded-full bg-primary-500 shrink-0 mt-2" />
                        <span className="text-sm text-slate-600 leading-relaxed">
                          {item}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <SectionSeparator />

      {/* ─── 5. TEAM GALLERY ─────────────────────────────────────── */}
      <section className="py-16 md:py-24 bg-white relative overflow-hidden">
        <div className="absolute inset-0 bg-grid-slate-thin opacity-50 pointer-events-none" />

        <div className="container relative mx-auto px-4 md:px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl mb-16 text-flush-left"
          >
            <span className="text-xs font-semibold text-primary-600 tracking-wider uppercase mb-3 inline-block">
              {dict.teamGallery.badge}
            </span>
            <h2 className="heading-dominant text-slate-900 mb-6">
              {dict.teamGallery.title}
            </h2>
            <p className="text-lg md:text-xl text-slate-600 max-w-2xl">
              {dict.teamGallery.subtitle}
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {dict.teamGallery.images.map((img, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.6,
                  delay: idx * 0.1,
                  ease: [0.22, 1, 0.36, 1],
                }}
                className="group relative rounded-3xl overflow-hidden aspect-4/3 shadow-lg border border-slate-200/50"
              >
                <Image
                  src={img.src}
                  alt={img.title}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-linear-to-t from-slate-900/70 via-slate-900/20 to-transparent" />

                <div className="absolute inset-0 p-6 flex flex-col justify-end text-left">
                  <span className="inline-block px-2 py-0.5 rounded-full bg-primary-600/90 text-[10px] font-semibold text-white tracking-wider uppercase mb-2 w-fit">
                    {img.category}
                  </span>
                  <h3 className="text-lg font-bold text-white tracking-tight mb-1">
                    {img.title}
                  </h3>
                  <p className="text-xs text-slate-300 leading-relaxed opacity-90">
                    {img.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
