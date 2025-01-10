interface ProgressBarProps {
    currentStep: number;
    totalSteps: number;
}

const ProgressBar: React.FC<ProgressBarProps> = ({ currentStep, totalSteps }) => {
    return (
        <div className="flex items-center w-full gap-2">
            {[...Array(totalSteps)].map((_, index) => {
                const isActive = index < currentStep;
                return (
                    <div
                        key={index}
                        className={`flex-1 h-1 rounded-full transition-all duration-500 ${
                            isActive ? 'bg-primary' : 'bg-gray-300'
                        }`}
                    ></div>
                );
            })}
        </div>
    );
};

export default ProgressBar;
