import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Currency, Destination, TravelPackage } from '../types';
import { CURRENCY_RATES, DESTINATIONS, TRAVEL_PACKAGES } from '../data/travelData';
import {
  X,
  Calendar,
  Users,
  Compass,
  CheckCircle2,
  Sparkles,
  ArrowRight,
  ShieldCheck,
  Download,
} from 'lucide-react';


const getDefaultDepartureDate = () => {
  const date = new Date();
  date.setDate(date.getDate() + 30);
  return date.toISOString().slice(0, 10);
};

interface BookingModalProps {
  isOpen: boolean;
  onClose: () => void;
  currentCurrency: Currency;
  initialDestination?: Destination | null;
  initialPackage?: TravelPackage | null;
}

export const BookingModal: React.FC<BookingModalProps> = ({
  isOpen,
  onClose,
  currentCurrency,
  initialDestination,
  initialPackage,
}) => {
  const [selectedPackageId, setSelectedPackageId] = useState<string>(
    initialPackage?.id || ''
  );
  const [selectedDestinationId, setSelectedDestinationId] = useState<string>(
    initialDestination?.id || ''
  );
  const [departureDate, setDepartureDate] = useState<string>(getDefaultDepartureDate());
  const [durationDays, setDurationDays] = useState<number>(
    initialPackage?.durationDays || 12
  );
  const [adultsCount, setAdultsCount] = useState<number>(2);
  const [accommodationTier, setAccommodationTier] = useState<
    'Classic Heritage' | 'Luxury Boutique' | 'Private Villas'
  >('Luxury Boutique');

  const [selectedInterests, setSelectedInterests] = useState<string[]>([
    'Wildlife Safari & Leopards',
    'Scenic Mountain Rail',
    'UNESCO Ancient Ruins',
  ]);

  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [notes, setNotes] = useState('');

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [bookingRef, setBookingRef] = useState('');

  useEffect(() => {
    if (initialPackage) {
      setSelectedPackageId(initialPackage.id);
      setDurationDays(initialPackage.durationDays);
    }
  }, [initialPackage]);

  useEffect(() => {
    if (initialDestination) {
      setSelectedDestinationId(initialDestination.id);
    }
  }, [initialDestination]);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      setIsSubmitted(false);
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  if (!isOpen) return null;

  const interestOptions = [
    'Wildlife Safari & Leopards',
    'UNESCO Ancient Ruins',
    'Scenic Mountain Rail',
    'Ceylon Tea Tasting',
    'Blue Whale Watching',
    'Ayurveda & Spa Wellness',
    'South Coast Surfing',
  ];

  const toggleInterest = (interest: string) => {
    setSelectedInterests((prev) =>
      prev.includes(interest) ? prev.filter((i) => i !== interest) : [...prev, interest]
    );
  };

  // Dynamic price calculation
  const baseRatePerDay =
    accommodationTier === 'Classic Heritage' ? 220 : accommodationTier === 'Luxury Boutique' ? 290 : 380;
  const rawUsdEstimate = durationDays * baseRatePerDay * adultsCount;
  const currencyConfig = CURRENCY_RATES[currentCurrency];
  const convertedTotal = Math.round(rawUsdEstimate * currencyConfig.rate);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!fullName || !email) return;

    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      const randomCode = `CEY-2026-${Math.floor(1000 + Math.random() * 9000)}`;
      setBookingRef(randomCode);
      setIsSubmitted(true);
    }, 700);
  };

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-2 sm:p-4 lg:p-8">
        {/* Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 bg-black/80 backdrop-blur-xs cursor-pointer"
        />

        {/* Modal Dialog */}
        <motion.div
          initial={{ opacity: 0, scale: 0.96, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.96, y: 20 }}
          transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
          className="relative w-full max-w-3xl max-h-[96dvh] sm:max-h-[92vh] bg-[#E7E9E2] rounded-xl sm:rounded-2xl shadow-2xl overflow-hidden flex flex-col z-10 border border-stone-200"
        >
          {/* Header */}
          <div className="p-4 sm:p-6 bg-[#0F2E22] text-white flex items-center justify-between gap-3 shrink-0">
            <div>
              <div className="flex items-center gap-2 text-xs font-medium text-amber-300 mb-0.5">
                <Sparkles className="w-3.5 h-3.5" />
                <span>Bespoke Travel Atelier</span>
              </div>
              <h2 className="font-display text-2xl sm:text-3xl text-white font-medium">
                Design Your Ceylon Journey
              </h2>
            </div>
            <button
              onClick={onClose}
              className="p-2 bg-white/10 hover:bg-white/20 text-white rounded-full transition-colors cursor-pointer"
              aria-label="Close booking modal"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Body Content */}
          <div className="p-4 sm:p-6 md:p-8 overflow-y-auto flex-1">
            {!isSubmitted ? (
              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Step 1: Package or Destination Choice */}
                <div>
                  <label className="block text-xs font-semibold uppercase tracking-wider text-stone-600 mb-2">
                    Preferred Package or Primary Focus
                  </label>
                  <select
                    value={selectedPackageId}
                    onChange={(e) => {
                      const packageId = e.target.value;
                      setSelectedPackageId(packageId);
                      const selected = TRAVEL_PACKAGES.find((pkg) => pkg.id === packageId);
                      if (selected) setDurationDays(selected.durationDays);
                    }}
                    className="w-full bg-white border border-stone-300 rounded-lg px-3.5 py-2.5 text-xs sm:text-sm text-stone-800 focus:outline-none focus:border-[#C46835]"
                  >
                    <option value="">Custom Tailored Itinerary (Build from scratch)</option>
                    {TRAVEL_PACKAGES.map((p) => (
                      <option key={p.id} value={p.id}>
                        {p.title} ({p.durationDays} Days · {p.style})
                      </option>
                    ))}
                  </select>

                  <label className="block text-xs font-semibold uppercase tracking-wider text-stone-600 mt-4 mb-2">
                    Primary Destination (Optional)
                  </label>
                  <select
                    value={selectedDestinationId}
                    onChange={(e) => setSelectedDestinationId(e.target.value)}
                    className="w-full bg-white border border-stone-300 rounded-lg px-3.5 py-2.5 text-xs sm:text-sm text-stone-800 focus:outline-none focus:border-[#C46835]"
                  >
                    <option value="">No single destination preference</option>
                    {DESTINATIONS.map((destination) => (
                      <option key={destination.id} value={destination.id}>
                        {destination.name} · {destination.region}
                      </option>
                    ))}
                  </select>
                </div>

                {/* Step 2: Dates, Duration, Travelers */}
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                  <div>
                    <label className="block text-xs font-semibold uppercase tracking-wider text-stone-600 mb-1 flex items-center gap-1">
                      <Calendar className="w-3.5 h-3.5 text-[#C46835]" />
                      <span>Estimated Departure</span>
                    </label>
                    <input
                      type="date"
                      value={departureDate}
                      onChange={(e) => setDepartureDate(e.target.value)}
                      className="w-full bg-white border border-stone-300 rounded-lg px-3 py-2 text-xs sm:text-sm text-stone-800 focus:outline-none focus:border-[#C46835]"
                      required
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold uppercase tracking-wider text-stone-600 mb-1 flex items-center gap-1">
                      <Compass className="w-3.5 h-3.5 text-[#C46835]" />
                      <span>Trip Length (Days)</span>
                    </label>
                    <input
                      type="number"
                      min={3}
                      max={30}
                      value={durationDays}
                      onChange={(e) => setDurationDays(Number(e.target.value))}
                      className="w-full bg-white border border-stone-300 rounded-lg px-3 py-2 text-xs sm:text-sm text-stone-800 focus:outline-none focus:border-[#C46835]"
                      required
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold uppercase tracking-wider text-stone-600 mb-1 flex items-center gap-1">
                      <Users className="w-3.5 h-3.5 text-[#C46835]" />
                      <span>Travelers (Adults)</span>
                    </label>
                    <input
                      type="number"
                      min={1}
                      max={16}
                      value={adultsCount}
                      onChange={(e) => setAdultsCount(Number(e.target.value))}
                      className="w-full bg-white border border-stone-300 rounded-lg px-3 py-2 text-xs sm:text-sm text-stone-800 focus:outline-none focus:border-[#C46835]"
                      required
                    />
                  </div>
                </div>

                {/* Step 3: Accommodation Tier */}
                <div>
                  <label className="block text-xs font-semibold uppercase tracking-wider text-stone-600 mb-2">
                    Accommodation Tier
                  </label>
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                    {(
                      [
                        { id: 'Classic Heritage', desc: 'Charming colonial boutique lodges' },
                        { id: 'Luxury Boutique', desc: '5-star tea chalets & safari suites' },
                        { id: 'Private Villas', desc: 'Exclusive private estates with butler' },
                      ] as const
                    ).map((tier) => (
                      <button
                        type="button"
                        key={tier.id}
                        onClick={() => setAccommodationTier(tier.id)}
                        className={`p-3 text-left rounded-xl border transition-all cursor-pointer ${
                          accommodationTier === tier.id
                            ? 'bg-white border-[#0F2E22] ring-2 ring-[#0F2E22]/15 shadow-xs'
                            : 'bg-white border-stone-200 hover:border-stone-300'
                        }`}
                      >
                        <span className="block text-xs font-bold text-stone-900 mb-0.5">
                          {tier.id}
                        </span>
                        <span className="block text-[11px] text-stone-500 leading-tight">
                          {tier.desc}
                        </span>
                      </button>
                    ))}
                  </div>
                </div>

                {/* Step 4: Tailored Interests */}
                <div>
                  <label className="block text-xs font-semibold uppercase tracking-wider text-stone-600 mb-2">
                    Experiences You Wish to Include
                  </label>
                  <div className="flex flex-wrap gap-2">
                    {interestOptions.map((item) => {
                      const selected = selectedInterests.includes(item);
                      return (
                        <button
                          type="button"
                          key={item}
                          onClick={() => toggleInterest(item)}
                          className={`px-3 py-1.5 text-xs rounded-lg transition-colors cursor-pointer border ${
                            selected
                              ? 'bg-[#0F2E22] text-white border-[#0F2E22]'
                              : 'bg-white text-stone-700 border-stone-200 hover:bg-stone-50'
                          }`}
                        >
                          {item}
                        </button>
                      );
                    })}
                  </div>
                </div>

                {/* Live Estimated Investment Bar */}
                <div className="p-4 bg-emerald-950 text-white rounded-xl flex flex-col sm:flex-row items-center justify-between gap-3 shadow-inner">
                  <div>
                    <span className="text-[10px] uppercase tracking-wider text-amber-300 block font-semibold">
                      Estimated Private Journey Investment
                    </span>
                    <span className="text-xs text-stone-300">
                      For {adultsCount} {adultsCount === 1 ? 'traveler' : 'travelers'} · {durationDays} Days · {accommodationTier}
                    </span>
                  </div>
                  <div className="text-right">
                    <span className="font-display text-2xl font-semibold text-white tabular-nums">
                      {currencyConfig.symbol}{convertedTotal.toLocaleString()}
                    </span>
                    <span className="block text-[10px] text-stone-400">
                      All-inclusive private car & chauffeur
                    </span>
                  </div>
                </div>

                {/* Step 5: Contact Details */}
                <div className="space-y-4 pt-2 border-t border-stone-200">
                  <h4 className="text-xs font-semibold uppercase tracking-wider text-stone-700">
                    Lead Traveler Information
                  </h4>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs text-stone-600 mb-1">
                        Full Name *
                      </label>
                      <input
                        type="text"
                        placeholder="e.g. Eleanor Vance"
                        value={fullName}
                        onChange={(e) => setFullName(e.target.value)}
                        className="w-full bg-white border border-stone-300 rounded-lg px-3 py-2 text-xs sm:text-sm text-stone-800 focus:outline-none focus:border-[#C46835]"
                        required
                      />
                    </div>
                    <div>
                      <label className="block text-xs text-stone-600 mb-1">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        placeholder="e.g. eleanor@example.com"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className="w-full bg-white border border-stone-300 rounded-lg px-3 py-2 text-xs sm:text-sm text-stone-800 focus:outline-none focus:border-[#C46835]"
                        required
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs text-stone-600 mb-1">
                      Phone / WhatsApp (Optional)
                    </label>
                    <input
                      type="tel"
                      placeholder="+1 (555) 000-0000"
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      className="w-full bg-white border border-stone-300 rounded-lg px-3 py-2 text-xs sm:text-sm text-stone-800 focus:outline-none focus:border-[#C46835]"
                    />
                  </div>

                  <div>
                    <label className="block text-xs text-stone-600 mb-1">
                      Special Celebrations or Dietary Wishes (Optional)
                    </label>
                    <textarea
                      rows={2}
                      placeholder="e.g. 10th anniversary trip, desire quiet rooms with views, plant-based dining preferences..."
                      value={notes}
                      onChange={(e) => setNotes(e.target.value)}
                      className="w-full bg-white border border-stone-300 rounded-lg px-3 py-2 text-xs sm:text-sm text-stone-800 focus:outline-none focus:border-[#C46835]"
                    />
                  </div>
                </div>

                {/* Submit Action */}
                <div className="pt-4 flex flex-col sm:flex-row items-center justify-between gap-4">
                  <div className="flex items-center gap-2 text-xs text-stone-500">
                    <ShieldCheck className="w-4 h-4 text-[#0F2E22]" />
                    <span>Demo request form · connect an email or CRM endpoint before launch</span>
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full sm:w-auto px-8 py-3.5 bg-[#C46835] hover:bg-[#DF8452] text-white text-xs font-semibold uppercase tracking-wider rounded-lg transition-colors cursor-pointer flex items-center justify-center gap-2 shadow-md disabled:opacity-50"
                  >
                    {isSubmitting ? (
                      <span>Drafting Proposal...</span>
                    ) : (
                      <>
                        <span>Submit Expedition Request</span>
                        <ArrowRight className="w-4 h-4" />
                      </>
                    )}
                  </button>
                </div>
              </form>
            ) : (
              /* Confirmation Screen */
              <div className="py-8 text-center space-y-6">
                <div className="w-16 h-16 bg-emerald-100 text-[#0F2E22] rounded-full flex items-center justify-center mx-auto">
                  <CheckCircle2 className="w-10 h-10" />
                </div>

                <div>
                  <span className="text-xs font-semibold uppercase tracking-widest text-[#C46835] block mb-1">
                    Expedition Dossier Reserved
                  </span>
                  <h3 className="font-display text-3xl text-[#0F2E22] font-medium mb-2">
                    Ayubowan, {fullName}!
                  </h3>
                  <p className="text-xs sm:text-sm text-stone-600 max-w-md mx-auto leading-relaxed">
                    Your itinerary request has been prepared in this demo. Connect the form to your email, CRM, or booking API before production launch.
                  </p>
                </div>

                <div className="p-6 bg-white rounded-2xl border border-stone-200 max-w-md mx-auto text-left shadow-xs space-y-3">
                  <div className="flex justify-between items-center pb-3 border-b border-stone-100">
                    <span className="text-xs text-stone-400">Expedition Reference:</span>
                    <span className="font-mono text-xs font-bold text-stone-900 bg-stone-100 px-2 py-1 rounded-sm">
                      {bookingRef}
                    </span>
                  </div>
                  <div className="flex justify-between text-xs text-stone-700">
                    <span className="text-stone-500">Departure:</span>
                    <span className="font-medium">{departureDate}</span>
                  </div>
                  <div className="flex justify-between text-xs text-stone-700">
                    <span className="text-stone-500">Party Size:</span>
                    <span className="font-medium">{adultsCount} Guests ({durationDays} Days)</span>
                  </div>
                  <div className="flex justify-between text-xs text-stone-700">
                    <span className="text-stone-500">Accommodation:</span>
                    <span className="font-medium">{accommodationTier}</span>
                  </div>
                  <div className="flex justify-between text-xs text-stone-700 pt-2 border-t border-stone-100">
                    <span className="text-stone-500">Estimated Total:</span>
                    <span className="font-semibold text-[#0F2E22] tabular-nums">
                      {currencyConfig.symbol}{convertedTotal.toLocaleString()}
                    </span>
                  </div>
                </div>

                <div className="flex flex-col sm:flex-row items-center justify-center gap-3 pt-2">
                  <button
                    onClick={() => {
                      window.print();
                    }}
                    className="w-full sm:w-auto px-5 py-2.5 bg-stone-100 hover:bg-stone-200 text-stone-800 text-xs font-semibold rounded-lg transition-colors cursor-pointer flex items-center justify-center gap-1.5"
                  >
                    <Download className="w-3.5 h-3.5" />
                    <span>Print / Save PDF</span>
                  </button>
                  <button
                    onClick={onClose}
                    className="w-full sm:w-auto px-6 py-2.5 bg-[#0F2E22] hover:bg-[#1F4D3A] text-white text-xs font-semibold rounded-lg transition-colors cursor-pointer"
                  >
                    Return to Island Guide
                  </button>
                </div>
              </div>
            )}
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};
