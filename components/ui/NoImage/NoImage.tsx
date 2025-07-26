import './no-image.scss';
import Image from 'next/image';
import noImage from '@/assets/images/no-image.png';

const NoImage = () => {
  return (
    <Image
      className="no-image"
      src={noImage}
      alt="No Image"
      width={100}
      height={100}
    />
  );
};

export default NoImage;
