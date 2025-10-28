"use client";
import { useState, useEffect } from "react";
import { X, FileText, CreditCard, CheckCircle2, Headphones, Landmark, CalendarDays, User, Mail, Phone, MapPin, GraduationCap } from "lucide-react";

export default function RegisterPopup() {
  const [show, setShow] = useState(false);
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    city: "",
    course: "",
  });

  useEffect(() => {
    const timer = setTimeout(() => setShow(true), 3000);
    return () => clearTimeout(timer);
  }, []);

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    const { name, email, phone, city, course } = form;
    const msg = `Hello! I want to register now.%0A
🧑 Name: ${name}%0A
📧 Email: ${email}%0A
📱 Phone: ${phone}%0A
🏙️ City: ${city}%0A
🎓 Course: ${course}`;
    const whatsappNumber = "919543788999";
    window.open(`https://wa.me/${whatsappNumber}?text=${msg}`, "_blank");
  };

  if (!show) return null;

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-5">
      <div className="bg-white rounded-2xl shadow-2xl w-[90%] max-w-[750px] relative overflow-hidden flex flex-col md:flex-row animate-fadeIn">
        {/* Close Button */}
        <button
          onClick={() => setShow(false)}
          className="absolute top-3 right-3 text-gray-500 hover:text-black"
        >
          <X size={22} />
        </button>

        {/* Left Section */}
        <div className="bg-gray-50 w-full md:w-1/2 p-6 flex flex-col justify-center border-r">
          <h3 className="text-lg font-bold text-gray-800 mb-4 text-center md:text-left">
            How We Help You
          </h3>
          <ul className="space-y-3 text-gray-700 text-sm">
            <li className="flex items-center gap-2">
              <FileText className="text-green-600" size={18} /> Brochure Details
            </li>
            <li className="flex items-center gap-2">
              <CreditCard className="text-green-600" size={18} /> Check Detailed Fees
            </li>
            <li className="flex items-center gap-2">
              <CheckCircle2 className="text-green-600" size={18} /> Shortlist & Apply
            </li>
            <li className="flex items-center gap-2">
              <Headphones className="text-green-600" size={18} /> 24/7 Counseling
            </li>
            <li className="flex items-center gap-2">
              <Landmark className="text-green-600" size={18} /> Scholarships
            </li>
            <li className="flex items-center gap-2">
              <CalendarDays className="text-green-600" size={18} /> Application Deadlines
            </li>
          </ul>
        </div>

        {/* Right Section */}
        <div className="w-full md:w-1/2 p-6">
          <h3 className="text-lg font-bold text-gray-800 mb-4 text-center md:text-left">
            Register Now to Apply
          </h3>
          <form onSubmit={handleSubmit} className="space-y-3">
            <div className="flex items-center border rounded-md px-3 py-2">
              <User size={16} className="text-gray-400 mr-2" />
              <input
                type="text"
                name="name"
                placeholder="Full Name *"
                required
                value={form.name}
                onChange={handleChange}
                className="w-full text-sm focus:outline-none"
              />
            </div>

            <div className="flex items-center border rounded-md px-3 py-2">
              <Mail size={16} className="text-gray-400 mr-2" />
              <input
                type="email"
                name="email"
                placeholder="Email Address *"
                required
                value={form.email}
                onChange={handleChange}
                className="w-full text-sm focus:outline-none"
              />
            </div>

            <div className="flex items-center border rounded-md px-3 py-2">
              <Phone size={16} className="text-gray-400 mr-2" />
              <input
                type="tel"
                name="phone"
                placeholder="Mobile Number *"
                required
                value={form.phone}
                onChange={handleChange}
                className="w-full text-sm focus:outline-none"
              />
            </div>

            <div className="flex items-center border rounded-md px-3 py-2">
              <MapPin size={16} className="text-gray-400 mr-2" />
              <input
                type="text"
                name="city"
                placeholder="City You Live In *"
                required
                value={form.city}
                onChange={handleChange}
                className="w-full text-sm focus:outline-none"
              />
            </div>

            <div className="flex items-center border rounded-md px-3 py-2">
              <GraduationCap size={16} className="text-gray-400 mr-2" />
              <input
                type="text"
                name="course"
                placeholder="Course Interested In *"
                required
                value={form.course}
                onChange={handleChange}
                className="w-full text-sm focus:outline-none"
              />
            </div>

            <p className="text-[11px] text-gray-500 text-center">
              By submitting this form, you agree to our{" "}
              <a href="#" className="text-green-600 underline">
                Terms of Use
              </a>.
            </p>

            <button
              type="submit"
              className="w-full bg-green-600 hover:bg-green-700 text-white font-semibold py-2 rounded-md text-sm"
            >
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
