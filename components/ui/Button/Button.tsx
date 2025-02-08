import './button.scss';
import {ReactNode} from "react";

interface IButton {
  children?: ReactNode;
  className?: string;
  onClick?: () => void;
  disabled?: boolean;
}

const Button = (buttonProps: IButton) => {
  const {children, className, onClick, disabled} = buttonProps;

  return (
    <button className={`button ${className}`} onClick={onClick} disabled={disabled}>
      {children}
    </button>
  );
}

export default Button;