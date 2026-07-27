"use client";

import { MapPin, Phone, Mail } from "lucide-react";
import Image from "next/image";
import { LocaleLink } from "@/components/locale-link";
import type { Locale, FooterDict } from "@/lib/i18n";

interface FooterProps {
  lang: Locale;
  dict: FooterDict;
}

export function Footer({ lang, dict }: FooterProps) {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-slate-200 bg-white relative overflow-hidden">
      {/* Square Grid Background */}
      <div className="absolute inset-0 bg-grid-slate-thin opacity-50 pointer-events-none" />

      <div className="container relative mx-auto px-4 md:px-6 py-12 md:py-16 lg:py-20">
        <div className="grid gap-8 md:gap-12 sm:grid-cols-2 lg:grid-cols-4 mb-8 md:mb-12">
          {/* Brand Column */}
          <div className="space-y-6">
            <LocaleLink
              href="/"
              lang={lang}
              className="flex items-center gap-3 group relative"
            >
              <Image
                src="/logo.png"
                alt="Megagis Logo"
                width={140}
                height={42}
                className="h-8 md:h-10 w-auto object-contain transition-transform group-hover:scale-[1.02]"
              />
            </LocaleLink>
            <p className="text-sm text-slate-600 leading-relaxed max-w-xs text-flush-left">
              {dict.description}
            </p>
          </div>

          {/* Services Column */}
          <div className="space-y-3 md:space-y-4">
            <h3 className="text-xs font-semibold text-slate-800 uppercase tracking-wider mb-6">
              {dict.services}
            </h3>
            <ul className="space-y-3">
              <li>
                <LocaleLink
                  href="/servicii#cadastru-sistematic"
                  lang={lang}
                  className="text-sm text-slate-600 hover:text-primary-600 transition-colors font-medium flex items-center gap-2 group"
                >
                  <span className="h-1 w-1 rounded-full bg-slate-400 group-hover:bg-primary-600 transition-colors" />
                  {dict.serviceLinks.cadastral}
                </LocaleLink>
              </li>
              <li>
                <LocaleLink
                  href="/servicii#topografie-geodezie"
                  lang={lang}
                  className="text-sm text-slate-600 hover:text-primary-600 transition-colors font-medium flex items-center gap-2 group"
                >
                  <span className="h-1 w-1 rounded-full bg-slate-400 group-hover:bg-primary-600 transition-colors" />
                  {dict.serviceLinks.topography}
                </LocaleLink>
              </li>
              <li>
                <LocaleLink
                  href="/servicii#gis-cartografie"
                  lang={lang}
                  className="text-sm text-slate-600 hover:text-primary-600 transition-colors font-medium flex items-center gap-2 group"
                >
                  <span className="h-1 w-1 rounded-full bg-slate-400 group-hover:bg-primary-600 transition-colors" />
                  {dict.serviceLinks.gis}
                </LocaleLink>
              </li>
              <li>
                <LocaleLink
                  href="/servicii#registrul-spatiilor-verzi"
                  lang={lang}
                  className="text-sm text-slate-600 hover:text-primary-600 transition-colors font-medium flex items-center gap-2 group"
                >
                  <span className="h-1 w-1 rounded-full bg-slate-400 group-hover:bg-primary-600 transition-colors" />
                  {dict.serviceLinks.rsv}
                </LocaleLink>
              </li>
              <li>
                <LocaleLink
                  href="/servicii#consultanta-tehnica"
                  lang={lang}
                  className="text-sm text-slate-600 hover:text-primary-600 transition-colors font-medium flex items-center gap-2 group"
                >
                  <span className="h-1 w-1 rounded-full bg-slate-400 group-hover:bg-primary-600 transition-colors" />
                  {dict.serviceLinks.consulting}
                </LocaleLink>
              </li>
            </ul>
          </div>

          {/* Company Column */}
          <div className="space-y-3 md:space-y-4">
            <h3 className="text-xs font-semibold text-slate-800 uppercase tracking-wider mb-6">
              {dict.company}
            </h3>
            <ul className="space-y-3">
              <li>
                <LocaleLink
                  href="/despre-noi"
                  lang={lang}
                  className="text-sm text-slate-600 hover:text-primary-600 transition-colors font-medium flex items-center gap-2 group"
                >
                  <span className="h-1 w-1 rounded-full bg-slate-400 group-hover:bg-primary-600 transition-colors" />
                  {dict.navigation.about}
                </LocaleLink>
              </li>
              <li>
                <LocaleLink
                  href="/proiecte"
                  lang={lang}
                  className="text-sm text-slate-600 hover:text-primary-600 transition-colors font-medium flex items-center gap-2 group"
                >
                  <span className="h-1 w-1 rounded-full bg-slate-400 group-hover:bg-primary-600 transition-colors" />
                  {dict.navigation.projects}
                </LocaleLink>
              </li>
              <li>
                <LocaleLink
                  href="/faq"
                  lang={lang}
                  className="text-sm text-slate-600 hover:text-primary-600 transition-colors font-medium flex items-center gap-2 group"
                >
                  <span className="h-1 w-1 rounded-full bg-slate-400 group-hover:bg-primary-600 transition-colors" />
                  {dict.navigation.faq}
                </LocaleLink>
              </li>
              <li>
                <LocaleLink
                  href="/privacy"
                  lang={lang}
                  className="text-sm text-slate-600 hover:text-primary-600 transition-colors font-medium flex items-center gap-2 group"
                >
                  <span className="h-1 w-1 rounded-full bg-slate-400 group-hover:bg-primary-600 transition-colors" />
                  {dict.navigation.privacy}
                </LocaleLink>
              </li>
            </ul>
          </div>

          {/* Contact Column - Glass Cards */}
          <div className="space-y-3 md:space-y-4">
            <h3 className="text-xs font-semibold text-slate-800 uppercase tracking-wider mb-6">
              {dict.contact}
            </h3>
            <div className="space-y-3">
              <div className="glass-card p-4 rounded-lg border border-slate-200 relative overflow-hidden">
                <div className="flex items-start gap-3">
                  <MapPin className="h-4 w-4 text-primary-600 mt-0.5 shrink-0" />
                  <span className="text-xs text-slate-600 leading-relaxed">
                    {dict.contactInfo.address}
                  </span>
                </div>
              </div>
              <a
                href={`tel:${dict.contactInfo.phone.replace(/\s/g, "")}`}
                className="glass-card block p-4 rounded-lg border border-slate-200 hover:border-primary-300 transition-colors group relative overflow-hidden"
              >
                <div className="flex items-center gap-3">
                  <Phone className="h-4 w-4 text-primary-600 shrink-0" />
                  <span className="text-xs font-medium text-slate-700 group-hover:text-primary-600 transition-colors">
                    {dict.contactInfo.phone}
                  </span>
                </div>
              </a>
              <a
                href={`mailto:${dict.contactInfo.email}`}
                className="glass-card block p-4 rounded-lg border border-slate-200 hover:border-primary-300 transition-colors group relative overflow-hidden"
              >
                <div className="flex items-center gap-3">
                  <Mail className="h-4 w-4 text-primary-600 shrink-0" />
                  <span className="text-xs font-medium text-slate-700 group-hover:text-primary-600 transition-colors">
                    {dict.contactInfo.email}
                  </span>
                </div>
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-6 md:pt-8 border-t border-slate-200">
          <div className="flex flex-col md:flex-row justify-between items-center gap-3 md:gap-4 text-center md:text-left">
            <p className="text-xs text-slate-500">
              {dict.copyright.replace("2025", currentYear.toString())}
            </p>
            <div className="flex gap-6">
              <LocaleLink
                href="/privacy"
                lang={lang}
                className="text-xs text-slate-500 hover:text-primary-600 transition-colors"
              >
                {dict.navigation.privacy}
              </LocaleLink>
              <LocaleLink
                href="/terms"
                lang={lang}
                className="text-xs text-slate-500 hover:text-primary-600 transition-colors"
              >
                {dict.navigation.terms}
              </LocaleLink>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
