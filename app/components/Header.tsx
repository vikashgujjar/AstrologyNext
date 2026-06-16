"use client";

import { useState, useEffect } from "react";
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

  // Lock body scroll when menu is open
  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [menuOpen]);

  return (
    <div className="bg-background w-full">
      <header
        className="font-playfair-display relative top-0 right-0 left-0 shadow-sm lg:shadow-none z-40"
        style={{ opacity: 1, transform: "none" }}
      >
        <nav className="mx-auto flex bg-background items-center justify-between px-6 py-2 md:py-4">

          {/* Logo */}
          <div className="flex">
            <Link className="-m-1.5 p-1.5" href="/">
              <div className="w-40 h-20 relative w-20 h-20">
                <Image
                  alt="Astro"
                  fill
                  decoding="async"
                  className="object-contain"
                  src="/logo.png"
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
            {/* <button className="inline-flex items-center px-5 py-5 justify-center gap-2 whitespace-nowrap rounded-full font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 bg-foreground text-white shadow-sm hover:bg-foreground/80 h-9 text-sm">
              Login
            </button> */}
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
            {/* <button className="inline-flex items-center px-5 py-5 justify-center gap-2 whitespace-nowrap rounded-full font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 bg-foreground text-white shadow-sm hover:bg-foreground/80 h-9 text-sm">
              Login
            </button> */}
            <button
              onClick={() => setMenuOpen(true)}
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
      </header>

      {/* Mobile full-screen overlay menu */}
      {menuOpen && (
        <div className="fixed inset-0 bg-background z-50 lg:hidden overflow-y-auto">
          <div className="flex flex-col px-6 py-4 space-y-10">

            {/* Top row: logo + close button */}
            <div className="flex justify-between items-center mb-8">
              <Link className="-m-1.5 p-1.5" href="/" onClick={() => setMenuOpen(false)}>
                <div className="w-48 h-20 relative w-20 h-20">
                  <Image
                    alt="Astro Sanatana Veer"
                    fill
                    decoding="async"
                    className="object-contain"
                    src="/logo.png"
                    style={{ position: "absolute", height: "100%", width: "100%", inset: 0, color: "transparent" }}
                  />
                </div>
              </Link>
              <button
                onClick={() => setMenuOpen(false)}
                className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-full font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 text-primary hover:text-secondary h-9 text-sm lg:hidden p-2"
                aria-label="Close menu"
                style={{ width: "auto", height: "auto" }}
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
                  className="lucide lucide-x"
                  style={{ width: "24px", height: "24px", minWidth: "24px", minHeight: "24px" }}
                >
                  <path d="M18 6 6 18" />
                  <path d="m6 6 12 12" />
                </svg>
              </button>
            </div>

            {/* Nav links + Book Us */}
            <div className="flex flex-col space-y-5 items-center" style={{ opacity: 1, transform: "none" }}>
              <div className="flex flex-col space-y-4 items-center">
                {navLinks.map((link) => (
                  <Link
                    key={link.label}
                    className="text-lg font-medium text-secondary hover:text-primary"
                    href={link.href}
                    onClick={() => setMenuOpen(false)}
                  >
                    {link.label}
                  </Link>
                ))}
              </div>

              {/* Book Us */}
              <div className="mt-12 space-y-8 font-quicksand text-primary">
                <div className="text-center space-y-2">
                  <div className="flex justify-center">
                    <Image
                      alt="Book Us"
                      loading="lazy"
                      width={24}
                      height={24}
                      decoding="async"
                      src="/message.svg"
                      style={{ color: "transparent" }}
                    />
                  </div>
                  <p className="text-lg font-playfair-display text-foreground font-medium">Book Us</p>
                  <p className="text-xl">info@astrospiritualistmasteromkar.com</p>
                  <p className="text-sm">For support and bookings please contact us anytime.</p>
                </div>
              </div>
            </div>

          </div>
        </div>
      )}
    </div>
  );
}
