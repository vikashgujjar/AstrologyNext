import Image from "next/image";
import Link from "next/link";
import Stats from "../components/Stats";
import TeamCarousel from "../components/TeamCarousel";
import GalleryCarousel from "../components/GalleryCarousel";
import ConnectNow from "../components/ConnectNow";

export const metadata = {
  title: "About Us | Astro Sanatana Veer",
  description: "Meet Astro Sanatana Veer — a lineage of Vedic astrologers with 50+ years of experience guiding over 1 million clients across 30+ countries through Jyotish, Vastu, and sacred Pooja rituals.",
};

export default function AboutPage() {
  return (
    <main className="flex flex-col flex-1">

      {/* Hero */}
      <div className="bg-background p-4 !pb-0 sm:p-10 md:p-14 overflow-hidden lg:p-20">
        <div className="flex flex-col items-center gap-8">

          {/* Image with peach frame */}
          <div className="relative p-1 md:p-3 bg-[#ffc09d] rounded-xl md:rounded-3xl max-w-4xl mx-auto w-full">
            <Image
              alt="Astro Sanatana Veer with MS Dhoni"
              loading="lazy"
              width={1000}
              height={600}
              decoding="async"
              className="rounded-xl w-full h-64 md:h-[420px] object-cover md:rounded-3xl"
              src="/carouselsImg/Gallery3.webp"
            />

            {/* Sparkle decorations — desktop only */}
            <div className="hidden md:block">
              <Image
                alt=""
                aria-hidden="true"
                loading="lazy"
                width={80}
                height={80}
                decoding="async"
                className="absolute bottom-4 -left-10 w-16 h-16 opacity-80"
                src="/star-light.svg"
              />
              <Image
                alt=""
                aria-hidden="true"
                loading="lazy"
                width={80}
                height={80}
                decoding="async"
                className="absolute top-4 -right-10 w-16 h-16 opacity-80"
                src="/star-light.svg"
              />
              <Image
                alt=""
                aria-hidden="true"
                loading="lazy"
                width={44}
                height={44}
                decoding="async"
                className="absolute top-16 -left-6 w-8 h-8 opacity-50"
                src="/star-light.svg"
              />
              <Image
                alt=""
                aria-hidden="true"
                loading="lazy"
                width={44}
                height={44}
                decoding="async"
                className="absolute bottom-16 -right-6 w-8 h-8 opacity-50"
                src="/star-light.svg"
              />
            </div>
          </div>

          {/* Text */}
          <div className="flex flex-col md:items-center gap-6 px-4 py-8 md:py-12 md:text-center">
            <h2 className="text-3xl md:text-4xl font-medium font-playfair-display leading-tight max-w-4xl">
              <span className="text-secondary">Where </span>
              <span className="text-foreground font-playfair-display-italic">ancient wisdom</span>
              <br />
              <span className="text-secondary">meets your modern life</span>
            </h2>
            <p className="text-secondary text-lg md:text-xl font-medium font-quicksand leading-relaxed max-w-4xl">
              Astro Sanatana Veer is home to the world&apos;s most trusted Vedic astrologers and Jyotish experts.
              With over 50 years of combined experience, we have guided more than 1 million clients across 30+ countries —
              helping families, leaders, and celebrities find clarity, harmony, and purpose through the timeless
              science of Jyotish.
            </p>
          </div>
        </div>
      </div>


      {/* Legacy of Wisdom */}
      <div className="flex flex-col p-4 md:p-12 py-7">
        <div className="relative mx-auto flex flex-col items-center gap-4">
          <Image
            alt=""
            aria-hidden="true"
            loading="lazy"
            width={80}
            height={80}
            decoding="async"
            className="absolute left-1/4 top-6 rotate-180 w-20 h-20 opacity-60"
            src="/star-light.svg"
          />
          <div className="flex flex-col md:items-center gap-6 px-4 py-8 md:py-12 pb-0! md:text-center">
            <h2 className="text-3xl md:text-4xl font-medium font-playfair-display leading-tight max-w-4xl">
              <span className="text-foreground font-playfair-display-italic">Astro Sanatana Veer — </span>
              <br />
              <span className="text-secondary">A Legacy of Vedic Wisdom</span>
            </h2>
            <p className="text-secondary text-lg md:text-xl font-medium font-quicksand leading-relaxed max-w-4xl">
              Astro Sanatana Veer&apos;s journey into the sacred science of Jyotish is rooted in a deep family
              lineage of Vedic knowledge passed down through generations. Guided by ancient scriptures and an
              unwavering devotion to truth, Astro Sanatana Veer dedicated his life to mastering every dimension
              of Vedic astrology — from Jyotish and Vastu to sacred Pooja rituals. His relentless pursuit of
              authentic knowledge and compassionate counsel have made him a trusted spiritual guide to some of
              the world&apos;s most celebrated families, celebrities, and business leaders.
            </p>
          </div>
        </div>
        <GalleryCarousel />
      </div>

      {/* Team */}
      <TeamCarousel />

      {/* Services Grid */}
      <div className="flex pb-20 flex-col p-4 md:p-12 py-7">
        <div className="relative max-w-4xl mx-auto w-full">
          <div className="flex flex-col md:items-center gap-6 px-4 py-8 md:py-12 md:text-center">
            <h2 className="text-3xl md:text-4xl font-medium font-playfair-display leading-tight max-w-4xl">
              <span className="text-secondary">Sacred services that have </span>
              <span className="text-foreground font-playfair-display-italic">transformed</span>
              <br />
              <span className="text-secondary">millions of lives worldwide</span>
            </h2>
          </div>
          <Image
            alt=""
            aria-hidden="true"
            loading="lazy"
            width={100}
            height={100}
            decoding="async"
            className="hidden md:block absolute top-0 -right-12"
            src="/star-light.svg"
          />
        </div>

        <div className="w-full mt-6 self-stretch">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { alt: "Astrology", label: "Astrology", src: "/AstrologyImg/HoroscopeReading.jpg" },
              { alt: "Pooja", label: "Pooja", src: "/AstrologyImg/SpiritualHealing.jpg" },
              { alt: "Vastu", label: "Vastu", src: "/AstrologyImg/VastuConsultation.jpg" },
              { alt: "Wedding", label: "Wedding", src: "/AstrologyImg/LoveMarriage.jpg" },
            ].map((service) => (
              <div key={service.label} className="transition-all flex items-center justify-center duration-300">
                <div className="flex flex-col gap-2 max-w-xs w-full">
                  <div className="w-full h-37.5 sm:h-75 aspect-268/300 relative">
                    <Image
                      alt={service.alt}
                      fill
                      loading="lazy"
                      decoding="async"
                      className="object-cover rounded-tl-[150px] rounded-tr-[150px]"
                      sizes="(max-width: 640px) 50vw, (max-width: 1024px) 50vw, 25vw"
                      src={service.src}
                    />
                  </div>
                  <div className="flex justify-center text-center w-full">
                    <h3 className="text-primary text-center text-base md:text-xl font-semibold font-playfair-display leading-normal">
                      {service.label}
                    </h3>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Contact Info */}
      <div className="px-4 sm:px-10 md:px-14 lg:px-20 py-10 md:py-16">
        <h2 className="text-2xl md:text-4xl font-medium font-playfair-display text-secondary mb-4 md:text-center">
          Get in <span className="font-playfair-display-italic text-foreground">Touch</span>
        </h2>
        <p className="text-secondary font-quicksand font-medium text-base md:text-lg mb-10 md:text-center">
          Reach out to us for consultations, bookings, or any queries — we&apos;re here to guide you.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl md:mx-auto">

          {/* Address */}
          <div className="flex flex-col gap-3">
            <div className="flex items-center gap-2">
              <Image alt="" aria-hidden="true" loading="lazy" width={20} height={20} decoding="async" className="w-5 h-5" src="/global.svg" />
              <span className="text-foreground text-xl font-medium font-playfair-display">Address</span>
            </div>
            <p className="text-primary text-sm font-semibold font-quicksand leading-6">
              1123 Albion Rd Ground floor,<br />Etobicoke, ON M9V 1A9, Canada
            </p>
          </div>

          {/* Email & Phone */}
          <div className="flex flex-col gap-3">
            <div className="flex items-center gap-2">
              <Image alt="" aria-hidden="true" loading="lazy" width={20} height={20} decoding="async" className="w-5 h-5" src="/message.svg" />
              <span className="text-foreground text-xl font-medium font-playfair-display">Book Us</span>
            </div>
            <Link href="mailto:info@astrospiritualistmasteromkar.com" className="text-primary text-sm font-semibold font-quicksand hover:text-secondary transition-colors break-all">
              info@astrospiritualistmasteromkar.com
            </Link>
            <Link href="tel:+14169314409" className="text-primary text-sm font-semibold font-quicksand hover:text-secondary transition-colors">
              +1 416-931-4409
            </Link>
            <p className="text-primary text-xs font-quicksand">For support and bookings please contact us anytime.</p>
          </div>

          {/* Social */}
          <div className="flex flex-col gap-3">
            <span className="text-foreground text-xl font-medium font-playfair-display">Follow Us</span>
            <div className="flex gap-4 items-center">
              <Link href="https://www.facebook.com/ptchandrashekar" className="p-2 bg-foreground rounded-full text-white hover:bg-foreground/80 transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
                </svg>
              </Link>
              <Link href="https://www.instagram.com/pandit_chandrashekar" className="p-2 bg-foreground rounded-full text-white hover:bg-foreground/80 transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                  <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
                </svg>
              </Link>
              <Link href="https://www.youtube.com/@panditchandrashekar" className="p-2 bg-foreground rounded-full text-white hover:bg-foreground/80 transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M2.5 17a24.12 24.12 0 0 1 0-10 2 2 0 0 1 1.4-1.4 49.56 49.56 0 0 1 16.2 0A2 2 0 0 1 21.5 7a24.12 24.12 0 0 1 0 10 2 2 0 0 1-1.4 1.4 49.55 49.55 0 0 1-16.2 0A2 2 0 0 1 2.5 17" />
                  <path d="m10 15 5-3-5-3z" />
                </svg>
              </Link>
            </div>
          </div>

        </div>
      </div>

      {/* CTA */}
      <div className="py-8">
        <ConnectNow />
      </div>

    </main>
  );
}
