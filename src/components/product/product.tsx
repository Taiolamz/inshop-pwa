import React, { ReactNode } from 'react'
import BackButton from '../common/button/backButton'
import { useRouter } from 'next/navigation'
import icons from '@/public/icons/icons'
import Image from 'next/image'
import InteractiveButton from '../common/button/interactiveButton'
import Input from '../common/input'

const Product = ({ headerText, onShowOptions, onCancel, onSave }: { headerText: string, onShowOptions: () => void, children: ReactNode, onCancel: () => void, onSave: () => void }) => {
    const router = useRouter()
    const handleRouteBack = () => router.back()
    return (
        <main className='bg-white h-screen '>
            <section className="p-5 flex flex-col flex-grow">
                <div className='flex justify-between items-center'>
                    <div className='flex gap-3 items-center'>
                        <BackButton onRouteBack={handleRouteBack} />
                        <h1 className="text-black font-medium text-base">{headerText}</h1>
                    </div>

                    <Image src={icons.moreIcon} alt="more" onClick={onShowOptions} />
                </div>

                {/* top details */}
                <div className='flex justify-between items-baseline'>
                    <div className='gap-1 mt-3 items-center border rounded-[90px] px-[6px] py-[2.5px] inline-flex'>
                        <p className='text-xs text-gray-500'>Draft</p>
                        <Image src={icons.checkIcon} alt="check" />
                    </div>

                    <p className='text-primary font-medium text-xs cursor-pointer'>Preview product</p>

                </div>
            </section>
            <hr />

            {/* basic details section */}
            <section className='p-5'>
                <p className='text-sm text-black font-medium'></p>
                <div>
                    <Input value={""} placeholder='Product Title' onChange={() => { }} id='product_title' />
                </div>
            </section>


            <hr />
            <div className='flex justify-between gap-5 items-center p-3 my-5 bg-white'>
                <InteractiveButton variant="outline" onClick={onCancel}>
                    Cancel
                </InteractiveButton>
                <InteractiveButton variant="primary" onClick={onSave}>
                    Save
                </InteractiveButton>
            </div>

        </main>
    )
}

export default Product