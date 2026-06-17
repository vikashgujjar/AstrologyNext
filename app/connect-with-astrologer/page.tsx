import Image from "next/image";
import Link from "next/link";
import ContactForm from "../components/ContactForm";
import { services } from "../data/services";

export const metadata = {
  title: "Connect with Astrologer | Astro Sanatana",
  description: "Connect with expert astrologers at Astro Sanatana via WhatsApp, phone, or email for personalised Vedic astrology, Kundli, Vastu, and spiritual guidance.",
};

const channels = [
  {
    id: "whatsapp",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="currentColor" className="text-white">
        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413Z" />
      </svg>
    ),
    bg: "bg-[#25D366]",
    label: "WhatsApp",
    heading: "Chat on WhatsApp",
    desc: "Get instant replies, share your birth details, and receive guidance — all on WhatsApp.",
    cta: "Start Chat",
    href: "https://wa.me/14169314409",
    external: true,
  },
  {
    id: "call",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-white">
        <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.11 12 19.79 19.79 0 0 1 1.07 3.38A2 2 0 0 1 3 1.07h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z" />
      </svg>
    ),
    bg: "bg-secondary",
    label: "Phone",
    heading: "Call Us Directly",
    desc: "Speak with our astrologers over the phone for an in-depth personal consultation.",
    cta: "Call +1 416-931-4409",
    href: "tel:+14169314409",
    external: false,
  },
  {
    id: "email",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-white">
        <rect width="20" height="16" x="2" y="4" rx="2" />
        <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
      </svg>
    ),
    bg: "bg-foreground",
    label: "Email",
    heading: "Send an Email",
    desc: "Write to us at your convenience and we'll respond within 24 hours.",
    cta: "Send Email",
    href: "mailto:info@astrospiritualistmasteromkar.com",
    external: false,
  },
];


const steps = [
  {
    num: "01",
    title: "Choose How to Connect",
    desc: "Reach us via WhatsApp, phone, or email — whichever is most convenient for you.",
  },
  {
    num: "02",
    title: "Share Your Details",
    desc: "Provide your name, date, time, and place of birth so we can prepare an accurate reading.",
  },
  {
    num: "03",
    title: "Receive Your Guidance",
    desc: "Get a personalised Vedic astrology reading, remedies, and spiritual guidance from our experts.",
  },
];

export default function ConnectWithAstrologerPage() {
  return (
    <main className="flex flex-col flex-1">

      {/* Hero */}
      <div className="bg-background px-4 sm:px-10 md:px-14 lg:px-20 pt-10 md:pt-16 pb-0 overflow-hidden">
        <div className="flex flex-col md:items-center gap-4 md:text-center max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 bg-[#FFF2EB] border border-[#ffc09d]/60 rounded-full px-4 py-1.5 w-fit">
            <Image src="/star-primary.svg" alt="" width={14} height={14} aria-hidden="true" />
            <span className="text-secondary font-quicksand font-semibold text-xs">Available 7 days a week</span>
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-medium font-playfair-display leading-tight">
            <span className="text-secondary">Connect with an </span>
            <span className="text-foreground font-playfair-display-italic">Astrologer</span>
          </h1>
          <p className="text-secondary text-base md:text-lg font-medium font-quicksand leading-relaxed">
            Seek clarity, guidance, and divine wisdom from the expert astrologers at Astro Sanatana.
            Available in Union City, California United States & Online Worldwide.
          </p>
          <div className="flex flex-wrap gap-3 md:justify-center mt-2">
            <Link
              href="https://wa.me/14169314409"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-[#25D366] text-white font-quicksand font-semibold rounded-full px-6 py-3 hover:bg-[#25D366]/85 transition-colors text-sm"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413Z" />
              </svg>
              Chat on WhatsApp
            </Link>
            <Link
              href="tel:+14169314409"
              className="inline-flex items-center gap-2 border-2 border-secondary text-secondary font-quicksand font-semibold rounded-full px-6 py-3 hover:bg-secondary hover:text-white transition-colors text-sm"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.11 12 19.79 19.79 0 0 1 1.07 3.38A2 2 0 0 1 3 1.07h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z" />
              </svg>
              Call Now
            </Link>
          </div>
        </div>

        {/* Astrologer Image Banner */}
        <div className="mt-12 md:mt-16 relative max-w-5xl mx-auto">
          <div className="relative w-full h-full rounded-3xl overflow-hidden">
            <Image
              src="/AstroSanatanaVeer.png"
              alt="Astro Sanatana"
              width={1000}
              height={1000}
              className="object-cover object-top rounded-3xl"
            />
          </div>
        </div>
      </div>

      {/* Connect Channels */}
      <div className="px-4 sm:px-10 md:px-14 lg:px-20 py-12 md:py-16">
        <div className="text-center mb-10">
          <h2 className="text-2xl md:text-3xl font-medium font-playfair-display leading-snug">
            <span className="text-secondary">Choose how you&apos;d like to </span>
            <span className="text-foreground font-playfair-display-italic">connect</span>
          </h2>
          <p className="text-secondary font-quicksand font-medium text-sm md:text-base mt-2">
            Multiple ways to reach our expert astrologers — pick what works for you.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 max-w-5xl mx-auto">
          {channels.map((c) => (
            <div
              key={c.id}
              className="flex flex-col gap-5 p-6 md:p-8 bg-[#FFF2EB] rounded-2xl md:rounded-3xl border border-[#ffc09d]/40"
            >
              <div className={`w-14 h-14 rounded-2xl ${c.bg} flex items-center justify-center`}>
                {c.icon}
              </div>
              <div className="flex flex-col gap-1.5">
                <span className="text-xs font-quicksand font-semibold text-secondary uppercase tracking-widest">{c.label}</span>
                <h3 className="text-foreground text-lg font-semibold font-playfair-display">{c.heading}</h3>
                <p className="text-primary font-quicksand font-medium text-sm leading-relaxed">{c.desc}</p>
              </div>
              <Link
                href={c.href}
                target={c.external ? "_blank" : undefined}
                rel={c.external ? "noopener noreferrer" : undefined}
                className="mt-auto inline-flex items-center gap-2 bg-secondary text-white font-quicksand font-semibold rounded-full px-5 py-2.5 hover:bg-secondary/80 transition-colors text-sm w-fit"
              >
                {c.cta}
                <svg xmlns="http://www.w3.org/2000/svg" width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M5 12h14" /><path d="m12 5 7 7-7 7" />
                </svg>
              </Link>
            </div>
          ))}
        </div>
      </div>

      {/* What We Help With */}
      <div className="bg-[#FFF2EB] px-4 sm:px-10 md:px-14 lg:px-20 py-12 md:py-16">
        <div className="text-center mb-10">
          <h2 className="text-2xl md:text-3xl font-medium font-playfair-display leading-snug">
            <span className="text-secondary">What we can </span>
            <span className="text-foreground font-playfair-display-italic">help you with</span>
          </h2>
          <p className="text-secondary font-quicksand font-medium text-sm md:text-base mt-2">
            From love and career to health and spiritual well-being — our astrologers guide you through it all.
          </p>
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 max-w-5xl mx-auto">
          {services.map((s) => (
            <Link
              key={s.slug}
              href={`/services/${s.slug}`}
              className="group relative rounded-2xl overflow-hidden aspect-square block"
            >
              <Image
                src={s.image}
                alt={s.label}
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-linear-to-t from-foreground/70 via-foreground/10 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-3 md:p-4">
                <p className="text-white font-quicksand font-semibold text-xs md:text-sm leading-snug">{s.label}</p>
              </div>
            </Link>
          ))}
        </div>
      </div>

      {/* How It Works */}
      <div className="px-4 sm:px-10 md:px-14 lg:px-20 py-12 md:py-16">
        <div className="text-center mb-10">
          <h2 className="text-2xl md:text-3xl font-medium font-playfair-display leading-snug">
            <span className="text-secondary">How it </span>
            <span className="text-foreground font-playfair-display-italic">works</span>
          </h2>
          <p className="text-secondary font-quicksand font-medium text-sm md:text-base mt-2">
            Getting guidance from Astro Sanatana is simple — three easy steps.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {steps.map((step, i) => (
            <div key={step.num} className="flex flex-col gap-4 items-start">
              <div className="flex items-center gap-4 w-full">
                <span className="text-4xl font-playfair-display font-medium text-[#ffc09d]">{step.num}</span>
                {i < steps.length - 1 && (
                  <div className="hidden md:block flex-1 h-px bg-[#ffc09d]/40" />
                )}
              </div>
              <h3 className="text-foreground text-lg font-semibold font-playfair-display">{step.title}</h3>
              <p className="text-secondary font-quicksand font-medium text-sm leading-relaxed">{step.desc}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Consultation Form + Info */}
      <div className="bg-[#FFF2EB] px-4 sm:px-10 md:px-14 lg:px-20 py-12 md:py-16">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-10 lg:gap-16 max-w-6xl mx-auto">

          {/* Form */}
          <div className="lg:col-span-3 flex flex-col gap-6">
            <div>
              <h2 className="text-2xl md:text-3xl font-medium font-playfair-display leading-snug">
                <span className="text-secondary">Book a </span>
                <span className="text-foreground font-playfair-display-italic">Consultation</span>
              </h2>
              <p className="text-secondary font-quicksand font-medium text-sm mt-2">
                Fill in your details and we&apos;ll get in touch to schedule your session.
              </p>
            </div>
            <ContactForm />
          </div>

          {/* Info */}
          <div className="lg:col-span-2 flex flex-col gap-6">

            <div className="flex flex-col gap-4 p-6 bg-white rounded-2xl md:rounded-3xl border border-[#ffc09d]/40">
              <h3 className="text-foreground text-lg font-semibold font-playfair-display">Visit Us In Person</h3>
              <div className="flex gap-3 items-start">
                <div className="w-8 h-8 rounded-full bg-[#ffc09d]/40 flex items-center justify-center shrink-0 mt-0.5">
                  <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-secondary">
                    <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" /><circle cx="12" cy="10" r="3" />
                  </svg>
                </div>
                <div>
                  <p className="text-foreground font-quicksand font-semibold text-sm">Union City, United States</p>
                  <p className="text-primary font-quicksand font-medium text-sm leading-relaxed mt-0.5">
                    2175 Decoto Rd,<br />Union City, CA 94587
                  </p>
                  <Link href="https://maps.google.com/?q=2175+Decoto+Rd+Union+City+CA+94587" target="_blank" rel="noopener noreferrer" className="text-secondary font-quicksand font-semibold text-xs mt-1.5 inline-flex items-center gap-1 hover:text-secondary/70 transition-colors">
                    Get Directions
                    <svg xmlns="http://www.w3.org/2000/svg" width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M5 12h14" /><path d="m12 5 7 7-7 7" />
                    </svg>
                  </Link>
                </div>
              </div>
            </div>

            <div className="flex flex-col gap-4 p-6 bg-white rounded-2xl md:rounded-3xl border border-[#ffc09d]/40">
              <h3 className="text-foreground text-lg font-semibold font-playfair-display">Online Worldwide</h3>
              <p className="text-primary font-quicksand font-medium text-sm leading-relaxed">
                Can&apos;t visit in person? We offer phone and video consultations for clients across the globe.
              </p>
              <Link
                href="https://wa.me/14169314409"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-[#25D366] text-white font-quicksand font-semibold rounded-full px-5 py-2.5 hover:bg-[#25D366]/85 transition-colors text-sm w-fit"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413Z" />
                </svg>
                Book via WhatsApp
              </Link>
            </div>

            <div className="flex flex-col gap-3 p-6 bg-white rounded-2xl md:rounded-3xl border border-[#ffc09d]/40">
              <h3 className="text-foreground text-base font-semibold font-playfair-display">Quick Contact</h3>
              <Link href="tel:+14169314409" className="flex items-center gap-3 text-primary font-quicksand font-medium text-sm hover:text-secondary transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-secondary shrink-0">
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.11 12 19.79 19.79 0 0 1 1.07 3.38A2 2 0 0 1 3 1.07h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z" />
                </svg>
                +1 416-931-4409
              </Link>
              <Link href="mailto:info@astrospiritualistmasteromkar.com" className="flex items-center gap-3 text-primary font-quicksand font-medium text-sm hover:text-secondary transition-colors break-all">
                <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-secondary shrink-0">
                  <rect width="20" height="16" x="2" y="4" rx="2" /><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
                </svg>
                info@astrospiritualistmasteromkar.com
              </Link>
            </div>

          </div>
        </div>
      </div>

      {/* Bottom CTA */}
      <div className="px-4 sm:px-10 md:px-14 lg:px-20 py-12 md:py-16 flex flex-col items-center gap-5 text-center">
        <Image src="/star-primary.svg" alt="" width={36} height={36} aria-hidden="true" className="opacity-60" />
        <h2 className="text-2xl md:text-3xl font-medium font-playfair-display leading-snug max-w-xl">
          <span className="text-secondary">Your destiny is written in the </span>
          <span className="text-foreground font-playfair-display-italic">stars</span>
        </h2>
        <p className="text-secondary font-quicksand font-medium text-sm md:text-base max-w-lg">
          Let Astro Sanatana help you understand your path. Reach out today and take the first step towards clarity and purpose.
        </p>
        <div className="flex flex-wrap gap-3 justify-center">
          <Link
            href="https://wa.me/14169314409"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-secondary text-white font-quicksand font-semibold rounded-full px-7 py-3 hover:bg-secondary/80 transition-colors text-sm"
          >
            Connect on WhatsApp
          </Link>
          <Link
            href="/faq"
            className="inline-flex items-center gap-2 border border-secondary text-secondary font-quicksand font-semibold rounded-full px-7 py-3 hover:bg-secondary hover:text-white transition-colors text-sm"
          >
            Read FAQs
          </Link>
        </div>
      </div>

    </main>
  );
}
