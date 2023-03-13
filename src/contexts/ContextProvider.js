import React, { createContext, useContext, useState } from "react";

const StateContext = createContext();

export const ContextProvider = ({ children }) => {
  const [qOneAnswer, setQOneAnswer] = useState("A");
  const [qTwoAnswer, setQTwoAnswer] = useState("A");
  const [qThreeAnswer, setQThreeAnswer] = useState("A");

  const setFirst = (e) => {
    setQOneAnswer(e.target.value);
  };

  const setSecond = (e) => {
    setQTwoAnswer(e.target.value);
  };

  const setThird = (e) => {
    setQThreeAnswer(e.target.value);
  };

  return (
    <StateContext.Provider
      value={{
        qOneAnswer,
        setQOneAnswer,
        qTwoAnswer,
        setQTwoAnswer,
        qThreeAnswer,
        setQThreeAnswer,
      }}
    >
      {children}
    </StateContext.Provider>
  );
};

export const useStateContext = () => useContext(StateContext);
