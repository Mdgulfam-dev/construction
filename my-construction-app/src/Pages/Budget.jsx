import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FaCheckCircle } from 'react-icons/fa';

const pricingPlans = [
  {
    title: 'Basic',
    price: 1900,
    gradient: 'from-blue-500 to-blue-700',
    details: {
      Structure: [
        'RCC Framework',
        'Standard Quality Cement & Steel',
      ],
      Bathroom: [
        'Ceramic Wall Dado upto 7’ - ₹40/sqft',
        'Sanitaryware & CP fittings: ₹30,000/1000 sqft (Cera)',
        'CPVC Pipe - APL Apollo or Equivalent',
        'Waterproof flush doors or WPC',
      ],
      Flooring: [
        'Vitrified Tiles – ₹60/sqft',
      ],
      Electrical: [
        'ISI wires',
        'Basic switches & sockets',
      ],
      Painting: [
        'Interior Emulsion Paint – ₹20/sqft',
        'Standard Primer & Putty',
      ],
      'Doors & Windows': [
        'Flush Doors with Laminate Finish',
        'Aluminum Sliding Windows with Clear Glass',
      ],
    },
  },
  {
    title: 'Classic',
    price: 2030,
    gradient: 'from-green-500 to-green-700',
    details: {
      Structure: [
        'RCC + Grade A Steel',
        'M20 Grade Concrete',
      ],
      Bathroom: [
        'Ceramic Wall Dado upto 7’ - ₹60/sqft',
        'Sanitaryware & CP fittings: ₹50,000/1000 sqft (Hindware)',
        'CPVC Pipe - APL Apollo or Equivalent',
        'Waterproof flush doors or WPC',
      ],
      Flooring: [
        'Vitrified Tiles – ₹80/sqft',
      ],
      Electrical: [
        'ISI wires + Modular Switches',
      ],
      Painting: [
        'Premium Emulsion Paint – ₹25/sqft',
        'Two Coats of Putty & Primer',
      ],
      'Doors & Windows': [
        'Designer Flush Doors with Veneer Finish',
        'UPVC Sliding Windows with Mosquito Mesh',
      ],
    },
  },
  {
    title: 'Premium',
    price: 2350,
    gradient: 'from-purple-500 to-purple-700',
    details: {
      Structure: [
        'Premium Steel',
        'High-strength Concrete',
      ],
      Bathroom: [
        'Ceramic Wall Dado upto 7’ - ₹80/sqft',
        'Sanitaryware & CP fittings: ₹70,000/1000 sqft (Jaquar)',
        'Mirror, Soap Dish, Towel Rail – ₹7,000 included',
        'Solar water heater provision',
      ],
      Flooring: [
        'Premium Tiles – ₹120/sqft',
      ],
      Electrical: [
        'Modular Switches & Designer Panels',
      ],
      Painting: [
        'Luxury Emulsion Paint – ₹30/sqft',
        'Three Coats with Premium Primer & Putty',
      ],
      'Doors & Windows': [
        'Teak Wood Doors with Polished Finish',
        'UPVC Windows with Double Glazing & Mesh',
      ],
    },
  },
];

const Budget = () => {
  const [expandedPlan, setExpandedPlan] = useState(null);

  const togglePlan = (index) => {
    setExpandedPlan(expandedPlan === index ? null : index);
  };

  return (
    <div className="bg-gray-100 py-16 px-4 md:px-12">
      <h2 className="text-4xl font-extrabold text-center text-gray-800 mb-12">Our Packages</h2>
      <div className="grid md:grid-cols-3 gap-8 max-w-7xl mx-auto">
        {pricingPlans.map((plan, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.2 }}
            className={`bg-white rounded-2xl shadow-xl overflow-hidden transform transition duration-500 hover:scale-105`}
          >
            <div className={`bg-gradient-to-r ${plan.gradient} p-6`}>
              <h3 className="text-2xl font-bold text-white">{plan.title}</h3>
              <p className="text-white text-lg mt-2">₹{plan.price}/sqft (Incl. GST)</p>
            </div>
            <div className="p-6">
              <button
                className="text-blue-600 underline text-sm mb-4"
                onClick={() => togglePlan(index)}
              >
                {expandedPlan === index ? 'Hide Details' : 'View Details'}
              </button>

              {expandedPlan === index && (
                <div className="space-y-4">
                  {Object.entries(plan.details).map(([section, items], idx) => (
                    <div key={idx}>
                      <h4 className="text-md font-semibold text-gray-700">{section}</h4>
                      <ul className="list-none text-gray-600 mt-2">
                        {items.map((item, i) => (
                          <li key={i} className="flex items-start mb-1">
                            <FaCheckCircle className="text-green-500 mt-1 mr-2" />
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Budget;

