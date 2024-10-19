import Link from "next/link";
import styles from "./meals.module.css";
import MealsGrid, { TypeMeal } from "@/components/meals/MealsGrid";
import { getMeals } from "@/libraries/meal";

export default async function MealsPage() {
  const meals: TypeMeal[] = await getMeals();

  return (
    <>
      <header className={styles.header}>
        <h1>
          Delicious meals, created{" "}
          <span className={styles.highlight}>by you</span>
        </h1>
        <p>Choose your favorite anc try it. It is easy & fun ! </p>
        <p className={styles.cta}>
          <Link href="/meals/share">Share your favorite recipe</Link>
        </p>
      </header>
      <main className={styles.main}>
        <MealsGrid meals={meals} />
      </main>
    </>
  );
}
