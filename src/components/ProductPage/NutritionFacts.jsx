import React from "react";

export default function NutritionFacts({ product }) {
  const nutritionFacts = product.nutrition_facts;
  const calories = nutritionFacts[0];
  const otherData = nutritionFacts.slice(1, nutritionFacts.length);
  const TablePercentage = otherData.map((item) => {
    return (
      <tr key={item.id}>
        <td>
          <h3>{item.label}</h3>
        </td>
        <td>
          <h3>{item.value}%</h3>
        </td>
      </tr>
    );
  });

  return (
    <section className="section-nutrition_facts">
      <h2>Nutrition Facts</h2>
      <div className="separator" />
      <div className="calories">
        <h2>Calories</h2>
        <h1>{calories.value}</h1>
      </div>

      <div className="separator" />
      <h2 className="daily_value">% Daily Value*</h2>

      <table>
        <tbody>{TablePercentage}</tbody>
      </table>
      <p>
        *The % Daily Value tells you how much a nutrient in a serving food
        contributes to a daily die. 2000 calories a day is used for general
        nutrition advice.
      </p>
    </section>
  );
}
