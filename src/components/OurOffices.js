"use client";

export default function OurOffices() {
  const offices = [
    {
      city: "HYDERABAD",
      address:
        "302, 3rd floor, Chaitanya Bank Building, Hanuman Nagar, Dilsukhnagar - 500060",
    },
    {
      city: "VIJAYAWADA",
      address:
        "2nd Floor, GVR Complex, LOT mobile top, MG Rd, Opp. BENZ Circle, Acharya Ranga Nagar - 520010",
    },
    {
      city: "RAJAHMUNDRY",
      address: "Kotipalli Center, Main Rd, beside Shyamala Theatre - 533306",
    },
    {
      city: "GUNTUR",
      address:
        "Flat No-201, Ramya Apartments, Lakshmi Puram Main Road, near NTR Stadium - 522007",
    },
    {
      city: "ONGOLE",
      address: "GVR Tower, 2nd Line, Opp. to Unlimited, Mangamuru Rd - 523002",
    },
    {
      city: "ANANTHAPUR",
      address:
        "301, 3rd Floor, RTC Bus Stand Road, Khaja Nagar, beside Sri Chaitanya College - 515001",
    },
    {
      city: "KARIMNAGER",
      address: "Flat No.302, Anand Bhavan, 2-10-752/A, Jyothi Nagar - 505301",
    },
    {
      city: "VIZAG",
      address:
        "Flat No.504, Sri Surya Complex, Upstairs of HDFC Bank, Gajuwaka - 530026",
    },
    {
      city: "KURNOOL",
      address:
        "2-14, Main Road, beside Mouryalim, Near Airtel Showroom - 518301",
    },
  ];

  return (
    <section className="py-12 bg-gray-50">
      <section className="bg-green-50 py-10 text-center rounded-xl shadow-inner max-w-4xl mx-auto mb-10 px-4">
        <h3 className="text-2xl font-bold text-green-800 mb-3">HelpDesk</h3>
        <p>📞 +91 9155234444 | 📧 admissions@irst.edu.in</p>
        <p>Support Hours: Mon–Sat | 9:00 AM – 5:00 PM</p>
      </section>
      <div className="max-w-7xl mx-auto px-4 text-center">
        <h2 className="text-2xl md:text-3xl font-semibold text-gray-800 mb-10">
          Our Offices
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {offices.map((office, index) => (
            <div
              key={index}
              className="bg-white p-6 shadow-sm hover:shadow-md rounded-lg border border-gray-100 text-left transition-all"
            >
              <h3 className="text-lg font-semibold text-green-700 mb-2">
                {office.city}
              </h3>
              <p className="text-sm text-gray-600 leading-relaxed">
                {office.address}
              </p>
            </div>
          ))}
        </div>

        {/* Footer Section */}
        <div className="mt-12 border-t pt-6 text-sm text-gray-500">
          <p>© 2025 Career Navigator - All Rights Reserved.</p>

          <div className="flex justify-center gap-4 mt-4 text-gray-500">
            <a href="#" className="hover:text-blue-600">
              <i className="fab fa-facebook-f"></i>
            </a>
            <a href="#" className="hover:text-sky-500">
              <i className="fab fa-twitter"></i>
            </a>
            <a href="#" className="hover:text-pink-500">
              <i className="fab fa-instagram"></i>
            </a>
            <a href="#" className="hover:text-red-600">
              <i className="fab fa-youtube"></i>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
