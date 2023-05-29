
export enum EUnits {
  "gr",
  "ml",
  "pieza"
}


export interface IIngredient {
  name: string;
  quantity: {
    amount: number;
    units: EUnits;
  };
}

export enum EDayMoment {
  breakfast,
  lunch,
  dinner,
}

export interface IRecipe {
  //properties
  id?: string;
  name: string;
  ingredients: IIngredient[];
  cookingTime: number;
  people: number;
  dayMoment: EDayMoment[];


  //methods
  calculateKcal: () => number;
  canBeEatenAt: (dayMoment: EDayMoment) => boolean;
}

export class Recipe implements IRecipe {
  name: string = "";
  ingredients: IIngredient[] = [];
  cookingTime: number = 0;
  people: number = 0;
  dayMoment: EDayMoment[];


  constructor(
    name: string,
    ingredients: IIngredient[],
    cookingTime: number,
    people: number,
    dayMoment: EDayMoment[] = []) {
    this.name = name;
    this.ingredients = ingredients;
    this.cookingTime = cookingTime;
    this.people = people;
    this.dayMoment = dayMoment;
  }

  canBeEatenAt(dayMoment: EDayMoment): boolean {
    return this.dayMoment.length === 0 || this.dayMoment.includes(dayMoment);
  }
  calculateKcal() {
    return 0;
  }
}