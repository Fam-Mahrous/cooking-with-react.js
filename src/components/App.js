import React, { useState, useEffect } from "react";
import RecipesContext from "../context/recipesContext";
import { v4 as uuidv4 } from "uuid";

import "../css/app.css";

import { RecipeList } from "./RecipeList";

function App() {
  const [recipes, setRecipes] = useState(sampleRecipes);

  const handleAddRecipe = () => {
    const newRecipe = {
      id: uuidv4(),
      name: "new",
      servings: 1,
      cookTime: "1.00",
      instructions: "Instr.",
      ingredients: [{ id: uuidv4(), name: "Name", amount: "1 Tbs" }],
    };

    setRecipes([...recipes,newRecipe]);

    localStorage.setItem("recipes", JSON.stringify(recipes));
  };

  const handleDelete = (id) => {
    setRecipes(recipes.filter((recipe) => recipe.id !== id));

    localStorage.setItem("recipes", JSON.stringify(recipes));
  };

  const recipeContextValue = {
    handleAddRecipe,
    handleDelete,
  };

  return (
    <RecipesContext.Provider value={recipeContextValue}>
      <RecipeList recipes={recipes} />
    </RecipesContext.Provider>
  );
}

const sampleRecipes = [
  {
    id:uuidv4(),
    name: "plain chicken",
    servings: 3,
    cookTime: "1.45",
    instructions:
      "1.put salt on chicken\n2. put chicken on oven\n3. Eat chicken",
    ingredients: [
      {
        id:uuidv4(),
        name: "Chicken",
        amount: "2 pounds",
      },
      {
        id:uuidv4(),
        name: "Salt",
        amount: "1 Tbs",
      },
    ],
  },
  {
    id:uuidv4(),
    name: "Plain Pork",
    servings: 5,
    cookTime: "0.45",
    instructions: "1.put paprika on Pork\n2. put Pork on oven\n3. Eat Pork",
    ingredients: [
      {
        id:uuidv4(),
        name: "Pork",
        amount: "3 pounds",
      },
      {
        id:uuidv4(),
        name: "Paprika",
        amount: "2 Tbs",
      },
    ],
  },
];

export default App;
