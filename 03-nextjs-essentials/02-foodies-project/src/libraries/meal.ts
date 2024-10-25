import sql from "better-sqlite3";
import slugify from "slugify";
import xss from "xss";
import fs from "node:fs";

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

  const image_extension = meal.imageFile.type.split("/")[1];
  const image_name = `${
    meal.slug
  }-${new Date().getTime()}-img.${image_extension}`;

  const stream = fs.createWriteStream(`public/images/${image_name}`);
  const bufferedImage = await meal.imageFile.arrayBuffer();
  stream.write(Buffer.from(bufferedImage), (error) => {
    if (error) {
      throw new Error("Saving image failed !");
    }
  });

  meal.image = `/images/${image_name}`;

  return db
    .prepare(
      `
  INSERT INTO meals 
  (
    title, 
    summary, 
    instructions, 
    creator, 
    creator_email, 
    image, 
    slug
    )
    VALUES 
    (     
    @title, 
    @summary, 
    @instructions, 
    @creator, 
    @creator_email, 
    @image, 
    @slug  )

  `,
    )
    .run(meal);
}
