import React, { createContext, useState } from 'react';

const MyContext = createContext();

export default function Context({ children }) {
  const [userToken, setUserToken] = useState();

  return (
    <MyContext.Provider value={{ userToken, setUserToken }}>
      {children}
    </MyContext.Provider>
  );
}


