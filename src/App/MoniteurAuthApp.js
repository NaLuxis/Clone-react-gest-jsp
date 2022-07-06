import React from "react";
import { Routes, Route } from "react-router-dom";

function MoniteurAuthApp() {
  return (
    <Route>
      {/* moniteur route */}
      <Route path="/moniteur" />
      <Route path="/moniteur/planning" />
      <Route path="/moniteur/planning/event:id" />
      <Route path="/moniteur/document" />
      <Route path="/moniteur/administrative" />
      <Route path="/moniteur/account" />
    </Route>
  );
}

export { MoniteurAuthApp };
