import Link from "next/link";
import type { Locale } from "@/lib/i18n";

interface LocaleLinkProps
  extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
  href: string;
  lang: Locale;
  children: React.ReactNode;
  className?: string;
}

export function LocaleLink({
  href,
  lang,
  children,
  className,
  ...props
}: LocaleLinkProps) {
  // Ensure the href starts with the locale
  const localizedHref = href.startsWith("/") ? `/${lang}${href}` : href;

  return (
    <Link href={localizedHref} className={className} {...props}>
      {children}
    </Link>
  );
}
