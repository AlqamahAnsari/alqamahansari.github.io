// src/components/Header.jsx
import React from "react";
import { Link, useLocation } from "react-router-dom";

export default function Header() {
  const location = useLocation();

  const nav = [
    { id: "home", label: "Home", to: "/#home" },
    { id: "about", label: "About", to: "/#about" },
    { id: "projects", label: "Projects", to: "/#projects" },
    { id: "skills", label: "Skills", to: "/#skills" },
    { id: "contact", label: "Contact", to: "/#contact" },
  ];

  return (
    <header className="fixed top-0 w-full bg-white shadow z-50">
      <nav className="max-w-7xl mx-auto px-4 flex items-center justify-between py-4">

        {/* Left Side Name */}
        <Link to="/" className="text-xl font-bold text-black">
          Mohammad Alquamah Ansari
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex gap-6 items-center">
          {nav.map((item) => {
            const active =
              location.hash === `#${item.id}` ||
              (location.pathname === "/" && !location.hash && item.id === "home");

            return (
              <Link
                key={item.id}
                to={item.to}
                className={`uppercase text-sm font-medium pb-1 transition-all duration-150
                  ${
                    active
                      ? "border-b-2 border-black text-black"
                      : "border-b-2 border-transparent text-gray-800"
                  }
                  hover:border-black`}
              >
                {item.label}
              </Link>
            );
          })}
        </div>

        {/* Mobile Navigation */}
        <div className="md:hidden">
          <details>
            <summary className="cursor-pointer px-3 py-2 rounded bg-gray-100">
              Menu
            </summary>

            <div className="mt-2 flex flex-col gap-2 px-2">
              {nav.map((item) => (
                <Link
                  key={item.id}
                  to={item.to}
                  className="px-3 py-2"
                >
                  {item.label}
                </Link>
              ))}
            </div>
          </details>
        </div>
      </nav>
    </header>
  );
}
