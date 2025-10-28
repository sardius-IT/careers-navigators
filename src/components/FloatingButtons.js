"use client";
import Image from "next/image";

export default function FloatingButtons() {
  return (
    <div className="fixed bottom-4 left-1/2 -translate-x-1/2 flex gap-4 z-10">
      {/* WhatsApp Button */}
      <button className="flex items-center gap-2 px-4 py-2 bg-green-500 text-white rounded-full shadow-lg hover:bg-green-600 transition">
        <Image
          src="/download (1).svg"
          alt="WhatsApp"
          width={20}
          height={20}
          className="w-5 h-5"
        />
        WhatsApp
      </button>

      {/* Admission Button */}
      <button className="flex items-center gap-2 px-4 py-2 bg-red-600 text-white rounded-full shadow-lg hover:bg-red-700 transition">
        <Image
          src="/download (2).svg"
          alt="Admission"
          width={20}
          height={20}
          className="w-5 h-5"
        />
        Admission
      </button>

      {/* Phone Button */}
      <button className="flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-full shadow-lg hover:bg-blue-700 transition">
        <Image
          src="/download.svg"
          alt="Phone"
          width={20}
          height={20}
          className="w-5 h-5"
        />
        Phone
      </button>
    </div>
  );
}
