"use client";

import Image from "next/image";
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
    { href: "/faq", label: dict.navigation.faq },
    { href: "/proiecte", label: dict.navigation.projects },
  ];

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className="fixed top-0 left-0 right-0 z-50 w-full border-b border-slate-200/30 bg-white shadow-lg shadow-slate-950/5"
    >
      <div className="container mx-auto flex h-14 items-center justify-between px-4 md:px-6">
        {/* Logo */}
        <LocaleLink
          href="/"
          lang={lang}
          className="flex items-center gap-2.5 group relative"
        >
          <Image
            src="/logo.png"
            alt="Megagis Logo"
            width={120}
            height={36}
            className="h-7 md:h-8 w-auto object-contain transition-transform group-hover:scale-[1.02]"
            priority
          />
        </LocaleLink>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center gap-1">
          {navItems.map((item) => (
            <LocaleLink
              key={item.href}
              href={item.href}
              lang={lang}
              className="px-3 py-1.5 text-sm font-medium text-slate-700 transition-colors hover:text-primary-700 hover:bg-slate-50 rounded-md"
            >
              {item.label}
            </LocaleLink>
          ))}
        </nav>

        {/* Right side actions */}
        <div className="flex items-center gap-2.5">
          <div className="hidden lg:flex items-center gap-2.5">
            <LanguageSwitcher
              currentLang={lang}
              label={dict.common.languageSwitch}
            />
            <LocaleLink href="/contact" lang={lang}>
              <Button
                variant="accent"
                size="sm"
                className="text-sm font-medium h-8 px-4"
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
