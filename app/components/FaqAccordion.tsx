"use client";

import { useState } from "react";

const faqs = [
  {
    q: "What is Vedic Astrology (Jyotish)?",
    a: "Vedic Astrology, or Jyotish, is one of the oldest sciences in the world — originating from the ancient scriptures of India known as the Vedas. It maps the positions of planets and celestial bodies at the time of your birth to reveal your life's purpose, strengths, challenges, and destiny. Unlike Western astrology, Jyotish uses the sidereal zodiac and places great emphasis on the Moon sign and rising sign (Ascendant).",
  },
  {
    q: "How accurate are astrological predictions?",
    a: "The accuracy of astrological guidance depends on the precision of your birth details — date, exact time, and place of birth. Astro Sanatana uses classical Vedic techniques refined over decades of practice to provide deeply personalised insights. While astrology does not determine a fixed fate, it reveals the energies at play and guides you toward making better decisions.",
  },
  {
    q: "What services does Astro Sanatana offer?",
    a: "We offer a wide range of spiritual and astrological services including Vedic Astrology consultations, Kundli (birth chart) analysis, Vastu Shastra for homes and offices, sacred Pooja rituals, Wedding Muhurat selection, Gemstone recommendations, Palm Reading, Tarot Reading, and personalised remedies for life challenges such as health, relationships, finances, and career.",
  },
  {
    q: "How can I book a consultation?",
    a: "You can book a consultation by calling us at +1 (341) 345-5238, emailing us at astrosanatana.info@gmail.com, or by chatting with us directly on WhatsApp. Our team will help you schedule a session at your convenience, either in-person at our Union City, CA office or online via video call.",
  },
  {
    q: "What is a Kundli (birth chart)?",
    a: "A Kundli is your personal astrological birth chart — a precise map of the planetary positions at the exact moment of your birth. It is the foundation of all Vedic astrology readings and reveals your personality, life path, health, relationships, career potential, and karmic influences. Astro Sanatana analyses your Kundli in depth to provide meaningful and actionable guidance.",
  },
  {
    q: "What is Vastu Shastra?",
    a: "Vastu Shastra is the ancient Indian science of architecture and spatial arrangement. It aligns your living or working space with the natural forces of the universe — directions, elements, and energy flows — to promote health, prosperity, harmony, and success. Our Vastu experts can assess your home or office and recommend practical corrections to restore positive energy.",
  },
  {
    q: "Do you offer online consultations?",
    a: "Yes. Astro Sanatana serves clients across 30+ countries and offers online consultations via phone or video call. Whether you are in Canada, India, the USA, the UK, or anywhere in the world, you can access our guidance from the comfort of your home.",
  },
  {
    q: "How long does a consultation typically last?",
    a: "A standard consultation is typically 45 to 60 minutes. During this time, Astro Sanatana will review your birth chart, address your specific concerns, and provide personalised remedies and guidance. For complex matters requiring deeper analysis, extended sessions of up to 90 minutes are available.",
  },
  {
    q: "Can astrology help with relationship and marriage problems?",
    a: "Yes. Vedic astrology provides powerful tools for understanding compatibility, resolving conflicts, and finding the right time to marry. Our Kundli matching (Rishta Milan) service analyses 36 gunas to assess compatibility between partners. We also offer remedies for delayed marriage, relationship challenges, and family harmony.",
  },
  {
    q: "What remedies does Astro Sanatana recommend?",
    a: "Remedies in Vedic astrology are gentle, spiritual, and practical. They may include specific Pooja rituals, mantra recitation, Gemstone recommendations, charitable acts (Dana), fasting on particular days, or Vastu corrections. All remedies are personalised to your birth chart and are intended to harmonise planetary influences — never fear-based.",
  },
];

export default function FaqAccordion() {
  const [open, setOpen] = useState<number | null>(null);

  return (
    <div className="flex flex-col divide-y divide-primary/10">
      {faqs.map((faq, i) => (
        <div key={i} className="py-5">
          <button
            onClick={() => setOpen(open === i ? null : i)}
            className="w-full flex items-start justify-between gap-4 text-left group"
            aria-expanded={open === i}
          >
            <span className={`font-playfair-display font-medium text-base md:text-lg leading-snug transition-colors ${open === i ? "text-foreground" : "text-primary"}`}>
              {faq.q}
            </span>
            <span className={`shrink-0 w-6 h-6 rounded-full flex items-center justify-center transition-all duration-300 ${open === i ? "bg-secondary text-white rotate-45" : "bg-[#ffc09d]/40 text-secondary"}`}>
              <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M12 5v14M5 12h14" />
              </svg>
            </span>
          </button>
          {open === i && (
            <p className="mt-3 text-secondary font-quicksand font-medium text-sm md:text-base leading-relaxed pr-10">
              {faq.a}
            </p>
          )}
        </div>
      ))}
    </div>
  );
}
