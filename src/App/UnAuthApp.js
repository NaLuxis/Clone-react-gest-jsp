import React from "react";
import { Routes, Route } from "react-router-dom";
import { UnAuthDisplay } from "../Pages/UnAuth/UnAuthDisplay";
import { JspDisplay } from "../Pages/Jsp/JspDisplay";

import "./App.css";

function UnAuthApp(role) {
  return (
    <Routes>
      {/* public route   ici je met le composant <UnAuthDisplay/> */}
      <Route path="/" element={<UnAuthDisplay />} />

      {/* tous les autres route   ici je met le composant <UnAuthDisplay/> */}
      <Route path="*" element={<UnAuthDisplay />} />
    </Routes>
  );
}

export { UnAuthApp };
