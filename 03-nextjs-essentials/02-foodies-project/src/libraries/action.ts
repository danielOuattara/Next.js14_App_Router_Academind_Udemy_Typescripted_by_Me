"use server"; // creates a server action
import { saveMeal } from "./meal";
import { redirect } from "next/navigation";

export async function shareMeal(formData: FormData) {
  const meal = {
    title: formData.get("title"),
    summary: formData.get("summary"),
    instructions: formData.get("instructions"),
    imageFile: formData.get("image"),
    creator: formData.get("creator"),
    creator_email: formData.get("email"),
  } as TypeMeal;

  //   console.log(meal);

  await saveMeal(meal);
  redirect("/meals");
}
