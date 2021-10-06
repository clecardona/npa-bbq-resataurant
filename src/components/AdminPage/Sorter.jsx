import React, { useState } from "react";

export default function Sorter({ hook }) {
  const [isCategory, setIsCategory] = hook;

  return (
    <section className="section-sorter">
      <button
        onClick={() => {
          setIsCategory(true);
        }}
      >
        <h4 className={!isCategory ? "" : "active"}>+ New Category</h4>
      </button>

      <div className="vl"></div>
      <button
        onClick={() => {
          setIsCategory(false);
        }}
      >
        <h4 className={isCategory ? "" : "active"}>+ New Meal</h4>
      </button>
    </section>
  );
}
