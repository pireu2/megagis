import { MapPin } from "lucide-react";
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
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-backdrop-filter:bg-background/60">
      <div className="container mx-auto flex h-16 items-center justify-between px-4 md:px-6">
        {/* Logo */}
        <LocaleLink
          href="/"
          lang={lang}
          className="flex items-center gap-2 text-xl font-bold"
        >
          <MapPin className="h-6 w-6 text-primary" />
          <span className="font-serif text-primary">Megagis</span>
        </LocaleLink>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-6">
          {navItems.map((item) => (
            <LocaleLink
              key={item.href}
              href={item.href}
              lang={lang}
              className="text-sm font-medium text-foreground/80 transition-colors hover:text-primary"
            >
              {item.label}
            </LocaleLink>
          ))}
        </nav>

        {/* Right side actions */}
        <div className="flex items-center gap-2">
          <div className="hidden md:flex items-center gap-2">
            <LanguageSwitcher
              currentLang={lang}
              label={dict.common.languageSwitch}
            />
            <LocaleLink href="/contact" lang={lang}>
              <Button variant="accent" size="sm">
                {dict.navigation.contact}
              </Button>
            </LocaleLink>
          </div>

          {/* Mobile Menu */}
          <MobileNav lang={lang} dict={dict} />
        </div>
      </div>
    </header>
  );
}
