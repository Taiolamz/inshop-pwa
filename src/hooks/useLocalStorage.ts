const setStorageItem = <T>(key: string, value: T): void => {
  localStorage.setItem(key, JSON.stringify(value));
};

const getStorageItem = <T>(key: string): T | null => {
  if (typeof window !== "undefined" && window.localStorage) {
    const item = localStorage.getItem(key);
    return item ? JSON.parse(item) as T : null;
  }
  return null;
};

const removeStorageItem = (key: string): void => {
  localStorage.removeItem(key);
};

const clearStorageItem = (): void => {
  localStorage.clear();
};

export { setStorageItem, getStorageItem, removeStorageItem, clearStorageItem };
