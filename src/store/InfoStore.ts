import {makeAutoObservable, runInAction} from "mobx";
import storeValue from "../utils/storage/storeValue";
import getValue from "../utils/storage/getValue";
import axios from "axios";
import {PersonType} from "../screens/HomeScreen/HomeScreen.types";

type PersonsType = {
  results: Array<PersonType>,
  count: number,
  next: null | string,
  previous: null | string,
}

class store {
  [key: string]: any;

  persons: PersonsType | null = null;

  fans: Array<PersonType> = [];

  lastURL: string = "https://swapi.dev/api/people/";

  constructor() {
    makeAutoObservable(this);
  }

  async getValue(name: string, initial: any = null) {
    const r = await getValue(name, initial);
    runInAction(() => {
      this[name] = r;
    });
  }

  async storeValue(name: string, value: any) {
    await storeValue(name, value);
    runInAction(() => {
      this[name] = value;
    });
  }

  async getPersons(onComplete: Function, url?: string) {
    try {
      const {data} = await axios.get(url ? url : "https://swapi.dev/api/people/");
      runInAction(() => {
        this.persons = data;
        this.lastURL = url ? url : "https://swapi.dev/api/people/";
      });
      onComplete && onComplete();
    } catch (error) {
      console.error(error);
    }
  }

}

const InfoStore = new store();

export default InfoStore;
