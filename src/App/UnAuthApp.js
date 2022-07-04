import React from "react";
import { SwitchRoleApp } from "./AppConsumer";

import "./App.css";

function UnAuthApp() {
  return (
    <div className="box">
      <h1>Login</h1>
      <input
        onClick={() => <SwitchRoleApp roleApp="jsp" />}
        type="button"
        value="Jsp"
      />
      <input
        onClick={() => <SwitchRoleApp roleApp="moniteur" />}
        type="button"
        value="Moniteur"
      />
      <input
        onClick={() => <SwitchRoleApp roleApp="responsable" />}
        type="button"
        value="Responsable"
      />
    </div>
  );
}

export { UnAuthApp };
