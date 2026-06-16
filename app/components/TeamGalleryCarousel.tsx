"use client";

import { useState, useRef } from "react";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import type { Swiper as SwiperType } from "swiper";
import "swiper/css";

const SLIDES = [
  { src: "/carouselsImg/Gallery1.webp", alt: "Client: Mumbai Indians" },
  { src: "/carouselsImg/Gallery2.webp", alt: "Astro Sanatana Veer with Sonu Nigam" },
  { src: "https://images.unsplash.com/photo-1528319725582-ddc096101511?w=600&q=80", alt: "Astro Sanatana Veer at Ambani Wedding" },
  { src: "/carouselsImg/Gallery3.webp", alt: "Astro Sanatana Veer Astrologers with MS Dhoni" },
  { src: "/carouselsImg/Gallery4.webp", alt: "Services" },
  { src: "/carouselsImg/Gallery5.webp", alt: "Wedding" },
];

export default function TeamGalleryCarousel() {
  const [activeIndex, setActiveIndex] = useState(0);
  const swiperRef = useRef<SwiperType | null>(null);

  return (
    <div className="relative w-full gap-6 overflow-hidden p-4 sm:p-10 md:p-14 lg:p-20">
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
              <div className="relative cursor-pointer" style={{ height: "300px" }}>
                <Image
                  alt={slide.alt}
                  fill
                  loading="lazy"
                  decoding="async"
                  className="object-cover rounded-3xl"
                  sizes="(max-width: 768px) 100vw, 33vw"
                  src={slide.src}
                />
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
              className={`inline-flex items-center justify-center w-2 h-2 p-0 rounded-full transition-colors focus-visible:outline-none disabled:pointer-events-none disabled:opacity-50 ${i === activeIndex ? "bg-[#CB9EFF]" : "bg-[#F2E7FF]"
                }`}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
