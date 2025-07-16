'use client';
import { useEffect, useRef } from 'react';
import './modal.scss';
import useClickOutside from '@/lib/hooks/ui/useClickOutside';

interface IModalProps {
  title?: string;
  children?: React.ReactNode;
}

const Modal = ({ title, children }: IModalProps) => {
  const modalRef = useRef<HTMLDivElement>(null);
  useClickOutside(modalRef, () => {});
  useEffect(() => {
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, []);
  return (
    <div className="modal" ref={modalRef}>
      <div className="container">
        <div className="modal__content">
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
