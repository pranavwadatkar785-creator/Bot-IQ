"use client";
import Link from "next/link";

export default function Home() {
  return (
    <main className="min-h-screen bg-black text-white px-6 sm:px-12 md:px-24 lg:px-32 xl:px-48 py-24 space-y-32">
      
      {/* Somthing to start */}
      <section className="text-center space-y-6">
        <h1 className="text-5xl sm:text-6xl md:text-7xl font-extrabold tracking-tight bg-linear-to-r from-blue-300 to-blue-700 bg-clip-text text-transparent select-none">
          BOT-IQ
        </h1>

        <h2 className="text-xl sm:text-2xl text-white/90 font-light">
          Engineering Logic Into Motion.
        </h2>

        <p className="max-w-2xl mx-auto text-white/70 leading-relaxed text-base sm:text-lg">
          A hands-on robotics workshop where students designed and built autonomous
          robots using IR and ultrasonic sensors—developing real problem-solving and
          embedded-systems understanding.
        </p>

        <Link
          href="/about"
          className="inline-block mt-6 px-6 py-2 rounded-full text-white font-semibold
                     bg-linear-to-r from-blue-300 to-blue-700
                     shadow-lg shadow-blue-500/40
                     hover:shadow-blue-300/60 hover:-translate-y-0.5
                     active:translate-y-px transition-all duration-300"
        >
          Explore Event →
        </Link>
      </section>

      {/* Chat gpt bolla he */}
      <section className="grid grid-cols-1 sm:grid-cols-3 gap-10 text-center">
        <div>
          <h3 className="text-xl font-semibold text-white mb-2">Hands-On Engineering</h3>
          <p className="text-white/60 leading-relaxed">
            Build, test, iterate — not just theory.
          </p>
        </div>

        <div>
          <h3 className="text-xl font-semibold text-white mb-2">
            Real Autonomous Robotics
          </h3>
          <p className="text-white/60 leading-relaxed">
            Line tracking, maze solving, and sensor fusion.
          </p>
        </div>

        <div>
          <h3 className="text-xl font-semibold text-white mb-2">Mentored by Engineers</h3>
          <p className="text-white/60 leading-relaxed">
            Practical guidance from experienced developers.
          </p>
        </div>
      </section>

      {/* Photttuuuu */}
      <section className="flex justify-center">
        <div className="rounded-2xl overflow-hidden shadow-2xl shadow-fuchsia-900/30 border border-white/10 w-full max-w-3xl sm:max-w-4xl">
          <img
            src="/robot.png"
            alt="BOT-IQ Robot Showcase"
            className="w-full h-auto object-cover"
          />
        </div>
      </section>

      {/* gpt ki sunni paddti hai (free mai go mila hai) */}
      <section className="text-center space-y-6">
        <h3 className="text-2xl sm:text-3xl font-semibold text-white">
          Components & Technology
        </h3>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-10">
          <div className="p-6 rounded-xl bg-white/10 border border-white/10 hover:border-blue-500/40 transition">
            <h4 className="text-lg font-semibold mb-2 text-white">Ultrasonic Sensor</h4>
            <p className="text-white/60 leading-relaxed">Distance detection and obstacle avoidance.</p>
          </div>

          <div className="p-6 rounded-xl bg-white/10 border border-white/10 hover:border-blue-500/40 transition">
            <h4 className="text-lg font-semibold mb-2 text-white">IR Sensor Array</h4>
            <p className="text-white/60 leading-relaxed">Line tracking and proportional correction.</p>
          </div>

          <div className="p-6 rounded-xl bg-white/10 border border-white/10 hover:border-blue-500/40 transition">
            <h4 className="text-lg font-semibold mb-2 text-white">Motor Driver</h4>
            <p className="text-white/60 leading-relaxed">Controls motor direction and speed with precision.</p>
          </div>
        </div>

        <Link
          href="/components"
          className="inline-block mt-6 px-6 py-2 rounded-full text-white font-semibold
                     bg-linear-to-r from-blue-300 to-blue-700
                     shadow-lg shadow-blue-500/40
                     hover:shadow-blue-300/60 hover:-translate-y-0.5
                     active:translate-y-px transition-all duration-300"
        >
          View Components →
        </Link>
      </section>
    </main>
  );
}
