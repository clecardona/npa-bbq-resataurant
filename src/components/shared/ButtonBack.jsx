import React from "react";

import arrowBack from "../../assets/icns/arrow-left-circle.svg";

export default function ButtonBack({ label }) {
  return (
    <>
      <img className="icon-btn" src={arrowBack} alt="back" />
      <h3>{label} </h3>
    </>
  );
}
