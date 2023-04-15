import localStorageHelper, {localStorageKeys} from "./localStorageHelper";

import {defaultSystemConfig} from "src/environment/defaultSystemConfig";

export const getLanguage = () => {
  const localData = localStorageHelper.getLocalStorageItem(localStorageKeys.SYSTEM);
  const result = localData ? localData : defaultSystemConfig;
  return result.language;
};

export const updateSystemConfig = (key, value) => {
  const oldLocalData = localStorageHelper.getLocalStorageItem(localStorageKeys.SYSTEM);
  let newLocalData;
  if (oldLocalData) {
    newLocalData = {
      ...oldLocalData,
      [key]: value
    };
  } else {
    newLocalData = {
      ...defaultSystemConfig,
      [key]: value
    };
  }

  console.log(key, value);
  console.log(newLocalData);

  localStorageHelper.setLocalStorageItem(localStorageKeys.SYSTEM, newLocalData);
};
