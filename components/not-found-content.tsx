"use client";

import { usePathname } from "next/navigation";
import { motion } from "framer-motion";
import { Home, Mail } from "lucide-react";
import { LocaleLink } from "@/components/locale-link";
import { Button } from "@/components/ui/button";
import roDict from "@/lib/i18n/dictionaries/ro.json";
import enDict from "@/lib/i18n/dictionaries/en.json";
import type { NotFoundDict, Locale } from "@/lib/i18n";

interface NotFoundContentProps {
  forceLang?: Locale;
}

export function NotFoundContent({ forceLang }: NotFoundContentProps) {
  const pathname = usePathname() || "";
  const isEn = forceLang ? forceLang === "en" : pathname.startsWith("/en");
  const lang: Locale = isEn ? "en" : "ro";
  const dict: NotFoundDict = (isEn ? enDict : roDict).notFound;

  return (
    <div className="relative min-h-[calc(100vh-3.5rem)] w-full flex items-center justify-center py-16 px-4 sm:px-6 lg:px-8 bg-slate-50 text-slate-900 overflow-hidden">
      {/* Background Precision Grid */}
      <div className="absolute inset-0 bg-grid-slate-thin opacity-50 pointer-events-none" />

      {/* Subtle Gradient Glow */}
      <div className="absolute inset-0 bg-linear-to-b from-white via-transparent to-white pointer-events-none" />

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="relative z-10 max-w-3xl w-full mx-auto p-8 sm:p-12 lg:p-16 rounded-3xl border border-slate-200/80 bg-white/80 backdrop-blur-md shadow-xl shadow-slate-950/5 text-left"
      >
      

        {/* Massive Swiss Title */}
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-slate-900 leading-[1.05] mb-6">
          {dict.title}
        </h1>

        {/* Simple Website Description */}
        <p className="text-base sm:text-lg text-slate-600 leading-relaxed max-w-xl mb-8">
          {dict.description}
        </p>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5">
          <LocaleLink href="/" lang={lang} className="w-full sm:w-auto">
            <Button
              size="lg"
              className="w-full sm:w-auto gap-2 font-semibold bg-primary-600 hover:bg-primary-700 text-white shadow-sm"
            >
              <Home className="w-4 h-4" />
              {dict.backHome}
            </Button>
          </LocaleLink>

          <LocaleLink href="/contact" lang={lang} className="w-full sm:w-auto">
            <Button
              variant="outline"
              size="lg"
              className="w-full sm:w-auto gap-2 font-semibold border-slate-200 hover:bg-slate-100 text-slate-700"
            >
              <Mail className="w-4 h-4" />
              {dict.contactSupport}
            </Button>
          </LocaleLink>
        </div>
      </motion.div>
    </div>
  );
}
