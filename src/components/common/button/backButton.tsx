import React from 'react'
import Image from 'next/image'
import icons from '@/public/icons/icons'

interface BackButtonProps {
    onRouteBack: () => void
}

const BackButton: React.FC<BackButtonProps> = ({ onRouteBack }) => {
    return (
        <button 
            className="flex items-center justify-center p-2 rounded-lg hover:bg-gray-200 transition duration-200" 
            onClick={onRouteBack} 
            aria-label="Go back"
        >
            <Image 
                src={icons.backIcon} 
                alt="Back icon" 
                width={11.67} 
                height={11.67} 
            />
        </button>
    )
}

export default BackButton
