"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

const navLinks = [
  { label: "Chat now", href: "/connect-with-astrologer" },
  { label: "Call now", href: "/connect-with-astrologer" },
  { label: "Our Team", href: "/team" },
  { label: "Gallery", href: "/gallery" },
  { label: "Contact Us", href: "/contact" },
];

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="bg-background w-full">
      <header
        className="font-playfair-display fixed top-0 right-0 left-0 shadow-sm lg:shadow-none z-40"
        style={{ opacity: 1, transform: "none" }}
      >
        <nav className="mx-auto flex bg-background items-center justify-between px-6 py-2 md:py-4">

          {/* Logo */}
          <div className="flex">
            <Link className="-m-1.5 p-1.5" href="/">
              <div className="w-20 h-20 relative w-20 h-20">
                <Image
                  alt="PRANA"
                  fill
                  decoding="async"
                  className="object-contain"
                  src="/prana.svg"
                  style={{ position: "absolute", height: "100%", width: "100%", left: 0, top: 0, right: 0, bottom: 0, color: "transparent" }}
                />
              </div>
            </Link>
          </div>

          {/* Desktop nav links */}
          <div className="hidden lg:flex lg:gap-x-8 justify-center flex-1">
            <Link className="text-sm align-middle font-medium text-secondary hover:text-primary transition-colors" href="/connect-with-astrologer">Chat now</Link>
            <Link className="text-sm align-middle font-medium text-secondary hover:text-primary transition-colors" href="/connect-with-astrologer">Call now</Link>
            <Link className="text-sm align-middle font-medium text-secondary hover:text-primary transition-colors" href="/team">Our Team</Link>
            <Link className="text-sm align-middle font-medium text-secondary hover:text-primary transition-colors" href="/gallery">Gallery</Link>
            <Link className="text-sm align-middle font-medium text-secondary hover:text-primary transition-colors" href="/contact">Contact Us</Link>
          </div>

          {/* Desktop CTA buttons */}
          <div className="lg:gap-x-4  justify-center hidden lg:flex flex-row items-center">
            <button className="inline-flex items-center px-5 py-5 justify-center gap-2 whitespace-nowrap rounded-full font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 bg-foreground text-white shadow-sm hover:bg-foreground/80 h-9 text-sm">
              Login
            </button>
            <Link href="/connect-with-astrologer">
              <button className="inline-flex items-center px-5 py-5 justify-center gap-2 whitespace-nowrap rounded-full font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 bg-secondary text-white shadow-sm hover:bg-secondary/80 h-9 text-sm">
                Chat Now
              </button>
            </Link>
            <Link href="/connect-with-astrologer">
              <button className="inline-flex items-center px-5 py-5 justify-center gap-2 whitespace-nowrap rounded-full font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 bg-secondary text-white shadow-sm hover:bg-secondary/80 h-9 text-sm">
                Call Now
              </button>
            </Link>
          </div>

          {/* Mobile: Login + Hamburger */}
          <div className="lg:hidden flex items-center gap-2">
            <button className="inline-flex items-center px-5 py-5 justify-center gap-2 whitespace-nowrap rounded-full font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 bg-foreground text-white shadow-sm hover:bg-foreground/80 h-9 text-sm">
              Login
            </button>
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-full font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 text-primary hover:text-secondary h-9 text-sm lg:hidden p-2"
              style={{ width: "auto", height: "auto" }}
              aria-label="Open menu"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="lucide lucide-menu"
                style={{ width: "24px", height: "24px", minWidth: "24px", minHeight: "24px" }}
              >
                <line x1="4" x2="20" y1="12" y2="12" />
                <line x1="4" x2="20" y1="6" y2="6" />
                <line x1="4" x2="20" y1="18" y2="18" />
              </svg>
            </button>
          </div>
        </nav>

        {/* Mobile menu drawer */}
        {menuOpen && (
          <div className="lg:hidden bg-background border-t border-foreground/10 px-6 py-4 flex flex-col gap-4">
            {navLinks.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                className="text-sm font-medium text-secondary hover:text-primary transition-colors"
                onClick={() => setMenuOpen(false)}
              >
                {link.label}
              </Link>
            ))}
            <div className="flex gap-3 pt-2">
              <Link href="/connect-with-astrologer" onClick={() => setMenuOpen(false)}>
                <button className="inline-flex items-center px-5 py-5 justify-center gap-2 whitespace-nowrap rounded-full font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 bg-secondary text-white shadow-sm hover:bg-secondary/80 h-9 text-sm">
                  Chat Now
                </button>
              </Link>
              <Link href="/connect-with-astrologer" onClick={() => setMenuOpen(false)}>
                <button className="inline-flex items-center px-5 py-5 justify-center gap-2 whitespace-nowrap rounded-full font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 bg-secondary text-white shadow-sm hover:bg-secondary/80 h-9 text-sm">
                  Call Now
                </button>
              </Link>
            </div>
          </div>
        )}
      </header>
    </div>
  );
}
