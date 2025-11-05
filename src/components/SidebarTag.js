"use client";
import Link from "next/link";

export default function SidebarTag() {
  return (
    <div className="fixed top-1/2 right-[-35px] transform -translate-y-1/2 rotate-180 z-50">
      <Link href="/IJeeHero">
        <div className="rotate-90 bg-gradient-to-b from-green-400 to-teal-600 text-white px-4 py-2 rounded-t-lg shadow-lg font-semibold cursor-pointer hover:opacity-90 transition">
          IRST JEE – 2026
        </div>
      </Link>
    </div>
  );
}


