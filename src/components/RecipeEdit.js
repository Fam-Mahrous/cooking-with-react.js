import React, { useContext } from "react";
import { v4 as uuidv4 } from "uuid";

import RecipesContext from "../context/recipesContext";
import { RecipeIngredientEdit } from "./RecipeIngredientEdit";

export const RecipeEdit = ({ recipe }) => {
  const { handleRecipeChange, handleRecipeSelect } = useContext(RecipesContext);

  const handleChange = (changes) => {
    handleRecipeChange(recipe.id, { ...recipe, ...changes });
  };

  const handleIngredientChange = (id, ingredient) => {
    const newIngredients = [...recipe.ingredients];
    const index = newIngredients.findIndex(
      (ingredient) => ingredient.id === id
    );
    newIngredients[index] = ingredient;
    handleChange({ ingredients: newIngredients });
  };

  const handleIngredientAdd = () => {
    const newIngrdient = {
      id: uuidv4(),
      name: "",
      amount: "",
    };
    handleChange({ ingredients: [...recipe.ingredients, newIngrdient] });
  };

  const handleIngredientDelete = (id) => {
    const newIngredients = recipe.ingredients.filter(
      (ingredient) => ingredient.id !== id
    );
    handleChange({ ingredients: newIngredients });
  };

  return (
    <div className="recipe-edit">
      <div className="recipe-edit__remove-button-container">
        <button
          className="btn recipe-edit__remove-button"
          onClick={() => handleRecipeSelect(undefined)}
        >
          &times;
        </button>
      </div>

      <div className="recipe-edit__details-grid">
        <label htmlFor="name" className="recipe-edit__label">
          Name
        </label>
        <input
          type="text"
          name="name"
          id="name"
          value={recipe.name}
          onChange={(e) => handleChange({ name: e.currentTarget.value })}
          className="recipe-edit__input"
        />

        <label htmlFor="cookTime" className="recipe-edit__label">
          CooTime
        </label>
        <input
          type="text"
          name="cookTime"
          id="cookTime"
          value={recipe.cookTime}
          onChange={(e) => handleChange({ cookTime: e.currentTarget.value })}
          className="recipe-edit__input"
        />

        <label htmlFor="servings" className="recipe-edit__label">
          Servings
        </label>
        <input
          type="number"
          min="1"
          name="servings"
          id="servings"
          value={recipe.servings}
          onChange={(e) =>
            handleChange({ servings: parseInt(e.currentTarget.value) || "" })
          }
          className="recipe-edit__input"
        />

        <label htmlFor="instructions" className="recipe-edit__label">
          Instructions
        </label>
        <textarea
          name="instructions"
          id="instructions"
          value={recipe.instructions}
          onChange={(e) => handleChange({ instructions: e.currentTarget.value })}
          className="recipe-edit__input"
        ></textarea>
      </div>

      <br />

      <label className="recipe-edit__label">Ingredients</label>
      <div className="recipe-edit__ingredient-grid">
        <div>Name</div>
        <div>Amount</div>
        <div></div>

        {recipe.ingredients.map((ingredient) => (
          <RecipeIngredientEdit
            key={ingredient.id}
            ingredient={ingredient}
            handleIngredientChange={handleIngredientChange}
            handleIngredientDelete={handleIngredientDelete}
          />
        ))}

        {/*Ingredient Components*/}
      </div>

      <div className="recipe-edit__add-ingredient-btn-container">
        <button className="btn btn--primary" onClick={handleIngredientAdd}>
          Add Ingredient
        </button>
      </div>
    </div>
  );
};
