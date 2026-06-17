import Image from "next/image";
import Link from "next/link";
import { services } from "../data/services";

export default function Footer() {
  return (

    <div className="w-full bg-[#FFF2EB]">
      <div className="grid grid-cols-1 lg:grid-cols-4 gap-5 px-4 py-8 md:px-12 sm:py-12 xl:px-20 xl:py-20">

        {/* Brand + Social */}
        <div className="col-span-1">
          <div className="flex flex-col items-start justify-start p-6 md:p-0">
            <div className="md:space-y-2 flex flex-col items-center md:items-start md:flex-col gap-x-5">
              <Image
                alt="Astro Sanatana"
                loading="lazy"
                width={150}
                height={150}
                decoding="async"
                style={{ color: "transparent" }}
                src="/logo.png"
              />
              <p className="text-md font-medium text-primary mt-6">
                Expert Vedic astrologers and spiritual guides bringing ancient wisdom, clarity, and healing to every soul we serve.
              </p>
            </div>
            <div className="pt-6 flex  gap-4 items-center justify-center md:justify-start w-full">
              <Link className="p-2 bg-foreground rounded-full text-white hover:bg-foreground/80" href="https://www.facebook.com/ptchandrashekar">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-facebook w-5 h-5">
                  <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
                </svg>
              </Link>
              <Link className="p-2 bg-foreground rounded-full text-white hover:bg-foreground/80" href="https://www.instagram.com/pandit_chandrashekar">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-instagram w-5 h-5">
                  <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                  <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
                </svg>
              </Link>
              <Link className="p-2 bg-foreground rounded-full text-white hover:bg-foreground/80" href="https://www.youtube.com/@panditchandrashekar">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-youtube w-5 h-5">
                  <path d="M2.5 17a24.12 24.12 0 0 1 0-10 2 2 0 0 1 1.4-1.4 49.56 49.56 0 0 1 16.2 0A2 2 0 0 1 21.5 7a24.12 24.12 0 0 1 0 10 2 2 0 0 1-1.4 1.4 49.55 49.55 0 0 1-16.2 0A2 2 0 0 1 2.5 17" />
                  <path d="m10 15 5-3-5-3z" />
                </svg>
              </Link>
            </div>
          </div>
        </div>

        {/* Nav links */}
        <div className="col-span-1 lg:col-span-2">
          <div className="justify-start items-start gap-15 grid grid-cols-2 sm:grid-cols-3">

            {/* Astro Sanatana + Legal */}
            <div className="flex-col justify-start items-start gap-10 inline-flex">
              <div className="flex flex-col space-y-4">
                <div className="h-6.5 justify-start items-center gap-2.5 inline-flex">
                  <div className="text-foreground text-xl font-medium font-playfair-display capitalize leading-relaxed">Astro Sanatana</div>
                </div>
                <div className="flex-col justify-start items-start gap-3 inline-flex">
                  <Link className="text-primary text-sm font-semibold font-quicksand capitalize leading-5" href="/about">About Us</Link>
                  <Link className="text-primary text-sm font-semibold font-quicksand capitalize leading-5" href="/contact">Contact Us</Link>
                  <Link className="text-primary text-sm font-semibold font-quicksand capitalize leading-5" href="/faq">FAQs</Link>
                  <Link className="text-primary text-sm font-semibold font-quicksand capitalize leading-5" href="/gallery">Gallery</Link>
                </div>
              </div>
              <div className="flex flex-col space-y-4">
                <div className="h-6.5 justify-start items-center gap-2.5 inline-flex">
                  <div className="text-foreground text-xl font-medium font-playfair-display capitalize leading-relaxed">Legal</div>
                </div>
                <div className="flex-col justify-start items-start gap-3 inline-flex">
                  <Link className="text-primary text-sm font-semibold font-quicksand capitalize leading-5" href="/terms-and-conditions">Terms &amp; Conditions</Link>
                  <Link className="text-primary text-sm font-semibold font-quicksand capitalize leading-5" href="/privacy-policy">Privacy Policy</Link>
                </div>
              </div>
            </div>

            {/* Services */}
            <div className="flex-col justify-start items-start gap-10 inline-flex">
              <div className="flex flex-col space-y-4">
                <div className="h-6.5 justify-start items-center gap-2.5 inline-flex">
                  <div className="text-foreground text-xl font-medium font-playfair-display capitalize leading-relaxed">Services</div>
                </div>
                <div className="flex-col justify-start items-start gap-3 inline-flex">
                  {services.map((s) => (
                    <Link key={s.slug} className="text-primary text-sm font-semibold font-quicksand capitalize leading-5 hover:text-secondary transition-colors" href={`/services/${s.slug}`}>
                      {s.label}
                    </Link>
                  ))}
                </div>
              </div>
            </div>

            {/* Astrology */}
            <div className="flex-col justify-start items-start gap-10 inline-flex">
              <div className="flex flex-col space-y-4">
                <div className="h-6.5 justify-start items-center gap-2.5 inline-flex">
                  <div className="text-foreground text-xl font-medium font-playfair-display capitalize leading-relaxed">Astrology</div>
                </div>
                <div className="flex-col justify-start items-start gap-3 inline-flex">
                  <Link className="text-primary text-sm font-semibold font-quicksand capitalize leading-5" href="/connect-with-astrologer">Connect with Astrologer</Link>
                  <Link className="text-primary text-sm font-semibold font-quicksand capitalize leading-5" href="https://wa.me/14169314409" target="_blank" rel="noopener noreferrer">Chat on WhatsApp</Link>
                  <Link className="text-primary text-sm font-semibold font-quicksand capitalize leading-5" href="tel:+14169314409">Call Now</Link>
                </div>
              </div>
              <div className="flex flex-col space-y-4">
                <div className="h-6.5 justify-start items-center gap-2.5 inline-flex">
                  <div className="text-foreground text-xl font-medium font-playfair-display capitalize leading-relaxed"></div>
                </div>
              </div>
            </div>

          </div>
        </div>

        {/* Branches + Book Us */}
        <div className="col-span-1">
          <div className="flex-col justify-start items-start gap-10 inline-flex">

            <div className="flex flex-col space-y-4">
              <div className="h-6.5 justify-start items-center gap-2.5 inline-flex">
                <div className="w-5 h-5 justify-center items-center flex">
                  <div className="w-5 h-5 text-foreground">
                    <Image alt="Global" loading="lazy" width={20} height={20} decoding="async" className="w-5 h-5" style={{ color: "transparent" }} src="/global.svg" />
                  </div>
                </div>
                <div className="text-foreground text-xl font-medium font-playfair-display capitalize leading-relaxed">Address</div>
              </div>
              <div className="flex flex-col gap-2">
                <div className="text-primary text-xl font-normal font-quicksand leading-5"></div>
                <div className="text-primary text-sm font-semibold font-quicksand capitalize leading-5">
                  2175 Decoto Rd, Union City, CA 94587, United States
                </div>
              </div>
            </div>

            <div className="flex flex-col space-y-4">
              <div className="h-6.5 justify-start items-center gap-2.5 inline-flex">
                <div className="w-5 h-5 justify-center items-center flex">
                  <div className="w-5 h-5 text-foreground">
                    <Image alt="Message" loading="lazy" width={20} height={20} decoding="async" className="w-5 h-5" style={{ color: "transparent" }} src="/message.svg" />
                  </div>
                </div>
                <div className="text-foreground text-xl font-medium font-playfair-display capitalize leading-relaxed">Book Us</div>
              </div>
              <div className="flex flex-col gap-2">
                <Link href="mailto:info@astrospiritualistmasteromkar.com" className="text-primary text-sm font-normal font-quicksand leading-5 hover:text-secondary transition-colors break-all">info@astrospiritualistmasteromkar.com</Link>
                <Link href="tel:+14169314409" className="text-primary text-xl font-normal font-quicksand leading-5 hover:text-secondary transition-colors">+1 416-931-4409</Link>
                <div className="text-primary text-sm font-semibold font-quicksand capitalize leading-5">
                  For support and bookings please contact us anytime.
                </div>
              </div>
            </div>

          </div>
        </div>

      </div>

      {/* Copyright bar */}
      <div className="h-10.5 w-full py-3 bg-foreground flex-col justify-center items-center gap-2.5 inline-flex">
        <div className="justify-center items-center gap-5 inline-flex text-white text-sm font-normal font-quicksand leading-5">
          {/* <div className="hidden md:block">Terms of service</div> */}
          {/* <div className="hidden md:blockw-1 h-1 bg-white rounded-full"></div> */}
          {/* <div className="hidden md:block">Privacy Policy</div> */}
          {/* <div className="hidden md:blockw-1 h-1 bg-white rounded-full"></div> */}
          <div className="">© 2026 Astro Sanatana. All rights reserved. | Designed & Developed by Future IT Touch Pvt. Ltd.</div>
        </div>
      </div>
      
    </div>

  );
}
