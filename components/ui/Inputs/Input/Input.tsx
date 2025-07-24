import { HTMLInputTypeAttribute, RefObject, useState } from 'react';
import './input.scss';
import cn from 'classnames';
import InputTypeContainer from './InputButtonContainer';

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
  children?: React.ReactNode;
}

const Input = (props: IInputProps) => {
  const {
    ref,
    className,
    placeholder,
    icon,
    button,
    onChange,
    style,
    value,
    maxLength = 255,
    type,
    ...rest
  } = props;
  const [isFocused, setIsFocused] = useState(false);
  const [inputValue, setInputValue] = useState<string | undefined>(value);
  const [isAnimationUp, setIsAnimationUp] = useState(false);
  const InputHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    let value = e.target.value;
    if (type === 'number' && maxLength > 0 && value.length > maxLength) {
      value = value.slice(0, maxLength);
    }
    setInputValue(value);
    animatePlaceholder(value);
    if (onChange) {
      e.target.value = value;
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
        'input-focused': isFocused,
        className,
      })}
      style={style}
    >
      {icon && <span className="input__icon">{icon}</span>}
      <InputTypeContainer
        type={button ? 'button' : undefined}
        value={inputValue}
        placeholder={placeholder}
      >
        <input
          onFocus={() => setIsFocused(true)}
          onBlur={() => setIsFocused(false)}
          ref={ref}
          value={inputValue}
          maxLength={maxLength}
          type={type}
          {...rest}
          placeholder={placeholder}
          className={`input`}
          onChange={InputHandler}
        />
      </InputTypeContainer>
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
