"use client";
import Link from "next/link";

export default function About() {
  return (
    <main className="min-h-screen bg-black text-white px-6 sm:px-12 md:px-24 lg:px-32 xl:px-48 py-24 space-y-24">
      
      {/* BS BHENCHOD */}
      <section className="text-center space-y-4">
        <h1 className="text-5xl sm:text-6xl font-extrabold tracking-tight bg-linear-to-r from-blue-300 to-blue-700 bg-clip-text text-transparent">
          About BOT-IQ
        </h1>
        <h2 className="text-xl sm:text-2xl text-white/80 font-light">
          Where Curiosity Meets Engineering.
        </h2>
      </section>

      {/* COPY PASTE */}
      <section className="max-w-4xl mx-auto space-y-6 text-center">
        <p className="text-white/70 text-lg leading-relaxed">
          BOT-IQ was an intensive hands-on robotics workshop designed to help students bridge the gap between theoretical learning and real-world problem-solving.
        </p>
        <p className="text-white/70 text-lg leading-relaxed">
          Through guided mentorship, participants explored embedded systems, sensor integration, and autonomous behavior—building robots capable of line following and maze solving.
        </p>
      </section>

      {/* Crying Emoji */}
      <section className="space-y-10">
        <h3 className="text-3xl font-semibold text-center">Learning Outcomes</h3>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 ">
          <div className="p-6 rounded-xl bg-white/10 border border-white/10 hover:border-blue-500/40 transition">
            <h4 className="font-semibold text-white mb-2">Sensor Integration</h4>
            <p className="text-white/60 text-sm">Calibrating and interpreting IR and ultrasonic data.</p>
          </div>

          <div className="p-6 rounded-xl bg-white/10 border border-white/10 hover:border-blue-500/40 transition">
            <h4 className="font-semibold text-white mb-2">Motor Control</h4>
            <p className="text-white/60 text-sm">Implementing PWM for precision speed management.</p>
          </div>

          <div className="p-6 rounded-xl bg-white/10 border border-white/10 hover:border-blue-500/40 transition">
            <h4 className="font-semibold text-white mb-2">Algorithm Design</h4>
            <p className="text-white/60 text-sm">Line following, obstacle detection, and maze solving.</p>
          </div>

          <div className="p-6 rounded-xl bg-white/10 border border-white/10 hover:border-blue-500/40 transition">
            <h4 className="font-semibold text-white mb-2">System Debugging</h4>
            <p className="text-white/60 text-sm">Testing, tuning, and optimizing robot logic.</p>
          </div>
        </div>
      </section>

      {/* stats */}
      <section className="text-center space-y-10">
        <h3 className="text-3xl font-semibold">Event Highlights</h3>

        <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 text-center">
          <div>
            <h4 className="text-4xl font-bold text-blue-500">70+</h4>
            <p className="text-white/60">Participants</p>
          </div>
          <div>
            <h4 className="text-4xl font-bold text-blue-500">3</h4>
            <p className="text-white/60">Days of Workshop</p>
          </div>
          <div>
            <h4 className="text-4xl font-bold text-blue-500">15+</h4>
            <p className="text-white/60">Robots Built</p>
          </div>
          <div>
            <h4 className="text-4xl font-bold text-blue-500">100%</h4>
            <p className="text-white/60">Hands-On Learning</p>
          </div>
        </div>
      </section>

      {/* vaps ghar */}
      <div className="text-center pt-10">
        <Link
          href="/prac"
          className="inline-block mt-6 px-6 py-2 rounded-full text-white font-semibold
                     bg-linear-to-r from-blue-300 to-blue-700
                     shadow-lg shadow-blue-500/40
                     hover:shadow-blue-300/60 hover:-translate-y-0.5
                     active:translate-y-px transition-all duration-300"
        >
          ← Back to Home
        </Link>
      </div>
    </main>
  );
}
