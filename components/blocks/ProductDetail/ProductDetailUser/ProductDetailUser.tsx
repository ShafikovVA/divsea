// import Image from 'next/image';
import './product-detail-user.scss';

interface ProductDetailUserProps {
  //   image: string;
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

const ProductDetailUser = ({
  //   image,
  title,
  status,
}: ProductDetailUserProps) => {
  const statusText = getStatus(status);

  return (
    <div className="product-detail-user">
      <div className="product-detail-user__image">
        {/* <Image src={image} alt={title} /> */}
      </div>
      <div className="product-detail-user__content">
        <p className="product-detail-user__status">{statusText}</p>
        <p className="product-detail-user__title">{title}</p>
      </div>
    </div>
  );
};

export default ProductDetailUser;
