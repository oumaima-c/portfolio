"use client";

import { useState, FormEvent } from "react";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    service: "",
    message: "",
  });
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setStatus("loading");

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          access_key: "c6229288-8eee-4ef5-a665-05c2fffdf825", // <-- PASTE YOUR WEB3FORMS KEY HERE
          ...formData,
        }),
      });

      const result = await response.json();
      if (result.success) {
        setStatus("success");
        setFormData({ firstName: "", lastName: "", email: "", phone: "", service: "", message: "" });
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  };

  return (
    <form onSubmit={handleSubmit} className="w-full max-w-2xl mx-auto mt-10 space-y-6">
      {/* First and Last Name */}
      <div className="flex flex-col md:flex-row gap-4">
        <div className="w-full">
          <label className="block text-sm text-white/70 mb-2">First Name</label>
          <input
            type="text"
            name="firstName"
            value={formData.firstName}
            onChange={handleChange}
            required
            className="w-full bg-black-100 border border-white/10 text-white rounded-lg p-3 outline-none focus:ring-1 focus:ring-[#00b5c8] transition-all"
          />
        </div>
        <div className="w-full">
          <label className="block text-sm text-white/70 mb-2">Last Name</label>
          <input
            type="text"
            name="lastName"
            value={formData.lastName}
            onChange={handleChange}
            required
            className="w-full bg-black-100 border border-white/10 text-white rounded-lg p-3 outline-none focus:ring-1 focus:ring-[#00b5c8] transition-all"
          />
        </div>
      </div>

      {/* Email and Phone */}
      <div className="flex flex-col md:flex-row gap-4">
        <div className="w-full">
          <label className="block text-sm text-white/70 mb-2">Email Address</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
            className="w-full bg-black-100 border border-white/10 text-white rounded-lg p-3 outline-none focus:ring-1 focus:ring-[#00b5c8] transition-all"
          />
        </div>
        <div className="w-full">
          <label className="block text-sm text-white/70 mb-2">Phone Number</label>
          <input
            type="tel"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            className="w-full bg-black-100 border border-white/10 text-white rounded-lg p-3 outline-none focus:ring-1 focus:ring-[#00b5c8] transition-all"
          />
        </div>
      </div>

      {/* Service Dropdown */}
      <div>
        <label className="block text-sm text-white/70 mb-2">Service Interested In</label>
        <select
          name="service"
          value={formData.service}
          onChange={handleChange}
          required
          className="w-full bg-black-100 border border-white/10 text-white rounded-lg p-3 outline-none focus:ring-1 focus:ring-[#00b5c8] transition-all appearance-none"
        >
          <option value="" disabled>Select a service...</option>
          <option value="Software Development">Software Development</option>
          <option value="Video Editing">Video Editing</option>
          <option value="Motion Graphics & Animation">Motion Graphics &amp; Animation</option>
          <option value="Social Media Management">Social Media Management</option>
        </select>
      </div>

      {/* Message */}
      <div>
        <label className="block text-sm text-white/70 mb-2">Your Message</label>
        <textarea
          name="message"
          value={formData.message}
          onChange={handleChange}
          required
          rows={4}
          className="w-full bg-black-100 border border-white/10 text-white rounded-lg p-3 outline-none focus:ring-1 focus:ring-[#00b5c8] transition-all resize-none"
        />
      </div>

      {/* Submit Button & Status Messages */}
      <div className="flex flex-col items-center gap-4">
        <button
          type="submit"
          disabled={status === "loading"}
          className="bg-[#00b5c8] text-white font-bold py-3 px-10 rounded-lg hover:bg-[#009da8] transition-all disabled:opacity-50 disabled:cursor-not-allowed"
        >
          {status === "loading" ? "Sending..." : "Send Message"}
        </button>

        {status === "success" && (
          <p className="text-green-400 text-sm">Message sent successfully! We will get back to you soon.</p>
        )}
        {status === "error" && (
          <p className="text-red-400 text-sm">Something went wrong. Please try again.</p>
        )}
      </div>
    </form>
  );
};

export default ContactForm;