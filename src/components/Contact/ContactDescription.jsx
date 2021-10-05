import React from "react";

export default function ContactDescription() {
  return (
    <section className="section-contact_description">
      <div className="header-contact">
        <img
          className="background"
          src="https://clecardona.com/npa/vegan_restaurant/contact/header.jpg"
          alt="img"
        />
        <img
          className="owner"
          src="http://clecardona.com/img/portrait.jpg"
          alt="img"
        />
      </div>

      <div className="hours">
        <h2>Opening Hours</h2>
        <p>Monday - Friday</p>
        <h3>11-23</h3>
        <p>Saturday</p>
        <h3>18-23</h3>
        <p>Sunday</p>
        <h3>18-22</h3>
      </div>
    </section>
  );
}
