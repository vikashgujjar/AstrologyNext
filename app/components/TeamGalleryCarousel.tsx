"use client";

import { useState, useEffect, useRef, useCallback } from "react";
import Image from "next/image";

const SOURCE_SLIDES = [
  { src: "https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?w=600&q=80", alt: "Pandit Chandrashekhar Sharma with Team" },
  { src: "https://images.unsplash.com/photo-1419242902214-272b3f66ee7a?w=600&q=80", alt: "Pandit Chandrashekhar Sharma with Team" },
  { src: "https://images.unsplash.com/photo-1528319725582-ddc096101511?w=600&q=80", alt: "Pandit Chandrashekhar Sharma at Ambani Wedding" },
  { src: "https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?w=600&q=80", alt: "Astro Sanatana Veer Astrologers with MS Dhoni" },
  { src: "https://images.unsplash.com/photo-1419242902214-272b3f66ee7a?w=600&q=80", alt: "Pandit Chandrashekhar Sharma with Rajinikanth" },
  { src: "https://images.unsplash.com/photo-1528319725582-ddc096101511?w=600&q=80", alt: "Pandit Chandrashekhar Sharma with the Ambani Family" },
  { src: "https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?w=600&q=80", alt: "Astro Sanatana Veer Astrologers with MS Dhoni" },
  { src: "https://images.unsplash.com/photo-1419242902214-272b3f66ee7a?w=600&q=80", alt: "Pandit Chandrashekhar Sharma with Rajinikanth" },
  { src: "https://images.unsplash.com/photo-1528319725582-ddc096101511?w=600&q=80", alt: "Pandit Chandrashekhar Sharma with the Ambani Family" },
];

// Doubled for infinite loop — when current reaches N, onTransitionEnd silently resets to 0
const DISPLAY_SLIDES = [...SOURCE_SLIDES, ...SOURCE_SLIDES];
const N = SOURCE_SLIDES.length;
const AUTOPLAY_INTERVAL = 3000;

export default function TeamGalleryCarousel() {
  const [current, setCurrent] = useState(0);
  const [translateX, setTranslateX] = useState(0);
  const [animating, setAnimating] = useState(true);
  const trackRef = useRef<HTMLDivElement>(null);
  const timerRef = useRef<ReturnType<typeof setInterval> | null>(null);
  const currentRef = useRef(0);

  const getOffset = useCallback((index: number): number => {
    if (!trackRef.current) return 0;
    const el = trackRef.current.children[index] as HTMLElement | undefined;
    return el ? el.offsetLeft : 0;
  }, []);

  const moveTo = useCallback((index: number) => {
    currentRef.current = index;
    setCurrent(index);
    setAnimating(true);
    setTranslateX(getOffset(index));
  }, [getOffset]);

  const startAutoPlay = useCallback(() => {
    if (timerRef.current) clearInterval(timerRef.current);
    timerRef.current = setInterval(() => {
      moveTo(currentRef.current + 1);
    }, AUTOPLAY_INTERVAL);
  }, [moveTo]);

  useEffect(() => {
    startAutoPlay();
    return () => { if (timerRef.current) clearInterval(timerRef.current); };
  }, [startAutoPlay]);

  useEffect(() => {
    const handleResize = () => setTranslateX(getOffset(currentRef.current));
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [getOffset]);

  // After each slide transition: if we're in the clone zone, silently jump back to the real position
  const handleTransitionEnd = useCallback(() => {
    if (currentRef.current >= N) {
      const realIndex = currentRef.current - N;
      setAnimating(false);
      currentRef.current = realIndex;
      setCurrent(realIndex);
      setTranslateX(getOffset(realIndex));
      requestAnimationFrame(() => setAnimating(true));
    }
  }, [getOffset]);

  const handleDotClick = (index: number) => {
    moveTo(index);
    startAutoPlay();
  };

  const dotIndex = current % N;

  return (
    <div className="relative w-full gap-6 overflow-hidden p-4 sm:p-10 md:p-14 lg:p-20">
      <div className="w-full mt-6 self-stretch">
        <div className="relative w-full" role="region" aria-roledescription="carousel">
          <div className="overflow-hidden">
            <div
              ref={trackRef}
              className="flex -ml-2 md:-ml-4"
              style={{
                transform: `translate3d(-${translateX}px, 0px, 0px)`,
                transition: animating ? "transform 0.4s ease" : "none",
              }}
              onTransitionEnd={handleTransitionEnd}
            >
              {DISPLAY_SLIDES.map((slide, i) => (
                <div
                  key={i}
                  role="group"
                  aria-roledescription="slide"
                  className="min-w-0 shrink-0 grow-0 basis-full pl-2 md:pl-4 md:basis-1/3 lg:basis-1/3"
                >
                  <div className="relative cursor-pointer" style={{ height: "300px" }}>
                    <Image
                      alt={slide.alt}
                      fill
                      loading="lazy"
                      decoding="async"
                      className="object-cover rounded-3xl"
                      style={{ position: "absolute", height: "100%", width: "100%", left: 0, top: 0, right: 0, bottom: 0, color: "transparent" }}
                      sizes="100vw"
                      src={slide.src}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="flex justify-center gap-2 mt-8 md:hidden">
          {SOURCE_SLIDES.map((_, i) => (
            <button
              key={i}
              onClick={() => handleDotClick(i)}
              aria-label={`Go to slide ${i + 1}`}
              className={`inline-flex items-center justify-center gap-2 whitespace-nowrap font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 text-primary hover:text-secondary text-sm w-2 h-2 p-0 rounded-full ${
                i === dotIndex ? "bg-[#CB9EFF]" : "bg-[#F2E7FF]"
              }`}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
