import { createContext, useState } from "react";
import useFetch from "../hooks/useFetch";

// Properties
export const FoodContext = createContext("hello");

const categories = [];

export function FoodProvider({ children }) {
  // Local state
  //const [state, setstate] = useState(initialState);
  const categories = useFetch("categories");
  //const dishes = useFetch("dishes");

  return (
    <FoodContext.Provider value={categories}>{children}</FoodContext.Provider>
  );
}
