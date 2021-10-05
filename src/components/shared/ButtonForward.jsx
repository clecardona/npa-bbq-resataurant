import React from "react";
import arrowForward from "../../assets/icns/arrow-right-circle.svg";

export default function ButtonForward({ label }) {
  return (
    <>
      <h3>{label} </h3>
      <img className="icon-btn" src={arrowForward} alt="back" />
    </>
  );
}
