import Banner from '@/components/business/Banner/Banner';
import Button from '@/components/ui/Button/Button';
import nft from '@/assets/images/blocks/bannerBlock/nft.png';
import './bannerBlock.scss';

const BannerBlock = () => {
  return (
    <section className="banner-block">
      <div className="container">
        <Banner
          title="Create and Sell NFTs"
          description="World’s Largest NFT Place"
          buttons={
            <>
              <Button className="button-primary color-reverse">
                Explore More
              </Button>
              <Button className="button-outline color-reverse">
                Sell Artwork
              </Button>
            </>
          }
          img={nft}
        />
      </div>
    </section>
  );
};

export default BannerBlock;
