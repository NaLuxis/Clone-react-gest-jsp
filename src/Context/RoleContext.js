import React from "react";
import { ROLE } from "../App/Config";

const { jsp, moniteur, responsable } = ROLE;
const RoleContext = React.createContext({ jsp, moniteur, responsable });

function RoleProvider({ children }) {
  return (
    <RoleContext.Provider value={{ jsp, moniteur, responsable }}>
      {children}
    </RoleContext.Provider>
  );
}

export { RoleProvider, RoleContext };
