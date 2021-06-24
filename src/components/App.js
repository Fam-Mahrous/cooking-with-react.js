import React, { useState, useEffect } from "react";
import RecipesContext from "../context/recipesContext";
import { v4 as uuidv4 } from "uuid";

import "../css/app.css";

import { RecipeList } from "./RecipeList";
import { RecipeEdit } from './RecipeEdit';

const sampleRecipes = [
  {
    id: uuidv4(),
    name: "plain chicken",
    servings: 3,
    cookTime: "1.45",
    instructions:
      "1.put salt on chicken\n2. put chicken on oven\n3. Eat chicken",
    ingredients: [
      {
        id: uuidv4(),
        name: "Chicken",
        amount: "2 pounds",
      },
      {
        id: uuidv4(),
        name: "Salt",
        amount: "1 Tbs",
      },
    ],
  },
  {
    id: uuidv4(),
    name: "Plain Pork",
    servings: 5,
    cookTime: "0.45",
    instructions: "1.put paprika on Pork\n2. put Pork on oven\n3. Eat Pork",
    ingredients: [
      {
        id: uuidv4(),
        name: "Pork",
        amount: "3 pounds",
      },
      {
        id: uuidv4(),
        name: "Paprika",
        amount: "2 Tbs",
      },
    ],
  },
];

const LOCAL_STORAGE_KEY = "cookingWithReact.recipes";

function App() {
  const [selectedRecipeId,setSelectedRecipeId]=useState(undefined);
  const [recipes, setRecipes] = useState(sampleRecipes);

  const selectedRecipe=recipes.find(recipe=>recipe.id===selectedRecipeId);

  //useEffect hooks should be ordered like that

  useEffect(()=>{
    const recipeJson=localStorage.getItem(LOCAL_STORAGE_KEY);
    if(recipeJson !==null) setRecipes(JSON.parse(recipeJson));
  },[])

  useEffect(() => {
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(recipes));
  }, [recipes]);

  const handleAddRecipe = () => {
    const newRecipe = {
      id: uuidv4(),
      name: "",
      servings: 1,
      cookTime: "",
      instructions: "",
      ingredients: [{ id: uuidv4(), name: "", amount: "" }],
    };
    setSelectedRecipeId(newRecipe.id);

    setRecipes([...recipes, newRecipe]);

  };

  const handleDelete = (id) => {
    if(selectedRecipeId !==null&& selectedRecipeId===id){
      setSelectedRecipeId(undefined);
    }
    setRecipes(recipes.filter((recipe) => recipe.id !== id));
  };

  const handleRecipeSelect=(id)=>{
    setSelectedRecipeId(id);
  }

  const handleRecipeChange=(id,recipe)=>{

    const newRecipes=[...recipes];
    const index=newRecipes.findIndex(recipe=>recipe.id===id);
    newRecipes[index]=recipe;

    setRecipes(newRecipes);

  }

  const recipeContextValue = {
    handleAddRecipe,
    handleDelete,
    handleRecipeSelect,
    handleRecipeChange
  };

  return (
    <RecipesContext.Provider value={recipeContextValue}>
      <RecipeList recipes={recipes} />
     {selectedRecipe&&<RecipeEdit recipe={selectedRecipe}/>}
    </RecipesContext.Provider>
  );
}

export default App;
