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
    <section className="relative overflow-hidden bg-primary-950 section-padding-swiss">
      {/* Animated Topographical Map Background */}
      <AnimatedTopoBackground
        lineColor="#ffffffDD"
        levels={8}
        animationSpeed={0.008}
        edgeThreshold={0.004}
        opacity={0.4}
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

      <div className="container relative mx-auto px-4 md:px-6">
        {/* Technical Decorator - Top */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="mb-12 flex flex-wrap items-start justify-between border-b border-white/10 pb-6 gap-4"
        >
          <div className="flex flex-col gap-1">
            <div className="data-decorator text-slate-500">
              PROJECT: RO-MEGAGIS-2026
            </div>
            <div className="data-decorator text-primary-400/60">
              SURVEY TYPE: CADASTRAL • GIS • TOPO
            </div>
          </div>
          <div className="flex flex-col gap-1 text-right">
            <div className="data-decorator text-slate-500 flex items-center gap-2 justify-end">
              <MapPin className="h-3 w-3" />
              44°55'37.1"N 25°28'45.6"E
            </div>
            <div className="data-decorator text-primary-400/60">
              TÂRGOVIȘTE, ROM • ELEV: 282M
            </div>
          </div>
        </motion.div>

        {/* Main Content - Flush Left Layout */}
        <div className="max-w-5xl text-flush-left">
          {/* Technical Badge */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.1, ease: "easeOut" }}
            className="mb-8 inline-flex items-center gap-3 glass-card-dark px-4 py-2.5 rounded-full"
          >
            <Layers className="h-4 w-4 text-accent" />
            <span className="microcopy-technical text-slate-300 tracking-wider">
              {dict.subtitle}
            </span>
          </motion.div>

          {/* Massive Heading - Swiss Typography */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            className="heading-massive text-white mb-8 tracking-tight leading-[0.95] max-w-4xl"
          >
            {dict.title}
          </motion.h1>

          {/* Description - Active Whitespace */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
            className="text-lg md:text-xl text-slate-400 leading-relaxed max-w-2xl mb-12"
          >
            {dict.description}
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
            className="flex flex-col sm:flex-row items-start gap-4"
          >
            <LocaleLink href="/contact" lang={lang}>
              <Button variant="accent" size="xl" className="group">
                {dict.primaryCta}
                <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
              </Button>
            </LocaleLink>
            <LocaleLink href="/servicii" lang={lang}>
              <Button
                variant="outline"
                size="xl"
                className="border-slate-700 bg-slate-900/50 text-slate-200 hover:bg-slate-800/70 hover:border-slate-600"
              >
                {dict.secondaryCta}
                <ArrowRight className="ml-2 h-5 w-5 opacity-50" />
              </Button>
            </LocaleLink>
          </motion.div>

          {/* Trust Indicators - Technical Precision */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.6, ease: "easeOut" }}
            className="mt-24 grid grid-cols-2 md:grid-cols-4 gap-8 border-t border-white/5 pt-8"
          >
            <div className="flex flex-col">
              <span className="text-3xl md:text-4xl font-bold text-white tracking-tight font-mono">
                500+
              </span>
              <span className="data-decorator mt-1">Proiecte Finalizate</span>
              <span className="data-decorator text-primary-400/50 mt-0.5">
                2012-2026
              </span>
            </div>
            <div className="flex flex-col">
              <span className="text-3xl md:text-4xl font-bold text-white tracking-tight font-mono">
                14+
              </span>
              <span className="data-decorator mt-1">Ani Experiență</span>
              <span className="data-decorator text-primary-400/50 mt-0.5">
                EST. 2012
              </span>
            </div>
            <div className="flex flex-col">
              <span className="text-3xl md:text-4xl font-bold text-accent tracking-tight font-mono">
                CLS I
              </span>
              <span className="data-decorator mt-1">Autorizare ANCPI</span>
              <span className="data-decorator text-primary-400/50 mt-0.5">
                RO-B-J 0450/2014
              </span>
            </div>
            <div className="flex flex-col">
              <span className="text-3xl md:text-4xl font-bold text-primary-400 tracking-tight font-mono">
                24/7
              </span>
              <span className="data-decorator mt-1">Support Tehnic</span>
              <span className="data-decorator text-primary-400/50 mt-0.5">
                365 DAYS/YR
              </span>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
