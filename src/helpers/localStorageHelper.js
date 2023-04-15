export const localStorageKeys = {
  SYSTEM: 'SYSTEM'
}

const setLocalStorageItem = (key, value) => {
  localStorage.setItem(key, JSON.stringify(value));
};

const updateLocalStorageItem = (key, value) => {
  const oldData = localStorage.getItem(key);
  if (oldData && value !== null) {
    const newData = {
      ...JSON.parse(oldData),
      ...value
    };
    setLocalStorageItem(key, newData);
  }
};

const getLocalStorageItem = (key) => {
  const data = localStorage.getItem(key);
  return data ? JSON.parse(data) : null;
};

const deleteLocalStorageItem = (key) => {
  localStorage.removeItem(key);
};

const localStorageHelper = {
  setLocalStorageItem,
  updateLocalStorageItem,
  getLocalStorageItem,
  deleteLocalStorageItem
};

export default localStorageHelper;
