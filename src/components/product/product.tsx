import React, { ReactNode } from "react";
import BackButton from "../common/button/backButton";
import { useRouter } from "next/navigation";
import icons from "@/public/icons/icons";
import Image from "next/image";
const Product = ({
    headerText,
    onShowOptions,
    children,
}: {
    headerText: string;
    onShowOptions: () => void;
    children: ReactNode;
}) => {
    const router = useRouter();
    const handleRouteBack = () => router.back();

    return (
        <main className="bg-white h-screen">
            <nav className="px-5 pb-2 flex flex-col h-[60px] bg-white  justify-center w-full fixed top-0 left-0 z-10">
                <div className="flex justify-between items-center">
                    <div className="flex gap-3 items-center">
                        <BackButton onRouteBack={handleRouteBack} />
                        <h1 className="text-black font-medium text-base">{headerText}</h1>
                    </div>
                    <Image src={icons.moreIcon} alt="more" onClick={onShowOptions} />
                </div>
            </nav>


            <div className="h-full pt-[60px] overflow-y-auto">
                {children}
            </div>
        </main>

    );
};

export default Product;
