"use client";

import { Menu } from "lucide-react";
import Link from "next/link";
import { useState } from "react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-white shadow-md">
      <nav className="relative max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">
        <Link href="/" className="text-xl font-bold tracking-tight">
          CleanLiving
        </Link>

        <div className="hidden md:flex gap-8 text-sm font-medium">
          <Link href="#home">Home</Link>
          <Link href="#about">About</Link>
          <Link href="#services">Services</Link>
          <Link href="#whychooseus">Why Choose Us</Link>
          <Link href="#contact">Contact</Link>
        </div>

        <button onClick={() => setIsOpen(!isOpen)} className="md:hidden">
          <Menu className="w-6 h-6" />
        </button>
      </nav>

      {isOpen && (
        <div className="md:hidden bg-white px-4 pb-4 pt-2 shadow-md absolute top-full left-0 w-full z-40 flex flex-col items-start space-y-2">
          <Link href="#home" onClick={() => setIsOpen(false)}>
            Home
          </Link>
          <Link href="#about" onClick={() => setIsOpen(false)}>
            About
          </Link>
          <Link href="#services" onClick={() => setIsOpen(false)}>
            Services
          </Link>
          <Link href="#whychooseus" onClick={() => setIsOpen(false)}>
            Why Choose Us
          </Link>
          <Link href="#contact" onClick={() => setIsOpen(false)}>
            Contact
          </Link>
        </div>
      )}
    </header>
  );
}
