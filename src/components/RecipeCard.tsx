import React from "react";
import { Recipe } from "@/classes/recipe";

import styles from "./recipeCard.module.scss";

const RecipeCard = ({ recipe }: { recipe: Recipe }) => {
  return (
    <div className={styles.recipeCard}>
      <span>{recipe.name}</span>
      <span>{recipe.cookingTime} min</span>
      <span>{recipe.people}</span>
    </div>
  );
};

export default RecipeCard;
