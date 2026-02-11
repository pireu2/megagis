"use client";

import { ArrowRight, MapPin, Layers } from "lucide-react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { LocaleLink } from "@/components/locale-link";
import type { Locale, HeroDict } from "@/lib/i18n";

interface HeroSectionProps {
  lang: Locale;
  dict: HeroDict;
}

export function HeroSection({ lang, dict }: HeroSectionProps) {
  return (
    <section className="relative overflow-hidden bg-primary-950 section-padding-swiss">
      {/* Animated Topographical Map Background - Layer 1 (Background) */}
      <div className="absolute inset-0 opacity-15">
        <svg
          className="absolute inset-0 w-full h-full"
          xmlns="http://www.w3.org/2000/svg"
          preserveAspectRatio="xMidYMid slice"
        >
          <defs>
            <pattern
              id="topo-layer-1"
              x="0"
              y="0"
              width="400"
              height="300"
              patternUnits="userSpaceOnUse"
            >
              {/* Slow-moving background contours */}
              <path
                d="M0,50 Q100,35 200,50 T400,50"
                fill="none"
                stroke="currentColor"
                strokeWidth="0.8"
                strokeDasharray="4 4"
                className="text-primary-400/40 animate-topo-flow"
                style={{ animationDuration: "25s" }}
              />
              <path
                d="M0,120 Q100,105 200,120 T400,120"
                fill="none"
                stroke="currentColor"
                strokeWidth="0.6"
                strokeDasharray="6 6"
                className="text-primary-400/30 animate-topo-flow"
                style={{ animationDuration: "30s", animationDelay: "-5s" }}
              />
              <path
                d="M0,190 Q100,175 200,190 T400,190"
                fill="none"
                stroke="currentColor"
                strokeWidth="0.8"
                strokeDasharray="4 4"
                className="text-primary-400/40 animate-topo-flow"
                style={{ animationDuration: "35s", animationDelay: "-10s" }}
              />
              <path
                d="M0,260 Q100,245 200,260 T400,260"
                fill="none"
                stroke="currentColor"
                strokeWidth="0.6"
                strokeDasharray="6 6"
                className="text-primary-400/30 animate-topo-flow"
                style={{ animationDuration: "28s", animationDelay: "-8s" }}
              />
            </pattern>
          </defs>
          <rect
            width="200%"
            height="100%"
            fill="url(#topo-layer-1)"
            className="animate-topo-drift-slow"
          />
        </svg>
      </div>

      {/* Animated Topographical Map - Layer 2 (Mid-ground) */}
      <div className="absolute inset-0 opacity-20">
        <svg
          className="absolute inset-0 w-full h-full"
          xmlns="http://www.w3.org/2000/svg"
          preserveAspectRatio="xMidYMid slice"
        >
          <defs>
            <pattern
              id="topo-layer-2"
              x="0"
              y="0"
              width="350"
              height="250"
              patternUnits="userSpaceOnUse"
            >
              {/* Medium-speed contours with varying thickness */}
              <path
                d="M0,60 Q87.5,48 175,60 T350,60"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.2"
                strokeDasharray="8 4"
                className="text-primary-300 animate-topo-flow"
                style={{ animationDuration: "18s" }}
              />
              <path
                d="M0,130 Q87.5,118 175,130 T350,130"
                fill="none"
                stroke="currentColor"
                strokeWidth="1"
                className="text-primary-400"
              />
              <path
                d="M0,200 Q87.5,188 175,200 T350,200"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.2"
                strokeDasharray="8 4"
                className="text-primary-300 animate-topo-flow"
                style={{ animationDuration: "20s", animationDelay: "-7s" }}
              />
              {/* Elevation points with pulse */}
              <circle
                cx="87.5"
                cy="130"
                r="1.8"
                className="fill-primary-400"
                style={{
                  animation: "topo-elevation-pulse 4s ease-in-out infinite",
                }}
              />
              <circle
                cx="262.5"
                cy="130"
                r="1.8"
                className="fill-primary-400"
                style={{
                  animation: "topo-elevation-pulse 4s ease-in-out infinite -2s",
                }}
              />
            </pattern>
          </defs>
          <rect
            width="200%"
            height="100%"
            fill="url(#topo-layer-2)"
            className="animate-topo-drift"
            style={{ animationDuration: "50s" }}
          />
        </svg>
      </div>

      {/* Animated Topographical Map - Layer 3 (Foreground) */}
      <div className="absolute inset-0 opacity-25">
        <svg
          className="absolute inset-0 w-full h-full"
          xmlns="http://www.w3.org/2000/svg"
          preserveAspectRatio="xMidYMid slice"
        >
          <defs>
            <pattern
              id="topo-layer-3"
              x="0"
              y="0"
              width="300"
              height="200"
              patternUnits="userSpaceOnUse"
            >
              {/* Fast-moving foreground contours */}
              <path
                d="M0,45 Q75,38 150,45 T300,45"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeDasharray="10 5"
                className="text-accent/60 animate-topo-flow"
                style={{ animationDuration: "15s" }}
              />
              <path
                d="M0,100 Q75,93 150,100 T300,100"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                className="text-accent/40"
              />
              <path
                d="M0,155 Q75,148 150,155 T300,155"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeDasharray="10 5"
                className="text-accent/60 animate-topo-flow"
                style={{ animationDuration: "12s", animationDelay: "-4s" }}
              />
              {/* Accent elevation markers */}
              <circle
                cx="75"
                cy="100"
                r="2.5"
                className="fill-accent"
                style={{
                  animation: "topo-elevation-pulse 3s ease-in-out infinite",
                }}
              />
              <circle
                cx="225"
                cy="100"
                r="2.5"
                className="fill-accent"
                style={{
                  animation:
                    "topo-elevation-pulse 3s ease-in-out infinite -1.5s",
                }}
              />
            </pattern>
          </defs>
          <rect
            width="200%"
            height="100%"
            fill="url(#topo-layer-3)"
            className="animate-topo-drift"
            style={{ animationDuration: "40s" }}
          />
        </svg>
      </div>

      {/* Gradient Overlay for depth */}
      <div className="absolute inset-0 bg-linear-to-br from-primary-900/80 via-primary-950/60 to-slate-950/90" />

      {/* Noise texture for map feel */}
      <div
        className="absolute inset-0 opacity-[0.03]"
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
