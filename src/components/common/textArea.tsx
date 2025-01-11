import React from 'react';
import cn from 'clsx';

interface TextAreaProps {
    value: string;
    onChange: React.ChangeEventHandler<HTMLTextAreaElement>;
    placeholder?: string;
    label?: string;
    name?: string;
    id?: string;
    className?: string;
    error?: boolean; 
    errorMessage?: string;
}

const TextArea: React.FC<TextAreaProps> = ({
    value,
    onChange,
    placeholder = '',
    label,
    name,
    id,
    className = '',
    error = false,
    errorMessage = '',
}) => {
    return (
        <div className="w-full -mb-1">
            {label && (
                <label
                    htmlFor={id || name}
                    className="block mb-2 text-sm font-medium text-gray-700"
                >
                    {label}
                </label>
            )}
            <textarea
                value={value}
                onChange={onChange}
                placeholder={placeholder}
                name={name}
                id={id}
                className={cn(
                    'rounded-[12px] placeholder:text-sm placeholder:text-gray-500 w-full outline-none border p-3',
                    className,
                    {
                        'border': !error,
                        'border-red-500': error, 
                    }
                )}
                aria-invalid={error} 
            />
            {error && errorMessage && (
                <p className="mt-1 text-sm text-red-500">{errorMessage}</p>
            )}
        </div>
    );
};

export default TextArea;
