"use client";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function AdmissionAndStudyAbroad() {
  const abroad = [
    {
      country: "USA",
      colleges: 1010,
      cost: "33.39K USD/Year",
      href: "/study-abroad/usa",
    },
    {
      country: "UK",
      colleges: 170,
      cost: "21.74K USD/Year",
      href: "/study-abroad/uk",
    },
    {
      country: "Canada",
      colleges: 212,
      cost: "21.5K USD/Year",
      href: "/study-abroad/canada",
    },
    {
      country: "Australia",
      colleges: 150,
      cost: "22.1K USD/Year",
      href: "/study-abroad/australia",
    },
  ];

  return (
    <section className="py-12 bg-white">
      <div className="max-w-6xl mx-auto px-4 text-center">
        {/* Study Abroad Section */}
        <div className="mt-16">
          <h3 className="text-2xl md:text-3xl font-semibold text-gray-800 mb-8">
            Study Abroad
          </h3>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
            {abroad.map((item, index) => (
              <Link
                key={index}
                href={item.href}
                className="bg-gray-50 border rounded-xl p-5 text-left shadow-sm hover:shadow-md transition block"
              >
                <h4 className="text-xl font-semibold text-blue-600 mb-1">
                  Study in {item.country}
                </h4>
                <p className="text-sm text-gray-500 mb-3">
                  Explore {item.colleges} Colleges
                </p>
                <div className="flex justify-between text-gray-700 text-sm mb-3">
                  <span>🏫 {item.colleges} Colleges</span>
                  <span>💰 {item.cost}</span>
                </div>
                <p className="text-gray-600 text-sm font-medium">Guides:</p>
                <ul className="text-gray-500 text-sm list-disc pl-5 mt-1 space-y-1">
                  <li>Why Study in {item.country}?</li>
                  <li>Top Universities</li>
                  <li>Cost & Scholarships</li>
                </ul>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
