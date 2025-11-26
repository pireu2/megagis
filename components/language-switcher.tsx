"use client";

import { usePathname, useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import type { Locale } from "@/lib/i18n";
import { i18n } from "@/lib/i18n";

interface LanguageSwitcherProps {
  currentLang: Locale;
  label: string;
}

export function LanguageSwitcher({
  currentLang,
  label,
}: LanguageSwitcherProps) {
  const pathname = usePathname();
  const router = useRouter();

  const switchLanguage = () => {
    // Get the other locale
    const newLocale = currentLang === "ro" ? "en" : "ro";

    // Replace the current locale in the path
    const currentPath = pathname.replace(`/${currentLang}`, "");
    const newPath = `/${newLocale}${currentPath || ""}`;

    // Set cookie for preference
    document.cookie = `NEXT_LOCALE=${newLocale}; path=/; max-age=31536000`;

    router.push(newPath);
  };

  return (
    <Button
      variant="ghost"
      size="sm"
      onClick={switchLanguage}
      className="font-medium text-sm hover:bg-primary/10"
    >
      {label}
    </Button>
  );
}
