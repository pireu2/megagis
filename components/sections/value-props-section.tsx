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
    { key: "precision" as const, ...dict.items.precision, id: "01" },
    { key: "compliance" as const, ...dict.items.compliance, id: "02" },
    { key: "efficiency" as const, ...dict.items.efficiency, id: "03" },
    { key: "expertise" as const, ...dict.items.expertise, id: "04" },
  ];

  return (
    <section className="section-padding-swiss relative overflow-hidden">
      {/* Enhanced Background with Gradient */}
      <div className="absolute inset-0 bg-linear-to-br from-slate-100 via-slate-50 to-white" />
      <div className="absolute inset-0 bg-grid-slate-thin opacity-50" />
      {/* Radial gradient overlay for depth */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,var(--tw-gradient-stops))] from-primary-100/40 via-primary-50/20 to-transparent" />

      {/* Green gradient borders - top */}
      <div className="absolute top-0 left-0 right-0 h-0.5 bg-linear-to-r from-transparent via-primary-500 to-transparent opacity-50" />
      {/* Green gradient borders - bottom */}
      <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-linear-to-r from-transparent via-primary-500 to-transparent opacity-50" />

      <div className="container relative mx-auto px-4 md:px-6">
        {/* Section Header - Flush Left */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="max-w-3xl mb-16 text-flush-left"
        >
          <div className="flex items-center justify-between mb-4 flex-wrap gap-2">
            <div className="data-decorator">AVANTAJE / WHY US</div>
            <div className="data-decorator text-primary-600">
              ACCURACY: ±2CM • PRECISION: ISO 9001
            </div>
          </div>
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

                  {/* Technical ID - Top Right */}
                  <div className="absolute top-6 right-6 flex flex-col items-end gap-1 z-10">
                    <div className="font-mono text-sm font-bold text-slate-400">
                      {prop.id}
                    </div>
                    <div className="font-mono text-[0.5rem] tracking-widest text-slate-400/60">
                      ADV-{(index + 1).toString().padStart(2, "0")}
                    </div>
                  </div>

                  {/* Icon with Precision Movement */}
                  <div className="mb-6 inline-flex h-16 w-16 md:h-20 md:w-20 items-center justify-center rounded-2xl bg-linear-to-br from-primary-500 to-primary-700 text-white shadow-lg group-hover:scale-110 group-hover:rotate-3 transition-all duration-500">
                    <Icon className="h-8 w-8 md:h-10 md:w-10" />
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
