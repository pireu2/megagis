"use client";

import { useState } from "react";
import { Menu } from "lucide-react";
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
        className="md:hidden"
        onClick={() => setOpen(true)}
        aria-label={dict.common.openMenu}
      >
        <Menu className="h-6 w-6" />
      </Button>
      <SheetContent side="right" className="w-[300px] sm:w-[350px]">
        <SheetHeader>
          <SheetTitle className="text-left font-serif text-xl text-primary">
            Megagis
          </SheetTitle>
          <SheetDescription className="sr-only">
            Navigation menu
          </SheetDescription>
        </SheetHeader>
        <nav className="mt-8 flex flex-col gap-4">
          {navItems.map((item) => (
            <LocaleLink
              key={item.href}
              href={item.href}
              lang={lang}
              onClick={() => setOpen(false)}
              className="text-lg font-medium text-foreground/80 transition-colors hover:text-primary"
            >
              {item.label}
            </LocaleLink>
          ))}
          <div className="mt-4 pt-4 border-t">
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
