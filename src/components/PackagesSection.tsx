import React from 'react';
import { motion } from 'motion/react';
import {
  ArrowRight,
  Check,
  MapPin,
  Sparkles,
} from 'lucide-react';

import {
  CURRENCY_RATES,
  TRAVEL_PACKAGES,
} from '../data/travelData';

import type {
  Currency,
  DestinationRegion,
  DurationFilter,
  TravelPackage,
} from '../types';

/* =========================================================
   PROPS
========================================================= */

interface PackagesSectionProps {
  currentCurrency: Currency;

  /*
    If you want to pass the selected package
    into BookingModal, use onSelectPackage.
  */
  onSelectPackage?: (
    pkg: TravelPackage
  ) => void;

  /*
    If App.tsx currently only has
    handleOpenBooking(), this prop can be used.
  */
  onOpenBooking?: () => void;

  regionFilter?: DestinationRegion | 'All';

  durationFilter?: DurationFilter;
}

/* =========================================================
   REGION KEYWORDS
========================================================= */

const REGION_KEYWORDS: Record<
  DestinationRegion,
  string[]
> = {
  'Western Province': [
    'colombo',
  ],

  'North Central Province': [
    'anuradhapura',
    'polonnaruwa',
  ],

  'Cultural Triangle': [
    'sigiriya',
    'dambulla',
    'kandy',
  ],

  'Central Highlands': [
    'ella',
    'nuwara eliya',
    'nanu oya',
  ],

  'Wildlife Sanctuaries': [
    'yala',
    'udawalawe',
    'wilpattu',
    'minneriya',
  ],

  'Southern Coast': [
    'galle',
    'mirissa',
    'weligama',
    'bentota',
    'tangalle',
  ],

  'Wild East & North': [
    'trincomalee',
    'pasikudah',
    'arugam',
    'jaffna',
  ],
};

/* =========================================================
   DURATION FILTER
========================================================= */

const matchesDuration = (
  days: number,
  filter: DurationFilter
) => {
  switch (filter) {
    case '5-7':
      return days >= 5 && days <= 7;

    case '8-10':
      return days >= 8 && days <= 10;

    case '11-14':
      return days >= 11 && days <= 14;

    case '14+':
      return days >= 14;

    default:
      return true;
  }
};

/* =========================================================
   COMPONENT
========================================================= */

export const PackagesSection:
  React.FC<PackagesSectionProps> = ({
    currentCurrency,
    onSelectPackage,
    onOpenBooking,
    regionFilter = 'All',
    durationFilter = 'All',
  }) => {
    /* =====================================================
       PRICE FORMAT
    ===================================================== */

    const formatPrice = (
      usdPrice: number
    ) => {
      const config =
        CURRENCY_RATES[currentCurrency];

      const converted = Math.round(
        usdPrice * config.rate
      );

      return `${
        config.symbol
      }${converted.toLocaleString()}`;
    };

    /* =====================================================
       FILTER PACKAGES
    ===================================================== */

    const visiblePackages =
      TRAVEL_PACKAGES.filter((pkg) => {
        const durationMatch =
          matchesDuration(
            pkg.durationDays,
            durationFilter
          );

        if (regionFilter === 'All') {
          return durationMatch;
        }

        const keywords =
          REGION_KEYWORDS[regionFilter];

        const regionMatch =
          pkg.keyStops.some((stop) => {
            const normalized =
              stop.toLowerCase();

            return keywords.some(
              (keyword) =>
                normalized.includes(
                  keyword
                )
            );
          });

        return (
          durationMatch &&
          regionMatch
        );
      });

    /* =====================================================
       PACKAGE BOOKING
    ===================================================== */

    const handlePackageBooking = (
      pkg: TravelPackage
    ) => {
      /*
        Preferred:
        Send selected package to App.
      */

      if (onSelectPackage) {
        onSelectPackage(pkg);
        return;
      }

      /*
        Fallback:
        Just open BookingModal.
      */

      if (onOpenBooking) {
        onOpenBooking();
      }
    };

    return (
      <section
        id="packages"
        className="
          scroll-mt-20
          bg-[#ECEDE7]
          py-16
          sm:py-20
          lg:py-24
        "
      >
        <div
          className="
            mx-auto
            max-w-7xl
            px-4
            sm:px-6
            lg:px-8
          "
        >
          {/* =================================================
              HEADER
          ================================================= */}

          <div
            className="
              mx-auto
              mb-12
              max-w-3xl
              text-center
            "
          >
            <div
              className="
                mb-2
                inline-flex
                items-center
                gap-2
                text-xs
                font-semibold
                uppercase
                tracking-widest
                text-[#C46835]
              "
            >
              <Sparkles
                className="
                  h-3.5
                  w-3.5
                "
              />

              <span>
                Curated Journeys ·
                Private Expeditions
              </span>
            </div>

            <h2
              className="
                font-display
                mb-4
                text-3xl
                tracking-tight
                text-[#0F2E22]
                sm:text-5xl
              "
            >
              Handcrafted Ceylon Packages
            </h2>

            <p
              className="
                text-sm
                font-light
                text-stone-600
                sm:text-base
                [text-wrap:balance]
              "
            >
              Private chauffeur-guided
              journeys, boutique heritage
              stays, and carefully paced
              routes across Sri Lanka&apos;s
              most memorable landscapes.
            </p>

            {(regionFilter !== 'All' ||
              durationFilter !==
                'All') && (
              <p
                className="
                  mt-4
                  text-xs
                  text-stone-500
                "
              >
                Showing{' '}
                {
                  visiblePackages.length
                }{' '}
                journey
                {visiblePackages.length ===
                1
                  ? ''
                  : 's'}{' '}
                matching your finder.
              </p>
            )}
          </div>

          {/* =================================================
              NO RESULTS
          ================================================= */}

          {visiblePackages.length ===
          0 ? (
            <div
              className="
                rounded-2xl
                border
                border-stone-200
                bg-white
                p-10
                text-center
              "
            >
              <p
                className="
                  text-sm
                  font-medium
                  text-stone-800
                "
              >
                No package matches both
                filters yet.
              </p>

              <p
                className="
                  mt-1
                  text-xs
                  text-stone-500
                "
              >
                Try a broader region or
                journey length.
              </p>
            </div>
          ) : (
            /* ===============================================
               PACKAGE GRID
            =============================================== */

            <div
              className="
                grid
                grid-cols-1
                gap-6
                lg:gap-8
                xl:grid-cols-2
              "
            >
              {visiblePackages.map(
                (pkg, idx) => (
                  <motion.article
                    key={pkg.id}
                    initial={{
                      opacity: 0,
                      y: 24,
                    }}
                    whileInView={{
                      opacity: 1,
                      y: 0,
                    }}
                    viewport={{
                      once: true,
                      margin: '-50px',
                    }}
                    transition={{
                      duration: 0.4,
                      delay:
                        idx * 0.08,
                    }}
                    className="
                      group
                      flex
                      flex-col
                      justify-between
                      overflow-hidden
                      rounded-2xl
                      border
                      border-stone-200/90
                      bg-white
                      shadow-xs
                      transition-shadow
                      duration-300
                      hover:shadow-xl
                    "
                  >
                    <div>
                      {/* =====================================
                          IMAGE
                      ===================================== */}

                      <div
                        className="
                          relative
                          h-64
                          overflow-hidden
                          bg-stone-100
                          sm:h-72
                        "
                      >
                        <img
                          src={pkg.image}
                          alt={pkg.title}
                          loading="lazy"
                          decoding="async"
                          className="
                            h-full
                            w-full
                            object-cover
                            object-center
                            transition-transform
                            duration-700
                            ease-out
                            group-hover:scale-105
                          "
                        />

                        <div
                          className="
                            absolute
                            inset-0
                            bg-gradient-to-t
                            from-black/85
                            via-black/30
                            to-transparent
                          "
                        />

                        {/* BADGE */}

                        {pkg.badge && (
                          <div
                            className="
                              absolute
                              left-4
                              top-4
                              rounded-md
                              border
                              border-amber-300/30
                              bg-stone-900/80
                              px-3
                              py-1
                              text-xs
                              font-medium
                              text-amber-300
                              backdrop-blur-md
                            "
                          >
                            {pkg.badge}
                          </div>
                        )}

                        {/* PRICE */}

                        <div
                          className="
                            absolute
                            right-4
                            top-4
                            rounded-lg
                            border
                            border-white/20
                            bg-black/60
                            px-3.5
                            py-1.5
                            text-right
                            backdrop-blur-md
                          "
                        >
                          <span
                            className="
                              block
                              text-[10px]
                              uppercase
                              tracking-wider
                              text-stone-300
                            "
                          >
                            From / Person
                          </span>

                          <span
                            className="
                              font-display
                              text-lg
                              font-semibold
                              text-white
                              tabular-nums
                              sm:text-xl
                            "
                          >
                            {formatPrice(
                              pkg.basePriceUSD
                            )}
                          </span>
                        </div>

                        {/* IMAGE TITLE */}

                        <div
                          className="
                            absolute
                            bottom-4
                            left-4
                            right-4
                            text-white
                          "
                        >
                          <div
                            className="
                              mb-1
                              flex
                              flex-wrap
                              items-center
                              gap-2
                              text-xs
                              font-medium
                              text-amber-200
                            "
                          >
                            <span>
                              {
                                pkg.durationDays
                              }{' '}
                              Days /{' '}
                              {
                                pkg.durationNights
                              }{' '}
                              Nights
                            </span>

                            <span
                              aria-hidden="true"
                            >
                              ·
                            </span>

                            <span>
                              {pkg.style}
                            </span>
                          </div>

                          <h3
                            className="
                              font-display
                              text-2xl
                              font-medium
                              text-white
                              sm:text-3xl
                            "
                          >
                            {pkg.title}
                          </h3>
                        </div>
                      </div>

                      {/* =====================================
                          PACKAGE CONTENT
                      ===================================== */}

                      <div className="p-6">
                        <div
                          className="
                            mb-4
                            flex
                            flex-wrap
                            items-center
                            gap-x-2
                            gap-y-1
                            border-b
                            border-stone-100
                            pb-4
                            text-xs
                            text-stone-500
                          "
                        >
                          <span>
                            {
                              pkg.groupType
                            }
                          </span>

                          <span
                            aria-hidden="true"
                          >
                            ·
                          </span>

                          <span>
                            Best:{' '}
                            {
                              pkg.bestMonths
                            }
                          </span>
                        </div>

                        <p
                          className="
                            mb-6
                            text-xs
                            font-light
                            leading-relaxed
                            text-stone-600
                            sm:text-sm
                          "
                        >
                          {pkg.overview}
                        </p>

                        {/* KEY STOPS */}

                        <div className="mb-6">
                          <span
                            className="
                              mb-2
                              flex
                              items-center
                              gap-1
                              text-[11px]
                              font-semibold
                              uppercase
                              tracking-wider
                              text-stone-400
                            "
                          >
                            <MapPin
                              className="
                                h-3
                                w-3
                                text-[#C46835]
                              "
                            />

                            Key Expedition
                            Stops
                          </span>

                          <div
                            className="
                              flex
                              flex-wrap
                              gap-1.5
                            "
                          >
                            {pkg.keyStops.map(
                              (
                                stop
                              ) => (
                                <span
                                  key={
                                    stop
                                  }
                                  className="
                                    rounded-md
                                    bg-stone-100
                                    px-2.5
                                    py-1
                                    text-xs
                                    font-medium
                                    text-stone-800
                                  "
                                >
                                  {
                                    stop
                                  }
                                </span>
                              )
                            )}
                          </div>
                        </div>

                        {/* INCLUSIONS */}

                        <div className="mb-2">
                          <span
                            className="
                              mb-2.5
                              block
                              text-[11px]
                              font-semibold
                              uppercase
                              tracking-wider
                              text-stone-400
                            "
                          >
                            Package
                            Inclusions
                          </span>

                          <ul className="space-y-2">
                            {pkg.inclusions
                              .slice(
                                0,
                                4
                              )
                              .map(
                                (
                                  inclusion
                                ) => (
                                  <li
                                    key={
                                      inclusion
                                    }
                                    className="
                                      flex
                                      items-start
                                      gap-2
                                      text-xs
                                      text-stone-700
                                    "
                                  >
                                    <Check
                                      className="
                                        mt-0.5
                                        h-3.5
                                        w-3.5
                                        shrink-0
                                        text-[#0F2E22]
                                      "
                                    />

                                    <span>
                                      {
                                        inclusion
                                      }
                                    </span>
                                  </li>
                                )
                              )}
                          </ul>
                        </div>
                      </div>
                    </div>

                    {/* =====================================
                        BOOK BUTTON
                    ===================================== */}

                    <div
                      className="
                        flex
                        flex-col
                        justify-between
                        gap-3
                        border-t
                        border-stone-100
                        bg-stone-50
                        px-6
                        py-4
                        sm:flex-row
                        sm:items-center
                      "
                    >
                      <span
                        className="
                          text-xs
                          font-medium
                          text-stone-500
                        "
                      >
                        {pkg.idealFor}
                      </span>

                      <button
                        type="button"
                        onClick={() =>
                          handlePackageBooking(
                            pkg
                          )
                        }
                        className="
                          flex
                          shrink-0
                          cursor-pointer
                          items-center
                          justify-center
                          gap-2
                          rounded-lg
                          bg-[#0F2E22]
                          px-5
                          py-2.5
                          text-xs
                          font-semibold
                          uppercase
                          tracking-wider
                          text-white
                          shadow-xs
                          transition-colors
                          hover:bg-[#1F4D3A]
                        "
                      >
                        <span>
                          Customize & Book
                        </span>

                        <ArrowRight
                          className="
                            h-3.5
                            w-3.5
                          "
                        />
                      </button>
                    </div>
                  </motion.article>
                )
              )}
            </div>
          )}
        </div>
      </section>
    );
  };

export default PackagesSection;