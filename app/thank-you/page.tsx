import Image from "next/image";
import Link from "next/link";

export const metadata = {
  title: "Thank You | Astro Sanatana",
  description: "Thank you for reaching out to Astro Sanatana. Our team will contact you shortly.",
};

export default function ThankYouPage() {
  return (
    <main className="flex flex-col flex-1 items-center justify-center px-4 py-20 md:py-32 text-center">

      {/* Decorative stars */}
      <div className="relative mb-8">
        <Image
          src="/star-primary.svg"
          alt=""
          width={20}
          height={20}
          aria-hidden="true"
          className="absolute -top-6 -left-8 opacity-40"
        />
        <Image
          src="/star-primary.svg"
          alt=""
          width={14}
          height={14}
          aria-hidden="true"
          className="absolute -top-2 -right-10 opacity-30"
        />

        {/* Check circle */}
        <div className="w-24 h-24 rounded-full bg-[#FFF2EB] border-2 border-[#ffc09d]/60 flex items-center justify-center">
          <div className="w-14 h-14 rounded-full bg-secondary/10 flex items-center justify-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="32"
              height="32"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="text-secondary"
            >
              <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
              <path d="m9 11 3 3L22 4" />
            </svg>
          </div>
        </div>
      </div>

      {/* Heading */}
      <div className="flex flex-col gap-4 max-w-xl">
        <div className="inline-flex items-center gap-2 bg-[#FFF2EB] border border-[#ffc09d]/60 rounded-full px-4 py-1.5 w-fit mx-auto">
          <Image src="/star-primary.svg" alt="" width={12} height={12} aria-hidden="true" />
          <span className="text-secondary font-quicksand font-semibold text-xs">Message Received</span>
        </div>

        <h1 className="text-4xl md:text-5xl font-medium font-playfair-display leading-tight">
          <span className="text-secondary">Thank </span>
          <span className="text-foreground font-playfair-display-italic">You!</span>
        </h1>

        <p className="text-secondary font-quicksand font-medium text-base md:text-lg leading-relaxed">
          Your message has been received. Our expert astrologers at Astro Sanatana will review your inquiry and get back to you within <span className="text-foreground font-semibold">24 hours</span>.
        </p>

        <p className="text-primary font-quicksand font-medium text-sm leading-relaxed">
          For urgent matters, you can reach us directly on WhatsApp or by phone — we&apos;re available 7 days a week.
        </p>
      </div>

      {/* Action buttons */}
      <div className="flex flex-wrap gap-3 justify-center mt-8">
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
          href="/"
          className="inline-flex items-center gap-2 border border-secondary text-secondary font-quicksand font-semibold rounded-full px-6 py-3 hover:bg-secondary hover:text-white transition-colors text-sm"
        >
          Back to Home
        </Link>
      </div>

      {/* Contact strip */}
      <div className="mt-12 flex flex-col sm:flex-row gap-4 sm:gap-8 items-center justify-center">
        <Link href="tel:+14169314409" className="flex items-center gap-2 text-primary font-quicksand font-medium text-sm hover:text-secondary transition-colors">
          <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-secondary">
            <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.11 12 19.79 19.79 0 0 1 1.07 3.38A2 2 0 0 1 3 1.07h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z" />
          </svg>
          +1 416-931-4409
        </Link>
        <div className="hidden sm:block w-px h-4 bg-primary/20" />
        <Link href="mailto:info@astrospiritualistmasteromkar.com" className="flex items-center gap-2 text-primary font-quicksand font-medium text-sm hover:text-secondary transition-colors">
          <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-secondary">
            <rect width="20" height="16" x="2" y="4" rx="2" /><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
          </svg>
          info@astrospiritualistmasteromkar.com
        </Link>
      </div>

    </main>
  );
}
