import Hero from "@/components/blocks/Home/Hero/Hero";
import WeeklyTop from "@/components/blocks/Home/WeeklyTop/WeeklyTop";
import TopCollection from "@/components/blocks/Home/TopCollection/TopCollection";
import ExploreMarketplace from "@/components/blocks/Home/ExploreMarketplace/ExploreMarketplace";

export default function Home() {
  return (
    <>
      <Hero />
      <WeeklyTop />
      <TopCollection />
      <ExploreMarketplace />
    </>
  );
}
