"use client";

import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { services } from "../data/services";

const navLinks = [
  { label: "Chat now", href: "/connect-with-astrologer" },
  { label: "Call now", href: "tel:+14169314409" },
  { label: "Gallery", href: "/gallery" },
  { label: "Contact Us", href: "/contact" },
];

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [megaOpen, setMegaOpen] = useState(false);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);
  const headerRef = useRef<HTMLElement>(null);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [menuOpen]);

  useEffect(() => {
    function handleClick(e: MouseEvent) {
      if (headerRef.current && !headerRef.current.contains(e.target as Node)) {
        setMegaOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClick);
    return () => document.removeEventListener("mousedown", handleClick);
  }, []);

  return (
    <div className="bg-background w-full">
      <header
        ref={headerRef}
        className="font-playfair-display relative top-0 right-0 left-0 shadow-sm lg:shadow-none z-40"
      >
        <nav className="mx-auto flex bg-background items-center justify-between px-4 sm:px-10 md:px-14 lg:px-20 py-2 md:py-4">

          {/* Logo */}
          <div className="flex">
            <Link className="-m-1.5 p-1.5" href="/">
              <div className="w-25 h-25 md:w-35 md:h-35 relative">
                <Image
                  alt="Astro Sanatana Veer"
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
          <div className="hidden lg:flex lg:gap-x-8 justify-center flex-1 items-center">
            <Link className="text-sm font-medium text-secondary hover:text-primary transition-colors" href="/connect-with-astrologer">Chat now</Link>
            <Link className="text-sm font-medium text-secondary hover:text-primary transition-colors" href="tel:+14169314409">Call now</Link>

            {/* Services trigger */}
            <button
              onClick={() => setMegaOpen((v) => !v)}
              onMouseEnter={() => setMegaOpen(true)}
              className={`flex items-center gap-1 text-sm font-medium transition-colors ${megaOpen ? "text-primary" : "text-secondary hover:text-primary"}`}
            >
              Services
              <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className={`transition-transform duration-200 ${megaOpen ? "rotate-180" : ""}`}>
                <path d="m6 9 6 6 6-6" />
              </svg>
            </button>

            <Link className="text-sm font-medium text-secondary hover:text-primary transition-colors" href="/gallery">Gallery</Link>
            <Link className="text-sm font-medium text-secondary hover:text-primary transition-colors" href="/contact">Contact Us</Link>
          </div>

          {/* Desktop CTA buttons */}
          <div className="lg:gap-x-4 justify-center hidden lg:flex flex-row items-center">
            <Link href="https://wa.me/14169314409" target="_blank" rel="noopener noreferrer">
              <button className="inline-flex items-center px-5 py-5 justify-center gap-2 whitespace-nowrap rounded-full font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 bg-secondary text-white shadow-sm hover:bg-secondary/80 h-9 text-sm">
                Chat Now
              </button>
            </Link>
            <Link href="tel:+14169314409">
              <button className="inline-flex items-center px-5 py-5 justify-center gap-2 whitespace-nowrap rounded-full font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 bg-secondary text-white shadow-sm hover:bg-secondary/80 h-9 text-sm">
                Call Now
              </button>
            </Link>
          </div>

          {/* Mobile: Hamburger */}
          <div className="lg:hidden flex items-center gap-2">
            <button
              onClick={() => setMenuOpen(true)}
              className="inline-flex items-center justify-center text-primary hover:text-secondary p-2"
              style={{ width: "auto", height: "auto" }}
              aria-label="Open menu"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <line x1="4" x2="20" y1="12" y2="12" />
                <line x1="4" x2="20" y1="6" y2="6" />
                <line x1="4" x2="20" y1="18" y2="18" />
              </svg>
            </button>
          </div>
        </nav>

        {/* ── MEGA MENU ── */}
        {megaOpen && (
          <div
            className="absolute left-0 right-0 top-full bg-white border-t border-[#ffc09d]/30 shadow-2xl z-50"
            onMouseLeave={() => setMegaOpen(false)}
          >
            <div className="max-w-7xl mx-auto px-6 xl:px-10 py-7 grid grid-cols-4 gap-7">

              {/* Left: Services grid (3 cols × 4 rows) */}
              <div className="col-span-3 flex flex-col gap-5">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-[10px] font-quicksand font-semibold uppercase tracking-widest text-primary/60 mb-0.5">Explore</p>
                    <h3 className="font-playfair-display text-foreground text-lg font-semibold leading-tight">All Services</h3>
                  </div>
                  <Link
                    href="/services"
                    onClick={() => setMegaOpen(false)}
                    className="inline-flex items-center gap-1.5 text-secondary font-quicksand font-semibold text-xs border border-secondary/40 rounded-full px-4 py-1.5 hover:bg-secondary hover:text-white hover:border-secondary transition-colors"
                  >
                    View All
                    <svg xmlns="http://www.w3.org/2000/svg" width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M5 12h14" /><path d="m12 5 7 7-7 7" />
                    </svg>
                  </Link>
                </div>

                <div className="grid grid-cols-3 gap-1">
                  {services.map((s) => (
                    <Link
                      key={s.slug}
                      href={`/services/${s.slug}`}
                      onClick={() => setMegaOpen(false)}
                      className="flex items-center gap-3 px-3 py-2.5 rounded-xl hover:bg-[#FFF2EB] transition-colors group"
                    >
                      <div className="w-9 h-9 rounded-lg overflow-hidden shrink-0 relative border border-[#ffc09d]/30">
                        <Image src={s.image} alt={s.label} fill className="object-cover" sizes="36px" />
                      </div>
                      <div className="min-w-0">
                        <p className="text-[13px] font-quicksand font-semibold text-foreground group-hover:text-secondary transition-colors leading-snug truncate">{s.label}</p>
                        <p className="text-[11px] font-quicksand text-primary/60 leading-tight mt-0.5 truncate">{s.tagline}</p>
                      </div>
                    </Link>
                  ))}
                </div>
              </div>

              {/* Right: CTA panel */}
              <div className="col-span-1 flex flex-col gap-4 bg-[#FFF2EB] rounded-2xl p-5 border border-[#ffc09d]/40 justify-between">
                <div className="flex flex-col gap-3">
                  <div className="w-10 h-10 rounded-full bg-[#ffc09d]/40 flex items-center justify-center">
                    <Image src="/star-primary.svg" alt="" width={20} height={20} aria-hidden="true" />
                  </div>
                  <h3 className="font-playfair-display text-foreground font-semibold text-base leading-snug">
                    Book a Free<br />Consultation
                  </h3>
                  <p className="text-primary font-quicksand font-medium text-xs leading-relaxed">
                    Connect with our Vedic astrologers for personalised spiritual guidance — in-person or online worldwide.
                  </p>
                </div>

                <div className="flex flex-col gap-2.5">
                  <Link
                    href="https://wa.me/14169314409"
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={() => setMegaOpen(false)}
                    className="inline-flex items-center gap-2 bg-[#25D366] text-white font-quicksand font-semibold rounded-full px-4 py-2.5 hover:bg-[#25D366]/85 transition-colors text-xs w-full justify-center"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413Z" />
                    </svg>
                    Chat on WhatsApp
                  </Link>
                  <Link
                    href="tel:+14169314409"
                    onClick={() => setMegaOpen(false)}
                    className="inline-flex items-center gap-2 border border-secondary text-secondary font-quicksand font-semibold rounded-full px-4 py-2.5 hover:bg-secondary hover:text-white transition-colors text-xs w-full justify-center"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.11 12 19.79 19.79 0 0 1 1.07 3.38A2 2 0 0 1 3 1.07h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z" />
                    </svg>
                    Call +1 416-931-4409
                  </Link>
                  <Link
                    href="/connect-with-astrologer"
                    onClick={() => setMegaOpen(false)}
                    className="text-center text-secondary font-quicksand font-semibold text-xs hover:text-secondary/70 transition-colors mt-1"
                  >
                    Or fill a consultation form →
                  </Link>
                </div>
              </div>

            </div>
          </div>
        )}
      </header>

      {/* Mobile full-screen overlay menu */}
      {menuOpen && (
        <div className="fixed inset-0 bg-background z-50 lg:hidden overflow-y-auto">
          <div className="flex flex-col px-6 py-4">

            {/* Top row: logo + close */}
            <div className="flex justify-between items-center mb-8">
              <Link className="-m-1.5 p-1.5" href="/" onClick={() => setMenuOpen(false)}>
                <div className="w-40 h-20 relative">
                  <Image alt="Astro Sanatana Veer" fill decoding="async" className="object-contain" src="/logo.png" style={{ position: "absolute", height: "100%", width: "100%", inset: 0, color: "transparent" }} />
                </div>
              </Link>
              <button onClick={() => setMenuOpen(false)} className="text-primary hover:text-secondary p-2" aria-label="Close menu">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M18 6 6 18" /><path d="m6 6 12 12" />
                </svg>
              </button>
            </div>

            {/* Nav links */}
            <div className="flex flex-col gap-1">
              {navLinks.map((link) => (
                <Link
                  key={link.label}
                  className="text-lg font-medium text-secondary hover:text-primary py-3 border-b border-[#ffc09d]/20"
                  href={link.href}
                  onClick={() => setMenuOpen(false)}
                >
                  {link.label}
                </Link>
              ))}

              {/* Services accordion */}
              <div className="border-b border-[#ffc09d]/20">
                <button
                  onClick={() => setMobileServicesOpen((v) => !v)}
                  className="w-full flex items-center justify-between text-lg font-medium text-secondary hover:text-primary py-3"
                >
                  Services
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className={`transition-transform duration-200 ${mobileServicesOpen ? "rotate-180" : ""}`}>
                    <path d="m6 9 6 6 6-6" />
                  </svg>
                </button>
                {mobileServicesOpen && (
                  <div className="flex flex-col gap-0.5 pb-3">
                    <Link
                      href="/services"
                      onClick={() => setMenuOpen(false)}
                      className="flex items-center gap-3 px-2 py-2 rounded-xl hover:bg-[#FFF2EB] transition-colors"
                    >
                      <div className="w-8 h-8 rounded-lg bg-secondary/10 flex items-center justify-center shrink-0">
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-secondary">
                          <rect width="7" height="7" x="3" y="3" rx="1" /><rect width="7" height="7" x="14" y="3" rx="1" /><rect width="7" height="7" x="14" y="14" rx="1" /><rect width="7" height="7" x="3" y="14" rx="1" />
                        </svg>
                      </div>
                      <span className="text-sm font-quicksand font-semibold text-secondary">View All Services</span>
                    </Link>
                    {services.map((s) => (
                      <Link
                        key={s.slug}
                        href={`/services/${s.slug}`}
                        onClick={() => setMenuOpen(false)}
                        className="flex items-center gap-3 px-2 py-2 rounded-xl hover:bg-[#FFF2EB] transition-colors"
                      >
                        <div className="w-8 h-8 rounded-lg overflow-hidden shrink-0 relative">
                          <Image src={s.image} alt={s.label} fill className="object-cover" sizes="32px" />
                        </div>
                        <span className="text-sm font-quicksand font-medium text-primary">{s.label}</span>
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            </div>

            {/* Book Us */}
            <div className="mt-8 space-y-4 font-quicksand text-primary text-center">
              <div className="flex justify-center">
                <Image alt="Book Us" loading="lazy" width={24} height={24} decoding="async" src="/message.svg" style={{ color: "transparent" }} />
              </div>
              <p className="text-lg font-playfair-display text-foreground font-medium">Book Us</p>
              <p className="text-sm">info@astrospiritualistmasteromkar.com</p>
              <p className="text-sm">For support and bookings please contact us anytime.</p>
              <div className="flex gap-3 justify-center pt-2">
                <Link href="https://wa.me/14169314409" target="_blank" rel="noopener noreferrer" onClick={() => setMenuOpen(false)} className="inline-flex items-center gap-2 bg-secondary text-white font-quicksand font-semibold rounded-full px-6 py-3 hover:bg-secondary/80 transition-colors text-sm">
                  Chat on WhatsApp
                </Link>
                <Link href="tel:+14169314409" onClick={() => setMenuOpen(false)} className="inline-flex items-center gap-2 border border-secondary text-secondary font-quicksand font-semibold rounded-full px-6 py-3 hover:bg-secondary hover:text-white transition-colors text-sm">
                  Call Now
                </Link>
              </div>
            </div>

          </div>
        </div>
      )}
    </div>
  );
}
