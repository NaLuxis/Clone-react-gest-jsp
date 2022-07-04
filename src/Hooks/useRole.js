import { useContext } from "react";

import { RoleContext } from "../Context/RoleContext";

function useRole() {
  return useContext(RoleContext);
}

export { useRole };
