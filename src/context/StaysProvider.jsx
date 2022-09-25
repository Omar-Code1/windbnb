import React, { createContext, useState } from 'react';

export const StaysContext = createContext();

const StaysProvider = ({ children }) => {
  const [stays, setStays] = useState([]);
  return (
    <StaysContext.Provider value={{ setStays, stays }}>
      {children}
    </StaysContext.Provider>
  );
};

export default StaysProvider;
