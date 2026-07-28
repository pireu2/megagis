"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import type { HardwareEquipmentDict } from "@/lib/i18n";

interface HardwareEquipmentSectionProps {
  dict: HardwareEquipmentDict;
}

export function HardwareEquipmentSection({
  dict,
}: HardwareEquipmentSectionProps) {
  return (
    <section className="section-padding-swiss bg-slate-50 text-slate-900 relative overflow-hidden">
      {/* Square Grid Background */}
      <div className="absolute inset-0 bg-grid-slate-thin opacity-50 pointer-events-none" />

      <div className="container relative mx-auto px-4 md:px-6">
        {/* Section Header - Flush Left Swiss Style */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="max-w-3xl mb-12 md:mb-16 text-left"
        >
          <span className="text-xs font-semibold text-primary-600 tracking-wider uppercase mb-3 inline-block">
            {dict.badge ?? "Dotare Tehnică"}
          </span>
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-4 text-slate-900">
            {dict.title}
          </h2>
          <p className="text-lg md:text-xl text-slate-600 max-w-2xl">
            {dict.subtitle}
          </p>
        </motion.div>

        {/* Equipment Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          {dict.items.map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.15 }}
              className="flex flex-col rounded-2xl overflow-hidden bg-white border border-slate-200 group hover:border-primary-300 transition-all duration-300 shadow-lg hover:shadow-xl"
            >
              {/* Image Container */}
              <div className="relative aspect-4/3 w-full overflow-hidden bg-slate-100">
                <Image
                  src={item.imagePath}
                  alt={item.title}
                  fill
                  sizes="(max-width: 768px) 100vw, 33vw"
                  quality={85}
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-linear-to-t from-slate-900/40 via-transparent to-transparent opacity-80" />
              </div>

              {/* Text Specs Content */}
              <div className="p-6 flex flex-col flex-1">
                <h3 className="text-xl font-bold text-slate-900 mb-2 tracking-tight">
                  {item.title}
                </h3>
                <div className="text-xs font-mono text-slate-500 mb-3">
                  {item.specs}
                </div>
                <p className="text-sm text-slate-600 leading-relaxed mt-auto">
                  {item.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
