import { createContext, Dispatch } from "react";

interface IDefaults {
  dropdownValues: { [key: string]: any };
  onChange: Dispatch<React.SetStateAction<{ [x: string]: any }>>;
}

const defaults: IDefaults = {
  dropdownValues: {},
  onChange: (): void => {},
};

export const Context = createContext(defaults);
