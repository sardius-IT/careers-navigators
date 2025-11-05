"use client";

import { useState } from "react";

export default function CollegeRankingPage() {
  const [year, setYear] = useState("2024");
  const [activeTab, setActiveTab] = useState("India Today");
  const [showAll, setShowAll] = useState(false);

  // 📊 College data year-wise
  const data = {
    2025: {
      "India Today": [
        { college: "IIT Madras", rank: "1 out of 200", stream: "Engineering", logo: "/logos/iitm.png" },
        { college: "IIM Ahmedabad", rank: "1 out of 50", stream: "Management", logo: "/logos/iima.png" },
      ],
      "The Week": [
        { college: "IIT Delhi", rank: "1 out of 200", stream: "Engineering", logo: "/logos/iitd.png" },
        { college: "IIM Bangalore", rank: "2 out of 50", stream: "Management", logo: "/logos/iimb.png" },
      ],
      "NIRF": [
        { college: "IIT Bombay", rank: "3 out of 200", stream: "Engineering", logo: "/logos/iitb.png" },
        { college: "IIM Calcutta", rank: "3 out of 50", stream: "Management", logo: "/logos/iimc.png" },
      ],
    },

    2024: {
      "India Today": [
        { college: "Jawaharlal Nehru University (JNU), New Delhi", rank: "1 out of 44", stream: "Overall", logo: "/logos/jnu.png" },
        { college: "Symbiosis International University (SIU), Pune", rank: "1 out of 73", stream: "Overall", logo: "/logos/siu.png" },
        { college: "Amity University, Noida", rank: "2 out of 73", stream: "Overall", logo: "/logos/amity.png" },
      ],
      "The Week": [
        { college: "Delhi University (DU), New Delhi", rank: "1 out of 50", stream: "Overall", logo: "/logos/du.png" },
        { college: "Amity University, Noida", rank: "2 out of 50", stream: "Overall", logo: "/logos/amity.png" },
      ],
      "NIRF": [
        { college: "IIT Madras", rank: "1 out of 200", stream: "Engineering", logo: "/logos/iitm.png" },
        { college: "IIT Delhi", rank: "2 out of 200", stream: "Engineering", logo: "/logos/iitd.png" },
      ],
    },

    2023: {
      "India Today": [
        { college: "KL University (KLU), Guntur", rank: "1 out of 100", stream: "Overall", logo: "/logos/klu.png" },
        { college: "Amity University, Noida", rank: "2 out of 100", stream: "Overall", logo: "/logos/amity.png" },
      ],
      "The Week": [
        { college: "Delhi University (DU), New Delhi", rank: "1 out of 44", stream: "Overall", logo: "/logos/du.png" },
      ],
      "NIRF": [
        { college: "IIT Madras", rank: "1 out of 200", stream: "Engineering", logo: "/logos/iitm.png" },
      ],
    },
  };

  // 🧮 Combine data for the selected year
  const yearData = data[year] || {};
  const allColleges = Object.values(yearData).flat();
  const currentColleges = showAll
    ? allColleges
    : yearData[activeTab] || [];

  return (
    <div className="min-h-screen bg-gray-50 p-6 md:p-12">
      <div className="max-w-5xl mx-auto bg-white shadow-md rounded-2xl p-6">
        {/* Header Section */}
        <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-6">
          <h1 className="text-2xl md:text-3xl font-semibold text-gray-800">
            College Ranking {year}
          </h1>

          <div className="flex items-center space-x-3 mt-4 md:mt-0">
            <select
              className="border border-gray-300 rounded-lg px-3 py-2 text-sm"
              value={year}
              onChange={(e) => {
                setYear(e.target.value);
                setActiveTab("India Today");
                setShowAll(false);
              }}
            >
              <option>2025</option>
              <option>2024</option>
              <option>2023</option>
            </select>

            <button
              onClick={() => setShowAll(!showAll)}
              className={`${
                showAll ? "bg-gray-600" : "bg-orange-500"
              } text-white px-4 py-2 rounded-lg hover:opacity-90 transition`}
            >
              {showAll ? "Back to Tabs" : "View All Colleges"}
            </button>
          </div>
        </div>

        {/* Tabs */}
        {!showAll && (
          <div className="flex space-x-3 border-b border-gray-200 mb-6">
            {["India Today", "The Week", "NIRF"].map((tab) => (
              <button
                key={tab}
                disabled={!yearData[tab]} // Disable if no data for that tab
                className={`px-4 py-2 rounded-t-lg font-medium transition ${
                  activeTab === tab
                    ? "bg-blue-600 text-white"
                    : !yearData[tab]
                    ? "bg-gray-100 text-gray-400 cursor-not-allowed"
                    : "bg-gray-100 text-gray-600 hover:bg-gray-200"
                }`}
                onClick={() => yearData[tab] && setActiveTab(tab)}
              >
                {tab}
              </button>
            ))}
          </div>
        )}

        {/* Table */}
        <div className="overflow-x-auto">
          {currentColleges.length > 0 ? (
            <table className="w-full text-sm md:text-base border-collapse">
              <thead>
                <tr className="bg-gray-100 text-left">
                  <th className="p-3 font-semibold text-gray-700">#</th>
                  <th className="p-3 font-semibold text-gray-700">College</th>
                  <th className="p-3 font-semibold text-gray-700">Ranking</th>
                  <th className="p-3 font-semibold text-gray-700">Stream</th>
                </tr>
              </thead>
              <tbody>
                {currentColleges.map((college, index) => (
                  <tr
                    key={index}
                    className="border-b hover:bg-gray-50 transition"
                  >
                    <td className="p-3 font-medium text-gray-700">
                      #{index + 1}
                    </td>
                    <td className="p-3 flex items-center space-x-3">
                      <img
                        src={college.logo}
                        alt={college.college}
                        className="w-8 h-8 rounded-full border"
                      />
                      <span>{college.college}</span>
                    </td>
                    <td className="p-3 text-gray-700">{college.rank}</td>
                    <td className="p-3 text-gray-700">{college.stream}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          ) : (
            <p className="text-gray-500 text-center py-8">
              No ranking data available for {year}.
            </p>
          )}
        </div>

        {/* Note when all shown */}
        {showAll && currentColleges.length > 0 && (
          <p className="text-gray-500 text-sm mt-4 text-center">
            Showing combined results from India Today, The Week, and NIRF ({year}).
          </p>
        )}
      </div>
    </div>
  );
}
