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
      className="fixed top-0 left-0 right-0 z-50 w-full border-b border-slate-200/30 bg-white/70 backdrop-blur-2xl shadow-lg shadow-slate-950/5"
    >
      <div className="container mx-auto flex h-14 items-center justify-between px-4 md:px-6">
        {/* Logo with Technical Precision */}
        <LocaleLink
          href="/"
          lang={lang}
          className="flex items-center gap-2.5 group"
        >
          <div className="relative">
            <Layers className="h-5 w-5 text-primary-700 group-hover:text-primary-800 transition-colors" />
            <div className="absolute -top-0.5 -right-0.5 h-1.5 w-1.5 rounded-full bg-accent animate-pulse" />
          </div>
          <div className="flex flex-col">
            <span className="font-bold text-base text-slate-900 tracking-tight">
              MEGAGIS
            </span>
            <span className="font-mono text-[0.45rem] tracking-widest text-primary-700/70 -mt-0.5">
              GIS • CADASTRU • TOPO
            </span>
          </div>
        </LocaleLink>

        {/* Desktop Navigation - Swiss Precision */}
        <nav className="hidden md:flex items-center gap-0.5">
          {navItems.map((item, index) => (
            <LocaleLink
              key={item.href}
              href={item.href}
              lang={lang}
              className="px-3 py-1.5 text-[0.8rem] font-medium text-slate-700 transition-colors hover:text-primary-700 hover:bg-slate-50 rounded relative group"
            >
              <span className="font-mono text-[0.6rem] absolute -top-1 left-2 text-primary-700/60 group-hover:text-primary-800 transition-colors">
                {String(index + 1).padStart(2, "0")}
              </span>
              {item.label}
            </LocaleLink>
          ))}
        </nav>

        {/* Right side actions */}
        <div className="flex items-center gap-2.5">
          <div className="hidden md:flex items-center gap-2.5">
            <LanguageSwitcher
              currentLang={lang}
              label={dict.common.languageSwitch}
            />
            <LocaleLink href="/contact" lang={lang}>
              <Button
                variant="accent"
                size="sm"
                className="font-mono text-sm tracking-wider h-8 px-4"
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
