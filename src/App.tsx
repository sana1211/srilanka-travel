import React, { useEffect, useState } from 'react';
import { AnimatePresence, motion } from 'motion/react';

/* =========================================================
   COMPONENTS
========================================================= */

import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { DestinationShowcase } from './components/DestinationShowcase';
import { DestinationModal } from './components/DestinationModal';
import { VisualGallery } from './components/VisualGallery';
import { PackagesSection } from './components/PackagesSection';
import { InteractiveItinerary } from './components/InteractiveItinerary';
import { CeylonEssentials } from './components/CeylonEssentials';
import { BookingCTA } from './components/BookingCTA';
import { BookingModal } from './components/BookingModal';
import { Footer } from './components/Footer';
import { LoadingScreen } from './components/LoadingScreen';

/* =========================================================
   TYPES
========================================================= */

import type {
  Currency,
  Destination,
  DestinationRegion,
} from './types';

/* =========================================================
   APP
========================================================= */

const App: React.FC = () => {
  /* =======================================================
     LOADING SCREEN
  ======================================================= */

  const [isLoading, setIsLoading] = useState(true);

  /* =======================================================
     CURRENCY
  ======================================================= */

  const [
    currentCurrency,
    setCurrentCurrency,
  ] = useState<Currency>('USD');

  /* =======================================================
     BOOKING MODAL
  ======================================================= */

  const [
    isBookingOpen,
    setIsBookingOpen,
  ] = useState(false);

  /* =======================================================
     DESTINATION FILTER
  ======================================================= */

  const [
    activeRegionFilter,
    setActiveRegionFilter,
  ] = useState<DestinationRegion | 'All'>('All');

  /* =======================================================
     DESTINATION MODAL
  ======================================================= */

  const [
    viewingDestination,
    setViewingDestination,
  ] = useState<Destination | null>(null);

  /* =======================================================
     LOADER TIMER

     0s      → Loading screen starts
     0–4.2s  → Elephants move toward centre
     4.2s    → Elephant trumpet sound
     6.5s    → Main website appears
  ======================================================= */

  useEffect(() => {
    document.body.style.overflow = 'hidden';

    const timer = window.setTimeout(() => {
      setIsLoading(false);
      document.body.style.overflow = '';
    }, 6500);

    return () => {
      window.clearTimeout(timer);
      document.body.style.overflow = '';
    };
  }, []);

  /* =======================================================
     OPEN BOOKING
  ======================================================= */

  const handleOpenBooking = () => {
    setIsBookingOpen(true);
  };

  /* =======================================================
     CLOSE BOOKING
  ======================================================= */

  const handleCloseBooking = () => {
    setIsBookingOpen(false);
  };

  /* =======================================================
     HERO EXPLORE BUTTON
  ======================================================= */

  const handleExploreClick = () => {
    const section =
      document.getElementById('destinations');

    section?.scrollIntoView({
      behavior: 'smooth',
      block: 'start',
    });
  };

  /* =======================================================
     REGION FILTER
  ======================================================= */

  const handleFilterSelect = (
    region: DestinationRegion | 'All'
  ) => {
    setActiveRegionFilter(region);

    window.setTimeout(() => {
      const section =
        document.getElementById('destinations');

      section?.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
      });
    }, 100);
  };

  /* =======================================================
     DESTINATION DETAILS
  ======================================================= */

  const handleViewDestination = (
    destination: Destination
  ) => {
    setViewingDestination(destination);
  };

  const handleCloseDestination = () => {
    setViewingDestination(null);
  };

  /* =======================================================
     RETURN
  ======================================================= */

  return (
    <>
      {/* ===================================================
          LOADING SCREEN
      =================================================== */}

      <AnimatePresence mode="wait">
        {isLoading && (
          <LoadingScreen />
        )}
      </AnimatePresence>

      {/* ===================================================
          MAIN WEBSITE
      =================================================== */}

      {!isLoading && (
        <motion.div
          initial={{
            opacity: 0,
          }}
          animate={{
            opacity: 1,
          }}
          transition={{
            duration: 0.8,
            ease: 'easeOut',
          }}
          className="
            min-h-screen
            w-full
            overflow-x-hidden
            bg-[#F3F0E8]
            text-stone-900
          "
        >
          {/* ===============================================
              NAVBAR
          =============================================== */}

          <Navbar
            currentCurrency={currentCurrency}
            onCurrencyChange={setCurrentCurrency}
            onOpenBooking={handleOpenBooking}
          />

          {/* ===============================================
              MAIN CONTENT
          =============================================== */}

          <main className="w-full">
            {/* HERO */}

            <Hero
              onExploreClick={handleExploreClick}
              onFilterSelect={handleFilterSelect}
              onOpenBooking={handleOpenBooking}
            />

            {/* =============================================
                DESTINATIONS
            ============================================= */}

            <DestinationShowcase
              activeRegionFilter={activeRegionFilter}
              onFilterChange={setActiveRegionFilter}
              onViewDestination={handleViewDestination}
            />

            {/* =============================================
                GALLERY
            ============================================= */}

            <VisualGallery />

            {/* =============================================
                TRAVEL PACKAGES
            ============================================= */}

            <PackagesSection
              currentCurrency={currentCurrency}
              onOpenBooking={handleOpenBooking}
            />

            {/* =============================================
                INTERACTIVE ITINERARY
            ============================================= */}

            <InteractiveItinerary
              onOpenBooking={handleOpenBooking}
            />

            {/* =============================================
                CEYLON / SRI LANKA ESSENTIALS
            ============================================= */}

            <CeylonEssentials />

            {/* =============================================
                BOOKING CTA
            ============================================= */}

            <BookingCTA
              onOpenBooking={handleOpenBooking}
            />
          </main>

          {/* ===============================================
              FOOTER
          =============================================== */}

          <Footer />
        </motion.div>
      )}

      {/* ===================================================
          DESTINATION MODAL
      =================================================== */}

 <AnimatePresence>
  {viewingDestination && (
    <DestinationModal
      destination={viewingDestination}
      onClose={handleCloseDestination}
      onOpenBooking={() => {
        handleCloseDestination();

        window.setTimeout(() => {
          handleOpenBooking();
        }, 200);
      }}
    />
  )}
</AnimatePresence>

      {/* ===================================================
          BOOKING MODAL
      =================================================== */}

      <AnimatePresence>
        {isBookingOpen && (
          <BookingModal
            isOpen={isBookingOpen}
            onClose={handleCloseBooking}
            currentCurrency={currentCurrency}
          />
        )}
      </AnimatePresence>
    </>
  );
};

export default App;