"use client";

import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import {
  Layers,
  Search,
  CheckCircle2,
  Play,
  Database,
} from "lucide-react";
import type { Locale, SoftwareShowcaseDict } from "@/lib/i18n";

interface SoftwareShowcaseSectionProps {
  lang: Locale;
  dict: SoftwareShowcaseDict;
}

export function SoftwareShowcaseSection({
  dict,
}: SoftwareShowcaseSectionProps) {
  const [activeTab, setActiveTab] = useState<"cadastru" | "rsv" | "gas">(
    "cadastru"
  );
  const [isPlayingVideo, setIsPlayingVideo] = useState(false);

  const tabData = {
    cadastru: {
      ...dict.tabs.cadastru,
      imagePath: "/images/software/gis-sporadic-ancpi.png",
      videoPath: "/videos/cadastru-sistematic-demo.mp4",
      icon: Search,
    },
    rsv: {
      ...dict.tabs.rsv,
      imagePath: "/images/software/gis-lunca-toolbox.png",
      videoPath: "/videos/rsv-demo.mp4",
      icon: Layers,
    },
    gas: {
      ...dict.tabs.gas,
      imagePath: "/images/software/gaz-anre-network.png",
      videoPath: null,
      icon: Database,
    },
  };

  const current = tabData[activeTab];

  return (
    <section className="section-padding-swiss bg-white text-slate-900 relative overflow-hidden">
      {/* Square Grid Background */}
      <div className="absolute inset-0 bg-grid-slate-thin opacity-50 pointer-events-none" />

      <div className="container relative mx-auto px-4 md:px-6">
        {/* Header - Flush Left Swiss Style */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="max-w-3xl mb-12 md:mb-16 text-flush-left"
        >
          <span className="text-xs font-semibold text-primary-600 tracking-wider uppercase mb-3 inline-block">
            {dict.badge ?? "Tehnologie & GIS"}
          </span>
          <h2 className="heading-dominant text-slate-900 mb-6">
            {dict.title}
          </h2>
          <p className="text-lg md:text-xl text-slate-600 max-w-2xl">
            {dict.subtitle}
          </p>
        </motion.div>

        {/* Tab Selection Navigation */}
        <div className="flex flex-wrap gap-2 md:gap-3 mb-8 md:mb-12">
          {(["cadastru", "rsv", "gas"] as const).map((tabKey) => {
            const tab = tabData[tabKey];
            const Icon = tab.icon;
            const isActive = activeTab === tabKey;
            return (
              <button
                key={tabKey}
                onClick={() => {
                  setActiveTab(tabKey);
                  setIsPlayingVideo(false);
                }}
                className={`flex items-center gap-2 px-4 py-2.5 rounded-lg font-medium text-sm transition-all duration-200 ${
                  isActive
                    ? "bg-primary-600 text-white shadow-lg shadow-primary-600/20"
                    : "bg-slate-50 text-slate-600 hover:text-slate-900 hover:bg-slate-100 border border-slate-200"
                }`}
              >
                <Icon className="h-4 w-4" />
                <span>{tab.label}</span>
              </button>
            );
          })}
        </div>

        {/* Active Content Showcase Grid */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            transition={{ duration: 0.4 }}
            className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center"
          >
            {/* Left Column: App Description & Features */}
            <div className="lg:col-span-5 flex flex-col justify-center">
              <h3 className="text-2xl md:text-3xl font-bold text-slate-900 mb-4 tracking-tight leading-snug">
                {current.title}
              </h3>

              <p className="text-slate-700 text-sm md:text-base leading-relaxed mb-6">
                {current.description}
              </p>

              {/* Feature Bullet Points */}
              <ul className="space-y-3 mb-8">
                {current.features.map((feature, idx) => (
                  <li
                    key={idx}
                    className="flex items-start gap-3 text-sm text-slate-700"
                  >
                    <CheckCircle2 className="h-4 w-4 text-primary-600 shrink-0 mt-0.5" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Right Column: Media Preview Card (Image / Video) */}
            <div className="lg:col-span-7">
              <div className="relative rounded-2xl overflow-hidden border border-slate-200 bg-white shadow-xl group">
                {/* Browser-like window titlebar */}
                <div className="flex items-center justify-between px-4 py-3 bg-slate-100 border-b border-slate-200">
                  <div className="flex items-center gap-2">
                    <div className="h-3 w-3 rounded-full bg-red-400" />
                    <div className="h-3 w-3 rounded-full bg-yellow-400" />
                    <div className="h-3 w-3 rounded-full bg-green-400" />
                  </div>
                  <span className="text-[10px] sm:text-xs font-semibold text-slate-500 font-mono tracking-wider uppercase truncate max-w-[170px] sm:max-w-[280px] md:max-w-md text-center">
                    {current.label}
                  </span>
                  <div className="h-3 w-3" />
                </div>

                {/* Media Content Container */}
                <div className="relative aspect-video w-full bg-slate-900">
                  {isPlayingVideo && current.videoPath ? (
                    <video
                      src={current.videoPath}
                      controls
                      autoPlay
                      className="w-full h-full object-cover"
                    />
                  ) : (
                    <>
                      <Image
                        src={current.imagePath}
                        alt={current.title}
                        fill
                        sizes="(max-width: 1024px) 100vw, 58vw"
                        quality={90}
                        className="object-cover transition-transform duration-500 group-hover:scale-[1.02]"
                      />
                      {current.videoPath && (
                        <div className="absolute inset-0 bg-slate-900/20 flex items-center justify-center">
                          <button
                            onClick={() => setIsPlayingVideo(true)}
                            className="h-16 w-16 rounded-full bg-primary-600/90 text-white flex items-center justify-center shadow-xl hover:bg-primary-500 hover:scale-110 transition-all duration-300"
                            aria-label="Play video demo"
                          >
                            <Play className="h-7 w-7 fill-current ml-1" />
                          </button>
                        </div>
                      )}
                    </>
                  )}
                </div>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}
