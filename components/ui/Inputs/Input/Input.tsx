import { HTMLInputTypeAttribute, RefObject, useState } from 'react';
import './input.scss';
import cn from 'classnames';

export interface IInputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  ref?: RefObject<HTMLInputElement>;
  type?: HTMLInputTypeAttribute;
  className?: string;
  placeholder?: string;
  name?: string;
  value?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  icon?: React.ReactNode | string;
  button?: 'primary' | 'outline';
}

const Input = (props: IInputProps) => {
  const { ref, className, placeholder, icon, button, onChange, ...rest } =
    props;
  const [inputValue, setInputValue] = useState<string | undefined>(undefined);
  const [isAnimationUp, setIsAnimationUp] = useState(false);
  const InputHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
    animatePlaceholder(e.target.value);
    if (onChange) {
      onChange(e);
    }
  };
  const animatePlaceholder = (inputValue: string) => {
    if (inputValue) {
      if (isAnimationUp) {
        return;
      }
      const timeout = setTimeout(() => {
        clearTimeout(timeout);
        setIsAnimationUp(true);
      }, 100);
    } else {
      setIsAnimationUp(false);
    }
  };

  return (
    <label
      className={cn('input__container', {
        'button-input': button,
        'button-input-outline': button === 'outline',
        'button-input-primary': button === 'primary',
        className,
      })}
    >
      {icon && <span className="input__icon">{icon}</span>}
      <input
        ref={ref}
        {...rest}
        placeholder={placeholder}
        className={`input`}
        onChange={InputHandler}
      />
      {inputValue && placeholder && (
        <span
          className={cn('input__placeholder', {
            'animation-up': isAnimationUp,
          })}
        >
          {placeholder}
        </span>
      )}
    </label>
  );
};

export default Input;
