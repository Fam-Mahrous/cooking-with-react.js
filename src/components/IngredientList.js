import React from "react";
import { Ingredient } from "./Ingredient";

export const IngredientList = ({ ingredients }) => {
  const ingredientelement = ingredients.map((ingredient) => (
    <Ingredient key={ingredient.id} {...ingredient} />
  ));

  return <div className="ingredient-grid">{ingredientelement}</div>;
};
