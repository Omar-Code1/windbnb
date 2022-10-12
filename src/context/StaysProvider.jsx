import React, { createContext, useState } from 'react';

export const StaysContext = createContext();

const StaysProvider = ({ children }) => {
  const [stays, setStays] = useState([]);

  const addStays = (stays) => {
    setStays(stays);
  };
  return (
    <StaysContext.Provider value={{ setStays, stays, addStays }}>
      {children}
    </StaysContext.Provider>
  );
};

export default StaysProvider;
