import { ArrowRight, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { LocaleLink } from "@/components/locale-link";
import type { Locale, CtaSectionDict, FooterDict } from "@/lib/i18n";

interface CtaSectionProps {
  lang: Locale;
  dict: CtaSectionDict;
  contactInfo: FooterDict["contactInfo"];
}

export function CtaSection({ lang, dict, contactInfo }: CtaSectionProps) {
  return (
    <section className="py-20 md:py-28 bg-linear-to-br from-primary-900 via-primary-800 to-primary-950 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.4'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }}
        />
      </div>

      {/* Gradient Orb */}
      <div className="absolute -top-40 -right-40 h-96 w-96 rounded-full bg-accent/20 blur-3xl" />

      <div className="container relative mx-auto px-4 md:px-6">
        <div className="mx-auto max-w-3xl text-center">
          {/* Title */}
          <h2 className="font-serif text-3xl font-bold tracking-tight text-white sm:text-4xl md:text-5xl">
            {dict.title}
          </h2>

          {/* Description */}
          <p className="mt-6 text-lg text-slate-300 md:text-xl">
            {dict.description}
          </p>

          {/* CTA Buttons */}
          <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
            <LocaleLink href="/contact" lang={lang}>
              <Button variant="accent" size="xl" className="group">
                {dict.primaryButton}
                <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
              </Button>
            </LocaleLink>

            <a href={`tel:${contactInfo.phone.replace(/\s/g, "")}`}>
              <Button
                variant="outline"
                size="xl"
                className="border-white/30 bg-white/5 text-white hover:bg-white/10 hover:border-white/50"
              >
                <Phone className="mr-2 h-5 w-5" />
                {dict.secondaryButton}
              </Button>
            </a>
          </div>

          {/* Contact Info */}
          <p className="mt-8 text-slate-400">
            <a
              href={`tel:${contactInfo.phone.replace(/\s/g, "")}`}
              className="hover:text-accent transition-colors"
            >
              {contactInfo.phone}
            </a>
            {" • "}
            <a
              href={`mailto:${contactInfo.email}`}
              className="hover:text-accent transition-colors"
            >
              {contactInfo.email}
            </a>
          </p>
        </div>
      </div>
    </section>
  );
}
