import { createContext, useState } from "react";

const SearchBarCountryContext = createContext({});

export const SearchBarCountryProvider = ({ children }) => {
  const [searchBarCountry, setSearchBarCountry] = useState('');

  return (
    <SearchBarCountryContext.Provider value={{ searchBarCountry, setSearchBarCountry }}>
      {children}
    </SearchBarCountryContext.Provider>
  );
};

export default SearchBarCountryContext;