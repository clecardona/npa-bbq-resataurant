import React from "react";

export default function FoodIcon({ reference }) {
  return (
    <img
      className="food-icon"
      src={`https://clecardona.com/npa/icns/food/${reference}.svg`}
      alt={reference}
    />
  );
}
