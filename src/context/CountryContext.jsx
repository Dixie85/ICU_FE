import { createContext, useState } from "react";

const CountryContext = createContext({});

export const CountryProvider = ({ children }) => {
  const [country, setCountry] = useState('');

  return (
    <CountryContext.Provider value={{ country, setCountry }}>
      {children}
    </CountryContext.Provider>
  );
};

export default CountryContext;