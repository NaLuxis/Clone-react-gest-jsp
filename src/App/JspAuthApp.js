import React from "react";
import { Routes, Route } from "react-router-dom";

function JspAuthApp() {
  return (
    <Routes>
      {/* jsp route */}
      <Route path="/jsp" />
      <Route path="/jsp/planning" />
      <Route path="/jsp/planning/event:id" />
      <Route path="/jsp/document" />
      <Route path="/jsp/administrative" />
      <Route path="/jsp/account" />
    </Routes>
  );
}

export { JspAuthApp };
