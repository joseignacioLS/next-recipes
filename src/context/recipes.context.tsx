"use client";

import { EDayMoment, EUnits, Recipe } from "@/classes/recipe";
import React, { ReactNode, useState } from "react";
import { createContext } from "react";

const data: Recipe[] = [
  new Recipe(
    "Pasta Boloñesa",
    [
      {
        name: "Pasta",
        quantity: {
          amount: 100,
          units: EUnits.gr,
        },
      },
      {
        name: "Tomate Frito",
        quantity: {
          amount: 100,
          units: EUnits.gr,
        },
      },
      {
        name: "Cebolla",
        quantity: {
          amount: 1,
          units: EUnits.pieza,
        },
      },
    ],
    30,
    2,
    [EDayMoment.lunch]
  ),
  new Recipe(
    "Pizza",
    [
      {
        name: "Harina",
        quantity: {
          amount: 200,
          units: EUnits.gr,
        },
      },
      {
        name: "Tomate Frito",
        quantity: {
          amount: 100,
          units: EUnits.gr,
        },
      },
      {
        name: "Queso Rallado",
        quantity: {
          amount: 100,
          units: EUnits.gr,
        },
      },
      {
        name: "Champiñones",
        quantity: {
          amount: 1,
          units: EUnits.pieza,
        },
      },
    ],
    45,
    2,
    [EDayMoment.dinner]
  ),
  new Recipe(
    "Sopa",
    [
      {
        name: "Caldo Verduras",
        quantity: {
          amount: 1000,
          units: EUnits.ml,
        },
      },
      {
        name: "Fideos",
        quantity: {
          amount: 200,
          units: EUnits.gr,
        },
      },
    ],
    5,
    2,
    [EDayMoment.lunch, EDayMoment.dinner]
  ),
];

export const recipeContext = createContext({
  recipes: [] as Recipe[],
});

const RecipeProvider = ({ children }: { children: ReactNode }) => {
  const [recipes, setRecipes] = useState(data);
  return (
    <recipeContext.Provider value={{ recipes }}>
      {children}
    </recipeContext.Provider>
  );
};

export default RecipeProvider;
