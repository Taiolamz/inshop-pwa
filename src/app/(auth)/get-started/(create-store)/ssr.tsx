import icons from "@/public/icons/icons";
import images from "@/public/images/images";
import Input from "@/src/components/common/input";
import { GetServerSideProps } from "next";
import Image from "next/image";
import { useState } from "react";

const CreateStoreSSR = () => {
    const [emailOrPhone, setEmailOrPhone] = useState("");
    const [error, setError] = useState(false);

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setEmailOrPhone(event.target.value);
        setError(false);
    };


    const [image, setImage] = useState<File | null>(null); // State to store uploaded file
    const [imagePreview, setImagePreview] = useState<string | null>(null); // State to store image preview
    const handleImageUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
        const file = event.target.files?.[0];
        
        if (file) {
            setImage(file);
            console.log(image)
            const reader = new FileReader();
            reader.onloadend = () => {
                setImagePreview(reader.result as string);
            };
            reader.readAsDataURL(file);
        }
    };

  


    return (
        <main className="mt-5">
            <section className="border container rounded-[12px] h-[140px] flex justify-center items-center">
                {/* image upload section */}
                <div className="flex flex-col items-center gap-3">
                    <input
                        type="file"
                        accept="image/*"
                        onChange={handleImageUpload}
                        id="image_upload"
                        className="hidden"
                    />

                    <div className="relative grid place-items-center">

                        <Image
                            src={imagePreview || images.avatar}
                            alt="Uploaded preview"
                            width={100}
                            height={100}
                            className="h-[80px] w-[80px] rounded-full"
                        />
                        <label
                            htmlFor="image_upload"
                            className="absolute grid place-items-center h-full w-full cursor-pointer"
                        >
                            <Image src={icons.uploadIcon} alt="upload" />
                        </label>
                    </div>

                    <label htmlFor="image_upload" className="text-xs cursor-pointer text-gray-500">
                        Upload store logo
                    </label>
                </div>
            </section>


            <div className="flex flex-col gap-5 ">
                <Input
                    value={emailOrPhone}
                    onChange={handleChange}
                    placeholder="Store name"
                    name="name"
                    id="name"
                    className="mt-5"
                    error={error}
                />
                <Input
                    value={emailOrPhone}
                    onChange={handleChange}
                    placeholder="Store tag name"
                    name="name"
                    id="name"
                    // className='mt-5'
                    error={error}
                />
                <Input
                    value={emailOrPhone}
                    onChange={handleChange}
                    placeholder="Store phone number"
                    name="name"
                    id="name"
                    // className='mt-5'
                    error={error}
                />
                <Input
                    value={emailOrPhone}
                    onChange={handleChange}
                    placeholder="Store email"
                    name="name"
                    id="name"
                    // className='mt-5'
                    error={error}
                />
                <Input
                    value={emailOrPhone}
                    onChange={handleChange}
                    placeholder="Store category"
                    name="name"
                    id="name"
                    // className='mt-5'
                    error={error}
                />
            </div>
        </main>
    );
};

// SSR: Fetch data on each request
export const getServerSideProps: GetServerSideProps = async (context) => {
    const { query } = context;
    const uiState = query.ui || null;

    return {
        props: { uiState },
    };
};

export default CreateStoreSSR;
