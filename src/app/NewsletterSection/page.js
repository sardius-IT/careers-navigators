"use client";

import { useState } from "react";

export default function NewsletterSection() {
  const [form, setForm] = useState({
    email: "",
    phone: "",
    course: "",
  });

  // Handle input change
  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  // Handle form submit
  const handleSubmit = (e) => {
    e.preventDefault();

    // Replace this number with your WhatsApp admin number
    const adminNumber = "8897537334";

    const text = `📢 *Newsletter Subscription Request*%0A%0A📧 Email: ${form.email}%0A📞 Phone: ${form.phone}%0A🎓 Course: ${form.course}`;

    // Open WhatsApp with the message
    window.open(`https://wa.me/${adminNumber}?text=${text}`, "_blank");

    alert("Your subscription details are ready to send on WhatsApp!");
    setForm({ email: "", phone: "", course: "" });
  };

  return (
    <footer className="bg-white">
      {/* ===== Newsletter Section ===== */}
      <div className="bg-gradient-to-r from-green-500 to-green-600 text-white py-10 px-6 text-center">
        <h2 className="text-2xl md:text-3xl font-bold mb-2">
          Subscribe to Our Newsletter
        </h2>
        <p className="text-green-100 mb-6 text-sm md:text-base">
          Stay updated with college notifications, exams, and news!
        </p>

        <form
          onSubmit={handleSubmit}
          className="flex flex-col md:flex-row justify-center items-center gap-4 max-w-4xl mx-auto"
        >
          <input
            type="email"
            name="email"
            placeholder="Enter your email"
            value={form.email}
            onChange={handleChange}
            className="px-4 py-3 rounded-lg text-gray-800 w-full md:w-1/3 focus:outline-none bg-white"
            required
          />
          <input
            type="tel"
            name="phone"
            placeholder="Enter your mobile number"
            value={form.phone}
            onChange={handleChange}
            className="px-4 py-3 rounded-lg text-gray-800 w-full md:w-1/3 focus:outline-none bg-white"
            required
          />
          <select
            name="course"
            value={form.course}
            onChange={handleChange}
            className="px-4 py-3 rounded-lg text-gray-800 w-full md:w-1/3 focus:outline-none bg-white"
            required
          >
            <option value="" disabled>
              Choose your course
            </option>
            <option>MBA</option>
            <option>B.Tech</option>
            <option>MCA</option>
            <option>BCA</option>
            <option>M.Tech</option>
            <option>BA</option>
            <option>MA</option>
          </select>
          <button
            type="submit"
            className="bg-yellow-400 hover:bg-yellow-500 text-green-900 font-semibold px-6 py-3 rounded-lg transition w-full md:w-auto"
          >
            Subscribe
          </button>
        </form>
      </div>

      {/* ===== Footer Links Section ===== */}
      <div className="max-w-6xl mx-auto p-10 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-8 text-gray-800 text-sm md:text-base">
        <div>
          <h3 className="font-bold text-lg mb-3">Top Colleges</h3>
          <ul className="space-y-2">
            <li>MBA</li>
            <li>B.Tech/B.E</li>
            <li>MCA</li>
            <li>BCA</li>
            <li>M.Tech</li>
            <li>MA</li>
            <li>BA</li>
          </ul>
        </div>

        <div>
          <h3 className="font-bold text-lg mb-3">Top Universities</h3>
          <ul className="space-y-2">
            <li>Engineering</li>
            <li>Management</li>
            <li>Medical</li>
            <li>Law</li>
            <li>Commerce</li>
            <li>Science</li>
            <li>Arts</li>
          </ul>
        </div>

        <div>
          <h3 className="font-bold text-lg mb-3">Top Exams</h3>
          <ul className="space-y-2">
            <li>CAT</li>
            <li>GATE</li>
            <li>JEE-Main</li>
            <li>NEET</li>
            <li>XAT</li>
            <li>CLAT</li>
            <li>MAT</li>
          </ul>
        </div>

        <div>
          <h3 className="font-bold text-lg mb-3">Study Abroad</h3>
          <ul className="space-y-2">
            <li>Canada</li>
            <li>USA</li>
            <li>UK</li>
            <li>UAE</li>
            <li>Australia</li>
            <li>Germany</li>
            <li>Sweden</li>
          </ul>
        </div>

        <div>
          <h3 className="font-bold text-lg mb-3">Others</h3>
          <ul className="space-y-2">
            <li>Careers</li>
            <li>BTech Credit Transfer</li>
            <li>College Promotion</li>
            <li>Irst</li>
            <li>Expo India</li>
          </ul>
        </div>
      </div>
    </footer>
  );
}
