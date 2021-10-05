import React from "react";
import ContactDescription from "./ContactDescription";
import ContactForm from "./ContactForm";
import Localisation from "./Localisation";

export default function ContactPage() {
  return (
    <main className="page-contact">
      <ContactDescription />
      <ContactForm />
      <Localisation />
    </main>
  );
}
