"use client";

import { usePathname, useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { i18n, type Locale } from "@/lib/i18n";
import { Globe } from "lucide-react";

interface LanguageSwitcherProps {
  currentLang: Locale;
  label?: string; // Kept for backwards compatibility if needed, but not used.
}

export function LanguageSwitcher({
  currentLang,
}: LanguageSwitcherProps) {
  const pathname = usePathname();
  const router = useRouter();

  const switchLanguage = (newLocale: Locale) => {
    if (newLocale === currentLang) return;

    // Replace the current locale in the path
    const currentPath = pathname.replace(`/${currentLang}`, "");
    const newPath = `/${newLocale}${currentPath || ""}`;

    // Set cookie for preference
    document.cookie = `NEXT_LOCALE=${newLocale}; path=/; max-age=31536000`;

    router.push(newPath);
  };

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button
          variant="ghost"
          size="sm"
          className="font-medium text-sm hover:bg-primary/10 uppercase gap-1.5"
        >
          <Globe className="h-4 w-4" />
          {currentLang}
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" className="min-w-[4rem]">
        {i18n.locales.map((locale) => (
          <DropdownMenuItem
            key={locale}
            onClick={() => switchLanguage(locale)}
            className={`uppercase cursor-pointer justify-center ${locale === currentLang ? "font-bold bg-muted" : ""}`}
          >
            {locale}
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
