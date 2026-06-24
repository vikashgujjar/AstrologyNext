import Image from "next/image";
import Link from "next/link";
import { services } from "../data/services";
import ConnectNow from "../components/ConnectNow";

export const metadata = {
  title: "Our Services | Astro Sanatana Veer",
  description: "Explore the full range of Vedic astrology, spiritual healing, and divine guidance services offered by Astro Sanatana Veer — from Kundli readings to black magic removal.",
};

export default function ServicesPage() {
  return (
    <main className="flex flex-col flex-1">

      {/* Hero */}
      <div className="bg-background px-4 sm:px-10 md:px-14 lg:px-20 pt-10 md:pt-16 pb-10 md:pb-14 overflow-hidden">
        <div className="flex flex-col md:items-center gap-4 md:text-center max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 bg-[#FFF2EB] border border-[#ffc09d]/60 rounded-full px-4 py-1.5 w-fit">
            <Image src="/star-primary.svg" alt="" width={14} height={14} aria-hidden="true" />
            <span className="text-secondary font-quicksand font-semibold text-xs">Vedic Wisdom · Ancient Remedies · Modern Guidance</span>
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-medium font-playfair-display leading-tight">
            <span className="text-secondary">Our </span>
            <span className="text-foreground font-playfair-display-italic">Services</span>
          </h1>
          <p className="text-secondary text-base md:text-lg font-medium font-quicksand leading-relaxed">
            From Vedic astrology and Kundli analysis to spiritual healing and sacred rituals —
            Astro Sanatana Veer offers comprehensive guidance for every dimension of your life.
          </p>
          <div className="flex flex-wrap gap-3 md:justify-center mt-2">
            <Link
              href="https://wa.me/13413455238"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-secondary text-white font-quicksand font-semibold rounded-full px-6 py-3 hover:bg-secondary/80 transition-colors text-sm"
            >
              Book a Consultation
            </Link>
            <Link
              href="/connect-with-astro-sanatana"
              className="inline-flex items-center gap-2 border border-secondary text-secondary font-quicksand font-semibold rounded-full px-6 py-3 hover:bg-secondary hover:text-white transition-colors text-sm"
            >
              Learn More
            </Link>
          </div>
        </div>
      </div>

      {/* Services Grid */}
      <div className="bg-[#FFF2EB] px-4 sm:px-10 md:px-14 lg:px-20 py-12 md:py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
          {services.map((service) => (
            <Link
              key={service.slug}
              href={`/services/${service.slug}`}
              className="group flex flex-col bg-white rounded-2xl md:rounded-3xl overflow-hidden border border-[#ffc09d]/30 hover:border-secondary/40 hover:shadow-lg transition-all duration-300"
            >
              {/* Image */}
              <div className="relative h-48 md:h-56 overflow-hidden">
                <Image
                  src={service.image}
                  alt={service.label}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                />
                <div className="absolute inset-0 bg-linear-to-t from-foreground/60 via-foreground/10 to-transparent" />
                <div className="absolute bottom-3 left-4">
                  <span className="inline-block bg-white/20 backdrop-blur-sm text-white font-quicksand font-semibold text-xs px-3 py-1 rounded-full border border-white/30">
                    {service.tagline}
                  </span>
                </div>
              </div>

              {/* Content */}
              <div className="flex flex-col gap-3 p-5 md:p-6 flex-1">
                <h2 className="text-foreground font-playfair-display font-semibold text-lg leading-snug group-hover:text-secondary transition-colors">
                  {service.label}
                </h2>
                <p className="text-secondary font-quicksand font-medium text-sm leading-relaxed line-clamp-2 flex-1">
                  {service.description[0]}
                </p>
                <div className="flex items-center gap-1.5 text-secondary font-quicksand font-semibold text-sm mt-1 group-hover:gap-3 transition-all duration-200">
                  Learn More
                  <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M5 12h14" /><path d="m12 5 7 7-7 7" />
                  </svg>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>

      {/* Bottom CTA */}
      <div className="px-4 sm:px-10 md:px-14 lg:px-20 py-12 md:py-16">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-5">
          <div className="flex flex-col gap-4 p-6 md:p-8 bg-[#FFF2EB] rounded-2xl md:rounded-3xl border border-[#ffc09d]/40 items-start">
            <div className="w-12 h-12 rounded-full bg-[#ffc09d]/40 flex items-center justify-center">
              <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-secondary">
                <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.11 12 19.79 19.79 0 0 1 1.07 3.38A2 2 0 0 1 3 1.07h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z" />
              </svg>
            </div>
            <div>
              <h3 className="text-foreground font-playfair-display font-semibold text-lg">Call Us</h3>
              <p className="text-primary font-quicksand font-medium text-sm mt-1">Speak directly with our astrologers for immediate guidance.</p>
            </div>
            <Link href="tel:+13413455238" className="text-secondary font-quicksand font-semibold text-sm hover:text-secondary/70 transition-colors inline-flex items-center gap-1 mt-auto">
              +1 (341) 345-5238
              <svg xmlns="http://www.w3.org/2000/svg" width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14" /><path d="m12 5 7 7-7 7" /></svg>
            </Link>
          </div>

          <div className="flex flex-col gap-4 p-6 md:p-8 bg-[#FFF2EB] rounded-2xl md:rounded-3xl border border-[#ffc09d]/40 items-start">
            <div className="w-12 h-12 rounded-full bg-[#ffc09d]/40 flex items-center justify-center">
              <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="currentColor" className="text-[#25D366]">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413Z" />
              </svg>
            </div>
            <div>
              <h3 className="text-foreground font-playfair-display font-semibold text-lg">WhatsApp</h3>
              <p className="text-primary font-quicksand font-medium text-sm mt-1">Chat with us instantly for quick questions and bookings.</p>
            </div>
            <Link href="https://wa.me/13413455238" target="_blank" rel="noopener noreferrer" className="text-secondary font-quicksand font-semibold text-sm hover:text-secondary/70 transition-colors inline-flex items-center gap-1 mt-auto">
              Start Chat
              <svg xmlns="http://www.w3.org/2000/svg" width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14" /><path d="m12 5 7 7-7 7" /></svg>
            </Link>
          </div>

          <div className="flex flex-col gap-4 p-6 md:p-8 bg-[#FFF2EB] rounded-2xl md:rounded-3xl border border-[#ffc09d]/40 items-start">
            <div className="w-12 h-12 rounded-full bg-[#ffc09d]/40 flex items-center justify-center">
              <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-secondary">
                <rect width="20" height="16" x="2" y="4" rx="2" /><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
              </svg>
            </div>
            <div>
              <h3 className="text-foreground font-playfair-display font-semibold text-lg">Email Us</h3>
              <p className="text-primary font-quicksand font-medium text-sm mt-1">Send us your details and we'll respond within 24 hours.</p>
            </div>
            <Link href="mailto:astrosanatana.info@gmail.com" className="text-secondary font-quicksand font-semibold text-xs hover:text-secondary/70 transition-colors inline-flex items-center gap-1 mt-auto break-all">
              astrosanatana.info@gmail.com
              <svg xmlns="http://www.w3.org/2000/svg" width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="shrink-0"><path d="M5 12h14" /><path d="m12 5 7 7-7 7" /></svg>
            </Link>
          </div>
        </div>
      </div>

      <div className="pb-10 md:pb-14">
        <ConnectNow />
      </div>

    </main>
  );
}
