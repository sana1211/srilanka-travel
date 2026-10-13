import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { CURATED_ITINERARY } from '../data/travelData';
import { SriLankaMap } from './SriLankaMap';
import {
  Calendar,
  Clock,
  Compass,
  MapPin,
  Train,
  Check,
  Sparkles,
  ArrowRight,
  Sun,
  Sunset,
  Moon,
} from 'lucide-react';

interface InteractiveItineraryProps {
  onOpenBooking: () => void;
}

export const InteractiveItinerary: React.FC<InteractiveItineraryProps> = ({
  onOpenBooking,
}) => {
  const [activeDayNumber, setActiveDayNumber] = useState(1);
  const currentDay =
    CURATED_ITINERARY.find((d) => d.day === activeDayNumber) || CURATED_ITINERARY[0];

  return (
    <section id="itinerary" className="py-16 sm:py-20 lg:py-24 bg-[#DFE3DC] border-y border-stone-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 text-xs font-semibold tracking-widest uppercase text-[#C46835] mb-2">
            <Compass className="w-3.5 h-3.5" />
            <span>Master Expedition Route · 12-Day Ceylon Panorama</span>
          </div>
          <h2 className="font-display text-3xl sm:text-5xl text-[#0F2E22] tracking-tight mb-4">
            Curated Day-by-Day Journey
          </h2>
          <p className="text-stone-600 text-sm sm:text-base font-light [text-wrap:balance]">
            A meticulously paced route balancing early morning wildlife encounters, ancient heritage ruins, scenic mountain rail, and Indian Ocean sunsets.
          </p>
        </div>

        {/* Day Selector Pill Bar (Functional Interactive Tabs) */}
        <div className="flex items-center gap-2 overflow-x-auto pb-4 mb-8 no-scrollbar">
          {CURATED_ITINERARY.map((day) => {
            const isActive = day.day === activeDayNumber;
            return (
              <button
                key={day.day}
                onClick={() => setActiveDayNumber(day.day)}
                className={`flex items-center gap-2 px-4 py-2.5 rounded-xl transition-all cursor-pointer whitespace-nowrap text-left border ${
                  isActive
                    ? 'bg-[#0F2E22] text-white border-[#0F2E22] shadow-sm'
                    : 'bg-white text-stone-700 hover:bg-stone-50 border-stone-200'
                }`}
              >
                <span
                  className={`text-xs font-bold px-1.5 py-0.5 rounded-md ${
                    isActive ? 'bg-[#C46835] text-white' : 'bg-stone-100 text-stone-600'
                  }`}
                >
                  Day {day.day}
                </span>
                <span className="text-xs font-medium truncate max-w-[130px] sm:max-w-none">
                  {day.location}
                </span>
              </button>
            );
          })}
        </div>

        {/* Main Grid: Interactive Day Card (left) & Route Map (right) */}
        <div className="grid grid-cols-1 xl:grid-cols-12 gap-6 lg:gap-8 items-start">
          {/* Day Detail Card (8 cols) */}
          <motion.div
            key={currentDay.day}
            initial={{ opacity: 0, x: -16 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-7 bg-white rounded-2xl border border-stone-200/90 overflow-hidden shadow-xs"
          >
            {/* Day Header with Image */}
            <div className="relative h-60 sm:h-72 overflow-hidden bg-stone-100">
              <img
                src={currentDay.image}
                alt={currentDay.title}
                className="w-full h-full object-cover object-center"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/35 to-transparent" />

              <div className="absolute top-4 left-4 right-4 flex items-center justify-between text-white text-xs">
                <span className="backdrop-blur-md bg-stone-900/80 px-3 py-1 rounded-md text-amber-300 font-semibold">
                  Day {currentDay.day} of {CURATED_ITINERARY.length}
                </span>
                <span className="backdrop-blur-md bg-black/60 px-3 py-1 rounded-md text-stone-200">
                  {currentDay.distanceKm} km · {currentDay.travelTime}
                </span>
              </div>

              <div className="absolute bottom-4 left-4 right-4 text-white">
                <span className="text-xs text-amber-200 font-medium block mb-1">
                  {currentDay.location}
                </span>
                <h3 className="font-display text-2xl sm:text-3xl text-white font-medium">
                  {currentDay.title}
                </h3>
              </div>
            </div>

            {/* Daily Schedule: Morning, Afternoon, Evening */}
            <div className="p-6 sm:p-8 space-y-6">
              <div className="space-y-4">
                <div className="flex items-start gap-3.5">
                  <div className="p-2 bg-amber-50 text-amber-700 rounded-lg shrink-0 mt-0.5 border border-amber-200/50">
                    <Sun className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-[11px] font-semibold uppercase tracking-wider text-stone-400 block mb-0.5">
                      Morning
                    </span>
                    <p className="text-xs sm:text-sm text-stone-700 leading-relaxed">
                      {currentDay.morning}
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3.5">
                  <div className="p-2 bg-orange-50 text-[#C46835] rounded-lg shrink-0 mt-0.5 border border-orange-200/50">
                    <Sunset className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-[11px] font-semibold uppercase tracking-wider text-stone-400 block mb-0.5">
                      Afternoon
                    </span>
                    <p className="text-xs sm:text-sm text-stone-700 leading-relaxed">
                      {currentDay.afternoon}
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3.5">
                  <div className="p-2 bg-emerald-50 text-[#0F2E22] rounded-lg shrink-0 mt-0.5 border border-emerald-200/50">
                    <Moon className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-[11px] font-semibold uppercase tracking-wider text-stone-400 block mb-0.5">
                      Evening
                    </span>
                    <p className="text-xs sm:text-sm text-stone-700 leading-relaxed">
                      {currentDay.evening}
                    </p>
                  </div>
                </div>
              </div>

              {/* Highlights & Accommodation */}
              <div className="pt-6 border-t border-stone-100 grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <span className="text-[11px] font-semibold uppercase tracking-wider text-stone-400 block mb-2">
                    Key Highlights
                  </span>
                  <ul className="space-y-1.5">
                    {currentDay.highlights.map((hl, hIdx) => (
                      <li key={hIdx} className="flex items-center gap-2 text-xs text-stone-700">
                        <Check className="w-3.5 h-3.5 text-[#0F2E22] shrink-0" />
                        <span>{hl}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div>
                  <span className="text-[11px] font-semibold uppercase tracking-wider text-stone-400 block mb-2">
                    Stay / Experience
                  </span>
                  <div className="p-3 bg-stone-50 rounded-lg text-xs text-stone-800 border border-stone-200/60 font-medium">
                    {currentDay.accommodationType}
                  </div>
                </div>
              </div>

              {/* Insider Tip Callout */}
              <div className="p-4 bg-amber-50/60 border border-amber-200/80 rounded-xl text-xs text-stone-700">
                <span className="font-semibold text-amber-900 block mb-0.5 flex items-center gap-1.5">
                  <Sparkles className="w-3.5 h-3.5 text-amber-700" />
                  <span>Expedition Naturalist Insider Tip</span>
                </span>
                <p>{currentDay.insiderTip}</p>
              </div>

              {/* Navigation between days */}
              <div className="pt-2 flex items-center justify-between">
                <button
                  disabled={activeDayNumber === 1}
                  onClick={() => setActiveDayNumber((prev) => Math.max(1, prev - 1))}
                  className="px-4 py-2 text-xs font-semibold text-stone-600 hover:text-stone-900 disabled:opacity-40 disabled:cursor-not-allowed cursor-pointer"
                >
                  ← Previous Day
                </button>
                <button
                  disabled={activeDayNumber === 10}
                  onClick={() => setActiveDayNumber((prev) => Math.min(10, prev + 1))}
                  className="px-4 py-2 text-xs font-semibold text-[#0F2E22] hover:text-[#1F4D3A] disabled:opacity-40 disabled:cursor-not-allowed cursor-pointer"
                >
                  Next Day →
                </button>
              </div>
            </div>
          </motion.div>

          {/* Interactive Map & Rail Spotlight (5 cols) */}
          <div className="lg:col-span-5 space-y-6">
            {/* SVG Interactive Island Map */}
            <SriLankaMap
              activeDay={activeDayNumber}
              onSelectDay={(day) => setActiveDayNumber(day)}
            />

            {/* Iconic Scenic Train Ride Feature Card */}
            <div className="bg-white rounded-2xl p-6 border border-stone-200/90 shadow-xs">
              <div className="flex items-center gap-2 text-xs font-semibold tracking-wider uppercase text-[#C46835] mb-2">
                <Train className="w-4 h-4" />
                <span>Ceylon Rail Feature</span>
              </div>
              <h4 className="font-display text-xl text-[#0F2E22] font-medium mb-2">
                The Kandy to Ella Blue Train
              </h4>
              <p className="text-xs text-stone-600 leading-relaxed mb-4">
                Widely heralded as one of the world’s most scenic mountain train journeys. Rolling past emerald tea hills, waterfalls, and tunnel loops at 1,500m elevation.
              </p>
              <div className="space-y-2 text-xs text-stone-700 bg-stone-50 p-3.5 rounded-xl border border-stone-200/70 mb-5">
                <div className="flex justify-between">
                  <span className="text-stone-400">Class:</span>
                  <span className="font-semibold text-stone-800">1st Observation or 2nd Reserved</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-stone-400">Best Window Side:</span>
                  <span className="font-semibold text-stone-800">Right side (Kandy to Nanu Oya)</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-stone-400">Photo Highlight:</span>
                  <span className="font-semibold text-stone-800">Demodara Loop & Nine Arch Viaduct</span>
                </div>
              </div>
              <button
                onClick={onOpenBooking}
                className="w-full py-3 px-4 bg-[#C46835] hover:bg-[#DF8452] text-white text-xs font-semibold uppercase tracking-wider rounded-lg transition-colors cursor-pointer flex items-center justify-center gap-2"
              >
                <span>Customize This 12-Day Route</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
