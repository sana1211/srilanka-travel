import React, { useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import {
  X,
  ChevronLeft,
  ChevronRight,
  Camera,
  MapPin,
  Navigation,
  ExternalLink,
} from 'lucide-react';

import { GalleryItem } from '../types';

interface GalleryLightboxProps {
  item: GalleryItem | null;
  items: GalleryItem[];
  onClose: () => void;
  onNavigate: (newItem: GalleryItem) => void;
}

export const GalleryLightbox: React.FC<GalleryLightboxProps> = ({
  item,
  items,
  onClose,
  onNavigate,
}) => {
  if (!item) return null;

  const currentIndex = items.findIndex((galleryItem) => {
    return galleryItem.id === item.id;
  });

  const handleNext = () => {
    const nextIndex = (currentIndex + 1) % items.length;

    onNavigate(items[nextIndex]);
  };

  const handlePrev = () => {
    const previousIndex =
      (currentIndex - 1 + items.length) % items.length;

    onNavigate(items[previousIndex]);
  };

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        onClose();
      }

      if (event.key === 'ArrowRight') {
        handleNext();
      }

      if (event.key === 'ArrowLeft') {
        handlePrev();
      }
    };

    document.body.style.overflow = 'hidden';

    window.addEventListener('keydown', handleKeyDown);

    return () => {
      document.body.style.overflow = 'unset';

      window.removeEventListener(
        'keydown',
        handleKeyDown
      );
    };
  }, [item, currentIndex]);

  /*
    ----------------------------------------------------------
    GOOGLE MAP LOCATION
    ----------------------------------------------------------

    Gallery item එකේ location value එක use කරලා
    Google Maps location එක automatically generate වෙනවා.

    Google Maps API key එකක් ඕන නැහැ.
  */

  const mapQuery = `${item.location}, Sri Lanka`;

  const encodedLocation =
    encodeURIComponent(mapQuery);

  const mapEmbedUrl =
    `https://www.google.com/maps?q=${encodedLocation}&output=embed`;

  const googleMapsUrl =
    `https://www.google.com/maps/search/?api=1&query=${encodedLocation}`;

  return (
    <AnimatePresence>
      <div
        className="
          fixed
          inset-0
          z-[100]
          flex
          items-center
          justify-center
          p-1
          sm:p-4
          lg:p-5
          bg-black/95
          backdrop-blur-md
        "
      >
        {/* ==================================================
            CLOSE BUTTON
        ================================================== */}

        <button
          type="button"
          onClick={onClose}
          className="
            absolute
            top-4
            right-4
            z-50
            p-2.5
            bg-white/10
            hover:bg-white/20
            text-white
            rounded-full
            backdrop-blur-sm
            transition-all
            duration-200
            cursor-pointer
          "
          aria-label="Close gallery"
        >
          <X className="w-6 h-6" />
        </button>

        {/* ==================================================
            PREVIOUS BUTTON
        ================================================== */}

        {items.length > 1 && (
          <button
            type="button"
            onClick={handlePrev}
            className="
              absolute
              left-2
              sm:left-6
              z-50
              p-2.5
              sm:p-3
              bg-white/10
              hover:bg-white/25
              text-white
              rounded-full
              backdrop-blur-sm
              transition-all
              duration-200
              cursor-pointer
            "
            aria-label="Previous image"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>
        )}

        {/* ==================================================
            NEXT BUTTON
        ================================================== */}

        {items.length > 1 && (
          <button
            type="button"
            onClick={handleNext}
            className="
              absolute
              right-2
              sm:right-6
              z-50
              p-2.5
              sm:p-3
              bg-white/10
              hover:bg-white/25
              text-white
              rounded-full
              backdrop-blur-sm
              transition-all
              duration-200
              cursor-pointer
            "
            aria-label="Next image"
          >
            <ChevronRight className="w-6 h-6" />
          </button>
        )}

        {/* ==================================================
            LIGHTBOX CONTAINER
        ================================================== */}

        <motion.div
          key={item.id}
          initial={{
            opacity: 0,
            scale: 0.96,
            y: 12,
          }}
          animate={{
            opacity: 1,
            scale: 1,
            y: 0,
          }}
          exit={{
            opacity: 0,
            scale: 0.96,
            y: 12,
          }}
          transition={{
            duration: 0.25,
          }}
          className="
            w-full
            max-w-6xl
            max-h-[98dvh] sm:max-h-[94vh]
            overflow-y-auto
            rounded-lg sm:rounded-2xl
            border
            border-white/10
            bg-[#0D1712]
            shadow-2xl
          "
        >
          <div
            className="
              grid
              grid-cols-1
              lg:grid-cols-[1.45fr_0.85fr]
            "
          >
            {/* ==================================================
                LEFT SIDE - PHOTO
            ================================================== */}

            <div
              className="
                min-w-0
                bg-black
                flex
                items-center
                justify-center
                lg:min-h-[560px] xl:min-h-[620px]
              "
            >
              <img
                src={item.image}
                alt={item.title}
                className="
                  w-full
                  max-h-[42dvh] sm:max-h-[55vh]
                  lg:max-h-[82vh]
                  object-contain
                "
                referrerPolicy="no-referrer"
              />
            </div>

            {/* ==================================================
                RIGHT SIDE
            ================================================== */}

            <div
              className="
                p-5
                sm:p-6
                lg:p-7
                text-white
                flex
                flex-col
              "
            >
              {/* CATEGORY */}

              <div
                className="
                  flex
                  items-center
                  gap-2
                  text-xs
                  text-amber-300
                  font-medium
                  mb-2
                "
              >
                <span>{item.category}</span>

                <span aria-hidden="true">
                  •
                </span>

                <span>
                  {currentIndex + 1} of {items.length}
                </span>
              </div>

              {/* TITLE */}

              <h3
                className="
                  font-display
                  text-2xl
                  sm:text-3xl
                  text-white
                  font-medium
                  leading-tight
                  mb-3
                "
              >
                {item.title}
              </h3>

              {/* LOCATION */}

              <div
                className="
                  flex
                  items-start
                  gap-2
                  text-sm
                  text-stone-200
                  mb-4
                "
              >
                <MapPin
                  className="
                    w-4
                    h-4
                    text-amber-300
                    shrink-0
                    mt-0.5
                  "
                />

                <span>{item.location}</span>
              </div>

              {/* DESCRIPTION */}

              <p
                className="
                  text-sm
                  text-stone-300
                  font-light
                  leading-relaxed
                  mb-5
                "
              >
                {item.caption}
              </p>

              {/* ==================================================
                  LOCATION CARD
              ================================================== */}

              <div
                className="
                  rounded-xl
                  overflow-hidden
                  border
                  border-white/10
                  bg-white/5
                  mb-4
                "
              >
                {/* LOCATION HEADER */}

                <div
                  className="
                    flex
                    items-center
                    justify-between
                    gap-3
                    px-4
                    py-3
                    border-b
                    border-white/10
                  "
                >
                  <div
                    className="
                      flex
                      items-center
                      gap-2
                      min-w-0
                    "
                  >
                    <Navigation
                      className="
                        w-4
                        h-4
                        text-amber-300
                        shrink-0
                      "
                    />

                    <div className="min-w-0">
                      <p
                        className="
                          text-[10px]
                          uppercase
                          tracking-[0.16em]
                          text-stone-400
                        "
                      >
                        Photo Location
                      </p>

                      <p
                        className="
                          text-sm
                          text-white
                          truncate
                        "
                      >
                        {item.location}
                      </p>
                    </div>
                  </div>

                  {/* OPEN GOOGLE MAP */}

                  <a
                    href={googleMapsUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="
                      shrink-0
                      inline-flex
                      items-center
                      gap-1.5
                      rounded-lg
                      border
                      border-amber-300/25
                      bg-amber-300/10
                      px-3
                      py-2
                      text-[11px]
                      font-semibold
                      text-amber-200
                      hover:bg-amber-300/20
                      transition-colors
                    "
                    aria-label={`Open ${item.location} in Google Maps`}
                  >
                    Open Map

                    <ExternalLink
                      className="w-3 h-3"
                    />
                  </a>
                </div>

                {/* ==================================================
                    GOOGLE MAP
                ================================================== */}

                <div
                  className="
                    h-[220px]
                    sm:h-[280px]
                    lg:h-[330px]
                    bg-stone-900
                  "
                >
                  <iframe
                    key={item.id}
                    title={`${item.title} location map`}
                    src={mapEmbedUrl}
                    className="
                      w-full
                      h-full
                      border-0
                    "
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    allowFullScreen
                  />
                </div>
              </div>

              {/* PHOTOGRAPHER */}

              <div
                className="
                  mt-auto
                  pt-2
                  flex
                  items-center
                  gap-1.5
                  text-[11px]
                  text-stone-400
                "
              >
                <Camera className="w-3 h-3" />

                <span>
                  {item.photographerCredit}
                </span>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};