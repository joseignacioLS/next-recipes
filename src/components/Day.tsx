import React, { useContext, useEffect, useState } from "react";

import styles from "./Day.module.scss";
import { EDayMoment } from "@/classes/recipe";
import { recipeContext } from "@/context/recipes.context";
import { getDayRecipes, setDayRecipe } from "@/services/api.service";

const dayDict = {
  0: "Domingo",
  1: "Lunes",
  2: "Martes",
  3: "Miercoles",
  4: "Jueves",
  5: "Viernes",
  6: "Sábado",
};

const Day = ({ date }: { date: Date }) => {
  const { recipes } = useContext(recipeContext);

  const [lunchRecipe, setLunchRecipe] = useState<string | undefined>(undefined);
  const [dinnerRecipe, setDinnerRecipe] = useState<string | undefined>(
    undefined
  );

  const handleInput = (value: string, dayMomentIndex: number) => {
    const strDate = date.toLocaleDateString("es-ES");
    setDayRecipe(strDate, dayMomentIndex, value);
    const newValues = getDayRecipes(strDate);
    switch (dayMomentIndex) {
      case 1: {
        setLunchRecipe(newValues[1]);
        break;
      }
      case 2: {
        setDinnerRecipe(newValues[2]);
        break;
      }
      default: {
      }
    }
  };

  useEffect(() => {
    const strDate = date.toLocaleDateString("es-ES");
    const dayRecipes = getDayRecipes(strDate);
    setLunchRecipe(dayRecipes[1]);
    setDinnerRecipe(dayRecipes[2]);
  }, []);

  return (
    <div className={styles.day}>
      <p>
        {dayDict[date.getDay()]} {date.toLocaleDateString("es-ES")}
      </p>
      <div className={styles.dishes}>
        <div>
          <select
            value={lunchRecipe}
            onChange={(e) => {
              handleInput(e.target.value, 1);
            }}
          >
            <option value={undefined}>-</option>
            {recipes
              .filter((recipe) => recipe.canBeEatenAt(EDayMoment.lunch))
              .map((recipe) => {
                return (
                  <option key={recipe.name} value={recipe.name}>
                    {recipe.name}
                  </option>
                );
              })}
          </select>
        </div>
        <div>
          <select
            value={dinnerRecipe}
            onChange={(e) => {
              handleInput(e.target.value, 2);
            }}
          >
            <option value={undefined}>-</option>
            {recipes
              .filter((recipe) => recipe.canBeEatenAt(EDayMoment.dinner))
              .map((recipe) => {
                return <option key={recipe.name}>{recipe.name}</option>;
              })}
          </select>
        </div>
      </div>
    </div>
  );
};

export default Day;
