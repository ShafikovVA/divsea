"use client";
import './button-input.scss';
import { useLayoutEffect, useRef, useState, RefObject, useEffect, useCallback, useMemo } from "react";
import Button from "../../Button/Button";
import Input, { IInputProps } from "../Input/Input";

interface IButtonInputProps extends IInputProps {};

const ButtonInput = (props: IButtonInputProps) => {
    const { placeholder, className, onChange } = props;
    const [inputValue, setInputValue] = useState<string | undefined>(undefined);
    const [isAnimationUp, setIsAnimationUp] = useState(false);
    
    const InputHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
        setInputValue(e.target.value);
        animatePlaceholder(e.target.value);
        if (onChange) {
            onChange(e)
        }
    }
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
            {
                inputValue && placeholder && (
                    <span className={`button-input__placeholder-description ${isAnimationUp ? 'animation-up' : ''}`}>{placeholder}</span>
                )
            }
            <Input {...props} className={`button-input ${className}`} onChange={InputHandler} />
            <span className={`button-input ${className} button-input__placeholder`}>
                { inputValue ? inputValue : placeholder }
            </span>
        </div>
    )
}

export default ButtonInput;