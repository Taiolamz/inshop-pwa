import { GetServerSideProps } from 'next';
import { useState } from 'react';
import Input from '@/src/components/common/input';

const PhoneOrEmailSSR = () => {
  const [emailOrPhone, setEmailOrPhone] = useState('');
  const [error, setError] = useState(false);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setEmailOrPhone(event.target.value);
    setError(false);
  };


  return (
    <div className="container">
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

// SSR: Fetch data on each request (No `uiState` needed)
export const getServerSideProps: GetServerSideProps = async () => {
  return {
    props: {},
  };
};

export default PhoneOrEmailSSR;
