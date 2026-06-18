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
        <Image src="/AstroSanatanaVeer.webp" alt="Astro Sanatana" width={1000} height={1000} className="mx-auto w-full h-full rounded-3xl" />
      </div>
    </div>
  );
}
