import icons from '@/public/icons/icons'
import images from '@/public/images/images'
import Product from '@/src/components/product/product'
import Image from 'next/image'
import React from 'react'
import { TopHeaderNav } from '../create/ssr'
import { cn } from '@/src/utils/cn'
import InteractiveButton from '@/src/components/common/button/interactiveButton'

const ProductPreviewSSR = () => {
    const stars = Array(5).fill(0);

    const [showProductDescription, setShowProductDescription] = React.useState(false);
    const [showVendorDetails, setShowVendorDetails] = React.useState(false);

    const dot = <svg width="4" height="5" viewBox="0 0 4 5" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="2" cy="2.5" r="2" fill="white" />
        <circle cx="2" cy="2.5" r="2" fill="black" fillOpacity="0.6" />
    </svg>

    const VENDOR_REVIEWS = ['Quality goods', "Nice designs", 'Quality goods', "Nice designs", 'Quality goods', "Nice designs",]



    return (
        <Product headerText='Product preview' onShowOptions={() => { }}>
            <div className="flex flex-col min-h-screen">
                <div className="flex-grow">

                    <section>
                        <Image
                            className='w-full object-cover'
                            height={360}
                            width={100}
                            src={images.dummyImage}
                            alt="dummy image"
                            sizes="100vw"
                            priority
                        />
                    </section>

                    <section className='p-3'>
                        <div className="flex justify-between items-center">
                            <p className='w-2/3 text-sm font-medium'>Gucci bag – the epitome of luxury and sophistication</p>
                            <div className="flex gap-3 items-center">
                                <button className="grid place-items-center bg-gray-100 rounded-full w-[36px] h-[36px]">
                                    <Image src={icons.shareIcon} alt="share" />
                                </button>
                                <button className="grid place-items-center bg-gray-100 rounded-full w-[36px] h-[36px]">
                                    <Image src={icons.favoriteIcon} alt="favorite" />
                                </button>
                            </div>
                        </div>

                        <div className="flex justify-between items-center">
                            <div className='flex gap-2  items-center'>
                                <p className='font-medium text-[20px] text-[#3B3B3B] '>₦18.0</p>
                                <p className='text-xs text-[#ACACAC] font-medium mt-[.5px]'>₦28.0</p>
                                <div className='grid place-items-center bg-primary py-[2px] px-[8px] rounded-[24px]'>
                                    <p className='text-[10px] text-white font-normal'>25% OFF</p>
                                </div>
                            </div>

                            <div className="flex gap-1 items-center">
                                {stars.map((_, index) => {
                                    const isLastStar = index === stars.length - 1;
                                    const icon = isLastStar ? icons.halfStarIcon : icons.starIcon;
                                    return (
                                        <Image
                                            key={index}
                                            src={icon}
                                            alt="rating"
                                            width={14}
                                            height={13}
                                        />
                                    );
                                })}
                                <p className='text-sm text-[#ACACAC]'>(5 sold)</p>
                            </div>
                        </div>
                    </section>

                    <hr />

                    <section className='p-3'>
                        <p className='font-medium text-sm text-black'>Select variants</p>
                        <p className='text-gray-500 text-[10px] mt-3'>Size: SMALL</p>
                        <div className='flex justify-between gap-3 items-center mt-3'>
                            {Array(6).fill(0).map((_, index) => (
                                <div
                                    key={index}
                                    className={`text-sm w-[58px] text-center rounded-[90px] px-[10px] py-[2px] ${index === 0 ? 'bg-slate-950 text-white' : 'bg-gray-100 text-black'
                                        }`}
                                >
                                    <p>Filter</p>
                                </div>
                            ))}
                        </div>
                        <p className='text-gray-500 text-[10px] mt-3'>Color: White</p>
                        <div className='flex gap-3 items-center mt-3'>
                            {Array(3).fill(0).map((_, index) => (<div key={index} className='text-sm text-black bg-gray-100 w-[58px] text-center rounded-[90px] px-[10px] py-[2px]'><p>Filter</p></div>))}
                        </div>
                    </section>

                    <hr />

                    <section className='p-3'>
                        <TopHeaderNav
                            title="Product  descriptions"
                            isOpen={showProductDescription}
                            onToggle={() => setShowProductDescription(!showProductDescription)}
                        />

                        <div className={cn(
                            "flex flex-col gap-2 transition-all overflow-x-hidden overflow-y-auto w-full duration-300 ease-in-out",
                            {
                                "h-[80px]  opacity-100": showProductDescription,
                                "h-0 opacity-0": !showProductDescription,
                            })}>
                            <p className='text-xs text-gray-500 w-4/5'>Wholesale and drop shipping are both welcomed.
                                For wholesale,we will offer discount or free express shipping which only takes 3-7 days to arrive...</p>
                            <button className='text-xs text-primary bg-transparent inline-flex -mt-1 font-medium'>Read more</button>
                        </div>
                    </section>

                    <hr />

                    <section className='p-3'>
                        <TopHeaderNav
                            title="About this vendor"
                            isOpen={showVendorDetails}
                            onToggle={() => setShowVendorDetails(!showVendorDetails)}
                        />
                        <div className={cn(
                            "flex flex-col gap-2 transition-all overflow-x-hidden overflow-y-auto w-full duration-300 ease-in-out",
                            {
                                "h-[215px]  opacity-100": showVendorDetails,
                                "h-0 opacity-0": !showVendorDetails,
                            })}>
                            <div className='flex justify-between items-center'>
                                <div className='flex gap-3 items-center'>
                                    <Image src={images.avatar} width={52} height={52} alt="avatar" className='rounded-full border-2' />
                                    <div>
                                        <p className='text-sm font-medium text-black'>Gucci store</p>
                                        <div className='flex gap-1 items-center'>
                                            <p className='text-gray-400 text-xs'>Fashion</p>
                                            <span>{dot}</span>
                                            <Image src={icons.darkStarIcon} alt="star" />
                                            <p className='text-gray-400 text-xs'>5.4</p>
                                            <span>{dot}</span>
                                            <Image src={icons.followersIcon} alt="followers" className='ml-1' />
                                            <p className='text-gray-400 text-xs'>100K</p>
                                        </div>
                                    </div>
                                </div>
                                <p className='text-primary text-xs font-medium cursor-pointer'>Follow</p>
                            </div>
                            <p className="text-xs mt-1 text-gray-500">Vendor description: You can track your parcel on the following website using your tracking number: www.17track...</p>
                            <div className='grid grid-cols-3 gap-2 mt-3'>
                                {VENDOR_REVIEWS.map((review, index) => (
                                    <div key={index} className='text-sm text-black bg-gray-100 min-w-[81px] text-center rounded-[90px] px-[10px] py-[2px]'>{review}</div>
                                ))}
                            </div>
                        </div>
                    </section>
                </div>

                <hr />

                <footer className="p-3 my-5 bg-white">
                    <InteractiveButton variant="primary" onClick={() => { }}>
                        Publish
                    </InteractiveButton>
                </footer>


            </div>

        </Product >
    )
}

export default ProductPreviewSSR