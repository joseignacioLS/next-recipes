"use client";

import { EDayMoment, EUnits, IIngredient, Recipe } from "@/classes/recipe";
import { getRecipes } from "@/services/api.service";
import React, { ReactNode, useEffect, useState } from "react";
import { createContext } from "react";

export const recipeContext = createContext({
  recipes: [] as Recipe[],
  addNewRecipe: (recipe: any) => {},
});

const processRecipes = (rawRecipes: []): Recipe[] => {
  return rawRecipes.map((recipe: any, i: number) => {
    return new Recipe(
      i + "",
      recipe.name,
      recipe.ingredients.map((ingredient: any) => {
        return {
          name: ingredient.name,
          quantity: {
            amount: ingredient.quantity.amount,
            units: ingredient.quantity.units as EUnits,
          },
        };
      }),
      recipe.instructions,
      recipe.cookingTime,
      recipe.people,
      recipe.dayMoment.map((dayMoment: any): string => {
        return EDayMoment[dayMoment];
      })
    );
  });
};

const RecipeProvider = ({ children }: { children: ReactNode }) => {
  const [recipes, setRecipes] = useState<Recipe[]>([]);

  const addNewRecipe = (recipe: any): void => {
    console.log(recipe);
    const newRecipe = new Recipe(
      recipes.length + "",
      recipe.name,
      recipe.ingredients.map((data: any) => {
        console.log(data);
        return {
          name: data.name,
          quantity: {
            amount: data.quantity.amount,
            units: EUnits[data.quantity.units],
          },
        } as IIngredient;
      }),
      recipe.instructions,
      recipe.cookingTime,
      recipe.people,
      [EDayMoment.breakfast, EDayMoment.lunch, EDayMoment.dinner].filter(
        (v, i) => {
          return recipe.dayMoment[i];
        }
      )
    );
    console.log(newRecipe);
    setRecipes((oldValue) => {
      oldValue.push(newRecipe);
      return structuredClone(oldValue);
    });
  };

  useEffect(() => {
    getRecipes().then((data: any) => {
      setRecipes(processRecipes(data));
    });
  }, []);

  return (
    <recipeContext.Provider value={{ recipes, addNewRecipe }}>
      {children}
    </recipeContext.Provider>
  );
};

export default RecipeProvider;
