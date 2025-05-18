import React from 'react';
import { motion } from 'framer-motion';
import { Hammer, Home, Paintbrush } from 'lucide-react';
import villa from '../assets/villa.jpg';
import kitchen from '../assets/kitechen.jpeg';
import land from '../assets/land.jpg';
import renovation from '../assets/renovation.jpeg';

const projects = [
  {
    title: 'Modern Villa Construction',
    description: 'A full-scale modern villa built from foundation to finish in Noida Sector 79.',
    image: villa,
    type: 'Construction',
  },
  {
    title: '3BHK Apartment Renovation',
    description: 'Complete renovation of kitchen, flooring, and wall design for a family in Delhi.',
    image: renovation,
    type: 'Renovation',
  },
  {
    title: 'Modular Kitchen & Wardrobe',
    description: 'Designed and built modular interiors for a newly purchased flat in Noida Extension.',
    image: kitchen,
    type: 'Interiors',
  },
  {
    title: 'Land Purchase Consultation',
    description: 'Helped a client find and finalize a residential land deal with full legal support.',
    image: land,
    type: 'Property Deal',
  },
];

// Color mapping for project types
const typeColors = {
  Construction: 'bg-blue-100 text-blue-700',
  Renovation: 'bg-green-100 text-green-700',
  Interiors: 'bg-purple-100 text-purple-700',
  'Property Deal': 'bg-yellow-100 text-yellow-700',
};

// Icon mapping for project types
const typeIcons = {
  Construction: Hammer,
  Renovation: Paintbrush,
  Interiors: Paintbrush,
  'Property Deal': Home,
};

const Projects = () => {
  return (
    <section className="relative bg-gradient-to-br from-gray-100 via-white to-gray-100 py-20 px-6 md:px-12 lg:px-24 overflow-hidden">
      {/* Decorative background pattern */}
      <svg
        className="absolute top-0 left-0 w-72 h-72 text-blue-100 opacity-20"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 144 144"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M0 72h144M72 0v144"
        />
      </svg>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16 max-w-3xl mx-auto"
        >
          <h2 className="text-5xl font-extrabold text-gray-900 mb-4">
            Our Recent Projects
          </h2>
          <p className="text-lg text-gray-600 font-light leading-relaxed">
            We’ve completed a variety of construction, renovation, and property service projects across Delhi & Noida.
          </p>
        </motion.div>

        {/* Projects Grid */}
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map(({ title, description, image, type }, index) => {
            const Icon = typeIcons[type] || Hammer;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.15 }}
                viewport={{ once: true }}
                className="bg-white rounded-3xl shadow-lg overflow-hidden border border-transparent hover:border-blue-300 hover:shadow-2xl transition-transform transform hover:scale-[1.03] cursor-pointer flex flex-col"
              >
                {/* Image container */}
                <div className="relative w-full aspect-[4/3] overflow-hidden rounded-t-3xl">
                  <img
                    src={image}
                    alt={title}
                    className="object-cover w-full h-full hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent rounded-t-3xl pointer-events-none"></div>
                </div>

                <div className="p-6 flex flex-col flex-grow">
                  <h3 className="text-2xl font-semibold text-gray-900 mb-3">{title}</h3>
                  <p className="text-gray-700 flex-grow leading-relaxed mb-5">{description}</p>

                  {/* Updated Type badge */}
                  <div
                    className={`inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wide shadow-sm border transition-colors
                      ${typeColors[type] || 'bg-gray-100 text-gray-700 border-gray-300'}
                    `}
                  >
                    <Icon size={20} className="text-current" />
                    <span>{type}</span>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Projects;
