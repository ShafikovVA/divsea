'use client';

import './homeHero.scss';
import Button from '@/components/ui/Button/Button';
import Image from 'next/image';
import nft1 from '@/assets/images/blocks/hero/nft-1.png';
import nft2 from '@/assets/images/blocks/hero/nft-2.png';
import nft3 from '@/assets/images/blocks/hero/nft-3.png';
import nft4 from '@/assets/images/blocks/hero/nft-4.png';
import pattern from '@/assets/images/blocks/hero/pattern.png';
import arrow from '@/assets/images/blocks/hero/arrow.svg?url';
import trustpilots from '@/assets/icons/trustpilots.svg?url';
import star from '@/assets/icons/start.svg?url';

import { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import { debounce } from '@/utils/debounce';
import SliderButtons from '@/components/ui/SliderButtons/SliderButtons';

const slides = [nft1, nft2, nft3, nft4];

const setScale = (index: number, current: number, nextOrientation: boolean) => {
  let scale = 0;
  switch (true) {
    case index === current:
      scale = nextOrientation ? 0 : 0.8;
      break;
    case index === current + 1:
      scale = nextOrientation ? 1 : 0;
      break;
    case index === current + 2:
      scale = nextOrientation ? 0.8 : 0;
      break;
    case index > current - 2:
      scale = nextOrientation ? 0 : 1;
      break;
  }
  return scale;
};

const Hero = () => {
  const [current, setCurrent] = useState<number>(0);
  const slideRefs = useRef<(HTMLDivElement | null)[]>([]);
  const [buttonNextActive, setButtonNextActive] = useState<boolean>(true);
  const [buttonPrevActive, setButtonPrevActive] = useState<boolean>(false);

  useEffect(() => {
    slideRefs.current.forEach((el, index) => {
      let scale = 0;
      if (index === 0) {
        scale = 1;
      }
      if (index === 1) {
        scale = 0.8;
      }
      gsap.set(el, { x: `${index * 100}%`, y: `${index * 36}%`, scale: scale });
    });
  }, []);

  const handleSliderButtonClick = (nextOrientation: boolean) => {
    if (nextOrientation && current >= slideRefs.current.length - 2) {
      setButtonNextActive(false);
      return;
    }
    if (!nextOrientation && current <= 0) {
      setButtonPrevActive(false);
      return;
    }

    if (nextOrientation) {
      slideRefs.current.forEach((el, index) => {
        gsap.to(el, {
          x: `-=${100}%`,
          y: `-=${36}%`,
          scale: setScale(index, current, nextOrientation),
          duration: 0.7,
          ease: 'power2.out',
        });
      });
      setCurrent(current + 1);
      setButtonPrevActive(true);
    } else {
      slideRefs.current.forEach((el, index) => {
        gsap.to(el, {
          x: `+=${100}%`,
          y: `+=${36}%`,
          scale: setScale(index, current, nextOrientation),
          duration: 0.7,
          ease: 'power2.out',
        });
      });
      setCurrent(current - 1);
      setButtonNextActive(true);
    }

    if (nextOrientation && current + 1 === slideRefs.current.length - 2) {
      setButtonPrevActive(true);
      setButtonNextActive(false);
      return;
    }
    if (!nextOrientation && current - 1 === 0) {
      setButtonPrevActive(false);
      setButtonNextActive(true);
      return;
    }
  };
  const debouncedHandleSLiderButtonClick = debounce(
    handleSliderButtonClick,
    250,
  );
  return (
    <section className="hero">
      <div className="container hero__container">
        <div className="hero__left">
          <div className="hero__text">
            <div className="hero__text-underTitle">
              <div className="hero__text-border"></div>
              <span className="hero__text-underTitleText">
                OVER 1M CREATORS
              </span>
            </div>
            <h1 className="hero__title">Discover And Create NFTs</h1>
            <p className="hero__description">
              Discover, Create and Sell NFTs On Our NFT Marketplace With Over
              Thousands Of NFTs And Get a <span>$20 bonus.</span>
            </p>
            <div className="hero__text-buttons">
              <Button className="button-primary uppercase">Explore More</Button>
              <Button className="button-outline uppercase">create NFT</Button>
            </div>
          </div>
          <div className="hero__achieves">
            <div className="hero__achieve">
              <div className="hero__achieve-text">430K+</div>
              <div className="hero__achieve-description">Art Works</div>
            </div>
            <div className="hero__achieve">
              <div className="hero__achieve-text">159K+</div>
              <div className="hero__achieve-description">Creators</div>
            </div>
            <div className="hero__achieve">
              <div className="hero__achieve-text">87K+</div>
              <div className="hero__achieve-description">Collections</div>
            </div>
          </div>
          <div className="hero__review">
            <div className="hero__review-logo">
              <Image src={trustpilots} alt="trustpilots" />
            </div>
            <div className="hero__review-stars">
              <div className="hero__review-star">
                <Image src={star} alt="start" />
              </div>
              <div className="hero__review-star">
                <Image src={star} alt="start" />
              </div>
              <div className="hero__review-star">
                <Image src={star} alt="start" />
              </div>
              <div className="hero__review-star">
                <Image src={star} alt="start" />
              </div>
              <div className="hero__review-star">
                <Image src={star} alt="start" />
              </div>
            </div>
            <span className="hero__review-number">4900+</span>
          </div>
        </div>
        <div className="hero__right">
          <div
            className="hero__decoration"
            style={{ background: `url(${pattern.src})` }}
          ></div>
          <div className="hero__decoration-arrow">
            <Image src={arrow} alt="arrow" />
          </div>
          <div className="slider">
            <div className="slider-wrapper">
              {slides.map((el, index) => (
                <div
                  className="slider-slide"
                  key={`slideElem${index}`}
                  ref={(el) => {
                    slideRefs.current[index] = el;
                  }}
                >
                  <Image src={el} alt="nft-1" />
                </div>
              ))}
            </div>
          </div>
          <SliderButtons
            isNextActive={buttonNextActive}
            isPrevActive={buttonPrevActive}
            onClickNext={() => debouncedHandleSLiderButtonClick(true)}
            onClickPrev={() => debouncedHandleSLiderButtonClick(false)}
          />
        </div>
      </div>
    </section>
  );
};
export default Hero;
