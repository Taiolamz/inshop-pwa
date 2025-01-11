import { useState, useEffect } from 'react';

/**
 * Custom hook to retrieve a query parameter by name from the URL.
 * @param paramName - The name of the query parameter to retrieve.
 * @returns The value of the query parameter, or null if not found.
 */
function useQueryParam(paramName: string): string | null {
  const [paramValue, setParamValue] = useState<string | null>(null);

  useEffect(() => {
    // Ensure the code runs only in the browser
    if (typeof window !== 'undefined') {
      const urlParams = new URLSearchParams(window.location.search);
      setParamValue(urlParams.get(paramName));
    }
  }, [paramName]);

  return paramValue;
}

export default useQueryParam;
