import AsyncStorage from "@react-native-async-storage/async-storage";

export async function saveDataToLocalStorage(
  keyName: string,
  data: any
): Promise<void> {
  AsyncStorage.setItem(keyName, JSON.stringify(data));
}

export async function retrieveDataFromLocalStorage<T>(
  keyName: string
): Promise<T | null> {
  const jsonValue = await AsyncStorage.getItem(keyName);

  if (jsonValue !== null) {
    return JSON.parse(jsonValue);
  } else {
    return null;
  }
}
