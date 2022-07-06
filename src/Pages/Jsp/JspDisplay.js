import React from "react";
import { Link } from "react-router-dom";

function JspDisplay() {
  return (
    <div className="box">
      <h1>Jsp</h1>
      <Link to={"/"}>
        <input onClick={() => {}} type="button" value="Home" />
      </Link>
      <Link to={"/jsp"}>
        <input onClick={() => {}} type="button" value="Jsp" />
      </Link>
      <Link to={"/moniteur"}>
        <input onClick={() => {}} type="button" value="Moniteur" />
      </Link>
      <Link to={"/responsable"}>
        <input onClick={() => {}} type="button" value="Responsable" />
      </Link>
    </div>
  );
}

export { JspDisplay };
