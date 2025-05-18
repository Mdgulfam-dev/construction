// import React from "react";
// import { motion } from "framer-motion";
// import { Hammer, Home, ArrowRight } from "lucide-react";
// import { Link } from "react-router-dom";

// import heroimg from "../assets/Heroimg.jpg";

// const Hero = () => {
//   return (
//     <section className="bg-gradient-to-br from-blue-50 to-white py-20 px-4 md:px-10 lg:px-20">
//       <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-12">
//         {/* Left Content */}
//         <motion.div
//           initial={{ opacity: 0, y: 30 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.6 }}
//           className="flex-1"
//         >
//           {/* Primary Tagline */}
//           <h1 className="text-4xl md:text-5xl font-extrabold text-gray-800 leading-tight mb-4">
//             Expert <span className="text-blue-600">Building & Renovation</span>{" "}
//             Services
//           </h1>

//           {/* Description */}
//           <p className="text-lg text-gray-600 mb-4">
//             From full-scale construction to elegant interiors and renovations,
//             we build spaces that inspire. Serving clients across Delhi & Noida
//             with quality and trust.
//           </p>

//           {/* Secondary Service Highlight */}
//           <div className="flex items-center gap-2 bg-blue-100 text-blue-700 px-4 py-2 rounded-xl text-sm font-semibold mb-6">
//             <Home size={18} /> Also dealing in sale & purchase of residential
//             properties
//           </div>

//           {/* CTA Buttons */}
//           <div className="flex flex-wrap gap-4">
//             <Link
//               to="/contact"
//               smooth={true}
//               duration={500}
//               offset={-70}
//               className="cursor-pointer bg-blue-600 text-white px-6 py-3 rounded-xl hover:bg-blue-700 transition flex items-center gap-2"
//             >
//               Get a Free Quote <ArrowRight size={18} />
//             </Link>
//             <Link
//               to="/project"
//               className="border border-blue-600 text-blue-600 px-6 py-3 rounded-xl hover:bg-blue-100 transition"
//             >
//               View Our Work
//             </Link>
//           </div>
//         </motion.div>

//         {/* Right Image */}
//         <motion.div
//           initial={{ opacity: 0, scale: 0.95 }}
//           animate={{ opacity: 1, scale: 1 }}
//           transition={{ delay: 0.3, duration: 0.6 }}
//           className="flex-1"
//         >
//           <div className="relative group">
//             <img
//               src={heroimg}
//               alt="Construction Site"
//               className="w-full h-auto rounded-2xl shadow-2xl group-hover:scale-105 transition duration-500"
//             />
//             {/* Small Tag */}
//             <div className="absolute bottom-4 left-4 bg-white/90 backdrop-blur-sm px-4 py-2 rounded-xl shadow-md">
//               <p className="text-sm text-gray-700 font-medium flex items-center gap-1">
//                 <Hammer size={14} /> Trusted by 500+ clients
//               </p>
//             </div>
//           </div>
//         </motion.div>
//       </div>
//     </section>
//   );
// };

// export default Hero;






import React from "react";
import { motion } from "framer-motion";
import { Hammer, Home, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import heroimg from "../assets/Heroimg.jpg";

const Hero = () => {

  // WhatsApp Floating Button
const WhatsAppButton = () => (
  <a
    href="https://wa.me/919818243681" // Replace with your WhatsApp number
    target="_blank"
    rel="noopener noreferrer"
    className="fixed bottom-5 right-5 z-50"
  >
    <img
      src="https://img.icons8.com/color/96/000000/whatsapp--v1.png"
      alt="WhatsApp"
      className="w-14 h-14 hover:scale-110 transition-transform duration-300 drop-shadow-lg"
    />
  </a>
);

  return (
    <section className="relative overflow-hidden py-20 px-4 md:px-10 lg:px-20 bg-gradient-to-br from-blue-50 via-white to-pink-50">
      {/* Blurred Animated Shapes */}
      <div className="absolute top-[-80px] left-[-80px] w-72 h-72 bg-blue-200 opacity-20 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-[-80px] right-[-80px] w-72 h-72 bg-pink-200 opacity-20 rounded-full blur-3xl animate-pulse"></div>

      <div className="relative max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-16 md:gap-12">
        {/* Left Content */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="flex-1"
        >
          {/* Primary Tagline */}
          <h1 className="text-4xl md:text-5xl font-extrabold text-gray-800 leading-tight mb-6">
            Expert{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">
              Building & Renovation
            </span>{" "}
            Services
          </h1>

          {/* Description */}
          <p className="text-lg text-gray-600 mb-5 max-w-xl">
            From full-scale construction to elegant interiors and renovations,
            we build spaces that inspire. Proudly serving Delhi & Noida with
            excellence and trust.
          </p>

          {/* Secondary Tag */}
          <div className="inline-flex items-center gap-2 bg-blue-100 text-blue-700 px-4 py-2 rounded-xl text-sm font-semibold mb-8 shadow-sm">
            <Home size={18} />
            Also dealing in sale & purchase of residential properties
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-wrap gap-4">
            <Link
              to="/contact"
              className="cursor-pointer bg-blue-600 text-white px-6 py-3 rounded-xl hover:bg-blue-700 transition-all duration-300 shadow-lg flex items-center gap-2"
            >
              Get a Free Quote <ArrowRight size={18} />
            </Link>
            <Link
              to="/project"
              className="border border-blue-600 text-blue-600 px-6 py-3 rounded-xl hover:bg-blue-50 transition-all duration-300 shadow"
            >
              View Our Work
            </Link>
          </div>
        </motion.div>

        {/* Right Image */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.3, duration: 0.6 }}
          className="flex-1"
        >
          <div className="relative group hover:scale-105 transition-transform duration-500">
            <img
              src={heroimg}
              alt="Construction Site"
              className="w-full h-auto rounded-3xl shadow-2xl"
            />
            {/* Tag Overlay */}
            <div className="absolute bottom-4 left-4 bg-white/90 backdrop-blur-sm px-4 py-2 rounded-xl shadow-md">
              <p className="text-sm text-gray-700 font-medium flex items-center gap-1">
                <Hammer size={14} /> Trusted by 500+ clients
              </p>
            </div>
          </div>
        </motion.div>
      </div>
      <div>
        <WhatsAppButton />

      </div>
    </section>
  );
};

export default Hero;
