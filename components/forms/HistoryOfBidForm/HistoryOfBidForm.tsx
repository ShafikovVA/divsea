'use client';
import { IUserBid } from '@/types/nfts/IUserBid';
import './history-of-bid-form.scss';
import UsersBidList from './UsersBidList/UsersBidList';
import Button from '@/components/ui/Button/Button';
import Cardholder from '@/assets/icons/cardholder.svg';
import InputsContainer from '@/components/ui/Inputs/SolderedInputContainer/InputsContainer';
import Select from '@/components/ui/Select/Select';
import Input from '@/components/ui/Inputs/Input/Input';

interface IHistoryOfBidModalProps {
  data: IUserBid[];
}

const HistoryOfBidModal = ({ data }: IHistoryOfBidModalProps) => {
  return (
    <div className="history-of-bid-modal">
      <div className="history-of-bid-modal__header">
        <h2 className="history-of-bid-modal__title">History of Bid</h2>
        <div className="history-of-bid-modal__date">Oct 14, 2022</div>
      </div>
      <div className="history-of-bid-modal__userList">
        <UsersBidList usersBidList={data} />
      </div>
      <div className="history-of-bid-modal__controls">
        <InputsContainer soldered>
          <Select
            primary
            defaultValue={{ label: 'ETH', value: 'eth' }}
            options={[
              { label: 'ETH', value: 'eth' },
              { label: 'USDT', value: 'usdt' },
              { label: 'USDC', value: 'usdc' },
            ]}
          />
          <Input maxLength={19} type="number" />
        </InputsContainer>
        <Button primary icon={<Cardholder />}>
          Submit
        </Button>
      </div>
    </div>
  );
};

export default HistoryOfBidModal;
