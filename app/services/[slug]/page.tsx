import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { services, getServiceBySlug, getAllServiceSlugs } from "../../data/services";

export async function generateStaticParams() {
  return getAllServiceSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const service = getServiceBySlug(slug);
  if (!service) return {};
  return {
    title: `${service.label} | Astro Sanatana`,
    description: service.description[0].slice(0, 160),
  };
}

export default async function ServicePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const service = getServiceBySlug(slug);
  if (!service) notFound();

  const related = services.filter((s) => s.slug !== slug).slice(0, 4);

  return (
    <main className="flex flex-col flex-1">

      {/* Hero */}
      <div className="relative w-full h-64 md:h-96 overflow-hidden">
        <Image
          src={service.image}
          alt={service.label}
          fill
          priority
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-foreground/80 via-foreground/30 to-transparent" />
        <div className="absolute inset-0 flex flex-col justify-end px-4 sm:px-10 md:px-14 lg:px-20 pb-8 md:pb-12">
          <Link href="/" className="inline-flex items-center gap-1.5 text-white/70 font-quicksand text-xs mb-3 hover:text-white transition-colors w-fit">
            <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="m15 18-6-6 6-6" />
            </svg>
            Home / Services
          </Link>
          <p className="text-white/70 font-quicksand font-semibold text-xs uppercase tracking-widest mb-2">{service.tagline}</p>
          <h1 className="text-3xl md:text-5xl font-medium font-playfair-display text-white leading-tight">
            {service.label}
          </h1>
        </div>
      </div>

      {/* Main Content */}
      <div className="px-4 sm:px-10 md:px-14 lg:px-20 py-10 md:py-14">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 lg:gap-14 max-w-7xl mx-auto">

          {/* Left — Content */}
          <div className="lg:col-span-2 flex flex-col gap-10">

            {/* About */}
            <div className="flex flex-col gap-4">
              <h2 className="text-2xl md:text-3xl font-medium font-playfair-display leading-snug">
                <span className="text-secondary">About </span>
                <span className="text-foreground font-playfair-display-italic">{service.label}</span>
              </h2>
              {service.description.map((para, i) => (
                <p key={i} className="text-secondary font-quicksand font-medium text-sm md:text-base leading-relaxed">
                  {para}
                </p>
              ))}
            </div>

            {/* What We Offer */}
            <div className="flex flex-col gap-5 p-6 md:p-8 bg-[#FFF2EB] rounded-2xl md:rounded-3xl border border-[#ffc09d]/40">
              <h3 className="text-xl font-semibold font-playfair-display text-foreground">What We Offer</h3>
              <ul className="flex flex-col gap-3">
                {service.whatWeOffer.map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <span className="mt-1 w-4 h-4 rounded-full bg-secondary/20 flex items-center justify-center shrink-0">
                      <svg xmlns="http://www.w3.org/2000/svg" width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" className="text-secondary">
                        <path d="M20 6 9 17l-5-5" />
                      </svg>
                    </span>
                    <span className="text-secondary font-quicksand font-medium text-sm leading-relaxed">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* How It Works */}
            <div className="flex flex-col gap-6">
              <h3 className="text-xl font-semibold font-playfair-display text-foreground">
                <span className="text-secondary">How It </span>
                <span className="font-playfair-display-italic">Works</span>
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
                {service.howItWorks.map((step, i) => (
                  <div key={i} className="flex flex-col gap-3">
                    <div className="flex items-center gap-3">
                      <span className="text-3xl font-playfair-display font-medium text-[#ffc09d]">
                        {String(i + 1).padStart(2, "0")}
                      </span>
                      {i < service.howItWorks.length - 1 && (
                        <div className="hidden sm:block flex-1 h-px bg-[#ffc09d]/40" />
                      )}
                    </div>
                    <h4 className="text-foreground font-playfair-display font-semibold text-base">{step.title}</h4>
                    <p className="text-secondary font-quicksand font-medium text-sm leading-relaxed">{step.desc}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Benefits */}
            <div className="flex flex-col gap-5">
              <h3 className="text-xl font-semibold font-playfair-display text-foreground">
                <span className="text-secondary">Key </span>
                <span className="font-playfair-display-italic">Benefits</span>
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {service.benefits.map((benefit, i) => (
                  <div key={i} className="flex items-start gap-3 p-4 bg-[#FFF2EB] rounded-xl border border-[#ffc09d]/30">
                    <Image src="/star-primary.svg" alt="" width={16} height={16} className="shrink-0 mt-0.5 opacity-80" aria-hidden="true" />
                    <span className="text-secondary font-quicksand font-medium text-sm leading-relaxed">{benefit}</span>
                  </div>
                ))}
              </div>
            </div>

          </div>

          {/* Right — Sidebar */}
          <div className="lg:col-span-1 flex flex-col gap-5 lg:sticky lg:top-36 self-start">

            {/* Book CTA */}
            <div className="flex flex-col gap-4 p-6 bg-[#FFF2EB] rounded-2xl md:rounded-3xl border border-[#ffc09d]/40">
              <h3 className="text-foreground text-lg font-semibold font-playfair-display">Book a Consultation</h3>
              <p className="text-primary font-quicksand font-medium text-sm leading-relaxed">
                Get expert guidance for <span className="text-secondary font-semibold">{service.label}</span> from Astro Sanatana — available in-person and online worldwide.
              </p>
              <Link
                href="https://wa.me/14169314409"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-[#25D366] text-white font-quicksand font-semibold rounded-full px-5 py-3 hover:bg-[#25D366]/85 transition-colors text-sm w-full justify-center"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413Z" />
                </svg>
                Chat on WhatsApp
              </Link>
              <Link
                href="tel:+14169314409"
                className="inline-flex items-center gap-2 border-2 border-secondary text-secondary font-quicksand font-semibold rounded-full px-5 py-3 hover:bg-secondary hover:text-white transition-colors text-sm w-full justify-center"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.11 12 19.79 19.79 0 0 1 1.07 3.38A2 2 0 0 1 3 1.07h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z" />
                </svg>
                Call +1 416-931-4409
              </Link>
            </div>

            {/* Contact Info */}
            <div className="flex flex-col gap-3 p-6 bg-[#FFF2EB] rounded-2xl md:rounded-3xl border border-[#ffc09d]/40">
              <h3 className="text-foreground text-base font-semibold font-playfair-display">Visit Us</h3>
              <p className="text-primary font-quicksand font-medium text-xs leading-relaxed">
                2175 Decoto Rd,<br />Union City, CA 94587, United States
              </p>
              <Link href="mailto:astrosanatana.info@gmail.com" className="text-secondary font-quicksand font-semibold text-xs hover:text-secondary/70 transition-colors break-all">
                astrosanatana.info@gmail.com
              </Link>
            </div>

            {/* All Services */}
            <div className="flex flex-col gap-3 p-6 bg-[#FFF2EB] rounded-2xl md:rounded-3xl border border-[#ffc09d]/40">
              <h3 className="text-foreground text-base font-semibold font-playfair-display mb-1">All Services</h3>
              {services.map((s) => (
                <Link
                  key={s.slug}
                  href={`/services/${s.slug}`}
                  className={`font-quicksand font-medium text-xs leading-5 transition-colors ${
                    s.slug === slug
                      ? "text-secondary font-semibold"
                      : "text-primary hover:text-secondary"
                  }`}
                >
                  {s.slug === slug && "→ "}{s.label}
                </Link>
              ))}
            </div>

          </div>
        </div>
      </div>

      {/* Related Services */}
      <div className="bg-[#FFF2EB] px-4 sm:px-10 md:px-14 lg:px-20 py-10 md:py-14">
        <h2 className="text-2xl md:text-3xl font-medium font-playfair-display leading-snug mb-8">
          <span className="text-secondary">Explore Other </span>
          <span className="text-foreground font-playfair-display-italic">Services</span>
        </h2>
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
          {related.map((s) => (
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
              <div className="absolute inset-0 bg-gradient-to-t from-foreground/70 via-foreground/10 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-3 md:p-4">
                <p className="text-white font-quicksand font-semibold text-xs md:text-sm leading-snug">{s.label}</p>
              </div>
            </Link>
          ))}
        </div>
      </div>

      {/* Bottom CTA */}
      <div className="px-4 sm:px-10 md:px-14 lg:px-20 py-12 md:py-16 flex flex-col items-center gap-5 text-center">
        <Image src="/star-primary.svg" alt="" width={36} height={36} aria-hidden="true" className="opacity-60" />
        <h2 className="text-2xl md:text-3xl font-medium font-playfair-display leading-snug max-w-xl">
          <span className="text-secondary">Ready to begin your </span>
          <span className="text-foreground font-playfair-display-italic">spiritual journey?</span>
        </h2>
        <p className="text-secondary font-quicksand font-medium text-sm md:text-base max-w-lg">
          Connect with Astro Sanatana today for a personalised {service.label} consultation — in-person or online.
        </p>
        <div className="flex flex-wrap gap-3 justify-center">
          <Link
            href="https://wa.me/14169314409"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-secondary text-white font-quicksand font-semibold rounded-full px-7 py-3 hover:bg-secondary/80 transition-colors text-sm"
          >
            Book on WhatsApp
          </Link>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 border border-secondary text-secondary font-quicksand font-semibold rounded-full px-7 py-3 hover:bg-secondary hover:text-white transition-colors text-sm"
          >
            Contact Us
          </Link>
        </div>
      </div>

    </main>
  );
}
