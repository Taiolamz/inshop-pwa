import Product from '@/src/components/product/product'
import React, { useState } from 'react'
import Image from "next/image";
import icons from '@/public/icons/icons';
import TextArea from "@/src/components/common/textArea";
import { Switch } from "@nextui-org/switch";
import { cn } from '@/src/utils/cn';
import Input from '@/src/components/common/input';
import InteractiveButton from '@/src/components/common/button/interactiveButton';
import Checkbox from '@/src/components/common/checkBox';
import images from '@/public/images/images';
import { useRouter } from 'next/navigation';



function CreateProductSSR() {

    const router = useRouter();

    const [showBasicDetails, setShowBasicDetails] = useState<boolean>(false);
    const [showProductImages, setShowProductImages] = useState<boolean>(false);
    const [showInventoryDetails, setShowInventoryDetails] = useState<boolean>(false);
    const [showShippingDetails, setShowShippingDetails] = useState<boolean>(false);
    const [isInventoryChecked, setIsInventoryChecked] = useState<boolean>(false)

    const handleCheckboxChange = (checked: boolean) => {// Debugging log
        setIsInventoryChecked(checked);
    };


    const { dummyAvatar } = images;
    const PRODUCT_IMAGES = [
        dummyAvatar,
        dummyAvatar,
        dummyAvatar,
        dummyAvatar,
        dummyAvatar,
        dummyAvatar,
        dummyAvatar,
        dummyAvatar,
    ];

    const handlePreviewProduct = () => {
        router.push('/product/preview')
    }

    return (
        <Product headerText='Create Product' onShowOptions={() => { }}>
            <section className="flex px-5 mb-3 justify-between items-baseline">
                <div className="gap-1 mt-3 items-center border rounded-[90px] px-[6px] py-[2.5px] inline-flex">
                    <p className="text-xs text-gray-500">Draft</p>
                    <Image src={icons.checkIcon} alt="check" />
                </div>

                <p className="text-primary font-medium text-xs cursor-pointer" onClick={handlePreviewProduct}>
                    Preview product
                </p>
            </section>

            <hr />

            {/* basic details section */}
            <section className="p-5">
                <TopHeaderNav
                    title="Basic details"
                    isOpen={showBasicDetails}
                    onToggle={() => setShowBasicDetails(!showBasicDetails)}
                />

                <div
                    className={cn(
                        "flex flex-col gap-2 transition-all duration-300 ease-in-out",
                        {
                            "h-[348px] opacity-100": showBasicDetails,
                            "h-0 opacity-0": !showBasicDetails,
                        }
                    )}
                >
                    <Input
                        value={""}
                        placeholder="Product Title"
                        onChange={() => { }}
                        id="product_title"
                    />
                    <TextArea
                        value={""}
                        placeholder="Product description"
                        onChange={() => { }}
                        id="product_title"
                    />

                    <div className="flex gap-3 justify-between items-center">
                        <Input
                            value={""}
                            placeholder="Price"
                            onChange={() => { }}
                            id="product_title"
                        />
                        <Input
                            value={""}
                            placeholder="Old price"
                            onChange={() => { }}
                            id="product_title"
                        />
                    </div>

                    <TextArea
                        value={""}
                        placeholder="Product collection"
                        onChange={() => { }}
                        id="product_title"
                    />
                    <Input
                        value={""}
                        placeholder="Inventory stocks"
                        onChange={() => { }}
                        id="product_title"
                    />
                </div>
            </section>

            <hr />

            {/* product  image section */}
            <section className="p-5">
                <TopHeaderNav
                    title="Product images"
                    isOpen={showProductImages}
                    onToggle={() => setShowProductImages(!showProductImages)}
                />
                {/* list of product images */}
                <div
                    className={cn(
                        "flex flex-col gap-2 transition-all overflow-x-hidden overflow-y-auto w-full duration-300 ease-in-out",
                        {
                            "h-[422.5px]  opacity-100": showProductImages,
                            "h-0 opacity-0": !showProductImages,
                        }
                    )}
                >
                    {PRODUCT_IMAGES.map((product_image, index) => (
                        <div
                            key={index}
                            className="flex justify-between items-center py-2"
                        >
                            {/* Image and Label */}
                            <div className="flex gap-2 items-center">
                                <Image
                                    width={60}
                                    height={60}
                                    className="rounded-[8px]"
                                    src={product_image}
                                    alt={`Product image ${index + 1}`}
                                />
                                <p className="text-sm text-black-600">logo.img</p>
                            </div>

                            {/* Options and Switch */}
                            <div className="flex gap-3 items-center">
                                <Image
                                    src={icons.moreHorizontalIcon}
                                    alt="More options"
                                    width={24}
                                    height={24}
                                    className="cursor-pointer"
                                />
                                <Switch defaultChecked aria-label="Toggle product visibility" />
                            </div>
                        </div>
                    ))}
                </div>


                <button className="flex gap-2 mt-5 items-center justify-center p-3 rounded-[90px] bg-gray-100 w-full">
                    <p className="text-primary text-sm font-medium">Add image</p>
                    <Image src={icons.addImageIcon} alt="add image" />
                </button>
            </section>

            <hr />

            {/* inventory variations */}
            <section className="p-5">
                <TopHeaderNav
                    title="Inventory variations"
                    isOpen={showInventoryDetails}
                    onToggle={() => setShowInventoryDetails(!showInventoryDetails)}
                />
                <div className={cn(
                    "flex flex-col gap-2 transition-all overflow-x-hidden overflow-y-auto w-full duration-300 ease-in-out",
                    {
                        "h-[422.5px]  opacity-100": showInventoryDetails,
                        "h-0 opacity-0": !showInventoryDetails,
                    }
                )}>

                    <Checkbox
                        id="inventory_details"
                        label="This product is variable; has different colors, sizes, weight, materials, etc."
                        checked={isInventoryChecked}
                        onChange={handleCheckboxChange}
                    />
                </div>
                <button className="flex gap-2 mt-5 items-center justify-center p-3 rounded-[90px] bg-gray-100 w-full">
                    <Image src={icons.plusIcon} alt="add image" />
                    <p className="text-primary text-sm font-medium">Add new option</p>
                </button>
            </section>

            <hr />


            {/* shipping section */}
            <section className="p-5">
                <TopHeaderNav
                    title="Shipping"
                    isOpen={showShippingDetails}
                    onToggle={() => setShowShippingDetails(!showShippingDetails)}
                />
                <div className={cn(
                    "flex flex-col gap-4 transition-all mt-5 overflow-x-hidden overflow-y-auto w-full duration-300 ease-in-out",
                    {
                        "h-[200.5px]  opacity-100": showShippingDetails,
                        "h-0 opacity-0": !showShippingDetails,
                    }
                )}>
                    <div className="flex justify-between items-center">
                        <label htmlFor="self_shipping" className="text-xs text-black">Self shipping</label>
                        <Checkbox
                            id="self_shipping"

                            checked={isInventoryChecked}
                            onChange={handleCheckboxChange}
                        />
                    </div>

                    <div className="flex justify-between items-center">
                        <label htmlFor="instaShop_shipping" className="text-xs text-black">InstaShop shipping</label>
                        <Checkbox
                            id="instaShop_shipping"
                            checked={isInventoryChecked}
                            // onChange={handleCheckboxChange}
                            onChange={() => console.log('testing')}
                        />
                    </div>
                    <Input
                        value={""}
                        placeholder="Inventory stocks"
                        onChange={() => { }}
                        id="product_title"
                    />

                </div>
            </section >

            <hr />
            <footer className="flex  justify-between gap-5 items-center p-3 my-5 bg-white">
                <InteractiveButton variant="outline" onClick={() => { }}>
                    Cancel
                </InteractiveButton>
                <InteractiveButton variant="primary" onClick={() => { }}>
                    Save
                </InteractiveButton>
            </footer>
        </Product>
    )
}

export default CreateProductSSR

export const TopHeaderNav = ({
    title,
    isOpen,
    onToggle,
}: {
    title: string;
    isOpen: boolean;
    onToggle: () => void;
}) => (
    <div className="flex justify-between cursor-pointer items-center mb-4">
        <p className="text-sm text-black font-medium">{title}</p>
        <Image
            src={icons.chevronDownIcon}
            alt="chevron down"
            className={cn(
                "transition-transform duration-300 ease-in-out transform",
                {
                    "rotate-180": isOpen,
                    "rotate-0": !isOpen,
                }
            )}
            onClick={onToggle}
        />
    </div>
);