import Image from "next/image";
import Link from "next/link";
import Stats from "../components/Stats";
import TeamCarousel from "../components/TeamCarousel";
import TeamGalleryCarousel from "../components/TeamGalleryCarousel";
import ConnectNow from "../components/ConnectNow";

export const metadata = {
  title: "Our Team | Astro Sanatana Veer",
  description: "Meet the dedicated team of Vedic astrologers, Jyotish experts, and spiritual guides at Astro Sanatana Veer.",
};

const values = [
  {
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-secondary">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
      </svg>
    ),
    title: "Authentic Knowledge",
    desc: "Every astrologer on our team is trained in classical Vedic scriptures and follows time-tested principles of Jyotish.",
  },
  {
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-secondary">
        <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
      </svg>
    ),
    title: "Compassionate Guidance",
    desc: "We approach every client with empathy, respect, and a genuine desire to help — never with fear or pressure.",
  },
  {
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-secondary">
        <circle cx="12" cy="12" r="10" /><path d="M12 8v4l3 3" />
      </svg>
    ),
    title: "50+ Years Experience",
    desc: "Our combined expertise spans over five decades of practice, serving over 1 million clients across 30+ countries.",
  },
];

export default function TeamPage() {
  return (
    <main className="flex flex-col flex-1">

      {/* Hero */}
      <div className="bg-background p-4 sm:p-10 md:p-14 lg:p-20 pb-0! overflow-hidden">
        <div className="flex flex-col md:items-center gap-4 md:text-center">
          <div className="relative inline-block">
            <Image
              alt=""
              aria-hidden="true"
              loading="lazy"
              width={60}
              height={60}
              decoding="async"
              className="hidden md:block absolute -top-6 -right-10 w-12 h-12 opacity-70"
              src="/star-primary.svg"
            />
            <h1 className="text-4xl md:text-5xl font-medium font-playfair-display leading-tight">
              <span className="text-secondary">Meet the </span>
              <span className="text-foreground font-playfair-display-italic">team</span>
              <span className="text-secondary"> behind</span>
              <br />
              <span className="text-secondary">Astro Sanatana Veer</span>
            </h1>
          </div>
          <p className="text-secondary text-lg md:text-xl font-medium font-quicksand leading-relaxed max-w-2xl">
            A dedicated family of Vedic astrologers, Jyotish scholars, and spiritual guides — united by a
            single purpose: to bring light, clarity, and healing into your life.
          </p>
        </div>
      </div>

      {/* Stats */}
      <div className="px-4 sm:px-10 md:px-14 lg:px-20 py-10">
        <Stats />
      </div>

      {/* Team Carousel */}
      <TeamCarousel />

      {/* Our Values */}
      <div className="px-4 sm:px-10 md:px-14 lg:px-20 py-10 md:py-16">
        <div className="flex flex-col md:items-center gap-4 md:text-center mb-10">
          <h2 className="text-3xl md:text-4xl font-medium font-playfair-display leading-tight">
            <span className="text-secondary">What sets our </span>
            <span className="text-foreground font-playfair-display-italic">team apart</span>
          </h2>
          <p className="text-secondary font-quicksand font-medium text-base md:text-lg max-w-2xl">
            Our astrologers are bound by shared values of authenticity, compassion, and lifelong learning.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {values.map((v) => (
            <div key={v.title} className="flex flex-col gap-4 p-6 md:p-8 bg-[#FFF2EB] rounded-2xl md:rounded-3xl border border-[#ffc09d]/40">
              <div className="w-12 h-12 rounded-full bg-[#ffc09d]/40 flex items-center justify-center flex-shrink-0">
                {v.icon}
              </div>
              <h3 className="text-foreground text-lg font-semibold font-playfair-display">{v.title}</h3>
              <p className="text-primary font-quicksand font-medium text-sm leading-relaxed">{v.desc}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Team Gallery */}
      <TeamGalleryCarousel />

      {/* CTA */}
      <div className="flex flex-col items-center gap-4 py-10 md:py-14 px-4 text-center">
        <h2 className="text-2xl md:text-3xl font-medium font-playfair-display text-secondary">
          Ready to speak with an <span className="text-foreground font-playfair-display-italic">expert?</span>
        </h2>
        <p className="text-secondary font-quicksand font-medium text-base max-w-md">
          Book a personal consultation with one of our astrologers today.
        </p>
        <div className="flex flex-wrap gap-4 justify-center mt-2">
          <Link href="/connect-with-astrologer">
            <button className="inline-flex items-center py-4 px-8 justify-center gap-2 whitespace-nowrap rounded-full text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring bg-secondary text-white shadow-sm hover:bg-secondary/80">
              Talk to an Astrologer
            </button>
          </Link>
          <Link href="/contact">
            <button className="inline-flex items-center py-4 px-8 justify-center gap-2 whitespace-nowrap rounded-full text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring border border-secondary text-secondary hover:bg-secondary/10">
              Contact Us
            </button>
          </Link>
        </div>
      </div>

    </main>
  );
}
