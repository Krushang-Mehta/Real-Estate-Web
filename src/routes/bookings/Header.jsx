
import { useState } from "react";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="w-full bg-white shadow-sm">

      {/* MAIN NAVBAR */}
      <div className="h-16 flex items-center justify-between px-4">

        {/* LEFT (only for desktop) */}
        <h1 className="hidden md:block text-lg font-semibold">
          Book List
        </h1>

        {/* CENTER (mobile only) */}
        <h1 className="md:hidden text-lg font-semibold mx-auto">
          Book List
        </h1>

        {/* RIGHT (desktop only) */}
        <div className="hidden md:flex items-center gap-4">
          <select className="border rounded-lg px-3 py-1">
            <option>All Categories</option>
            <option>Finance</option>
            <option>Fiction</option>
            <option>History</option>
            <option>Personality</option>
          </select>

          <button className="bg-blue-500 text-white px-4 py-1 rounded-lg">
            + Add Book
          </button>
        </div>

        {/* HAMBURGER (mobile only) */}
        <button
          className="md:hidden"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* MOBILE DROPDOWN PANEL */}
      {isOpen && (
        <div className="md:hidden border-t bg-white px-4 py-3 space-y-3">

          <select className="w-full border rounded-lg px-3 py-2">
            <option>All Categories</option>
            <option>Finance</option>
            <option>Fiction</option>
            <option>History</option>
            <option>Personality</option>
          </select>

          <button className="w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-700 cursor-pointer">
            + Add Book
          </button>
        </div>
      )}
    </header>
  );
}

