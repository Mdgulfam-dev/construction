import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { config } from "../config";

const Contact = () => {
  const navigate = useNavigate();
  const isLoggedIn = !!localStorage.getItem("token"); // or from context

  useEffect(() => {
    if (!isLoggedIn) {
      navigate("/login");
    }
  }, [isLoggedIn, navigate]);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState("");

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSubmitting(true);
    setError("");
    setSubmitted(false);

    // Simple validation
    if (!formData.name || !formData.email || !formData.message) {
      setError("Please fill all required fields.");
      setSubmitting(false);
      return;
    }

    try {
      // Here you can send formData to your backend API
      // Example:
      // await fetch('/api/contact', { method: 'POST', body: JSON.stringify(formData), headers: {'Content-Type': 'application/json'} });

      // Simulate delay
      // await new Promise(res => setTimeout(res, 1500));
      const response = await fetch(`${config.API_URL}/api/contact/mail`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const result = await response.json();
      if (result.success) {
        setSubmitted(true);
        setFormData({ name: "", email: "", phone: "", message: "" });
      } else {
        setError(result.message || "Email failed.");
      }

      setSubmitted(true);
      setFormData({ name: "", email: "", phone: "", message: "" });
    } catch (err) {
      setError("Something went wrong. Please try again.");
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <section
      className="bg-white py-16 px-6 md:px-16 lg:px-24 max-w-4xl mx-auto rounded-xl shadow-lg"
      id="contact"
    >
      <motion.h2
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-3xl font-bold text-center text-gray-800 mb-8"
      >
        Request a Quote / Contact Us
      </motion.h2>

      <form onSubmit={handleSubmit} className="space-y-6">
        <div>
          <label
            htmlFor="name"
            className="block text-gray-700 font-medium mb-1"
          >
            Name <span className="text-red-500">*</span>
          </label>
          <input
            id="name"
            name="name"
            type="text"
            placeholder="Your full name"
            value={formData.name}
            onChange={handleChange}
            required
            className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
          />
        </div>

        <div>
          <label
            htmlFor="email"
            className="block text-gray-700 font-medium mb-1"
          >
            Email <span className="text-red-500">*</span>
          </label>
          <input
            id="email"
            name="email"
            type="email"
            placeholder="you@example.com"
            value={formData.email}
            onChange={handleChange}
            required
            className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
          />
        </div>

        <div>
          <label
            htmlFor="phone"
            className="block text-gray-700 font-medium mb-1"
          >
            Phone Number
          </label>
          <input
            id="phone"
            name="phone"
            type="tel"
            placeholder="+91 98765 43210"
            value={formData.phone}
            onChange={handleChange}
            className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
          />
        </div>

        <div>
          <label
            htmlFor="message"
            className="block text-gray-700 font-medium mb-1"
          >
            Message / Details <span className="text-red-500">*</span>
          </label>
          <textarea
            id="message"
            name="message"
            rows="4"
            placeholder="Tell us about your project, renovation needs, or inquiry..."
            value={formData.message}
            onChange={handleChange}
            required
            className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500 transition resize-none"
          />
        </div>

        {error && <p className="text-red-500 font-semibold">{error}</p>}
        {submitted && (
          <p className="text-green-600 font-semibold">
            Thank you! We will get back to you soon.
          </p>
        )}

        <button
          type="submit"
          disabled={submitting}
          className={`w-full bg-blue-600 text-white font-semibold py-3 rounded-xl hover:bg-blue-700 transition disabled:opacity-50`}
        >
          {submitting ? "Sending..." : "Send Request"}
        </button>
      </form>
    </section>
  );
};

export default Contact;
