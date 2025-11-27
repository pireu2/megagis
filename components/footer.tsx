import {
  MapPin,
  Phone,
  Mail,
  Facebook,
  Linkedin,
  Instagram,
} from "lucide-react";
import { LocaleLink } from "@/components/locale-link";
import type { Locale, FooterDict } from "@/lib/i18n";

interface FooterProps {
  lang: Locale;
  dict: FooterDict;
}

export function Footer({ lang, dict }: FooterProps) {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t bg-sage-950 text-sage-200">
      <div className="container mx-auto px-4 md:px-6 py-12 md:py-16">
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {/* Brand Column */}
          <div className="space-y-4">
            <LocaleLink
              href="/"
              lang={lang}
              className="flex items-center gap-2 text-xl font-bold"
            >
              <MapPin className="h-6 w-6 text-primary-400" />
              <span className="font-serif text-white">Megagis</span>
            </LocaleLink>
            <p className="text-sm text-sage-400 leading-relaxed max-w-xs">
              {dict.description}
            </p>
            {/* Social Links */}
            <div className="flex gap-4 pt-2">
              <a
                href="#"
                className="text-sage-400 hover:text-primary-400 transition-colors"
                aria-label="Facebook"
              >
                <Facebook className="h-5 w-5" />
              </a>
              <a
                href="#"
                className="text-sage-400 hover:text-primary-400 transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin className="h-5 w-5" />
              </a>
              <a
                href="#"
                className="text-sage-400 hover:text-primary-400 transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Services Column */}
          <div className="space-y-4">
            <h3 className="text-sm font-semibold text-white uppercase tracking-wider">
              {dict.services}
            </h3>
            <ul className="space-y-3">
              <li>
                <LocaleLink
                  href="/servicii/cadastru"
                  lang={lang}
                  className="text-sm text-sage-400 hover:text-primary-400 transition-colors"
                >
                  {dict.serviceLinks.cadastral}
                </LocaleLink>
              </li>
              <li>
                <LocaleLink
                  href="/servicii/topografie"
                  lang={lang}
                  className="text-sm text-sage-400 hover:text-primary-400 transition-colors"
                >
                  {dict.serviceLinks.topography}
                </LocaleLink>
              </li>
              <li>
                <LocaleLink
                  href="/servicii/gis"
                  lang={lang}
                  className="text-sm text-sage-400 hover:text-primary-400 transition-colors"
                >
                  {dict.serviceLinks.gis}
                </LocaleLink>
              </li>
              <li>
                <LocaleLink
                  href="/solutii-guvernamentale"
                  lang={lang}
                  className="text-sm text-sage-400 hover:text-primary-400 transition-colors"
                >
                  {dict.serviceLinks.governmentSolutions}
                </LocaleLink>
              </li>
            </ul>
          </div>

          {/* Company Column */}
          <div className="space-y-4">
            <h3 className="text-sm font-semibold text-white uppercase tracking-wider">
              {dict.company}
            </h3>
            <ul className="space-y-3">
              <li>
                <LocaleLink
                  href="/despre-noi"
                  lang={lang}
                  className="text-sm text-sage-400 hover:text-primary-400 transition-colors"
                >
                  {dict.navigation.about}
                </LocaleLink>
              </li>
              <li>
                <LocaleLink
                  href="/proiecte"
                  lang={lang}
                  className="text-sm text-sage-400 hover:text-primary-400 transition-colors"
                >
                  {dict.navigation.projects}
                </LocaleLink>
              </li>
              <li>
                <LocaleLink
                  href="/faq"
                  lang={lang}
                  className="text-sm text-sage-400 hover:text-primary-400 transition-colors"
                >
                  {dict.navigation.faq}
                </LocaleLink>
              </li>
              <li>
                <LocaleLink
                  href="/privacy"
                  lang={lang}
                  className="text-sm text-sage-400 hover:text-primary-400 transition-colors"
                >
                  {dict.navigation.privacy}
                </LocaleLink>
              </li>
            </ul>
          </div>

          {/* Contact Column */}
          <div className="space-y-4">
            <h3 className="text-sm font-semibold text-white uppercase tracking-wider">
              {dict.contact}
            </h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <MapPin className="h-4 w-4 text-primary-400 mt-0.5 shrink-0" />
                <span className="text-sm text-sage-400">
                  {dict.contactInfo.address}
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="h-4 w-4 text-primary-400 shrink-0" />
                <a
                  href={`tel:${dict.contactInfo.phone.replace(/\s/g, "")}`}
                  className="text-sm text-sage-400 hover:text-primary-400 transition-colors"
                >
                  {dict.contactInfo.phone}
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="h-4 w-4 text-primary-400 shrink-0" />
                <a
                  href={`mailto:${dict.contactInfo.email}`}
                  className="text-sm text-sage-400 hover:text-primary-400 transition-colors"
                >
                  {dict.contactInfo.email}
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-sage-800">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm text-sage-500">
              {dict.copyright.replace("2025", currentYear.toString())}
            </p>
            <div className="flex gap-6">
              <LocaleLink
                href="/privacy"
                lang={lang}
                className="text-sm text-sage-500 hover:text-primary-400 transition-colors"
              >
                {dict.navigation.privacy}
              </LocaleLink>
              <LocaleLink
                href="/terms"
                lang={lang}
                className="text-sm text-sage-500 hover:text-primary-400 transition-colors"
              >
                {dict.navigation.terms}
              </LocaleLink>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
