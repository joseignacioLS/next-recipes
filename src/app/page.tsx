import { EIngredients, EUnits, Recipe } from "@/classes/recipe";
import styles from "./page.module.scss";

const data: Recipe[] = [
  new Recipe(
    "Pasta Boloñesa",
    [
      {
        name: EIngredients.Pasta,
        quantity: {
          amount: 100,
          units: EUnits.gr,
        },
      },
      {
        name: EIngredients.TomateFrito,
        quantity: {
          amount: 100,
          units: EUnits.gr,
        },
      },
      {
        name: EIngredients.Cebolla,
        quantity: {
          amount: 1,
          units: EUnits.pieza,
        },
      },
    ],
    30,
    2
  ),
];

export default function Home() {
  return <main className={styles.main}>{
    EIngredients.Pasta
  }</main>;
}
