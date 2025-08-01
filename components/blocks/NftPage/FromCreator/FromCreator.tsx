'use client';
import './from-creator.scss';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import ProductCard from '@/components/business/NftCard/NftCard';
import { Navigation } from 'swiper/modules';
import { INftCard } from '@/types/nfts/INftCard';

interface IWeeklyTopProps {
  nfts: INftCard[];
}

const FromCreator = ({ nfts }: IWeeklyTopProps) => {
  const swiperBreakpointsConfig = {
    0: {
      spaceBetween: 28.13,
    },
    720: {
      spaceBetween: 28.34,
    },
    1366: {
      spaceBetween: 39.84,
    },
  };

  return (
    <section className="from-creator">
      <div className="container">
        <h2>From Creator</h2>
        <Swiper
          spaceBetween={40}
          slidesPerView="auto"
          modules={[Navigation]}
          initialSlide={3}
          breakpoints={swiperBreakpointsConfig}
          navigation={{
            nextEl: '.from-creator__next',
            prevEl: '.from-creator__prev',
          }}
        >
          {nfts.map((nft) => (
            <SwiperSlide key={nft.id}>
              <ProductCard {...nft} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};
export default FromCreator;
