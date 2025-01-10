import BackButton from '@/src/components/common/button/backButton'
import InteractiveButton from '@/src/components/common/button/interactiveButton'
import ProgressBar from '@/src/components/common/progressBar'
import React, { ReactNode } from 'react'

const Registration = ({ onRouteBack, currentStep, totalSteps, children, onClick, headerText, subText }: { onRouteBack: () => void, currentStep: number, totalSteps: number, children: ReactNode, onClick: () => void, headerText?: string, subText?: string }) => {
    return (
        <div className='h-screen flex flex-col bg-white'>
            <div className="p-5 flex flex-col flex-grow">
                <div className="flex gap-2 items-center">
                    <BackButton onRouteBack={onRouteBack} />
                    <p className="text-black font-medium text-base">Get Started</p>
                </div>

                <div className="mt-5">
                    <ProgressBar currentStep={currentStep} totalSteps={totalSteps} />
                    <h1 className="text-2xl font-medium mt-5 w-4/5">{headerText}</h1>
                    <p className="mt-3 text-sm w-4/5">{subText}</p>

                    {children}

                </div>

                <div className="flex-grow" />
            </div>

            <hr />
            <div className="p-3 my-5 bg-white">
                <InteractiveButton variant="primary" onClick={onClick}>
                    Continue
                </InteractiveButton>
            </div>
        </div >
    )
}

export default Registration