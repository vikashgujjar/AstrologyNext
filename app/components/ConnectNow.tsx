import Link from "next/link";

export default function ConnectNow() {
  return (
    <div className="flex justify-center items-center w-full">
      <Link href="/connect-with-astro-sanatana">
        <button className="inline-flex items-center py-5 justify-center gap-2 whitespace-nowrap rounded-full text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 bg-secondary text-white shadow-sm hover:bg-secondary/80 h-10 px-8">
          Connect now
        </button>
      </Link>
    </div>
  );
}
