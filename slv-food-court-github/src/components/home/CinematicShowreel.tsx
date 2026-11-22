'use client';

import React, { useState, useRef, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Play, Pause, Volume2, VolumeX, Maximize, Film, Sparkles, Flame } from 'lucide-react';
import { MagneticButton } from '@/components/ui/MagneticButton';

export function CinematicShowreel() {
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(true);
  const [progress, setProgress] = useState(25);
  const [currentTime, setCurrentTime] = useState('00:38');
  const [duration, setDuration] = useState('02:30');

  const videoRef = useRef<HTMLVideoElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  // Simulated timer if video element not playing real file
  useEffect(() => {
    let interval: NodeJS.Timeout;
    if (isPlaying) {
      interval = setInterval(() => {
        setProgress((prev) => {
          if (prev >= 100) return 0;
          return prev + 0.4;
        });
      }, 100);
    }
    return () => clearInterval(interval);
  }, [isPlaying]);

  const togglePlay = () => {
    if (videoRef.current) {
      if (videoRef.current.paused) {
        videoRef.current.play().catch(() => {});
        setIsPlaying(true);
      } else {
        videoRef.current.pause();
        setIsPlaying(false);
      }
    } else {
      setIsPlaying(!isPlaying);
    }
  };

  const toggleMute = () => {
    if (videoRef.current) {
      videoRef.current.muted = !isMuted;
    }
    setIsMuted(!isMuted);
  };

  const toggleFullscreen = () => {
    if (!containerRef.current) return;
    if (!document.fullscreenElement) {
      containerRef.current.requestFullscreen().catch(() => {});
    } else {
      document.exitFullscreen().catch(() => {});
    }
  };

  const handleSeek = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const pos = (e.clientX - rect.left) / rect.width;
    const clamped = Math.max(0, Math.min(1, pos));
    setProgress(clamped * 100);

    if (videoRef.current && videoRef.current.duration) {
      videoRef.current.currentTime = clamped * videoRef.current.duration;
    }
  };

  return (
    <section className="py-24 sm:py-32 px-5 sm:px-8 lg:px-12 bg-slv-charcoal relative overflow-hidden border-t border-slv-red/15">
      {/* Background radial glow */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-slv-red/15 via-slv-charcoal to-slv-charcoal pointer-events-none" />

      <div className="max-w-7xl mx-auto flex flex-col gap-12 relative z-10">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 border-b border-slv-red/20 pb-8">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slv-orange/15 border border-slv-orange/30 text-slv-orange text-xs font-sans font-bold uppercase tracking-wider mb-3">
              <Film className="w-3.5 h-3.5" />
              <span>THE SLV EXPERIENCE IN MOTION</span>
            </div>
            <h2 className="text-4xl sm:text-6xl font-display font-black tracking-tight text-white leading-none">
              CINEMATIC SHOWREEL.
            </h2>
          </div>

          <p className="text-sm sm:text-base text-white/70 font-serif max-w-md">
            Watch the roaring woks, the golden toss of basmati rice, and the sizzling temper of Chicken 65 captured in 4K high-velocity cinema.
          </p>
        </div>

        {/* Video Player Frame */}
        <div
          ref={containerRef}
          className="relative aspect-video w-full rounded-3xl overflow-hidden bg-slv-dark-card border border-slv-red/30 shadow-2xl group cursor-pointer"
          onClick={togglePlay}
          data-cursor={isPlaying ? 'PAUSE' : 'PLAY'}
        >
          {/* Real Video Tag with Poster Fallback */}
          <video
            ref={videoRef}
            src="/assets/videos/showreel.mp4"
            poster="/assets/thumbnails/brand-anthem.svg"
            playsInline
            muted={isMuted}
            onEnded={() => setIsPlaying(false)}
            className="w-full h-full object-cover"
          />

          {/* Vignette & Ambient Gradient */}
          <div className="absolute inset-0 bg-gradient-to-t from-slv-charcoal via-transparent to-slv-charcoal/40 pointer-events-none" />

          {/* Center Play Button Overlay */}
          <div className="absolute inset-0 flex flex-col items-center justify-center gap-4 pointer-events-none">
            <MagneticButton className="pointer-events-auto" strength={0.4}>
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  togglePlay();
                }}
                className="w-24 h-24 rounded-full bg-slv-red/90 text-white flex items-center justify-center shadow-slv-glow transition-all duration-300 group-hover:scale-110 group-hover:bg-slv-orange"
                aria-label={isPlaying ? 'Pause Showreel' : 'Play Showreel'}
              >
                {isPlaying ? (
                  <Pause className="w-10 h-10 fill-white" />
                ) : (
                  <Play className="w-10 h-10 translate-x-1 fill-white" />
                )}
              </button>
            </MagneticButton>
            <span className="text-xs uppercase tracking-widest font-sans font-bold text-white/90 bg-slv-charcoal/80 px-4 py-1.5 rounded-full border border-white/10 backdrop-blur-md">
              {isPlaying ? 'NOW PLAYING · 4K MASTER' : 'CLICK TO WATCH SLV SHOWREEL (02:30)'}
            </span>
          </div>

          {/* Bottom Player Controls Bar */}
          <div
            className="absolute bottom-0 left-0 right-0 p-4 sm:p-6 bg-slv-charcoal/90 backdrop-blur-md border-t border-slv-red/20 flex flex-col gap-3 pointer-events-auto"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Scrubber */}
            <div
              className="relative w-full h-2 rounded-full bg-white/10 hover:h-3 transition-all cursor-pointer group/scrub"
              onClick={handleSeek}
            >
              <div
                className="absolute top-0 left-0 bottom-0 rounded-full bg-gradient-to-r from-slv-red to-slv-orange shadow-slv-glow"
                style={{ width: `${progress}%` }}
              />
              <div
                className="absolute top-1/2 -translate-y-1/2 w-3.5 h-3.5 rounded-full bg-white shadow-md opacity-0 group-hover/scrub:opacity-100 transition-opacity"
                style={{ left: `calc(${progress}% - 7px)` }}
              />
            </div>

            {/* Controls Row */}
            <div className="flex items-center justify-between text-white text-xs font-sans">
              <div className="flex items-center gap-4">
                <button
                  onClick={togglePlay}
                  className="p-2 rounded-lg bg-white/10 hover:bg-white/20 text-white transition-colors"
                  aria-label={isPlaying ? 'Pause' : 'Play'}
                >
                  {isPlaying ? <Pause className="w-4 h-4" /> : <Play className="w-4 h-4" />}
                </button>

                <button
                  onClick={toggleMute}
                  className="p-2 rounded-lg bg-white/10 hover:bg-white/20 text-white transition-colors"
                  aria-label={isMuted ? 'Unmute' : 'Mute'}
                >
                  {isMuted ? <VolumeX className="w-4 h-4" /> : <Volume2 className="w-4 h-4" />}
                </button>

                <span className="font-mono text-white/70 tracking-wider">
                  {currentTime} / {duration}
                </span>
              </div>

              <div className="flex items-center gap-3">
                <span className="hidden sm:inline-block text-[11px] text-slv-orange tracking-wider uppercase font-bold">
                  4K HDR // 60 FPS
                </span>
                <button
                  onClick={toggleFullscreen}
                  className="p-2 rounded-lg bg-white/10 hover:bg-white/20 text-white transition-colors"
                  aria-label="Toggle Fullscreen"
                >
                  <Maximize className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
