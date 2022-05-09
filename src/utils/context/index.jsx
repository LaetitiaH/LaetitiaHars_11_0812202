import { createContext, useState } from "react";
import variables from "../variables";

export const DeviceContext = createContext();

export const DeviceProvider = ({ children }) => {
  const deviceName =
    window.screen.width >= variables.breakpoint.desktop ? "desktop" : "mobile";
  const [device] = useState(deviceName);

  return (
    <DeviceContext.Provider value={{ device }}>
      {children}
    </DeviceContext.Provider>
  );
};
