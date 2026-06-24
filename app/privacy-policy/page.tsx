import Image from "next/image";
import Link from "next/link";

export const metadata = {
  title: "Privacy Policy | Astro Sanatana",
  description: "Learn how Astro Sanatana collects, uses, and protects your personal information when you use our astrology and spiritual services.",
};

const sections = [
  {
    id: "introduction",
    title: "1. Introduction",
    content: [
      "Astro Sanatana ('we', 'our', or 'us') is committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your personal information when you visit our website, contact us, or use any of our astrology, Pooja, Vastu, or spiritual consultation services.",
      "By using our services, you agree to the collection and use of information in accordance with this policy. If you do not agree, please discontinue use of our services.",
    ],
  },
  {
    id: "information-collected",
    title: "2. Information We Collect",
    content: [
      "Personal Identification Information: When you book a consultation or contact us, we may collect your name, email address, phone number, date of birth, time of birth, and place of birth. Birth details are essential for accurate Vedic astrology readings and Kundli preparation.",
      "Communication Data: We may retain records of your correspondence with us via email, WhatsApp, phone, or our contact form for the purpose of providing and improving our services.",
      "Usage Data: When you visit our website, we may automatically collect information about your device, browser type, IP address, pages visited, and time spent on our site. This information helps us improve your browsing experience.",
      "Payment Information: We do not directly store credit or debit card information. Payments are processed through secure third-party payment methods. We retain only a record of the transaction amount and date.",
    ],
  },
  {
    id: "information-use",
    title: "3. How We Use Your Information",
    content: [
      "We use the information we collect for the following purposes:",
      "• To provide and personalise our astrology, Pooja, Vastu, and spiritual services.",
      "• To schedule, confirm, and manage consultation bookings.",
      "• To prepare your Kundli (birth chart) and personalised astrological readings.",
      "• To communicate with you regarding your bookings, queries, and service updates.",
      "• To send you occasional spiritual insights, newsletters, or promotional offers — only with your consent.",
      "• To improve our website, services, and client experience.",
      "• To comply with legal obligations and resolve disputes.",
    ],
  },
  {
    id: "information-sharing",
    title: "4. Sharing of Your Information",
    content: [
      "We do not sell, trade, or rent your personal information to third parties. We may share your information only in the following limited circumstances:",
      "• Service Providers: We may share data with trusted third-party providers who assist in operating our website or delivering services (e.g., payment processors, email platforms), under strict confidentiality agreements.",
      "• Legal Compliance: We may disclose your information if required by law, court order, or governmental authority.",
      "• Business Transfer: In the event of a merger, acquisition, or sale of assets, your information may be transferred to the acquiring entity, with appropriate notice provided to you.",
      "We will never share your birth details or consultation records with any unauthorised third party.",
    ],
  },
  {
    id: "data-retention",
    title: "5. Data Retention",
    content: [
      "We retain your personal information for as long as necessary to fulfil the purposes outlined in this policy, unless a longer retention period is required by law.",
      "Consultation records and birth chart data may be retained to enable follow-up sessions and continuity of service. You may request deletion of your personal data at any time by contacting us (subject to legal retention requirements).",
    ],
  },
  {
    id: "data-security",
    title: "6. Data Security",
    content: [
      "We implement appropriate technical and organisational measures to protect your personal information from unauthorised access, loss, misuse, or disclosure. These include secure communication channels, access controls, and confidentiality commitments from our staff.",
      "However, no method of transmission over the internet or electronic storage is 100% secure. While we strive to protect your personal data, we cannot guarantee absolute security.",
    ],
  },
  {
    id: "cookies",
    title: "7. Cookies & Tracking Technologies",
    content: [
      "Our website may use cookies — small text files stored on your device — to enhance your browsing experience, remember your preferences, and analyse site traffic.",
      "You may instruct your browser to refuse all cookies or to indicate when a cookie is being sent. However, some features of our website may not function properly without cookies.",
      "We may also use analytics tools (such as Google Analytics) to understand how visitors interact with our site. These tools may collect anonymised usage data.",
    ],
  },
  {
    id: "third-party",
    title: "8. Third-Party Links",
    content: [
      "Our website may contain links to third-party websites, including social media platforms (Facebook, Instagram, YouTube) and payment providers. We are not responsible for the privacy practices or content of these external sites.",
      "We encourage you to review the privacy policies of any third-party sites you visit through links on our website.",
    ],
  },
  {
    id: "childrens-privacy",
    title: "9. Children's Privacy",
    content: [
      "Our services are not directed to individuals under the age of 18. We do not knowingly collect personal information from children. If you believe a child has provided us with personal information, please contact us immediately and we will take steps to remove it.",
    ],
  },
  {
    id: "your-rights",
    title: "10. Your Rights",
    content: [
      "Depending on your location, you may have the following rights regarding your personal information:",
      "• The right to access the personal data we hold about you.",
      "• The right to request correction of inaccurate data.",
      "• The right to request deletion of your personal data ('right to be forgotten').",
      "• The right to withdraw consent for marketing communications at any time.",
      "• The right to lodge a complaint with a relevant data protection authority.",
      "To exercise any of these rights, please contact us using the details below.",
    ],
  },
  {
    id: "changes",
    title: "11. Changes to This Privacy Policy",
    content: [
      "We may update this Privacy Policy from time to time to reflect changes in our practices or legal obligations. We will notify you of significant changes by posting the updated policy on this page with a revised 'last updated' date.",
      "We encourage you to review this policy periodically. This Privacy Policy was last updated on June 16, 2025.",
    ],
  },
  {
    id: "contact",
    title: "12. Contact Us",
    content: [
      "If you have any questions, concerns, or requests regarding this Privacy Policy or the handling of your personal data, please contact us:",
      "Astro Sanatana\n2175 Decoto Rd, Union City, CA 94587, United States\nPhone: +1 (341) 345-5238\nEmail: astrosanatana.info@gmail.com",
    ],
  },
];

export default function PrivacyPolicyPage() {
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
              <span className="text-secondary">Privacy </span>
              <span className="text-foreground font-playfair-display-italic">Policy</span>
            </h1>
          </div>
          <p className="text-secondary text-base md:text-lg font-medium font-quicksand leading-relaxed max-w-2xl">
            Your privacy matters to us. This policy explains how we collect, use, and protect
            your personal information. Last updated: <span className="text-foreground font-semibold">June 16, 2025</span>
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
                  <p key={i} className="text-secondary font-quicksand font-medium text-sm md:text-base leading-relaxed whitespace-pre-line">
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
              <h3 className="text-foreground text-base font-semibold font-playfair-display">Questions?</h3>
              <p className="text-primary font-quicksand font-medium text-sm leading-relaxed">
                If you have any concerns about your data or this policy, we&apos;re happy to help.
              </p>
              <Link href="tel:+13413455238" className="text-secondary font-quicksand font-semibold text-sm hover:text-secondary/70 transition-colors">
                +1 (341) 345-5238
              </Link>
              <Link href="mailto:astrosanatana.info@gmail.com" className="text-secondary font-quicksand font-semibold text-xs hover:text-secondary/70 transition-colors break-all">
                astrosanatana.info@gmail.com
              </Link>
              <Link
                href="/location"
                className="inline-flex items-center gap-1 bg-secondary text-white font-quicksand font-medium rounded-full px-5 py-2.5 hover:bg-secondary/80 transition-colors text-sm w-fit mt-1"
              >
                Location
                <svg xmlns="http://www.w3.org/2000/svg" width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M5 12h14" /><path d="m12 5 7 7-7 7" />
                </svg>
              </Link>
            </div>

            <div className="flex flex-col gap-3 p-6 bg-[#FFF2EB] rounded-2xl md:rounded-3xl border border-[#ffc09d]/40">
              <h3 className="text-foreground text-base font-semibold font-playfair-display">Related Policies</h3>
              <Link href="/terms-and-conditions" className="text-secondary font-quicksand font-semibold text-sm hover:text-secondary/70 transition-colors inline-flex items-center gap-1">
                Terms &amp; Conditions
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
