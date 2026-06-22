import Image from "next/image";
import Link from "next/link";
import GalleryCarousel from "../components/GalleryCarousel";
import ConnectNow from "../components/ConnectNow";
import Solutions from "../components/Solutions";

export const metadata = {
  title: "About Us | Astro Sanatana",
  description: "Indian Astrologer, Psychic Reader & Spiritual Healer in California. Astro Sanatana provides trusted astrology, psychic guidance, spiritual healing, and chakra cleansing services across the United States.",
};

const specialties = [
  "Vedic Astrology Consultations",
  "Psychic Readings",
  "Palm Reading",
  "Fortune Telling",
  "Spiritual Guidance",
  "Chakra Cleansing & Balancing",
  "Energy Healing",
  "Relationship & Marriage Guidance",
  "Love and Compatibility Readings",
  "Career & Business Consultations",
  "Family Guidance",
  "Meditation and Spiritual Development",
  "Negative Energy Cleansing",
  "Personal Growth and Life Direction",
];

const cities = [
  "Los Angeles", "Sacramento", "San Francisco", "San Jose", "Fremont",
  "Santa Clara", "Sunnyvale", "Palo Alto", "Oakland", "San Diego",
  "Irvine", "Anaheim", "Long Beach", "Santa Monica", "Bay Area",
];

const whyChoose = [
  { icon: "✦", label: "Personalized Consultations", desc: "Every session is tailored to your unique situation and needs." },
  { icon: "✦", label: "Years of Spiritual Experience", desc: "Deep expertise in Vedic astrology and spiritual practices." },
  { icon: "✦", label: "Confidential & Respectful", desc: "Your privacy is always our top priority." },
  { icon: "✦", label: "Compassionate Approach", desc: "Guidance delivered with empathy and genuine care." },
  { icon: "✦", label: "Phone & Online Sessions", desc: "Convenient consultations from anywhere in the world." },
  { icon: "✦", label: "Clarity & Peace of Mind", desc: "Dedicated to helping you achieve positive direction in life." },
];


export default function AboutPage() {
  return (
    <main className="flex flex-col flex-1">

      {/* ── Hero ── */}
      <div className="bg-background px-4 sm:px-10 md:px-14 lg:px-20 pt-8 md:pt-10 pb-10 md:pb-16">
        <div className="flex flex-col items-center gap-8">

          {/* Framed image */}
          {/* <div className="relative p-1 md:p-3 bg-[#ffc09d] rounded-xl md:rounded-3xl max-w-4xl mx-auto w-full">
            <Image
              alt="Astro Sanatana"
              loading="lazy"
              width={1000}
              height={600}
              decoding="async"
              className="rounded-xl w-full h-64 md:h-96 object-cover md:rounded-3xl"
              src="/carouselsImg/1.png"
            />
            <div className="hidden md:block">
              <Image alt="" aria-hidden="true" loading="lazy" width={80} height={80} decoding="async" className="absolute bottom-4 -left-10 w-16 h-16 opacity-80" src="/star-light.svg" />
              <Image alt="" aria-hidden="true" loading="lazy" width={80} height={80} decoding="async" className="absolute top-4 -right-10 w-16 h-16 opacity-80" src="/star-light.svg" />
              <Image alt="" aria-hidden="true" loading="lazy" width={44} height={44} decoding="async" className="absolute top-16 -left-6 w-8 h-8 opacity-50" src="/star-light.svg" />
              <Image alt="" aria-hidden="true" loading="lazy" width={44} height={44} decoding="async" className="absolute bottom-16 -right-6 w-8 h-8 opacity-50" src="/star-light.svg" />
            </div>
          </div> */}

          {/* Intro text */}
          <div className="flex flex-col md:items-center gap-5 py-6 md:py-10 md:text-center max-w-4xl">
            <p className="font-quicksand font-semibold text-xs uppercase tracking-widest text-secondary/60">
              Indian Astrologer · Psychic Reader · Spiritual Healer
            </p>
            <h1 className="text-3xl md:text-5xl font-medium font-playfair-display leading-tight">
              <span className="text-secondary">About </span>
              <span className="text-foreground font-playfair-display-italic">Astro Sanatana</span>
            </h1>
            <p className="text-secondary text-base md:text-lg font-medium font-quicksand leading-relaxed">
              Welcome to Astro Sanatana, a trusted source for astrology, psychic guidance, spiritual healing,
              and chakra cleansing services. Dedicated to helping individuals find clarity, peace, and direction,
              Astro Sanatana provides personalized spiritual consultations for clients throughout California and
              across the United States.
            </p>
            <p className="text-secondary text-base md:text-lg font-medium font-quicksand leading-relaxed">
              With years of experience in astrology and spiritual practices, Astro Sanatana has guided people from
              diverse backgrounds through life's challenges involving relationships, marriage, family matters,
              career decisions, finances, emotional well-being, and personal growth.
            </p>
          </div>
        </div>
      </div>

      {/* ── Our Mission ── */}
      <div className="bg-[#FFF2EB] border-y border-[#ffc09d]/40 px-4 sm:px-10 md:px-14 lg:px-20 py-12 md:py-16">
        <div className="max-w-4xl mx-auto flex flex-col md:items-center gap-5 md:text-center">
          <p className="font-quicksand font-semibold text-xs uppercase tracking-widest text-secondary/60">Our Purpose</p>
          <h2 className="text-2xl md:text-3xl font-medium font-playfair-display leading-snug">
            <span className="text-secondary">Our </span>
            <span className="text-foreground font-playfair-display-italic">Mission</span>
          </h2>
          <p className="text-secondary text-base md:text-lg font-medium font-quicksand leading-relaxed">
            At Astro Sanatana, we believe that every person has a unique destiny and life path. Through astrology,
            intuitive guidance, and spiritual wisdom, our goal is to help individuals gain a deeper understanding of
            themselves and make informed decisions with confidence.
          </p>
          <p className="text-secondary text-base md:text-lg font-medium font-quicksand leading-relaxed">
            We are committed to providing honest, respectful, and confidential consultations that empower clients
            to move forward with greater clarity and peace of mind.
          </p>
        </div>
      </div>

      {/* ── Gallery Carousel ── */}
      {/* <div className="py-6 md:py-10">
        <GalleryCarousel />
      </div> */}

      {/* ── Experience & Expertise ── */}
      <div className="px-4 sm:px-10 md:px-14 lg:px-20 py-12 md:py-16">
        <div className="max-w-5xl mx-auto flex flex-col gap-8">
          <div className="flex flex-col md:items-center gap-4 md:text-center">
            <p className="font-quicksand font-semibold text-xs uppercase tracking-widest text-secondary/60">Specialisations</p>
            <h2 className="text-2xl md:text-3xl font-medium font-playfair-display leading-snug">
              <span className="text-secondary">Experience &amp; </span>
              <span className="text-foreground font-playfair-display-italic">Spiritual Expertise</span>
            </h2>
            <p className="text-secondary font-quicksand font-medium text-base md:text-lg leading-relaxed max-w-2xl">
              Through years of spiritual study and practice, Astro Sanatana has helped clients gain insight into
              important life decisions and achieve greater balance and harmony.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {specialties.map((item) => (
              <div key={item} className="flex items-center gap-3 px-4 py-3 bg-[#FFF2EB] rounded-xl border border-[#ffc09d]/40">
                <span className="text-primary shrink-0">
                  <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M20 6 9 17l-5-5" />
                  </svg>
                </span>
                <span className="text-secondary font-quicksand font-semibold text-sm">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ── Services Available ── */}
      <Solutions />

      {/* ── Serving California ── */}
      <section className="w-full px-4 sm:px-10 md:px-14 lg:px-20 py-10 md:py-16 bg-[#FFF2EB] mt-12">

        <h2 className="text-center font-playfair-display text-primary text-2xl sm:text-3xl md:text-4xl font-bold mb-3 leading-snug">
          Serving Clients Throughout{" "}
          <span className="font-playfair-display-italic text-foreground">California</span>
        </h2>
        <p className="text-center text-secondary font-quicksand font-medium text-sm md:text-base mb-10 max-w-2xl mx-auto">
          Astro Sanatana proudly serves clients across California. Phone and online consultations are also
          available for clients throughout the United States.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {cities.map((city) => (
            <div
              key={city}
              className="flex flex-col rounded-2xl overflow-hidden border border-[#ffc09d]/50 shadow-sm"
            >
              <div className="bg-foreground px-5 py-4">
                <h3 className="text-white font-playfair-display font-semibold text-base text-center leading-snug">
                  Astrologer Services in {city}
                  <br />
                  <span className="text-[#ffc09d] font-quicksand font-medium text-sm">(Astro Sanatana)</span>
                </h3>
              </div>
              <div className="bg-white p-4 flex flex-col gap-2.5 flex-1">
                <Link
                  href="/connect-with-astrologer"
                  className="block text-center text-primary font-quicksand font-semibold text-sm px-4 py-2.5 rounded-full border border-[#ffc09d]/60 bg-[#FFF2EB] hover:bg-secondary hover:text-white hover:border-secondary transition-colors duration-200"
                >
                  Astrologer in {city}
                </Link>
                <Link
                  href="/connect-with-astrologer"
                  className="block text-center text-primary font-quicksand font-semibold text-sm px-4 py-2.5 rounded-full border border-[#ffc09d]/60 bg-[#FFF2EB] hover:bg-secondary hover:text-white hover:border-secondary transition-colors duration-200"
                >
                  Psychic Reader in {city}
                </Link>
                <Link
                  href="/connect-with-astrologer"
                  className="block text-center text-primary font-quicksand font-semibold text-sm px-4 py-2.5 rounded-full border border-[#ffc09d]/60 bg-[#FFF2EB] hover:bg-secondary hover:text-white hover:border-secondary transition-colors duration-200"
                >
                  Spiritual Healer in {city}
                </Link>
                <Link
                  href="/connect-with-astrologer"
                  className="block text-center text-primary font-quicksand font-semibold text-sm px-4 py-2.5 rounded-full border border-[#ffc09d]/60 bg-[#FFF2EB] hover:bg-secondary hover:text-white hover:border-secondary transition-colors duration-200"
                >
                  Chakra Cleansing in {city}
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ── Why Choose + Commitment ── */}
      <div className="bg-[#FFF2EB] border-y border-[#ffc09d]/40 px-4 sm:px-10 md:px-14 lg:px-20 py-12 md:py-16">
        <div className="max-w-5xl mx-auto flex flex-col gap-10">

          {/* Why Choose */}
          <div className="flex flex-col gap-6">
            <div className="flex flex-col md:items-center gap-4 md:text-center">
              <p className="font-quicksand font-semibold text-xs uppercase tracking-widest text-secondary/60">Reasons to Trust Us</p>
              <h2 className="text-2xl md:text-3xl font-medium font-playfair-display leading-snug">
                <span className="text-secondary">Why Choose </span>
                <span className="text-foreground font-playfair-display-italic">Astro Sanatana?</span>
              </h2>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {whyChoose.map((item) => (
                <div key={item.label} className="flex flex-col gap-2 p-5 bg-white rounded-2xl border border-[#ffc09d]/30 shadow-sm">
                  <div className="w-8 h-8 rounded-full bg-primary/15 flex items-center justify-center shrink-0">
                    <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" className="text-secondary">
                      <path d="M20 6 9 17l-5-5" />
                    </svg>
                  </div>
                  <p className="font-playfair-display font-semibold text-foreground text-base">{item.label}</p>
                  <p className="font-quicksand font-medium text-secondary text-sm leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Our Commitment */}
          <div className="flex flex-col md:items-center gap-4 md:text-center max-w-3xl md:mx-auto">
            <h3 className="text-xl md:text-2xl font-medium font-playfair-display leading-snug">
              <span className="text-secondary">Our </span>
              <span className="text-foreground font-playfair-display-italic">Commitment</span>
            </h3>
            <p className="text-secondary font-quicksand font-medium text-base leading-relaxed">
              Every consultation is conducted with sincerity, professionalism, and respect. Our purpose is to help
              clients gain meaningful insight and practical spiritual guidance that supports positive growth and
              informed decision-making.
            </p>
          </div>
        </div>
      </div>

      {/* ── Contact Astro Sanatana ── */}
      <div className="px-4 sm:px-10 md:px-14 lg:px-20 py-10 md:py-14">
        <div className="max-w-3xl mx-auto flex flex-col md:items-center gap-5 md:text-center">
          <p className="font-quicksand font-semibold text-xs uppercase tracking-widest text-secondary/60">Reach Out</p>
          <h2 className="text-2xl md:text-3xl font-medium font-playfair-display leading-snug">
            <span className="text-secondary">Contact </span>
            <span className="text-foreground font-playfair-display-italic">Astro Sanatana</span>
          </h2>
          <p className="text-secondary font-quicksand font-medium text-base md:text-lg leading-relaxed">
            If you are seeking guidance regarding relationships, marriage, career, family matters, spirituality,
            or personal growth, Astro Sanatana is here to help.
          </p>
        </div>
      </div>

      {/* ── Contact Info ── */}
      <div className="px-4 sm:px-10 md:px-14 lg:px-20 pb-10 md:pb-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl md:mx-auto">

          <div className="flex flex-col gap-3">
            <div className="flex items-center gap-2">
              <Image alt="" aria-hidden="true" loading="lazy" width={20} height={20} decoding="async" className="w-5 h-5" src="/global.svg" />
              <span className="text-foreground text-xl font-medium font-playfair-display">Address</span>
            </div>
            <p className="text-primary text-sm font-semibold font-quicksand leading-6">
              2175 Decoto Rd,<br />Union City, CA 94587, United States
            </p>
          </div>

          <div className="flex flex-col gap-3">
            <div className="flex items-center gap-2">
              <Image alt="" aria-hidden="true" loading="lazy" width={20} height={20} decoding="async" className="w-5 h-5" src="/message.svg" />
              <span className="text-foreground text-xl font-medium font-playfair-display">Book Us</span>
            </div>
            <Link href="mailto:astrosanatana.info@gmail.com" className="text-primary text-sm font-semibold font-quicksand hover:text-secondary transition-colors break-all">
              astrosanatana.info@gmail.com
            </Link>
            <Link href="tel:+14169314409" className="text-primary text-sm font-semibold font-quicksand hover:text-secondary transition-colors">
              +1 416-931-4409
            </Link>
            <p className="text-primary text-xs font-quicksand">For support and bookings please contact us anytime.</p>
          </div>

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

      {/* ── Business Card / Tagline ── */}
      <div className="px-4 sm:px-10 md:px-14 lg:px-20 py-10 md:py-14">
        <div className="max-w-2xl mx-auto flex flex-col items-center gap-4 text-center p-8 md:p-10 bg-[#FFF2EB] rounded-3xl border border-[#ffc09d]/50">
          <Image src="/star-primary.svg" alt="" width={36} height={36} aria-hidden="true" className="opacity-70" />
          <h3 className="font-playfair-display font-bold text-foreground text-2xl md:text-3xl">Astro Sanatana</h3>
          <p className="font-quicksand font-semibold text-secondary text-sm md:text-base leading-relaxed">
            Indian Astrologer &bull; Psychic Reader &bull; Palm Reader &bull; Fortune Teller &bull; Spiritual Healer &bull; Chakra Cleansing Specialist
          </p>
          <div className="h-px w-16 bg-[#ffc09d]/60" />
          <p className="font-quicksand font-medium text-primary text-sm">
            Serving California and clients nationwide.
          </p>
          <p className="font-quicksand font-medium text-secondary text-sm leading-relaxed max-w-sm">
            Discover clarity, balance, and positive direction through the wisdom of astrology and spiritual guidance.
          </p>
        </div>
      </div>


    </main>
  );
}
