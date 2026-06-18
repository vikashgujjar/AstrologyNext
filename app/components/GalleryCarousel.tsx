"use client";

import { useState, useRef } from "react";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import type { Swiper as SwiperType } from "swiper";
import "swiper/css";

const SLIDES = [
  {
    src: "/carouselsImg/1.webp",
    alt: "Client: Mumbai Indians",
    title: "Mumbai Indians",
    description: "Proudly serving the Mumbai Indians family with sacred guidance and astrological blessings.",
  },
  {
    src: "/carouselsImg/2.webp",
    alt: "Astro Sanatana with Sonu Nigam",
    title: "With Sonu Nigam",
    description: "Astro Sanatana honored to share wisdom and blessings with renowned singer Sonu Nigam.",
  },
  {
    src: "/carouselsImg/3.webp",
    alt: "Astro Sanatana Astrologers with MS Dhoni",
    title: "With MS Dhoni",
    description: "Guiding cricket legend MS Dhoni with Vedic astrology, Vastu, and spiritual counsel.",
  },
  {
    src: "/carouselsImg/4.webp",
    alt: "Services",
    title: "Our Sacred Services",
    description: "From kundali readings to black magic removal — holistic Vedic solutions for every life challenge.",
  },
  {
    src: "/carouselsImg/5.webp",
    alt: "Wedding",
    title: "Auspicious Weddings",
    description: "Ensuring divine alignment for your most important day through Vedic wedding astrology.",
  },
];

export default function GalleryCarousel() {
  const [activeIndex, setActiveIndex] = useState(0);
  const swiperRef = useRef<SwiperType | null>(null);

  return (
    <div className="">
      <div className="bg-background p-4 sm:p-10 md:p-14 lg:p-20 overflow-hidden">
        <div className="row-start-2 md:row-start-2 md:col-span-2">
          <div className="w-full mt-6 self-stretch">
            <Swiper
              modules={[Autoplay]}
              spaceBetween={8}
              slidesPerView={1}
              loop={true}
              grabCursor={true}
              autoplay={{ delay: 3000, disableOnInteraction: false }}
              onSwiper={(swiper) => { swiperRef.current = swiper; }}
              onSlideChange={(swiper) => setActiveIndex(swiper.realIndex)}
              breakpoints={{ 768: { slidesPerView: 3, spaceBetween: 16 } }}
            >
              {SLIDES.map((slide, i) => (
                <SwiperSlide key={i}>
                  <div className="relative cursor-pointer" style={{ height: "430px" }}>
                    <Image
                      alt={slide.alt}
                      fill
                      loading="lazy"
                      decoding="async"
                      className="object-cover rounded-3xl object-center"
                      sizes="(max-width: 768px) 100vw, 33vw"
                      src={slide.src}
                    />
                    <div className="absolute bottom-0 left-0 right-0 rounded-b-3xl bg-linear-to-t from-black/75 via-black/40 to-transparent px-5 pb-5 pt-10">
                      <p className="text-white font-semibold text-base leading-tight">{slide.title}</p>
                      <p className="text-white/80 text-sm mt-1 leading-snug">{slide.description}</p>
                    </div>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>

            <div className="flex justify-center gap-2 mt-8 md:hidden">
              {SLIDES.map((_, i) => (
                <button
                  key={i}
                  onClick={() => swiperRef.current?.slideToLoop(i)}
                  aria-label={`Go to slide ${i + 1}`}
                  className={`inline-flex items-center justify-center w-2 h-2 p-0 rounded-full transition-colors focus-visible:outline-none disabled:pointer-events-none disabled:opacity-50 ${
                    i === activeIndex ? "bg-[#CB9EFF]" : "bg-[#F2E7FF]"
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
