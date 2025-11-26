import { Quote } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import type { TestimonialsDict } from "@/lib/i18n";

interface TestimonialsSectionProps {
  dict: TestimonialsDict;
}

export function TestimonialsSection({ dict }: TestimonialsSectionProps) {
  return (
    <section className="py-20 md:py-28 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        {/* Section Header */}
        <div className="mx-auto max-w-2xl text-center mb-16">
          <h2 className="font-serif text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl md:text-5xl">
            {dict.title}
          </h2>
          <p className="mt-4 text-lg text-slate-600">{dict.subtitle}</p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {dict.items.map((testimonial, index) => (
            <Card
              key={index}
              className="relative bg-slate-50 border-none shadow-sm hover:shadow-md transition-shadow"
            >
              <CardContent className="p-6 md:p-8">
                {/* Quote Icon */}
                <div className="mb-4">
                  <Quote className="h-8 w-8 text-accent/60" />
                </div>

                {/* Quote Text */}
                <blockquote className="text-slate-700 leading-relaxed mb-6">
                  &ldquo;{testimonial.quote}&rdquo;
                </blockquote>

                {/* Author Info */}
                <div className="flex items-center gap-4">
                  {/* Avatar Placeholder */}
                  <div className="h-12 w-12 rounded-full bg-primary/20 flex items-center justify-center">
                    <span className="text-primary font-semibold text-lg">
                      {testimonial.author
                        .split(" ")
                        .map((n) => n[0])
                        .join("")}
                    </span>
                  </div>

                  <div>
                    <p className="font-semibold text-slate-900">
                      {testimonial.author}
                    </p>
                    <p className="text-sm text-slate-500">
                      {testimonial.role}, {testimonial.company}
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
