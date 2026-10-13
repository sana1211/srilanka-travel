import React from 'react';
import { AnimatePresence, motion } from 'motion/react';
import { ArrowRight, Eye } from 'lucide-react';
import { DESTINATIONS } from '../data/travelData';
import type { Destination, DestinationRegion } from '../types';

interface DestinationShowcaseProps {
  activeRegionFilter: DestinationRegion | 'All';
  onFilterChange: (region: DestinationRegion | 'All') => void;
  onViewDestination: (destination: Destination) => void;
  onPlanTripForDestination?: (destination: Destination) => void;
}

const filterOptions: Array<{ value: DestinationRegion | 'All'; label: string }> = [
  { value: 'All', label: 'All Island Sanctuaries' },
  { value: 'Western Province', label: 'Western Province' },
  { value: 'North Central Province', label: 'North Central' },
  { value: 'Cultural Triangle', label: 'Cultural Triangle' },
  { value: 'Central Highlands', label: 'Central Highlands' },
  { value: 'Wildlife Sanctuaries', label: 'Wildlife Sanctuaries' },
  { value: 'Southern Coast', label: 'Southern Coast' },
  { value: 'Wild East & North', label: 'East & North' },
];

export const DestinationShowcase: React.FC<DestinationShowcaseProps> = ({
  activeRegionFilter,
  onFilterChange,
  onViewDestination,
  onPlanTripForDestination,
}) => {
  const filteredDestinations =
    activeRegionFilter === 'All'
      ? DESTINATIONS
      : DESTINATIONS.filter((destination) => destination.region === activeRegionFilter);

  const handlePlanTrip = (destination: Destination) => {
    if (onPlanTripForDestination) {
      onPlanTripForDestination(destination);
      return;
    }
    onViewDestination(destination);
  };

  return (
    <section id="destinations" className="scroll-mt-20 bg-[#E7E9E2] py-16 sm:py-20 lg:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-12 flex flex-col justify-between gap-5 md:flex-row md:items-end">
          <h2 className="font-display text-3xl tracking-tight text-[#0F2E22] sm:text-5xl">
            Iconic Destinations of Sri Lanka
          </h2>
        </div>

        <div className="no-scrollbar mb-10 flex items-center gap-1.5 overflow-x-auto pb-4" aria-label="Filter destinations by region">
          {filterOptions.map((option) => {
            const isActive = activeRegionFilter === option.value;
            return (
              <button
                type="button"
                key={option.value}
                onClick={() => onFilterChange(option.value)}
                aria-pressed={isActive}
                className={`whitespace-nowrap rounded-lg px-4 py-2 text-xs font-medium transition-colors cursor-pointer focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#C46835] ${
                  isActive
                    ? 'bg-[#0F2E22] text-white shadow-xs'
                    : 'bg-stone-200/60 text-stone-700 hover:bg-stone-200 hover:text-stone-900'
                }`}
              >
                {option.label}
              </button>
            );
          })}
        </div>

        {filteredDestinations.length === 0 ? (
          <div className="rounded-2xl border border-stone-200 bg-white p-10 text-center text-sm text-stone-600">
            No destinations are available for this region yet. Try another region.
          </div>
        ) : (
          <motion.div layout className="grid grid-cols-1 gap-5 sm:grid-cols-2 sm:gap-6 lg:gap-8 xl:grid-cols-3">
            <AnimatePresence mode="popLayout">
              {filteredDestinations.map((dest, index) => (
                <motion.article
                  key={dest.id}
                  layout
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.96 }}
                  transition={{ duration: 0.3, delay: index * 0.03 }}
                  className="group flex flex-col overflow-hidden rounded-2xl border border-stone-200/80 bg-white shadow-xs transition-shadow duration-300 hover:shadow-xl"
                >
                  <div className="relative aspect-[4/3] overflow-hidden bg-stone-100">
                    <img
                      src={dest.image}
                      alt={`${dest.name}, Sri Lanka`}
                      loading="lazy"
                      decoding="async"
                      className="h-full w-full object-cover object-center transition-transform duration-700 ease-out group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/25 to-transparent" />

                    <div className="absolute left-4 right-4 top-4 flex items-center justify-between gap-3 text-xs font-medium text-white/90">
                      <span className="rounded-md bg-black/40 px-2.5 py-1 text-[11px] backdrop-blur-sm">{dest.region}</span>
                      <span className="rounded-md bg-black/40 px-2.5 py-0.5 font-serif text-sm italic text-amber-200 backdrop-blur-sm">{dest.sinhalaName}</span>
                    </div>

                    <div className="absolute bottom-4 left-4 right-4 text-white">
                      <h3 className="font-display text-2xl font-medium text-white transition-colors group-hover:text-amber-200">{dest.name}</h3>
                      <p className="mt-0.5 line-clamp-1 text-xs font-light text-stone-200">{dest.tagline}</p>
                    </div>
                  </div>

                  <div className="flex flex-1 flex-col justify-between p-5">
                    <div>
                      <div className="mb-3 flex flex-wrap items-center gap-x-2 gap-y-1 text-xs text-stone-500">
                        <span>{dest.elevation}</span>
                        <span aria-hidden="true">·</span>
                        <span>Best {dest.bestTimeToVisit}</span>
                        <span aria-hidden="true">·</span>
                        <span>{dest.recommendedDuration}</span>
                      </div>

                      <p className="mb-4 line-clamp-3 text-xs leading-relaxed text-stone-600 sm:text-sm">{dest.description}</p>

                      <div className="mb-5 space-y-1.5 border-t border-stone-100 pt-3">
                        {dest.highlights.slice(0, 2).map((highlight) => (
                          <div key={highlight} className="flex items-start gap-2 text-xs text-stone-700">
                            <span className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-[#C46835]" />
                            <span className="line-clamp-2">{highlight}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div className="flex items-center gap-2 border-t border-stone-100 pt-2">
                      <button
                        type="button"
                        onClick={() => onViewDestination(dest)}
                        className="flex flex-1 cursor-pointer items-center justify-center gap-1.5 rounded-lg bg-stone-100 px-3 py-2 text-xs font-semibold text-stone-800 transition-colors hover:bg-stone-200"
                      >
                        <Eye className="h-3.5 w-3.5" />
                        <span>Discover Story</span>
                      </button>
                      <button
                        type="button"
                        onClick={() => handlePlanTrip(dest)}
                        className="flex cursor-pointer items-center justify-center gap-1 rounded-lg bg-[#0F2E22] px-4 py-2 text-xs font-semibold text-white transition-colors hover:bg-[#1F4D3A]"
                        aria-label={`Plan a trip including ${dest.name}`}
                      >
                        <span>Plan</span>
                        <ArrowRight className="h-3.5 w-3.5" />
                      </button>
                    </div>
                  </div>
                </motion.article>
              ))}
            </AnimatePresence>
          </motion.div>
        )}
      </div>
    </section>
  );
};

export default DestinationShowcase;
