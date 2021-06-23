import React, { useContext } from "react";

import RecipesContext from "../context/recipesContext";

import { Recipe } from "./Recipe";

export const RecipeList = ({ recipes }) => {

  const { handleAddRecipe } = useContext(RecipesContext);
  
  return (
    <div className="recipe-list">
      <div>
        {recipes.map((recipe) => (
          <Recipe key={recipe.id} {...recipe} />
        ))}
      </div>
      <div className="recipe-list__add-btn-container">
        <button className="btn btn--primary" onClick={handleAddRecipe}>
          Add Recipe
        </button>
      </div>
    </div>
  );
};
