"use client";

import { ArrowRight, Phone, Mail } from "lucide-react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { LocaleLink } from "@/components/locale-link";
import { AnimatedTopoBackground } from "@/components/animated-topo-background";
import type { Locale, CtaSectionDict, FooterDict } from "@/lib/i18n";

interface CtaSectionProps {
  lang: Locale;
  dict: CtaSectionDict;
  contactInfo: FooterDict["contactInfo"];
}

export function CtaSection({ lang, dict, contactInfo }: CtaSectionProps) {
  return (
    <section className="section-padding-swiss bg-slate-950 relative overflow-hidden">
      {/* Animated Topographical Background */}
      <AnimatedTopoBackground
        lineColor="#60a5faCC"
        levels={14}
        animationSpeed={0.01}
        edgeThreshold={0.008}
        opacity={0.18}
      />

      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-linear-to-br from-primary-950/30 via-transparent to-slate-950 pointer-events-none" />

      <div className="container relative mx-auto px-4 md:px-6">
        {/* Technical Decorator - Top */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="mb-16 flex flex-wrap items-start justify-between border-b border-white/10 pb-6 gap-4"
        >
          <div className="flex flex-col gap-1">
            <div className="data-decorator text-slate-500">CONTACT / CTA</div>
            <div className="data-decorator text-primary-400/60">
              RESPONSE TIME: &lt;24H
            </div>
          </div>
          <div className="flex flex-col gap-1 text-right">
            <div className="data-decorator text-slate-500">READY TO START</div>
            <div className="data-decorator text-primary-400/60">
              CONSULTATION: FREE
            </div>
          </div>
        </motion.div>

        <div className="max-w-4xl text-flush-left">
          {/* Title - Flush Left */}
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.1, ease: "easeOut" }}
            className="heading-dominant text-white mb-8"
          >
            {dict.title}
          </motion.h2>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            className="text-lg md:text-xl text-slate-400 leading-relaxed max-w-2xl mb-12"
          >
            {dict.description}
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
            className="flex flex-col sm:flex-row items-start gap-4 mb-16"
          >
            <LocaleLink href="/contact" lang={lang}>
              <Button variant="accent" size="xl" className="group">
                {dict.primaryButton}
                <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
              </Button>
            </LocaleLink>

            <a href={`tel:${contactInfo.phone.replace(/\s/g, "")}`}>
              <Button
                variant="outline"
                size="xl"
                className="border-slate-700 bg-slate-900/50 text-slate-200 hover:bg-slate-800/70 hover:border-slate-600"
              >
                <Phone className="mr-2 h-5 w-5" />
                {dict.secondaryButton}
              </Button>
            </a>
          </motion.div>

          {/* Contact Info Cards - Technical Precision */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.5, ease: "easeOut" }}
            className="grid md:grid-cols-2 gap-4 border-t border-white/5 pt-12"
          >
            <a
              href={`tel:${contactInfo.phone.replace(/\s/g, "")}`}
              className="glass-card-dark p-6 rounded-xl hover:border-accent transition-colors group relative overflow-hidden"
            >
              <div className="absolute top-3 right-3 data-decorator text-slate-600 text-[0.5rem]">
                TEL-01
              </div>
              <div className="data-decorator mb-2">TELEFON / DIRECT LINE</div>
              <div className="flex items-center gap-3 mb-2">
                <Phone className="h-5 w-5 text-accent" />
                <span className="text-lg font-mono text-white group-hover:text-accent transition-colors">
                  {contactInfo.phone}
                </span>
              </div>
              <div className="data-decorator text-primary-400/50 text-[0.6rem]">
                AVAILABLE: MON-FRI 09:00-18:00
              </div>
            </a>

            <a
              href={`mailto:${contactInfo.email}`}
              className="glass-card-dark p-6 rounded-xl hover:border-accent transition-colors group relative overflow-hidden"
            >
              <div className="absolute top-3 right-3 data-decorator text-slate-600 text-[0.5rem]">
                EMAIL-01
              </div>
              <div className="data-decorator mb-2">EMAIL / CORRESPONDENCE</div>
              <div className="flex items-center gap-3 mb-2">
                <Mail className="h-5 w-5 text-accent" />
                <span className="text-lg font-mono text-white group-hover:text-accent transition-colors break-all">
                  {contactInfo.email}
                </span>
              </div>
              <div className="data-decorator text-primary-400/50 text-[0.6rem]">
                RESPONSE: &lt;24H • PRIORITY SUPPORT
              </div>
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
