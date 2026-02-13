"use client";

import { useState } from "react";
import { Menu, Layers } from "lucide-react";
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
    {
      href: "/solutii-guvernamentale",
      label: dict.navigation.governmentSolutions,
    },
    { href: "/proiecte", label: dict.navigation.projects },
    { href: "/contact", label: dict.navigation.contact },
  ];

  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <Button
        variant="ghost"
        size="icon"
        className="md:hidden text-slate-700 hover:text-primary-600 hover:bg-slate-50"
        onClick={() => setOpen(true)}
        aria-label={dict.common.openMenu}
      >
        <Menu className="h-5 w-5" />
      </Button>
      <SheetContent
        side="right"
        className="w-75 sm:w-87.5 bg-white/80 backdrop-blur-2xl border-l border-slate-200/40"
      >
        <SheetHeader>
          <SheetTitle className="text-left font-bold text-lg text-slate-900 tracking-tight flex items-center gap-2">
            <Layers className="h-5 w-5 text-primary-600" />
            MEGAGIS
          </SheetTitle>
          <SheetDescription className="text-left font-mono text-[0.6rem] tracking-wider text-primary-600/60">
            GIS • CADASTRU • TOPOGRAFIE
          </SheetDescription>
        </SheetHeader>
        <nav className="mt-8 flex flex-col gap-2">
          {navItems.map((item, index) => (
            <LocaleLink
              key={item.href}
              href={item.href}
              lang={lang}
              onClick={() => setOpen(false)}
              className="text-sm font-medium text-slate-700 hover:text-primary-600 transition-colors py-3 px-4 hover:bg-slate-50 rounded-lg relative group"
            >
              <span className="font-mono text-[0.65rem] absolute top-1 right-2 text-primary-500/40 group-hover:text-primary-600 transition-colors">
                {String(index + 1).padStart(2, "0")}
              </span>
              {item.label}
            </LocaleLink>
          ))}
          <div className="mt-4 pt-4 border-t border-slate-200">
            <LanguageSwitcher
              currentLang={lang}
              label={dict.common.languageSwitch}
            />
          </div>
        </nav>
      </SheetContent>
    </Sheet>
  );
}
