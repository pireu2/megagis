"use client";

import { ArrowRight, MapPin, Layers } from "lucide-react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { LocaleLink } from "@/components/locale-link";
import { AnimatedTopoBackground } from "@/components/animated-topo-background";
import type { Locale, HeroDict } from "@/lib/i18n";

interface HeroSectionProps {
  lang: Locale;
  dict: HeroDict;
}

export function HeroSection({ lang, dict }: HeroSectionProps) {
  return (
    <section className="relative overflow-hidden bg-primary-950 min-h-screen pt-14 flex flex-col justify-center">
      {/* Animated Topographical Map Background */}
      <AnimatedTopoBackground
        lineColor="#ffffffDD"
        levels={20}
        animationSpeed={0.01}
        edgeThreshold={0.005}
        opacity={0.1}
      />

      {/* Gradient Overlay for depth */}
      <div className="absolute inset-0 bg-linear-to-br from-primary-900/80 via-primary-950/60 to-slate-950/90 pointer-events-none" />

      {/* Noise texture for map feel */}
      <div
        className="absolute inset-0 opacity-[0.03] pointer-events-none"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 400 400' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' /%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)' /%3E%3C/svg%3E")`,
        }}
      />

      <div className="container relative flex flex-col gap-6 md:gap-12 mx-auto px-4 md:px-6">
        {/* Technical Decorator - Top */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="flex flex-wrap items-start justify-between border-b border-white/10 pb-2 md:pb-3 gap-2 md:gap-4"
        >
          <div className="flex flex-col gap-1">
            <div className="text-[0.5rem] md:text-[10px] font-mono tracking-wider text-slate-400 uppercase">
              PROJECT: RO-MEGAGIS-2026
            </div>
            <div className="text-[0.5rem] md:text-[10px] font-mono tracking-wider text-primary-400/70 uppercase">
              SURVEY TYPE: CADASTRAL • GIS • TOPO
            </div>
          </div>
          <div className="flex flex-col gap-1 text-right">
            <div className="text-[0.5rem] md:text-[10px] font-mono tracking-wider text-slate-400 uppercase flex items-center gap-2 justify-end">
              <MapPin className="h-3 w-3" />
              44°55'37.1"N 25°28'45.6"E
            </div>
            <div className="text-[0.5rem] md:text-[10px] font-mono tracking-wider text-primary-400/70 uppercase">
              TÂRGOVIȘTE, ROM • ELEV: 282M
            </div>
          </div>
        </motion.div>

        {/* Main Content - Flush Left Layout */}
        <div className="max-w-5xl text-flush-left">
          {/* Premium Technical Badge */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.1, ease: "easeOut" }}
            className="mb-4 md:mb-6 inline-flex items-center gap-2 md:gap-3 px-3 md:px-5 py-1.5 md:py-2.5 rounded-full border border-primary-500/30 bg-linear-to-r from-primary-950/50 via-primary-900/30 to-primary-950/50 backdrop-blur-sm"
          >
            <Layers className="h-3 w-3 md:h-4 md:w-4 text-primary-400" />
            <span className="text-xs md:text-sm font-medium text-primary-300 tracking-wide uppercase">
              {dict.subtitle}
            </span>
            <div className="h-1 w-1 rounded-full bg-primary-500 animate-pulse" />
          </motion.div>

          {/* Massive Heading - Swiss Typography */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            className="heading-massive text-white mb-6 md:mb-8 tracking-tight leading-[0.95] max-w-6xl"
          >
            {dict.title}
          </motion.h1>

          {/* Description - Active Whitespace */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
            className="text-base md:text-lg lg:text-xl text-slate-400 leading-relaxed max-w-2xl mb-5 md:mb-8"
          >
            {dict.description}
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
            className="flex flex-row flex-wrap items-start gap-2 md:gap-4"
          >
            <LocaleLink href="/contact" lang={lang}>
              <Button
                variant="accent"
                size="default"
                className="group text-xs md:text-lg md:p-6"
              >
                {dict.primaryCta}
                <ArrowRight className=" h-4 w-4 md:h-5 md:w-5 transition-transform group-hover:translate-x-1" />
              </Button>
            </LocaleLink>
            <LocaleLink href="/servicii" lang={lang}>
              <Button
                variant="outline"
                size="default"
                className="text-xs md:text-lg md:p-6 border-slate-700 bg-slate-900/50 text-slate-200 hover:bg-slate-800/70 hover:border-slate-600 hover:text-white"
              >
                {dict.secondaryCta}
                <ArrowRight className="h-4 w-4 md:h-5 md:w-5 transition-transform group-hover:translate-x-1" />
              </Button>
            </LocaleLink>
          </motion.div>
        </div>

        {/* Trust Indicators - Technical Precision */}
        <div className="container mx-auto mt-auto">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.6, ease: "easeOut" }}
            className="border-t border-white/10 pt-4 md:pt-8 pb-4 md:pb-6"
          >
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 lg:gap-8">
              <div className="flex flex-col">
                <span className="text-2xl md:text-4xl font-bold text-white tracking-tight font-mono">
                  500+
                </span>
                <span className="data-decorator mt-1">Proiecte Finalizate</span>
                <span className="data-decorator text-primary-400/50 mt-0.5">
                  2012-2026
                </span>
              </div>
              <div className="flex flex-col">
                <span className="text-2xl md:text-4xl font-bold text-white tracking-tight font-mono">
                  14+
                </span>
                <span className="data-decorator mt-1">Ani Experiență</span>
                <span className="data-decorator text-primary-400/50 mt-0.5">
                  EST. 2012
                </span>
              </div>
              <div className="flex flex-col">
                <span className="text-2xl md:text-4xl font-bold text-accent tracking-tight font-mono">
                  CLS I
                </span>
                <span className="data-decorator mt-1">Autorizare ANCPI</span>
                <span className="data-decorator text-primary-400/50 mt-0.5">
                  RO-B-J 0450/2014
                </span>
              </div>
              <div className="flex flex-col">
                <span className="text-2xl md:text-4xl font-bold text-primary-400 tracking-tight font-mono">
                  A+
                </span>
                <span className="data-decorator mt-1">Suport Premium</span>
                <span className="data-decorator text-primary-400/50 mt-0.5">
                  HIGH QUALITY
                </span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
