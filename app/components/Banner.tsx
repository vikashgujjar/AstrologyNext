import Image from "next/image";

export default function Banner() {
  return (
    <div className="pt-0">
      <div className="py-6 px-4 pb-0 sm:px-10 md:px-14 lg:px-20 pt-0 w-full">
        {/* <div className="bg-gradient-to-tr relative from-[#1a0f39] via-[#2c1359] to-[#4e1457]  flex rounded-3xl items-center overflow-hidden">
          <div className="flex flex-col items-start p-7 sm:p-10 md:p-20 basis-2/3">
            <h1 className="bg-gradient-to-r from-[#AB8CFF] to-foreground inline-block  text-transparent bg-clip-text text-2xl sm:text-4xl md:text-5xl text-nowrap">
              Astro Sanatana
            </h1>
            <span className="font-quicksand text-sm sm:text-xl md:text-3xl text-white font-medium mt-4">
              Trusted astrologer to the world&apos;s most respected families.
            </span>
          </div>
          <div className="flex justify-end basis-1/3 absolute -bottom-6 sm:-bottom-8 md:-bottom-10 -right-6 md:right-2">
            <Image
              alt="Astro Sanatana"
              width={400}
              height={400}
              decoding="async"
              className="object-contain h-40 relative w-40 sm:h-60 sm:w-60 md:w-80 md:h-80"
              style={{ color: "transparent" }}
              src="/SanatanaVeer.png"
            />
          </div>
        </div> */}
        {/* ── Rating strip ── */}
        <div className="relative -mt-3 mb-6">
          <div className="relative max-w-fit mx-auto rounded-full overflow-hidden border border-foreground">
            {/* Gradient bg */}
            <div className="absolute inset-0 bg-foreground/10 " />
            {/* Sheen */}
            {/* <div className="absolute inset-0 bg-linear-to-b from-white/15 to-transparent" /> */}
            {/* Circle decorations inside strip */}
            {/* <svg className="absolute inset-0 w-full h-full pointer-events-none" aria-hidden="true">
              <circle cx="10%" cy="50%" r="35" fill="white" opacity="0.06" />
              <circle cx="30%" cy="50%" r="50" fill="white" opacity="0.04" />
              <circle cx="85%" cy="50%" r="40" fill="white" opacity="0.06" />
              <circle cx="100%" cy="50%" r="30" fill="white" opacity="0.04" />
            </svg> */}

            <div className="relative flex flex-nowrap items-center justify-center gap-3 px-5 py-3">
              {/* Stars */}
              <div className="flex gap-0">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="#FFAC33">
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                  </svg>
                ))}
              </div>
              <div className="text-center">
                <p className="font-quicksand font-semibold text-black text-xs sm:text-sm md:text-base tracking-wide leading-tight">
                  5 Stars By 5k+ Verified Clients
                </p>
              </div>
            </div>
          </div>
        </div>
        <Image src="/AstroSanatanaVeer.webp" alt="Astro Sanatana" width={1920} height={1920} className="mx-auto w-full h-full rounded-3xl" />
      </div>
    </div>
  );
}
