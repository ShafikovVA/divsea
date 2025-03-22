import Hero from '@/components/blocks/Home/Hero/Hero';
import WeeklyTop from '@/components/blocks/Home/WeeklyTop/WeeklyTop';
import TopCollection from '@/components/blocks/Home/TopCollection/TopCollection';
import ExploreMarketplace from '@/components/blocks/Home/ExploreMarketplace/ExploreMarketplace';
import JustUnleash from '@/components/blocks/Home/JustUnleash/JustUnleash';

export default function Home() {
  return (
    <>
      <Hero />
      <WeeklyTop />
      <TopCollection />
      <ExploreMarketplace />
      <JustUnleash />
    </>
  );
}
