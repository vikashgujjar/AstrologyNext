import Image from "next/image";
import Link from "next/link";

export const metadata = {
  title: "Terms & Conditions | Astro Sanatana",
  description: "Read the Terms and Conditions governing the use of Astro Sanatana's astrology consultation, Pooja, and Vastu services.",
};

const sections = [
  {
    id: "acceptance",
    title: "1. Acceptance of Terms",
    content: [
      "By accessing or using the services of Astro Sanatana — including our website, consultations, Pooja bookings, Vastu assessments, and any other spiritual or astrological services — you agree to be bound by these Terms and Conditions.",
      "If you do not agree with any part of these terms, please do not use our services. These terms apply to all visitors, clients, and users of our platform.",
    ],
  },
  {
    id: "services",
    title: "2. Description of Services",
    content: [
      "Astro Sanatana provides a range of spiritual and astrological services including, but not limited to: Vedic Astrology (Jyotish) consultations, Kundli (birth chart) analysis, Vastu Shastra assessments, sacred Pooja rituals, Wedding Muhurat selection, Gemstone recommendations, Palm Reading, Tarot Reading, and personalised spiritual remedies.",
      "All services are provided for spiritual guidance and personal insight purposes only. They are not a substitute for professional medical, legal, financial, or psychological advice.",
    ],
  },
  {
    id: "consultations",
    title: "3. Consultations & Bookings",
    content: [
      "Consultations may be booked via phone, email, WhatsApp, or through our contact form. All bookings are subject to availability and confirmation by our team.",
      "Clients are required to provide accurate birth details (date, time, and place of birth) for accurate Vedic astrology readings. Astro Sanatana is not responsible for inaccurate guidance resulting from incorrect information provided by the client.",
      "Consultations are available in-person at our Union City, CA office, and online via phone or video call for international clients.",
    ],
  },
  {
    id: "payment",
    title: "4. Payment Terms",
    content: [
      "Service fees are communicated prior to booking confirmation. Payment is required at the time of booking or as otherwise agreed. We accept payments via bank transfer, WhatsApp Pay, and other methods notified by our team.",
      "All fees are in Canadian Dollars (CAD) unless otherwise specified. Prices are subject to change without prior notice, though confirmed bookings will be honoured at the agreed rate.",
    ],
  },
  {
    id: "cancellation",
    title: "5. Cancellation & Refund Policy",
    content: [
      "Cancellations made at least 48 hours before a scheduled consultation are eligible for a full refund or rescheduling at no charge.",
      "Cancellations made less than 48 hours before the scheduled time may be subject to a cancellation fee of up to 50% of the session fee.",
      "No-shows without prior notice are non-refundable. For Pooja and ritual bookings where materials have been purchased in advance, refunds may not be possible once preparation has commenced.",
      "To request a cancellation or reschedule, please contact us at +1 416-931-4409 or info@astrospiritualistmasteromkar.com.",
    ],
  },
  {
    id: "disclaimer",
    title: "6. Disclaimer — Nature of Astrological Services",
    content: [
      "Vedic astrology and all services provided by Astro Sanatana are intended for spiritual guidance, personal reflection, and general life insight. They are not guaranteed predictions of future events.",
      "Results and interpretations are based on classical Vedic principles and the professional experience of our astrologers. Individual outcomes may vary. We make no warranties, expressed or implied, regarding the accuracy, completeness, or applicability of any reading or remedy to your specific situation.",
      "Our services are not a replacement for qualified medical, psychiatric, legal, or financial professional advice. Clients should exercise their own judgment and consult appropriate professionals for critical life decisions.",
    ],
  },
  {
    id: "intellectual-property",
    title: "7. Intellectual Property",
    content: [
      "All content on the Astro Sanatana website and materials — including text, images, graphics, logos, and consultation reports — is the intellectual property of Astro Sanatana and is protected by applicable copyright laws.",
      "You may not reproduce, distribute, republish, or commercially exploit any content without prior written permission from Astro Sanatana.",
    ],
  },
  {
    id: "client-conduct",
    title: "8. Client Conduct",
    content: [
      "Clients agree to treat our astrologers and staff with respect and dignity at all times. Astro Sanatana reserves the right to refuse or terminate services to any client who behaves in an abusive, threatening, or disrespectful manner.",
      "Clients must not misrepresent their identity or provide false information during bookings or consultations.",
    ],
  },
  {
    id: "liability",
    title: "9. Limitation of Liability",
    content: [
      "To the fullest extent permitted by law, Astro Sanatana, its founders, astrologers, and staff shall not be liable for any direct, indirect, incidental, special, or consequential damages arising from the use of our services or reliance on any guidance, reading, or remedy provided.",
      "Our total liability to any client for any claim arising from our services shall not exceed the amount paid for the specific service in question.",
    ],
  },
  {
    id: "privacy",
    title: "10. Privacy",
    content: [
      "Your personal information is handled in accordance with our Privacy Policy, which forms part of these Terms and Conditions. By using our services, you consent to the collection and use of your information as described in our Privacy Policy.",
    ],
  },
  {
    id: "governing-law",
    title: "11. Governing Law",
    content: [
      "These Terms and Conditions are governed by and construed in accordance with the laws of the Province of Ontario, Canada. Any disputes arising from these terms shall be subject to the exclusive jurisdiction of the courts of Ontario.",
    ],
  },
  {
    id: "changes",
    title: "12. Changes to These Terms",
    content: [
      "Astro Sanatana reserves the right to update or modify these Terms and Conditions at any time without prior notice. Continued use of our services after any changes constitutes your acceptance of the revised terms.",
      "We encourage you to review this page periodically. This document was last updated on June 16, 2025.",
    ],
  },
];

export default function TermsPage() {
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
              <span className="text-secondary">Terms &amp; </span>
              <span className="text-foreground font-playfair-display-italic">Conditions</span>
            </h1>
          </div>
          <p className="text-secondary text-base md:text-lg font-medium font-quicksand leading-relaxed max-w-2xl">
            Please read these terms carefully before using any services offered by Astro Sanatana.
            Last updated: <span className="text-foreground font-semibold">June 16, 2025</span>
          </p>
        </div>
      </div>

      {/* Content */}
      <div className="px-4 sm:px-10 md:px-14 lg:px-20 py-10 md:py-16">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-10 lg:gap-16 max-w-7xl mx-auto">

          {/* Main Content */}
          <div className="lg:col-span-3 flex flex-col gap-10">
            {sections.map((section) => (
              <div key={section.id} id={section.id} className="flex flex-col gap-3 scroll-mt-40">
                <h2 className="text-lg md:text-xl font-semibold font-playfair-display text-foreground">
                  {section.title}
                </h2>
                {section.content.map((para, i) => (
                  <p key={i} className="text-secondary font-quicksand font-medium text-sm md:text-base leading-relaxed">
                    {para}
                  </p>
                ))}
              </div>
            ))}
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-1 flex flex-col gap-6 lg:sticky lg:top-36 self-start">

            <div className="flex flex-col gap-3 p-6 bg-[#FFF2EB] rounded-2xl md:rounded-3xl border border-[#ffc09d]/40">
              <h3 className="text-foreground text-base font-semibold font-playfair-display mb-1">Quick Links</h3>
              {sections.map((s) => (
                <a
                  key={s.id}
                  href={`#${s.id}`}
                  className="text-primary font-quicksand font-medium text-xs leading-5 hover:text-secondary transition-colors"
                >
                  {s.title}
                </a>
              ))}
            </div>

            <div className="flex flex-col gap-4 p-6 bg-[#FFF2EB] rounded-2xl md:rounded-3xl border border-[#ffc09d]/40">
              <h3 className="text-foreground text-base font-semibold font-playfair-display">Need Help?</h3>
              <p className="text-primary font-quicksand font-medium text-sm leading-relaxed">
                If you have any questions about these terms, reach out to us directly.
              </p>
              <Link href="tel:+14169314409" className="text-secondary font-quicksand font-semibold text-sm hover:text-secondary/70 transition-colors">
                +1 416-931-4409
              </Link>
              <Link href="mailto:info@astrospiritualistmasteromkar.com" className="text-secondary font-quicksand font-semibold text-xs hover:text-secondary/70 transition-colors break-all">
                info@astrospiritualistmasteromkar.com
              </Link>
              <Link
                href="/contact"
                className="inline-flex items-center gap-1 bg-secondary text-white font-quicksand font-medium rounded-full px-5 py-2.5 hover:bg-secondary/80 transition-colors text-sm w-fit mt-1"
              >
                Contact Us
                <svg xmlns="http://www.w3.org/2000/svg" width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M5 12h14" /><path d="m12 5 7 7-7 7" />
                </svg>
              </Link>
            </div>

            <div className="flex flex-col gap-3 p-6 bg-[#FFF2EB] rounded-2xl md:rounded-3xl border border-[#ffc09d]/40">
              <h3 className="text-foreground text-base font-semibold font-playfair-display">Related Policies</h3>
              <Link href="/privacy-policy" className="text-secondary font-quicksand font-semibold text-sm hover:text-secondary/70 transition-colors inline-flex items-center gap-1">
                Privacy Policy
                <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M5 12h14" /><path d="m12 5 7 7-7 7" />
                </svg>
              </Link>
            </div>

          </div>
        </div>
      </div>

    </main>
  );
}
