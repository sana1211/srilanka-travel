import React, { useEffect } from 'react';
import { AnimatePresence, motion } from 'motion/react';
import {
  X,
  Check,
  Sparkles,
  ArrowRight,
} from 'lucide-react';

import type { Destination } from '../types';

/* =========================================================
   PROPS
========================================================= */

interface DestinationModalProps {
  destination: Destination | null;
  onClose: () => void;
  onOpenBooking: () => void;
}

/* =========================================================
   COMPONENT
========================================================= */

export const DestinationModal: React.FC<
  DestinationModalProps
> = ({
  destination,
  onClose,
  onOpenBooking,
}) => {
  /* =======================================================
     PREVENT BACKGROUND SCROLL
  ======================================================= */

  useEffect(() => {
    if (destination) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }

    return () => {
      document.body.style.overflow = '';
    };
  }, [destination]);

  /* =======================================================
     ESC KEY CLOSE
  ======================================================= */

  useEffect(() => {
    const handleKeyDown = (
      event: KeyboardEvent
    ) => {
      if (event.key === 'Escape') {
        onClose();
      }
    };

    window.addEventListener(
      'keydown',
      handleKeyDown
    );

    return () => {
      window.removeEventListener(
        'keydown',
        handleKeyDown
      );
    };
  }, [onClose]);

  if (!destination) {
    return null;
  }

  return (
    <AnimatePresence>
      <div
        className="
          fixed
          inset-0
          z-50
          flex
          items-center
          justify-center
          p-2
          sm:p-4
          lg:p-8
        "
      >
        {/* =================================================
            BACKDROP
        ================================================= */}

        <motion.div
          initial={{
            opacity: 0,
          }}
          animate={{
            opacity: 1,
          }}
          exit={{
            opacity: 0,
          }}
          onClick={onClose}
          className="
            fixed
            inset-0
            cursor-pointer
            bg-black/75
            backdrop-blur-sm
          "
        />

        {/* =================================================
            MODAL WINDOW
        ================================================= */}

        <motion.div
          initial={{
            opacity: 0,
            scale: 0.96,
            y: 20,
          }}
          animate={{
            opacity: 1,
            scale: 1,
            y: 0,
          }}
          exit={{
            opacity: 0,
            scale: 0.96,
            y: 20,
          }}
          transition={{
            duration: 0.25,
            ease: [
              0.16,
              1,
              0.3,
              1,
            ],
          }}
          className="
            relative
            z-10
            flex
            max-h-[96dvh]
            w-full
            max-w-4xl
            flex-col
            overflow-hidden
            rounded-xl
            border
            border-stone-200
            bg-[#E7E9E2]
            shadow-2xl
            sm:max-h-[92vh]
            sm:rounded-2xl
          "
        >
          {/* =================================================
              HEADER IMAGE
          ================================================= */}

          <div
            className="
              relative
              h-48
              w-full
              shrink-0
              overflow-hidden
              sm:h-64
              md:h-80
            "
          >
            <img
              src={destination.image}
              alt={destination.name}
              className="
                h-full
                w-full
                object-cover
                object-center
              "
              referrerPolicy="no-referrer"
            />

            <div
              className="
                absolute
                inset-0
                bg-gradient-to-t
                from-black/85
                via-black/40
                to-transparent
              "
            />

            {/* CLOSE BUTTON */}

            <button
              type="button"
              onClick={onClose}
              className="
                absolute
                right-4
                top-4
                cursor-pointer
                rounded-full
                bg-black/40
                p-2
                text-white
                transition-colors
                hover:bg-black/70
              "
              aria-label="Close dialog"
            >
              <X className="h-5 w-5" />
            </button>

            {/* TITLE OVERLAY */}

            <div
              className="
                absolute
                bottom-4
                left-4
                right-4
                text-white
                sm:bottom-6
                sm:left-6
                sm:right-6
              "
            >
              <div
                className="
                  mb-1
                  flex
                  items-center
                  gap-2
                  text-xs
                  font-medium
                  text-amber-200
                "
              >
                <span>
                  {destination.region}
                </span>

                <span
                  aria-hidden="true"
                >
                  ·
                </span>

                <span
                  className="
                    font-serif
                    text-sm
                    italic
                  "
                >
                  {
                    destination.sinhalaName
                  }
                </span>
              </div>

              <h2
                className="
                  font-display
                  mb-1
                  text-2xl
                  font-medium
                  text-white
                  sm:text-3xl
                  md:text-4xl
                "
              >
                {destination.name}
              </h2>

              <p
                className="
                  text-sm
                  font-light
                  text-stone-200
                "
              >
                {destination.tagline}
              </p>
            </div>
          </div>

          {/* =================================================
              CONTENT SCROLL AREA
          ================================================= */}

          <div
            className="
              space-y-5
              overflow-y-auto
              p-4
              sm:space-y-6
              sm:p-6
              md:p-8
            "
          >
            {/* ===============================================
                METADATA
            =============================================== */}

            <div
              className="
                grid
                grid-cols-2
                gap-4
                rounded-xl
                bg-stone-100/80
                p-4
                text-xs
                text-stone-700
                sm:grid-cols-4
              "
            >
              {/* BEST SEASON */}

              <div>
                <span
                  className="
                    mb-0.5
                    block
                    text-[10px]
                    font-medium
                    uppercase
                    tracking-wider
                    text-stone-400
                  "
                >
                  Best Season
                </span>

                <span
                  className="
                    font-semibold
                    text-stone-900
                  "
                >
                  {
                    destination.bestTimeToVisit
                  }
                </span>
              </div>

              {/* ELEVATION */}

              <div>
                <span
                  className="
                    mb-0.5
                    block
                    text-[10px]
                    font-medium
                    uppercase
                    tracking-wider
                    text-stone-400
                  "
                >
                  Elevation
                </span>

                <span
                  className="
                    font-semibold
                    text-stone-900
                  "
                >
                  {destination.elevation}
                </span>
              </div>

              {/* CLIMATE */}

              <div>
                <span
                  className="
                    mb-0.5
                    block
                    text-[10px]
                    font-medium
                    uppercase
                    tracking-wider
                    text-stone-400
                  "
                >
                  Climate
                </span>

                <span
                  className="
                    font-semibold
                    text-stone-900
                  "
                >
                  {destination.climate}
                </span>
              </div>

              {/* DURATION */}

              <div>
                <span
                  className="
                    mb-0.5
                    block
                    text-[10px]
                    font-medium
                    uppercase
                    tracking-wider
                    text-stone-400
                  "
                >
                  Recommended Stay
                </span>

                <span
                  className="
                    font-semibold
                    text-stone-900
                  "
                >
                  {
                    destination.recommendedDuration
                  }
                </span>
              </div>
            </div>

            {/* ===============================================
                DESCRIPTION
            =============================================== */}

            <div className="space-y-4">
              <p
                className="
                  text-sm
                  leading-relaxed
                  text-stone-700
                  sm:text-base
                "
              >
                {destination.description}
              </p>

              {/* HISTORY */}

              <div
                className="
                  rounded-xl
                  border
                  border-amber-200/60
                  bg-amber-50/70
                  p-4
                "
              >
                <h4
                  className="
                    mb-1
                    flex
                    items-center
                    gap-1.5
                    text-xs
                    font-semibold
                    uppercase
                    tracking-wider
                    text-amber-900
                  "
                >
                  <Sparkles
                    className="
                      h-3.5
                      w-3.5
                      text-amber-700
                    "
                  />

                  <span>
                    Historical & Cultural
                    Heritage
                  </span>
                </h4>

                <p
                  className="
                    text-xs
                    leading-relaxed
                    text-stone-700
                    sm:text-sm
                  "
                >
                  {
                    destination.historicalSignificance
                  }
                </p>
              </div>
            </div>

            {/* ===============================================
                HIGHLIGHTS
            =============================================== */}

            <div>
              <h3
                className="
                  font-display
                  mb-3
                  text-xl
                  text-stone-900
                "
              >
                Key Expedition Highlights
              </h3>

              <div
                className="
                  grid
                  grid-cols-1
                  gap-2.5
                  sm:grid-cols-2
                "
              >
                {destination.highlights.map(
                  (
                    highlight,
                    index
                  ) => (
                    <div
                      key={`${highlight}-${index}`}
                      className="
                        flex
                        items-start
                        gap-2.5
                        rounded-lg
                        border
                        border-stone-200/70
                        bg-white
                        p-3
                        text-xs
                        text-stone-700
                        sm:text-sm
                      "
                    >
                      <Check
                        className="
                          mt-0.5
                          h-4
                          w-4
                          shrink-0
                          text-[#0F2E22]
                        "
                      />

                      <span>
                        {highlight}
                      </span>
                    </div>
                  )
                )}
              </div>
            </div>

            {/* ===============================================
                CULTURAL TIP
            =============================================== */}

            <div
              className="
                rounded-xl
                border
                border-stone-200
                bg-stone-100
                p-4
                text-xs
                text-stone-600
              "
            >
              <span
                className="
                  mb-1
                  block
                  font-semibold
                  text-stone-900
                "
              >
                Traveler Etiquette & Tip:
              </span>

              <p>
                {destination.culturalTip}
              </p>
            </div>
          </div>

          {/* =================================================
              FOOTER ACTIONS
          ================================================= */}

          <div
            className="
              flex
              flex-col
              items-center
              justify-between
              gap-3
              border-t
              border-stone-200
              bg-white
              p-4
              sm:flex-row
              sm:p-6
            "
          >
            <span
              className="
                text-xs
                text-stone-500
              "
            >
              Include this destination in
              your bespoke itinerary
            </span>

            <div
              className="
                flex
                w-full
                items-center
                gap-3
                sm:w-auto
              "
            >
              {/* CLOSE */}

              <button
                type="button"
                onClick={onClose}
                className="
                  w-1/2
                  cursor-pointer
                  px-5
                  py-2.5
                  text-xs
                  font-medium
                  text-stone-600
                  transition-colors
                  hover:text-stone-900
                  sm:w-auto
                "
              >
                Close
              </button>

              {/* BOOK */}

              <button
                type="button"
                onClick={onOpenBooking}
                className="
                  flex
                  w-1/2
                  cursor-pointer
                  items-center
                  justify-center
                  gap-1.5
                  rounded-lg
                  bg-[#C46835]
                  px-6
                  py-2.5
                  text-xs
                  font-semibold
                  uppercase
                  tracking-wider
                  text-white
                  shadow-sm
                  transition-colors
                  hover:bg-[#DF8452]
                  sm:w-auto
                "
              >
                <span>
                  Add to My Trip
                </span>

                <ArrowRight
                  className="
                    h-3.5
                    w-3.5
                  "
                />
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};

export default DestinationModal;