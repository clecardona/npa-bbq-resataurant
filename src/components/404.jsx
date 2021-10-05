import React from "react";
import { NavLink } from "react-router-dom";

import ButtonBack from "./shared/ButtonBack";

export default function Page404() {
  return (
    <main className="page-404">
      <div className="background">
        <img
          src="https://cdn.dribbble.com/users/3167939/screenshots/10422336/media/b618a0e73996c3b24b58b2db1c881ee3.png"
          alt="404"
        />
      </div>
      <div className="backhome">
        <NavLink to={"/"} className="btn btn-main btn-300">
          <ButtonBack label="Go back Home" />
        </NavLink>
      </div>
    </main>
  );
}
