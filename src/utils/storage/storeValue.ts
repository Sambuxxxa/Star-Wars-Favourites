import AsyncStorage from "@react-native-async-storage/async-storage";

export default async (key: string, value: any) => {
  try {
    const jsonValue = JSON.stringify(value)
    await AsyncStorage.setItem(key, jsonValue)
    console.log(`--${key} successfully stored---`)
  } catch (e) {
    console.log(`ERROR: ${e}`)
  }
}
