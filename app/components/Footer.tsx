import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  return (
    <div className="w-full bg-[#FFF2EB]">
      <div className="grid grid-cols-1 lg:grid-cols-4 gap-5 px-4 py-8 md:px-12 sm:py-12 xl:px-20 xl:py-20">

        {/* Brand + Social */}
        <div className="col-span-1">
          <div className="flex flex-col items-start justify-start p-6 md:p-0">
            <div className="md:space-y-2 flex flex-row items-center md:items-start  md:flex-col gap-x-5">
              <Image
                alt="Astro Sanatana Veer"
                loading="lazy"
                width={200}
                height={100}
                decoding="async"
                style={{ color: "transparent" }}
                src="/prana.svg"
              />
              <p className="text-md font-medium text-primary">
                We are astrologers and priest trained by Astro Sanatana Veer the worlds most trusted astrologer.
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
          <div className="justify-start items-start gap-[60px] grid grid-cols-2 sm:grid-cols-3">

            {/* Astro Sanatana Veer + Legal */}
            <div className="flex-col justify-start items-start gap-10 inline-flex">
              <div className="flex flex-col space-y-4">
                <div className="h-[26px] justify-start items-center gap-2.5 inline-flex">
                  <div className="text-foreground text-xl font-medium font-playfair-display capitalize leading-relaxed">Astro Sanatana Veer</div>
                </div>
                <div className="flex-col justify-start items-start gap-3 inline-flex">
                  <Link className="text-primary text-sm font-semibold font-quicksand capitalize leading-5" href="/about">About Us</Link>
                  <Link className="text-primary text-sm font-semibold font-quicksand capitalize leading-5" href="/contact">Contact Us</Link>
                  <Link className="text-primary text-sm font-semibold font-quicksand capitalize leading-5" href="/">FAQs</Link>
                  <Link className="text-primary text-sm font-semibold font-quicksand capitalize leading-5" href="/team">Our Team</Link>
                  <Link className="text-primary text-sm font-semibold font-quicksand capitalize leading-5" href="/gallery">Gallery</Link>
                </div>
              </div>
              <div className="flex flex-col space-y-4">
                <div className="h-[26px] justify-start items-center gap-2.5 inline-flex">
                  <div className="text-foreground text-xl font-medium font-playfair-display capitalize leading-relaxed">Legal</div>
                </div>
                <div className="flex-col justify-start items-start gap-3 inline-flex">
                  <Link className="text-primary text-sm font-semibold font-quicksand capitalize leading-5" href="/terms-and-conditions">Terms &amp; Conditions</Link>
                  <Link className="text-primary text-sm font-semibold font-quicksand capitalize leading-5" href="/privacy-policy">Privacy Policy</Link>
                  <Link className="text-primary text-sm font-semibold font-quicksand capitalize leading-5" href="/pricing-policy">Pricing Policy</Link>
                  <Link className="text-primary text-sm font-semibold font-quicksand capitalize leading-5" href="/cancellation">Cancellation Policy</Link>
                  <Link className="text-primary text-sm font-semibold font-quicksand capitalize leading-5" href="/shipping-policy">Shipping Policy</Link>
                  <Link className="text-primary text-sm font-semibold font-quicksand capitalize leading-5" href="/faq">FAQ</Link>
                </div>
              </div>
            </div>

            {/* Horoscope */}
            <div className="flex-col justify-start items-start gap-10 inline-flex">
              <div className="flex flex-col space-y-4">
                <div className="h-[26px] justify-start items-center gap-2.5 inline-flex">
                  <div className="text-foreground text-xl font-medium font-playfair-display capitalize leading-relaxed">Horoscope</div>
                </div>
                <div className="flex-col justify-start items-start gap-3 inline-flex">
                  <Link className="text-primary text-sm font-semibold font-quicksand capitalize leading-5" href="/horoscope">Daily Horoscope</Link>
                  <Link className="text-primary text-sm font-semibold font-quicksand capitalize leading-5" href="/horoscope">Weekly Horoscope</Link>
                  <Link className="text-primary text-sm font-semibold font-quicksand capitalize leading-5" href="/horoscope">Yearly Horoscope</Link>
                  <Link className="text-primary text-sm font-semibold font-quicksand capitalize leading-5" href="/horoscope">Personalised Horoscope</Link>
                  <Link className="text-primary text-sm font-semibold font-quicksand capitalize leading-5" href="/horoscope">Lucky Number</Link>
                  <Link className="text-primary text-sm font-semibold font-quicksand capitalize leading-5" href="/horoscope">Lucky Color</Link>
                </div>
              </div>
            </div>

            {/* Astrology */}
            <div className="flex-col justify-start items-start gap-10 inline-flex">
              <div className="flex flex-col space-y-4">
                <div className="h-[26px] justify-start items-center gap-2.5 inline-flex">
                  <div className="text-foreground text-xl font-medium font-playfair-display capitalize leading-relaxed">Astrology</div>
                </div>
                <div className="flex-col justify-start items-start gap-3 inline-flex">
                  <Link className="text-primary text-sm font-semibold font-quicksand capitalize leading-5" href="https://wa.me/916363018663">Chat With Astrologer</Link>
                </div>
              </div>
              <div className="flex flex-col space-y-4">
                <div className="h-[26px] justify-start items-center gap-2.5 inline-flex">
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
              <div className="h-[26px] justify-start items-center gap-2.5 inline-flex">
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
                  1123 Albion Rd Ground floor, Etobicoke, ON M9V 1A9, Canada
                </div>
              </div>
            </div>

            <div className="flex flex-col space-y-4">
              <div className="h-[26px] justify-start items-center gap-2.5 inline-flex">
                <div className="w-5 h-5 justify-center items-center flex">
                  <div className="w-5 h-5 text-foreground">
                    <Image alt="Message" loading="lazy" width={20} height={20} decoding="async" className="w-5 h-5" style={{ color: "transparent" }} src="/message.svg" />
                  </div>
                </div>
                <div className="text-foreground text-xl font-medium font-playfair-display capitalize leading-relaxed">Book Us</div>
              </div>
              <div className="flex flex-col gap-2">
                <div className="text-primary text-xl font-normal font-quicksand leading-5">info@astrospiritualistmasteromkar.com</div>
                <div className="text-primary text-xl font-normal font-quicksand leading-5">+1 416-931-4409</div>
                <div className="text-primary text-sm font-semibold font-quicksand capitalize leading-5">
                  For support and bookings please contact us anytime.
                </div>
              </div>
            </div>

          </div>
        </div>

      </div>

      {/* Copyright bar */}
      <div className="h-[42px] w-full py-3 bg-foreground flex-col justify-center items-center gap-2.5 inline-flex">
        <div className="justify-center items-center gap-5 inline-flex text-white text-sm font-normal font-quicksand leading-5">
          <div className="hidden md:block">Terms of service</div>
          <div className="hidden md:blockw-1 h-1 bg-white rounded-full"></div>
          <div className="hidden md:block">Privacy Policy</div>
          <div className="hidden md:blockw-1 h-1 bg-white rounded-full"></div>
          <div className="">© Copyright 2024 by Future IT Touch Pvt. Ltd.</div>
        </div>
      </div>
    </div>
  );
}
