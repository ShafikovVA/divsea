import './button.scss';
import { ReactNode } from 'react';
import cn from 'classnames';
import Image from 'next/image';

interface IButton {
  children?: ReactNode;
  className?: string;
  primary?: boolean;
  outline?: boolean;
  onClick?: () => void;
  disabled?: boolean;
  tag?: boolean;
  uppercase?: boolean;
  icon?: ReactNode | string;
}

const Button = (buttonProps: IButton) => {
  const {
    children,
    className,
    onClick,
    disabled,
    primary,
    outline,
    tag,
    uppercase,
    icon,
  } = buttonProps;

  const buttonClass = cn('button', className, {
    'button-primary': primary,
    'button-outline': outline,
    'button-tag': tag,
    uppercase: uppercase,
  });

  return (
    <button
      className={`button ${buttonClass} ${className}`}
      onClick={onClick}
      disabled={disabled}
    >
      {icon && (
        <span className="button__icon">
          {typeof icon === 'string' ? <Image src={icon} alt="icon" /> : icon}
        </span>
      )}
      {children}
    </button>
  );
};

export default Button;
