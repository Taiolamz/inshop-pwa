'use client'

import { FC } from 'react';
import Image from 'next/image';
import images from '@/public/images/images';
import icons from '@/public/icons/icons';
import dynamic from 'next/dynamic';
import { useRouter } from 'next/navigation';

// Dynamically import the interactive button
const InteractiveButton = dynamic(() => import('@/src/components/common/button/interactiveButton'), { ssr: false });

const WelcomePage: FC = () => {

    const WELCOME_DETAILS = [
        'Reach Millions of Shoppers',
        'Easy Product Listing',
        'Secure and Fast Payments',
        'Boost Your Visibility'
    ];

    const router = useRouter();

    const navigateToGetStarted = () => {
        router.push('/get-started?ui=phone-or-email');
    };

    return (
        <div className="h-screen bg-white relative flex flex-col items-center">
            <main className="p-10 pt-24 h-full flex flex-col justify-between">
                <header className='flex flex-col place-items-center justify-center'>
                    <Image
                        src={images.salesImage}
                        alt="Welcome Background"
                        width={296}
                        height={210}
                        objectFit="cover"
                        quality={100}
                    />
                </header>

                <section className="text-center mt-10">
                    <h1 className="font-bold text-4xl">Welcome</h1>
                    <p className="font-normal text-sm mt-3">
                        The safest platform to shop from social media vendors
                    </p>
                </section>

                <section className="mt-8 mb-24 flex flex-col gap-3 p-3 border border-[#8A226F] rounded-[12px] bg-[#FFEAFA]">
                    {WELCOME_DETAILS.map((welcomeDetail, index) => (
                        <article key={index} className="flex gap-2 items-center">
                            <Image src={icons.checkCircleIcon} alt="check circle" />
                            <p className="text-sm font-medium">{welcomeDetail}</p>
                        </article>
                    ))}
                </section>


                <InteractiveButton variant="primary" onClick={navigateToGetStarted}>
                    Get started
                </InteractiveButton>

            </main>
        </div>
    );
};

export default WelcomePage;
