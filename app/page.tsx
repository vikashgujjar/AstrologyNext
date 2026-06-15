import Banner from "./components/Banner";
import ConnectCards from "./components/ConnectCards";
import Solutions from "./components/Solutions";
import Locations from "./components/Locations";
import GalleryCarousel from "./components/GalleryCarousel";
import TeamCarousel from "./components/TeamCarousel";
import TeamGalleryCarousel from "./components/TeamGalleryCarousel";
import Stats from "./components/Stats";
import ConnectNow from "./components/ConnectNow";
import HonorableFeatures from "./components/HonorableFeatures";

export default function Home() {
  return (
    <main className="flex flex-col flex-1">
      <Banner />
      <ConnectCards />
      <GalleryCarousel />
      <TeamCarousel />
      <TeamGalleryCarousel />
      <Solutions />
      <Stats />
      <ConnectNow />
      <Locations />
      <HonorableFeatures />
    </main>
  );
}
