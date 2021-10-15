//NPM Packages
import { createContext, useContext, useReducer } from "react";

//Project files
import foodReducer from "./foodReducer";

// Properties
export const FoodContext = createContext(null);

export function FoodProvider({ children }) {
  const [food, dispatch] = useReducer(foodReducer, []);

  return (
    <FoodContext.Provider value={{ food, dispatch }}>
      {children}
    </FoodContext.Provider>
  );
}

export function useFood() {
  const context = useContext(FoodContext);
  return context;
}
