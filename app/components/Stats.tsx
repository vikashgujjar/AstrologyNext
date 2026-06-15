const stats = [
  { value: "50 years", label: "Of Combined Industry Experience" },
  { value: "1M+ Clients", label: "Enlightened and Guided" },
  { value: "30+ Countries", label: "Served Worldwide" },
];

export default function Stats() {
  return (
    <div className="py-6">
      <div className="flex text-secondary justify-center w-full gap-6 md:gap-20">
        {stats.map((stat) => (
          <div
            key={stat.value}
            className="flex flex-col justify-start items-start w-1/3 md:w-auto md:justify-center md:items-center gap-2"
          >
            <div className=" md:text-center  text-md sm:2xl md:text-3xl font-bold font-playfair-display ">
              {stat.value}
            </div>
            <div className=" md:text-center  text-xs sm:text-sm md:text-lg font-medium font-quicksand ">
              {stat.label}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
