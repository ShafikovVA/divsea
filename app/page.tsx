import Hero from '@/components/blocks/Home/Hero/Hero';
import WeeklyTop from '@/components/blocks/Home/WeeklyTop/WeeklyTop';
import TopCollection from '@/components/blocks/Home/TopCollection/TopCollection';
import ExploreMarketplace from '@/components/blocks/Home/ExploreMarketplace/ExploreMarketplace';
import JustUnleash from '@/components/blocks/Home/JustUnleash/JustUnleash';
import BannerBlock from '@/components/blocks/Home/BannerBlock/BannerBlock';
import { getNfts, getExploreMarketplace } from './page.server';

export default async function Home() {
  const nfts = await getNfts();
  const exploreMarketplace = await getExploreMarketplace();
  return (
    <>
      <Hero />
      <WeeklyTop nfts={nfts} />
      <TopCollection />
      <ExploreMarketplace nfts={exploreMarketplace} />
      <JustUnleash />
      <BannerBlock />
    </>
  );
}
