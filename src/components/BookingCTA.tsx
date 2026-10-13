import React from 'react';
import { motion } from 'motion/react';
import { Sparkles, ArrowRight, ShieldCheck, Phone, Mail } from 'lucide-react';
import ctaBg from '../assets/images/showcase_galle_fort_1791130712964.jpg';

interface BookingCTAProps {
  onOpenBooking: () => void;
}

export const BookingCTA: React.FC<BookingCTAProps> = ({ onOpenBooking }) => {
  return (
    <section className="relative py-20 sm:py-24 lg:py-28 overflow-hidden bg-[#0F2E22]">
      {/* Background with measured contrast overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src={ctaBg}
          alt="Galle Fort Lighthouse at dusk overlooking the Indian Ocean"
          className="w-full h-full object-cover object-center opacity-30"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#071912]/95 via-[#0F2E22]/90 to-[#071912]/95" />
      </div>

      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
        <div className="inline-flex items-center gap-2 px-3 py-1 mb-6 text-xs font-semibold tracking-widest uppercase text-amber-300 border border-amber-300/30 rounded-full bg-white/5 backdrop-blur-xs">
          <Sparkles className="w-3.5 h-3.5" />
          <span>Curated Private Expeditions · Season 2026/2027</span>
        </div>

        <h2 className="font-display text-4xl sm:text-6xl text-white font-normal mb-6 tracking-tight [text-wrap:balance]">
          Your Bespoke Journey Through Ceylon Awaits
        </h2>

        <p className="text-base sm:text-lg text-stone-200 max-w-2xl mx-auto font-light leading-relaxed mb-10 [text-wrap:balance]">
          Whether you desire dawn leopard tracking in Yala, meditative tea estate retreats, or private colonial ocean villas in Galle Fort — our local expedition curators craft every moment.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
          <button
            onClick={onOpenBooking}
            className="w-full sm:w-auto px-9 py-4 bg-[#C46835] hover:bg-[#DF8452] text-white text-xs sm:text-sm font-semibold uppercase tracking-wider rounded-lg shadow-xl shadow-black/40 transition-all duration-200 cursor-pointer flex items-center justify-center gap-2 group"
          >
            <span>Start Bespoke Expedition Plan</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </button>
          <a
            href="#packages"
            className="w-full sm:w-auto px-8 py-4 bg-white/10 hover:bg-white/20 text-white text-xs sm:text-sm font-semibold uppercase tracking-wider rounded-lg border border-white/20 backdrop-blur-xs transition-colors cursor-pointer text-center"
          >
            Review All Packages
          </a>
        </div>

        {/* Quiet Trust Adjacency */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 pt-10 border-t border-white/10 text-left">
          <div className="flex items-start gap-3">
            <ShieldCheck className="w-5 h-5 text-amber-300 shrink-0 mt-0.5" />
            <div>
              <span className="text-xs font-semibold text-white block">
                100% Tailored Flexibility
              </span>
              <span className="text-[11px] text-stone-300 font-light">
                Adapt itineraries, dates, and paces with zero modification penalties up to 21 days before departure.
              </span>
            </div>
          </div>

          <div className="flex items-start gap-3">
            <ShieldCheck className="w-5 h-5 text-amber-300 shrink-0 mt-0.5" />
            <div>
              <span className="text-xs font-semibold text-white block">
                Dedicated Naturalist Guides
              </span>
              <span className="text-[11px] text-stone-300 font-light">
                Every vehicle is piloted by certified Sri Lanka Tourism chauffeurs trained in local history and wildlife tracking.
              </span>
            </div>
          </div>

          <div className="flex items-start gap-3">
            <ShieldCheck className="w-5 h-5 text-amber-300 shrink-0 mt-0.5" />
            <div>
              <span className="text-xs font-semibold text-white block">
                Seamless Concierge Support
              </span>
              <span className="text-[11px] text-stone-300 font-light">
                Round-the-clock on-the-ground support from our offices in Colombo 07 and Galle Fort.
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
