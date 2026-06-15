"use client";

import { useState, useEffect, useRef, useCallback } from "react";
import Image from "next/image";
import Link from "next/link";

const teamMembers = [
  {
    name: "Pt. Madhav Sharma",
    specialty: "Vastu Problems Expert",
    experience: "40Yrs Exp",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&q=80",
    alt: "Team Member: Pt. Madhav Sharma",
  },
  {
    name: "Astro Niti Dave",
    specialty: "Relationship Problems Expert",
    experience: "10Yrs Exp",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&q=80",
    alt: "Team Member: Astro Niti Dave",
  },
  {
    name: "Pt. Dushyant Dave",
    specialty: "Financial Problems Expert",
    experience: "20Yrs Exp",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&q=80",
    alt: "Team Member: Pt. Dushyant Dave",
  },
];

const AUTOPLAY_INTERVAL = 3000;
// md breakpoint: 3 columns visible — no scrolling needed when all members fit
const MD_BREAKPOINT = 768;

export default function TeamCarousel() {
  const [current, setCurrent] = useState(0);
  const [translateX, setTranslateX] = useState(0);
  const [isDesktop, setIsDesktop] = useState(false);
  const trackRef = useRef<HTMLDivElement>(null);
  const timerRef = useRef<ReturnType<typeof setInterval> | null>(null);

  const getOffset = useCallback((index: number): number => {
    if (!trackRef.current) return 0;
    const slideEl = trackRef.current.children[index] as HTMLElement | undefined;
    return slideEl ? slideEl.offsetLeft : 0;
  }, []);

  const stopAutoPlay = useCallback(() => {
    if (timerRef.current) clearInterval(timerRef.current);
  }, []);

  const startAutoPlay = useCallback(() => {
    stopAutoPlay();
    timerRef.current = setInterval(() => {
      setCurrent((prev) => {
        const next = (prev + 1) % teamMembers.length;
        setTranslateX(getOffset(next));
        return next;
      });
    }, AUTOPLAY_INTERVAL);
  }, [getOffset, stopAutoPlay]);

  // Check viewport and toggle carousel on/off
  useEffect(() => {
    const update = () => {
      const desktop = window.innerWidth >= MD_BREAKPOINT;
      setIsDesktop(desktop);
      if (desktop) {
        stopAutoPlay();
        setCurrent(0);
        setTranslateX(0);
      } else {
        startAutoPlay();
      }
    };
    update();
    window.addEventListener("resize", update);
    return () => {
      window.removeEventListener("resize", update);
      stopAutoPlay();
    };
  }, [startAutoPlay, stopAutoPlay]);

  const handleDotClick = (index: number) => {
    setCurrent(index);
    setTranslateX(getOffset(index));
    startAutoPlay();
  };

  return (
    <div className="flex pt-4 pb-6 flex-col p-4 md:p-4 py-2">

      {/* Section heading */}
      <div className="flex flex-col justify-center items-start md:items-center">
        <h3 className="text-secondary font-playfair-display text-2xl md:text-4xl font-medium">
          My{" "}
          <span className="font-playfair-display-italic text-foreground">Team</span>
          {" "}of astrologers
        </h3>
        <p className="text-secondary font-quicksand font-semibold">
          the largest group of astrologers in the world
        </p>
      </div>

      {/* Carousel */}
      <div className="w-full mt-6 self-stretch">
        <div
          className="relative w-full max-w-3xl md:max-w-5xl mx-auto"
          role="region"
          aria-roledescription="carousel"
        >
          <div className="overflow-hidden">
            <div
              ref={trackRef}
              className="flex -ml-2 md:-ml-4"
              style={
                isDesktop
                  ? { transform: "translate3d(0px, 0px, 0px)" }
                  : { transform: `translate3d(-${translateX}px, 0px, 0px)`, transition: "transform 0.4s ease" }
              }
            >
              {teamMembers.map((member, i) => (
                <div
                  key={i}
                  role="group"
                  aria-roledescription="slide"
                  className="min-w-0 shrink-0 grow-0 pl-2 w-full basis-full md:pl-4 md:basis-1/3 sm:basis-2/3 lg:basis-1/3"
                >
                  <div className="transition-all duration-300">
                    <div className="relative w-full max-w-md mx-auto flex-shrink-0 md:w-72">
                      <div className="relative bg-[#FFE3D2] rounded-t-3xl px-16 sm:px-20 md:px-9 pt-4 rounded-b-3xl">

                        {/* Member photo */}
                        <div className="relative w-full flex justify-center py-3 rounded-t-full">
                          <Image
                            alt={member.alt}
                            loading="lazy"
                            width={300}
                            height={300}
                            decoding="async"
                            className="rounded-t-full h-52 w-48 object-cover border-[#ffb58a] border-[14px]"
                            style={{ color: "transparent" }}
                            src={member.image}
                          />
                        </div>

                        {/* Member info */}
                        <div className="text-center py-4 px-3">
                          <h3 className="text-lg md:text-xl font-bold font-quicksand text-black">
                            {member.name}
                          </h3>
                          <div className="flex flex-col items-center justify-center mt-1 mb-4">
                            <p className="text-sm md:text-sm font-medium font-quicksand text-secondary text-nowrap md:text-wrap">
                              {member.specialty}, {member.experience}
                            </p>
                          </div>
                          <Link className="w-full" href="/connect-with-astrologer">
                            <button className="inline-flex items-center px-5 py-5 justify-center gap-2 whitespace-nowrap rounded-full transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 bg-secondary text-white shadow-sm hover:bg-secondary/80 h-9 text-sm w-full font-playfair-display font-bold">
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
                                className="lucide lucide-phone fill-white text-secondary"
                              >
                                <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                              </svg>{" "}
                              Talk Now
                            </button>
                          </Link>
                        </div>

                        {/* Decorative curve */}
                        <div className="absolute left-20 md:left-8 top-5">
                          <Image
                            alt="Decorative Curve"
                            loading="lazy"
                            width={80}
                            height={80}
                            decoding="async"
                            className="w-20 h-20"
                            style={{ color: "transparent" }}
                            src="/image-top.svg"
                          />
                        </div>

                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Dot indicators — mobile only */}
        {!isDesktop && (
          <div className="flex justify-center gap-2 mt-8 md:hidden">
            {teamMembers.map((_, i) => (
              <button
                key={i}
                onClick={() => handleDotClick(i)}
                aria-label={`Go to slide ${i + 1}`}
                className={`inline-flex items-center justify-center gap-2 whitespace-nowrap font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 text-primary hover:text-secondary text-sm w-2 h-2 p-0 rounded-full ${
                  i === current ? "bg-foreground" : "bg-foreground/20"
                }`}
              />
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
