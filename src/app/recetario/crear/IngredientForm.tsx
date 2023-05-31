import React, { useEffect, useState } from "react";

const IngredientForm = ({
  ingredient,
  handleInput,
}: {
  ingredient: any;
  handleInput: any;
}) => {
  const handleFormInput = (e: any) => {
    const key = e.target.name;
    const value = e.target.value;

    const updatedIngredient = structuredClone(ingredient);
    switch (key) {
      case "name": {
        updatedIngredient.name = value;
        break;
      }
      case "amount": {
        updatedIngredient.quantity.amount = value;
        break;
      }
      case "units": {
        updatedIngredient.quantity.units = value;
        break;
      }
      default: {
        break;
      }
    }
    handleInput(updatedIngredient);
  };

  return (
    <div>
      <input
        type="text"
        name="name"
        value={ingredient.name}
        onChange={handleFormInput}
      />
      <input
        type="number"
        name="amount"
        value={ingredient.quantity.amount}
        onChange={handleFormInput}
      />
      <select
        name="units"
        value={ingredient.quantity.units}
        onChange={handleFormInput}
      >
        <option value="gr">gr</option>
        <option value="ml">ml</option>
        <option value="pieza">pieza</option>
      </select>
    </div>
  );
};

export default IngredientForm;
