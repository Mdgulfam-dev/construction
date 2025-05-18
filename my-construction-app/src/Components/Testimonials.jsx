// import React from 'react';
// import { motion } from 'framer-motion';
// import { Star } from 'lucide-react';

// const testimonials = [
//   {
//     name: "Rahul Verma",
//     role: "Homeowner, Noida",
//     rating: 5,
//     comment: "Neva Infra turned my old house into a modern masterpiece. Timely work, no hidden costs, and the interior was stunning.",
//   },
//   {
//     name: "Priya Singh",
//     role: "Interior Design Client, Delhi",
//     rating: 4,
//     comment: "Very happy with the renovation. Their team is polite and skilled. Communication throughout the process was excellent.",
//   },
//   {
//     name: "Vikram Bhatia",
//     role: "Real Estate Buyer",
//     rating: 5,
//     comment: "They helped me purchase a perfect investment flat. Trustworthy and transparent in all paperwork and dealings.",
//   },
// ];

// const Testimonials = () => {
//   return (
//     <section className="bg-gray-50 py-20 px-4 md:px-10 lg:px-20" id="testimonials">
//       <div className="max-w-7xl mx-auto text-center mb-12">
//         <motion.h2
//           initial={{ opacity: 0, y: 20 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.5 }}
//           className="text-3xl md:text-4xl font-bold text-gray-800"
//         >
//           What Our <span className="text-blue-600">Clients Say</span>
//         </motion.h2>
//         <p className="mt-4 text-gray-600 text-lg max-w-2xl mx-auto">
//           Real feedback from real people who trusted us with their dream spaces.
//         </p>
//       </div>

//       <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-7xl mx-auto">
//         {testimonials.map((t, index) => (
//           <motion.div
//             key={index}
//             initial={{ opacity: 0, y: 30 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.6, delay: index * 0.2 }}
//             className="bg-white shadow-md rounded-xl p-6 text-left hover:shadow-lg transition"
//           >
//             <div className="flex items-center mb-3">
//               {Array(t.rating).fill().map((_, i) => (
//                 <Star key={i} className="w-5 h-5 text-yellow-500 fill-yellow-500 mr-1" />
//               ))}
//             </div>
//             <p className="text-gray-700 mb-4 text-sm italic">"{t.comment}"</p>
//             <div>
//               <h4 className="text-md font-semibold text-gray-800">{t.name}</h4>
//               <p className="text-xs text-gray-500">{t.role}</p>
//             </div>
//           </motion.div>
//         ))}
//       </div>
//     </section>
//   );
// };

// export default Testimonials;




import React from 'react';
import { motion } from 'framer-motion';
import { Star } from 'lucide-react';

const testimonials = [
  {
    name: "Rahul Verma",
    role: "Homeowner, Noida",
    rating: 5,
    comment: "Neva Infra turned my old house into a modern masterpiece. Timely work, no hidden costs, and the interior was stunning.",
  },
  {
    name: "Priya Singh",
    role: "Interior Design Client, Delhi",
    rating: 4,
    comment: "Very happy with the renovation. Their team is polite and skilled. Communication throughout the process was excellent.",
  },
  {
    name: "Vikram Bhatia",
    role: "Real Estate Buyer",
    rating: 5,
    comment: "They helped me purchase a perfect investment flat. Trustworthy and transparent in all paperwork and dealings.",
  },
];

const Testimonials = () => {
  return (
    <section className="relative overflow-hidden bg-gradient-to-r from-gray-100 via-white to-gray-100 py-24 px-6 md:px-12 lg:px-24" id="testimonials">

      {/* Animated gradient background */}
      <motion.div
        aria-hidden="true"
        className="absolute inset-0 -z-10 bg-gradient-to-tr from-blue-100 via-blue-50 to-transparent opacity-30 animate-gradient-x"
      />

      <div className="max-w-7xl mx-auto text-center mb-16">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="text-4xl md:text-5xl font-extrabold tracking-tight text-gray-900"
        >
          What Our <span className="text-blue-600">Clients Say</span>
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.3 }}
          viewport={{ once: true }}
          className="mt-4 text-gray-600 text-lg max-w-3xl mx-auto font-light"
        >
          Real feedback from real people who trusted us with their dream spaces.
        </motion.p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-10 max-w-7xl mx-auto">
        {testimonials.map((t, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.25 }}
            viewport={{ once: true }}
            className="bg-white rounded-3xl p-8 shadow-lg border border-gray-200 hover:shadow-xl transition-shadow duration-500 ease-in-out cursor-pointer"
          >
            <div className="flex items-center mb-4">
              {Array(t.rating).fill().map((_, i) => (
                <Star
                  key={i}
                  className="w-6 h-6 text-yellow-400 fill-yellow-400 mr-1 drop-shadow-md"
                />
              ))}
            </div>
            <p className="text-gray-700 mb-6 text-base italic leading-relaxed tracking-wide">
              "{t.comment}"
            </p>
            <div>
              <h4 className="text-lg font-semibold text-gray-900">{t.name}</h4>
              <p className="text-sm text-gray-500">{t.role}</p>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Custom tailwind animation */}
      <style>{`
        @keyframes gradient-x {
          0%, 100% {
            background-position: 0% 50%;
          }
          50% {
            background-position: 100% 50%;
          }
        }
        .animate-gradient-x {
          background-size: 200% 200%;
          animation: gradient-x 12s ease infinite;
        }
      `}</style>
    </section>
  );
};

export default Testimonials;
