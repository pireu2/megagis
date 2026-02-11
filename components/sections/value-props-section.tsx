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
    <section className="section-padding-swiss bg-slate-50 relative overflow-hidden">
      {/* Mathematical Grid Background */}
      <div className="absolute inset-0 bg-grid-slate-thin opacity-50" />

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
                  ease: [0.34, 1.56, 0.64, 1],
                }}
                className="group relative"
              >
                {/* Glass Card */}
                <div className="glass-card h-full p-8 rounded-2xl border border-slate-200/50 hover:border-primary-400 hover:shadow-xl hover:shadow-primary-100/50 transition-all duration-300">
                  {/* Technical ID - Top Right */}
                  <div className="absolute top-6 right-6 flex flex-col items-end gap-1">
                    <div className="data-decorator text-slate-400">
                      {prop.id}
                    </div>
                    <div className="data-decorator text-primary-600/60 text-[0.5rem]">
                      ADV-{(index + 1).toString().padStart(2, "0")}
                    </div>
                  </div>

                  {/* Icon with Precision Movement */}
                  <motion.div
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    transition={{ type: "spring", stiffness: 300 }}
                    className="mb-8 inline-flex h-16 w-16 items-center justify-center rounded-xl bg-linear-to-br from-primary-500 to-primary-700 text-white shadow-lg shadow-primary-500/30"
                  >
                    <Icon className="h-8 w-8" />
                  </motion.div>

                  {/* Title - Left Aligned */}
                  <h3 className="text-2xl font-bold text-slate-900 mb-4 tracking-tight text-flush-left">
                    {prop.title}
                  </h3>

                  {/* Description */}
                  <p className="text-slate-600 leading-relaxed text-flush-left">
                    {prop.description}
                  </p>

                  {/* Layer Effect Border */}
                  <div
                    className="absolute inset-0 rounded-2xl border-2 border-primary-300 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
                    style={{ transform: "translate(4px, 4px)" }}
                  />
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
