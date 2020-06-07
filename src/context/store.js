import React from "react";
import reducer from "./reducers";
import initialState from "./initialState";

export const AppContext = React.createContext();

export default ({ children }) => {
  const [state, dispatch] = React.useReducer(reducer, initialState);
  return (
    <AppContext.Provider value={{ state, dispatch }}>
      {children}
    </AppContext.Provider>
  );
};
