'use client';

import { useState, useEffect } from 'react';
import dynamic from 'next/dynamic';
import { useRouter, useSearchParams } from 'next/navigation';
import BasicInfoStepSSG from './(basic-info)/ssg';
import Registration from '../../../components/auth/register';

const PhoneOrEmailSSR = dynamic(() => import('./(phone-or-email)/ssr'), { ssr: true });
const BasicInfoSSR = dynamic(() => import('./(basic-info)/ssr'), { ssr: true })
const CreateStoreSSR = dynamic(() => import('./(create-store)/ssr'), { ssr: true })
// const PhoneOrEmailSSG = dynamic(() => import('./(phone-or-email)/ssg'), { ssr: false });

const PhoneOrEmailStep = () => {
  const searchParams = useSearchParams();
  const [useSSR, setUseSSR] = useState(true);
  const step = searchParams.get('step') as string;
  const router = useRouter();
  const ui = searchParams.get('ui') as string | undefined;

  useEffect(() => {
    if (ui === 'phone-or-email') {
      setUseSSR(true);
    } else {
      setUseSSR(false);
    }
  }, []);

  const [currentStep, setCurrentStep] = useState(1);
  const totalSteps = 3;

  

  const handleNextStep = () => {
    if (currentStep < 3) {
      setCurrentStep(currentStep + 1);
      router.push(`/get-started?ui=${getNextUIState(currentStep + 1)}`);
    } else {
      router.push(`/dashboard/product/create`);
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

  const { headerText, subText } = topHeaderText(ui!);


  if (!ui) {
    return <div>Loading...</div>;
  }



  return (
    <>
      <Registration onRouteBack={handlePreviousStep} currentStep={currentStep} totalSteps={totalSteps} onClick={handleNextStep} headerText={headerText} subText={subText}>
        {/* {useSSR && ui==="phone-or-email" ? <PhoneOrEmailSSR /> : <PhoneOrEmailSSG />} */}
        {ui === "phone-or-email" && <PhoneOrEmailSSR />}
        {ui === "basic-info" && <BasicInfoSSR />}
        {ui === "create-your-store" && <CreateStoreSSR />}
      </Registration>
    </>
  );
};

export default PhoneOrEmailStep;