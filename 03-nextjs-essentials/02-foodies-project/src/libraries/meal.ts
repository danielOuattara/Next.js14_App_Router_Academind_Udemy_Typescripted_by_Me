import { TypeMeal } from "@/components/meals/MealsGrid";
import sql from "better-sqlite3";

const db = sql("meals.db");

export async function getMeals(): Promise<TypeMeal[]> {
  return db.prepare("SELECT * FROM meals").all() as TypeMeal[];
}
