"use client";

import { useState, useRef } from "react";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import type { Swiper as SwiperType } from "swiper";
import "swiper/css";

const SLIDES = [
  {
    src: "/carouselsImg/2.png",
    alt: "Cleanse. Balance. Align.",
    title: "Traditional Home Puja & Daily Worship",
    description: "Daily worship and devotional practices performed at home create a positive spiritual atmosphere. Regular puja strengthens faith, promotes peace of mind, and invites divine blessings into the household.",
  },
  {
    src: "/carouselsImg/1.png",
    alt: "Purify your Aura",
    title: "Maha Havan & Yajna for Peace and Prosperity",
    description: "Traditional fire rituals performed with Vedic mantras and sacred offerings. Havan and Yajna help purify the environment, remove negative energies, attract prosperity, and promote harmony in life.",
  },
  {
    src: "/carouselsImg/3.png",
    alt: "Let Go of Obsession",
    title: "Religious Events, Festivals & Spiritual Celebrations",
    description: "Beautifully decorated venues for pujas, festivals, religious ceremonies, and spiritual gatherings. Traditional floral decorations, sacred arrangements, and devotional ambiance create a memorable divine experience.",
  },
  {
    src: "/carouselsImg/4.png",
    alt: "Love that Heals",
    title: "Sacred Vedic Ritual & Spiritual Blessings",
    description: "Experience authentic Vedic rituals performed by experienced priests according to ancient Hindu traditions. These sacred ceremonies invoke divine blessings for prosperity, success, peace, health, and spiritual well-being.",
  },
  // {
  //   src: "/carouselsImg/5.webp",
  //   alt: "Divine Temple Gathering & Shiva Worship",
  //   title: "Divine Temple Gathering & Shiva Worship",
  //   description: "A spiritually enriching gathering of devotees and priests at a sacred Shiva temple. Through collective prayers, meditation, and devotion, participants seek divine grace, positivity, and inner transformation.",
  // },
];

export default function GalleryCarousel() {
  const [activeIndex, setActiveIndex] = useState(0);
  const swiperRef = useRef<SwiperType | null>(null);

  return (
    <div className="">
      <div className="bg-background p-4 sm:p-10 md:p-14 lg:p-20 overflow-hidden">

        {/* Heading */}
        <h2 className="text-center font-playfair-display text-primary text-2xl sm:text-3xl md:text-4xl font-bold mb-10 md:mb-14 leading-snug">
          Astro Sanatana Veera Indian Renowned Psychic,{" "}
          <span className="font-playfair-display-italic text-foreground">
            Spiritual Healer
          </span>
        </h2>
        <div className="row-start-2 md:row-start-2 md:col-span-2">
          <div className="w-full mt-6 self-stretch">
            <Swiper
              modules={[Autoplay]}
              spaceBetween={8}
              slidesPerView={1}
              loop={true}
              grabCursor={true}
              autoplay={{ delay: 1500, disableOnInteraction: false }}
              onSwiper={(swiper) => { swiperRef.current = swiper; }}
              onSlideChange={(swiper) => setActiveIndex(swiper.realIndex)}
              breakpoints={{ 768: { slidesPerView: 1, spaceBetween: 16 } }}
            >
              {SLIDES.map((slide, i) => (
                <SwiperSlide key={i}>
                  <div className="relative cursor-pointer" style={{ height: "100%" }}>
                    <Image
                      alt={slide.alt}
                      width={1920}
                      height={1000}
                      loading="lazy"
                      decoding="async"
                      className="w-full h-full rounded-3xl"
                      src={slide.src}
                    />
                    {/* <div className="absolute bottom-0 left-0 right-0 rounded-b-3xl bg-linear-to-t from-black/95 via-black/50 to-transparent px-5 pb-5 pt-10">
                      <p className="text-white font-semibold text-base leading-tight">{slide.title}</p>
                      <p className="text-white/80 text-sm mt-1 leading-snug">{slide.description}</p>
                    </div> */}
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
      </div>
    </div>
  );
}
