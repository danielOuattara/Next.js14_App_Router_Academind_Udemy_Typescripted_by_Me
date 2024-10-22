import { getMeals } from "@/libraries/meal";
import MealsGrid, { TypeMeal } from "./MealsGrid";

export default async function MealsFetcher() {
  const meals: TypeMeal[] = await getMeals();
  return <MealsGrid meals={meals} />;
}
