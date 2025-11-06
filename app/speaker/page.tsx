"use client";
import { useState } from "react";
import Link from "next/link";

export default function prac() {
  const [open, setOpen] = useState(false);
return (
  <>
    <div className="bg-black w-full h-[68px] shadow-md shadow-gray-400 flex items-center px-4">
      {/* HAMBURGER BUTTON INSIDE NAVBAR */}
      <button
        onClick={() => setOpen(!open)}
        className="text-white text-xl mr-4 hover:opacity-80 transition relative z-50"
      >
        {open ? "✕" : "☰"}
      </button>
    </div>

    <div className="-mt-16.5 text-center">
      <h1 className="text-base sm:text-lg md:text-xl lg:text-2xl xl:text-4xl 2xl:text-6xl font-bold text-white">
        BOT-IQ
      </h1>
    </div>
    <div className="grid grid-cols-4 m-4 text-center gap-4 auto-cols-max">
      <div className="p-4 rounded-lg bg-black text-white text-2xl">Column 1</div>
      <div className="p-4 rounded-lg bg-black text-white text-2xl">Column 2</div>
      <div className="p-4 rounded-lg bg-black text-white text-2xl">Column 3</div>
      <div className="p-4 rounded-lg bg-black text-white text-2xl">Column 4</div>
      <div className="p-4 rounded-lg bg-gray-600 text-white text-2xl col-span-2">Column 5</div>
      <div className="p-4 rounded-lg bg-gray-600 text-white text-2xl col-span-3">Column 6</div>
      <div className="p-4 rounded-lg bg-black text-white text-2xl col-span-1">Column 7</div>
      <div className="p-4 rounded-lg bg-black text-white text-2xl col-span-2">Column 8</div>
    </div>
    <div className={`fixed top-0 left-0 h-screen w-64 bg-gray-900 text-white p-6 shadow-lg transform transition-transform duration-300
        ${open ? "translate-x-0" : "-translate-x-full"}`}>

        <h2 className="text-2xl font-bold mb-10 pl-4 ">Menu</h2>

        <ul className="space-y-4 text-lg">
          
          <li><Link href="/prac" className="hover:text-cyan-400">Home</Link></li>
          <li><Link href="/about" className="hover:text-cyan-400">About</Link></li>
        </ul>

      </div>
  </>
  )
} 