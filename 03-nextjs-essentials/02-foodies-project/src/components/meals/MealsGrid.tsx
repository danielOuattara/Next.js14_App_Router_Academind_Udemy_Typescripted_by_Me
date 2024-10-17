import MealItem from "./MealItem";
import styles from "./MealsGrid.module.css";

export type TypeMeal = {
  id: string;
  title: string;
  slug: string;
  image: string;
  summary: string;
  creator: string;
};

type TypeProps = {
  meals: TypeMeal[];
};

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
