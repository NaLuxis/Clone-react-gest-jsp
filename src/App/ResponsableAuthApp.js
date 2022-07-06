import React from "react";
import { Routes, Route } from "react-router-dom";

function ResponsableAuthApp() {
  return (
    <Route>
      {/* responsable route */}
      <Route path="/responsable" />
      <Route path="/responsable/planning" />
      <Route path="/responsable/planning/event:id" />
      <Route path="/responsable/document" />
      <Route path="/responsable/administrative" />
      <Route path="/responsable/section-management" />
      <Route path="/responsable/account" />
    </Route>
  );
}

export { ResponsableAuthApp };
