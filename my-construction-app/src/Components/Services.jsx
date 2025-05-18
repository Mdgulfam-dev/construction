// import React from 'react';
// import { motion } from 'framer-motion';
// import { Wrench, Home, Paintbrush, Building2, MapPinned } from 'lucide-react';

// const services = [
//   {
//     icon: Building2,
//     title: "Building Construction",
//     desc: "Complete building construction services from start to finish, tailored to your vision.",
//   },
//   {
//     icon: Paintbrush,
//     title: "Home Renovation",
//     desc: "Modern and affordable renovation to elevate your home's style and functionality.",
//   },
//   {
//     icon: Wrench,
//     title: "Interior Design",
//     desc: "Custom interior designs that reflect elegance, comfort, and your personality.",
//   },
//   {
//     icon: Home,
//     title: "Buy/Sell Property",
//     desc: "We assist with property sales and purchases across Delhi & Noida hassle-free.",
//   },
//   {
//     icon: MapPinned,
//     title: "Land Deals",
//     desc: "Best land options for residential and commercial use with expert assistance.",
//   },
// ];

// const Services = () => {
//   return (
//     <section className="py-20 bg-gradient-to-br from-white to-blue-50 px-4 md:px-10 lg:px-20">
//       <div className="max-w-7xl mx-auto text-center">
//         <motion.h2 
//           initial={{ opacity: 0, y: 20 }} 
//           whileInView={{ opacity: 1, y: 0 }} 
//           transition={{ duration: 0.6 }} 
//           viewport={{ once: true }}
//           className="text-4xl md:text-5xl font-bold text-gray-800 mb-4"
//         >
//           What We Do
//         </motion.h2>
//         <motion.p 
//           initial={{ opacity: 0, y: 10 }} 
//           whileInView={{ opacity: 1, y: 0 }} 
//           transition={{ delay: 0.2, duration: 0.6 }} 
//           viewport={{ once: true }}
//           className="text-gray-600 text-lg mb-12 max-w-2xl mx-auto"
//         >
//           Discover our core services that shape homes, renovate dreams, and empower real estate choices.
//         </motion.p>

//         <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
//           {services.map((service, index) => (
//             <motion.div
//               key={index}
//               initial={{ opacity: 0, y: 30 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               transition={{ delay: index * 0.1, duration: 0.5 }}
//               viewport={{ once: true }}
//               className="bg-white hover:shadow-xl transition-shadow duration-300 rounded-2xl p-6 border border-blue-100"
//             >
//               <div className="bg-blue-100 w-14 h-14 flex items-center justify-center rounded-full mb-4 mx-auto">
//                 <service.icon className="text-blue-600 w-6 h-6" />
//               </div>
//               <h3 className="text-xl font-semibold text-gray-800 mb-2">
//                 {service.title}
//               </h3>
//               <p className="text-gray-600 text-sm">
//                 {service.desc}
//               </p>
//             </motion.div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Services;






import React from 'react';
import { motion } from 'framer-motion';
import { Wrench, Home, Paintbrush, Building2, MapPinned } from 'lucide-react';

const services = [
  {
    icon: Building2,
    title: "Building Construction",
    desc: "Complete building construction services from start to finish, tailored to your vision.",
  },
  {
    icon: Paintbrush,
    title: "Home Renovation",
    desc: "Modern and affordable renovation to elevate your home's style and functionality.",
  },
  {
    icon: Wrench,
    title: "Interior Design",
    desc: "Custom interior designs that reflect elegance, comfort, and your personality.",
  },
  {
    icon: Home,
    title: "Buy/Sell Property",
    desc: "We assist with property sales and purchases across Delhi & Noida hassle-free.",
  },
  {
    icon: MapPinned,
    title: "Land Deals",
    desc: "Best land options for residential and commercial use with expert assistance.",
  },
];

const Services = () => {
  return (
    <section className="relative py-20 px-4 md:px-10 lg:px-20 overflow-hidden">
      {/* Animated Gradient Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-400 via-purple-500 to-pink-500 bg-[length:200%_200%] animate-[gradient_15s_ease_infinite]"></div>

      {/* Blurred Animated Shapes */}
      <div className="absolute top-0 left-0 w-72 h-72 bg-pink-300 opacity-30 rounded-full filter blur-3xl animate-pulse"></div>
      <div className="absolute bottom-0 right-0 w-72 h-72 bg-blue-300 opacity-30 rounded-full filter blur-3xl animate-pulse"></div>

      {/* Content */}
      <div className="relative max-w-7xl mx-auto text-center">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }} 
          whileInView={{ opacity: 1, y: 0 }} 
          transition={{ duration: 0.6 }} 
          viewport={{ once: true }}
          className="text-4xl md:text-5xl font-bold text-white mb-4"
        >
          What We Do
        </motion.h2>
        <motion.p 
          initial={{ opacity: 0, y: 10 }} 
          whileInView={{ opacity: 1, y: 0 }} 
          transition={{ delay: 0.2, duration: 0.6 }} 
          viewport={{ once: true }}
          className="text-white text-lg mb-12 max-w-2xl mx-auto"
        >
          Discover our core services that shape homes, renovate dreams, and empower real estate choices.
        </motion.p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              viewport={{ once: true }}
              className="bg-white bg-opacity-80 backdrop-blur-md hover:shadow-xl transition-shadow duration-300 rounded-2xl p-6 border border-blue-100"
            >
              <div className="bg-blue-100 w-14 h-14 flex items-center justify-center rounded-full mb-4 mx-auto">
                <service.icon className="text-blue-600 w-6 h-6" />
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">
                {service.title}
              </h3>
              <p className="text-gray-600 text-sm">
                {service.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
