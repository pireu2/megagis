"use client";

import { Quote } from "lucide-react";
import { motion } from "framer-motion";
import type { TestimonialsDict } from "@/lib/i18n";

interface TestimonialsSectionProps {
  dict: TestimonialsDict;
}

export function TestimonialsSection({ dict }: TestimonialsSectionProps) {
  return (
    <section className="section-padding-swiss bg-white relative overflow-hidden">
      {/* Mathematical Grid Background */}
      <div className="absolute inset-0 bg-grid-slate-thin" />

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
            <div className="data-decorator">TESTIMONIALE / TESTIMONIALS</div>
            <div className="data-decorator text-primary-600">
              VERIFIED: {dict.items.length} REVIEWS • RATING: 5.0/5.0
            </div>
          </div>
          <h2 className="heading-dominant text-slate-900 mb-6">{dict.title}</h2>
          <p className="text-lg md:text-xl text-slate-600 max-w-2xl">
            {dict.subtitle}
          </p>
        </motion.div>

        {/* Testimonials Grid */}
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {dict.items.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.6,
                delay: index * 0.1,
                ease: [0.34, 1.56, 0.64, 1],
              }}
              className="group"
            >
              <div className="glass-card h-full p-8 rounded-2xl border border-slate-200/50 hover:border-primary-300 hover:shadow-xl hover:shadow-primary-100/50 transition-all duration-300 relative">
                {/* Technical ID */}
                <div className="absolute top-6 right-6 flex flex-col items-end gap-1">
                  <div className="data-decorator text-slate-400">
                    {String(index + 1).padStart(2, "0")}
                  </div>
                  <div className="data-decorator text-primary-600/60 text-[0.5rem]">
                    REV-2026
                  </div>
                </div>

                {/* Quote Icon */}
                <div className="mb-6">
                  <Quote className="h-10 w-10 text-accent/60" />
                </div>

                {/* Quote Text */}
                <blockquote className="text-slate-700 leading-relaxed mb-8 text-flush-left">
                  &ldquo;{testimonial.quote}&rdquo;
                </blockquote>

                {/* Author Info */}
                <div className="flex items-center gap-4 border-t border-slate-200 pt-6">
                  {/* Avatar with Gradient */}
                  <div className="h-12 w-12 rounded-full bg-linear-to-br from-primary-500 to-primary-700 flex items-center justify-center shadow-lg shadow-primary-500/30">
                    <span className="text-white font-bold text-sm">
                      {testimonial.author
                        .split(" ")
                        .map((n) => n[0])
                        .join("")}
                    </span>
                  </div>

                  <div className="text-flush-left">
                    <p className="font-bold text-slate-900 tracking-tight">
                      {testimonial.author}
                    </p>
                    <p className="microcopy-technical text-slate-500 mt-1">
                      {testimonial.role}
                    </p>
                    <p className="text-xs text-slate-500">
                      {testimonial.company}
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
