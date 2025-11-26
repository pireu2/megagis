import { Crosshair, Shield, Zap, Award } from "lucide-react";
import type { ValuePropsDict } from "@/lib/i18n";

interface ValuePropsSectionProps {
  dict: ValuePropsDict;
}

const propIcons = {
  precision: Crosshair,
  compliance: Shield,
  efficiency: Zap,
  expertise: Award,
};

export function ValuePropsSection({ dict }: ValuePropsSectionProps) {
  const props = [
    { key: "precision" as const, ...dict.items.precision },
    { key: "compliance" as const, ...dict.items.compliance },
    { key: "efficiency" as const, ...dict.items.efficiency },
    { key: "expertise" as const, ...dict.items.expertise },
  ];

  return (
    <section className="py-20 md:py-28 bg-slate-50">
      <div className="container mx-auto px-4 md:px-6">
        {/* Section Header */}
        <div className="mx-auto max-w-2xl text-center mb-16">
          <h2 className="font-serif text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl md:text-5xl">
            {dict.title}
          </h2>
          <p className="mt-4 text-lg text-slate-600">{dict.subtitle}</p>
        </div>

        {/* Value Props Grid */}
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {props.map((prop, index) => {
            const Icon = propIcons[prop.key];
            return (
              <div
                key={prop.key}
                className="group relative text-center p-6 rounded-2xl bg-white shadow-sm hover:shadow-md transition-shadow"
              >
                {/* Number Badge */}
                <div className="absolute -top-3 -left-3 h-8 w-8 rounded-full bg-accent text-white text-sm font-bold flex items-center justify-center shadow-md">
                  {index + 1}
                </div>

                {/* Icon */}
                <div className="mx-auto mb-6 inline-flex h-16 w-16 items-center justify-center rounded-2xl bg-primary/10 text-primary group-hover:bg-primary group-hover:text-white transition-colors">
                  <Icon className="h-8 w-8" />
                </div>

                {/* Title */}
                <h3 className="mb-3 text-xl font-semibold text-slate-900">
                  {prop.title}
                </h3>

                {/* Description */}
                <p className="text-slate-600 leading-relaxed">
                  {prop.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
