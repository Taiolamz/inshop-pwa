import React from 'react';
import cn from 'clsx';

interface InputProps {
    value: string;
    onChange: React.ChangeEventHandler<HTMLInputElement>;
    placeholder?: string;
    type?: string;
    label?: string;
    name?: string;
    id?: string;
    className?: string;
    error?: boolean; // Optional prop for error state
}

const Input: React.FC<InputProps> = ({
    value,
    onChange,
    placeholder = '',
    type = 'text',
    name,
    id,
    className = '',
    error = false
}) => {
    return (
        <div className="container w-full">
            <input
                value={value}
                onChange={onChange}
                placeholder={placeholder}
                type={type}
                name={name}
                id={id}
                className={cn('rounded-[12px] placeholder:text-sm placeholder:text-gray-500 w-full outline-none border p-4 ', className, { 'text-danger-500': error })}
            />
        </div>
    );
}

export default Input;
