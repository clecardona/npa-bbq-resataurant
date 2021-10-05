import React from "react";

export default function MapMarker({ text }) {
  const style = {
    display: "flex",
    flexDirection: "column",
    transform: "translate(-50%, -50%)",
  };

  return (
    <div style={style}>
      <div className="marker">
        <h3>{text}</h3>
      </div>
    </div>
  );
}
