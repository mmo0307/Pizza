import { useState } from "react";

function useLocalStorage(key: string, defaultValue:any) {
  const [storedValue, setStoredValue] = useState(() => {
    try {
      const value = localStorage.getItem(key);

      if (value) {
        return JSON.parse(value);
      } else {
        localStorage.setItem(key, JSON.stringify(defaultValue));
        return defaultValue;
      }
    } catch {
      return defaultValue;
    }
  });

  const setValue = (newValue:any) => {
    try {
      localStorage.setItem(key, JSON.stringify(newValue));
    } catch {
      console.log(newValue);
    }
    setStoredValue(newValue);
  };

  return [storedValue, setValue];
}

export default useLocalStorage;