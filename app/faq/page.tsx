import Image from "next/image";
import Link from "next/link";
import FaqAccordion from "../components/FaqAccordion";

export const metadata = {
  title: "FAQs | Astro Sanatana",
  description: "Answers to the most common questions about Vedic astrology, Jyotish, Vastu, Pooja services, and consultations with Astro Sanatana.",
};

export default function FaqPage() {
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
              <span className="text-secondary">Your questions, </span>
              <span className="text-foreground font-playfair-display-italic">answered</span>
            </h1>
          </div>
          <p className="text-secondary text-lg md:text-xl font-medium font-quicksand leading-relaxed max-w-2xl">
            Everything you need to know about Vedic astrology, our services, and how Astro Sanatana
            can guide you on your spiritual journey.
          </p>
        </div>
      </div>

      {/* FAQ + Sidebar */}
      <div className="px-4 sm:px-10 md:px-14 lg:px-20 py-10 md:py-16">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-10 lg:gap-16">

          {/* Accordion */}
          <div className="lg:col-span-3">
            <FaqAccordion />
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-2 flex flex-col gap-6">

            {/* Still have questions */}
            <div className="flex flex-col gap-4 p-6 bg-[#FFF2EB] rounded-2xl md:rounded-3xl border border-[#ffc09d]/40">
              <div className="w-12 h-12 rounded-full bg-[#ffc09d]/40 flex items-center justify-center">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-secondary">
                  <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
                </svg>
              </div>
              <h3 className="text-foreground text-lg font-semibold font-playfair-display">Still have questions?</h3>
              <p className="text-primary font-quicksand font-medium text-sm leading-relaxed">
                Can&apos;t find what you&apos;re looking for? Reach out directly and our team will be happy to help.
              </p>
              <Link
                href="/location"
                className="inline-flex items-center gap-2 bg-secondary text-white font-quicksand font-medium rounded-full px-6 py-3 hover:bg-secondary/80 transition-colors text-sm w-fit"
              >
                Location
                <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M5 12h14" /><path d="m12 5 7 7-7 7" />
                </svg>
              </Link>
            </div>

            {/* Book a consultation */}
            <div className="flex flex-col gap-4 p-6 bg-[#FFF2EB] rounded-2xl md:rounded-3xl border border-[#ffc09d]/40">
              <div className="w-12 h-12 rounded-full bg-[#ffc09d]/40 flex items-center justify-center">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-secondary">
                  <path d="M8 2v4M16 2v4M3 10h18M5 4h14a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2z" />
                </svg>
              </div>
              <h3 className="text-foreground text-lg font-semibold font-playfair-display">Book a Consultation</h3>
              <p className="text-primary font-quicksand font-medium text-sm leading-relaxed">
                Ready to begin your journey? Book a personal session with Astro Sanatana today — available in-person and online.
              </p>
              <Link
                href="https://wa.me/13413455238"
                className="inline-flex items-center gap-2 bg-secondary text-white font-quicksand font-medium rounded-full px-6 py-3 hover:bg-secondary/80 transition-colors text-sm w-fit"
              >
                Book on WhatsApp
                <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M5 12h14" /><path d="m12 5 7 7-7 7" />
                </svg>
              </Link>
            </div>

            {/* Quick contact */}
            <div className="flex flex-col gap-3 p-6 bg-[#FFF2EB] rounded-2xl md:rounded-3xl border border-[#ffc09d]/40">
              <h3 className="text-foreground text-lg font-semibold font-playfair-display">Quick Contact</h3>
              <Link href="tel:+13413455238" className="flex items-center gap-3 text-primary font-quicksand font-medium text-sm hover:text-secondary transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-secondary shrink-0">
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.11 12 19.79 19.79 0 0 1 1.07 3.38A2 2 0 0 1 3 1.07h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z" />
                </svg>
                +1 (341) 345-5238
              </Link>
              <Link href="mailto:astrosanatana.info@gmail.com" className="flex items-center gap-3 text-primary font-quicksand font-medium text-sm hover:text-secondary transition-colors break-all">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-secondary shrink-0">
                  <rect width="20" height="16" x="2" y="4" rx="2" /><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
                </svg>
                astrosanatana.info@gmail.com
              </Link>
            </div>

          </div>
        </div>
      </div>

    </main>
  );
}
