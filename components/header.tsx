"use client";

import { MapPin, Layers } from "lucide-react";
import { motion } from "framer-motion";
import { LocaleLink } from "@/components/locale-link";
import { LanguageSwitcher } from "@/components/language-switcher";
import { MobileNav } from "@/components/mobile-nav";
import { Button } from "@/components/ui/button";
import type { Locale, NavigationDict, CommonDict } from "@/lib/i18n";

interface HeaderProps {
  lang: Locale;
  dict: {
    navigation: NavigationDict;
    common: CommonDict;
  };
}

export function Header({ lang, dict }: HeaderProps) {
  const navItems = [
    { href: "/", label: dict.navigation.home },
    { href: "/servicii", label: dict.navigation.services },
    { href: "/despre-noi", label: dict.navigation.about },
    {
      href: "/solutii-guvernamentale",
      label: dict.navigation.governmentSolutions,
    },
    { href: "/proiecte", label: dict.navigation.projects },
  ];

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className="sticky top-0 z-50 w-full border-b border-slate-200/50 glass-card backdrop-blur-md"
    >
      <div className="container mx-auto flex h-16 items-center justify-between px-4 md:px-6">
        {/* Logo with Technical Precision */}
        <LocaleLink
          href="/"
          lang={lang}
          className="flex items-center gap-3 group"
        >
          <div className="relative">
            <Layers className="h-6 w-6 text-primary-600 group-hover:text-primary-700 transition-colors" />
            <div className="absolute -top-1 -right-1 h-2 w-2 rounded-full bg-accent animate-pulse" />
          </div>
          <div className="flex flex-col">
            <span className="font-bold text-lg text-slate-900 tracking-tight">
              Megagis
            </span>
            <span className="data-decorator text-[0.5rem] -mt-1">
              DIGITAL TOPOGRAPHY
            </span>
          </div>
        </LocaleLink>

        {/* Desktop Navigation - Swiss Precision */}
        <nav className="hidden md:flex items-center gap-1">
          {navItems.map((item, index) => (
            <LocaleLink
              key={item.href}
              href={item.href}
              lang={lang}
              className="px-3 py-2 text-sm font-medium text-slate-700 transition-colors hover:text-primary-600 hover:bg-slate-50 rounded-lg relative group"
            >
              <span className="data-decorator absolute -top-2 left-2 opacity-0 group-hover:opacity-100 transition-opacity">
                {String(index + 1).padStart(2, "0")}
              </span>
              {item.label}
            </LocaleLink>
          ))}
        </nav>

        {/* Right side actions */}
        <div className="flex items-center gap-3">
          <div className="hidden md:flex items-center gap-3">
            <LanguageSwitcher
              currentLang={lang}
              label={dict.common.languageSwitch}
            />
            <LocaleLink href="/contact" lang={lang}>
              <Button
                variant="accent"
                size="sm"
                className="font-mono text-xs tracking-wider"
              >
                {dict.navigation.contact}
              </Button>
            </LocaleLink>
          </div>

          {/* Mobile Menu */}
          <MobileNav lang={lang} dict={dict} />
        </div>
      </div>
    </motion.header>
  );
}
