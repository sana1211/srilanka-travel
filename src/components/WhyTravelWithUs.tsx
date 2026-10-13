import React from 'react';
import { motion } from 'motion/react';
import {
  BadgeCheck,
  Clock3,
  Compass,
  HeartHandshake,
  Leaf,
  Route,
} from 'lucide-react';

const reasons = [
  {
    icon: Compass,
    title: 'Local Expertise, Thoughtfully Curated',
    description:
      'Journeys are shaped around Sri Lanka’s cultural rhythms, regional seasons, travel times, and the experiences that are genuinely worth slowing down for.',
  },
  {
    icon: Route,
    title: 'Completely Tailor-Made',
    description:
      'Adjust the route, pace, hotel style, interests, and number of nights. Every itinerary can be refined around how you prefer to travel.',
  },
  {
    icon: HeartHandshake,
    title: 'Private, Personal Service',
    description:
      'Travel with a dedicated chauffeur-guide and a clear point of contact from planning through departure, without the feel of a fixed group tour.',
  },
  {
    icon: Clock3,
    title: 'A Better-Paced Island Journey',
    description:
      'We account for real transfer times and balance early starts, wildlife windows, scenic rail journeys, heritage visits, and time to simply enjoy each place.',
  },
  {
    icon: BadgeCheck,
    title: 'Quality-First Stays & Experiences',
    description:
      'The focus is on characterful boutique stays, trusted local partners, meaningful guided experiences, and inclusions that add value to the journey.',
  },
  {
    icon: Leaf,
    title: 'Respect for Place & Community',
    description:
      'We encourage respectful temple etiquette, responsible wildlife viewing, local dining, and experiences that support the people and places you visit.',
  },
];

export const WhyTravelWithUs: React.FC = () => {
  return (
    <section id="why-us" className="scroll-mt-20 bg-[#0F2E22] py-16 sm:py-20 lg:py-24 text-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:items-start">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.5 }}
            className="lg:sticky lg:top-28"
          >
            <span className="mb-3 block text-xs font-semibold uppercase tracking-[0.2em] text-amber-300">
              Why Travel With Us
            </span>

            <h2 className="font-display text-4xl font-normal tracking-tight sm:text-5xl">
              Sri Lanka, Designed Around You
            </h2>

            <p className="mt-5 max-w-xl text-sm font-light leading-7 text-stone-300 sm:text-base">
              A memorable island journey is not about fitting more stops into a schedule. It is about choosing the right places, the right pace, and the right moments to experience them.
            </p>

            <div className="mt-8 rounded-2xl border border-white/10 bg-white/[0.05] p-5 backdrop-blur-sm">
              <p className="text-sm leading-6 text-stone-200">
                From ancient kingdoms and tea-covered mountains to safari wilderness and the southern coast, every route is designed as one connected journey rather than a collection of disconnected day trips.
              </p>
            </div>
          </motion.div>

          <div className="grid gap-4 sm:grid-cols-2">
            {reasons.map((reason, index) => {
              const Icon = reason.icon;

              return (
                <motion.article
                  key={reason.title}
                  initial={{ opacity: 0, y: 18 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-60px' }}
                  transition={{ duration: 0.4, delay: index * 0.06 }}
                  className="group rounded-2xl border border-white/10 bg-white/[0.045] p-6 transition-all duration-300 hover:-translate-y-1 hover:border-amber-300/30 hover:bg-white/[0.075]"
                >
                  <div className="mb-5 flex h-11 w-11 items-center justify-center rounded-xl border border-amber-300/20 bg-amber-300/10 text-amber-300 transition-transform duration-300 group-hover:scale-105">
                    <Icon className="h-5 w-5" />
                  </div>

                  <h3 className="font-display text-xl font-medium text-white">
                    {reason.title}
                  </h3>

                  <p className="mt-3 text-xs font-light leading-6 text-stone-300 sm:text-sm">
                    {reason.description}
                  </p>
                </motion.article>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};
