import React, { useState } from 'react';
import { MapPin, Check, ArrowUp } from 'lucide-react';

export const Footer: React.FC = () => {
  const [newsletterEmail, setNewsletterEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (newsletterEmail) {
      setSubscribed(true);
      setNewsletterEmail('');
      setTimeout(() => setSubscribed(false), 5000);
    }
  };

  return (
    <footer className="bg-[#0B1E16] text-stone-300 pt-12 sm:pt-16 pb-10 sm:pb-12 border-t border-[#193F30]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-12 gap-8 lg:gap-10 mb-10 sm:mb-12">
          {/* Brand Col (4 cols) */}
          <div className="lg:col-span-4">
            <a href="#top" className="font-display text-2xl text-white block mb-3">
              Lanka Odyssey
            </a>
            <p className="text-xs text-stone-400 font-light leading-relaxed max-w-sm mb-6">
              A refined travel-planning concept for private journeys across Sri Lanka’s ancient cities, tea highlands, wildlife reserves, and southern coast.
            </p>
            <div className="space-y-2 text-xs text-stone-400 font-light">
              <div className="flex items-center gap-2">
                <MapPin className="w-3.5 h-3.5 text-[#C46835] shrink-0" />
                <span>Colombo, Sri Lanka</span>
              </div>
              <div className="flex items-center gap-2">
                <MapPin className="w-3.5 h-3.5 text-[#C46835] shrink-0" />
                <span>Galle, Southern Province, Sri Lanka</span>
              </div>
            </div>
          </div>

          {/* Nav Links (2 cols) */}
        <div className="lg:col-span-2">
  <span className="text-xs font-semibold uppercase tracking-wider text-amber-300 block mb-4">
    Explore Sanctuaries
  </span>

  <ul className="space-y-2 text-xs text-stone-400">
    <li>
      <a
        href="#destinations"
        className="hover:text-white transition-colors"
      >
        Colombo City
      </a>
    </li>

    <li>
      <a
        href="#destinations"
        className="hover:text-white transition-colors"
      >
        Anuradhapura Sacred City
      </a>
    </li>

    <li>
      <a
        href="#destinations"
        className="hover:text-white transition-colors"
      >
        Polonnaruwa Ancient Kingdom
      </a>
    </li>

    <li>
      <a
        href="#destinations"
        className="hover:text-white transition-colors"
      >
        Sigiriya Citadel
      </a>
    </li>

    <li>
      <a
        href="#destinations"
        className="hover:text-white transition-colors"
      >
        Dambulla Cave Temples
      </a>
    </li>

    <li>
      <a
        href="#destinations"
        className="hover:text-white transition-colors"
      >
        Sacred Kandy
      </a>
    </li>

    <li>
      <a
        href="#destinations"
        className="hover:text-white transition-colors"
      >
        Ella & Mountain Rail
      </a>
    </li>

    <li>
      <a
        href="#destinations"
        className="hover:text-white transition-colors"
      >
        Nuwara Eliya Tea Trails
      </a>
    </li>

    <li>
      <a
        href="#destinations"
        className="hover:text-white transition-colors"
      >
        Yala Leopard Reserve
      </a>
    </li>

    <li>
      <a
        href="#destinations"
        className="hover:text-white transition-colors"
      >
        Mirissa & Weligama Coast
      </a>
    </li>

    <li>
      <a
        href="#destinations"
        className="hover:text-white transition-colors"
      >
        Galle Dutch Fort
      </a>
    </li>
  </ul>
</div>

          {/* Expedition Types (2 cols) */}
          <div className="lg:col-span-2">
            <span className="text-xs font-semibold uppercase tracking-wider text-amber-300 block mb-4">
              Curated Expeditions
            </span>
            <ul className="space-y-2 text-xs text-stone-400">
              <li>
                <a href="#packages" className="hover:text-white transition-colors">
                  The Grand Ceylon Odyssey
                </a>
              </li>
              <li>
                <a href="#packages" className="hover:text-white transition-colors">
                  Royal Heritage & Highlands
                </a>
              </li>
              <li>
                <a href="#packages" className="hover:text-white transition-colors">
                  Wild Leopards & Coast
                </a>
              </li>
              <li>
                <a href="#packages" className="hover:text-white transition-colors">
                  Ayurveda & Surf Solitude
                </a>
              </li>
              <li>
                <a href="#itinerary" className="hover:text-white transition-colors">
                  12-Day Route Map
                </a>
              </li>
            </ul>
          </div>

          {/* Newsletter / Bulletin (4 cols) */}
          <div className="lg:col-span-4">
            <span className="text-xs font-semibold uppercase tracking-wider text-amber-300 block mb-2">
              The Ceylon Dispatch
            </span>
            <p className="text-xs text-stone-400 mb-4 leading-relaxed font-light">
              Receive quarterly private travel essays, seasonal wildlife migration notices, and heritage culinary journals.
            </p>
            <form onSubmit={handleSubscribe} className="flex flex-col sm:flex-row gap-2">
              <input
                type="email"
                placeholder="Enter your email address"
                value={newsletterEmail}
                onChange={(e) => setNewsletterEmail(e.target.value)}
                className="bg-black/40 border border-stone-700 rounded-lg px-3.5 py-2 text-xs text-white placeholder-stone-500 focus:outline-none focus:border-[#C46835] flex-1"
                required
              />
              <button
                type="submit"
                className="w-full sm:w-auto px-4 py-2 bg-[#C46835] hover:bg-[#DF8452] text-white text-xs font-semibold uppercase tracking-wider rounded-lg transition-colors cursor-pointer shrink-0"
              >
                Join
              </button>
            </form>
            {subscribed && (
              <div className="mt-2 flex items-center gap-1.5 text-xs text-emerald-400">
                <Check className="w-3.5 h-3.5" />
                <span>Thank you. Your email has been captured in this demo interface.</span>
              </div>
            )}
          </div>
        </div>

        {/* Quiet Bottom Legal Bar */}
        <div className="pt-8 border-t border-white/10 flex flex-col sm:flex-row items-center sm:items-center justify-between text-center sm:text-left text-xs text-stone-500 gap-4">
          <p>© {new Date().getFullYear()} Created by Sankalpa Sithmina</p>

          <button
            type="button"
            onClick={() =>
              window.scrollTo({
                top: 0,
                behavior: 'smooth',
              })
            }
            className="group inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-4 py-2 text-[11px] font-semibold uppercase tracking-[0.16em] text-stone-300 transition-all duration-300 hover:-translate-y-0.5 hover:border-amber-300/40 hover:bg-white/10 hover:text-white focus:outline-none focus-visible:ring-2 focus-visible:ring-amber-300/70"
            aria-label="Back to top"
          >
            <span>Back to Top</span>
            <ArrowUp className="h-3.5 w-3.5 text-amber-300 transition-transform duration-300 group-hover:-translate-y-0.5" />
          </button>
        </div>
      </div>
    </footer>
  );
};
