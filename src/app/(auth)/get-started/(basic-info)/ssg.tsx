import Input from '@/src/components/common/input';
import { GetStaticProps } from 'next';
import { useState } from 'react';


const BasicInfoSSG = () => {
  const [emailOrPhone, setEmailOrPhone] = useState('');
  const [error, setError] = useState(false);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setEmailOrPhone(event.target.value);
    setError(false);
  };


  return (
    <div className='flex flex-col gap-5'>
      <Input
        value={emailOrPhone}
        onChange={handleChange}
        placeholder="Full name"
        name="name"
        id="name"
        className='mt-5'
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
  );
};

// SSG: Fetch data at build time
export const getStaticProps: GetStaticProps = async () => {
  const uiState = 'phone-or-email';
  return {
    props: { uiState },
    revalidate: 60,
  };
};

export default BasicInfoSSG;
