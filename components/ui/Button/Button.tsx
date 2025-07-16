import './button.scss';
import { ReactNode } from 'react';
import cn from 'classnames';

interface IButton {
  children?: ReactNode;
  className?: string;
  primary?: boolean;
  outline?: boolean;
  onClick?: () => void;
  disabled?: boolean;
}

const Button = (buttonProps: IButton) => {
  const { children, className, onClick, disabled, primary, outline } = buttonProps;

  const buttonClass = cn('button', className, {
    'button-primary': primary,
    'button-outline': outline,
  });

  return (
    <button
      className={`button ${buttonClass} ${className}`}
      onClick={onClick}
      disabled={disabled}
    >
      {children}
    </button>
  );
};

export default Button;
