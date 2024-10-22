import MealItem from "./MealItem";
import styles from "./MealsGrid.module.css";

export default function MealsGrid({ meals }: TypeProps) {
  return (
    <ul className={styles.meals}>
      {meals.map((meal) => (
        <li key={meal.id}>
          <MealItem meal={meal} />
        </li>
      ))}
    </ul>
  );
}
