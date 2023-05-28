import React from "react";

import styles from "./Day.module.scss";

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
  return (
    <div className={styles.day}>
      <p>
        {dayDict[date.getDay()]} {date.toLocaleDateString("es-ES")}
      </p>
      <div className={styles.dishes}>
        <div>lunch</div>
        <div>dinner</div>
      </div>
    </div>
  );
};

export default Day;
