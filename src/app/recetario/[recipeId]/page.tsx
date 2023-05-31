"use client";

import { Recipe } from "@/classes/recipe";
import { recipeContext } from "@/context/recipes.context";
import { useParams } from "next/navigation";
import React, { useContext, useEffect, useState } from "react";

const Page = () => {
  const params = useParams();

  const { recipes } = useContext(recipeContext);
  const [people, setPeople] = useState(2);
  const [recipe, setRecipe] = useState<Recipe | undefined>(undefined);

  const handlePeopleChange = (value: number) => {
    setPeople(value);
  };
  useEffect(() => {
    setRecipe(() => {
      const newRecipe = recipes.find((r) => r.id === params.recipeId);
      if (newRecipe) setPeople(newRecipe.people);
      return newRecipe;
    });
  }, [recipes, params.recipeId]);
  return (
    <div>
      <h1>{recipe?.name}</h1>
      <span>{recipe?.cookingTime} min - </span>
      <input
        type="number"
        value={people}
        onChange={(e) => {
          handlePeopleChange(+e.target.value);
        }}
      />
      <span>people</span>
      <h2>Ingredientes</h2>
      <ul>
        {recipe?.ingredients.map((ingredient) => {
          return (
            <li key={ingredient.name}>
              <span>
                {ingredient.name} -{" "}
                {(ingredient.quantity.amount / recipe?.people) * people}
                {" "}
                {ingredient.quantity.units}
              </span>
            </li>
          );
        })}
      </ul>
      <h2>Instrucciones</h2>
      <p>{recipe?.instructions}</p>
    </div>
  );
};

export default Page;
