import React from "react";
import { UnAuthApp } from "./UnAuthApp";
import { JspAuthApp } from "./JspAuthApp";
import { MoniteurAuthApp } from "./MoniteurAuthApp";
import { ResponsableAuthApp } from "./ResponsableAuthApp";

function SwitchRoleApp(roleApp) {
  switch (roleApp) {
    case "jsp": {
      return <JspAuthApp />;
    }
    case "moniteur": {
      return <MoniteurAuthApp />;
    }
    case "responsable": {
      return <ResponsableAuthApp />;
    }
    default:
      throw new Error("Invalid role");
  }
}

function AppConsumer() {
  return <UnAuthApp />;
}

export { AppConsumer, SwitchRoleApp };
