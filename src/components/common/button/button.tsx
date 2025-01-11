import { cn } from '@/src/utils/cn';
import { FC, ButtonHTMLAttributes, ReactNode } from 'react';


interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    variant?: 'primary' | 'secondary' | 'danger' | 'outline';
    size?: 'small' | 'medium' | 'large';
    isLoading?: boolean;
    children: ReactNode;
}

const Button: FC<ButtonProps> = ({
    variant = 'primary',
    size = 'small',
    isLoading = false,
    children,
    className,
    ...props
}) => {
    const buttonClasses = cn(
        'rounded-[90px] w-full font-medium outline-none text-white focus:outline-none',
        {
            // Variants
            'bg-primary focus:ring-blue-300': variant === 'primary',
            'bg-gray-500 text-white hover:bg-gray-600 focus:ring-gray-300': variant === 'secondary',
            'bg-red-500 text-white hover:bg-red-600 focus:ring-red-300': variant === 'danger',
            'border border-primary text-primary hover:bg-gray-100 focus:ring-gray-200': variant === 'outline',

            // Sizes
            'px-4 py-2 text-sm': size === 'small',
            'px-4 py-2 text-base': size === 'medium',
            'px-5 py-3 text-lg': size === 'large',
        },
        className
    );

    return (
        <button className={buttonClasses} disabled={isLoading} {...props}>
            {isLoading ? (
                <span className="flex items-center">
                    <svg
                        className="animate-spin h-5 w-5 mr-2 text-current"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                    >
                        <circle
                            className="opacity-25"
                            cx="12"
                            cy="12"
                            r="10"
                            stroke="currentColor"
                            strokeWidth="4"
                        />
                        <path
                            className="opacity-75"
                            fill="currentColor"
                            d="M4 12a8 8 0 018-8v8H4z"
                        />
                    </svg>
                    Loading...
                </span>
            ) : (
                children
            )}
        </button>
    );
};

export default Button;
