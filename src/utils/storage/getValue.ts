import AsyncStorage from "@react-native-async-storage/async-storage";

export default async (key: string, initValue: any) => {
  try {
    const value = await AsyncStorage.getItem(key)
    if(value !== null) {
      console.log(`--${key} successfully taken---`)
      return JSON.parse(value);
    } else {
      console.log(`--${key} successfully taken at first---`)
      return initValue ? initValue : null;
    }
  } catch(e) {
    console.log(`ERROR: ${e}`)
  }
}
