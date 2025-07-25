import './justUnleash.scss';
import Button from '@/components/ui/Button/Button';
import Image from 'next/image';
import img from '@/assets/images/blocks/justUnleash/illustration-left.png';
import React from 'react';

const JustUnleash = () => {
  const textList = [
    'Best Seller All Around World',
    '$2M+ Transections Every Day',
    'Secure Transactions',
    'Exclusive Collections From Sellers',
    'Easy Buying and Selling',
    'Join Our Community',
  ];
  return (
    <section className="justUnleash">
      <div className="container">
        <div className="justUnleash__text">
          <h2 className="justUnleash__title">
            <span>Just Unleash -</span>
            <br /> Your Inner Collector
          </h2>
          <ul className="justUnleash__list">
            {textList.map((listItem, index) => {
              return (
                <li
                  key={`justUnleashList${index}`}
                  className="justUnleash__listItem"
                >
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 20 20"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <circle cx="10" cy="10" r="10" fill="#12141D" />
                    <path
                      d="M15.0429 6.23787C14.9682 6.1625 14.8792 6.10267 14.7812 6.06185C14.6832 6.02102 14.5781 6 14.472 6C14.3658 6 14.2607 6.02102 14.1627 6.06185C14.0647 6.10267 13.9758 6.1625 13.901 6.23787L7.90986 12.2371L5.39278 9.71193C5.31516 9.63695 5.22353 9.57799 5.12312 9.53842C5.02271 9.49886 4.9155 9.47945 4.80759 9.48132C4.69969 9.48318 4.59321 9.50629 4.49423 9.5493C4.39525 9.59232 4.30572 9.65442 4.23074 9.73204C4.15576 9.80966 4.0968 9.90129 4.05723 10.0017C4.01766 10.1021 3.99826 10.2093 4.00012 10.3172C4.00199 10.4251 4.02509 10.5316 4.06811 10.6306C4.11113 10.7296 4.17322 10.8191 4.25084 10.8941L7.33889 13.9821C7.41365 14.0575 7.50259 14.1173 7.60059 14.1582C7.69859 14.199 7.8037 14.22 7.90986 14.22C8.01602 14.22 8.12113 14.199 8.21913 14.1582C8.31712 14.1173 8.40607 14.0575 8.48083 13.9821L15.0429 7.42002C15.1246 7.34471 15.1897 7.25332 15.2343 7.15159C15.2788 7.04986 15.3018 6.94001 15.3018 6.82895C15.3018 6.71789 15.2788 6.60803 15.2343 6.50631C15.1897 6.40458 15.1246 6.31318 15.0429 6.23787Z"
                      fill="#D1EDF5"
                    />
                  </svg>
                  {listItem}
                </li>
              );
            })}
          </ul>
          <div className="justUnleash__buttons">
            <Button className="button-primary">
              Explore More
              <svg
                width="23"
                height="23"
                viewBox="0 0 23 23"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M4.98047 11.0703H17.8973"
                  stroke="white"
                  strokeWidth="1.84503"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M11.4365 4.61328L17.8949 11.0717L11.4365 17.5301"
                  stroke="white"
                  strokeWidth="1.84503"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </Button>
          </div>
        </div>
        <Image
          src={img}
          sizes={`(max-width: 768) 100vh`}
          alt="just unleash image"
        />
        <div className="justUnleash__buttons mobile">
          <Button className="button-primary">
            Explore More
            <svg
              width="23"
              height="23"
              viewBox="0 0 23 23"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M4.98047 11.0703H17.8973"
                stroke="white"
                strokeWidth="1.84503"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M11.4365 4.61328L17.8949 11.0717L11.4365 17.5301"
                stroke="white"
                strokeWidth="1.84503"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default JustUnleash;
