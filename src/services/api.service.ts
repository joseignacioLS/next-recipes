import { EDayMoment } from "@/classes/recipe";
import { recipes } from "./mock";

const data: { [date: string]: (string | undefined)[] } = {
  "29/5/2023": [undefined, "Sopa", undefined],
  "30/5/2023": [undefined, undefined, undefined],
  "31/5/2023": [undefined, undefined, undefined],
  "1/6/2023": [undefined, undefined, "Pizza"],
}

export const getDayRecipes = (date: string): (string | undefined)[] => {
  return data[date] || [undefined, undefined, undefined];
}

export const setDayRecipe = (date: string, dayMoment: EDayMoment, recipe: string) => {
  if (!data[date]) data[date] = [undefined, undefined, undefined];
  data[date][dayMoment] = recipe;
}



export const getRecipes = () => {
  const promise = new Promise((resolve, reject) => {
    resolve(recipes);
  })
  return promise;
}