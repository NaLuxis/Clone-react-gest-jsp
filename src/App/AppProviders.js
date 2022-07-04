import * as React from "react";
import { RoleProvider } from "../Context/RoleContext";

function AppProvider({ children }) {
  return <RoleProvider>{children}</RoleProvider>;
}

export { AppProvider };
