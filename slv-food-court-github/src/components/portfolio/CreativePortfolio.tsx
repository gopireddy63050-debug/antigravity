'use client';

import React, { useState, useMemo, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Play, Pause, X, Sparkles, ArrowUpRight, Film } from 'lucide-react';
import { creativeProjects, PORTFOLIO_CATEGORIES, PortfolioCategory } from '@/data/portfolio-data';
import { CreativeProject } from '@/types/slv';
import { cn } from '@/lib/utils';

export function ProjectModal({
  isOpen,
  onClose,
  project,
}: {
  isOpen: boolean;
  onClose: () => void;
  project: CreativeProject | null;
}) {
  const [isPlaying, setIsPlaying] = useState(true);

  useEffect(() => {
    if (!isOpen) return;
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
      if (e.key === ' ') {
        e.preventDefault();
        setIsPlaying((p) => !p);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    document.body.style.overflow = 'hidden';

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'auto';
    };
  }, [isOpen, onClose]);

  if (!isOpen || !project) return null;

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 z-50 bg-slv-charcoal/95 backdrop-blur-2xl flex items-center justify-center p-4 sm:p-6 overflow-y-auto"
        onClick={onClose}
      >
        <motion.div
          initial={{ scale: 0.94, opacity: 0, y: 20 }}
          animate={{ scale: 1, opacity: 1, y: 0 }}
          exit={{ scale: 0.94, opacity: 0, y: 20 }}
          transition={{ type: 'spring', damping: 25, stiffness: 300 }}
          className="relative w-full max-w-4xl bg-slv-dark-card rounded-3xl overflow-hidden border border-slv-red/30 shadow-2xl my-8 text-white"
          onClick={(e) => e.stopPropagation()}
        >
          <button
            onClick={onClose}
            aria-label="Close Project Modal"
            className="absolute top-4 right-4 z-30 p-2.5 rounded-full bg-slv-charcoal/80 hover:bg-slv-red text-white transition-colors border border-white/10"
            data-cursor="CLOSE"
          >
            <X className="w-5 h-5" />
          </button>

          <div className="relative aspect-video w-full bg-slv-charcoal overflow-hidden group">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={project.thumbnailUrl}
              alt={project.title}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slv-dark-card via-transparent to-transparent" />

            <div
              className="absolute inset-0 flex flex-col items-center justify-center gap-3 cursor-pointer"
              onClick={() => setIsPlaying(!isPlaying)}
            >
              <div className="w-20 h-20 rounded-full bg-slv-red/90 text-white flex items-center justify-center shadow-slv-glow transition-transform group-hover:scale-110">
                {isPlaying ? <Pause className="w-8 h-8" /> : <Play className="w-8 h-8 translate-x-0.5 fill-white" />}
              </div>
              <span className="text-xs uppercase tracking-widest font-sans font-bold text-white/80 bg-slv-charcoal/80 px-3.5 py-1 rounded-full border border-white/10 backdrop-blur-md">
                {isPlaying ? 'PLAYING 4K CINEMATIC STREAM' : 'PAUSED'}
              </span>
            </div>

            <div className="absolute bottom-5 left-6">
              <span className="px-3.5 py-1 rounded-full bg-slv-red text-white text-xs font-sans font-black uppercase tracking-wider shadow-md">
                {project.category}
              </span>
            </div>
          </div>

          <div className="p-6 sm:p-10 flex flex-col gap-6">
            <div className="flex flex-col gap-2">
              <div className="flex items-center gap-2 text-xs font-sans font-bold text-slv-orange uppercase tracking-wider">
                <Sparkles className="w-4 h-4" />
                <span>SLV Creative Labs Project // {project.year}</span>
              </div>
              <h2 className="text-2xl sm:text-4xl font-serif font-black text-white">
                {project.title}
              </h2>
              <p className="text-sm sm:text-base text-white/80 font-sans leading-relaxed mt-2">
                {project.description}
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 pt-6 border-t border-slv-red/15">
              {project.tools && (
                <div className="flex flex-col gap-2">
                  <span className="text-[10px] font-sans font-bold uppercase tracking-wider text-slv-orange">
                    Tools &amp; Production
                  </span>
                  <div className="flex flex-wrap gap-1.5">
                    {project.tools.map((t) => (
                      <span
                        key={t}
                        className="px-2.5 py-1 rounded-md bg-slv-charcoal border border-slv-red/20 text-xs text-white/80 font-sans"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              )}

              {project.credits && (
                <div className="flex flex-col gap-1 sm:col-span-2">
                  <span className="text-[10px] font-sans font-bold uppercase tracking-wider text-slv-orange">
                    Credits
                  </span>
                  <p className="text-xs text-white/70 font-sans leading-relaxed">
                    {project.credits}
                  </p>
                </div>
              )}
            </div>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}

export function CreativePortfolio() {
  const [activeCategory, setActiveCategory] = useState<PortfolioCategory>('All');
  const [selectedProject, setSelectedProject] = useState<CreativeProject | null>(null);

  const filteredProjects = useMemo(() => {
    if (activeCategory === 'All') return creativeProjects;
    return creativeProjects.filter((p) => p.category === activeCategory);
  }, [activeCategory]);

  return (
    <section id="portfolio" className="py-24 sm:py-32 px-5 sm:px-8 lg:px-12 bg-slv-dark-card/50 relative overflow-hidden border-t border-slv-red/15">
      <div className="absolute top-1/2 right-0 w-96 h-96 bg-slv-red/15 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto flex flex-col gap-14 relative z-10">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 border-b border-slv-red/20 pb-8">
          <div>
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slv-red/15 border border-slv-red/35 text-slv-orange text-xs font-sans font-bold uppercase tracking-wider mb-3">
              <Film className="w-3.5 h-3.5" />
              <span>BRAND ARCHIVES &amp; MEDIA</span>
            </div>
            <h2 className="text-4xl sm:text-6xl md:text-7xl font-display font-black tracking-tight text-white leading-none">
              CREATIVE PROJECTS.
            </h2>
          </div>

          <p className="text-sm sm:text-base text-white/70 font-serif max-w-md">
            Commercial brand anthems, experimental AI culinary cinema, viral reel campaigns, and the contemporary visual evolution of SLV Food Court.
          </p>
        </div>

        <div className="flex items-center gap-2 overflow-x-auto pb-2 scrollbar-none">
          <div className="flex items-center gap-1.5 p-1 rounded-full bg-slv-dark-card border border-slv-red/25 backdrop-blur-md">
            {PORTFOLIO_CATEGORIES.map((category) => {
              const isActive = activeCategory === category;
              return (
                <button
                  key={category}
                  onClick={() => setActiveCategory(category)}
                  className={cn(
                    'relative px-4 py-2 rounded-full text-xs font-sans font-bold tracking-wider uppercase transition-colors whitespace-nowrap focus:outline-none',
                    isActive ? 'text-white' : 'text-white/70 hover:text-slv-orange'
                  )}
                  data-cursor={category}
                >
                  {isActive && (
                    <motion.div
                      layoutId="activePortfolioCategory"
                      className="absolute inset-0 rounded-full bg-gradient-to-r from-slv-red to-slv-orange shadow-slv-glow"
                      transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                    />
                  )}
                  <span className="relative z-10">{category}</span>
                </button>
              );
            })}
          </div>
        </div>

        <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <AnimatePresence>
            {filteredProjects.map((project, index) => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.5, delay: index * 0.08 }}
                className="group relative rounded-3xl overflow-hidden bg-slv-dark-card border border-slv-red/20 hover:border-slv-orange/50 shadow-slv-card cursor-pointer flex flex-col justify-between"
                onClick={() => setSelectedProject(project)}
                data-cursor="PLAY"
              >
                <div className="relative aspect-video w-full overflow-hidden bg-slv-charcoal">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={project.thumbnailUrl}
                    alt={project.title}
                    loading="lazy"
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slv-charcoal via-transparent to-transparent opacity-85" />

                  <div className="absolute inset-0 m-auto w-14 h-14 rounded-full bg-slv-red/90 text-white flex items-center justify-center shadow-slv-glow transition-transform group-hover:scale-110">
                    <Play className="w-6 h-6 translate-x-0.5 fill-white" />
                  </div>

                  <div className="absolute bottom-3 left-4">
                    <span className="px-3 py-1 rounded-full bg-slv-charcoal/80 border border-white/10 text-white text-[10px] font-sans font-bold uppercase tracking-wider backdrop-blur-md">
                      {project.category}
                    </span>
                  </div>

                  <div className="absolute top-3 right-4">
                    <span className="px-2.5 py-0.5 rounded-md bg-slv-charcoal/80 text-white/70 font-mono text-[10px]">
                      {project.year}
                    </span>
                  </div>
                </div>

                <div className="p-6 flex flex-col justify-between flex-1 gap-4">
                  <div className="flex flex-col gap-2">
                    <h3 className="text-xl font-serif font-black text-white group-hover:text-slv-orange transition-colors">
                      {project.title}
                    </h3>
                    <p className="text-xs text-white/70 font-sans leading-relaxed line-clamp-2">
                      {project.description}
                    </p>
                  </div>

                  <div className="flex items-center justify-between pt-3 border-t border-slv-red/15 mt-auto">
                    <span className="text-[11px] font-sans font-bold text-slv-orange">
                      Watch Video &amp; Details
                    </span>
                    <div className="p-2 rounded-full bg-slv-red/20 text-slv-orange group-hover:bg-slv-red group-hover:text-white transition-colors">
                      <ArrowUpRight className="w-4 h-4" />
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>

      <ProjectModal
        isOpen={Boolean(selectedProject)}
        onClose={() => setSelectedProject(null)}
        project={selectedProject}
      />
    </section>
  );
}
