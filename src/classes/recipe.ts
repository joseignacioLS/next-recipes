
export enum EUnits {
  gr= "gr",
  ml="ml",
  pieza="pieza"
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
  id: string;
  name: string;
  instructions?: string;
  ingredients: IIngredient[];
  cookingTime: number;
  people: number;
  dayMoment: EDayMoment[];


  //methods
  calculateKcal: () => number;
  canBeEatenAt: (dayMoment: EDayMoment) => boolean;
}

export class Recipe implements IRecipe {
  id: string = "0";
  name: string = "";
  ingredients: IIngredient[] = [];
  instructions?: string;
  cookingTime: number = 0;
  people: number = 0;
  dayMoment: EDayMoment[];


  constructor(
    id: string,
    name: string,
    ingredients: IIngredient[],
    instructions: string,
    cookingTime: number,
    people: number,
    dayMoment: EDayMoment[] = []) {
    this.id = id;
    this.name = name;
    this.ingredients = ingredients;
    this.instructions = instructions;
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