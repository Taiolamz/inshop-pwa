'use client'
import { useState, useEffect } from 'react';

const useQueryParams = () => {
  const [queryParams, setQueryParams] = useState<URLSearchParams>(new URLSearchParams(window.location.search));

  useEffect(() => {
    // Set up a listener for changes in the URL
    const handlePopState = () => {
      setQueryParams(new URLSearchParams(window.location.search));
    };

    window.addEventListener('popstate', handlePopState);

    return () => {
      window.removeEventListener('popstate', handlePopState);
    };
  }, []);

  const updateQueryParams = (params: { [key: string]: string }) => {
    const newUrl = new URL(window.location.href);
    const searchParams = new URLSearchParams(newUrl.search);

    Object.entries(params).forEach(([key, value]) => {
      searchParams.set(key, value);
    });

    newUrl.search = searchParams.toString();
    window.history.pushState({}, '', newUrl.toString());
    setQueryParams(searchParams);
  };

  return { queryParams, updateQueryParams };
};

export default useQueryParams;
