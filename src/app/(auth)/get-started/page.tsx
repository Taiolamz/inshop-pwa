'use client';

import { Suspense, useState } from 'react';
import dynamic from 'next/dynamic';
import { useRouter } from 'next/navigation';
import Registration from '@/src/components/auth/register';

const PhoneOrEmailSSR = dynamic(() => import('./(phone-or-email)/ssr'), { ssr: true });
const BasicInfoSSR = dynamic(() => import('./(basic-info)/ssr'), { ssr: true });
const CreateStoreSSR = dynamic(() => import('./(create-store)/ssr'), { ssr: true });

const PhoneOrEmailStep = () => {
  const router = useRouter();
  const [currentStep, setCurrentStep] = useState(1);
  const totalSteps = 3;

  // Function to get query parameter by name
  const getQueryParam = (name: string): string | null => {
    if (typeof window !== 'undefined') {
      const params = new URLSearchParams(window.location.search);
      return params.get(name);
    }
    return null;
  };

  const ui = getQueryParam('ui');

  const handleNextStep = () => {
    if (currentStep < 3) {
      setCurrentStep(currentStep + 1);
      router.push(`/get-started?ui=${getNextUIState(currentStep + 1)}`);
    } else {
      router.push(`/product/create`);
    }
  };

  const handlePreviousStep = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
      router.push(`/get-started?ui=${getNextUIState(currentStep - 1)}`);
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

  const { headerText, subText } = topHeaderText(ui || '');

  if (!ui) {
    return <div>Loading...</div>;
  }

  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Registration
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
