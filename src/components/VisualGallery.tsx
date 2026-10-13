import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { GALLERY_ITEMS } from '../data/travelData';
import { GalleryItem } from '../types';
import { GalleryLightbox } from './GalleryLightbox';
import { Maximize2, MapPin } from 'lucide-react';

export const VisualGallery: React.FC = () => {
  const [activeCategory, setActiveCategory] =
    useState<string>('All');

  const [selectedItem, setSelectedItem] =
    useState<GalleryItem | null>(null);

  const categories = [
    'All',
    'Ancient Heritage',
    'Highlands & Tea',
    'Wildlife & Nature',
    'Golden Coasts',
    'City & Culture',
  ];

  const filteredItems =
    activeCategory === 'All'
      ? GALLERY_ITEMS
      : GALLERY_ITEMS.filter(
          (item) =>
            item.category === activeCategory
        );

  const handleCategoryChange = (
    category: string
  ) => {
    if (category === activeCategory) return;

    setActiveCategory(category);
  };

  return (
    <section
      id="gallery"
      className="
        py-16
        sm:py-20
        lg:py-24
        bg-[#DFE3DC]
        border-y
        border-stone-200/70
      "
    >
      <div
        className="
          max-w-7xl
          mx-auto
          px-4
          sm:px-6
          lg:px-8
        "
      >
        {/* =========================================
            SECTION HEADER
        ========================================= */}

        <div
          className="
            text-center
            max-w-3xl
            mx-auto
            mb-12
          "
        >
          <h2
            className="
              font-display
              text-3xl
              sm:text-5xl
              text-[#0F2E22]
              tracking-tight
              mb-4
            "
          >
            The Soul of Ceylon in Frame
          </h2>

          <p
            className="
              text-stone-600
              text-sm
              sm:text-base
              font-light
              [text-wrap:balance]
            "
          >
            From mist-veiled highland
            viaducts to golden twilight
            shores and silent jungle
            sentinels.
          </p>
        </div>

        {/* =========================================
            CATEGORY FILTERS
        ========================================= */}

        <div
          className="
            flex
            items-center
            justify-center
            gap-1.5
            flex-wrap
            mb-10
          "
        >
          {categories.map((cat) => {
            const isActive =
              activeCategory === cat;

            return (
              <button
                key={cat}
                type="button"
                onClick={() =>
                  handleCategoryChange(cat)
                }
                className={`
                  px-4
                  py-2
                  text-xs
                  font-medium
                  rounded-lg
                  cursor-pointer
                  transition-colors
                  duration-200

                  ${
                    isActive
                      ? `
                        bg-[#0F2E22]
                        text-white
                        shadow-xs
                      `
                      : `
                        bg-white
                        text-stone-700
                        border
                        border-stone-200/80
                        hover:bg-stone-100
                        hover:text-stone-900
                      `
                  }
                `}
              >
                {cat === 'All'
                  ? 'All Island Chronicles'
                  : cat}
              </button>
            );
          })}
        </div>

        {/* =========================================
            GALLERY GRID
        ========================================= */}

        <motion.div
          layout
          transition={{
            layout: {
              duration: 0.35,
              ease: [0.22, 1, 0.36, 1],
            },
          }}
          className="
            grid
            grid-cols-1
            sm:grid-cols-2
            lg:grid-cols-3
            xl:grid-cols-4
            gap-5
          "
        >
          <AnimatePresence
            initial={false}
            mode="popLayout"
          >
            {filteredItems.map((item) => (
              <motion.div
                key={item.id}

                /*
                 * layout="position" makes only
                 * the position animate.
                 *
                 * This avoids image/card
                 * stretching during filtering.
                 */
                layout="position"

                initial={{
                  opacity: 0,
                  y: 8,
                }}

                animate={{
                  opacity: 1,
                  y: 0,
                }}

                exit={{
                  opacity: 0,
                  y: -4,
                }}

                transition={{
                  layout: {
                    duration: 0.35,
                    ease: [
                      0.22,
                      1,
                      0.36,
                      1,
                    ],
                  },

                  opacity: {
                    duration: 0.18,
                  },

                  y: {
                    duration: 0.25,
                    ease: [
                      0.22,
                      1,
                      0.36,
                      1,
                    ],
                  },
                }}

                onClick={() =>
                  setSelectedItem(item)
                }

                role="button"
                tabIndex={0}

                aria-label={`Open ${item.title}`}

                onKeyDown={(event) => {
                  if (
                    event.key === 'Enter' ||
                    event.key === ' '
                  ) {
                    event.preventDefault();

                    setSelectedItem(item);
                  }
                }}

                className="
                  group
                  relative
                  cursor-pointer
                  overflow-hidden
                  rounded-xl
                  bg-stone-200
                  aspect-[4/3]
                  shadow-xs
                  hover:shadow-xl
                  transition-shadow
                  duration-300
                  will-change-transform
                "
              >
                {/* IMAGE */}

                <img
                  src={item.image}
                  alt={item.title}
                  loading="lazy"
                  decoding="async"
                  referrerPolicy="no-referrer"
                  className="
                    absolute
                    inset-0
                    w-full
                    h-full
                    object-cover
                    object-center
                    transition-transform
                    duration-700
                    ease-out
                    group-hover:scale-[1.08]
                  "
                />

                {/* DARK GRADIENT */}

                <div
                  className="
                    absolute
                    inset-0
                    bg-gradient-to-t
                    from-black/80
                    via-black/20
                    to-transparent
                    transition-colors
                    duration-300
                    group-hover:from-black/90
                    group-hover:via-black/30
                  "
                />

                {/* ENLARGE ICON */}

                <div
                  className="
                    absolute
                    top-3
                    right-3
                    p-2
                    bg-white/20
                    backdrop-blur-sm
                    rounded-full
                    text-white
                    opacity-0
                    translate-y-1
                    group-hover:opacity-100
                    group-hover:translate-y-0
                    transition-all
                    duration-300
                  "
                >
                  <Maximize2
                    className="
                      w-4
                      h-4
                    "
                  />
                </div>

                {/* BOTTOM DETAILS */}

                <div
                  className="
                    absolute
                    bottom-3
                    left-3
                    right-3
                    text-white
                  "
                >
                  {/* LOCATION */}

                  <div
                    className="
                      flex
                      items-center
                      gap-1.5
                      text-[11px]
                      text-amber-200/90
                      font-medium
                      mb-0.5
                    "
                  >
                    <MapPin
                      className="
                        w-3
                        h-3
                        shrink-0
                      "
                    />

                    <span className="truncate">
                      {item.location}
                    </span>
                  </div>

                  {/* TITLE */}

                  <h3
                    className="
                      font-display
                      text-base
                      sm:text-lg
                      font-medium
                      text-white
                      line-clamp-1
                      transition-colors
                      duration-300
                      group-hover:text-amber-200
                    "
                  >
                    {item.title}
                  </h3>

                  {/* PHOTOGRAPHER */}

                  <p
                    className="
                      text-[11px]
                      text-stone-300
                      line-clamp-1
                      opacity-80
                      transition-opacity
                      duration-300
                      group-hover:opacity-100
                    "
                  >
                    {item.photographerCredit}
                  </p>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>

      {/* =========================================
          GALLERY LIGHTBOX
      ========================================= */}

      <GalleryLightbox
        item={selectedItem}
        items={filteredItems}
        onClose={() =>
          setSelectedItem(null)
        }
        onNavigate={(newItem) =>
          setSelectedItem(newItem)
        }
      />
    </section>
  );
};

export default VisualGallery;