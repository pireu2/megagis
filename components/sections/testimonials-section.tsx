"use client";

import { Quote } from "lucide-react";
import { motion } from "framer-motion";
import * as React from "react";
import Autoplay from "embla-carousel-autoplay";
import type { TestimonialsDict } from "@/lib/i18n";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";

interface TestimonialsSectionProps {
  dict: TestimonialsDict;
}

export function TestimonialsSection({ dict }: TestimonialsSectionProps) {
  const plugin = React.useRef(
    Autoplay({ delay: 4000, stopOnInteraction: false }),
  );

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
          className="max-w-3xl mb-12 text-flush-left"
        >
          <div className="flex items-center justify-between mb-3 md:mb-4 flex-wrap gap-2">
            <div className="data-decorator">TESTIMONIALE / TESTIMONIALS</div>
            <div className="data-decorator text-primary-600">
              VERIFIED: {dict.items.length} REVIEWS • RATING: 5.0/5.0
            </div>
          </div>
          <h2 className="heading-dominant text-slate-900 mb-4 md:mb-6">
            {dict.title}
          </h2>
          <p className="text-base md:text-lg lg:text-xl text-slate-600 max-w-2xl">
            {dict.subtitle}
          </p>
        </motion.div>

        {/* Testimonials Carousel */}
        <div className="-mx-4 md:-mx-6">
          <div className="px-4 md:px-6 py-4">
            <Carousel
              opts={{
                align: "start",
                loop: true,
              }}
              plugins={[plugin.current]}
              className="w-full"
            >
              <CarouselContent className="-ml-4">
                {dict.items.map((testimonial, index) => (
                  <CarouselItem
                    key={index}
                    className="pl-4 md:basis-1/2 lg:basis-1/3"
                  >
                    <motion.div
                      initial={{ opacity: 0, y: 30 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{
                        duration: 0.6,
                        delay: index * 0.1,
                        ease: [0.34, 1.56, 0.64, 1],
                      }}
                      className="h-full pb-4"
                    >
                      <div className="h-full flex flex-col p-6 md:p-8 rounded-3xl border border-slate-200/50 bg-white hover:border-primary-300 transition-all duration-500 relative group hover:scale-[1.02] hover:shadow-2xl shadow-lg">
                        {/* Subtle hover overlay */}
                        <div className="absolute inset-0 bg-linear-to-br from-transparent via-white/0 to-white/0 group-hover:via-slate-50/50 group-hover:to-slate-50/30 transition-all duration-500 pointer-events-none rounded-3xl" />
                        {/* Technical ID */}
                        <div className="absolute top-4 md:top-6 right-4 md:right-6 flex flex-col items-end gap-1 z-10">
                          <div className="font-mono text-sm font-bold text-slate-400">
                            {String(index + 1).padStart(2, "0")}
                          </div>
                          <div className="font-mono text-[0.5rem] tracking-widest text-slate-400/60">
                            REV-2026
                          </div>
                        </div>

                        {/* Quote Icon */}
                        <div className="mb-4 md:mb-6 inline-flex h-14 w-14 md:h-20 md:w-20 items-center justify-center rounded-2xl bg-linear-to-br from-amber-500 to-orange-600 text-white shadow-lg group-hover:scale-110 group-hover:rotate-3 transition-all duration-500">
                          <Quote className="h-7 w-7 md:h-10 md:w-10" />
                        </div>

                        {/* Quote Text */}
                        <blockquote className="leading-relaxed mb-6 md:mb-8 text-slate-600 grow text-sm md:text-base">
                          &ldquo;{testimonial.quote}&rdquo;
                        </blockquote>

                        {/* Author Info */}
                        <div className="flex items-center gap-3 md:gap-4 border-t border-slate-200 pt-4 md:pt-6">
                          {/* Avatar with Gradient */}
                          <div className="h-10 w-10 md:h-12 md:w-12 rounded-full bg-linear-to-br from-primary-500 to-primary-700 flex items-center justify-center shadow-lg shrink-0">
                            <span className="text-white font-bold text-xs md:text-sm">
                              {testimonial.author
                                .split(" ")
                                .map((n) => n[0])
                                .join("")}
                            </span>
                          </div>

                          <div>
                            <p className="font-bold text-slate-900 tracking-tight text-sm md:text-base">
                              {testimonial.author}
                            </p>
                            <p className="text-xs md:text-sm text-slate-600 mt-1">
                              {testimonial.role}
                            </p>
                            <p className="text-[0.65rem] md:text-xs text-slate-500">
                              {testimonial.company}
                            </p>
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  </CarouselItem>
                ))}
              </CarouselContent>
            </Carousel>
          </div>
        </div>
      </div>
    </section>
  );
}
