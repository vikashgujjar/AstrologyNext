"use client";

import { useState, useEffect, useCallback } from "react";

const reviews = [
  {
    name: "Priya Sharma",
    location: "New York, NY",
    service: "Black Magic Removal",
    rating: 5,
    text: "I had been suffering from unexplained illness and constant bad luck for over two years. After a session with Astro Sanatana, the negative energy was completely lifted. I feel like a new person. Truly a life-changing experience.",
  },
  {
    name: "Michael Thompson",
    location: "Atlanta, GA",
    service: "Get Your Ex Love Back",
    rating: 5,
    text: "I was heartbroken after my relationship of 4 years ended. Astro Sanatana guided me with personalised remedies and within weeks my partner came back to me. I cannot thank them enough for restoring my love life.",
  },
  {
    name: "Sunita Patel",
    location: "Los Angeles, CA",
    service: "Spiritual Healing",
    rating: 5,
    text: "I was struggling with severe anxiety and emotional blockages. The spiritual healing session was incredibly powerful. I felt a deep sense of peace immediately after. My mental clarity has improved tremendously.",
  },
  {
    name: "James Wilson",
    location: "Chicago, IL",
    service: "Negative Energy Removal",
    rating: 5,
    text: "Our home had a very heavy and dark atmosphere. After the negative energy removal ritual, the difference was immediate — our family relationships improved and the constant arguments stopped. Highly recommend!",
  },
  {
    name: "Anita Kapoor",
    location: "Fremont, CA",
    service: "Chakra Cleansing",
    rating: 5,
    text: "The chakra cleansing session was absolutely transformative. I had been feeling drained and disconnected for months. After the session I felt energised, grounded, and emotionally balanced. Truly remarkable.",
  },
  {
    name: "David Martinez",
    location: "Miami, FL",
    service: "Financial Stuck",
    rating: 5,
    text: "Despite working hard, money never stayed with me. Astro Sanatana identified the financial blockage in my birth chart and performed the Lakshmi Puja. Within a month I received a promotion and a business deal I had been waiting on for a year.",
  },
  {
    name: "Kavita Reddy",
    location: "Houston, TX",
    service: "Palm Reading",
    rating: 5,
    text: "The palm reading was incredibly accurate — things about my past and personality that nobody could have known. The guidance I received for my future has helped me make much better decisions in life and career.",
  },
  {
    name: "Robert Johnson",
    location: "Seattle, WA",
    service: "Evil Spirit Removal",
    rating: 5,
    text: "My family was experiencing very strange and frightening occurrences at home. Astro Sanatana performed the ritual remotely and the disturbances stopped completely. We are finally at peace in our own home.",
  },
  {
    name: "Meena Iyer",
    location: "San Jose, CA",
    service: "Relationship Problems",
    rating: 5,
    text: "My marriage was on the verge of breaking down. Astro Sanatana helped us identify the planetary causes of our conflicts and provided remedies. Today our relationship is stronger and more loving than ever before.",
  },
];

const AVATAR_GRADIENTS = [
  ["#e8824a", "#c0471e"],
  ["#c0471e", "#ffb58a"],
  ["#ffb58a", "#e8824a"],
];

function StarRating({ count }: { count: number }) {
  return (
    <div className="flex gap-0.5">
      {[...Array(count)].map((_, i) => (
        <svg key={i} xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 24 24" fill="#F59E0B">
          <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
        </svg>
      ))}
    </div>
  );
}

export default function Reviews() {
  const [current, setCurrent] = useState(0);
  const [paused, setPaused] = useState(false);
  const [visibleCount, setVisibleCount] = useState(3);

  useEffect(() => {
    const update = () => {
      if (window.innerWidth < 640) setVisibleCount(1);
      else if (window.innerWidth < 1024) setVisibleCount(2);
      else setVisibleCount(3);
    };
    update();
    window.addEventListener("resize", update);
    return () => window.removeEventListener("resize", update);
  }, []);

  const maxIndex = reviews.length - visibleCount;

  const next = useCallback(() => {
    setCurrent((c) => (c >= maxIndex ? 0 : c + 1));
  }, [maxIndex]);

  const prev = () => setCurrent((c) => (c <= 0 ? maxIndex : c - 1));

  useEffect(() => {
    if (paused) return;
    const timer = setInterval(next, 4000);
    return () => clearInterval(timer);
  }, [paused, next]);

  return (
    <section
      className="relative w-full py-14 md:py-20 overflow-hidden"
      style={{ background: "linear-gradient(135deg,#fff8f3 0%,#fff2eb 55%,#ffe8d9 100%)" }}
    >

      {/* ── Background SVG vectors ── */}
      <svg className="absolute inset-0 w-full h-full pointer-events-none select-none" aria-hidden="true" xmlns="http://www.w3.org/2000/svg">
        {/* Mandala rings — top left */}
        <circle cx="0" cy="0" r="230" fill="none" stroke="#ffb58a" strokeWidth="0.8" opacity="0.22" />
        <circle cx="0" cy="0" r="165" fill="none" stroke="#ffb58a" strokeWidth="0.8" opacity="0.16" />
        <circle cx="0" cy="0" r="100" fill="none" stroke="#ffb58a" strokeWidth="0.8" opacity="0.12" />
        {/* Mandala rings — bottom right */}
        <circle cx="100%" cy="100%" r="270" fill="none" stroke="#e8824a" strokeWidth="0.8" opacity="0.18" />
        <circle cx="100%" cy="100%" r="195" fill="none" stroke="#e8824a" strokeWidth="0.8" opacity="0.13" />
        <circle cx="100%" cy="100%" r="120" fill="none" stroke="#e8824a" strokeWidth="0.8" opacity="0.10" />
        {/* Soft blobs */}
        <circle cx="6%" cy="82%" r="90" fill="#ffb58a" opacity="0.07" />
        <circle cx="94%" cy="14%" r="110" fill="#e8824a" opacity="0.06" />
        {/* Dot grid — top right */}
        {Array.from({ length: 5 }).map((_, r) =>
          Array.from({ length: 5 }).map((_, c) => (
            <circle key={`tr-${r}-${c}`} cx={`${72 + c * 3.8}%`} cy={`${8 + r * 5.5}%`} r="1.8" fill="#ffb58a" opacity="0.28" />
          ))
        )}
        {/* Dot grid — bottom left */}
        {Array.from({ length: 4 }).map((_, r) =>
          Array.from({ length: 4 }).map((_, c) => (
            <circle key={`bl-${r}-${c}`} cx={`${3 + c * 3.8}%`} cy={`${72 + r * 6}%`} r="1.8" fill="#e8824a" opacity="0.22" />
          ))
        )}
        {/* Scattered 5-point stars */}
        {[
          { cx: "15%", cy: "12%" }, { cx: "30%", cy: "88%" },
          { cx: "52%", cy: "6%"  }, { cx: "70%", cy: "93%" },
          { cx: "87%", cy: "28%" }, { cx: "95%", cy: "62%" },
        ].map((pos, i) => (
          <text key={i} x={pos.cx} y={pos.cy} textAnchor="middle" fontSize="14" fill="#e8824a" opacity="0.22" fontFamily="serif">★</text>
        ))}
      </svg>

      {/* ── Heading ── */}
      <div className="relative px-4 sm:px-10 md:px-14 lg:px-20 mb-10 md:mb-14 text-center">
        <p className="font-quicksand font-semibold text-xs uppercase tracking-widest text-secondary/60 mb-2">
          Client Testimonials
        </p>
        <h2 className="font-playfair-display text-primary text-2xl sm:text-3xl md:text-4xl font-bold leading-snug">
          What Our Clients{" "}
          <span className="font-playfair-display-italic text-foreground">Say</span>
        </h2>
        <p className="text-secondary font-quicksand font-medium text-sm md:text-base mt-3 max-w-xl mx-auto">
          Thousands of lives transformed through ancient Vedic wisdom and personalised spiritual guidance.
        </p>
      </div>

      {/* ── Carousel ── */}
      <div
        className="relative px-6 sm:px-14 md:px-20 lg:px-28"
        onMouseEnter={() => setPaused(true)}
        onMouseLeave={() => setPaused(false)}
      >
        <div className="overflow-hidden">
          <div
            className="flex transition-transform duration-500 ease-in-out"
            style={{ transform: `translateX(${-(current * (100 / visibleCount))}%)` }}
          >
            {reviews.map((review, idx) => (
              <div
                key={review.name}
                className="shrink-0 px-3"
                style={{ width: `${100 / visibleCount}%` }}
              >
                {/* Card */}
                <div className="relative flex flex-col gap-4 p-6 md:p-7 bg-white rounded-3xl shadow-[0_4px_24px_rgba(232,130,74,0.10)] border border-[#ffc09d]/30 overflow-hidden h-full group hover:shadow-[0_8px_32px_rgba(232,130,74,0.18)] hover:-translate-y-1 transition-all duration-300">

                  {/* Corner glow */}
                  <div className="absolute -top-8 -right-8 w-32 h-32 rounded-full bg-primary/10 blur-2xl pointer-events-none" />

                  {/* Large faded quote mark */}
                  <span className="absolute top-4 right-5 font-playfair-display text-[72px] leading-none text-primary/8 pointer-events-none select-none" aria-hidden="true">"</span>

                  {/* Stars */}
                  <StarRating count={review.rating} />

                  {/* Review text */}
                  <p className="relative text-secondary font-quicksand font-medium text-sm leading-relaxed flex-1 z-10">
                    "{review.text}"
                  </p>

                  {/* Service tag */}
                  <span className="self-start text-[10px] font-quicksand font-bold text-secondary bg-secondary/10 border border-secondary/15 px-3 py-1 rounded-full">
                    {review.service}
                  </span>

                  {/* Gradient divider */}
                  <div className="h-px bg-linear-to-r from-transparent via-[#ffc09d]/60 to-transparent" />

                  {/* Reviewer row */}
                  <div className="flex items-center gap-3">
                    {/* Avatar */}
                    <div
                      className="w-10 h-10 rounded-full flex items-center justify-center shrink-0 shadow-sm"
                      style={{ background: `linear-gradient(135deg, ${AVATAR_GRADIENTS[idx % 3][0]}, ${AVATAR_GRADIENTS[idx % 3][1]})` }}
                    >
                      <span className="font-playfair-display font-bold text-white text-base leading-none">
                        {review.name.charAt(0)}
                      </span>
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="font-quicksand font-bold text-foreground text-sm leading-tight truncate">{review.name}</p>
                      <p className="font-quicksand text-primary/50 text-xs mt-0.5">{review.location}</p>
                    </div>
                    {/* Verified badge */}
                    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="#F59E0B" className="shrink-0 opacity-80">
                      <path d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" stroke="none" />
                    </svg>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Arrow — prev */}
        <button
          onClick={prev}
          aria-label="Previous review"
          className="absolute left-1 top-1/2 -translate-y-1/2 w-9 h-9 rounded-full bg-white border border-[#ffc09d]/60 shadow-md flex items-center justify-center text-primary hover:bg-secondary hover:text-white hover:border-secondary transition-all duration-200 z-10"
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <path d="m15 18-6-6 6-6" />
          </svg>
        </button>

        {/* Arrow — next */}
        <button
          onClick={next}
          aria-label="Next review"
          className="absolute right-1 top-1/2 -translate-y-1/2 w-9 h-9 rounded-full bg-white border border-[#ffc09d]/60 shadow-md flex items-center justify-center text-primary hover:bg-secondary hover:text-white hover:border-secondary transition-all duration-200 z-10"
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <path d="m9 18 6-6-6-6" />
          </svg>
        </button>
      </div>

      {/* ── Dot indicators ── */}
      <div className="flex justify-center gap-2 mt-8">
        {Array.from({ length: maxIndex + 1 }).map((_, i) => (
          <button
            key={i}
            onClick={() => setCurrent(i)}
            aria-label={`Go to slide ${i + 1}`}
            className={`rounded-full transition-all duration-300 ${
              i === current ? "w-6 h-2.5 bg-secondary" : "w-2.5 h-2.5 bg-primary/25 hover:bg-primary/50"
            }`}
          />
        ))}
      </div>

      {/* ── Rating strip ── */}
      <div className="relative mt-12 px-4 sm:px-10 md:px-14 lg:px-20">
        <div className="relative max-w-xl mx-auto rounded-2xl overflow-hidden shadow-lg">
          {/* Gradient bg */}
          <div className="absolute inset-0" style={{ background: "linear-gradient(100deg,#c0471e 0%,#e8824a 50%,#ffb58a 100%)" }} />
          {/* Sheen */}
          <div className="absolute inset-0 bg-linear-to-b from-white/15 to-transparent" />
          {/* Circle decorations inside strip */}
          <svg className="absolute inset-0 w-full h-full pointer-events-none" aria-hidden="true">
            <circle cx="10%" cy="50%" r="35" fill="white" opacity="0.06" />
            <circle cx="30%" cy="50%" r="50" fill="white" opacity="0.04" />
            <circle cx="85%" cy="50%" r="40" fill="white" opacity="0.06" />
            <circle cx="100%" cy="50%" r="30" fill="white" opacity="0.04" />
          </svg>

          <div className="relative flex flex-wrap items-center justify-center gap-3 px-8 py-4">
            {/* Stars */}
            <div className="flex gap-1">
              {[...Array(5)].map((_, i) => (
                <svg key={i} xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="white">
                  <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                </svg>
              ))}
            </div>
            <div className="w-px h-6 bg-white/35" />
            <div className="text-center">
              <p className="font-quicksand font-bold text-white text-sm md:text-base tracking-wide leading-tight">
                5 Stars By 5k+ Verified Clients
              </p>
              <p className="font-quicksand text-white/70 text-[11px] mt-0.5 tracking-wide">Trusted Worldwide · Vedic Astrology</p>
            </div>
            <div className="w-px h-6 bg-white/35" />
            {/* Shield */}
            <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="white" opacity="0.85">
              <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
            </svg>
          </div>
        </div>
      </div>

    </section>
  );
}
