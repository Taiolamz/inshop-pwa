import icons from "@/public/icons/icons";
import Input from "@/src/components/common/input";
import { GetServerSideProps } from "next";
import Image from "next/image";
import { useState } from "react";

const BasicInfoSSR = () => {
  const [emailOrPhone, setEmailOrPhone] = useState("");
  const [error, setError] = useState(false);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setEmailOrPhone(event.target.value);
    setError(false);
  };

  const { instagramIcon, tikTokIcon, googleIcon } = icons;
  const SOCIAL_AUTHS = [instagramIcon, tikTokIcon, googleIcon];

  return (
    <div className="mt-5">
      <div className="flex justify-between items-center">
        {SOCIAL_AUTHS.map((social_auth, index) => (
          <button
            key={index}
            className="bg-[#f6f4f4] p-4 w-[101.33px] h-[48px] flex flex-col rounded-custom-12 place-items-center outline-none"
          >
            <Image src={social_auth} alt={social_auth} />
          </button>
        ))}
      </div>
      <p className="mt-6">Or enter manually</p>
      <div className="flex flex-col gap-5 ">
        <Input
          value={emailOrPhone}
          onChange={handleChange}
          placeholder="Full name"
          name="name"
          id="name"
          className="mt-5"
          error={error}
        />
        <Input
          value={emailOrPhone}
          onChange={handleChange}
          placeholder="Username"
          name="name"
          id="name"
          // className='mt-5'
          error={error}
        />
        <Input
          value={emailOrPhone}
          onChange={handleChange}
          placeholder="Phone number"
          name="name"
          id="name"
          // className='mt-5'
          error={error}
        />
        <Input
          value={emailOrPhone}
          onChange={handleChange}
          placeholder="Email"
          name="name"
          id="name"
          // className='mt-5'
          error={error}
        />
      </div>
    </div>
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

export default BasicInfoSSR;
