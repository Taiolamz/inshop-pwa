'use client'
import { Suspense, useState, useEffect } from 'react';
import dynamic from 'next/dynamic';
import { useRouter, useSearchParams } from 'next/navigation'; // Importing useSearchParams from next/navigation
import Registration from '@/src/components/auth/register';

// Dynamically import components with SSR
const PhoneOrEmailSSR = dynamic(() => import('./(phone-or-email)/ssr'), { ssr: true });
const BasicInfoSSR = dynamic(() => import('./(basic-info)/ssr'), { ssr: true });
const CreateStoreSSR = dynamic(() => import('./(create-store)/ssr'), { ssr: true });

const PhoneOrEmailStep = () => {
  const router = useRouter();
  const searchParams = useSearchParams(); // Access search parameters from URL
  const ui = searchParams.get('ui'); // Get the 'ui' query parameter
  
  const [currentStep, setCurrentStep] = useState(1);
  const totalSteps = 3;

  useEffect(() => {
    if (ui) {
      const step = getNextStep(ui);
      setCurrentStep(step);
    }
  }, [ui]);

  const handleNextStep = () => {
    if (currentStep < totalSteps) {
      const nextStep = currentStep + 1;
      setCurrentStep(nextStep);
      const nextUIState = getNextUIState(nextStep);
      router.push(`/get-started?ui=${nextUIState}`);
    } else {
      router.push(`/product/create`);
    }
  };

  const handlePreviousStep = () => {
    if (currentStep > 1) {
      const prevStep = currentStep - 1;
      setCurrentStep(prevStep);
      const previousUIState = getNextUIState(prevStep);
      router.push(`/get-started?ui=${previousUIState}`);
    } else {
      router.push('/');
    }
  };

  const getNextUIState = (step: number) => {
    switch (step) {
      case 1:
        return 'phone-or-email';
      case 2:
        return 'basic-info';
      case 3:
        return 'create-your-store';
      default:
        return 'phone-or-email';
    }
  };

  const getNextStep = (ui: string) => {
    switch (ui) {
      case 'phone-or-email':
        return 1;
      case 'basic-info':
        return 2;
      case 'create-your-store':
        return 3;
      default:
        return 1;
    }
  };

  const topHeaderText = (ui: string) => {
    switch (ui) {
      case 'phone-or-email':
        return {
          headerText: 'Enter your phone number or email to get started',
          subText: 'We will send you a verification code for confirmation',
        };
      case 'basic-info':
        return {
          headerText: 'Complete profile setup',
          subText: 'Connect your socials for quick setup',
        };
      default:
        return {
          headerText: '',
          subText: '',
        };
    }
  };

  const { headerText, subText } = topHeaderText(ui!);

  if (!ui) {
    return <div>Loading...</div>;
  }

  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Registration
        key={ui} 
        onRouteBack={handlePreviousStep}
        currentStep={currentStep}
        totalSteps={totalSteps}
        onClick={handleNextStep}
        headerText={headerText}
        subText={subText}
      >
        {ui === 'phone-or-email' && <PhoneOrEmailSSR />}
        {ui === 'basic-info' && <BasicInfoSSR />}
        {ui === 'create-your-store' && <CreateStoreSSR />}
      </Registration>
    </Suspense>
  );
};

export default PhoneOrEmailStep;
