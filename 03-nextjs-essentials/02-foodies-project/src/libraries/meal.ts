import sql from "better-sqlite3";
import slugify from "slugify";
import xss from "xss";

const db = sql("meals.db");

export async function getMeals(): Promise<TypeMeal[]> {
  /* --> testing loading.tsx page */
  // await new Promise((resolve) => setTimeout(resolve, 2000));

  /* --> testing error */
  // throw new Error("Something went wrong ! ");
  return db.prepare("SELECT * FROM meals").all() as TypeMeal[];
}

export async function getSingleMeal(slug: string): Promise<TypeMeal> {
  // await new Promise((resolve) => setTimeout(resolve, 3000));
  // throw new Error("Something went wrong ! ");
  return db.prepare("SELECT * FROM meals WHERE slug= ?").get(slug) as TypeMeal;
}

export async function saveMeal(meal: TypeMeal) {
  meal.slug = slugify(`${meal.title}-${meal.creator}`, { lower: true });

  meal.instructions = xss(meal.instructions);
}
