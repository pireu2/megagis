"use client";

import Image from "next/image";
import { ArrowRight, ShieldCheck } from "lucide-react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { LocaleLink } from "@/components/locale-link";
import type { Locale, HeroDict } from "@/lib/i18n";

interface HeroSectionProps {
  lang: Locale;
  dict: HeroDict;
  bgVideoSrc?: string;
}

export function HeroSection({ lang, dict, bgVideoSrc }: HeroSectionProps) {
  return (
    <section className="relative overflow-hidden bg-slate-50 mt-14 min-h-[calc(100vh-3.5rem)] pt-6 md:pt-12 pb-6 md:pb-12 flex flex-col justify-between">
      {/* Background Image / Video Layer */}
      {bgVideoSrc ? (
        <video
          src={bgVideoSrc}
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 w-full h-full object-cover opacity-10 pointer-events-none"
        />
      ) : (
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          <Image
            src="/images/hero/hero-field-topcon.jpg"
            alt="Megagis Field Surveying"
            fill
            priority
            sizes="100vw"
            className="object-cover object-center opacity-10 grayscale-[30%]"
          />
        </div>
      )}

      {/* Radial & Gradient Depth Overlay */}
      <div className="absolute inset-0 bg-linear-to-b from-white/90 via-white/80 to-slate-50 pointer-events-none" />

      {/* Square Grid Background */}
      <div className="absolute inset-0 bg-grid-slate-thin opacity-50 pointer-events-none mix-blend-multiply" />

      {/* Noise Texture */}
      <div
        className="absolute inset-0 opacity-[0.02] pointer-events-none mix-blend-multiply"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 400 400' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' /%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)' /%3E%3C/svg%3E")`,
        }}
      />

      <div className="container relative z-10 mx-auto px-4 md:px-6 flex flex-col justify-between h-full">
        {/* Main Content Area */}
        <div className="max-w-5xl text-flush-left">
          {/* Subtle Overline badge */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="flex items-center gap-2 mb-4 md:mb-8 text-sm font-medium text-slate-500"
          >
            <ShieldCheck className="h-4 w-4 text-primary-600" />
            <span className="text-slate-700 font-semibold">
              {dict.ancpiBadge ?? "ANCPI Clasa I"}
            </span>
          </motion.div>

          {/* Massive Swiss Typography Heading */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            className="heading-massive text-slate-900 mb-6 md:mb-8 tracking-tight leading-[0.95] max-w-5xl"
          >
            {dict.title}
          </motion.h1>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
            className="text-base md:text-lg lg:text-xl text-slate-600 leading-relaxed max-w-3xl mb-8 md:mb-10"
          >
            {dict.description}
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
            className="flex flex-row flex-wrap items-center gap-3 md:gap-4"
          >
            <LocaleLink href="/contact" lang={lang}>
              <Button
                variant="accent"
                size="default"
                className="group text-sm md:text-base md:px-7 md:py-6"
              >
                {dict.primaryCta}
                <ArrowRight className="h-4 w-4 md:h-5 md:w-5 transition-transform group-hover:translate-x-1" />
              </Button>
            </LocaleLink>

            <LocaleLink href="/servicii" lang={lang}>
              <Button
                variant="outline"
                size="default"
                className="text-sm md:text-base md:px-7 md:py-6 border-slate-200 bg-white/60 text-slate-700 hover:bg-slate-100 hover:border-slate-300 hover:text-slate-900"
              >
                {dict.secondaryCta}
                <ArrowRight className="h-4 w-4 md:h-5 md:w-5 transition-transform group-hover:translate-x-1" />
              </Button>
            </LocaleLink>
          </motion.div>
        </div>

        {/* Key Authority Indicators / Trust Bar */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.6, ease: "easeOut" }}
          className="mt-8 md:mt-12"
        >
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8">
            <div className="flex flex-col">
              <span className="text-2xl md:text-4xl font-bold text-slate-900 tracking-tight">
                {dict.trustCards?.ancpi.value ?? "Clasa I"}
              </span>
              <span className="text-xs md:text-sm font-medium text-slate-500 mt-1">
                {dict.trustCards?.ancpi.label ?? "Autorizat ANCPI (RO-B-J 2489/2022)"}
              </span>
            </div>

            <div className="flex flex-col">
              <span className="text-2xl md:text-4xl font-bold text-slate-900 tracking-tight">
                {dict.trustCards?.projects.value ?? "50+"}
              </span>
              <span className="text-xs md:text-sm font-medium text-slate-500 mt-1">
                {dict.trustCards?.projects.label ?? "Proiecte Cadastru Sistematic & RSV"}
              </span>
            </div>

            <div className="flex flex-col">
              <span className="text-2xl md:text-4xl font-bold text-primary-600 tracking-tight">
                {dict.trustCards?.anre.value ?? "ANRE"}
              </span>
              <span className="text-xs md:text-sm font-medium text-slate-500 mt-1">
                {dict.trustCards?.anre.label ?? "Conformitate Rețele Utilități"}
              </span>
            </div>

            <div className="flex flex-col">
              <span className="text-2xl md:text-4xl font-bold text-slate-900 tracking-tight">
                {dict.trustCards?.pnccf?.value ?? dict.trustCards?.precision?.value ?? "100.000+"}
              </span>
              <span className="text-xs md:text-sm font-medium text-slate-500 mt-1">
                {dict.trustCards?.pnccf?.label ?? dict.trustCards?.precision?.label ?? "Imobile & UAT-uri Înregistrate (PNCCF)"}
              </span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
