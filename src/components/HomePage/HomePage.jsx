import React from "react"; // you dont need to import React since React 17
import Hero from "./Hero";
import Menu from "./Menu";

export default function HomePage() {
  return (
    <main>
      <Hero />
      <Menu />
    </main>
  );
}
