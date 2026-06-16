import Image from "next/image";
import Link from "next/link";
import ContactForm from "../components/ContactForm";

export const metadata = {
  title: "Contact Us | Astro Sanatana Veer",
  description: "Get in touch with Astro Sanatana Veer for astrology consultations, Pooja bookings, Vastu guidance, and spiritual support.",
};

const contactCards = [
  {
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-secondary">
        <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" />
        <circle cx="12" cy="10" r="3" />
      </svg>
    ),
    title: "Our Address",
    lines: ["1123 Albion Rd Ground Floor,", "Etobicoke, ON M9V 1A9, Canada"],
    href: "https://maps.google.com/?q=1123+Albion+Rd+Etobicoke+ON",
    cta: "Get Directions",
  },
  {
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-secondary">
        <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.11 12 19.79 19.79 0 0 1 1.07 3.38A2 2 0 0 1 3 1.07h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z" />
      </svg>
    ),
    title: "Call Us",
    lines: ["+1 416-931-4409"],
    href: "tel:+14169314409",
    cta: "Call Now",
  },
  {
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-secondary">
        <rect width="20" height="16" x="2" y="4" rx="2" />
        <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
      </svg>
    ),
    title: "Email Us",
    lines: ["info@astrospiritualistmasteromkar.com"],
    href: "mailto:info@astrospiritualistmasteromkar.com",
    cta: "Send Email",
  },
];

export default function ContactPage() {
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
              <span className="text-secondary">We&apos;d love to </span>
              <span className="text-foreground font-playfair-display-italic">hear from you</span>
            </h1>
          </div>
          <p className="text-secondary text-lg md:text-xl font-medium font-quicksand leading-relaxed max-w-2xl">
            Whether you seek an astrology consultation, a Pooja booking, Vastu guidance, or simply have a
            question — Astro Sanatana Veer is here to guide you on your spiritual journey.
          </p>
        </div>
      </div>

      {/* Contact Info Cards */}
      <div className="px-4 sm:px-10 md:px-14 lg:px-20 py-10 md:py-14">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {contactCards.map((card) => (
            <div
              key={card.title}
              className="flex flex-col gap-4 p-6 md:p-8 bg-[#FFF2EB] rounded-2xl md:rounded-3xl border border-[#ffc09d]/40"
            >
              <div className="w-12 h-12 rounded-full bg-[#ffc09d]/40 flex items-center justify-center flex-shrink-0">
                {card.icon}
              </div>
              <div className="flex flex-col gap-1">
                <h3 className="text-foreground text-lg font-semibold font-playfair-display">{card.title}</h3>
                {card.lines.map((line) => (
                  <p key={line} className="text-primary font-quicksand font-medium text-sm leading-6 break-all">{line}</p>
                ))}
              </div>
              <Link
                href={card.href}
                className="text-secondary font-quicksand font-semibold text-sm hover:text-secondary/70 transition-colors inline-flex items-center gap-1 mt-auto"
              >
                {card.cta}
                <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M5 12h14" /><path d="m12 5 7 7-7 7" />
                </svg>
              </Link>
            </div>
          ))}
        </div>
      </div>

      {/* Form + Social */}
      <div className="px-4 sm:px-10 md:px-14 lg:px-20 pb-14 md:pb-20">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-10 lg:gap-16">

          {/* Form */}
          <div className="lg:col-span-3 flex flex-col gap-6">
            <div>
              <h2 className="text-2xl md:text-3xl font-medium font-playfair-display leading-snug">
                <span className="text-secondary">Send us a </span>
                <span className="text-foreground font-playfair-display-italic">message</span>
              </h2>
              <p className="text-secondary font-quicksand font-medium text-sm mt-2">
                Fill in the form and we&apos;ll get back to you within 24 hours.
              </p>
            </div>
            <ContactForm />
          </div>

          {/* Social + Hours */}
          <div className="lg:col-span-2 flex flex-col gap-8">

            {/* Follow us */}
            <div className="flex flex-col gap-4 p-6 bg-[#FFF2EB] rounded-2xl md:rounded-3xl border border-[#ffc09d]/40">
              <h3 className="text-foreground text-lg font-semibold font-playfair-display">Follow Us</h3>
              <p className="text-primary font-quicksand font-medium text-sm leading-relaxed">
                Stay connected with Astro Sanatana Veer for daily horoscopes, spiritual insights, and guidance.
              </p>
              <div className="flex gap-3 items-center">
                <Link href="https://www.facebook.com/ptchandrashekar" className="p-2.5 bg-foreground rounded-full text-white hover:bg-foreground/80 transition-colors">
                  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
                  </svg>
                </Link>
                <Link href="https://www.instagram.com/pandit_chandrashekar" className="p-2.5 bg-foreground rounded-full text-white hover:bg-foreground/80 transition-colors">
                  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
                    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                    <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
                  </svg>
                </Link>
                <Link href="https://www.youtube.com/@panditchandrashekar" className="p-2.5 bg-foreground rounded-full text-white hover:bg-foreground/80 transition-colors">
                  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M2.5 17a24.12 24.12 0 0 1 0-10 2 2 0 0 1 1.4-1.4 49.56 49.56 0 0 1 16.2 0A2 2 0 0 1 21.5 7a24.12 24.12 0 0 1 0 10 2 2 0 0 1-1.4 1.4 49.55 49.55 0 0 1-16.2 0A2 2 0 0 1 2.5 17" />
                    <path d="m10 15 5-3-5-3z" />
                  </svg>
                </Link>
              </div>
            </div>

            {/* WhatsApp */}
            <div className="flex flex-col gap-4 p-6 bg-[#FFF2EB] rounded-2xl md:rounded-3xl border border-[#ffc09d]/40">
              <h3 className="text-foreground text-lg font-semibold font-playfair-display">Chat on WhatsApp</h3>
              <p className="text-primary font-quicksand font-medium text-sm leading-relaxed">
                Prefer a quick chat? Reach us directly on WhatsApp for instant spiritual guidance and bookings.
              </p>
              <Link target="_blank" rel="noopener noreferrer"
                href="https://wa.me/14169314409"
                className="inline-flex items-center gap-2 bg-secondary text-white font-quicksand font-medium rounded-full px-6 py-3 hover:bg-secondary/80 transition-colors text-sm w-fit"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413Z" />
                </svg>
                Chat on WhatsApp
              </Link>
            </div>

          </div>
        </div>
      </div>

    </main>
  );
}
