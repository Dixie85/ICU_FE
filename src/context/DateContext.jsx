import { createContext, useState } from "react";

const DateContext = createContext({});

export const DateProvider = ({ children }) => {
  const [date, setDate] = useState('');

  return (
    <DateContext.Provider value={{ date, setDate }}>
      {children}
    </DateContext.Provider>
  );
};

export default DateContext;