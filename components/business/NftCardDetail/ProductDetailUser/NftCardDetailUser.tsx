import Image from 'next/image';
import './nft-card-detail-user.scss';
import userPlaceholderImage from '@/assets/images/user/image_placeholder.png';

interface ProductDetailUserProps {
  image: string | null;
  title: string;
  status: 'creator' | 'owner';
}

const getStatus = (status: 'creator' | 'owner') => {
  switch (status) {
    case 'creator':
      return 'Created by';
    case 'owner':
      return 'Owned by';
    default:
      return 'Created by';
  }
};

const NftCardDetailUser = ({
  image,
  title,
  status,
}: ProductDetailUserProps) => {
  const statusText = getStatus(status);

  return (
    <div className="product-detail-user">
      <div className="product-detail-user__image">
        <Image src={image || userPlaceholderImage} fill alt={title} />
      </div>
      <div className="product-detail-user__content">
        <p className="product-detail-user__status">{statusText}</p>
        <p className="product-detail-user__title">{title}</p>
      </div>
    </div>
  );
};

export default NftCardDetailUser;
