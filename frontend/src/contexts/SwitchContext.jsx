/* eslint-disable react/jsx-no-constructed-context-values */
/* eslint-disable react/prop-types */
import { useState, useContext, createContext } from "react";

const SwitchContext = createContext();

function SwitchProvider({ children }) {
  const [switchTheme, setSwitchTheme] = useState(false);
  const [userLog, setUserLog] = useState(null);
  const [reload, setReload] = useState(1);
  return (
    <SwitchContext.Provider
      value={{
        switchTheme,
        setSwitchTheme,
        userLog,
        setUserLog,
        reload,
        setReload,
      }}
    >
      {children}
    </SwitchContext.Provider>
  );
}
// Création de mon hook personalisé
export const useSwitch = () => useContext(SwitchContext);
// Export du Provider
export default SwitchProvider;
