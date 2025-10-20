export default function Navbar() {
  const categories = ["Engineering", "Management", "Medical", "Arts & Humanities", "Agriculture", "Law", "Pharmacy"];
  const actions = ["All Courses", "Ranking", "Promotion ▼"];

  return (
    <header className="w-full shadow-md bg-white rounded-b-2xl sticky top-0 z-50">
      <div className="flex items-center justify-between px-6 py-4">
        {/* Logo */}
        <div className="flex items-center gap-2">
          <img src="/logo.png" alt="Logo" className="h-10" />
          <span className="font-bold text-green-700 text-lg">CAREERS</span>
          <span className="font-bold text-yellow-500 text-lg">NAVIGATORS</span>
        </div>

        {/* Categories */}
        <div className="hidden md:flex gap-3">
          {categories.map((cat, i) => (
            <span key={i} className="px-4 py-2 rounded-full bg-gray-100 text-sm font-semibold hover:bg-green-100 cursor-pointer">
              {cat}
            </span>
          ))}
        </div>

        {/* Buttons */}
        <button className="ml-4 px-5 py-2 bg-gradient-to-r from-blue-500 to-indigo-500 text-white rounded-full shadow">
          Book Call
        </button>
      </div>

      {/* Sub Actions */}
      <div className="flex justify-center gap-3 py-3">
        {actions.map((act, i) => (
          <span key={i} className={`px-4 py-1 rounded-full font-medium ${i === 0 ? "bg-green-200" : i === 1 ? "bg-yellow-200" : "bg-lime-200"}`}>
            {act}
          </span>
        ))}
      </div>
    </header>
  );
}
