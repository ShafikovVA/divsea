'use client';
import './button-input.scss';
import { useRef, useState } from 'react';
import Input, { IInputProps } from '../Input/Input';
import cn from 'classnames';
import Image from 'next/image';

interface IButtonInputProps extends IInputProps {
  primary?: boolean;
  outline?: boolean;
  icon?: React.ReactNode | string;
}

const ButtonInput = (props: IButtonInputProps) => {
  const imageRef = useRef<HTMLSpanElement>(null);
  const { placeholder, className, onChange, icon, ...rest } = props;
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
    <div className="button-input__container">
      {inputValue && placeholder && (
        <span
          className={cn('button-input__placeholder-description', {
            'animation-up': isAnimationUp,
          })}
        >
          {placeholder}
        </span>
      )}
      <Input
        {...rest}
        value={inputValue}
        placeholder={placeholder}
        className={`button-input ${className}`}
        onChange={InputHandler}
        style={{
          paddingLeft: imageRef.current?.clientWidth
            ? imageRef.current?.clientWidth + 10
            : 'initial',
        }}
      />
      {icon && (
        <span ref={imageRef} className={`button-input__icon`}>
          {typeof icon === 'string' ? <Image src={icon} alt="icon" /> : icon}
        </span>
      )}
      <p className={`button-input button-input__placeholder`}>
        {icon && (
          <span
            className={`button-input__icon`}
            style={{
              paddingLeft: imageRef.current?.clientWidth
                ? imageRef.current?.clientWidth + 10
                : 'initial',
            }}
          >
            {typeof icon === 'string' ? <Image src={icon} alt="icon" /> : icon}
          </span>
        )}
        {inputValue ? inputValue : placeholder}
      </p>
    </div>
  );
};

export default ButtonInput;
