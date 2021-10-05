import React from "react";

export default function Hero() {
  const heroURL =
    "https://cdn.dribbble.com/users/46549/screenshots/14765563/media/368910b3bada7e9b2324e9337ac7cddc.jpg?compress=1&resize=1600x1200";
  return (
    <section className="section-hero">
      <h1>HUNGRY YETI BBQ</h1>
      <h2>Because meat matters</h2>
      <img
        className="illustration"
        alt="bunny"
        src="https://clecardona.com/npa/img/rabbit.svg"
      />

      <img className="background" src={heroURL} alt="" />
    </section>
  );
}
