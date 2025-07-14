import { HTMLInputTypeAttribute, RefObject } from 'react';
import './input.scss';

export interface IInputProps {
    ref?: RefObject<HTMLInputElement>;
    type?: HTMLInputTypeAttribute;
    className?: string;
    placeholder?: string;
    name?: string;
    value?: string;
    onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const Input = (props: IInputProps) => {
    const { ref, className } = props;
    return (
        <input ref={ref} {...props} className={`input ${className}`} />
    )
}

export default Input;