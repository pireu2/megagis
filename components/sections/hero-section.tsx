import { ArrowRight, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { LocaleLink } from "@/components/locale-link";
import type { Locale, HeroDict } from "@/lib/i18n";

interface HeroSectionProps {
  lang: Locale;
  dict: HeroDict;
}

export function HeroSection({ lang, dict }: HeroSectionProps) {
  return (
    <section className="relative overflow-hidden bg-linear-to-br from-slate-900 via-slate-800 to-primary/90 py-20 md:py-32 lg:py-40">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.4'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }}
        />
      </div>

      {/* Gradient Orbs */}
      <div className="absolute -top-40 -right-40 h-80 w-80 rounded-full bg-accent/20 blur-3xl" />
      <div className="absolute -bottom-40 -left-40 h-80 w-80 rounded-full bg-primary/30 blur-3xl" />

      <div className="container relative mx-auto px-4 md:px-6">
        <div className="mx-auto max-w-4xl text-center">
          {/* Subtitle Badge */}
          <div className="mb-6 inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-2 text-sm font-medium text-white/90 backdrop-blur-sm">
            <span className="h-2 w-2 rounded-full bg-accent animate-pulse" />
            {dict.subtitle}
          </div>

          {/* Main Title */}
          <h1 className="font-serif text-4xl font-bold tracking-tight text-white sm:text-5xl md:text-6xl lg:text-7xl">
            {dict.title}
          </h1>

          {/* Description */}
          <p className="mt-6 text-lg text-slate-300 md:text-xl lg:text-2xl leading-relaxed max-w-3xl mx-auto">
            {dict.description}
          </p>

          {/* CTA Buttons */}
          <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
            <LocaleLink href="/contact" lang={lang}>
              <Button variant="accent" size="xl" className="group">
                {dict.primaryCta}
                <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
              </Button>
            </LocaleLink>
            <LocaleLink href="/servicii" lang={lang}>
              <Button
                variant="outline"
                size="xl"
                className="border-white/30 bg-white/5 text-white hover:bg-white/10 hover:border-white/50"
              >
                {dict.secondaryCta}
                <ChevronRight className="ml-1 h-5 w-5" />
              </Button>
            </LocaleLink>
          </div>

          {/* Trust Indicators */}
          <div className="mt-16 flex flex-wrap items-center justify-center gap-8 text-sm text-slate-400">
            <div className="flex items-center gap-2">
              <span className="font-semibold text-white">500+</span>
              <span>Proiecte Finalizate</span>
            </div>
            <div className="h-4 w-px bg-slate-600 hidden sm:block" />
            <div className="flex items-center gap-2">
              <span className="font-semibold text-white">15+</span>
              <span>Ani Experiență</span>
            </div>
            <div className="h-4 w-px bg-slate-600 hidden sm:block" />
            <div className="flex items-center gap-2">
              <span className="font-semibold text-white">100%</span>
              <span>Conformitate ANCPI</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
