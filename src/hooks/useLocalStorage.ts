import { useCallback, useEffect, useState } from "react";

function useLocalStorage<T>(key: string, initialValue: T) {
  const [storedValue, setStoredValue] = useState<T>(initialValue);
  const [isLoading, setIsLoading] = useState(true);

  // 클라이언트에서만 localStorage를 읽는다.
  useEffect(() => {
    try {
      const item = window.localStorage.getItem(key);

      if (item !== null) {
        // eslint-disable-next-line react-hooks/set-state-in-effect
        setStoredValue(JSON.parse(item) as T);
      }
    } catch (error) {
      console.error("Error reading from localStorage", error);
    }

    setIsLoading(false);
  }, [key]);

  const setValue = useCallback(
    (value: T | ((prevValue: T) => T)) => {
      setStoredValue((prevValue) => {
        const valueToStore = value instanceof Function ? value(prevValue) : value;

        try {
          window.localStorage.setItem(key, JSON.stringify(valueToStore));
        } catch (error) {
          console.error("Error writing to localStorage", error);
        }

        return valueToStore;
      });
    },
    [key],
  );

  return [storedValue, setValue, isLoading] as const;
}

export default useLocalStorage;
