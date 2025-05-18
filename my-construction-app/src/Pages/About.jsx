

import React from 'react';
import { motion } from 'framer-motion';
import { Building, Paintbrush, Users, Home } from 'lucide-react';

const features = [
  {
    Icon: Building,
    title: "Construction",
    description: "New buildings with modern standards and design excellence.",
  },
  {
    Icon: Paintbrush,
    title: "Renovation & Interiors",
    description: "Home makeovers, modular kitchens, and interior upgrades.",
  },
  {
    Icon: Home,
    title: "Buy & Sell Homes",
    description: "Expert advice and assistance in home & land deals.",
  },
  {
    Icon: Users,
    title: "Trusted by 500+ Clients",
    description: "We build trust along with quality construction.",
  },
];

const About = () => {
  return (
    <section className="relative bg-gradient-to-tr from-white via-gray-50 to-blue-50 py-24 px-6 md:px-16 lg:px-28 text-gray-900 overflow-hidden">
      {/* Animated subtle background shape */}
      <motion.div
        aria-hidden="true"
        className="absolute top-[-100px] left-[-120px] w-[300px] h-[300px] rounded-full bg-blue-200 opacity-30 blur-3xl animate-blob animation-delay-2000"
      />
      <motion.div
        aria-hidden="true"
        className="absolute top-[50%] right-[-100px] w-[350px] h-[350px] rounded-full bg-blue-300 opacity-20 blur-3xl animate-blob animation-delay-4000"
      />

      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        viewport={{ once: true }}
        className="max-w-4xl mx-auto text-center mb-16"
      >
        <h2 className="text-5xl font-extrabold tracking-tight mb-4">
          About <span className="text-blue-600">Us</span>
        </h2>
        <p className="text-lg text-gray-600 font-light max-w-3xl mx-auto leading-relaxed">
          Delivering excellence in building construction, renovation, and real estate solutions across Delhi & Noida.
        </p>
      </motion.div>

      {/* Content Grid */}
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-14 items-center">
        {/* Left Text */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="space-y-6"
        >
          <h3 className="text-3xl font-semibold text-gray-900">Who We Are</h3>
          <p className="text-gray-700 text-lg leading-relaxed">
            We are a Delhi-based construction company passionate about building dream spaces. From complete building construction to renovation and interior design, our team brings 30+ years of experience and a reputation for reliability.
          </p>
          <p className="text-gray-700 text-lg leading-relaxed">
            As a side service, we also assist with buying and selling residential properties, offering clients a one-stop solution for all housing needs.
          </p>
          <p className="text-gray-700 text-lg leading-relaxed">
            Our mission is to deliver quality, on-time work with a strong focus on client satisfaction and transparent communication.
          </p>
        </motion.div>

        {/* Right Icon Features */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="grid grid-cols-1 sm:grid-cols-2 gap-8"
        >
          {features.map(({ Icon, title, description }, i) => (
            <motion.div
              key={i}
              whileHover={{ scale: 1.05, boxShadow: '0 10px 25px rgba(59, 130, 246, 0.3)' }}
              transition={{ type: 'spring', stiffness: 300, damping: 20 }}
              className="flex gap-5 p-6 bg-white rounded-2xl shadow-md cursor-pointer border border-transparent hover:border-blue-300"
            >
              <Icon size={36} className="text-blue-600 flex-shrink-0" />
              <div>
                <h4 className="text-xl font-semibold mb-1 text-gray-900">{title}</h4>
                <p className="text-gray-600 text-sm leading-snug">{description}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* Tailwind utility for blob animation */}
      <style>{`
        @keyframes blob {
          0%, 100% {
            transform: translate(0px, 0px) scale(1);
          }
          33% {
            transform: translate(30px, -20px) scale(1.05);
          }
          66% {
            transform: translate(-20px, 30px) scale(0.95);
          }
        }
        .animate-blob {
          animation: blob 7s infinite;
        }
        .animation-delay-2000 {
          animation-delay: 2s;
        }
        .animation-delay-4000 {
          animation-delay: 4s;
        }
      `}</style>
    </section>
  );
};

export default About;
