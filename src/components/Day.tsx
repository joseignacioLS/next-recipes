import React, { useContext } from "react";

import styles from "./Day.module.scss";
import { EDayMoment } from "@/classes/recipe";
import { recipeContext } from "@/context/recipes.context";

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
  return (
    <div className={styles.day}>
      <p>
        {dayDict[date.getDay()]} {date.toLocaleDateString("es-ES")}
      </p>
      <div className={styles.dishes}>
        <div>
          <select>
            {recipes
              .filter((recipe) => recipe.canBeEatenAt(EDayMoment.lunch))
              .map((recipe) => {
                return <option key={recipe.name}>{recipe.name}</option>;
              })}
          </select>
        </div>
        <div>
          <select>
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
