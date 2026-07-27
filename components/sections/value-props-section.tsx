"use client";

import { Crosshair, Shield, Zap, Award } from "lucide-react";
import { motion } from "framer-motion";
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
    <section className="section-padding-swiss relative overflow-hidden">
      {/* Enhanced Background with Gradient */}
      <div className="absolute inset-0 bg-linear-to-br from-slate-100 via-slate-50 to-white" />
      {/* Square Grid Background */}
      <div className="absolute inset-0 bg-grid-slate-thin opacity-50 pointer-events-none" />
      {/* Radial gradient overlay for depth */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,var(--tw-gradient-stops))] from-primary-100/40 via-primary-50/20 to-transparent" />

      <div className="container relative mx-auto px-4 md:px-6">
        {/* Section Header - Flush Left */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="max-w-3xl mb-16 text-flush-left"
        >
          <span className="text-xs font-semibold text-primary-600 tracking-wider uppercase mb-3 inline-block">
            {dict.badge ?? "Avantaje Principale"}
          </span>
          <h2 className="heading-dominant text-slate-900 mb-6">{dict.title}</h2>
          <p className="text-lg md:text-xl text-slate-600 max-w-2xl">
            {dict.subtitle}
          </p>
        </motion.div>

        {/* Value Props Grid - Asymmetrical Precision */}
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {props.map((prop, index) => {
            const Icon = propIcons[prop.key];
            return (
              <motion.div
                key={prop.key}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.6,
                  delay: index * 0.1,
                  ease: [0.22, 1, 0.36, 1],
                }}
                className="group relative"
              >
                {/* Card */}
                <div className="h-full p-8 rounded-3xl border border-slate-200/50 bg-white hover:border-primary-300 transition-all duration-500 relative overflow-hidden group-hover:scale-[1.02] group-hover:shadow-2xl shadow-lg">
                  {/* Subtle hover overlay */}
                  <div className="absolute inset-0 bg-linear-to-br from-transparent via-white/0 to-white/0 group-hover:via-slate-50/50 group-hover:to-slate-50/30 transition-all duration-500 pointer-events-none" />

                  {/* Icon with Precision Movement */}
                  <div className="mb-4 md:mb-6 inline-flex h-12 w-12 md:h-16 md:w-16 lg:h-20 lg:w-20 items-center justify-center rounded-2xl bg-linear-to-br from-primary-500 to-primary-700 text-white shadow-lg group-hover:scale-110 group-hover:rotate-3 transition-all duration-500">
                    <Icon className="h-6 w-6 md:h-8 md:w-8 lg:h-10 lg:w-10" />
                  </div>

                  {/* Title - Left Aligned */}
                  <h3 className="text-2xl md:text-3xl font-bold mb-4 tracking-tight text-slate-900 group-hover:text-primary-700 transition-colors duration-300">
                    {prop.title}
                  </h3>

                  {/* Description */}
                  <p className="leading-relaxed text-slate-600">
                    {prop.description}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
