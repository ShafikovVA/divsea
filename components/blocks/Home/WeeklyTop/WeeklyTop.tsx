'use client';
import './weeklyTop.scss';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import ProductCard from '@/components/business/ProductCard/ProductCard';
import { Navigation } from 'swiper/modules';
import SliderButtons from '@/components/ui/SliderButtons/SliderButtons';

const WeeklyTop = () => {
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
    <section className="weekly-top">
      <h2>Weekly - Top NFT</h2>
      <Swiper
        spaceBetween={40}
        slidesPerView="auto"
        centeredSlides={true}
        modules={[Navigation]}
        initialSlide={3}
        breakpoints={swiperBreakpointsConfig}
        navigation={{
          nextEl: '.weekly-top__next',
          prevEl: '.weekly-top__prev',
        }}
      >
        <SwiperSlide>
          <ProductCard />
        </SwiperSlide>
        <SwiperSlide>
          <ProductCard />
        </SwiperSlide>
        <SwiperSlide>
          <ProductCard />
        </SwiperSlide>
        <SwiperSlide>
          <ProductCard />
        </SwiperSlide>
        <SwiperSlide>
          <ProductCard />
        </SwiperSlide>
        <SwiperSlide>
          <ProductCard />
        </SwiperSlide>
        <SwiperSlide>
          <ProductCard />
        </SwiperSlide>
      </Swiper>
      <SliderButtons
        cssMode={true}
        nextButtonClassName="weekly-top__next"
        prevButtonClassName="weekly-top__prev"
      />
    </section>
  );
};
export default WeeklyTop;
