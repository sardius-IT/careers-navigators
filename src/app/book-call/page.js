export default function BookCallPage() {
  return (
    <div className="p-10 flex flex-col items-center">
      <h1 className="text-4xl font-bold text-indigo-600 mb-4">Book a Call</h1>
      <p className="text-gray-600 mb-6 text-center max-w-xl">
        Schedule a free consultation call with our career experts. Fill out your details below and we’ll reach out soon!
      </p>
      <form className="bg-white shadow-md rounded-2xl p-6 w-full max-w-md space-y-4">
        <input
          type="text"
          placeholder="Full Name"
          className="w-full border rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-indigo-400"
        />
        <input
          type="email"
          placeholder="Email Address"
          className="w-full border rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-indigo-400"
        />
        <input
          type="tel"
          placeholder="Phone Number"
          className="w-full border rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-indigo-400"
        />
        <textarea
          placeholder="Your Message"
          rows="4"
          className="w-full border rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-indigo-400"
        ></textarea>
        <button
          type="submit"
          className="w-full py-3 bg-gradient-to-r from-blue-500 to-indigo-500 text-white rounded-lg font-semibold hover:scale-105 transition"
        >
          Submit
        </button>
      </form>
    </div>
  );
}
