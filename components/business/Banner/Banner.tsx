import { ReactNode } from 'react';
import Image from 'next/image';
import { StaticImport } from 'next/dist/shared/lib/get-img-props';
import './banner.scss';

interface IBanner {
  title: string;
  description?: string;
  buttons?: ReactNode;
  img: string | StaticImport;
}

const Banner = (props: IBanner) => {
  const { title, description, buttons, img } = props;
  return (
    <div className="banner">
      <div className="banner__content">
        <div className="banner__text">
          <div className="banner__title">{title}</div>
          {description && (
            <div className="banner__description">{description}</div>
          )}
        </div>
        {buttons && <div className="banner__buttons">{buttons}</div>}
      </div>
      <div className="banner__imageContainer">
        <Image src={img} alt="banner image" />
        <Image className="banner__imageBlure" src={img} alt="banner image" />
      </div>
    </div>
  );
};

export default Banner;
