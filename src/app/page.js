import Deals from "@/components/Deals/Deals";
import Hero from "@/components/Hero/Hero";
import Listing from "@/components/Listing/Listing";
import Navbar from "@/components/Navbar/Navbar";
import NewsLetter from "@/components/NewsLetter/NewsLetter";

export default function Home() {
  return (
    <>
      <Hero />
      <Listing />
      <Deals />
      <NewsLetter />
    </>
  );
}
