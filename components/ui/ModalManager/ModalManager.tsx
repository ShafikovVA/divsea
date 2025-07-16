import { RootState } from '@/store';
import { IModal, ModalTypes } from '@/types/modals/IModal';
import { useDispatch, useSelector } from 'react-redux';
import Modal from '../Modal/Modal';
import HistoryOfBidModal from '@/components/modals/HistoryOfBidModal/HistoryOfBidModal';

const ModalContent = ({ modal }: { modal: IModal }) => {
  switch (modal.type) {
    case ModalTypes.HISTORY_OF_BID:
      return <HistoryOfBidModal data={modal.data} />;
    default:
      return null;
  }
};

const ModalManager = () => {
  // const modals = useSelector((state: RootState) => state.modal);
  return (
    <div>
      {/* {modals.map((modal, index) => (
        <Modal key={index}>
          <ModalContent modal={modal} />
        </Modal>
      ))} */}
      <Modal>
        <HistoryOfBidModal data={[]} />
      </Modal>
    </div>
  );
};

export default ModalManager;
