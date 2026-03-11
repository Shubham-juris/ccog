"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Courses", path: "/courses" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <header className="sticky top-0 z-50 bg-black shadow-md">
      <nav className="container mx-auto flex justify-between items-center px-6 py-4 text-white">
        
        {/* Logo */}
        <Link href="/" className="text-2xl font-bold text-red-500">
          CCOG
        </Link>

        {/* Desktop Menu */}
        <ul className="hidden md:flex space-x-8">
          {navLinks.map((link) => (
            <li key={link.path}>
              <Link
                href={link.path}
                className={`transition duration-300 ${
                  pathname === link.path
                    ? "text-red-500 font-semibold"
                    : "hover:text-red-400"
                }`}
              >
                {link.name}
              </Link>
            </li>
          ))}
        </ul>

        {/* Mobile Button */}
        <button
          className="md:hidden text-2xl"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle Menu"
        >
          ☰
        </button>
      </nav>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-black text-white px-6 pb-4">
          <ul className="space-y-4">
            {navLinks.map((link) => (
              <li key={link.path}>
                <Link
                  href={link.path}
                  onClick={() => setIsOpen(false)}
                  className={`block ${
                    pathname === link.path
                      ? "text-red-500 font-semibold"
                      : "hover:text-red-400"
                  }`}
                >
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      )}
    </header>
  );
}
