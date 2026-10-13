import React, { useMemo, useState } from 'react';
import { motion } from 'motion/react';
import {
  ArrowRight,
  BedDouble,
  Calculator,
  CalendarDays,
  Info,
  Minus,
  Plus,
  Users,
} from 'lucide-react';
import { CURRENCY_RATES } from '../data/travelData';
import { Currency } from '../types';

interface TripCostEstimatorProps {
  currentCurrency: Currency;
  onOpenBooking: () => void;
}

type AccommodationTier = 'Classic Heritage' | 'Luxury Boutique' | 'Private Villas';

const tierConfig: Record<AccommodationTier, { usdPerPersonDay: number; description: string }> = {
  'Classic Heritage': {
    usdPerPersonDay: 220,
    description: 'Characterful heritage hotels and carefully selected boutique stays.',
  },
  'Luxury Boutique': {
    usdPerPersonDay: 290,
    description: 'Premium boutique hotels, tea estates, safari camps, and elevated service.',
  },
  'Private Villas': {
    usdPerPersonDay: 380,
    description: 'High-end villas, private suites, premium stays, and enhanced exclusivity.',
  },
};

export const TripCostEstimator: React.FC<TripCostEstimatorProps> = ({
  onOpenBooking,
}) => {
  const [days, setDays] = useState(12);
  const [travelers, setTravelers] = useState(2);
  const [tier, setTier] = useState<AccommodationTier>('Luxury Boutique');

  // Keep the estimator in Sri Lankan Rupees regardless of the navbar currency.
  const currency = CURRENCY_RATES.LKR;

  const estimate = useMemo(() => {
    const usdTotal = days * travelers * tierConfig[tier].usdPerPersonDay;
    const converted = Math.round(usdTotal * currency.rate);
    const perPerson = Math.round((usdTotal / travelers) * currency.rate);

    return { converted, perPerson };
  }, [days, travelers, tier, currency.rate]);

  const formatMoney = (value: number) => `${currency.symbol}${value.toLocaleString()}`;

  return (
    <section id="cost-estimator" className="scroll-mt-20 bg-[#E7E9E2] py-16 sm:py-20 lg:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto mb-12 max-w-3xl text-center">
          <div className="mb-3 inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.2em] text-[#C46835]">
            <Calculator className="h-4 w-4" />
            <span>Trip Cost Estimator</span>
          </div>

          <h2 className="font-display text-3xl tracking-tight text-[#0F2E22] sm:text-5xl">
            Build a First Estimate for Your Journey
          </h2>

          <p className="mt-4 text-sm font-light leading-7 text-stone-600 sm:text-base">
            Choose your journey length, number of travelers, and preferred accommodation style for a quick planning estimate before you customize the details.
          </p>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.5 }}
          className="mx-auto grid max-w-6xl overflow-hidden rounded-3xl border border-stone-200 bg-white shadow-xl shadow-stone-900/5 lg:grid-cols-[1.15fr_0.85fr]"
        >
          <div className="p-6 sm:p-8 lg:p-10">
            <div className="space-y-8">
              <div>
                <div className="mb-3 flex items-center justify-between gap-4">
                  <div className="flex items-center gap-2">
                    <CalendarDays className="h-4 w-4 text-[#C46835]" />
                    <label htmlFor="estimate-days" className="text-sm font-semibold text-stone-900">
                      Journey length
                    </label>
                  </div>
                  <span className="rounded-full bg-[#0F2E22] px-3 py-1 text-xs font-semibold text-white">
                    {days} Days
                  </span>
                </div>

                <input
                  id="estimate-days"
                  type="range"
                  min={5}
                  max={21}
                  step={1}
                  value={days}
                  onChange={(event) => setDays(Number(event.target.value))}
                  className="w-full accent-[#C46835]"
                />

                <div className="mt-2 flex justify-between text-[10px] uppercase tracking-wider text-stone-400">
                  <span>5 days</span>
                  <span>21 days</span>
                </div>
              </div>

              <div>
                <div className="mb-3 flex items-center gap-2">
                  <Users className="h-4 w-4 text-[#C46835]" />
                  <span className="text-sm font-semibold text-stone-900">Travelers</span>
                </div>

                <div className="flex w-full max-w-xs items-center justify-between rounded-xl border border-stone-200 bg-stone-50 p-2">
                  <button
                    type="button"
                    onClick={() => setTravelers((value) => Math.max(1, value - 1))}
                    disabled={travelers <= 1}
                    aria-label="Decrease travelers"
                    className="flex h-10 w-10 items-center justify-center rounded-lg bg-white text-stone-700 shadow-sm transition hover:bg-stone-100 disabled:cursor-not-allowed disabled:opacity-40"
                  >
                    <Minus className="h-4 w-4" />
                  </button>

                  <div className="text-center">
                    <span className="block text-xl font-semibold tabular-nums text-[#0F2E22]">{travelers}</span>
                    <span className="text-[10px] uppercase tracking-wider text-stone-400">
                      {travelers === 1 ? 'Traveler' : 'Travelers'}
                    </span>
                  </div>

                  <button
                    type="button"
                    onClick={() => setTravelers((value) => Math.min(8, value + 1))}
                    disabled={travelers >= 8}
                    aria-label="Increase travelers"
                    className="flex h-10 w-10 items-center justify-center rounded-lg bg-white text-stone-700 shadow-sm transition hover:bg-stone-100 disabled:cursor-not-allowed disabled:opacity-40"
                  >
                    <Plus className="h-4 w-4" />
                  </button>
                </div>
              </div>

              <div>
                <div className="mb-3 flex items-center gap-2">
                  <BedDouble className="h-4 w-4 text-[#C46835]" />
                  <span className="text-sm font-semibold text-stone-900">Accommodation style</span>
                </div>

                <div className="grid gap-3 sm:grid-cols-3">
                  {(Object.keys(tierConfig) as AccommodationTier[]).map((option) => {
                    const selected = tier === option;
                    return (
                      <button
                        key={option}
                        type="button"
                        onClick={() => setTier(option)}
                        aria-pressed={selected}
                        className={`rounded-xl border p-4 text-left transition-all duration-200 ${
                          selected
                            ? 'border-[#C46835] bg-[#C46835]/5 shadow-sm'
                            : 'border-stone-200 bg-white hover:border-stone-300 hover:bg-stone-50'
                        }`}
                      >
                        <span className={`block text-xs font-semibold ${selected ? 'text-[#C46835]' : 'text-stone-900'}`}>
                          {option}
                        </span>
                        <span className="mt-1 block text-[10px] leading-4 text-stone-500">
                          {tierConfig[option].description}
                        </span>
                      </button>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>

          <div className="relative flex flex-col justify-between overflow-hidden bg-[#0F2E22] p-6 text-white sm:p-8 lg:p-10">
            <div className="absolute -right-20 -top-20 h-56 w-56 rounded-full bg-amber-300/10 blur-3xl" />

            <div className="relative">
              <span className="text-xs font-semibold uppercase tracking-[0.18em] text-amber-300">
                Estimated Journey Total
              </span>

              <div className="mt-5">
                <span className="font-display text-4xl font-medium tabular-nums sm:text-5xl">
                  {formatMoney(estimate.converted)}
                </span>
                <span className="ml-2 text-xs text-stone-300">for {travelers}</span>
              </div>

              <p className="mt-2 text-sm text-stone-300">
                Approx. {formatMoney(estimate.perPerson)} per person
              </p>

              <div className="my-7 h-px bg-white/10" />

              <dl className="space-y-3 text-xs">
                <div className="flex items-center justify-between gap-4">
                  <dt className="text-stone-400">Journey</dt>
                  <dd className="font-medium text-white">{days} days</dd>
                </div>
                <div className="flex items-center justify-between gap-4">
                  <dt className="text-stone-400">Travelers</dt>
                  <dd className="font-medium text-white">{travelers}</dd>
                </div>
                <div className="flex items-center justify-between gap-4">
                  <dt className="text-stone-400">Stay style</dt>
                  <dd className="text-right font-medium text-white">{tier}</dd>
                </div>
                <div className="flex items-center justify-between gap-4">
                  <dt className="text-stone-400">Currency</dt>
                  <dd className="font-medium text-white">LKR</dd>
                </div>
              </dl>
            </div>

            <div className="relative mt-8">
              <div className="mb-5 flex items-start gap-2 rounded-xl border border-white/10 bg-white/[0.06] p-3 text-[10px] leading-5 text-stone-300">
                <Info className="mt-0.5 h-3.5 w-3.5 shrink-0 text-amber-300" />
                <span>
                  Planning estimate only. Final pricing depends on travel dates, selected hotels, room configuration, transport, activities, park fees, and availability.
                </span>
              </div>

              <button
                type="button"
                onClick={onOpenBooking}
                className="group flex w-full items-center justify-center gap-2 rounded-xl bg-[#C46835] px-5 py-3.5 text-xs font-semibold uppercase tracking-wider text-white transition-colors hover:bg-[#DF8452]"
              >
                <span>Customize This Journey</span>
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
