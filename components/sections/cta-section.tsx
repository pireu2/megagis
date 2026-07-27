"use client";

import { ArrowRight, Phone, Mail } from "lucide-react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { LocaleLink } from "@/components/locale-link";
import type { Locale, CtaSectionDict, FooterDict } from "@/lib/i18n";

interface CtaSectionProps {
  lang: Locale;
  dict: CtaSectionDict;
  contactInfo: FooterDict["contactInfo"];
}

export function CtaSection({ lang, dict, contactInfo }: CtaSectionProps) {
  return (
    <section className="section-padding-swiss bg-white relative overflow-hidden">
      {/* Square Grid Background */}
      <div className="absolute inset-0 bg-grid-slate-thin opacity-50 pointer-events-none" />

      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-linear-to-br from-primary-50/50 via-transparent to-white pointer-events-none" />

      <div className="container relative mx-auto px-4 md:px-6 pt-8">
        <div className="max-w-4xl text-flush-left">
          {/* Title - Flush Left */}
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.1, ease: "easeOut" }}
            className="heading-dominant text-slate-900 mb-8"
          >
            {dict.title}
          </motion.h2>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            className="text-lg md:text-xl text-slate-600 leading-relaxed max-w-2xl mb-12"
          >
            {dict.description}
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
            className="flex flex-row flex-wrap items-start gap-2 md:gap-4 mb-16"
          >
            <LocaleLink href="/contact" lang={lang}>
              <Button
                variant="accent"
                size="default"
                className="group text-xs md:text-lg md:p-6 shadow-md shadow-primary-600/20"
              >
                {dict.primaryButton}
                <ArrowRight className="ml-2 h-4 w-4 md:h-5 md:w-5 transition-transform group-hover:translate-x-1" />
              </Button>
            </LocaleLink>

            <a href={`tel:${contactInfo.phone.replace(/\s/g, "")}`}>
              <Button
                variant="outline"
                size="default"
                className="text-xs md:text-lg md:p-6 border-slate-200 bg-white text-slate-700 hover:bg-slate-50 hover:border-slate-300"
              >
                <Phone className="mr-2 h-4 w-4 md:h-5 md:w-5" />
                {dict.secondaryButton}
              </Button>
            </a>
          </motion.div>
        </div>
      </div>

      {/* Contact Info Cards */}
      <div className="container mx-auto px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.5, ease: "easeOut" }}
          className="mt-4 pt-8 pb-12"
        >
          <div className="flex flex-col md:flex-row gap-4 justify-start items-stretch">
            <a
              href={`tel:${contactInfo.phone.replace(/\s/g, "")}`}
              className="bg-white border border-slate-200 shadow-sm hover:shadow-md p-6 rounded-xl hover:border-primary-300 transition-all duration-300 group relative overflow-hidden max-w-md w-full"
            >
              <div className="text-xs font-semibold text-slate-500 uppercase tracking-wider mb-2">{dict.phoneCard?.title ?? "Telefon Direct"}</div>
              <div className="flex items-center gap-3 mb-2">
                <Phone className="h-5 w-5 text-primary-600" />
                <span className="text-lg font-semibold text-slate-900 group-hover:text-primary-700 transition-colors">
                  {contactInfo.phone}
                </span>
              </div>
              <div className="text-xs text-slate-500">
                {dict.phoneCard?.hours ?? "Luni - Vineri 09:00 - 18:00"}
              </div>
            </a>

            <a
              href={`mailto:${contactInfo.email}`}
              className="bg-white border border-slate-200 shadow-sm hover:shadow-md p-6 rounded-xl hover:border-primary-300 transition-all duration-300 group relative overflow-hidden max-w-md w-full"
            >
              <div className="text-xs font-semibold text-slate-500 uppercase tracking-wider mb-2">{dict.emailCard?.title ?? "Email Corespondență"}</div>
              <div className="flex items-center gap-3 mb-2">
                <Mail className="h-5 w-5 text-primary-600" />
                <span className="text-lg font-semibold text-slate-900 group-hover:text-primary-700 transition-colors break-all">
                  {contactInfo.email}
                </span>
              </div>
              <div className="text-xs text-slate-500">
                {dict.emailCard?.response ?? "Răspuns garantat în maximum 24 de ore"}
              </div>
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
