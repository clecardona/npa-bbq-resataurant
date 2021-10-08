import React from "react";

export default function ContactDescription() {
  return (
    <section className="section-contact_description">
      <div className="header-contact">
        <img
          className="background"
          src="https://images.unsplash.com/photo-1514933651103-005eec06c04b?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1074&q=80"
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
