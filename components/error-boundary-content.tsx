"use client";

import { usePathname } from "next/navigation";
import { motion } from "framer-motion";
import { RefreshCw, Home } from "lucide-react";
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
  error,
  reset,
  forceLang,
}: ErrorBoundaryContentProps) {
  const pathname = usePathname() || "";
  const isEn = forceLang ? forceLang === "en" : pathname.startsWith("/en");
  const lang: Locale = isEn ? "en" : "ro";
  const dict: ErrorPageDict = (isEn ? enDict : roDict).errorPage;

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
        <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5 mb-6">
          <Button
            onClick={() => reset()}
            size="lg"
            className="w-full sm:w-auto gap-2 font-semibold bg-primary-600 hover:bg-primary-700 text-white shadow-sm"
          >
            <RefreshCw className="w-4 h-4" />
            {dict.retryButton}
          </Button>

          <LocaleLink href="/" lang={lang} className="w-full sm:w-auto">
            <Button
              variant="outline"
              size="lg"
              className="w-full sm:w-auto gap-2 font-semibold border-slate-200 hover:bg-slate-100 text-slate-700"
            >
              <Home className="w-4 h-4" />
              {dict.backHome}
            </Button>
          </LocaleLink>
        </div>

        {/* Support Notice */}
        <p className="text-xs sm:text-sm text-slate-500 max-w-md">
          {dict.supportNotice}
        </p>

        {/* Technical Digest if present */}
        {error?.digest && (
          <div className="mt-6 inline-flex items-center gap-2 px-3 py-1.5 rounded-lg bg-slate-100 border border-slate-200 text-xs font-mono text-slate-600">
            <span>{dict.technicalDetailsTitle || "ID EROARE"}:</span>
            <span className="font-bold text-slate-800">{error.digest}</span>
          </div>
        )}
      </motion.div>
    </div>
  );
}
