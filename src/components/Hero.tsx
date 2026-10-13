import React, { useState } from 'react';
import { motion } from 'motion/react';

import type {
  DestinationRegion,
  DurationFilter,
} from '../types';

import {
  Compass,
  MapPin,
  Calendar,
  ArrowRight,
  ShieldCheck,
} from 'lucide-react';

import heroImg from '../assets/images/hero_sri_lanka_sigiriya_1791130674684.jpg';

/* =========================================================
   PROPS
========================================================= */

interface HeroProps {
  onExploreClick: () => void;

  onFilterSelect: (
    region: DestinationRegion | 'All'
  ) => void;

  onOpenBooking: () => void;
}

/* =========================================================
   HERO
========================================================= */

export const Hero: React.FC<HeroProps> = ({
  onExploreClick,
  onFilterSelect,
  onOpenBooking,
}) => {
  /* =======================================================
     FILTER STATE
  ======================================================= */

  const [
    selectedRegion,
    setSelectedRegion,
  ] = useState<
    DestinationRegion | 'All'
  >('All');

  const [
    selectedDuration,
    setSelectedDuration,
  ] = useState<DurationFilter>(
    '11-14'
  );

  /* =======================================================
     QUICK SEARCH
  ======================================================= */

  const handleQuickSearch = (
    e: React.FormEvent
  ) => {
    e.preventDefault();

    onFilterSelect(selectedRegion);

    const elem =
      document.getElementById(
        'destinations'
      );

    elem?.scrollIntoView({
      behavior: 'smooth',
      block: 'start',
    });
  };

  /* =======================================================
     EXPLORE
  ======================================================= */

  const handleExplore = () => {
    onExploreClick();

    const elem =
      document.getElementById(
        'destinations'
      );

    elem?.scrollIntoView({
      behavior: 'smooth',
      block: 'start',
    });
  };

  return (
    <section
      className="
        relative
        min-h-[100svh]
        flex
        items-center
        justify-center
        overflow-hidden
        pt-24
        pb-10
        sm:pt-28
        sm:pb-14
        lg:pt-24
        lg:pb-16
      "
    >
      {/* ===================================================
          BACKGROUND
      =================================================== */}

      <div className="absolute inset-0 z-0">
        <img
          src={heroImg}
          alt="Sigiriya Rock Fortress rising through tropical mist in Sri Lanka"
          className="
            w-full
            h-full
            object-cover
            object-center
            scale-105
            transition-transform
            duration-1000
            ease-out
          "
          referrerPolicy="no-referrer"
        />

        <div
          className="
            absolute
            inset-0
            bg-gradient-to-t
            from-[#0B241A]/95
            via-black/55
            to-black/35
          "
        />

        <div
          className="
            absolute
            inset-0
            bg-[radial-gradient(circle_at_center,transparent_20%,rgba(0,0,0,0.65)_100%)]
            pointer-events-none
          "
        />
      </div>

      {/* ===================================================
          HERO CONTENT
      =================================================== */}

      <div
        className="
          relative
          z-10
          max-w-7xl
          mx-auto
          px-4
          sm:px-6
          lg:px-8
          w-full
          text-center
        "
      >
        {/* INTRO BADGE */}

        <motion.div
          initial={{
            opacity: 0,
            y: 12,
          }}
          animate={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            duration: 0.6,
            ease: [
              0.16,
              1,
              0.3,
              1,
            ],
          }}
          className="
            mb-5
            flex
            items-center
            justify-center
          "
        >
          
          
            
        </motion.div>

        {/* =================================================
            MAIN TITLE
        ================================================= */}

        <motion.h1
          initial={{
            opacity: 0,
            y: 24,
          }}
          animate={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            duration: 0.7,
            delay: 0.1,
            ease: [
              0.16,
              1,
              0.3,
              1,
            ],
          }}
          className="
            font-display
            text-[clamp(2.35rem,10vw,4rem)]
            sm:text-6xl
            md:text-7xl
            lg:text-8xl
            font-normal
            text-white
            tracking-tight
            leading-[1.08]
            max-w-6xl
            mx-auto
            mb-6
            text-balance
          "
        >
          <span
            className="
              mb-2
              block
              text-[0.55em]
              tracking-[0.08em]
              text-amber-300
              sm:mb-3
            "
          >
            AYUBOWAN
          </span>

          <span className="block">
            Welcome to the Heart of
          </span>

          <span className="block">
            Sri Lanka
          </span>
        </motion.h1>

        {/* =================================================
            DESCRIPTION
        ================================================= */}

        <motion.p
          initial={{
            opacity: 0,
            y: 20,
          }}
          animate={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            duration: 0.7,
            delay: 0.2,
            ease: [
              0.16,
              1,
              0.3,
              1,
            ],
          }}
          className="
            text-sm
            sm:text-lg
            md:text-xl
            text-stone-200/90
            max-w-4xl
            mx-auto
            font-light
            leading-relaxed
            mb-10
            text-balance
          "
        >
          Step into a tropical paradise
          of timeless heritage,
          breathtaking landscapes, wild
          adventures and warm island
          hospitality.
        </motion.p>

        {/* =================================================
            ACTION BUTTONS
        ================================================= */}

        <motion.div
          initial={{
            opacity: 0,
            y: 20,
          }}
          animate={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            duration: 0.7,
            delay: 0.3,
            ease: [
              0.16,
              1,
              0.3,
              1,
            ],
          }}
          className="
            flex
            flex-col
            sm:flex-row
            items-stretch
            sm:items-center
            justify-center
            gap-3
            sm:gap-4
            mb-10
            sm:mb-14
          "
        >
          <button
            type="button"
            onClick={onOpenBooking}
            className="
              w-full
              sm:w-auto
              px-6
              sm:px-8
              py-3.5
              bg-[#C46835]
              hover:bg-[#DF8452]
              text-white
              text-sm
              font-semibold
              tracking-wider
              uppercase
              rounded-md
              shadow-lg
              shadow-black/30
              transition-all
              duration-200
              cursor-pointer
              flex
              items-center
              justify-center
              gap-2
              group
            "
          >
            <span>
              Design Bespoke Journey
            </span>

            <ArrowRight
              className="
                w-4
                h-4
                group-hover:translate-x-1
                transition-transform
              "
            />
          </button>

          <button
            type="button"
            onClick={handleExplore}
            className="
              w-full
              sm:w-auto
              px-6
              sm:px-8
              py-3.5
              bg-white/10
              hover:bg-white/20
              text-white
              text-sm
              font-semibold
              tracking-wider
              uppercase
              rounded-md
              border
              border-white/20
              backdrop-blur-sm
              transition-all
              duration-200
              cursor-pointer
              text-center
            "
          >
            Explore Highlights
          </button>
        </motion.div>

        {/* =================================================
            QUICK EXPEDITION FINDER
        ================================================= */}

        <motion.div
          initial={{
            opacity: 0,
            y: 24,
          }}
          animate={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            duration: 0.7,
            delay: 0.4,
            ease: [
              0.16,
              1,
              0.3,
              1,
            ],
          }}
          className="
            max-w-4xl
            mx-auto
            bg-stone-900/80
            backdrop-blur-md
            border
            border-stone-700/60
            p-3
            sm:p-4
            rounded-xl
            shadow-2xl
            text-left
          "
        >
          <form
            onSubmit={handleQuickSearch}
            className="
              grid
              grid-cols-1
              md:grid-cols-3
              gap-3
              items-stretch
              md:items-center
            "
          >
            {/* REGION */}

            <div
              className="
                px-3
                py-2
                bg-stone-800/60
                rounded-lg
                border
                border-stone-700/50
              "
            >
              <label
                className="
                  block
                  text-[11px]
                  font-medium
                  text-stone-400
                  uppercase
                  tracking-wider
                  mb-1
                "
              >
                <span
                  className="
                    flex
                    items-center
                    gap-1.5
                  "
                >
                  <MapPin
                    className="
                      w-3
                      h-3
                      text-amber-400
                    "
                  />

                  Region & Sanctuary
                </span>
              </label>

              <select
                value={selectedRegion}
                onChange={(e) =>
                  setSelectedRegion(
                    e.target.value as
                      | DestinationRegion
                      | 'All'
                  )
                }
                className="
                  w-full
                  bg-transparent
                  text-white
                  text-sm
                  font-medium
                  focus:outline-none
                  cursor-pointer
                "
              >
                <option
                  value="All"
                  className="
                    bg-stone-900
                    text-white
                  "
                >
                  All Island Regions
                </option>

                <option
                  value="Western Province"
                  className="
                    bg-stone-900
                    text-white
                  "
                >
                  Colombo & Western Coast
                </option>

                <option
                  value="North Central Province"
                  className="
                    bg-stone-900
                    text-white
                  "
                >
                  Anuradhapura &
                  Polonnaruwa
                </option>

                <option
                  value="Cultural Triangle"
                  className="
                    bg-stone-900
                    text-white
                  "
                >
                  Cultural Triangle
                </option>

                <option
                  value="Central Highlands"
                  className="
                    bg-stone-900
                    text-white
                  "
                >
                  Kandy, Nuwara Eliya &
                  Ella
                </option>

                <option
                  value="Wildlife Sanctuaries"
                  className="
                    bg-stone-900
                    text-white
                  "
                >
                  Wildlife Sanctuaries
                </option>

                <option
                  value="Southern Coast"
                  className="
                    bg-stone-900
                    text-white
                  "
                >
                  Galle, Mirissa &
                  Southern Coast
                </option>

                <option
                  value="Wild East & North"
                  className="
                    bg-stone-900
                    text-white
                  "
                >
                  Wild East & North
                </option>
              </select>
            </div>

            {/* DURATION */}

            <div
              className="
                px-3
                py-2
                bg-stone-800/60
                rounded-lg
                border
                border-stone-700/50
              "
            >
              <label
                className="
                  block
                  text-[11px]
                  font-medium
                  text-stone-400
                  uppercase
                  tracking-wider
                  mb-1
                "
              >
                <span
                  className="
                    flex
                    items-center
                    gap-1.5
                  "
                >
                  <Calendar
                    className="
                      w-3
                      h-3
                      text-amber-400
                    "
                  />

                  Expedition Length
                </span>
              </label>

              <select
                value={selectedDuration}
                onChange={(e) =>
                  setSelectedDuration(
                    e.target.value as
                      DurationFilter
                  )
                }
                className="
                  w-full
                  bg-transparent
                  text-white
                  text-sm
                  font-medium
                  focus:outline-none
                  cursor-pointer
                "
              >
                <option
                  value="5-7"
                  className="
                    bg-stone-900
                    text-white
                  "
                >
                  5 – 7 Days · Essential
                  Escape
                </option>

                <option
                  value="8-10"
                  className="
                    bg-stone-900
                    text-white
                  "
                >
                  8 – 10 Days · Island
                  Discovery
                </option>

                <option
                  value="11-14"
                  className="
                    bg-stone-900
                    text-white
                  "
                >
                  11 – 14 Days · Complete
                  Journey
                </option>

                <option
                  value="14+"
                  className="
                    bg-stone-900
                    text-white
                  "
                >
                  14+ Days · Grand Ceylon
                  Circuit
                </option>
              </select>
            </div>

            {/* FIND JOURNEYS */}

            <div>
              <button
                type="submit"
                className="
                  w-full
                  py-3.5
                  px-4
                  bg-[#C46835]
                  hover:bg-[#DF8452]
                  text-white
                  text-xs
                  font-semibold
                  uppercase
                  tracking-wider
                  rounded-lg
                  transition-all
                  duration-200
                  cursor-pointer
                  flex
                  items-center
                  justify-center
                  gap-2
                  shadow-sm
                  hover:shadow-lg
                "
              >
                <Compass
                  className="
                    w-4
                    h-4
                  "
                />

                <span>
                  Find Journeys
                </span>
              </button>
            </div>
          </form>
        </motion.div>

        {/* =================================================
            TRUST MARKERS
        ================================================= */}

        <motion.div
          initial={{
            opacity: 0,
          }}
          animate={{
            opacity: 1,
          }}
          transition={{
            duration: 0.8,
            delay: 0.6,
          }}
          className="
            mt-12
            pt-8
            border-t
            border-white/10
            flex
            flex-wrap
            items-center
            justify-center
            gap-x-8
            gap-y-3
            text-xs
            text-stone-300/80
            font-light
          "
        >
          <div
            className="
              flex
              items-center
              gap-2
            "
          >
            <span
              className="
                font-semibold
                text-white
              "
            >
              8 UNESCO
            </span>

            <span>
              World Heritage Sites
            </span>
          </div>

          <span
            className="
              text-white/20
              hidden
              sm:inline
            "
          >
            ·
          </span>

          <div
            className="
              flex
              items-center
              gap-2
            "
          >
            <span
              className="
                font-semibold
                text-white
              "
            >
              2,000+ Years
            </span>

            <span>
              Living Heritage
            </span>
          </div>

          <span
            className="
              text-white/20
              hidden
              sm:inline
            "
          >
            ·
          </span>

          <div
            className="
              flex
              items-center
              gap-2
            "
          >
            <span
              className="
                font-semibold
                text-white
              "
            >
              150+ Years
            </span>

            <span>
              Pure Ceylon Tea Heritage
            </span>
          </div>

          <span
            className="
              text-white/20
              hidden
              sm:inline
            "
          >
            ·
          </span>

          <div
            className="
              flex
              items-center
              gap-2
            "
          >
            <ShieldCheck
              className="
                w-3.5
                h-3.5
                text-amber-300
              "
            />

            <span>
              Tailor-Made Private
              Journeys
            </span>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;