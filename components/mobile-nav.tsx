"use client";

import { useState } from "react";
import Image from "next/image";
import { Menu, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetDescription,
} from "@/components/ui/sheet";
import { LocaleLink } from "@/components/locale-link";
import { LanguageSwitcher } from "@/components/language-switcher";
import type { Locale, NavigationDict, CommonDict } from "@/lib/i18n";

interface MobileNavProps {
  lang: Locale;
  dict: {
    navigation: NavigationDict;
    common: CommonDict;
  };
}

export function MobileNav({ lang, dict }: MobileNavProps) {
  const [open, setOpen] = useState(false);

  const navItems = [
    { href: "/", label: dict.navigation.home },
    { href: "/servicii", label: dict.navigation.services },
    { href: "/despre-noi", label: dict.navigation.about },
    { href: "/faq", label: dict.navigation.faq },
    { href: "/proiecte", label: dict.navigation.projects },
  ];

  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <Button
        variant="ghost"
        size="icon"
        className="lg:hidden text-slate-700 hover:text-primary-600 hover:bg-slate-50"
        onClick={() => setOpen(true)}
        aria-label={dict.common.openMenu}
      >
        <Menu className="h-6 w-6" />
      </Button>
      <SheetContent
        side="right"
        className="w-75 sm:w-87.5 bg-white shadow-2xl border-l border-slate-200 flex flex-col justify-between overflow-hidden"
      >
        {/* Subtle background grid */}
        <div className="absolute inset-0 bg-grid-slate-thin opacity-30 pointer-events-none" />

        <div className="relative z-10">
          <SheetHeader className="pb-5 border-b border-slate-100">
            <SheetTitle asChild>
              <LocaleLink
                href="/"
                lang={lang}
                onClick={() => setOpen(false)}
                className="flex items-center gap-2.5"
              >
                <Image
                  src="/logo.png"
                  alt="Megagis Logo"
                  width={120}
                  height={36}
                  className="h-7 w-auto object-contain"
                  priority
                />
              </LocaleLink>
            </SheetTitle>
            <SheetDescription className="text-left text-xs font-medium text-slate-500 mt-1">
              {dict.common.mobileNavSubtitle ??
                (lang === "ro"
                  ? "Topografie Digitală & Cadastru"
                  : "Digital Topography & Cadastral Services")}
            </SheetDescription>
          </SheetHeader>

          <nav className="mt-6 flex flex-col gap-1.5">
            {navItems.map((item) => (
              <LocaleLink
                key={item.href}
                href={item.href}
                lang={lang}
                onClick={() => setOpen(false)}
                className="text-base font-semibold text-slate-700 hover:text-primary-700 hover:bg-slate-50 transition-all py-3 px-4 rounded-xl flex items-center justify-between group"
              >
                <span>{item.label}</span>
                <ArrowRight className="h-4 w-4 text-slate-400 group-hover:text-primary-600 group-hover:translate-x-0.5 transition-all opacity-0 group-hover:opacity-100" />
              </LocaleLink>
            ))}

            {/* Accent Contact CTA Button */}
            <div className="pt-3">
              <LocaleLink
                href="/contact"
                lang={lang}
                onClick={() => setOpen(false)}
                className="block w-full"
              >
                <Button
                  variant="accent"
                  size="lg"
                  className="w-full justify-between group text-base font-semibold shadow-md"
                >
                  <span>{dict.navigation.contact}</span>
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Button>
              </LocaleLink>
            </div>
          </nav>
        </div>

        {/* Footer row with language switcher */}
        <div className="relative z-10 mt-auto pt-4 border-t border-slate-100 flex items-center justify-between">
          <span className="text-xs font-medium text-slate-500">
            {lang.toUpperCase()} / {lang === "ro" ? "EN" : "RO"}
          </span>
          <LanguageSwitcher
            currentLang={lang}
            label={dict.common.languageSwitch}
          />
        </div>
      </SheetContent>
    </Sheet>
  );
}
