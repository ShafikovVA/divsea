'use client';
import { useEffect, useRef } from 'react';
import './modal.scss';
import useClickOutside from '@/lib/hooks/ui/useClickOutside';
import { useAppDispatch } from '@/store/hooks';
import { hideModal } from '@/store/reducers/ui/modalsReduser';

interface IModalProps {
  index: number;
  title?: string;
  children?: React.ReactNode;
}

const Modal = ({ index, title, children }: IModalProps) => {
  const dispatch = useAppDispatch();
  const modalContentRef = useRef<HTMLDivElement>(null);
  const handleClose = () => {
    dispatch(hideModal(index));
  };
  useClickOutside(modalContentRef, handleClose);
  useEffect(() => {
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, []);
  return (
    <div className="modal">
      <div className="container">
        <div className="modal__content" ref={modalContentRef}>
          {title && (
            <div className="modal__content-title">
              <h2>{title}</h2>
            </div>
          )}
          <div className="modal__content-body">{children}</div>
        </div>
      </div>
    </div>
  );
};

export default Modal;
