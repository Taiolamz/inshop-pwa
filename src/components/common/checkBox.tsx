import React from "react";
import cn from "clsx";
import Image from "next/image";
import icons from "@/public/icons/icons";

interface CheckboxProps {
    id: string;
    name?: string;
    label?: string;
    checked: boolean;
    // onChange: (checked: boolean) => void;
    onChange: (checked:boolean) => void;
    type?: "checkbox" | "radio"; // Default: "checkbox"
    disabled?: boolean;
    className?: string;
}

const Checkbox: React.FC<CheckboxProps> = ({
    id,
    name,
    label,
    checked,
    onChange,
    type = "checkbox",
    disabled = false,
    className = "",
}) => {
    return (
        <div className={cn("flex items-center gap-3", className)}>
            <div className="relative">
                <input
                    id={id}
                    name={name}
                    type={type}
                    checked={checked}
                    onChange={(e) => onChange(e.target.checked)}
                    disabled={disabled}
                    className="absolute opacity-0 w-0 h-0 peer"
                />
                <div
                    className={cn(
                        "flex items-center justify-center w-5 h-5 border border-gray-600 rounded cursor-pointer peer-focus:ring-2 peer-focus:ring-primary",
                        {
                            "border-gray-300 bg-white": !checked,
                            "border-primary bg-primary": checked,
                            "opacity-50 cursor-not-allowed": disabled,
                        }
                    )}
                >
                    {checked && (
                        <Image src={icons.inputCheckIcon} alt="check" />
                    )}
                </div>
            </div>
            {label && (
                <label
                    htmlFor={id}
                    className={cn("text-sm text-gray-500 w-3/4 font-normal", {
                        "text-gray-400": disabled,
                        "text-black": !disabled,
                    })}
                >
                    {label}
                </label>
            )}
        </div>
    );
};

export default Checkbox;
