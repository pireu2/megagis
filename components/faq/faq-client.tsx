"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  ChevronDown,
  Building2,
  Trees,
  Compass,
  Map,
  CreditCard,
  Phone,
  Mail,
  ArrowRight,
  HelpCircle,
  CheckCircle2,
} from "lucide-react";
import { LocaleLink } from "@/components/locale-link";
import { SectionSeparator } from "@/components/sections/section-separator";
import type { Locale, FaqPageDict, CommonDict, FaqItem } from "@/lib/i18n";

interface FaqClientProps {
  lang: Locale;
  dict: FaqPageDict;
  commonDict: CommonDict;
}

const CATEGORY_ICONS: Record<
  string,
  React.ComponentType<{ className?: string }>
> = {
  Building2,
  Trees,
  Compass,
  Map,
  CreditCard,
};

export function FaqClient({ lang, dict }: FaqClientProps) {
  const [openItemIds, setOpenItemIds] = useState<Record<string, boolean>>({});

  const toggleItem = (id: string) => {
    setOpenItemIds((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };

  const filteredCategories = dict.categories;

  return (
    <div className="flex min-h-screen flex-col bg-white text-slate-900 selection:bg-primary-200 selection:text-primary-900">
      <main className="flex-1 pt-28 md:pt-36 pb-16 md:pb-24 relative overflow-hidden">
        {/* Faint Swiss Mathematical Grid Background */}
        <div className="absolute inset-0 bg-grid-slate-thin opacity-50 pointer-events-none" />

        <div className="container relative mx-auto px-4 md:px-6 max-w-5xl">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-10 md:mb-14 text-left"
          >
            <span className="text-xs font-semibold text-primary-600 tracking-wider uppercase mb-3 inline-block">
              {dict.badge}
            </span>
            <h1 className="heading-dominant text-slate-900 mb-6">
              {dict.title}
            </h1>
            <p className="text-lg md:text-xl text-slate-600 max-w-2xl">
              {dict.subtitle}
            </p>
          </motion.div>

          {/* Q&A Accordion Sections */}
          <div className="space-y-10 mb-16">
            {filteredCategories.map((category, catIdx) => {
              const IconComp = CATEGORY_ICONS[category.iconName] || HelpCircle;

              return (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: catIdx * 0.05 }}
                  key={category.id}
                  className="space-y-3"
                >
                  {/* Category Header */}
                  <div className="flex items-center gap-3 mb-6 pb-4 border-b-2 border-slate-100">
                    <div className="h-10 w-10 rounded-2xl bg-linear-to-br from-primary-500 to-primary-700 text-white flex items-center justify-center shrink-0 shadow-sm">
                      <IconComp className="h-5 w-5" />
                    </div>
                    <h2 className="text-xl font-bold text-slate-900">
                      {category.name}
                    </h2>
                  </div>

                  {/* Category Items */}
                  {category.items.map((item: FaqItem) => {
                    const isOpen = Boolean(openItemIds[item.id]);

                    return (
                      <div
                        key={item.id}
                        className="border border-slate-200 rounded-2xl overflow-hidden bg-white hover:border-primary-200 transition-colors"
                        data-testid={`faq-item-${item.id}`}
                      >
                        {/* Accordion Trigger */}
                        <button
                          onClick={() => toggleItem(item.id)}
                          className="w-full text-left p-3 md:p-4 flex items-center justify-between gap-4 group cursor-pointer focus:outline-none"
                          aria-expanded={isOpen}
                        >
                          <h3 className="text-base md:text-lg font-semibold text-slate-900 group-hover:text-primary-700 transition-colors">
                            {item.question}
                          </h3>

                          <div
                            className={`h-8 w-8 rounded-full bg-slate-100 flex items-center justify-center shrink-0 transition-transform duration-300 mt-0.5 ${
                              isOpen ? "rotate-180" : ""
                            }`}
                          >
                            <ChevronDown className="h-4 w-4 text-slate-500" />
                          </div>
                        </button>

                        {/* Accordion Content */}
                        <AnimatePresence initial={false}>
                          {isOpen && (
                            <motion.div
                              initial={{ height: 0, opacity: 0 }}
                              animate={{ height: "auto", opacity: 1 }}
                              exit={{ height: 0, opacity: 0 }}
                              transition={{ duration: 0.3, ease: "easeInOut" }}
                            >
                              <div className="px-5 pb-6 pt-0 border-t border-slate-100 text-slate-600 leading-relaxed">
                                {/* Takeaway callout */}
                                {item.takeaway && (
                                  <div className="bg-primary-50 border-l-4 border-primary-600 p-4 rounded-xl mb-4 mt-4">
                                    <div className="flex items-start gap-3">
                                      <CheckCircle2 className="h-5 w-5 text-primary-600 shrink-0 mt-0.5" />
                                      <p className="text-sm font-semibold text-primary-950 leading-relaxed">
                                        {item.takeaway}
                                      </p>
                                    </div>
                                  </div>
                                )}
                                <p className="mt-4">{item.answer}</p>
                              </div>
                            </motion.div>
                          )}
                        </AnimatePresence>
                      </div>
                    );
                  })}
                </motion.div>
              );
            })}
          </div>

          <SectionSeparator />

          {/* Contact CTA */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="p-8 md:p-12 rounded-3xl border border-slate-200/50 bg-white shadow-lg relative overflow-hidden"
          >
            <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              <div className="lg:col-span-8 space-y-4">
                <span className="text-xs font-semibold text-primary-600 tracking-wider uppercase mb-3 inline-block">
                  {dict.contactCta.badge}
                </span>

                <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mb-4">
                  {dict.contactCta.title}
                </h2>

                <p className="text-slate-600 mb-6">
                  {dict.contactCta.description}
                </p>

                <div className="pt-2 flex flex-wrap items-center gap-6 text-sm text-slate-700">
                  <a
                    href={`tel:${dict.contactCta.phoneValue.replace(/\s+/g, "")}`}
                    className="flex items-center gap-2 hover:text-primary-700 transition-colors"
                  >
                    <Phone className="h-4 w-4 text-primary-600" />
                    <span>
                      {dict.contactCta.phoneLabel}:{" "}
                      <strong className="font-mono">
                        {dict.contactCta.phoneValue}
                      </strong>
                    </span>
                  </a>

                  <a
                    href={`mailto:${dict.contactCta.emailValue}`}
                    className="flex items-center gap-2 hover:text-primary-700 transition-colors"
                  >
                    <Mail className="h-4 w-4 text-primary-600" />
                    <span>
                      {dict.contactCta.emailLabel}:{" "}
                      <strong className="font-mono">
                        {dict.contactCta.emailValue}
                      </strong>
                    </span>
                  </a>
                </div>
              </div>

              <div className="lg:col-span-4 flex lg:justify-end">
                <LocaleLink href="/contact" lang={lang}>
                  <button
                    className="bg-primary-600 text-white hover:bg-primary-700 rounded-xl px-6 py-3 font-semibold transition-colors w-full sm:w-auto flex items-center justify-center gap-2"
                    data-testid="faq-contact-cta-btn"
                  >
                    <span>{dict.contactCta.buttonText}</span>
                    <ArrowRight className="h-5 w-5" />
                  </button>
                </LocaleLink>
              </div>
            </div>
          </motion.div>
        </div>
      </main>
    </div>
  );
}
