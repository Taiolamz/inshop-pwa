"use client";

import Link from "next/link";
import Button from "./button";

interface InteractiveButtonProps {
    onClick?: () => void;
    isLoading?: boolean;
    variant?: 'primary' | 'secondary' | 'danger' | 'outline';
    size?: 'small' | 'medium' | 'large';
    children: React.ReactNode;
    className?: string;
    href?: string; // For internal links only, use Link component for external links.
}

const InteractiveButton: React.FC<InteractiveButtonProps> = ({
    onClick,
    isLoading = false,
    variant = 'primary',
    size = 'small',
    children,
    className,
    href
}) => {
    // If `href` is provided, render the button inside a Link
    const buttonContent = (
        <Button
            isLoading={isLoading}
            variant={variant}
            size={size}
            className={className}
            onClick={onClick}
        >
            {children}
        </Button>
    );

    if (href) {
        return (
            <Link href={href} passHref>
                {buttonContent}
            </Link>
        );
    }

    // If no `href`, just render the button
    return buttonContent;
};

export default InteractiveButton;
