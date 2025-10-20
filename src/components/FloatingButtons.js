export default function FloatingButtons() {
  return (
    <div className="fixed bottom-4 left-1/2 -translate-x-1/2 flex gap-4 z-50">
      <button className="flex items-center gap-2 px-4 py-2 bg-green-500 text-white rounded-full shadow-lg">
        <img src="/whatsapp.svg" alt="WhatsApp" className="w-5 h-5" />
        WhatsApp
      </button>
      <button className="flex items-center gap-2 px-4 py-2 bg-red-600 text-white rounded-full shadow-lg">
        <img src="/mail.svg" alt="Admission" className="w-5 h-5" />
        Admission
      </button>
      <button className="flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-full shadow-lg">
        <img src="/phone.svg" alt="Phone" className="w-5 h-5" />
        Phone
      </button>
    </div>
  );
}
