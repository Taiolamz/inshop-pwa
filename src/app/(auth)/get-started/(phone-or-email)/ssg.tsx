import { GetStaticProps } from 'next';
import { useState } from 'react';
import Input from '@/src/components/common/input';

const PhoneOrEmailSSG = () => {
  const [emailOrPhone, setEmailOrPhone] = useState('');
  const [error, setError] = useState(false);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setEmailOrPhone(event.target.value);
    setError(false);
  };


  return (
    <div>
      <Input
        value={emailOrPhone}
        onChange={handleChange}
        placeholder="Enter phone number or email"
        name="name"
        id="name"
        className="mt-5"
        error={error}
      />
    </div>
  );
};

// SSG: Fetch data at build time (but not using uiState)
export const getStaticProps: GetStaticProps = async () => {
  return {
    props: {},
    revalidate: 60,
  };
};

export default PhoneOrEmailSSG;
