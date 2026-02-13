"use client";

import {
  MapPin,
  Phone,
  Mail,
  Facebook,
  Linkedin,
  Instagram,
  Layers,
} from "lucide-react";
import { LocaleLink } from "@/components/locale-link";
import type { Locale, FooterDict } from "@/lib/i18n";

interface FooterProps {
  lang: Locale;
  dict: FooterDict;
}

export function Footer({ lang, dict }: FooterProps) {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-slate-200 bg-slate-50 relative overflow-hidden">
      {/* Mathematical Grid Background */}
      <div className="absolute inset-0 bg-grid-slate-thin opacity-50" />

      <div className="container relative mx-auto px-4 md:px-6 py-12 md:py-16 lg:py-20">
        {/* Technical Decorator - Top */}
        <div className="mb-8 md:mb-12 flex flex-wrap items-center justify-between border-b border-slate-200 pb-4 md:pb-6 gap-4">
          <div className="flex flex-col gap-1">
            <div className="data-decorator text-slate-500">
              FOOTER / CONTACT
            </div>
            <div className="data-decorator text-primary-600/60 text-[0.55rem]">
              44°55'37.1"N 25°28'45.6"E
            </div>
          </div>
          <div className="flex flex-col gap-1 text-right">
            <div className="data-decorator text-slate-500">EST. 2012</div>
            <div className="data-decorator text-primary-600/60 text-[0.55rem]">
              TÂRGOVIȘTE, ROMÂNIA
            </div>
          </div>
        </div>

        <div className="grid gap-8 md:gap-12 sm:grid-cols-2 lg:grid-cols-4 mb-8 md:mb-12">
          {/* Brand Column - Technical Precision */}
          <div className="space-y-6">
            <LocaleLink
              href="/"
              lang={lang}
              className="flex items-center gap-3 group"
            >
              <div className="relative">
                <Layers className="h-6 w-6 text-primary-600" />
                <div className="absolute -top-1 -right-1 h-2 w-2 rounded-full bg-accent" />
              </div>
              <div className="flex flex-col">
                <span className="font-bold text-xl text-slate-900 tracking-tight">
                  Megagis
                </span>
                <span className="data-decorator text-[0.5rem] -mt-1">
                  DIGITAL TOPOGRAPHY
                </span>
              </div>
            </LocaleLink>
            <p className="text-sm text-slate-600 leading-relaxed max-w-xs text-flush-left">
              {dict.description}
            </p>
            {/* Social Links - Technical Grid */}
            <div className="flex gap-3 pt-2">
              <a
                href="#"
                className="h-10 w-10 rounded-lg glass-card border border-slate-200 flex items-center justify-center text-slate-600 hover:text-primary-600 hover:border-primary-300 transition-all"
                aria-label="Facebook"
              >
                <Facebook className="h-4 w-4" />
              </a>
              <a
                href="#"
                className="h-10 w-10 rounded-lg glass-card border border-slate-200 flex items-center justify-center text-slate-600 hover:text-primary-600 hover:border-primary-300 transition-all"
                aria-label="LinkedIn"
              >
                <Linkedin className="h-4 w-4" />
              </a>
              <a
                href="#"
                className="h-10 w-10 rounded-lg glass-card border border-slate-200 flex items-center justify-center text-slate-600 hover:text-primary-600 hover:border-primary-300 transition-all"
                aria-label="Instagram"
              >
                <Instagram className="h-4 w-4" />
              </a>
            </div>
          </div>

          {/* Services Column */}
          <div className="space-y-3 md:space-y-4">
            <h3 className="data-decorator text-slate-700 mb-6">
              {dict.services}
            </h3>
            <ul className="space-y-3">
              <li>
                <LocaleLink
                  href="/servicii/cadastru"
                  lang={lang}
                  className="text-sm text-slate-600 hover:text-primary-600 transition-colors font-medium flex items-center gap-2 group"
                >
                  <span className="h-1 w-1 rounded-full bg-slate-400 group-hover:bg-primary-600 transition-colors" />
                  {dict.serviceLinks.cadastral}
                </LocaleLink>
              </li>
              <li>
                <LocaleLink
                  href="/servicii/topografie"
                  lang={lang}
                  className="text-sm text-slate-600 hover:text-primary-600 transition-colors font-medium flex items-center gap-2 group"
                >
                  <span className="h-1 w-1 rounded-full bg-slate-400 group-hover:bg-primary-600 transition-colors" />
                  {dict.serviceLinks.topography}
                </LocaleLink>
              </li>
              <li>
                <LocaleLink
                  href="/servicii/gis"
                  lang={lang}
                  className="text-sm text-slate-600 hover:text-primary-600 transition-colors font-medium flex items-center gap-2 group"
                >
                  <span className="h-1 w-1 rounded-full bg-slate-400 group-hover:bg-primary-600 transition-colors" />
                  {dict.serviceLinks.gis}
                </LocaleLink>
              </li>
              <li>
                <LocaleLink
                  href="/solutii-guvernamentale"
                  lang={lang}
                  className="text-sm text-slate-600 hover:text-primary-600 transition-colors font-medium flex items-center gap-2 group"
                >
                  <span className="h-1 w-1 rounded-full bg-slate-400 group-hover:bg-primary-600 transition-colors" />
                  {dict.serviceLinks.governmentSolutions}
                </LocaleLink>
              </li>
            </ul>
          </div>

          {/* Company Column */}
          <div className="space-y-3 md:space-y-4">
            <h3 className="data-decorator text-slate-700 mb-6">
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
            <h3 className="data-decorator text-slate-700 mb-6">
              {dict.contact}
            </h3>
            <div className="space-y-3">
              <div className="glass-card p-4 rounded-lg border border-slate-200 relative overflow-hidden">
                <div className="absolute top-2 right-2 data-decorator text-slate-400 text-[0.5rem]">
                  HQ-01
                </div>
                <div className="flex items-start gap-3 mb-2">
                  <MapPin className="h-4 w-4 text-primary-600 mt-0.5 shrink-0" />
                  <span className="text-xs text-slate-600 leading-relaxed">
                    {dict.contactInfo.address}
                  </span>
                </div>
                <div className="data-decorator text-primary-600/60 text-[0.55rem] ml-7">
                  44°55'37.1"N 25°28'45.6"E
                </div>
              </div>
              <a
                href={`tel:${dict.contactInfo.phone.replace(/\s/g, "")}`}
                className="glass-card block p-4 rounded-lg border border-slate-200 hover:border-primary-300 transition-colors group relative overflow-hidden"
              >
                <div className="absolute top-2 right-2 data-decorator text-slate-400 text-[0.5rem]">
                  TEL-01
                </div>
                <div className="flex items-center gap-3">
                  <Phone className="h-4 w-4 text-primary-600 shrink-0" />
                  <span className="text-xs font-mono text-slate-700 group-hover:text-primary-600 transition-colors">
                    {dict.contactInfo.phone}
                  </span>
                </div>
              </a>
              <a
                href={`mailto:${dict.contactInfo.email}`}
                className="glass-card block p-4 rounded-lg border border-slate-200 hover:border-primary-300 transition-colors group relative overflow-hidden"
              >
                <div className="absolute top-2 right-2 data-decorator text-slate-400 text-[0.5rem]">
                  EMAIL-01
                </div>
                <div className="flex items-center gap-3">
                  <Mail className="h-4 w-4 text-primary-600 shrink-0" />
                  <span className="text-xs font-mono text-slate-700 group-hover:text-primary-600 transition-colors">
                    {dict.contactInfo.email}
                  </span>
                </div>
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar - Technical Precision */}
        <div className="pt-6 md:pt-8 border-t border-slate-200">
          <div className="flex flex-col md:flex-row justify-between items-center gap-3 md:gap-4 text-center md:text-left">
            <p className="data-decorator text-slate-500">
              {dict.copyright.replace("2025", currentYear.toString())}
            </p>
            <div className="flex gap-6">
              <LocaleLink
                href="/privacy"
                lang={lang}
                className="data-decorator text-slate-500 hover:text-primary-600 transition-colors"
              >
                {dict.navigation.privacy}
              </LocaleLink>
              <LocaleLink
                href="/terms"
                lang={lang}
                className="data-decorator text-slate-500 hover:text-primary-600 transition-colors"
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
