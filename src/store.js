import React, { useReducer, useContext } from "react";

import rootReducer, { initialState } from "./reducer";

const Context = React.createContext();

const Provider = ({ children }) => {
  const [state, dispatch] = useReducer(rootReducer, initialState);
  return (
    <Context.Provider value={{ state, dispatch }}>{children}</Context.Provider>
  );
};

export const useStore = () => useContext(Context);

export default Provider;
