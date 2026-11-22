'use client';

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  MessageSquare,
  ShieldCheck,
  Share2,
  Copy,
  Check,
  ExternalLink,
  X,
  Smartphone,
  Lock,
  EyeOff,
  ServerOff,
  CheckCircle2,
} from 'lucide-react';
import { siteConfig } from '@/data/site-config';

export function PrivacySecurityModal({
  isOpen,
  onClose,
}: {
  isOpen: boolean;
  onClose: () => void;
}) {
  useEffect(() => {
    if (!isOpen) return;
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleKeyDown);
    document.body.style.overflow = 'hidden';

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'auto';
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

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
          className="relative w-full max-w-2xl bg-slv-dark-card rounded-3xl overflow-hidden border border-emerald-500/30 shadow-2xl p-6 sm:p-8 text-white my-8"
          onClick={(e) => e.stopPropagation()}
        >
          <div className="flex items-center justify-between pb-4 border-b border-white/10">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-emerald-500/15 border border-emerald-500/30 flex items-center justify-center">
                <ShieldCheck className="w-5 h-5 text-emerald-400" />
              </div>
              <div>
                <h3 className="text-lg sm:text-xl font-display font-bold uppercase tracking-wide text-white">
                  Data Privacy &amp; Security Guarantee
                </h3>
                <span className="text-[11px] font-mono text-emerald-400 uppercase tracking-widest block">
                  Zero Tracking • 100% Client-Side Safe
                </span>
              </div>
            </div>
            <button
              onClick={onClose}
              className="p-2 rounded-full bg-white/10 hover:bg-slv-red text-white transition-colors"
              aria-label="Close modal"
            >
              <X className="w-4 h-4" />
            </button>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 my-6">
            <div className="p-4 rounded-2xl bg-slv-charcoal/80 border border-emerald-500/20 flex flex-col gap-2">
              <div className="flex items-center gap-2 text-emerald-400 font-bold text-xs uppercase tracking-wider font-mono">
                <EyeOff className="w-4 h-4" />
                <span>Zero Cookies or Pixels</span>
              </div>
              <p className="text-xs text-white/70 leading-relaxed font-sans">
                We do not use advertising tracking cookies, Facebook pixels, or fingerprinting scripts. Your browsing remains strictly confidential.
              </p>
            </div>

            <div className="p-4 rounded-2xl bg-slv-charcoal/80 border border-emerald-500/20 flex flex-col gap-2">
              <div className="flex items-center gap-2 text-emerald-400 font-bold text-xs uppercase tracking-wider font-mono">
                <ServerOff className="w-4 h-4" />
                <span>No Database Logging</span>
              </div>
              <p className="text-xs text-white/70 leading-relaxed font-sans">
                This website is 100% serverless and frontend-only. No IP logs, names, phone numbers, or search queries are saved on any database.
              </p>
            </div>

            <div className="p-4 rounded-2xl bg-slv-charcoal/80 border border-emerald-500/20 flex flex-col gap-2">
              <div className="flex items-center gap-2 text-emerald-400 font-bold text-xs uppercase tracking-wider font-mono">
                <Lock className="w-4 h-4" />
                <span>Sanitized External Links</span>
              </div>
              <p className="text-xs text-white/70 leading-relaxed font-sans">
                All external connections to WhatsApp, Google Maps, and Instagram use strict rel=&quot;noopener noreferrer&quot; to isolate your session.
              </p>
            </div>

            <div className="p-4 rounded-2xl bg-slv-charcoal/80 border border-emerald-500/20 flex flex-col gap-2">
              <div className="flex items-center gap-2 text-emerald-400 font-bold text-xs uppercase tracking-wider font-mono">
                <ShieldCheck className="w-4 h-4" />
                <span>Anti-Spam Contact Guarantee</span>
              </div>
              <p className="text-xs text-white/70 leading-relaxed font-sans">
                When you initiate a call or WhatsApp message, you connect directly to our staff counter. Your phone number is never sold or shared.
              </p>
            </div>
          </div>

          <div className="p-4 rounded-2xl bg-emerald-500/10 border border-emerald-500/25 flex items-start gap-3">
            <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5" />
            <div className="text-xs leading-relaxed text-white/80 font-sans">
              <strong className="text-white block font-medium">SLV Food Court Privacy Standard</strong>
              Your trust is our culinary foundation. Enjoy exploring our menu, portion calculators, and chef specials with complete peace of mind.
            </div>
          </div>

          <div className="mt-6 flex justify-end">
            <button
              onClick={onClose}
              className="px-6 py-2.5 rounded-full bg-emerald-600 hover:bg-emerald-500 text-white font-sans font-bold text-xs uppercase tracking-wider transition-colors shadow-sm"
            >
              Understood &amp; Close
            </button>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}

export function WhatsAppShareModal({
  isOpen,
  onClose,
}: {
  isOpen: boolean;
  onClose: () => void;
}) {
  const [copied, setCopied] = useState(false);
  const [shareUrl, setShareUrl] = useState('http://192.168.1.15:3000');

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const currentOrigin = window.location.origin;
      if (currentOrigin.includes('localhost') || currentOrigin.includes('127.0.0.1')) {
        setShareUrl('http://192.168.1.15:3000');
      } else {
        setShareUrl(currentOrigin);
      }
    }
  }, []);

  const shareText = `🍽️ *SLV Food Court — Fresh Flavors, Endless Choice!*

🔥 Check out their authentic menu:
• Sizzling Chicken Noodles & Egg Hakka Noodles (Full / Half portions)
• Aromatic Chicken Fried Rice & Manchurian Rice
• Signature Crispy Chicken 65 & Chilli Chicken
• Flaky Gourmet Chicken & Veg Rolls
• Oven-Fresh Veg Pizza & Crispy Snacks

📍 *Location*: Old Jail Road, behind New Lucky Shopping Mall
🕒 *Timing*: 11:30 AM — 11:00 PM Daily
📞 *Contact*: ${siteConfig.contact.displayPhone}

👉 *Explore the Full Interactive Menu Here*:
${shareUrl}`;

  const whatsappDirectLink = `https://api.whatsapp.com/send?text=${encodeURIComponent(shareText)}`;

  const handleCopy = () => {
    navigator.clipboard.writeText(shareText);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  useEffect(() => {
    if (!isOpen) return;
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleKeyDown);
    document.body.style.overflow = 'hidden';

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'auto';
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

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
          className="relative w-full max-w-xl bg-slv-dark-card rounded-3xl overflow-hidden border border-emerald-500/40 shadow-2xl p-6 sm:p-8 text-white my-8"
          onClick={(e) => e.stopPropagation()}
        >
          <div className="flex items-center justify-between pb-4 border-b border-white/10">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-emerald-500/20 border border-emerald-500/40 flex items-center justify-center shadow-glow">
                <MessageSquare className="w-5 h-5 text-emerald-400" />
              </div>
              <div>
                <h3 className="text-lg sm:text-xl font-display font-bold uppercase tracking-wide text-white">
                  Share on WhatsApp
                </h3>
                <span className="text-[11px] font-mono text-emerald-400 uppercase tracking-widest block">
                  Send to Friends, Family &amp; Foodies
                </span>
              </div>
            </div>
            <button
              onClick={onClose}
              className="p-2 rounded-full bg-white/10 hover:bg-slv-red text-white transition-colors"
              aria-label="Close modal"
            >
              <X className="w-4 h-4" />
            </button>
          </div>

          <div className="my-5 flex flex-col gap-2">
            <div className="flex items-center justify-between text-xs font-mono uppercase tracking-wider text-white/50">
              <span>Formatted WhatsApp Message Preview:</span>
              <span className="text-emerald-400 font-bold">Ready to Send</span>
            </div>

            <div className="p-4 rounded-2xl bg-slv-charcoal/90 border border-emerald-500/20 max-h-56 overflow-y-auto text-xs font-mono text-white/80 whitespace-pre-wrap leading-relaxed select-all">
              {shareText}
            </div>
          </div>

          <div className="p-3.5 rounded-xl bg-white/5 border border-white/10 flex items-center justify-between gap-3 text-xs mb-6">
            <div className="flex items-center gap-2 text-white/60 truncate font-mono">
              <Smartphone className="w-4 h-4 text-emerald-400 shrink-0" />
              <span className="truncate">{shareUrl}</span>
            </div>
            <button
              onClick={() => {
                const newUrl = prompt('Enter or edit the website link to share:', shareUrl);
                if (newUrl) setShareUrl(newUrl.trim());
              }}
              className="text-[11px] font-bold uppercase tracking-wider text-emerald-400 hover:text-emerald-300 shrink-0 underline"
            >
              Edit Link
            </button>
          </div>

          <div className="flex flex-col sm:flex-row items-center gap-3">
            <a
              href={whatsappDirectLink}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:flex-1 py-3.5 px-6 rounded-2xl bg-emerald-600 hover:bg-emerald-500 text-white font-sans font-bold text-xs uppercase tracking-wider flex items-center justify-center gap-2 transition-all shadow-lg hover:shadow-emerald-600/30"
              data-cursor="WHATSAPP"
            >
              <MessageSquare className="w-4 h-4" />
              <span>Open in WhatsApp</span>
              <ExternalLink className="w-3.5 h-3.5 opacity-70" />
            </a>

            <button
              onClick={handleCopy}
              className="w-full sm:w-auto py-3.5 px-6 rounded-2xl bg-white/10 hover:bg-white/20 text-white font-sans font-bold text-xs uppercase tracking-wider flex items-center justify-center gap-2 transition-colors border border-white/10"
              data-cursor="COPY"
            >
              {copied ? (
                <>
                  <Check className="w-4 h-4 text-emerald-400" />
                  <span className="text-emerald-400">Copied to Clipboard!</span>
                </>
              ) : (
                <>
                  <Copy className="w-4 h-4 text-white/80" />
                  <span>Copy Message</span>
                </>
              )}
            </button>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}

export function FloatingActions() {
  const [shareOpen, setShareOpen] = useState(false);
  const [securityOpen, setSecurityOpen] = useState(false);

  return (
    <>
      <div className="fixed bottom-6 right-6 z-40 flex flex-col items-end gap-3 pointer-events-auto">
        <motion.button
          initial={{ opacity: 0, scale: 0.9, y: 10 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.2 }}
          onClick={() => setSecurityOpen(true)}
          className="group flex items-center gap-2 px-3.5 py-2 rounded-full bg-slv-dark-card/95 hover:bg-slv-charcoal border border-emerald-500/40 text-emerald-400 hover:text-emerald-300 backdrop-blur-md shadow-lg transition-all duration-300 text-xs font-sans font-bold uppercase tracking-wider"
          data-cursor="SECURITY"
          title="Personal Information & Privacy Protection"
        >
          <ShieldCheck className="w-4 h-4 text-emerald-400 group-hover:scale-110 transition-transform" />
          <span className="hidden sm:inline text-[11px]">Privacy Protected</span>
        </motion.button>

        <motion.button
          initial={{ opacity: 0, scale: 0.9, y: 10 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          onClick={() => setShareOpen(true)}
          className="group flex items-center gap-2.5 px-5 py-3 rounded-full bg-emerald-600 hover:bg-emerald-500 text-white font-sans font-bold text-xs uppercase tracking-wider shadow-2xl hover:shadow-emerald-500/40 hover:scale-105 transition-all duration-300 border border-emerald-400/30"
          data-cursor="SHARE"
        >
          <div className="relative">
            <MessageSquare className="w-4 h-4 fill-current group-hover:rotate-12 transition-transform" />
            <span className="absolute -top-1 -right-1 w-2 h-2 rounded-full bg-white animate-ping" />
          </div>
          <span>Share on WhatsApp</span>
        </motion.button>
      </div>

      <WhatsAppShareModal isOpen={shareOpen} onClose={() => setShareOpen(false)} />
      <PrivacySecurityModal isOpen={securityOpen} onClose={() => setSecurityOpen(false)} />
    </>
  );
}
