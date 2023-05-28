
export enum EUnits {
  "gr",
  "ml",
  "pieza"
}

export enum EIngredients {
  "Pasta",
  "TomateFrito",
  "Cebolla"
}

export interface IIngredient {
  name: EIngredients;
  quantity: {
    amount: number;
    units: EUnits;
  };
}

export interface IRecipe {
  //properties
  id?: string;
  name: string;
  ingredients: IIngredient[];
  cookingTime: number;
  people: number;

  //methods
  calculateKcal: () => number;
}

export class Recipe implements IRecipe {
  name: string = "";
  ingredients: IIngredient[] = [];
  cookingTime: number = 0;
  people: number = 0;

  constructor(
    name: string,
    ingredients: IIngredient[],
    cookingTime: number,
    people: number) {
  }

  calculateKcal() {
    return 0;
  }
}