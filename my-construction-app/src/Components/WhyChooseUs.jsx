// import React from 'react';
// import { motion } from 'framer-motion';
// import { CheckCircle, ShieldCheck, Clock, Users } from 'lucide-react';

// const features = [
//   {
//     icon: <CheckCircle className="text-blue-600 w-8 h-8" />,
//     title: '100+ Successful Projects',
//     description: 'From interiors to multi-story constructions, we deliver with precision.',
//   },
//   {
//     icon: <ShieldCheck className="text-blue-600 w-8 h-8" />,
//     title: 'Trust & Transparency',
//     description: 'Clear pricing, on-time delivery, and honest work — no surprises.',
//   },
//   {
//     icon: <Clock className="text-blue-600 w-8 h-8" />,
//     title: 'On-Time Completion',
//     description: 'We follow strict project timelines and keep you updated throughout.',
//   },
//   {
//     icon: <Users className="text-blue-600 w-8 h-8" />,
//     title: 'Dedicated Project Team',
//     description: 'A professional team for each project — manager, workers, and designer.',
//   },
// ];

// const WhyChooseUs = () => {
//   return (
//     <section className="py-20 px-4 md:px-10 lg:px-20 bg-white" id="why-us">
//       <div className="max-w-7xl mx-auto text-center mb-12">
//         <motion.h2
//           initial={{ opacity: 0, y: 20 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.5 }}
//           className="text-3xl md:text-4xl font-bold text-gray-800"
//         >
//           Why Choose <span className="text-blue-600">Us</span>
//         </motion.h2>
//         <p className="mt-4 text-gray-600 text-lg max-w-2xl mx-auto">
//           We are committed to excellence in building, renovating, and helping you find your dream home or investment property.
//         </p>
//       </div>

//       <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
//         {features.map((feature, index) => (
//           <motion.div
//             key={index}
//             initial={{ opacity: 0, y: 30 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.5, delay: index * 0.2 }}
//             className="bg-blue-50 hover:bg-blue-100 transition rounded-xl p-6 text-center shadow-sm"
//           >
//             <div className="flex justify-center mb-4">
//               {feature.icon}
//             </div>
//             <h3 className="text-xl font-semibold text-gray-800">{feature.title}</h3>
//             <p className="text-gray-600 mt-2 text-sm">{feature.description}</p>
//           </motion.div>
//         ))}
//       </div>
//     </section>
//   );
// };

// export default WhyChooseUs;





import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle, ShieldCheck, Clock, Users } from 'lucide-react';

const features = [
  {
    icon: <CheckCircle className="text-blue-600 w-8 h-8" />,
    title: '1000+ Successful Projects',
    description: 'From interiors to multi-story constructions, we deliver with precision.',
  },
  {
    icon: <ShieldCheck className="text-blue-600 w-8 h-8" />,
    title: 'Trust & Transparency',
    description: 'Clear pricing, on-time delivery, and honest work — no surprises.',
  },
  {
    icon: <Clock className="text-blue-600 w-8 h-8" />,
    title: 'On-Time Completion',
    description: 'We follow strict project timelines and keep you updated throughout.',
  },
  {
    icon: <Users className="text-blue-600 w-8 h-8" />,
    title: 'Dedicated Project Team',
    description: 'A professional team for each project — manager, workers, and designer.',
  },
];

const WhyChooseUs = () => {
  return (
    <section className="relative py-20 px-4 md:px-10 lg:px-20 bg-white overflow-hidden" id="why-us">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-10 left-10 w-40 h-40 bg-blue-100 rounded-full opacity-50 animate-float-slow"></div>
        <div className="absolute bottom-20 right-20 w-32 h-32 bg-blue-200 rounded-full opacity-50 animate-float-fast"></div>
        <div className="absolute top-1/2 left-1/2 w-24 h-24 bg-blue-300 rounded-full opacity-50 animate-float-medium"></div>
      </div>

      <div className="max-w-7xl mx-auto text-center mb-12">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-3xl md:text-4xl font-bold text-gray-800"
        >
          Why Choose <span className="text-blue-600">Us</span>
        </motion.h2>
        <p className="mt-4 text-gray-600 text-lg max-w-2xl mx-auto">
          We are committed to excellence in building, renovating, and helping you find your dream home or investment property.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
        {features.map((feature, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
            className="bg-white bg-opacity-80 backdrop-blur-md hover:bg-opacity-100 transition rounded-xl p-6 text-center shadow-lg"
          >
            <div className="flex justify-center mb-4">
              {feature.icon}
            </div>
            <h3 className="text-xl font-semibold text-gray-800">{feature.title}</h3>
            <p className="text-gray-600 mt-2 text-sm">{feature.description}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default WhyChooseUs;
