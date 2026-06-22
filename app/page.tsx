import Banner from "./components/Banner";
import ConnectCards from "./components/ConnectCards";
import Solutions from "./components/Solutions";
import Locations from "./components/Locations";
import GalleryCarousel from "./components/GalleryCarousel";
import Stats from "./components/Stats";
import ConnectNow from "./components/ConnectNow";
import CityServices from "./components/CityServices";
import Link from "next/link";
import ContactForm from "./components/ContactForm";
import Reviews from "./components/Reviews";

export default function Home() {
  return (
    <main className="flex flex-col flex-1">
      <div className="px-5 sm:px-8 md:px-12 lg:px-20 pb-5"></div>
      <Banner />
      <ConnectCards />
      <GalleryCarousel />
      <Solutions />

      {/* Contact Form */}
      <section className="relative w-full overflow-hidden bg-foreground py-16 md:py-24">

        {/* Scattered star decorations */}
        <svg className="absolute inset-0 w-full h-full pointer-events-none select-none" aria-hidden="true" xmlns="http://www.w3.org/2000/svg">
          <circle cx="4%"  cy="12%" r="1.5" fill="#ffb58a" opacity="0.25" />
          <circle cx="9%"  cy="55%" r="1"   fill="#ffb58a" opacity="0.18" />
          <circle cx="15%" cy="30%" r="2"   fill="#ffb58a" opacity="0.12" />
          <circle cx="18%" cy="80%" r="1.5" fill="#ffb58a" opacity="0.20" />
          <circle cx="25%" cy="18%" r="1"   fill="#ffb58a" opacity="0.15" />
          <circle cx="30%" cy="68%" r="2"   fill="#ffb58a" opacity="0.10" />
          <circle cx="38%" cy="90%" r="1.5" fill="#ffb58a" opacity="0.18" />
          <circle cx="42%" cy="8%"  r="1"   fill="#ffb58a" opacity="0.22" />
          <circle cx="55%" cy="92%" r="1.5" fill="#ffb58a" opacity="0.14" />
          <circle cx="65%" cy="5%"  r="2"   fill="#ffb58a" opacity="0.12" />
          <circle cx="72%" cy="85%" r="1"   fill="#ffb58a" opacity="0.20" />
          <circle cx="80%" cy="20%" r="1.5" fill="#ffb58a" opacity="0.16" />
          <circle cx="85%" cy="60%" r="2"   fill="#ffb58a" opacity="0.10" />
          <circle cx="90%" cy="40%" r="1"   fill="#ffb58a" opacity="0.22" />
          <circle cx="95%" cy="75%" r="1.5" fill="#ffb58a" opacity="0.18" />
          {/* 4-point star shapes */}
          <path d="M60 8 L61.2 11.5 L65 11.5 L62 13.5 L63.2 17 L60 15 L56.8 17 L58 13.5 L55 11.5 L58.8 11.5 Z" fill="#ffb58a" opacity="0.20" transform="translate(-44, 40) scale(0.8)" />
          <path d="M60 8 L61.2 11.5 L65 11.5 L62 13.5 L63.2 17 L60 15 L56.8 17 L58 13.5 L55 11.5 L58.8 11.5 Z" fill="#ffb58a" opacity="0.15" transform="translate(680, 120) scale(0.6)" />
          <path d="M60 8 L61.2 11.5 L65 11.5 L62 13.5 L63.2 17 L60 15 L56.8 17 L58 13.5 L55 11.5 L58.8 11.5 Z" fill="#ffb58a" opacity="0.18" transform="translate(200, 280) scale(0.7)" />
        </svg>

        {/* Large faint ring behind left content */}
        <div
          className="absolute -left-32 top-1/2 -translate-y-1/2 w-120 h-120 rounded-full border border-primary/10 pointer-events-none"
          aria-hidden="true"
        />
        <div
          className="absolute -left-16 top-1/2 -translate-y-1/2 w-80 h-80 rounded-full border border-primary/10 pointer-events-none"
          aria-hidden="true"
        />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-10 md:px-14 lg:px-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">

            {/* Left — Info */}
            <div className="flex flex-col gap-7">

              {/* Ornamental divider */}
              <div className="flex items-center gap-3">
                <div className="h-px flex-1 bg-primary/20" />
                <div className="w-9 h-9 rounded-full border border-primary/30 flex items-center justify-center shrink-0">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="#ffb58a" className="w-4 h-4 opacity-80">
                    <path d="M12 2l2.4 7.4H22l-6.2 4.5 2.4 7.4L12 17l-6.2 4.3 2.4-7.4L2 9.4h7.6z" />
                  </svg>
                </div>
                <div className="h-px flex-1 bg-primary/20" />
              </div>

              {/* Heading */}
              <div className="flex flex-col gap-3">
                <h2 className="text-3xl sm:text-4xl md:text-5xl font-medium font-playfair-display text-white leading-tight">
                  Begin Your
                  <br />
                  <span className="font-playfair-display-italic text-primary">Spiritual Journey</span>
                </h2>
                <p className="text-white/80 font-quicksand font-medium text-sm md:text-base leading-relaxed max-w-md">
                  Share your concern and our expert astrologer will guide you with personalised Vedic remedies — available worldwide, in-person &amp; online.
                </p>
              </div>

              {/* Trust points */}
              <div className="flex flex-col gap-3.5">
                {[
                  { title: "Available 24/7", desc: "For urgent consultations, anytime" },
                  { title: "Fully Confidential", desc: "Your privacy is our top priority" },
                  { title: "Expert Vedic Guidance", desc: "Personalised remedies for your situation" },
                  { title: "Serving Worldwide", desc: "In-person and online, across the globe" },
                ].map((item, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <span className="mt-0.5 w-5 h-5 rounded-full bg-primary/20 flex items-center justify-center shrink-0">
                      <svg xmlns="http://www.w3.org/2000/svg" width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="#ffb58a" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M20 6 9 17l-5-5" />
                      </svg>
                    </span>
                    <p className="font-quicksand text-sm leading-snug">
                      <span className="text-white font-semibold">{item.title}</span>
                      <span className="text-white/80"> — {item.desc}</span>
                    </p>
                  </div>
                ))}
              </div>

              {/* Direct CTAs */}
              <div className="flex flex-wrap gap-3 pt-1">
                <Link
                  href="tel:+14169314409"
                  className="inline-flex items-center gap-2 bg-[#fff]/15 border border-[#fff]/30 text-[#fff] font-quicksand font-semibold rounded-full px-5 py-2.5 hover:bg-primary/25 transition-colors text-sm"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.11 12 19.79 19.79 0 0 1 1.07 3.38A2 2 0 0 1 3 1.07h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z" />
                  </svg>
                  +1 416-931-4409
                </Link>
                {/* <Link
                  href="https://wa.me/14169314409"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-[#25D366]/15 border border-[#25D366]/30 text-[#25D366] font-quicksand font-semibold rounded-full px-5 py-2.5 hover:bg-[#25D366]/25 transition-colors text-sm"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" width="15" height="15">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413Z" />
                  </svg>
                  Chat on WhatsApp
                </Link> */}
              </div>
            </div>

            {/* Right — Form card */}
            <div className="bg-background rounded-2xl md:rounded-3xl p-6 md:p-10 shadow-2xl ring-1 ring-white/10">
              <div className="flex items-center gap-3 mb-7">
                <div className="w-1 h-8 bg-primary rounded-full shrink-0" />
                <div>
                  <h3 className="text-lg font-semibold font-playfair-display text-foreground">Send Us a Message</h3>
                  <p className="text-secondary font-quicksand text-xs mt-0.5">We'll respond within 24 hours</p>
                </div>
              </div>
              <ContactForm />
            </div>

          </div>
        </div>
      </section>

      <Reviews />
      <Stats />
      <ConnectNow />
      <CityServices />
      <Locations />
    </main>
  );
}
