// import React from 'react';
// import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from 'react-icons/fa';
// import { Link } from 'react-router-dom';

// const Footer = () => {
//   return (
//     <footer className="bg-gray-900 text-gray-300 py-10">
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//         <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
//           {/* Company Info */}
//           <div>
//             <h3 className="text-xl font-bold text-white mb-4">Md Rabban Civil Contractor</h3>
//             <p className="text-gray-400">
//               Building innovative solutions for modern problems. Let's connect and create something amazing together.
//             </p>
//           </div>

//           {/* Navigation Links */}
//           <div>
//             <h4 className="text-lg font-semibold text-white mb-4">Quick Links</h4>
//             <ul className="space-y-2">
//               <li><Link to="/home" className="hover:text-white transition">Home</Link></li>
//               <li><Link to="/about" className="hover:text-white transition">About Us</Link></li>
//               <li><Link to="/service" className="hover:text-white transition">Services</Link></li>
//               <li><Link to="/contact" className="hover:text-white transition">Contact</Link></li>
//             </ul>
//           </div>

//           {/* Services */}
//           <div>
//             <h4 className="text-lg font-semibold text-white mb-4">Services</h4>
//             <ul className="space-y-2">
//               <li><a href="#" className="hover:text-white transition">Building Construction</a></li>
//               <li><a href="#" className="hover:text-white transition">Home Renovation</a></li>
//               <li><a href="#" className="hover:text-white transition">Interior Design</a></li>
//               <li><a href="#" className="hover:text-white transition">Consulting</a></li>
//               <li><a href="#" className="hover:text-white transition">Buy & Sell Property</a></li>
//               <li><a href="#" className="hover:text-white transition">Land Deals</a></li>
//             </ul>
//           </div>

//           {/* Contact Info */}
//           <div>
//             <h4 className="text-lg font-semibold text-white mb-4">Contact Us</h4>
//             <p className="text-gray-400">Sarita Vihar, New Delhi, India</p>
//             <p className="text-gray-400">Email: s.kmohdrabban@gmail.com</p>
//             <p className="text-gray-400">Phone: +91 9818243681</p>
//             <div className="flex space-x-4 mt-4">
//               <a href="#" className="text-gray-400 hover:text-white transition">
//                 <FaFacebookF />
//               </a>
//               <a href="#" className="text-gray-400 hover:text-white transition">
//                 <FaTwitter />
//               </a>
//               <a href="#" className="text-gray-400 hover:text-white transition">
//                 <FaInstagram />
//               </a>
//               <a href="#" className="text-gray-400 hover:text-white transition">
//                 <FaLinkedinIn />
//               </a>
//             </div>
//           </div>
//         </div>

//         <div className="border-t border-gray-700 mt-8 pt-6 text-center text-gray-500 text-sm">
//           © {new Date().getFullYear()} Md Rabban Civil Contractor. All rights reserved.
//         </div>
//       </div>
//     </footer>
//   );
// };

// export default Footer;





import React from 'react';
import { motion } from 'framer-motion';
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <motion.footer
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      style={{
        backgroundColor: '#1a202c',
        color: '#cbd5e0',
        padding: '2.5rem 1rem',
      }}
    >
      <div style={{ maxWidth: '1280px', margin: '0 auto', display: 'flex', flexWrap: 'wrap', gap: '2rem' }}>
        {/* Company Info */}
        <div style={{ flex: '1 1 200px' }}>
          <h3 style={{ fontSize: '1.25rem', fontWeight: 'bold', color: '#fff', marginBottom: '1rem' }}>
            Md Rabban Civil Contractor
          </h3>
          <p>
            Building innovative solutions for modern problems. Let's connect and create something amazing together.
          </p>
        </div>

        {/* Navigation Links */}
        <div style={{ flex: '1 1 150px' }}>
          <h4 style={{ fontSize: '1.125rem', fontWeight: '600', color: '#fff', marginBottom: '1rem' }}>
            Quick Links
          </h4>
          <ul style={{ listStyle: 'none', padding: 0 }}>
            <li><Link to="/home" style={{ color: '#cbd5e0', textDecoration: 'none' }}>Home</Link></li>
            <li><Link to="/about" style={{ color: '#cbd5e0', textDecoration: 'none' }}>About Us</Link></li>
            <li><Link to="/service" style={{ color: '#cbd5e0', textDecoration: 'none' }}>Services</Link></li>
            <li><Link to="/contact" style={{ color: '#cbd5e0', textDecoration: 'none' }}>Contact</Link></li>
          </ul>
        </div>

        {/* Services */}
        <div style={{ flex: '1 1 150px' }}>
          <h4 style={{ fontSize: '1.125rem', fontWeight: '600', color: '#fff', marginBottom: '1rem' }}>
            Services
          </h4>
          <ul style={{ listStyle: 'none', padding: 0 }}>
            <li><a href="#" style={{ color: '#cbd5e0', textDecoration: 'none' }}>Building Construction</a></li>
            <li><a href="#" style={{ color: '#cbd5e0', textDecoration: 'none' }}>Home Renovation</a></li>
            <li><a href="#" style={{ color: '#cbd5e0', textDecoration: 'none' }}>Interior Design</a></li>
            <li><a href="#" style={{ color: '#cbd5e0', textDecoration: 'none' }}>Consulting</a></li>
            <li><a href="#" style={{ color: '#cbd5e0', textDecoration: 'none' }}>Buy & Sell Property</a></li>
            <li><a href="#" style={{ color: '#cbd5e0', textDecoration: 'none' }}>Land Deals</a></li>
          </ul>
        </div>

        {/* Contact Info */}
        <div style={{ flex: '1 1 200px' }}>
          <h4 style={{ fontSize: '1.125rem', fontWeight: '600', color: '#fff', marginBottom: '1rem' }}>
            Contact Us
          </h4>
          <p>Sarita Vihar, New Delhi, India</p>
          <p>Email: s.kmohdrabban@gmail.com</p>
          <p>Phone: +91 9818243681</p>
          <div style={{ display: 'flex', gap: '1rem', marginTop: '1rem' }}>
            <motion.a
              href="#"
              whileHover={{ scale: 1.2 }}
              style={{ color: '#cbd5e0', fontSize: '1.25rem' }}
            >
              <FaFacebookF />
            </motion.a>
            <motion.a
              href="#"
              whileHover={{ scale: 1.2 }}
              style={{ color: '#cbd5e0', fontSize: '1.25rem' }}
            >
              <FaTwitter />
            </motion.a>
            <motion.a
              href="#"
              whileHover={{ scale: 1.2 }}
              style={{ color: '#cbd5e0', fontSize: '1.25rem' }}
            >
              <FaInstagram />
            </motion.a>
            <motion.a
              href="#"
              whileHover={{ scale: 1.2 }}
              style={{ color: '#cbd5e0', fontSize: '1.25rem' }}
            >
              <FaLinkedinIn />
            </motion.a>
          </div>
        </div>
      </div>

      <div style={{ borderTop: '1px solid #4a5568', marginTop: '2rem', paddingTop: '1.5rem', textAlign: 'center', fontSize: '0.875rem', color: '#a0aec0' }}>
        © {new Date().getFullYear()} Md Rabban Civil Contractor. All rights reserved.
      </div>
    </motion.footer>
  );
};

export default Footer;
