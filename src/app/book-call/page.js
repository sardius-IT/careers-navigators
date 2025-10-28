"use client";

import { useState } from "react";
import {
  User,
  Mail,
  Phone,
  Building2,
  BookOpen,
  Calendar,
  Clock,
  GraduationCap,
} from "lucide-react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

export default function BookCallPage() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [college, setCollege] = useState("");
  const [stream, setStream] = useState("");
  const [appointmentDate, setAppointmentDate] = useState(null);
  const [appointmentTime, setAppointmentTime] = useState("");
  const [collegeName, setCollegeName] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    // 🔹 Format date & time
    const formattedDate = appointmentDate
      ? appointmentDate.toLocaleDateString()
      : "Not selected";

    // 🔹 Create message text
    const message = `📞 *New Call Booking Request!*\n
👤 Name: ${firstName} ${lastName}
📧 Email: ${email}
📱 Phone: ${phone}
🏫 College: ${college}
📚 Stream: ${stream}
📅 Appointment Date: ${formattedDate}
⏰ Time: ${appointmentTime}
🎓 Looking for College: ${collegeName}`;

    // 🔹 Your WhatsApp number (with country code, no + or spaces)
    const adminNumber = "919543788999"; // <-- Replace with your number

    // 🔹 Open WhatsApp chat with pre-filled message
    const whatsappURL = `https://wa.me/${adminNumber}?text=${encodeURIComponent(
      message
    )}`;

    window.open(whatsappURL, "_blank");

    // Optional confirmation
    alert(
      `✅ Thank you, ${firstName}! Your booking request has been sent via WhatsApp.`
    );
  };

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center p-4">
      <div className="bg-white shadow-lg rounded-2xl p-6 w-full max-w-md">
        <h2 className="text-xl font-bold text-center mb-6">
          Book a Call With Us!
        </h2>

        <form className="space-y-4" onSubmit={handleSubmit}>
          {/* First Name */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              First Name
            </label>
            <div className="flex items-center border border-gray-300 rounded-lg p-2 focus-within:ring-2 focus-within:ring-blue-400">
              <User size={18} className="text-gray-500 mr-2" />
              <input
                type="text"
                className="w-full focus:outline-none"
                placeholder="Enter your first name"
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
                required
              />
            </div>
          </div>

          {/* Last Name */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Last Name
            </label>
            <div className="flex items-center border border-gray-300 rounded-lg p-2 focus-within:ring-2 focus-within:ring-blue-400">
              <User size={18} className="text-gray-500 mr-2" />
              <input
                type="text"
                className="w-full focus:outline-none"
                placeholder="Enter your last name"
                value={lastName}
                onChange={(e) => setLastName(e.target.value)}
              />
            </div>
          </div>

          {/* Email */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Email
            </label>
            <div className="flex items-center border border-gray-300 rounded-lg p-2 focus-within:ring-2 focus-within:ring-blue-400">
              <Mail size={18} className="text-gray-500 mr-2" />
              <input
                type="email"
                className="w-full focus:outline-none"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>
          </div>

          {/* Phone */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Phone Number
            </label>
            <div className="flex items-center border border-gray-300 rounded-lg p-2 focus-within:ring-2 focus-within:ring-blue-400">
              <Phone size={18} className="text-gray-500 mr-2" />
              <input
                type="tel"
                className="w-full focus:outline-none"
                placeholder="Enter your phone number"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                required
              />
            </div>
          </div>

          {/* College */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              College
            </label>
            <div className="flex items-center border border-gray-300 rounded-lg p-2 focus-within:ring-2 focus-within:ring-blue-400">
              <Building2 size={18} className="text-gray-500 mr-2" />
              <input
                type="text"
                className="w-full focus:outline-none"
                placeholder="Enter your college"
                value={college}
                onChange={(e) => setCollege(e.target.value)}
              />
            </div>
          </div>

          {/* Stream */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Stream
            </label>
            <div className="flex items-center border border-gray-300 rounded-lg p-2 focus-within:ring-2 focus-within:ring-blue-400">
              <BookOpen size={18} className="text-gray-500 mr-2" />
              <input
                type="text"
                className="w-full focus:outline-none"
                placeholder="Enter your stream"
                value={stream}
                onChange={(e) => setStream(e.target.value)}
              />
            </div>
          </div>

          {/* Appointment Info Card */}
          <div className="bg-gray-50 p-4 rounded-xl border mt-4 shadow-sm">
            {/* Appointment Date */}
            <div className="mb-3">
              <label className="text-sm font-semibold text-indigo-600 flex items-center mb-1">
                <Calendar size={16} className="mr-2" /> Appointment Date
              </label>
              <DatePicker
                selected={appointmentDate}
                onChange={(date) => setAppointmentDate(date)}
                dateFormat="dd/MM/yyyy"
                placeholderText="Select a date"
                className="w-full border border-gray-300 rounded-lg p-2 focus:outline-none"
              />
            </div>

            {/* Appointment Time */}
            <div className="mb-3">
              <label className="text-sm font-semibold text-indigo-600 flex items-center mb-1">
                <Clock size={16} className="mr-2" /> Appointment Time
              </label>
              <input
                type="time"
                value={appointmentTime}
                onChange={(e) => setAppointmentTime(e.target.value)}
                className="w-full border border-gray-300 rounded-lg p-2 focus:outline-none"
              />
            </div>

            {/* College Name */}
            <div>
              <label className="text-sm font-semibold text-indigo-600 flex items-center mb-1">
                <GraduationCap size={16} className="mr-2" /> College Name
              </label>
              <input
                type="text"
                value={collegeName}
                onChange={(e) => setCollegeName(e.target.value)}
                placeholder="Looking for College"
                className="w-full border border-gray-300 rounded-lg p-2 focus:outline-none"
              />
            </div>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full py-2 mt-4 bg-blue-600 text-white font-medium rounded-md hover:bg-blue-700 transition"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}
