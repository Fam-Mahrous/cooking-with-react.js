import React from "react";
import { Recipe } from "./Recipe";

export const RecipeList = ({ recipes }) => {
    return (
        <div className="recipe-list">
            <div>
                {recipes.map((recipe) => (
                    <Recipe key={recipe.id} {...recipe} />
                ))}
            </div>
            <div className="recipe-list__add-btn-container">
                <button className="btn btn--primary">Add Recipe</button>
            </div>
        </div>
    );
};
