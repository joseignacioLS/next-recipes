"use client";

import React, { useContext, useState } from "react";

import styles from "./page.module.scss";
import IngredientForm from "./IngredientForm";
import { recipeContext } from "@/context/recipes.context";
import { useRouter } from "next/navigation";

const CreateRecipe = () => {
  const router = useRouter();
  const {addNewRecipe} = useContext(recipeContext);

  const [formData, setFormData] = useState({
    name: "",
    cookingTime: 0,
    people: 0,
    ingredients: [
      {
        name: "",
        quantity: {
          amount: 0,
          units: "gr",
        },
      },
    ],
    instructions: "",
    dayMoment: [false, false, false],
  });

  const addIngredient = (e: any) => {
    e.preventDefault();
    setFormData((oldValue) => {
      oldValue.ingredients.push({
        name: "",
        quantity: {
          amount: 0,
          units: "gr",
        },
      });
      return structuredClone(oldValue);
    });
  };

  const handleSimpleInput = (e: any) => {
    setFormData((oldValue) => {
      oldValue[e.target.name as string] = e.target.value;
      return structuredClone(oldValue);
    });
  };

  const handleIngredientInput = (index: number) => {
    return (ingredient: any) => {
      setFormData((oldValue) => {
        oldValue.ingredients[index] = ingredient;
        return structuredClone(oldValue);
      });
    };
  };

  const handleDayMomentInput = (index: number) => {
    setFormData((oldValue) => {
      oldValue.dayMoment[index] = !oldValue.dayMoment[index];
      return structuredClone(oldValue);
    });
  };

  const handleSubmit = (e: any) => {
    e.preventDefault();
    console.log(formData);
    addNewRecipe(formData)
    router.push("/recetario")
  };

  return (
    <div>
      <form className={styles.form} onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleSimpleInput}
          placeholder="Nombre"
        />
        <input
          type="number"
          name="cookingTime"
          value={formData.cookingTime}
          onChange={handleSimpleInput}
          placeholder="tiempo de cocinado"
        />
        <input
          type="number"
          name="people"
          value={formData.people}
          onChange={handleSimpleInput}
          placeholder="personas"
        />
        <div>
          {formData.ingredients.map((ingredient, i) => {
            return (
              <IngredientForm
                key={i + ingredient.name}
                ingredient={ingredient}
                handleInput={handleIngredientInput(i)}
              ></IngredientForm>
            );
          })}
          <button onClick={addIngredient}>+</button>
        </div>
        <textarea
          placeholder="Instrucciones"
          name="instructions"
          value={formData.instructions}
          onChange={handleSimpleInput}
        ></textarea>
        <div>
          Desayuno:{" "}
          <input
            checked={formData.dayMoment[0]}
            onChange={() => handleDayMomentInput(0)}
            type="radio"
          />
          Comida:{" "}
          <input
            checked={formData.dayMoment[1]}
            onChange={() => handleDayMomentInput(1)}
            type="radio"
          />
          Cena:{" "}
          <input
            checked={formData.dayMoment[2]}
            onChange={() => handleDayMomentInput(2)}
            type="radio"
          />
        </div>
        <button>Submit</button>
      </form>
    </div>
  );
};

export default CreateRecipe;
