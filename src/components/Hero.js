export default function Hero() {
  return (
    <section
      className="relative h-[400px] md:h-[500px] flex flex-col justify-center items-start px-8 bg-cover bg-center rounded-2xl overflow-hidden"
      style={{ backgroundImage: "url('/college-bg.jpg')" }}
    >
      <div className="absolute inset-0 bg-gradient-to-b from-black/40 to-black/10" />
      <div className="relative z-10 max-w-xl">
        <h1 className="text-4xl md:text-5xl font-extrabold text-white mb-4">
          Find the Best <span className="text-yellow-400">Exams</span>
        </h1>
        <p className="text-white text-lg">
          Find the best colleges, exams, and courses to make informed decisions for your future.
        </p>
      </div>
    </section>
  );
}
