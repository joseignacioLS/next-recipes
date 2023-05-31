import React from "react";
import { Recipe } from "@/classes/recipe";

import styles from "./recipeCard.module.scss";
import { useRouter } from "next/navigation";

const RecipeCard = ({ recipe }: { recipe: Recipe }) => {
  const router = useRouter();
  return (
    <div
      onClick={() => router.push(`/recetario/${recipe.id}`)}
      className={styles.recipeCard}
    >
      <span className={styles.title}>{recipe.name}</span>
      <span className={styles.time}>{recipe.cookingTime} min</span>
      <span className={styles.people}>{recipe.people} people</span>
    </div>
  );
};

export default RecipeCard;
