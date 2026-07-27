"use client";

import { usePathname } from "next/navigation";
import { motion } from "framer-motion";
import { AlertTriangle, RefreshCw, Home } from "lucide-react";
import { LocaleLink } from "@/components/locale-link";
import { Button } from "@/components/ui/button";
import roDict from "@/lib/i18n/dictionaries/ro.json";
import enDict from "@/lib/i18n/dictionaries/en.json";
import type { ErrorPageDict, Locale } from "@/lib/i18n";

interface ErrorBoundaryContentProps {
  error?: Error & { digest?: string };
  reset: () => void;
  forceLang?: Locale;
}

export function ErrorBoundaryContent({
  reset,
  forceLang,
}: ErrorBoundaryContentProps) {
  const pathname = usePathname() || "";
  const isEn = forceLang ? forceLang === "en" : pathname.startsWith("/en");
  const lang: Locale = isEn ? "en" : "ro";
  const dict: ErrorPageDict = (isEn ? enDict : roDict).errorPage;

  return (
    <div className="relative min-h-[75vh] w-full flex items-center justify-center py-16 px-4 bg-white text-slate-900 font-sans">
      {/* Background Precision Grid */}
      <div className="absolute inset-0 bg-grid-slate-thin opacity-50 pointer-events-none" />

      <motion.div
        initial={{ opacity: 0, y: 15 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        className="relative z-10 max-w-xl w-full text-center p-8 sm:p-12 rounded-3xl border border-slate-200/80 bg-white/80 backdrop-blur-md shadow-xl shadow-slate-950/5 flex flex-col items-center"
      >
        {/* Icon Badge */}
        <div className="h-14 w-14 rounded-2xl bg-amber-50 border border-amber-200 flex items-center justify-center text-amber-600 mb-6">
          <AlertTriangle className="w-7 h-7" />
        </div>

        {/* Badge */}
        <span className="text-xs font-mono font-bold tracking-widest uppercase text-amber-600 mb-2">
          {dict.badge}
        </span>

        {/* Title */}
        <h1 className="text-3xl sm:text-4xl font-bold tracking-tight text-slate-900 mb-3">
          {dict.title}
        </h1>

        {/* Description */}
        <p className="text-slate-600 text-sm sm:text-base leading-relaxed max-w-md mb-8">
          {dict.description}
        </p>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-3 w-full sm:w-auto">
          <Button
            onClick={() => reset()}
            size="lg"
            className="w-full sm:w-auto gap-2 font-semibold bg-primary-600 hover:bg-primary-700 text-white"
          >
            <RefreshCw className="w-4 h-4" />
            {dict.retryButton}
          </Button>

          <LocaleLink href="/" lang={lang} className="w-full sm:w-auto">
            <Button
              variant="outline"
              size="lg"
              className="w-full sm:w-auto gap-2 font-semibold border-slate-200 hover:bg-slate-50 text-slate-700"
            >
              <Home className="w-4 h-4" />
              {dict.backHome}
            </Button>
          </LocaleLink>
        </div>
      </motion.div>
    </div>
  );
}

