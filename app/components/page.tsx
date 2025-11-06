"use client";
import Link from "next/link";

export default function About() {
  return (
   <main className="min-h-screen bg-black text-white px-6 sm:px-12 md:px-24 lg:px-32 xl:px-48 py-24 space-y-24">
        {/* Components and Technology */}
      <section className="text-center space-y-4">
        <h1 className="text-5xl sm:text-6xl font-extrabold tracking-tight bg-linear-to-r from-blue-300 to-blue-700 bg-clip-text text-transparent pb-2.5">
            Components & Technology
        </h1>
        <h2 className="text-xl sm:text-2xl text-white/80 font-light">
          Hardware foundations of autonomous robotics.
        </h2>
      </section>
      
      <section className="max-w-4xl mx-auto space-y-6 text-center">
        <p className="text-white/70 text-lg leading-relaxed">
            The robots were built using microcontrollers such as ESP32, interfaced with IR and ultrasonic sensors for environmental detection. Motor drivers controlled the movement of the robots, while power management components ensured efficient energy use.
        </p>
      </section>

      <section className="text-center pt-8">
        <h1 className="text-3xl font-semibold text-center mb-4 -mt-4">Components</h1>
        <div className="grid grid-cols-3 sm:grid-cols-3 gap-8">
            <div className="px-10 py-6 rounded-xl bg-white/10 border border-white/10 hover:border-blue-500/40 transition">
              <h4 className="text-2xl font-serif text-white mb-2">Components</h4>
            </div>

            <div className="px-10 py-6 rounded-xl bg-white/10 border border-white/10 hover:border-blue-500/40 transition">
              <h4 className="text-2xl font-serif text-white mb-2">Description</h4>
            </div>

            <div className="px-10 py-6 rounded-xl bg-white/10 border border-white/10 hover:border-blue-500/40 transition">
              <h4 className="text-2xl font-serif text-white mb-2">Learning Point</h4>
            </div>

            <div className="text-white/70 text-sm">
                IR Sensor
            </div>

            <div className="text-white/70 text-sm">
                Detects the black line vs white surface.
            </div>

            <div className="text-white/70 text-sm">
                Teaches calibration, thresholding, and proportional correction (PID).
            </div>
        </div>

        <div className="grow border-t border-y-gray-700 mt-4 mb-2"></div>

        <div className="grid grid-cols-3 sm:grid-cols-3 gap-8 mt-6">
            <div className="text-white/70 text-sm">
                Ultrasonic Sensor
            </div>

            <div className="text-white/70 text-sm">
                Measures distance to obstacles using sound waves.
            </div>

            <div className="text-white/70 text-sm">
                Introduces time-of-flight measurement and real-time decision logic.
            </div>
        </div>

        <div className="grow border-t border-y-gray-700 mt-4 mb-2"></div>

        <div className="grid grid-cols-3 sm:grid-cols-3 gap-8 mt-6">
            <div className="text-white/70 text-sm">
                Motor Driver (L298N)
            </div>

            <div className="text-white/70 text-sm">
                Controls speed and direction of DC motors.
            </div>

            <div className="text-white/70 text-sm">
                Students learned PWM, direction control, and current handling.
            </div>
        </div>

        <div className="grow border-t border-y-gray-700 mt-4 mb-2"></div>

        <div className="grid grid-cols-3 sm:grid-cols-3 gap-8 mt-6">
            <div className="text-white/70 text-sm">
                ESP32
            </div>

            <div className="text-white/70 text-sm">
                The brain of the robot.
            </div>

            <div className="text-white/70 text-sm">
                Code execution, serial debugging, and loop timing.
            </div>
        </div>

        <div className="grow border-t border-y-gray-700 mt-4 mb-2"></div>

        <div className="grid grid-cols-3 sm:grid-cols-3 gap-8 mt-6">
            <div className="text-white/70 text-sm">
                Chassis + Motors
            </div>

            <div className="text-white/70 text-sm">
                The physical structure.
            </div>

            <div className="text-white/70 text-sm">
                Stability, weight balance, wiring, and traction testing.
            </div>
        </div>

        <div className="grow border-t border-y-gray-700 mt-4 mb-2"></div>

        <div className="grid grid-cols-3 sm:grid-cols-3 gap-8 mt-6">
            <div className="text-white/70 text-sm">
                Power Supply
            </div>

            <div className="text-white/70 text-sm">
                Provides energy to all modules.
            </div>

            <div className="text-white/70 text-sm">
                Proper voltage selection and wiring safety.
            </div>
        </div>
       </section>

      <section className="grid grid-cols-3 sm:grid-cols-3 gap-8 text-center">

      </section>
    </main>
    );
}