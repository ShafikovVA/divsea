import './product-detail-price.scss';
import ETHIcon from '@/assets/icons/ethereum-big.svg';
import moment from 'moment';

interface IProductDetailPriceProps {
  price: number;
  date: string;
}

const ProductDetailPrice = ({ price, date }: IProductDetailPriceProps) => {
  const dateformated = moment(date).format('MMM D, YYYY, hh:mm');

  return (
    <div className="product-detail-card__content-price">
      <div className="product-detail-card__content-price-item">
        <p>Current Bid</p>
        <p>
          <ETHIcon />
          {price}
        </p>
      </div>
      <div className="product-detail-card__content-price-item date">
        <p>End in</p>
        <p>{dateformated}</p>
      </div>
    </div>
  );
};

export default ProductDetailPrice;
