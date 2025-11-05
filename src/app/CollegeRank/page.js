"use client";
import { useState } from "react";

export default function TopCollegesPage() {
  const [selectedTab, setSelectedTab] = useState("BE/B.Tech");

  const tabs = ["BE/B.Tech", "MBA/PGDM", "MBBS"];

  // ✅ Full College Data with Category
  const colleges = [
    // BE/B.Tech Colleges
    {
      category: "BE/B.Tech",
      name: "IIT Madras - Indian Institute of Technology",
      location: "Chennai, Tamil Nadu",
      rating: "5/5",
      ranking: "#1 out of 200 in India 2025",
      cutoff: "JEE-Advanced 2025 - Cut off 47",
      deadline: "27 Apr - 18 Jun 2024",
      fees: "₹7,42,000",
    },
    {
      category: "BE/B.Tech",
      name: "IIT Kharagpur - Indian Institute of Technology",
      location: "Kharagpur, West Bengal",
      rating: "4.9/5",
      ranking: "#6 out of 200 in India 2024",
      cutoff: "JEE-Advanced 2024 - Cut off 898",
      deadline: "10 June - 18 Jun 2024",
      fees: "₹7,27,360",
    },
    {
      category: "BE/B.Tech",
      name: "IIT Delhi - Indian Institute of Technology",
      location: "New Delhi, Delhi NCR",
      rating: "4.9/5",
      ranking: "#1 out of 27 in India 2024",
      cutoff: "JEE-Advanced 2024 - Cut off 47",
      deadline: "14 Mar - 31 Mar 2024",
      fees: "₹1,22,400",
    },
    {
      category: "BE/B.Tech",
      name: "IIT Bombay - Indian Institute of Technology",
      location: "Mumbai, Maharashtra",
      rating: "4.9/5",
      ranking: "#1 out of 50 in India 2019",
      cutoff: "JEE-Advanced 2024 - Cut off 68",
      deadline: "14 Mar - 31 Mar 2024",
      fees: "₹1,23,350",
    },

    // MBA/PGDM Colleges
    {
      category: "MBA/PGDM",
      name: "IIMA - Indian Institute of Management",
      location: "Ahmedabad, Gujarat",
      rating: "4.9/5",
      ranking: "#2 out of 50 in India 2019",
      cutoff: "CAT 2023 - Cut off 99",
      deadline: "24 June - 31 Mar 2025",
      fees: "₹33,00,000",
    },
    {
      category: "MBA/PGDM",
      name: "IIM Bangalore - Indian Institute of Management",
      location: "Bangalore, Karnataka",
      rating: "4.9/5",
      ranking: "#1 out of 50 in India 2019",
      cutoff: "CAT 2023 - Cut off 99",
      deadline: "21 June - 07 Aug 2024",
      fees: "₹1,25,000",
    },
    {
      category: "MBA/PGDM",
      name: "IIMC - Indian Institute of Management",
      location: "Kolkata, West Bengal",
      rating: "4.9/5",
      ranking: "#9 out of 200 in India 2023",
      cutoff: "CAT 2023 - Cut off 99",
      deadline: "8 July - 26 Nov 2024",
      fees: "₹13,50,000",
    },
    {
      category: "MBA/PGDM",
      name: "XLRI - Xavier School of Management",
      location: "Jamshedpur, Jharkhand",
      rating: "4.9/5",
      ranking: "#1 out of 60 in India 2021",
      cutoff: "-",
      deadline: "22 Feb 2024",
      fees: "₹4,00,000",
    },
    {
      category: "MBA/PGDM",
      name: "FMS Delhi - Faculty of Management Studies",
      location: "New Delhi, Delhi NCR",
      rating: "4.9/5",
      ranking: "#35 out of 50 in India 2019",
      cutoff: "CAT 2023 - Cut off 98",
      deadline: "15 Jan - 14 Feb 2024",
      fees: "₹2,50,000",
    },
    {
      category: "MBA/PGDM",
      name: "SP Jain (SPJIMR)",
      location: "Mumbai, Maharashtra",
      rating: "4.9/5",
      ranking: "#16 out of 50 in India 2019",
      cutoff: "CAT 2023 - Cut off 8.5",
      deadline: "10 Feb - 12 May 2024",
      fees: "₹9,50,000",
    },

    // MBBS Colleges
    {
      category: "MBBS",
      name: "AIIMS Delhi - All India Institute of Medical Sciences",
      location: "New Delhi, Delhi NCR",
      rating: "5/5",
      ranking: "#1 out of 50 in India 2025",
      cutoff: "NEET 2024 - Cut off 680",
      deadline: "15 Apr - 10 Jun 2024",
      fees: "₹7,500",
    },
    {
      category: "MBBS",
      name: "CMC Vellore - Christian Medical College",
      location: "Vellore, Tamil Nadu",
      rating: "4.9/5",
      ranking: "#2 out of 50 in India 2024",
      cutoff: "NEET 2024 - Cut off 650",
      deadline: "20 Apr - 5 Jun 2024",
      fees: "₹48,530",
    },
  ];

  // ✅ Filter Colleges by Selected Category
  const filteredColleges = colleges.filter(
    (college) => college.category === selectedTab
  );

  return (
    <div className="min-h-screen bg-gray-50 py-10 px-5">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-3xl font-bold text-center mb-6">
          Top 10 Colleges
        </h1>

        {/* Tabs */}
        <div className="flex justify-center mb-8 space-x-4">
          {tabs.map((tab) => (
            <button
              key={tab}
              onClick={() => setSelectedTab(tab)}
              className={`px-4 py-2 rounded-full border transition-all ${
                selectedTab === tab
                  ? "bg-blue-600 text-white border-blue-600"
                  : "bg-white text-gray-700 border-gray-300 hover:bg-gray-100"
              }`}
            >
              {tab}
            </button>
          ))}
        </div>

        {/* Table */}
        <div className="overflow-x-auto bg-white rounded-xl shadow-md">
          <table className="w-full text-left border-collapse">
            <thead className="bg-blue-100">
              <tr>
                <th className="py-3 px-4">Rank</th>
                <th className="py-3 px-4">College</th>
                <th className="py-3 px-4">Ranking</th>
                <th className="py-3 px-4">Cutoff</th>
                <th className="py-3 px-4">Application Deadline</th>
                <th className="py-3 px-4">Fees</th>
              </tr>
            </thead>
            <tbody>
              {filteredColleges.map((college, index) => (
                <tr
                  key={index}
                  className="border-b hover:bg-gray-50 transition-all"
                >
                  <td className="py-3 px-4 font-semibold">#{index + 1}</td>
                  <td className="py-3 px-4">
                    <div className="font-medium text-gray-900">
                      {college.name}
                    </div>
                    <div className="text-sm text-gray-600">
                      {college.location}
                    </div>
                    <div className="text-yellow-500 text-sm">
                      ⭐ {college.rating}
                    </div>
                  </td>
                  <td className="py-3 px-4">{college.ranking}</td>
                  <td className="py-3 px-4">{college.cutoff}</td>
                  <td className="py-3 px-4">{college.deadline}</td>
                  <td className="py-3 px-4 font-semibold text-blue-700">
                    {college.fees}
                  </td>
                </tr>
              ))}
              {filteredColleges.length === 0 && (
                <tr>
                  <td
                    colSpan="6"
                    className="text-center py-6 text-gray-500 font-medium"
                  >
                    No colleges found for {selectedTab}
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
