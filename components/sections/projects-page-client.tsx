"use client";

import { useState, useMemo, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Building,
  MapPin,
  Calendar,
  Search,
  X,
  FileCheck,
  Filter,
} from "lucide-react";
import type { ProjectsPageDict, ProjectsPageItem } from "@/lib/i18n";
import { ProjectLogoBadge } from "@/components/ui/project-logo-badge";

interface ProjectsPageClientProps {
  dict: ProjectsPageDict;
}

export function ProjectsPageClient({ dict }: ProjectsPageClientProps) {
  const [selectedCategory, setSelectedCategory] = useState<string>("all");
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [activeModalProject, setActiveModalProject] =
    useState<ProjectsPageItem | null>(null);

  // Lock body scroll when project modal is open to prevent background scrolling & dynamic mobile address bar jumps
  useEffect(() => {
    if (activeModalProject) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [activeModalProject]);

  // Filter projects by category and search query
  const filteredProjects = useMemo(() => {
    return dict.items.filter((item) => {
      const matchCategory =
        selectedCategory === "all" || item.category === selectedCategory;

      const query = searchQuery.toLowerCase().trim();
      const matchSearch =
        !query ||
        item.title.toLowerCase().includes(query) ||
        item.client.toLowerCase().includes(query) ||
        item.location.toLowerCase().includes(query) ||
        item.scopeDetails.toLowerCase().includes(query);

      return matchCategory && matchSearch;
    }).reverse();
  }, [dict.items, selectedCategory, searchQuery]);

  const categories = [
    { key: "all", label: dict.filter.all },
    { key: "cadastru", label: dict.filter.cadastru },
    { key: "rsv", label: dict.filter.rsv },
    { key: "utilities", label: dict.filter.utilities },
    { key: "infrastructure", label: dict.filter.infrastructure },
  ];

  return (
    <main className="min-h-screen bg-slate-50 text-slate-900 relative pt-28 pb-24 overflow-hidden">
      {/* Swiss Grid Background */}
      <div className="absolute inset-0 bg-grid-slate-thin opacity-50 pointer-events-none" />

      <div className="container relative mx-auto px-4 md:px-6 lg:px-8">
        {/* Header - Flush Left Swiss Style */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="max-w-3xl mb-10 text-flush-left"
        >
          <span className="text-xs font-semibold text-primary-600 tracking-wider uppercase mb-3 inline-block">
            {dict.hero.badge}
          </span>
          <h1 className="heading-dominant text-slate-900 mb-4">
            {dict.hero.title}
          </h1>
          <p className="text-lg md:text-xl text-slate-600 mb-4 font-normal">
            {dict.hero.subtitle}
          </p>
          <p className="text-sm text-slate-500 max-w-2xl leading-relaxed">
            {dict.hero.description}
          </p>
        </motion.div>

        {/* Filter & Search Bar */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.15 }}
          className="flex flex-col md:flex-row gap-4 justify-between items-stretch md:items-center mb-10"
        >
          {/* Category Filter Pills */}
          <div className="flex flex-wrap gap-2">
            {categories.map((cat) => (
              <button
                key={cat.key}
                onClick={() => setSelectedCategory(cat.key)}
                className={`px-4 py-2 rounded-lg font-medium text-xs md:text-sm transition-all duration-200 ${
                  selectedCategory === cat.key
                    ? "bg-primary-600 text-white shadow-md shadow-primary-600/20"
                    : "bg-white text-slate-600 hover:text-slate-900 hover:bg-slate-100 border border-slate-200"
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>

          {/* Search Input */}
          <div className="relative min-w-[260px] md:w-72">
            <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder={dict.filter.searchPlaceholder}
              className="w-full pl-10 pr-8 py-2 bg-white border border-slate-200 rounded-lg text-xs md:text-sm text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-primary-500/20 focus:border-primary-500 transition-all"
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery("")}
                className="absolute right-2.5 top-1/2 -translate-y-1/2 p-0.5 text-slate-400 hover:text-slate-600"
              >
                <X className="w-3.5 h-3.5" />
              </button>
            )}
          </div>
        </motion.div>

        {/* Projects Grid */}
        {filteredProjects.length > 0 ? (
          <AnimatePresence mode="wait">
            <motion.div
              key={selectedCategory + searchQuery}
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.3 }}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
            >
              {filteredProjects.map((project) => (
                <div
                  key={project.id}
                  onClick={() => setActiveModalProject(project)}
                  className="flex flex-col rounded-xl p-6 bg-white border border-slate-200 hover:border-primary-300 transition-all duration-300 group shadow-xs hover:shadow-md cursor-pointer"
                >
                  {/* Card Top Row */}
                  <div className="flex items-center justify-between mb-4 gap-2">
                    <ProjectLogoBadge item={project} />
                    <span className="flex items-center gap-1 text-xs font-semibold px-2.5 py-1 rounded-full bg-slate-100 text-slate-700 shrink-0">
                      <Calendar className="h-3.5 w-3.5 text-slate-400" />
                      {project.year}
                    </span>
                  </div>

                  {/* Title */}
                  <h3 className="text-base md:text-lg font-bold text-slate-900 mb-2 group-hover:text-primary-600 transition-colors line-clamp-2 leading-snug">
                    {project.title}
                  </h3>

                  {/* Scope Preview */}
                  <p className="text-xs text-slate-500 line-clamp-2 mb-6 leading-relaxed">
                    {project.scopeDetails}
                  </p>

                  {/* Card Bottom Meta Row */}
                  <div className="flex items-center justify-between text-xs text-slate-600 mt-auto pt-4 border-t border-slate-100">
                    <span className="flex items-center gap-1.5 font-medium truncate max-w-[65%]">
                      <Building className="h-3.5 w-3.5 text-slate-400 shrink-0" />
                      <span className="truncate">{project.client}</span>
                    </span>
                    <span className="flex items-center gap-1 font-semibold text-slate-500 shrink-0">
                      <MapPin className="h-3.5 w-3.5 text-slate-400 shrink-0" />
                      <span>{project.location}</span>
                    </span>
                  </div>
                </div>
              ))}
            </motion.div>
          </AnimatePresence>
        ) : (
          <div className="bg-white rounded-xl p-10 text-center border border-slate-200 max-w-md mx-auto my-12">
            <Filter className="w-8 h-8 text-slate-300 mx-auto mb-3" />
            <h3 className="text-base font-bold text-slate-900 mb-1">
              {dict.filter.noResultsTitle}
            </h3>
            <p className="text-xs text-slate-500 mb-4">
              {dict.filter.noResultsSubtitle}
            </p>
            <button
              onClick={() => {
                setSelectedCategory("all");
                setSearchQuery("");
              }}
              className="px-4 py-2 bg-primary-600 hover:bg-primary-700 text-white rounded-lg text-xs font-semibold transition-colors"
            >
              Resetează căutarea
            </button>
          </div>
        )}
      </div>

      {/* Sleek Project Detail Modal */}
      <AnimatePresence>
        {activeModalProject && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6">
            {/* Backdrop extending 300px beyond all viewport edges (overcomes mobile browser address bar dynamic height changes) */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setActiveModalProject(null)}
              className="fixed -inset-[300px] bg-slate-950/60 backdrop-blur-md"
            />

            {/* Modal Window */}
            <motion.div
              initial={{ opacity: 0, scale: 0.96, y: 15 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.96, y: 15 }}
              transition={{ duration: 0.25, ease: "easeOut" }}
              className="relative w-full max-w-2xl max-h-[85vh] overflow-y-auto bg-white rounded-2xl shadow-xl border border-slate-200 p-6 md:p-8 z-10"
            >
              {/* Close Button */}
              <button
                onClick={() => setActiveModalProject(null)}
                className="absolute top-5 right-5 p-1.5 rounded-full bg-slate-100 hover:bg-slate-200 text-slate-500 transition-colors"
              >
                <X className="w-4 h-4" />
              </button>

              <div className="mb-6 flex items-start justify-between gap-4 pr-8">
                <div>
                  <span className="text-xs font-semibold text-primary-600 uppercase tracking-wider inline-block mb-2">
                    {activeModalProject.categoryLabel}
                  </span>
                  <h2 className="text-xl md:text-2xl font-bold text-slate-900 leading-snug">
                    {activeModalProject.title}
                  </h2>
                </div>
                <div className="shrink-0 pt-1">
                  <ProjectLogoBadge item={activeModalProject} />
                </div>
              </div>

              {/* Meta Grid */}
              <div className="grid grid-cols-3 gap-4 p-4 rounded-xl bg-slate-50 border border-slate-100 mb-6 text-xs">
                <div>
                  <span className="text-slate-400 block mb-1">
                    {dict.modal.clientLabel}
                  </span>
                  <span className="font-bold text-slate-800 flex items-center gap-1.5">
                    <Building className="w-3.5 h-3.5 text-slate-400" />
                    {activeModalProject.client}
                  </span>
                </div>
                <div>
                  <span className="text-slate-400 block mb-1">
                    {dict.modal.locationLabel}
                  </span>
                  <span className="font-bold text-slate-800 flex items-center gap-1.5">
                    <MapPin className="w-3.5 h-3.5 text-primary-500" />
                    {activeModalProject.location}
                  </span>
                </div>
                <div>
                  <span className="text-slate-400 block mb-1">
                    {dict.modal.yearLabel}
                  </span>
                  <span className="font-bold text-slate-800 flex items-center gap-1.5">
                    <Calendar className="w-3.5 h-3.5 text-slate-400" />
                    {activeModalProject.year}
                  </span>
                </div>
              </div>

              {/* Technical Scope */}
              <div className="mb-6">
                <h4 className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-2">
                  {dict.modal.scopeTitle}
                </h4>
                <p className="text-xs md:text-sm text-slate-700 leading-relaxed bg-white border border-slate-100 p-4 rounded-xl">
                  {activeModalProject.scopeDetails}
                </p>
              </div>

              {/* Deliverables */}
              {activeModalProject.deliverables &&
                activeModalProject.deliverables.length > 0 && (
                  <div className="mb-6">
                    <h4 className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-3">
                      {dict.modal.deliverablesTitle}
                    </h4>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                      {activeModalProject.deliverables.map((item, idx) => (
                        <div
                          key={idx}
                          className="flex items-center gap-2 p-2.5 rounded-lg bg-slate-50 text-xs text-slate-700 font-medium border border-slate-100"
                        >
                          <FileCheck className="w-4 h-4 text-primary-600 shrink-0" />
                          <span>{item}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

              {/* Close Action */}
              <div className="pt-4 border-t border-slate-100 flex justify-end">
                <button
                  onClick={() => setActiveModalProject(null)}
                  className="px-4 py-2 bg-slate-900 hover:bg-slate-800 text-white text-xs font-semibold rounded-lg transition-colors"
                >
                  {dict.modal.closeBtn}
                </button>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </main>
  );
}
