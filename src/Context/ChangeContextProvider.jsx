import { createContext, useEffect, useState } from 'react';

const changeContextValue = {
  isChange: false,
};

export const changeContext = createContext(changeContextValue);

function ChangeContextProvider({ children }) {
  const [datachange, setDatachange] = useState(changeContextValue.isChange);

  useEffect(() => {
    setDatachange(datachange);
  }, [datachange]);

  return (
    <changeContext.Provider value={{ datachange, setDatachange }}>
      {children}
    </changeContext.Provider>
  );
}

export default ChangeContextProvider;
