import Link from "next/link";
import styles from "./meals.module.css";
import { Suspense } from "react";
import MealsFetcher from "@/components/meals/MealFetcher";
import MealsLoading from "./meals-loading";

export default function MealsPage() {
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
        <Suspense fallback={<MealsLoading />}>
          <MealsFetcher />
        </Suspense>
      </main>
    </>
  );
}
