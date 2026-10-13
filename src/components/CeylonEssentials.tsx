import React, { useState } from 'react';
import { motion } from 'motion/react';
import { CEYLON_WEATHER_GUIDE, TRAVELER_REVIEWS } from '../data/travelData';
import {
  Sun,
  ShieldCheck,
  Coffee,
  Heart,
  Star,
  Quote,
  CheckCircle2,
  HelpCircle,
} from 'lucide-react';

export const CeylonEssentials: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'weather' | 'etiquette' | 'tea'>('weather');

  return (
    <section id="essentials" className="py-16 sm:py-20 lg:py-24 bg-[#ECEDE7]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 text-xs font-semibold tracking-widest uppercase text-[#C46835] mb-2">
            <ShieldCheck className="w-3.5 h-3.5" />
            <span>Traveler Compass · Practical Wisdom</span>
          </div>
          <h2 className="font-display text-3xl sm:text-5xl text-[#0F2E22] tracking-tight mb-4">
            Essential Guide to Ceylon
          </h2>
          <p className="text-stone-600 text-sm sm:text-base font-light [text-wrap:balance]">
            Everything discerning travelers should understand about monsoons, sacred temple customs, and single-estate Ceylon tea traditions.
          </p>
        </div>

        {/* Segmented Controls for Guide Tabs */}
        <div className="flex items-center justify-center gap-2 mb-12">
          <button
            onClick={() => setActiveTab('weather')}
            className={`px-5 py-2.5 text-xs font-semibold rounded-lg transition-colors cursor-pointer ${
              activeTab === 'weather'
                ? 'bg-[#0F2E22] text-white shadow-xs'
                : 'bg-stone-200/70 text-stone-700 hover:bg-stone-200'
            }`}
          >
            Climate & Dual Monsoons
          </button>
          <button
            onClick={() => setActiveTab('etiquette')}
            className={`px-5 py-2.5 text-xs font-semibold rounded-lg transition-colors cursor-pointer ${
              activeTab === 'etiquette'
                ? 'bg-[#0F2E22] text-white shadow-xs'
                : 'bg-stone-200/70 text-stone-700 hover:bg-stone-200'
            }`}
          >
            Cultural & Temple Etiquette
          </button>
          <button
            onClick={() => setActiveTab('tea')}
            className={`px-5 py-2.5 text-xs font-semibold rounded-lg transition-colors cursor-pointer ${
              activeTab === 'tea'
                ? 'bg-[#0F2E22] text-white shadow-xs'
                : 'bg-stone-200/70 text-stone-700 hover:bg-stone-200'
            }`}
          >
            Ceylon Tea Connoisseur
          </button>
        </div>

        {/* Dynamic Tab Content */}
        <div className="mb-20">
          {activeTab === 'weather' && (
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3 }}
              className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6"
            >
              {CEYLON_WEATHER_GUIDE.map((w, idx) => (
                <div
                  key={idx}
                  className="bg-white p-6 rounded-2xl border border-stone-200 shadow-xs flex flex-col justify-between"
                >
                  <div>
                    <div className="flex items-center gap-2 text-xs font-semibold text-[#C46835] uppercase tracking-wider mb-2">
                      <Sun className="w-4 h-4 text-amber-500" />
                      <span>{w.bestMonths}</span>
                    </div>
                    <h3 className="font-display text-xl text-stone-900 font-medium mb-2">
                      {w.season}
                    </h3>
                    <p className="text-xs text-stone-500 mb-4 pb-3 border-b border-stone-100">
                      Covers: {w.regions}
                    </p>
                    <p className="text-xs sm:text-sm text-stone-600 leading-relaxed mb-4">
                      {w.character}
                    </p>
                  </div>
                  <div className="space-y-2">
                    <div className="text-xs font-medium text-stone-700 bg-stone-50 p-2.5 rounded-lg border border-stone-100">
                      Typical Temps: {w.temperature}
                    </div>
                    <div className="text-xs text-stone-600 bg-amber-50/70 p-2.5 rounded-lg border border-amber-200/50">
                      <span className="font-semibold text-amber-900">Travel tip:</span> {w.travelTip}
                    </div>
                  </div>
                </div>
              ))}
            </motion.div>
          )}

          {activeTab === 'etiquette' && (
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3 }}
              className="grid grid-cols-1 md:grid-cols-2 gap-6"
            >
              <div className="bg-white p-6 rounded-2xl border border-stone-200 shadow-xs">
                <h3 className="font-display text-2xl text-[#0F2E22] font-medium mb-3">
                  Sacred Temple Attire & Customs
                </h3>
                <ul className="space-y-3 text-xs sm:text-sm text-stone-600">
                  <li className="flex items-start gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-[#0F2E22] shrink-0 mt-0.5" />
                    <span>
                      <strong className="text-stone-900">Cover Shoulders and Knees:</strong> Light-colored or pure white clothing is traditional and deeply appreciated when visiting Buddhist and Hindu sanctuaries.
                    </span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-[#0F2E22] shrink-0 mt-0.5" />
                    <span>
                      <strong className="text-stone-900">Remove Footwear & Hats:</strong> All shoes, sandals, and headwear must be removed before entering holy shrine courtyards.
                    </span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-[#0F2E22] shrink-0 mt-0.5" />
                    <span>
                      <strong className="text-stone-900">Never Turn Back on Buddha:</strong> Avoid turning your back directly towards a Buddha statue for selfies or casual photos. Walk respectfully with hands lowered.
                    </span>
                  </li>
                </ul>
              </div>

              <div className="bg-white p-6 rounded-2xl border border-stone-200 shadow-xs">
                <h3 className="font-display text-2xl text-[#0F2E22] font-medium mb-3">
                  The Island Greeting: "Ayubowan"
                </h3>
                <p className="text-xs sm:text-sm text-stone-600 leading-relaxed mb-4">
                  "Ayubowan" (ආයුබෝවන්) translates to <em>"May you be gifted with a long and healthy life"</em>. It is uttered with palms pressed together gracefully before the chest with a slight bow.
                </p>
                <div className="p-4 bg-amber-50/70 border border-amber-200/60 rounded-xl text-xs text-stone-700">
                  <span className="font-semibold text-amber-900 block mb-1">
                    Currency & Gratuity Etiquette:
                  </span>
                  <p>
                    Sri Lankan Rupee (LKR) is standard for local markets. While service charges (10%) are often included in luxury dining bills, discretionary tips to dedicated safari trackers and chauffeur-guides are customary and deeply appreciated.
                  </p>
                </div>
              </div>
            </motion.div>
          )}

          {activeTab === 'tea' && (
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3 }}
              className="bg-white p-8 rounded-2xl border border-stone-200 shadow-xs"
            >
              <div className="max-w-3xl mb-6">
                <div className="flex items-center gap-2 text-xs font-semibold tracking-wider uppercase text-[#C46835] mb-1">
                  <Coffee className="w-4 h-4" />
                  <span>The Legacy of Pure Ceylon Tea</span>
                </div>
                <h3 className="font-display text-2xl sm:text-3xl text-[#0F2E22] font-medium mb-2">
                  Terroir of the Central Mountains
                </h3>
                <p className="text-xs sm:text-sm text-stone-600 leading-relaxed font-light">
                  Sri Lanka produces distinct tea profiles based purely on elevation. The rare combination of humid monsoon rains and dry winds produces golden liquors celebrated by royal houses worldwide.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-4 border-t border-stone-100">
                <div className="p-4 bg-stone-50 rounded-xl border border-stone-200/70">
                  <span className="text-[11px] font-semibold text-[#C46835] uppercase tracking-wider block mb-1">
                    High-Grown (Above 1,200m)
                  </span>
                  <h4 className="font-display text-lg text-stone-900 font-medium mb-1">
                    Nuwara Eliya & Dimbula
                  </h4>
                  <p className="text-xs text-stone-600 leading-relaxed">
                    Light, delicate golden infusion with fragrant citrus and cypress floral bouquets. Referred to as the Champagne of Ceylon teas.
                  </p>
                </div>

                <div className="p-4 bg-stone-50 rounded-xl border border-stone-200/70">
                  <span className="text-[11px] font-semibold text-[#C46835] uppercase tracking-wider block mb-1">
                    Mid-Grown (600m – 1,200m)
                  </span>
                  <h4 className="font-display text-lg text-stone-900 font-medium mb-1">
                    Kandy & Uva Province
                  </h4>
                  <p className="text-xs text-stone-600 leading-relaxed">
                    Rich, amber liquor with brisk astringency and mellow caramel malt undertones. Ideal for mid-afternoon refreshing tea.
                  </p>
                </div>

                <div className="p-4 bg-stone-50 rounded-xl border border-stone-200/70">
                  <span className="text-[11px] font-semibold text-[#C46835] uppercase tracking-wider block mb-1">
                    Artisanal Rarity
                  </span>
                  <h4 className="font-display text-lg text-stone-900 font-medium mb-1">
                    Ceylon Virgin Silver Tips
                  </h4>
                  <p className="text-xs text-stone-600 leading-relaxed">
                    Hand-harvested velvet pre-dawn buds dried gently under natural mountain sunlight. Produces a pale, sweet, antioxidant-rich nectar.
                  </p>
                </div>
              </div>
            </motion.div>
          )}
        </div>

        {/* Claim-to-Proof Adjacency: Traveler Testimonials */}
        <div className="pt-12 border-t border-stone-200">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-8">
            <div>
              <span className="text-xs font-semibold tracking-widest uppercase text-[#C46835] block mb-1">
                Sample journey stories
              </span>
              <h3 className="font-display text-2xl sm:text-3xl text-[#0F2E22] font-medium">
                Memories Crafted in Ceylon
              </h3>
            </div>
            <div className="flex items-center gap-1 mt-2 md:mt-0 text-amber-500">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
              ))}
              <span className="ml-2 text-xs font-semibold text-stone-700">
                Illustrative guest-story layout
              </span>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {TRAVELER_REVIEWS.map((rev, idx) => (
              <div
                key={idx}
                className="bg-white p-6 rounded-2xl border border-stone-200 shadow-xs flex flex-col justify-between"
              >
                <div>
                  <Quote className="w-6 h-6 text-[#C46835]/40 mb-3" />
                  <p className="text-xs sm:text-sm text-stone-700 italic leading-relaxed mb-6">
                    "{rev.quote}"
                  </p>
                </div>
                <div className="pt-4 border-t border-stone-100">
                  <span className="font-semibold text-stone-900 text-sm block">
                    {rev.author}
                  </span>
                  <div className="flex items-center gap-1.5 text-xs text-stone-500 mt-0.5">
                    <span>{rev.origin}</span>
                    <span aria-hidden="true">·</span>
                    <span className="text-[#C46835]">{rev.trip}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
