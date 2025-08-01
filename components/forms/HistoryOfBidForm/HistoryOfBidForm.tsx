'use client';
import { IUserBid } from '@/types/nfts/IUserBid';
import './history-of-bid-form.scss';
import UsersBidList from './UsersBidList/UsersBidList';
import Button from '@/components/ui/Button/Button';
import Cardholder from '@/assets/icons/cardholder.svg';
import InputsContainer from '@/components/ui/Inputs/SolderedInputContainer/InputsContainer';
import Select from '@/components/ui/Select/Select';
import Input from '@/components/ui/Inputs/Input/Input';
import cn from 'classnames';

interface IHistoryOfBidFormProps {
  data: IUserBid[];
  min?: boolean;
}

const HistoryOfBidForm = ({ data, min }: IHistoryOfBidFormProps) => {
  return (
    <div className={cn('history-of-bid-form', { min })}>
      <div className="history-of-bid-form__header">
        <h2 className="history-of-bid-form__title">History of Bid</h2>
        <div className="history-of-bid-form__date">Oct 14, 2022</div>
      </div>
      <div className="history-of-bid-form__userList">
        <UsersBidList usersBidList={data} />
      </div>
      <div className="history-of-bid-form__controls">
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

export default HistoryOfBidForm;
