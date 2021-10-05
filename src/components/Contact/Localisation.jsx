import React from "react";
import Map from "./Localisation components/Map";

export default function Localisation() {
  const coordinates = {
    lat: 59.33832013757092,
    lng: 18.035815098670508,
  };
  return (
    <section className="section-localisation">
      <h2>Find us</h2>
      <ul>
        <li>
          <p>Sankt Eriksgatan 66</p>
        </li>
        <li>
          <p>Stockholm , Sweden</p>
        </li>
      </ul>
      <Map coordinates={coordinates} />
    </section>
  );
}
