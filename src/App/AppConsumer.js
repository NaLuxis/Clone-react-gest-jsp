import React from "react";
import { useRole } from "../Hooks/useRole";
import { UnAuthApp } from "./UnAuthApp";
import { JspAuthApp } from "./JspAuthApp";
import { MoniteurAuthApp } from "./MoniteurAuthApp";
import { ResponsableAuthApp } from "./ResponsableAuthApp";

function AppConsumer(role) {
  const { jsp, moniteur, responsable } = useRole();
  if (role !== (jsp, moniteur, responsable)) {
    return <UnAuthApp />;
  }
  if (role === jsp) {
    return <JspAuthApp />;
  }
  if (role === moniteur) {
    return <MoniteurAuthApp />;
  }
  if (role === responsable) {
    return <ResponsableAuthApp />;
  }
}

export { AppConsumer };
