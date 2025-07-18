'use client';
import { IModal, ModalTypes } from '@/types/modals/IModal';
import Modal from '../Modal/Modal';
import HistoryOfBidForm from '@/components/forms/HistoryOfBidForm/HistoryOfBidForm';
import { useAppSelector } from '@/store/hooks';

const ModalContent = ({ modal }: { modal: IModal }) => {
  const { type, data } = modal;

  switch (type) {
    case ModalTypes.HISTORY_OF_BID:
      return <HistoryOfBidForm data={data[ModalTypes.HISTORY_OF_BID]} />;
    default:
      return null;
  }
};

const ModalManager = () => {
  const modals = useAppSelector((state) => state.modal);

  return (
    <div>
      {modals.map((modal, index) => (
        <Modal index={index} key={index}>
          <ModalContent modal={modal} />
        </Modal>
      ))}
    </div>
  );
};

export default ModalManager;
