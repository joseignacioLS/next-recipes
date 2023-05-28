import Day from "@/components/Day";
import React from "react";

import styles from "./page.module.scss";

const daysOfWeek = [
  "Lunes",
  "Martes",
  "Miércoles",
  "Jueves",
  "Viernes",
  "Sábado",
  "Domingo",
];

const page = () => {
  const date = new Date("2023-01-14");
  const dayOfWeek = date.getDay();
  if (dayOfWeek !== 0) {
    const mod = dayOfWeek || 7;
    date.setDate(date.getDate() - mod + 1);
  }

  return (
    <div className={styles.week}>
      {daysOfWeek.map((day: string, i: number) => {
        const date = new Date();
        date.setDate(date.getDate() + i);
        return <Day date={date}></Day>;
      })}
    </div>
  );
};

export default page;
