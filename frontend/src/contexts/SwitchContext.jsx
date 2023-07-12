/* eslint-disable react/jsx-no-constructed-context-values */
/* eslint-disable react/prop-types */
import { useState, useContext, createContext } from "react";

const SwitchContext = createContext();

function SwitchProvider({ children }) {
  const [switchTheme, setSwitchTheme] = useState(false);
  return (
    <SwitchContext.Provider value={{ switchTheme, setSwitchTheme }}>
      {children}
    </SwitchContext.Provider>
  );
}
// Création de mon hook personalisé
export const useSwitch = () => useContext(SwitchContext);
// Export du Provider
export default SwitchProvider;
