import { createContext, useState } from 'react';
import { getInitialData } from '../utils/data';

const dataContextValue = {
  data: getInitialData(),
  setData: (state) => {},
};

export const dataContext = createContext(dataContextValue);

function DataContextProvider({ children }) {
  const [data, setData] = useState(dataContextValue.data);
  return <dataContext.Provider value={{ data, setData }}>{children}</dataContext.Provider>;
}

export default DataContextProvider;
