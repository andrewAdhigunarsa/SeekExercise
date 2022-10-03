import { createContext } from "react";
import {
  AppContextInterface,
  AppContextProviderType,
} from "../interfaces/app-context.interface";

const AppContext = createContext({} as AppContextInterface);

const AppContextProvider: React.Context<AppContextProviderType> = ({
  children,
}: AppContextProviderType) => {
  return <AppContext.Provider>{children}</AppContext.Provider>;
};
