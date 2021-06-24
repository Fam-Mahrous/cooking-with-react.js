import React from "react";

export const RecipeIngredientEdit = (props) => {
  const { ingredient, handleIngredientChange, handleIngredientDelete } = props;

  const handleChange = (changes) => {
    handleIngredientChange(ingredient.id, { ...ingredient, ...changes });
  };

  return (
    <React.Fragment>
      <input
        type="text"
        className="recipe-edit__input"
        value={ingredient.name}
        onChange={(e) => handleChange({ name: e.currentTarget.value })}
      />
      <input
        type="text"
        className="recipe-edit__input"
        value={ingredient.amount}
        onChange={(e) => handleChange({ amount: e.currentTarget.value })}
      />
      <button
        className="btn btn--danger"
        onClick={() => handleIngredientDelete(ingredient.id)}
      >
        &times;
      </button>
    </React.Fragment>
  );
};
