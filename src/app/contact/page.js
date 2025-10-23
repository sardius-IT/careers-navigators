"use client";

import { useState } from "react";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [status, setStatus] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const adminNumber = "198897537334"; // Your admin WhatsApp number (country code + number)
    const text = `New Contact Message:%0A
Name: ${formData.name}%0A
Email: ${formData.email}%0A
Subject: ${formData.subject}%0A
Message: ${formData.message}`;

    // open WhatsApp
    window.open(`https://wa.me/${adminNumber}?text=${text}`, "_blank");

    setStatus("✅ Message ready to send on WhatsApp!");
    setFormData({ name: "", email: "", subject: "", message: "" });
  };

  return (
    <div className="flex flex-col md:flex-row items-start justify-center p-10 gap-8">
      {/* LEFT SIDE */}
      <div className="md:w-1/2 space-y-4">
        <h2 className="text-3xl font-bold">International INSTITUTION Ranking</h2>
        <p className="text-gray-600">
          IRST-INSTITUTIONS RANKING Agency was founded in 2009 and based in INDIA, USA...
        </p>
        <p>📍 Flat No: 302, 3rd floor, Chaitanya bank building, Hyderabad – 500060</p>
        <p>📧 expo@expoindia.info</p>
        <p>📞 +91 9543788999</p>
      </div>

      {/* RIGHT SIDE - CONTACT FORM */}
      <form
        onSubmit={handleSubmit}
        className="md:w-1/2 w-full bg-white p-6 shadow-md rounded-2xl space-y-4"
      >
        <input
          type="text"
          name="name"
          placeholder="Your Name"
          value={formData.name}
          onChange={handleChange}
          className="w-full p-3 border rounded-lg"
          required
        />
        <input
          type="email"
          name="email"
          placeholder="Your Email"
          value={formData.email}
          onChange={handleChange}
          className="w-full p-3 border rounded-lg"
          required
        />
        <input
          type="text"
          name="subject"
          placeholder="Subject"
          value={formData.subject}
          onChange={handleChange}
          className="w-full p-3 border rounded-lg"
          required
        />
        <textarea
          name="message"
          placeholder="Message"
          value={formData.message}
          onChange={handleChange}
          className="w-full p-3 border rounded-lg"
          rows="4"
          required
        ></textarea>

        <button
          type="submit"
          className="bg-blue-500 hover:bg-blue-600 text-white py-3 px-6 rounded-lg w-full"
        >
          Send Message
        </button>

        {status && <p className="text-green-600 text-center">{status}</p>}
      </form>
    </div>
  );
}
