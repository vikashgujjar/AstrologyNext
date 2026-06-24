export type Location = {
  slug: string;
  name: string;
  image: string;
  mapQuery: string;
};

export const locations: Location[] = [
  { name: "California",        slug: "california",        image: "/locationsImg/California.webp",      mapQuery: "California, USA" },
  { name: "New York",          slug: "new-york",          image: "/locationsImg/NewYork.webp",         mapQuery: "New York, NY, USA" },
  { name: "Florida",           slug: "florida",           image: "/locationsImg/Florida.webp",         mapQuery: "Florida, USA" },
  { name: "Georgia",           slug: "georgia",           image: "/locationsImg/Georgia.webp",         mapQuery: "Georgia, USA" },
  { name: "Connecticut",       slug: "connecticut",       image: "/locationsImg/Connecticut.webp",     mapQuery: "Connecticut, USA" },
  { name: "New Jersey",        slug: "new-jersey",        image: "/locationsImg/NewJersey.webp",       mapQuery: "New Jersey, USA" },
  { name: "Boston",            slug: "boston",            image: "/locationsImg/Boston.webp",          mapQuery: "Boston, MA, USA" },
  { name: "Philadelphia",      slug: "philadelphia",      image: "/locationsImg/Philadelphia.webp",    mapQuery: "Philadelphia, PA, USA" },
  { name: "Texas",             slug: "texas",             image: "/locationsImg/Texas.webp",           mapQuery: "Texas, USA" },
  { name: "Miami",             slug: "miami",             image: "/locationsImg/Miami.webp",           mapQuery: "Miami, FL, USA" },
  { name: "Jacksonville",      slug: "jacksonville",      image: "/locationsImg/Jacksonville.webp",    mapQuery: "Jacksonville, FL, USA" },
  { name: "Baltimore",         slug: "baltimore",         image: "/locationsImg/Baltimore.webp",       mapQuery: "Baltimore, MD, USA" },
  { name: "Chicago",           slug: "chicago",           image: "/locationsImg/Chicago.webp",         mapQuery: "Chicago, IL, USA" },
  { name: "Seattle",           slug: "seattle",           image: "/locationsImg/Seattle.webp",         mapQuery: "Seattle, WA, USA" },
  { name: "Virginia",          slug: "virginia",          image: "/locationsImg/Virginia.webp",        mapQuery: "Virginia, USA" },
  { name: "Atlanta",           slug: "atlanta",           image: "/locationsImg/Atlanta.webp",         mapQuery: "Atlanta, GA, USA" },
  { name: "San Diego",         slug: "san-diego",         image: "/locationsImg/SanDiego.webp",        mapQuery: "San Diego, CA, USA" },
  { name: "Los Angeles",       slug: "los-angeles",       image: "/locationsImg/LosAngeles.webp",      mapQuery: "Los Angeles, CA, USA" },
  { name: "Fresno, CA",        slug: "fresno-ca",         image: "/locationsImg/Fresno.webp",          mapQuery: "Fresno, CA, USA" },
  { name: "Sacramento, CA",    slug: "sacramento-ca",     image: "/locationsImg/Sacramento.webp",      mapQuery: "Sacramento, CA, USA" },
  { name: "San Jose, CA",      slug: "san-jose-ca",       image: "/locationsImg/SanJose.webp",         mapQuery: "San Jose, CA, USA" },
  { name: "Long Beach, CA",    slug: "long-beach-ca",     image: "/locationsImg/LongBeach.webp",       mapQuery: "Long Beach, CA, USA" },
  { name: "San Francisco, CA", slug: "san-francisco-ca",  image: "/locationsImg/SanFrancisco.webp",    mapQuery: "San Francisco, CA, USA" },
  { name: "Oakland, CA",       slug: "oakland-ca",        image: "/locationsImg/Oakland.webp",         mapQuery: "Oakland, CA, USA" },
  { name: "Irvine, CA",        slug: "irvine-ca",         image: "/locationsImg/Irvine.webp",          mapQuery: "Irvine, CA, USA" },
  { name: "Bakersfield, CA",   slug: "bakersfield-ca",    image: "/locationsImg/Bakersfield.webp",     mapQuery: "Bakersfield, CA, USA" },
  { name: "Santa Ana, CA",     slug: "santa-ana-ca",      image: "/locationsImg/SantaAna.webp",        mapQuery: "Santa Ana, CA, USA" },
  { name: "Anaheim, CA",       slug: "anaheim-ca",        image: "/locationsImg/Anaheim.webp",         mapQuery: "Anaheim, CA, USA" },
  { name: "Chula Vista, CA",   slug: "chula-vista-ca",    image: "/locationsImg/ChulaVista.webp",      mapQuery: "Chula Vista, CA, USA" },
  { name: "Stockton, CA",      slug: "stockton-ca",       image: "/locationsImg/Stockton.webp",        mapQuery: "Stockton, CA, USA" },
  { name: "Fremont, CA",       slug: "fremont-ca",        image: "/locationsImg/Fremont.webp",         mapQuery: "Fremont, CA, USA" },
  { name: "Riverside, CA",     slug: "riverside-ca",      image: "/locationsImg/Riverside.webp",       mapQuery: "Riverside, CA, USA" },
  { name: "Santa Clarita, CA", slug: "santa-clarita-ca",  image: "/locationsImg/SantaClarita.webp",    mapQuery: "Santa Clarita, CA, USA" },
];

export function getLocationBySlug(slug: string): Location | undefined {
  return locations.find((l) => l.slug === slug);
}

export function getAllLocationSlugs(): string[] {
  return locations.map((l) => l.slug);
}
