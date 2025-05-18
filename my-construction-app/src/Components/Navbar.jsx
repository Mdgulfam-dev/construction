// import React, { useState, useRef } from 'react';
// import { ChevronDown, Menu, X } from 'lucide-react';
// import { Link } from 'react-router-dom';

// const Navbar = () => {
//   const [mobileOpen, setMobileOpen] = useState(false);
//   const [dropdownOpen, setDropdownOpen] = useState(false); // Desktop dropdown open state
//   const [mobileAccountOpen, setMobileAccountOpen] = useState(false); // Mobile dropdown open state
//   const closeTimeoutRef = useRef(null);

//   const navLinks = ['home', 'budget', 'about', 'project', 'contact'];

//   // Toggle mobile menu
//   const toggleMobileMenu = () => {
//     setMobileOpen(!mobileOpen);
//     setMobileAccountOpen(false); // close mobile dropdown if open
//     setDropdownOpen(false); // close desktop dropdown if open
//   };

//   // Desktop dropdown mouse enter (hover)
//   const handleDropdownMouseEnter = () => {
//     if (closeTimeoutRef.current) {
//       clearTimeout(closeTimeoutRef.current);
//       closeTimeoutRef.current = null;
//     }
//     setDropdownOpen(true);
//   };

//   // Desktop dropdown mouse leave (hover)
//   const handleDropdownMouseLeave = () => {
//     closeTimeoutRef.current = setTimeout(() => {
//       setDropdownOpen(false);
//     }, 200); // delay before closing dropdown
//   };

//   // Mobile dropdown toggle (click)
//   const toggleMobileAccountDropdown = () => {
//     setMobileAccountOpen(!mobileAccountOpen);
//   };

//   return (
//     <>
//       {/* Fixed Navbar */}
//       <nav className="fixed top-0 left-0 w-full bg-white shadow-md z-50 h-16">
//         <div className="max-w-7xl mx-auto px-4 h-full flex justify-between items-center">
//           {/* Logo */}
//           <Link
//             to="/home"
//             className="text-xl sm:text-2xl font-bold text-blue-600 tracking-wide"
//           >
//             Md Rabban
//             <span className="text-gray-800"> Civil Contractor</span>
//           </Link>

//           {/* Desktop Menu */}
//           <div className="hidden md:flex items-center gap-8 text-gray-700 font-medium">
//             {navLinks.map((path) => (
//               <Link
//                 key={path}
//                 to={`/${path}`}
//                 className="relative hover:text-blue-600 transition duration-200 group capitalize"
//               >
//                 {path}
//                 <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-blue-600 group-hover:w-full transition-all duration-300"></span>
//               </Link>
//             ))}

//             {/* Dropdown on Hover for Desktop */}
//             <div
//               className="relative"
//               onMouseEnter={handleDropdownMouseEnter}
//               onMouseLeave={handleDropdownMouseLeave}
//               style={{ zIndex: 1000 }}
//             >
//               <div className="flex items-center gap-1 cursor-pointer hover:text-blue-600 transition select-none">
//                 Account <ChevronDown size={18} />
//               </div>

//               <div
//                 className={`absolute right-0 mt-2 w-40 bg-white border rounded-lg shadow-md py-2 transition-all transform duration-300 origin-top-right ${
//                   dropdownOpen
//                     ? 'scale-100 opacity-100 pointer-events-auto'
//                     : 'scale-95 opacity-0 pointer-events-none'
//                 }`}
//               >
//                 <Link
//                   to="/login"
//                   className="block px-4 py-2 hover:bg-gray-100 transition"
//                 >
//                   Login
//                 </Link>
//                 <Link
//                   to="/register"
//                   className="block px-4 py-2 hover:bg-gray-100 transition"
//                 >
//                   Register
//                 </Link>
//               </div>
//             </div>
//           </div>

//           {/* Mobile Toggle Button */}
//           <button
//             onClick={toggleMobileMenu}
//             className="md:hidden text-gray-700 focus:outline-none"
//             aria-label="Toggle menu"
//           >
//             {mobileOpen ? <X size={26} /> : <Menu size={26} />}
//           </button>
//         </div>
//       </nav>

//       {/* Mobile Dropdown Menu */}
//       <div
//         className={`md:hidden fixed top-16 left-0 w-full bg-white shadow-md transition-all duration-300 overflow-hidden ${
//           mobileOpen ? 'max-h-screen py-4 px-6' : 'max-h-0 py-0 px-6'
//         }`}
//         style={{ zIndex: 999 }}
//       >
//         <div className="flex flex-col gap-4 text-gray-700 font-medium">
//           {navLinks.map((path) => (
//             <Link
//               key={path}
//               to={`/${path}`}
//               className="hover:text-blue-600 transition capitalize"
//               onClick={toggleMobileMenu}
//             >
//               {path}
//             </Link>
//           ))}

//           {/* Mobile Account dropdown with click to toggle */}
//           <div>
//             <button
//               onClick={toggleMobileAccountDropdown}
//               className="flex items-center justify-between w-full hover:text-blue-600 transition capitalize font-medium py-2"
//               aria-expanded={mobileAccountOpen}
//               aria-controls="mobile-account-menu"
//             >
//               Account <ChevronDown size={18} />
//             </button>
//             <div
//               id="mobile-account-menu"
//               className={`overflow-hidden transition-max-height duration-300 ${
//                 mobileAccountOpen ? 'max-h-40' : 'max-h-0'
//               }`}
//             >
//               <Link
//                 to="/login"
//                 className="block px-4 py-2 hover:bg-gray-100 transition"
//                 onClick={toggleMobileMenu}
//               >
//                 Login
//               </Link>
//               <Link
//                 to="/register"
//                 className="block px-4 py-2 hover:bg-gray-100 transition"
//                 onClick={toggleMobileMenu}
//               >
//                 Register
//               </Link>
//             </div>
//           </div>
//         </div>
//       </div>

//       {/* Spacer to prevent content hidden under fixed navbar */}
//       <div className="h-16"></div>
//     </>
//   );
// };

// export default Navbar;








import React, { useState, useRef, useContext } from 'react';
import { ChevronDown, Menu, X, LogOut } from 'lucide-react'; // Added LogOut icon
import { Link } from 'react-router-dom';
import { AuthContext } from '../context/AuthContext'; // Adjust path as needed

const Navbar = () => {
  const { isAuthenticated, logout } = useContext(AuthContext);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [mobileAccountOpen, setMobileAccountOpen] = useState(false);
  const closeTimeoutRef = useRef(null);

  const navLinks = ['home', 'budget', 'about', 'project', 'contact'];

  const toggleMobileMenu = () => {
    setMobileOpen(!mobileOpen);
    setMobileAccountOpen(false);
    setDropdownOpen(false);
  };

  const handleDropdownMouseEnter = () => {
    if (closeTimeoutRef.current) {
      clearTimeout(closeTimeoutRef.current);
      closeTimeoutRef.current = null;
    }
    setDropdownOpen(true);
  };

  const handleDropdownMouseLeave = () => {
    closeTimeoutRef.current = setTimeout(() => {
      setDropdownOpen(false);
    }, 200);
  };

  const toggleMobileAccountDropdown = () => {
    setMobileAccountOpen(!mobileAccountOpen);
  };

  const handleLogout = () => {
    logout();
    setMobileOpen(false); // Close mobile menu after logout
  };

  return (
    <>
      {/* Fixed Navbar */}
      <nav className="fixed top-0 left-0 w-full bg-white shadow-md z-50 h-16">
        <div className="max-w-7xl mx-auto px-4 h-full flex justify-between items-center">
          {/* Logo */}
          <Link
            to="/home"
            className="text-xl sm:text-2xl font-bold text-blue-600 tracking-wide"
          >
            Md Rabban
            <span className="text-gray-800"> Civil Contractor</span>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-8 text-gray-700 font-medium">
            {navLinks.map((path) => (
              <Link
                key={path}
                to={`/${path}`}
                className="relative hover:text-blue-600 transition duration-200 group capitalize"
              >
                {path}
                <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-blue-600 group-hover:w-full transition-all duration-300"></span>
              </Link>
            ))}

            {/* Conditional rendering based on auth state */}
            {isAuthenticated ? (
              <button
                onClick={handleLogout}
                className="flex items-center gap-1 text-red-600 hover:text-red-800 transition"
              >
                Logout <LogOut size={18} />
              </button>
            ) : (
              <div
                className="relative"
                onMouseEnter={handleDropdownMouseEnter}
                onMouseLeave={handleDropdownMouseLeave}
                style={{ zIndex: 1000 }}
              >
                <div className="flex items-center gap-1 cursor-pointer hover:text-blue-600 transition select-none">
                  Account <ChevronDown size={18} />
                </div>

                <div
                  className={`absolute right-0 mt-2 w-40 bg-white border rounded-lg shadow-md py-2 transition-all transform duration-300 origin-top-right ${
                    dropdownOpen
                      ? 'scale-100 opacity-100 pointer-events-auto'
                      : 'scale-95 opacity-0 pointer-events-none'
                  }`}
                >
                  <Link
                    to="/login"
                    className="block px-4 py-2 hover:bg-gray-100 transition"
                  >
                    Login
                  </Link>
                  <Link
                    to="/register"
                    className="block px-4 py-2 hover:bg-gray-100 transition"
                  >
                    Register
                  </Link>
                </div>
              </div>
            )}
          </div>

          {/* Mobile Toggle Button */}
          <button
            onClick={toggleMobileMenu}
            className="md:hidden text-gray-700 focus:outline-none"
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X size={26} /> : <Menu size={26} />}
          </button>
        </div>
      </nav>

      {/* Mobile Dropdown Menu */}
      <div
        className={`md:hidden fixed top-16 left-0 w-full bg-white shadow-md transition-all duration-300 overflow-hidden ${
          mobileOpen ? 'max-h-screen py-4 px-6' : 'max-h-0 py-0 px-6'
        }`}
        style={{ zIndex: 999 }}
      >
        <div className="flex flex-col gap-4 text-gray-700 font-medium">
          {navLinks.map((path) => (
            <Link
              key={path}
              to={`/${path}`}
              className="hover:text-blue-600 transition capitalize"
              onClick={toggleMobileMenu}
            >
              {path}
            </Link>
          ))}

          {/* Conditional rendering for mobile */}
          {isAuthenticated ? (
            <button
              onClick={handleLogout}
              className="flex items-center gap-2 text-red-600 hover:text-red-800 transition py-2"
            >
              <LogOut size={18} /> Logout
            </button>
          ) : (
            <div>
              <button
                onClick={toggleMobileAccountDropdown}
                className="flex items-center justify-between w-full hover:text-blue-600 transition capitalize font-medium py-2"
                aria-expanded={mobileAccountOpen}
                aria-controls="mobile-account-menu"
              >
                Account <ChevronDown size={18} />
              </button>
              <div
                id="mobile-account-menu"
                className={`overflow-hidden transition-max-height duration-300 ${
                  mobileAccountOpen ? 'max-h-40' : 'max-h-0'
                }`}
              >
                <Link
                  to="/login"
                  className="block px-4 py-2 hover:bg-gray-100 transition"
                  onClick={toggleMobileMenu}
                >
                  Login
                </Link>
                <Link
                  to="/register"
                  className="block px-4 py-2 hover:bg-gray-100 transition"
                  onClick={toggleMobileMenu}
                >
                  Register
                </Link>
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Spacer to prevent content hidden under fixed navbar */}
      <div className="h-16"></div>
    </>
  );
};

export default Navbar;