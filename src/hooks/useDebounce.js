import { useCallback, useRef } from 'react';

const useDebounce = (callback, delay, setResponse) => {
  const timer = useRef();

  const debouncedCallback = useCallback((limit) => {
    if (timer.current) {
      clearTimeout(timer.current);
    }
    timer.current = setTimeout(async () => {
      setResponse(await callback(limit));
    }, delay);
  }, [callback, delay]);

  return debouncedCallback;
};

export default useDebounce;
