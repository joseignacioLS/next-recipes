"use client";

import React, { useContext } from "react";

import styles from "./page.module.scss";
import { recipeContext } from "@/context/recipes.context";
import RecipeCard from "@/components/RecipeCard";
import { useRouter } from "next/navigation";

const Recetario = () => {
  const { recipes } = useContext(recipeContext);

  const router = useRouter();
  return (
    <div>
      <button onClick={() => router.push("/recetario/crear")}>+</button>
      {recipes.map((recipe) => {
        return <RecipeCard key={recipe.name} recipe={recipe}></RecipeCard>;
      })}
    </div>
  );
};

export default Recetario;
